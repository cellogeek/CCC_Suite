
"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpenText, Music, FileText, Download, ChevronsRight, Settings, UploadCloud, KeyRound, Eye, FileUp, Loader2, AlertCircle, PlayCircle, TestTube2, Workflow, TerminalSquare, Globe, ListChecks, EyeOff, Save, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { getApiKey, saveApiKey } from '@/lib/actions'; // Import actions for API key

// --- Helper & Utility Functions ---
const GlassCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 sm:p-8 ${className}`}>
    {children}
  </div>
);

const ActionButton = ({ children, onClick, icon: Icon, className = '', disabled = false, type = "button" }: { children: React.ReactNode, onClick?: () => void, icon?: React.ElementType, className?: string, disabled?: boolean, type?: "button" | "submit" | "reset" }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-all duration-200 disabled:bg-orange-800/50 disabled:cursor-not-allowed ${className}`}
  >
    {Icon && <Icon size={18} />}
    {children}
  </button>
);

const rtfEscape = (str: string | undefined): string => String(str || '').replace(/\\/g, '\\\\').replace(/{/g, '\\{').replace(/}/g, '\\}');

// --- CUSTOM PARSING ENGINE V9 with Smart Footer Detection ---
interface SongLineItem {
  chord: string | null;
  lyrics: string;
}

interface SongLine {
  type: 'lyrics' | 'section' | 'comment' | 'chorus_start' | 'chorus_end';
  items?: SongLineItem[];
  content?: string;
}

export interface ParsedSong {
  title: string;
  artist: string;
  key: string;
  meta: Record<string, string>;
  footer_comments: string[];
  body: SongLine[];
}

const CustomParserV9 = {
    parse(text: string): ParsedSong {
        const song: ParsedSong = {
            title: 'Untitled Song',
            artist: '',
            key: 'C',
            meta: {},
            footer_comments: [], 
            body: [],
        };
        const lines = text.split(/\r?\n/);
        let inFooterSection = false;

        lines.forEach(line => {
            const trimmedLine = line.trim();

            if (!inFooterSection && !trimmedLine.startsWith('{') && trimmedLine.toLowerCase().startsWith('ccli')) {
                inFooterSection = true;
            }

            if (inFooterSection) {
                song.footer_comments.push(line);
                return; 
            }
            
            const directiveMatch = trimmedLine.match(/^{\s*([^:]+?)\s*:\s*(.+?)\s*}/) || trimmedLine.match(/^{\s*(.+?)\s*}/);
            if (directiveMatch) {
                const key = (directiveMatch[1] || '').toLowerCase().trim();
                const value = (directiveMatch[2] || '').trim();
                switch(key) {
                    case 't': case 'title': song.title = value; return;
                    case 'k': case 'key': song.key = value; return;
                    case 'a': case 'artist': song.artist = value; return;
                    case 'soc': case 'start_of_chorus': song.body.push({ type: 'chorus_start' }); return;
                    case 'eoc': case 'end_of_chorus': song.body.push({ type: 'chorus_end' }); return;
                    case 'c': case 'comment': song.body.push({ type: 'comment', content: value }); return;
                    case 'cf': case 'comment_footer': song.footer_comments.push(value); return;
                    default: song.meta[key] = value; return;
                }
            }
            
            const sectionMatch = trimmedLine.match(/^\[([^\[\]]+)\]$/);
             if (sectionMatch) {
                 const commonSections = ['verse', 'chorus', 'bridge', 'intro', 'outro', 'instrumental', 'pre-chorus', 'tag', 'v', 'b', 'i', 'o'];
                 const content = sectionMatch[1].toLowerCase();
                 if (commonSections.some(s => content.startsWith(s))) {
                    song.body.push({ type: 'section', content: sectionMatch[1] });
                    return;
                 }
            }
            
            if (trimmedLine === '') {
                 song.body.push({ type: 'lyrics', items: [] });
                 return;
            }
            
            const lineItems: SongLineItem[] = [];
            const parts = line.split(/(\[[^\]]+\])/g).filter(Boolean);
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                if (part.startsWith('[')) {
                    const chord = part.substring(1, part.length - 1);
                    const nextPartIsLyrics = i + 1 < parts.length && !parts[i + 1].startsWith('[');
                    const lyrics = nextPartIsLyrics ? parts[i + 1] : '';
                    lineItems.push({ chord, lyrics });
                    if (nextPartIsLyrics) { i++; }
                } else {
                    lineItems.push({ chord: null, lyrics: part });
                }
            }

            if (lineItems.length > 0) {
                 song.body.push({ type: 'lyrics', items: lineItems });
            }
        });
        return song;
    }
};

// --- Custom Transposer Engine ---
const CustomTransposer = {
    notes: {
        sharp: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
        flat:  ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"],
    },
    transpose(chordString: string | null, interval: number): string | null {
        if (!chordString || interval === 0) return chordString;
        const chordRegex = /^([A-G][#b]?)(.*)/;
        const match = chordString.match(chordRegex);
        if (!match) return chordString;
        const [, root, suffix] = match;
        const sharpIndex = this.notes.sharp.indexOf(root);
        const flatIndex = this.notes.flat.indexOf(root);
        let newRoot: string;
        if (sharpIndex !== -1) {
            newRoot = this.notes.sharp[(sharpIndex + interval + 12) % 12];
        } else if (flatIndex !== -1) {
            newRoot = this.notes.flat[(flatIndex + interval + 12) % 12];
        } else {
            return chordString;
        }
        return newRoot + suffix;
    }
};

// --- Main App Components ---
const AppSettings = ({ appApiKey, setAppApiKey }: { appApiKey: string, setAppApiKey: (key: string) => void }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState(appApiKey);
  const [showApiKey, setShowApiKey] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setInputFieldValue(appApiKey);
  }, [appApiKey]);

  useEffect(() => {
    if (user) {
      setIsProcessing(true);
      getApiKey(user.uid)
        .then(dbKey => {
          if (dbKey && dbKey !== appApiKey) {
            setAppApiKey(dbKey);
            setInputFieldValue(dbKey);
          } else if (!dbKey && appApiKey) {
            setInputFieldValue(appApiKey);
          }
        })
        .catch(err => {
          console.error("Error fetching API key from DB:", err);
          toast({ title: "Error", description: "Could not fetch your saved API key.", variant: "destructive" });
        })
        .finally(() => setIsProcessing(false));
    }
  }, [user, setAppApiKey, appApiKey, toast]);
  
  const setInputFieldValue = (value: string) => {
      setInputValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to save settings.", variant: "destructive" });
      return;
    }
    setIsProcessing(true);
    try {
      const result = await saveApiKey(user.uid, inputValue);
      if (result.success) {
        setAppApiKey(inputValue);
        toast({ title: "Success", description: result.message });
      } else {
        toast({ title: "Error Saving Key", description: result.message, variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "An unexpected error occurred.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClearKey = async () => {
    if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to clear settings.", variant: "destructive" });
      return;
    }
    setIsProcessing(true);
    try {
      const result = await saveApiKey(user.uid, ""); 
      if (result.success) {
        setInputValue("");
        setAppApiKey(""); 
        toast({ title: "API Key Cleared", description: result.message });
      } else {
        toast({ title: "Error Clearing Key", description: result.message, variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "An unexpected error occurred while clearing the key.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };


  return (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Settings size={32} className="text-orange-400" />
          Application Settings
        </h2>
        <GlassCard>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <KeyRound className="text-blue-300" />
                API Keys
            </h3>
            <p className="text-blue-200 mb-4 text-sm">Manage API keys for external services. Your ESV API key is stored securely in Firestore per user.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                  <label htmlFor="esv-api-key" className="block text-sm font-medium text-blue-200">ESV API Key</label>
                  <div className="flex items-center gap-2">
                    <input id="esv-api-key" type={showApiKey ? "text" : "password"} placeholder="Enter your ESV API Key" 
                        value={inputValue} 
                        onChange={(e) => setInputFieldValue(e.target.value)}
                        className="w-full max-w-md p-3 bg-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400" 
                        disabled={isProcessing || !user}
                        />
                    <ActionButton 
                        type="button" 
                        onClick={() => setShowApiKey(!showApiKey)} 
                        className="p-3"
                        disabled={isProcessing || !user}
                        icon={showApiKey ? EyeOff : Eye}
                        aria-label={showApiKey ? "Hide API Key" : "Show API Key"}
                    />
                  </div>
                  <p className="text-xs text-blue-300/80">
                    Obtain an API key from the <a href="https://api.esv.org/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">ESV API website</a>.
                  </p>
              </div>
              <div className="flex items-center gap-2">
                <ActionButton type="submit" icon={Save} disabled={isProcessing || !user}>
                    {isProcessing ? "Saving..." : "Save API Key"}
                </ActionButton>
                {inputValue && (
                    <ActionButton type="button" icon={Trash2} onClick={handleClearKey} disabled={isProcessing || !user} className="bg-red-600 hover:bg-red-700">
                        Clear Key
                    </ActionButton>
                )}
              </div>
              {!user && <p className="text-sm text-orange-400">Please log in to manage API keys.</p>}
            </form>
        </GlassCard>
    </div>
  );
};


interface FetchedVerse {
    id: number;
    reference: string;
    text: string;
}

const SlideCreator = ({ apiKey }: { apiKey: string }) => {
  const [verseInput, setVerseInput] = useState('');
  const [parsedVerses, setParsedVerses] = useState<FetchedVerse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFormatted, setIsFormatted] = useState(false);
  const { toast } = useToast();

  const handleFetchVerses = async () => {
    if (!verseInput) return;
    if (!apiKey) {
      setError("Please enter your ESV API Key in the Settings page first.");
      toast({ title: "API Key Missing", description: "Please set your ESV API Key in Settings.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    setError('');
    setParsedVerses([]);
    setIsFormatted(false);
    
    const query = verseInput.split(';').map(v => v.trim()).filter(Boolean).join(',');
    const url = `https://api.esv.org/v3/passage/text/?q=${encodeURIComponent(query)}&include-headings=false&include-footnotes=false&include-verse-numbers=false`;
    
    try {
        const response = await fetch(url, {
            headers: { 'Authorization': `Token ${apiKey}` }
        });
        if (!response.ok) {
            const data = await response.json();
            throw new Error(`API request failed: ${data.detail || response.statusText}`);
        }
        const data = await response.json();
        if (data.passages && data.passages.length > 0) {
             setParsedVerses([{id: Date.now(), reference: data.query, text: data.passages.join('\n').trim()}]);
             toast({ title: "Success!", description: "Verses fetched successfully."});
        } else {
            setError('Verse not found or invalid query. Try a full reference (e.g., John 3:16).');
            toast({ title: "Error", description: 'Verse not found or invalid query.', variant: "destructive"});
        }
    } catch (err: any) {
        setError(err.message);
        toast({ title: "Fetch Error", description: err.message, variant: "destructive"});
    } finally {
        setIsLoading(false);
    }
  };

  const handleFormatSlideData = () => {
    if (parsedVerses.length === 0) {
        toast({title: "No Verses", description: "Fetch some verses first to format.", variant: "default"});
        return;
    }
    setIsFormatted(true);
    toast({title: "Formatted", description: "Slide data is ready for RTF download."});
  };
  
  const handleGenerateRtf = () => {
    if (!isFormatted || parsedVerses.length === 0) {
        toast({title: "Not Ready", description: "Please fetch and format verses before downloading.", variant: "default"});
        return;
    }
    let rtf = `{\\rtf1\\ansi\\deff0 {\\fonttbl{\\f0 Arial;}} \\fs24`;
    parsedVerses.forEach(verse => {
        rtf += `{\\pard\\b ${rtfEscape(verse.reference)}\\b0\\par}`;
        rtf += `{\\pard ${rtfEscape(verse.text.replace(/\n/g, '\\par '))}\\par}`;
        rtf += `{\\pard\\par}`;
    });
    rtf += `}`;
    const blob = new Blob([rtf], { type: 'application/rtf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `slide-notes-${new Date().toISOString().split('T')[0]}.rtf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({title: "RTF Downloaded", description: "Slide notes RTF file generated."});
  };

  return (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <ListChecks size={32} className="text-orange-400" /> Slide Creator
        </h2>
      <GlassCard>
        <h3 className="text-xl font-semibold text-white mb-4">1. Input Verses</h3>
        <p className="text-blue-200 mb-4 text-sm">Enter verse references separated by semicolons (e.g., Jn 3:16; Rom 8:28).</p>
        <div className="space-y-4">
            <textarea value={verseInput} onChange={(e) => setVerseInput(e.target.value)}
                className="w-full h-24 p-3 bg-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="e.g., John 3:16; Romans 8:1; Psalm 23:1-6" />
            <ActionButton onClick={handleFetchVerses} icon={ChevronsRight} className="w-full sm:w-auto" disabled={isLoading || !verseInput}>
                {isLoading ? 'Fetching...' : 'Fetch Verses'}
            </ActionButton>
            {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-md text-sm flex items-center gap-2"><AlertCircle size={18} /> {error}</p>}
        </div>
      </GlassCard>
      
      <GlassCard>
        <h3 className="text-xl font-semibold text-white mb-4">2. Process & Download</h3>
        <div className="flex flex-col sm:flex-row gap-4">
            <ActionButton 
                onClick={handleFormatSlideData} 
                icon={TestTube2} 
                disabled={isLoading || parsedVerses.length === 0}
                className="flex-1"
            >
                Format Slide Data
            </ActionButton>
            <ActionButton 
                onClick={handleGenerateRtf} 
                icon={Download} 
                disabled={!isFormatted || parsedVerses.length === 0}
                className="flex-1"
            >
                Download RTF
            </ActionButton>
        </div>
      </GlassCard>
    </div>
  );
};

// --- HELPER HOOK for ChordProImporter ---
const useDebounce = <T,>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedValue(value); }, delay);
        return () => { clearTimeout(handler); };
    }, [value, delay]);
    return debouncedValue;
};

// --- PREVIEW COMPONENT for ChordProImporter ---
const SongPreview = ({ htmlContent }: {htmlContent: string}) => {
    if (!htmlContent) {
        return (
            <div className="flex items-center justify-center h-full text-center text-blue-200">
                <p>Your formatted song will appear here once you start typing.</p>
            </div>
        );
    }
    return (
        <iframe
            srcDoc={htmlContent}
            title="Song Preview"
            className="w-full h-full bg-white rounded-lg border-none"
            sandbox="allow-scripts"
        />
    );
};

const musicalKeys = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];

// --- ChordProImporter Component ---
const ChordProImporter = () => {
    const [chordProInput, setChordProInput] = useState('');
    const [targetKey, setTargetKey] = useState('C');
    const [simplifyChords, setSimplifyChords] = useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showArtist, setShowArtist] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const [parsedSong, setParsedSong] = useState<ParsedSong | null>(null);
    const [log, setLog] = useState<string[]>([]);
    const debouncedChordProInput = useDebounce(chordProInput, 500);
    
    const addLog = (message: string, data?: any) => {
        const timestamp = new Date().toLocaleTimeString();
        let logMessage = `[${timestamp}] ${message}`;
        if(data) { 
          try {
            logMessage += `\n${JSON.stringify(data, (key, value) =>
              typeof value === 'bigint' ? value.toString() : value, 2)}`;
          } catch (e) {
            logMessage += `\n[Error serializing data for log]`;
          }
        }
        setLog(prev => [logMessage, ...prev.slice(0, 99)]);
    };

    useEffect(() => {
        setLog([]);
        addLog("--- AUTO-PARSING (V9) ---");
        if (!debouncedChordProInput) {
            addLog("Input is empty. Clearing song.");
            setParsedSong(null);
            return;
        }
        try {
            const song = CustomParserV9.parse(debouncedChordProInput);
            setParsedSong(song);
            if (song.key && musicalKeys.includes(song.key)) {
                setTargetKey(song.key);
            } else {
                 addLog(`Parsed key "${song.key}" not in standard keys. Defaulting target to C.`);
                setTargetKey('C'); 
            }
        } catch (e: any) {
            addLog(`FATAL ERROR: ${e.message}`);
            setParsedSong(null);
        }
    }, [debouncedChordProInput]);

    const processedSong = useMemo(() => {
        if (!parsedSong) return null;
        const originalKey = parsedSong.key || 'C';
        const notes: Record<string, number> = { 'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11 };
        
        const originalRoot = originalKey.replace(/m$/, ''); 
        const targetRoot = targetKey.replace(/m$/, '');
        
        let interval = 0;
        if ((originalRoot in notes) && (targetRoot in notes)) {
             interval = notes[targetRoot] - notes[originalRoot];
        } else {
            addLog(`Could not determine interval: Original key root "${originalRoot}" or Target key root "${targetRoot}" not found in notes map. Transposition may be incorrect.`);
        }
        
        return {
            ...parsedSong,
            key: targetKey,
            body: parsedSong.body.map(line => {
                if (line.type !== 'lyrics' || !line.items) return line;
                return { ...line, items: line.items.map(item => ({ ...item, chord: CustomTransposer.transpose(item.chord, interval), })) };
            }).filter(Boolean)
        };
    }, [parsedSong, targetKey]);

    const simplifyChordDisplay = (chord: string | null): string => {
        if (!chord || !simplifyChords) return chord || '';
        const rootMatch = chord.match(/^[A-G][#b]?/);
        if (!rootMatch) return chord;
        const root = rootMatch[0];
        const restOfChord = chord.substring(root.length);
        if (restOfChord.startsWith('m')) return root + 'm'; 
        return root; 
    };

    const processedSongHtml = useMemo(() => {
        if (!processedSong) return '';
        addLog("--- RE-GENERATING HTML (DejaVu Sans Mono Bold, Black Text, No Italics, Improved Spacing) ---");
        const songToFormat = processedSong;
        
        let html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${rtfEscape(songToFormat.title)}</title>
            <link href="https://cdn.jsdelivr.net/npm/dejavu-sans-mono@1.0.0/css/dejavu-sans-mono.min.css" rel="stylesheet">
            <style>
                body { font-family: 'DejaVu Sans Mono', Menlo, Monaco, Consolas, monospace; font-size: 18pt; line-height: 1.2; font-weight: bold; }
                .cpro { width: 100%; }
                h1 { font-size: 24pt; text-align: center; font-weight: bold; color: black; margin-bottom: 0; font-family: Arial, sans-serif; }
                .meta-info { font-size: 14pt; text-align: center; color: black; font-weight: bold; margin-bottom: 36px; font-family: Arial, sans-serif; }
                .line-pair { margin-bottom: 18pt; }
                .chord-line, .lyric-line { font-family: 'DejaVu Sans Mono', Menlo, Monaco, Consolas, monospace; font-size: 18pt; white-space: pre; font-weight: bold; } 
                .lyric-line { color: black; }
                .chord-line { color: #ff0000; }
                .section { font-weight: bold; color: black; font-family: Arial, sans-serif; }
                .comment { color: black; font-weight: bold; font-family: Arial, sans-serif; } 
                .footer { font-size: 10pt; color: black; font-weight: bold; margin-top: 36px; text-align: center; font-family: Arial, sans-serif; }
            </style></head><body><div class="cpro"><h1>${rtfEscape(songToFormat.title)}</h1>`;
        
        let metaHtml = '<div class="meta-info">';
        if (showArtist && songToFormat.artist) {
            metaHtml += `Artist: ${rtfEscape(songToFormat.artist)}<br/>`;
        }
        metaHtml += `<span class="chord-line" style="font-family: Arial, sans-serif;">Key: ${rtfEscape(songToFormat.key)}</span></div>`; 
        html += metaHtml;

        songToFormat.body.forEach((line, index) => {
            if (line.type === 'section') {
                if (index > 0) html += `<br><br>`; 
                html += `<div class="section">${rtfEscape(line.content)}</div>`;
            } else if (line.type === 'comment') {
                html += `<div class="comment">${rtfEscape(line.content)}</div>`;
            } else if (line.type === 'lyrics' && line.items) {
                if (line.items.length === 0) {  return; } 
                
                let chordLine = '';
                let lyricLine = '';
                line.items.forEach((item, itemIndex) => {
                    const chord = simplifyChordDisplay(item.chord);
                    const lyrics = item.lyrics || '';
                    
                    let effectiveLength = lyrics.length;
                    if (itemIndex > 0) {
                        effectiveLength = Math.round(effectiveLength * 1.5); 
                    }

                    if (chord) {
                        chordLine += chord;
                        const padding = Math.max(0, effectiveLength - chord.length);
                        chordLine += ' '.repeat(padding);
                    } else {
                        chordLine += ' '.repeat(effectiveLength);
                    }
                    lyricLine += lyrics;
                });
                
                html += `<div class="line-pair">`;
                if(chordLine.trim().length > 0) {
                    html += `<div class="chord-line">${chordLine}</div>`;
                }
                html += `<div class="lyric-line">${lyricLine}</div>`;
                html += `</div>`;
            }
        });

        const footerMeta = songToFormat.meta || {};
        if (showFooter) {
            let footerContent = '';
            if (footerMeta.ccli) footerContent += `CCLI Song #${rtfEscape(footerMeta.ccli)}<br>`;
            if (footerMeta.copyright) footerContent += `${rtfEscape(footerMeta.copyright)}<br>`;
            if (footerMeta.footer) footerContent += `${rtfEscape(footerMeta.footer)}<br>`;
            if (songToFormat.footer_comments && songToFormat.footer_comments.length > 0) {
                if (footerContent) footerContent += '<br>'; 
                footerContent += songToFormat.footer_comments.map(fc => rtfEscape(fc)).join('<br>');
            }
            if(footerContent) { html += `<div class="footer">${footerContent}</div>`; }
        }
        html += `</div></body></html>`;
        return html;
    }, [processedSong, simplifyChords, showArtist, showFooter]);

    const generateRtfContent = (): string | null => {
        if (!processedSong) return null;
        addLog("--- GENERATING RTF (Arial, Corrected Braces & Spacing) ---");
        const songToFormat = processedSong;
        
        let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Arial;}}{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red128\\green128\\blue128;}\\pard\\slmult1\\f0\\fs36`;

        rtf += `{\\pard\\qc\\b\\fs48 ${rtfEscape(songToFormat.title)}\\par}`;
        
        let metaRtf = `{\\pard\\qc\\fs28\\cf2 `;
        if (showArtist && songToFormat.artist) {
            metaRtf += `Artist: ${rtfEscape(songToFormat.artist)}   `;
        }
        metaRtf += `{\\b\\fs36\\cf1 Key: ${rtfEscape(songToFormat.key)}}}`; 
        rtf += metaRtf + `\\par`;
        
        songToFormat.body.forEach((line, index) => {
            rtf += `\\pard `; 
            if (line.type === 'section') {
                if (index > 0) rtf += `\\par\\par`; 
                rtf += `{\\b ${rtfEscape(line.content)}}`;
            } else if (line.type === 'comment') {
                rtf += `{\\i ${rtfEscape(line.content)}}`;
            } else if (line.type === 'lyrics' && line.items) {
                if (line.items.length === 0) { /* no explicit \par needed if we add one after anyway */ }
                else {
                    let chordLine = '';
                    let lyricLine = '';
                    line.items.forEach((item, itemIndex) => {
                        const chord = simplifyChordDisplay(item.chord) || '';
                        const lyrics = item.lyrics || '';
                        let effectiveLength = lyrics.length;
                        if (itemIndex > 0) {
                            effectiveLength = Math.round(effectiveLength * 1.5);
                        }
                        if (chord) {
                            chordLine += chord;
                            const padding = Math.max(0, effectiveLength - chord.length);
                            chordLine += ' '.repeat(padding);
                        } else {
                            chordLine += ' '.repeat(effectiveLength);
                        }
                        lyricLine += lyrics;
                    });
                    
                    if (chordLine.trim().length > 0) {
                        rtf += `{\\b\\cf1 ${rtfEscape(chordLine)}}\\par\\pard `;
                    }
                    rtf += `{\\cf0 ${rtfEscape(lyricLine)}}`;
                }
            }
            rtf += `\\par`;
        });
        
        const footerMeta = songToFormat.meta || {};
        if (showFooter) {
            let footerRtfContent = '';
            if (footerMeta.ccli) footerRtfContent += `CCLI Song #${rtfEscape(footerMeta.ccli)}\\line `;
            if (footerMeta.copyright) footerRtfContent += `${rtfEscape(footerMeta.copyright)}\\line `;
            if (footerMeta.footer) footerRtfContent += `${rtfEscape(footerMeta.footer)}\\line `;
            if (songToFormat.footer_comments && songToFormat.footer_comments.length > 0) {
                if(footerRtfContent.trim() && !footerRtfContent.endsWith('\\line ')) footerRtfContent += '\\line ';
                footerRtfContent += songToFormat.footer_comments.map(fc => rtfEscape(fc)).join('\\line ');
            }
            if (footerRtfContent.endsWith('\\line ')) {
                footerRtfContent = footerRtfContent.substring(0, footerRtfContent.length - '\\line '.length);
            }
            if(footerRtfContent) {
                rtf += `\\par\\par{\\pard\\qc\\cf2\\fs20 ${footerRtfContent}\\par}`;
            }
        }

        rtf += `}`;
        return rtf;
    };
    
    const generateRtfContentMono = (): string | null => {
        if (!processedSong) return null;
        addLog("--- GENERATING RTF (Mono, Corrected Braces & Spacing) ---");
        const songToFormat = processedSong;
        
        let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Courier New;}{\\f1 Arial;}}{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red128\\green128\\blue128;}\\pard\\slmult1\\f0\\fs36`;
        
        rtf += `{\\pard\\qc\\b\\f1\\fs48 ${rtfEscape(songToFormat.title)}\\par}`;
        
        let metaRtf = `{\\pard\\qc\\f1\\fs28\\cf2 `;
        if (showArtist && songToFormat.artist) {
            metaRtf += `Artist: ${rtfEscape(songToFormat.artist)}   `;
        }
        metaRtf += `{\\b\\f1\\fs36\\cf1 Key: ${rtfEscape(songToFormat.key)}}}`; 
        rtf += metaRtf + `\\par`;
        
        songToFormat.body.forEach((line, index) => {
            rtf += `\\pard `;
            if (line.type === 'section') {
                if (index > 0) rtf += `\\par\\par`;
                rtf += `{\\b\\f1 ${rtfEscape(line.content)}}`;
            } else if (line.type === 'comment') {
                rtf += `{\\i\\f1 ${rtfEscape(line.content)}}`;
            } else if (line.type === 'lyrics' && line.items) {
                 if (line.items.length === 0) { /* no explicit \par needed */ }
                 else {
                    let chordLine = '';
                    let lyricLine = '';
                    line.items.forEach((item, itemIndex) => {
                        const chord = simplifyChordDisplay(item.chord) || '';
                        const lyrics = item.lyrics || '';
                        let effectiveLength = lyrics.length;
                        if (itemIndex > 0) {
                            effectiveLength = Math.round(effectiveLength * 1.5);
                        }
                        if (chord) {
                            chordLine += chord;
                            const padding = Math.max(0, effectiveLength - chord.length);
                            chordLine += ' '.repeat(padding);
                        } else {
                            chordLine += ' '.repeat(effectiveLength);
                        }
                        lyricLine += lyrics;
                    });
                    
                    if (chordLine.trim().length > 0) {
                        rtf += `{\\b\\cf1 ${rtfEscape(chordLine)}}\\par\\pard `;
                    }
                    rtf += `{\\cf0 ${rtfEscape(lyricLine)}}`;
                }
            }
            rtf += `\\par`;
        });
        
        const footerMeta = songToFormat.meta || {};
        if (showFooter) {
            let footerRtfContent = '';
            if (footerMeta.ccli) footerRtfContent += `CCLI Song #${rtfEscape(footerMeta.ccli)}\\line `;
            if (footerMeta.copyright) footerRtfContent += `${rtfEscape(footerMeta.copyright)}\\line `;
            if (footerMeta.footer) footerRtfContent += `${rtfEscape(footerMeta.footer)}\\line `;
            if (songToFormat.footer_comments && songToFormat.footer_comments.length > 0) {
                if(footerRtfContent.trim() && !footerRtfContent.endsWith('\\line ')) footerRtfContent += '\\line ';
                footerRtfContent += songToFormat.footer_comments.map(fc => rtfEscape(fc)).join('\\line ');
            }
            if (footerRtfContent.endsWith('\\line ')) {
                footerRtfContent = footerRtfContent.substring(0, footerRtfContent.length - '\\line '.length);
            }
            if(footerRtfContent) {
                rtf += `\\par\\par{\\pard\\qc\\f1\\cf2\\fs20 ${footerRtfContent}\\par}`;
            }
        }

        rtf += `}`;
        return rtf;
    };

    const createAndDownloadBlob = (content: string | null, type: string, extension: string) => {
        if (!content) { 
            addLog(`${extension.toUpperCase()} EXPORT FAILED: No content to export.`); 
            return; 
        }
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const safeTitle = (processedSong?.title || "song").replace(/[^a-z0-9]/gi, '_').toLowerCase();
        a.download = `${safeTitle}_${targetKey}.${extension}`;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        addLog(`${extension.toUpperCase()} file downloaded successfully.`);
    };

    const handleExportHtml = () => createAndDownloadBlob(processedSongHtml, 'text/html', 'html');
    const handleExportRtf = () => createAndDownloadBlob(generateRtfContent(), 'application/rtf', 'rtf-arial');
    const handleExportRtfMono = () => createAndDownloadBlob(generateRtfContentMono(), 'application/rtf', 'rtf-mono');
    const handleFileImportClick = () => fileInputRef.current?.click();
    
    const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setLog([]); 
            addLog(`Importing file: ${file.name}`);
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target?.result as string;
                setChordProInput(fileContent);
                addLog("File content loaded. Auto-parsing will begin shortly.");
            };
            reader.onerror = (e) => {
              addLog(`ERROR: Failed to read file: ${e.target?.error?.message}`);
            }
            reader.readAsText(file);
        }
        if(fileInputRef.current) fileInputRef.current.value = ""; 
    };

    const handleDownloadLog = () => {
        addLog("Downloading debug log.");
        const logContent = log.slice().reverse().join('\n\n'); 
        createAndDownloadBlob(logContent, 'text/plain', 'log.txt');
    };


    return (
         <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3"><Music size={32} className="text-orange-400" />ChordPro Importer</h2>
                <div className="flex gap-2 flex-wrap">
                    <ActionButton onClick={handleExportRtf} icon={FileText} disabled={!processedSong}>Export RTF (Arial)</ActionButton>
                    <ActionButton onClick={handleExportRtfMono} icon={FileText} disabled={!processedSong}>Export RTF (Mono)</ActionButton>
                    <ActionButton onClick={handleExportHtml} icon={Download} disabled={!processedSong}>Export to HTML</ActionButton>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <GlassCard>
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-white flex items-center gap-2"><FileText size={22}/>1. Edit Song</h3>
                            <input type="file" ref={fileInputRef} onChange={handleFileSelected} className="hidden" accept=".pro,.cho,.chordpro,.txt,text/plain" />
                            <ActionButton onClick={handleFileImportClick} icon={FileUp} className="px-3 py-1 text-sm">Import File</ActionButton>
                        </div>
                        <textarea value={chordProInput} onChange={(e) => setChordProInput(e.target.value)}
                            className="w-full h-64 p-3 bg-white/10 rounded-lg text-white placeholder-blue-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="{title: My Song}...[C]Amazing [G]grace..." />
                    </GlassCard>
                    <GlassCard className={!parsedSong ? 'opacity-50 pointer-events-none' : ''}>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><Workflow size={22} />2. Process & Format</h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="key-select" className="block text-sm font-medium text-blue-200 mb-2">Transpose to Key</label>
                                <select id="key-select" value={targetKey} onChange={e => setTargetKey(e.target.value)}
                                    className="w-full p-3 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none bg-no-repeat bg-right pr-8" 
                                    style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em'}}
                                    disabled={!parsedSong}>
                                    {musicalKeys.map(k => <option key={k} value={k} className="bg-blue-800 text-white">{k}</option>)}
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-blue-200">Simplify advanced chords?</span>
                                <label className="flex items-center cursor-pointer">
                                    <div className="relative"><input type="checkbox" className="sr-only" checked={simplifyChords} onChange={() => setSimplifyChords(!simplifyChords)} disabled={!parsedSong} /><div className={`block ${simplifyChords ? 'bg-orange-500' : 'bg-blue-800'} w-14 h-8 rounded-full`}></div><div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${simplifyChords ? 'transform translate-x-6' : ''}`}></div></div>
                                </label>
                            </div>
                            <div className="border-t border-white/20 pt-4 mt-4">
                                <h4 className="text-lg font-semibold text-white mb-3">Output Options</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between"><span className="font-medium text-blue-200">Show Artist Info</span><label className="flex items-center cursor-pointer"><div className="relative"><input type="checkbox" className="sr-only" checked={showArtist} onChange={()=>setShowArtist(!showArtist)} disabled={!parsedSong}/><div className={`block ${showArtist ?'bg-orange-500':'bg-blue-800'} w-14 h-8 rounded-full`}></div><div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${showArtist ?'transform translate-x-6':''}`}></div></div></label></div>
                                    <div className="flex items-center justify-between"><span className="font-medium text-blue-200">Show Footer (CCLI, Copyright)</span><label className="flex items-center cursor-pointer"><div className="relative"><input type="checkbox" className="sr-only" checked={showFooter} onChange={()=>setShowFooter(!showFooter)} disabled={!parsedSong}/><div className={`block ${showFooter ?'bg-orange-500':'bg-blue-800'} w-14 h-8 rounded-full`}></div><div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${showFooter ?'transform translate-x-6':''}`}></div></div></label></div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
                <GlassCard className="lg:h-full flex flex-col">
                     <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><Eye size={22}/>3. Live Preview</h3>
                     <div className="h-[calc(100vh-12rem)] min-h-[300px] bg-black/20 rounded-lg p-2 flex-grow"> 
                        <SongPreview htmlContent={processedSongHtml} />
                     </div>
                </GlassCard>
            </div>
            <GlassCard>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2"><TerminalSquare size={22}/>Debug Log</h3>
                    <ActionButton onClick={handleDownloadLog} icon={Download} className="px-3 py-1 text-sm" disabled={log.length === 0}>Download Log</ActionButton>
                </div>
                <textarea
                    readOnly
                    value={log.join('\n\n')}
                    className="w-full h-48 p-3 bg-black/30 rounded-lg text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Actions will be logged here..."
                />
            </GlassCard>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
  const [activeView, setActiveView] = useState('chordpro');
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_ESV_API_KEY || "4650182c3416ca7222ac852d5f671e6884cedabf");


  const NavLink = ({ view, label, icon: Icon }: { view: string, label: string, icon: React.ElementType }) => (
    <button onClick={() => setActiveView(view)}
      className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-colors duration-200 ${
        activeView === view ? 'bg-orange-500 text-white font-bold shadow-lg' : 'text-blue-200 hover:bg-white/10 hover:text-white'}`}>
      <Icon size={22} />
      <span>{label}</span>
    </button>
  );

  const renderActiveView = () => {
    switch (activeView) {
      case 'slideCreator': return <SlideCreator apiKey={apiKey} />;
      case 'chordpro': return <ChordProImporter />;
      case 'settings': return <AppSettings appApiKey={apiKey} setAppApiKey={setApiKey} />;
      default: return <ChordProImporter />;
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
       <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
         @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');
         body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
         .font-mono { font-family: 'Fira Mono', monospace; }
         .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.6); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,165,0,0.8); }
       `}</style>
       <div className="flex flex-col md:flex-row min-h-screen">
         <aside className="w-full md:w-72 bg-black/20 p-4 md:p-6 flex-shrink-0 shadow-2xl">
           <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-500 rounded-lg shadow-md">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              </div>
             <h1 className="text-3xl font-extrabold tracking-tight">CCC <span className="text-orange-400">Suite</span></h1>
           </div>
           <nav className="space-y-2">
             <NavLink view="chordpro" label="ChordPro Editor" icon={Music} />
             <NavLink view="slideCreator" label="Slide Creator" icon={ListChecks} />
             <div className="pt-3 mt-3 border-t border-white/10">
                 <NavLink view="settings" label="Settings" icon={Settings} />
             </div>
           </nav>
         </aside>
         <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto"> 
           {renderActiveView()}
         </main>
       </div>
    </div>
  );
}
