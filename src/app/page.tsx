
"use client";

import React, { useState, useEffect, useMemo, useRef, useTransition } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Music, FileText, Download, FileUp, Workflow, TerminalSquare, Eye, Save, FolderOpen } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { CustomParserV9, type ParsedSong } from '@/lib/chordpro-parser';
import { CustomTransposer } from '@/lib/chord-transposer';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { saveSongToFirestore, loadSongsFromFirestore } from '@/lib/actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const musicalKeys = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];

interface SongToLoad {
  id: string;
  title: string;
  content: string;
}

const SongPreview = ({ htmlContent }: { htmlContent: string }) => {
  if (!htmlContent) {
    return (
      <div className="flex items-center justify-center h-full text-center text-muted-foreground">
        <p>Your formatted song will appear here once you start typing or load a song.</p>
      </div>
    );
  }
  return (
    <iframe
      srcDoc={htmlContent}
      title="Song Preview"
      className="w-full h-full bg-white rounded-lg border-none"
      sandbox="allow-scripts" // sandbox to prevent script execution from user input
    />
  );
};


export default function ChordProPage() {
  const [chordProInput, setChordProInput] = useState('');
  const [targetKey, setTargetKey] = useState('C');
  const [simplifyChords, setSimplifyChords] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [songTitleForSave, setSongTitleForSave] = useState("Untitled Song");

  const [showArtist, setShowArtist] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const [parsedSong, setParsedSong] = useState<ParsedSong | null>(null);
  const [log, setLog] = useState<string[]>([]);
  
  const debouncedChordProInput = useDebounce(chordProInput, 500);

  const { user } = useAuth();
  const { toast } = useToast();
  const [isSaving, startSavingTransition] = useTransition();
  const [isLoadingSongs, startLoadingSongsTransition] = useTransition();
  const [availableSongs, setAvailableSongs] = useState<SongToLoad[]>([]);
  const [isLoadSongDialogOpen, setIsLoadSongDialogOpen] = useState(false);


  const addLog = (message: string, data?: any) => {
    const timestamp = new Date().toLocaleTimeString();
    let logMessage = `[${timestamp}] ${message}`;
    if (data) {
      try {
        logMessage += `\n${JSON.stringify(data, (key, value) =>
          typeof value === 'bigint' ? value.toString() : value, 2)}`;
      } catch (e) {
        logMessage += `\n[Error serializing data for log]`;
      }
    }
    setLog(prev => [logMessage, ...prev.slice(0, 99)]);
  };
  
  const rtfEscape = (str: string | undefined): string => String(str || '').replace(/\\/g, '\\\\').replace(/{/g, '\\{').replace(/}/g, '\\}');

  useEffect(() => {
    setLog([]);
    addLog("--- AUTO-PARSING (V9) ---");
    if (!debouncedChordProInput) {
      addLog("Input is empty. Clearing song.");
      setParsedSong(null);
      setSongTitleForSave("Untitled Song");
      return;
    }
    addLog("Raw Input Length:", debouncedChordProInput.length);
    try {
      const song = CustomParserV9.parse(debouncedChordProInput);
      setParsedSong(song);
      setSongTitleForSave(song.title || "Untitled Song");
      addLog("Parsed Song Object:", {title: song.title, artist: song.artist, key: song.key, metaCount: Object.keys(song.meta).length, footerCommentsCount: song.footer_comments.length, bodyLines: song.body.length});
      const originalKey = song.key;
      if (originalKey && musicalKeys.includes(originalKey)) {
        setTargetKey(originalKey);
        addLog(`Successfully parsed song. Detected and set key: ${originalKey}.`);
      } else {
        addLog(`Successfully parsed song. Key: ${originalKey || 'Not Found'}. Defaulting/keeping target key: C.`);
        setTargetKey('C');
      }
    } catch (e: any) {
      addLog(`FATAL ERROR: ${e.message}`);
      setParsedSong(null);
      setSongTitleForSave("Untitled Song");
    }
  }, [debouncedChordProInput]);

  const processedSong = useMemo(() => {
    if (!parsedSong) return null;
    addLog("--- RE-PROCESSING SONG ---");
    addLog("Settings:", { targetKey });
    
    const originalKey = parsedSong.key || 'C';
    const notes: Record<string, number> = { 'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11 };
    
    const originalRoot = originalKey.replace(/m$/, '');
    const targetRoot = targetKey.replace(/m$/, '');
    
    let interval = 0;
    if ((originalRoot in notes) && (targetRoot in notes)) {
      interval = notes[targetRoot] - notes[originalRoot];
      addLog(`Transposing from ${originalKey} to ${targetKey} (Interval: ${interval}).`);
    } else {
      addLog(`Could not determine interval. Original: ${originalKey}, Target: ${targetKey}. No transposition.`);
    }

    return {
      ...parsedSong,
      key: targetKey,
      body: parsedSong.body.map(line => {
        if (line.type !== 'lyrics' || !line.items) return line;
        return {
          ...line,
          items: line.items.map(item => ({
            ...item,
            chord: CustomTransposer.transpose(item.chord, interval),
          }))
        };
      }).filter(Boolean)
    };
  }, [parsedSong, targetKey]);

  const simplifyChordDisplay = (chord: string | null): string => {
    if (!chord || !simplifyChords) return chord || '';
    const rootMatch = chord.match(/^[A-G][#b]?/);
    if (!rootMatch) return chord;
    const root = rootMatch[0];
    const restOfChord = chord.substring(root.length);
    
    if (restOfChord.startsWith('m')) {
        return root + 'm';
    }
    return root;
  };

  const processedSongHtml = useMemo(() => {
    if (!processedSong) return '';
    addLog("--- RE-GENERATING HTML (Arial 18pt, Padded) ---");
    const songToFormat = processedSong;
    
    let html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${rtfEscape(songToFormat.title)}</title>
        <style>
            body { font-family: Arial, sans-serif; font-size: 18pt; line-height: 1.2; }
            .cpro { width: 100%; }
            h1 { font-size: 24pt; text-align: center; font-weight: bold; color: black; margin-bottom: 0; }
            .meta-info { font-size: 14pt; text-align: center; color: #888; margin-bottom: 36px; }
            .line-pair { margin-bottom: 18pt; }
            .chord-line, .lyric-line { font-family: Arial, sans-serif; font-size: 18pt; white-space: pre; }
            .chord-line { color: #ff0000; font-weight: bold; }
            .lyric-line { color: black; }
            .section { font-weight: bold; color: black; }
            .comment { font-style: italic; color: #666; }
            .footer { font-size: 10pt; color: #888; margin-top: 36px; text-align: center; }
        </style></head><body><div class="cpro"><h1>${rtfEscape(songToFormat.title)}</h1>`;
    
    let metaHtml = '<div class="meta-info">';
    if (showArtist && songToFormat.artist) {
        metaHtml += `Artist: ${rtfEscape(songToFormat.artist)}<br/>`;
    }
    metaHtml += `Key: <span class="chord-line">${rtfEscape(songToFormat.key)}</span></div>`;
    html += metaHtml;

    let lastLineWasSection = false;

    songToFormat.body.forEach((line, index) => {
        if (line.type === 'section') {
            if (index > 0) html += `<br><br>`;
            html += `<div class="section">${rtfEscape(line.content || '')}</div>`;
            lastLineWasSection = true;
        } else if (line.type === 'comment') {
            html += `<div class="comment">${rtfEscape(line.content || '')}</div>`;
            lastLineWasSection = false;
        } else if (line.type === 'lyrics' && line.items) {
            if (lastLineWasSection) {
                html += `<div style="height: 18pt;"></div>`;
                lastLineWasSection = false;
            }
            if (line.items.length === 0) {
                html += `<br>`;
                return;
            }
            let chordLine = '';
            let lyricLine = '';
            line.items.forEach(item => {
                const chord = simplifyChordDisplay(item.chord);
                const lyrics = item.lyrics || '';
                if (chord) {
                    chordLine += chord;
                    const padding = Math.max(0, lyrics.length - chord.length);
                    chordLine += ' '.repeat(padding);
                } else {
                    chordLine += ' '.repeat(lyrics.length);
                }
                lyricLine += lyrics;
            });
            
            html += `<div class="line-pair">`;
            if(chordLine.trim().length > 0) {
                html += `<div class="chord-line">${chordLine}</div>`;
            }
            html += `<div class="lyric-line">${lyricLine}</div>`;
            html += `</div>`;
        } else if (line.type === 'chorus_start' || line.type === 'chorus_end') {
             // No specific rendering for chorus blocks in this simplified HTML version
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


  const generateRtfContent = () => {
    if (!processedSong) return null;
    addLog("--- GENERATING RTF (Arial 18pt, Padded, Refined) ---");
    
    const rtfEscape = (str: string | undefined): string => String(str || '').replace(/\\/g, '\\\\').replace(/{/g, '\\{').replace(/}/g, '\\}');
    
    let rtf = `{\\rtf1\\ansi\\deff0`;
    rtf += `{\\fonttbl{\\f0 Arial;}}`;
    rtf += `{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red128\\green128\\blue128;}`; // 0:black, 1:red, 2:gray
    // Base paragraph: Arial 18pt (fs36), multi-line spacing
    rtf += `\\pard\\slmult1\\f0\\fs36`; 

    // Title
    rtf += `{\\pard\\qc\\b\\f0\\fs48 ${rtfEscape(processedSong.title)}\\par}`;
    
    // Meta (Artist and Key)
    rtf += `{\\pard\\qc\\f0\\fs28\\cf2 `; // Centered, 14pt (fs28), gray (cf2)
    if (showArtist && processedSong.artist) {
        rtf += `Artist: ${rtfEscape(processedSong.artist)}   `;
    }
    rtf += `Key: {\\b\\f0\\fs36\\cf1 ${rtfEscape(processedSong.key)}}`; // Key: Bold, 18pt (fs36), red (cf1)
    rtf += `\\par}`; // End meta paragraph
    rtf += `\\par\\par`; // Two blank lines for spacing

    let lastLineWasSection = false;

    processedSong.body.forEach((line, index) => {
        if (line.type === 'section') {
            if (index > 0) rtf += `\\par\\par`; // Two lines of spacing before new section
            // Section: Bold, 18pt (fs36), black (default color after pard)
            rtf += `{\\pard\\slmult1\\f0\\fs36\\b ${rtfEscape(line.content || '')}}\\par`;
            lastLineWasSection = true;
        } else if (line.type === 'comment') {
            // Comment: Italic, 18pt (fs36), black (default color after pard)
            rtf += `{\\pard\\slmult1\\f0\\fs36\\i ${rtfEscape(line.content || '')}}\\par`;
            lastLineWasSection = false;
        } else if (line.type === 'lyrics' && line.items) {
            if (lastLineWasSection) {
                rtf += `\\pard\\slmult1\\f0\\fs36\\par`; // One line of space after section
                lastLineWasSection = false;
            }
            if (line.items.length === 0) {
                 rtf += `\\pard\\slmult1\\f0\\fs36\\par`; // Blank line
                 return;
            }
            
            let chordLine = '';
            let lyricLine = '';
            line.items.forEach(item => {
                const chord = simplifyChordDisplay(item.chord) || '';
                const lyrics = item.lyrics || '';
                if (chord) {
                    chordLine += chord;
                    const padding = Math.max(0, lyrics.length - chord.length);
                    chordLine += ' '.repeat(padding);
                } else {
                    chordLine += ' '.repeat(lyrics.length);
                }
                lyricLine += lyrics;
            });
            
            if (chordLine.trim().length > 0) {
                // Chord line: Bold, 18pt (fs36), red (cf1)
                rtf += `\\pard\\slmult1\\f0\\fs36{\\b\\cf1 ${rtfEscape(chordLine)}}\\par`;
            }
            // Lyric line: 18pt (fs36), black (cf0)
            rtf += `\\pard\\slmult1\\f0\\fs36{\\cf0 ${rtfEscape(lyricLine)}}\\par`;
        }
        // No universal \\par\\n here; each element manages its paragraph.
    });
    
    // Footer
    rtf += `\\par\\par{\\pard\\qc\\f0\\fs20\\cf2 `; // Centered, 10pt (fs20), gray (cf2)
    const footerMeta = processedSong.meta || {};
    if (showFooter) {
        let footerRtfContent = '';
        if (footerMeta.ccli) footerRtfContent += `CCLI Song #${rtfEscape(footerMeta.ccli)}\\line `;
        if (footerMeta.copyright) footerRtfContent += `${rtfEscape(footerMeta.copyright)}\\line `;
        if (footerMeta.footer) footerRtfContent += `${rtfEscape(footerMeta.footer)}\\line `;
        if (processedSong.footer_comments && processedSong.footer_comments.length > 0) {
            if(footerRtfContent.trim() && !footerRtfContent.endsWith('\\line ')) footerRtfContent += '\\line ';
            else if (footerRtfContent.trim()) {} // if it ends with \line, nothing to add
            else {} // if it's empty, nothing to add
            footerRtfContent += processedSong.footer_comments.map(fc => rtfEscape(fc)).join('\\line ');
        }
        // Remove trailing \line if it exists to prevent extra blank line at the very end
        if (footerRtfContent.endsWith('\\line ')) {
            footerRtfContent = footerRtfContent.substring(0, footerRtfContent.length - '\\line '.length);
        }
        rtf += footerRtfContent;
    }
    rtf += `\\par}}`; // End footer paragraph and main RTF group
    return rtf;
  };
  
  const createAndDownloadBlob = (content: string | null, type: string, extension: string) => {
    if (!content) {
        addLog(`${extension.toUpperCase()} EXPORT FAILED: No content to export.`); 
        toast({ title: "Export Failed", description: "No content to export.", variant: "destructive"});
        return;
    }
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeTitle = (processedSong?.title || "song").replace(/[^a-z0-9]/gi, '_').toLowerCase();
    a.download = `${safeTitle}_${targetKey}.${extension}`;
    a.href = url;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addLog(`${extension.toUpperCase()} file downloaded successfully.`);
    toast({ title: "Export Successful", description: `${extension.toUpperCase()} file downloaded.`});
  };

  const handleExportHtml = () => createAndDownloadBlob(processedSongHtml, 'text/html', 'html');
  const handleExportRtf = () => createAndDownloadBlob(generateRtfContent(), 'application/rtf', 'rtf');
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
          toast({ title: "File Read Error", description: `Could not read file: ${e.target?.error?.message}`, variant: "destructive"});
        }
        reader.readAsText(file);
    }
    if(fileInputRef.current) fileInputRef.current.value = ""; 
  };

  const handleDownloadLog = () => {
    addLog("Downloading debug log.");
    const logContent = log.slice().reverse().join('\n\n');
    createAndDownloadBlob(logContent, 'text/plain', 'txt');
  };

  const handleSaveSong = async () => {
    if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to save songs.", variant: "destructive" });
      return;
    }
    if (!chordProInput.trim()) {
      toast({ title: "Cannot Save", description: "Song content is empty.", variant: "destructive" });
      return;
    }
     if (!songTitleForSave.trim()) {
      toast({ title: "Cannot Save", description: "Please provide a song title.", variant: "destructive" });
      return;
    }
    startSavingTransition(async () => {
      const result = await saveSongToFirestore(user.uid, songTitleForSave, chordProInput);
      if (result.success) {
        toast({ title: "Song Saved", description: `'${songTitleForSave}' has been saved successfully.` });
      } else {
        toast({ title: "Save Failed", description: result.message, variant: "destructive" });
      }
    });
  };

  const handleOpenLoadSongDialog = async () => {
     if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to load songs.", variant: "destructive" });
      return;
    }
    startLoadingSongsTransition(async () => {
      const result = await loadSongsFromFirestore(user.uid);
      if (result.success && result.songs) {
        if (result.songs.length > 0) {
          setAvailableSongs(result.songs);
          setIsLoadSongDialogOpen(true);
        } else {
          toast({ title: "No Saved Songs", description: "You haven't saved any songs yet." });
        }
      } else {
        toast({ title: "Load Failed", description: result.message, variant: "destructive" });
      }
    });
  };

  const handleLoadSelectedSong = (song: SongToLoad) => {
    setChordProInput(song.content);
    setSongTitleForSave(song.title);
    toast({ title: "Song Loaded", description: `'${song.title}' has been loaded.`});
    setIsLoadSongDialogOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <CardTitle className="font-headline text-3xl flex items-center gap-3">
          <Music size={32} className="text-accent" /> ChordPro Editor
        </CardTitle>
        <div className="flex gap-2 flex-wrap">
          <Button onClick={handleExportRtf} variant="outline" disabled={!processedSong}>
            <FileText className="mr-2" /> Export RTF
          </Button>
          <Button onClick={handleExportHtml} variant="outline" disabled={!processedSong}>
            <Download className="mr-2" /> Export HTML
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="card-glass">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="font-headline flex items-center gap-2"><FileText size={22}/>1. Edit Song</CardTitle>
              <Input type="file" ref={fileInputRef} onChange={handleFileSelected} className="hidden" accept=".pro,.cho,.chordpro,.txt,text/plain" />
              <Button onClick={handleFileImportClick} variant="outline" size="sm">
                <FileUp className="mr-2 h-4 w-4" /> Import File
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label htmlFor="song-title-save">Song Title (for saving)</Label>
                <Input 
                  id="song-title-save"
                  value={songTitleForSave}
                  onChange={(e) => setSongTitleForSave(e.target.value)}
                  placeholder="Enter song title"
                  className="bg-background/70 dark:bg-input/70 mt-1"
                  disabled={!chordProInput.trim()}
                />
              </div>
              <Textarea 
                value={chordProInput} 
                onChange={(e) => setChordProInput(e.target.value)}
                className="h-64 bg-background/70 dark:bg-input/70 font-code text-sm placeholder:text-muted-foreground"
                placeholder="{title: My Song}\n{artist: Anon}\n{key: G}\n\n[G]Amazing [C]grace..." 
              />
              <div className="mt-4 flex gap-2">
                <Button onClick={handleSaveSong} disabled={isSaving || !user || !chordProInput.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save Song"}
                </Button>
                <AlertDialog open={isLoadSongDialogOpen} onOpenChange={setIsLoadSongDialogOpen}>
                    <AlertDialogTrigger asChild>
                        <Button onClick={handleOpenLoadSongDialog} variant="outline" disabled={isLoadingSongs || !user}>
                            <FolderOpen className="mr-2 h-4 w-4" />
                            {isLoadingSongs ? "Loading..." : "Load Song"}
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Load Saved Song</AlertDialogTitle>
                        <AlertDialogDescription>
                            Select a song to load into the editor. This will replace current content.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <ScrollArea className="h-60 w-full my-4">
                            {availableSongs.length > 0 ? (
                                <div className="space-y-2 pr-4">
                                {availableSongs.map(song => (
                                    <Button key={song.id} variant="ghost" className="w-full justify-start" onClick={() => handleLoadSelectedSong(song)}>
                                    {song.title}
                                    </Button>
                                ))}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-center">No songs found.</p>
                            )}
                        </ScrollArea>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
          <Card className={`card-glass ${!parsedSong ? 'opacity-60 pointer-events-none' : ''}`}>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><Workflow size={22} />2. Process & Format</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="key-select" className="block text-sm font-medium mb-1">Transpose to Key</Label>
                <Select value={targetKey} onValueChange={setTargetKey} disabled={!parsedSong}>
                  <SelectTrigger id="key-select" className="w-full bg-background/70 dark:bg-input/70">
                    <SelectValue placeholder="Select key" />
                  </SelectTrigger>
                  <SelectContent>
                    {musicalKeys.map(k => <SelectItem key={k} value={k}>{k}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="simplify-switch" className="font-medium">Simplify advanced chords?</Label>
                <Switch id="simplify-switch" checked={simplifyChords} onCheckedChange={setSimplifyChords} disabled={!parsedSong} />
              </div>
              <div className="border-t border-border pt-4 mt-4">
                <h4 className="text-lg font-semibold mb-3">Output Options</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-artist-switch">Show Artist Info</Label>
                    <Switch id="show-artist-switch" checked={showArtist} onCheckedChange={setShowArtist} disabled={!parsedSong}/>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-footer-switch">Show Footer</Label>
                    <Switch id="show-footer-switch" checked={showFooter} onCheckedChange={setShowFooter} disabled={!parsedSong}/>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="card-glass lg:h-full flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Eye size={22}/>3. Live Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="h-[calc(100vh-28rem)] min-h-[300px] lg:h-full bg-black/5 dark:bg-black/20 rounded-lg p-1 border border-input">
              <SongPreview htmlContent={processedSongHtml} />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="card-glass">
        <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="font-headline flex items-center gap-2"><TerminalSquare size={22}/>Debug Log</CardTitle>
            <Button onClick={handleDownloadLog} variant="outline" size="sm" disabled={log.length === 0}>
              <Download className="mr-2 h-4 w-4"/> Download Log
            </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-48 w-full">
            <Textarea
              readOnly
              value={log.join('\n\n')}
              className="h-full bg-black/5 dark:bg-black/20 rounded-lg text-foreground/80 font-code text-xs focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
              placeholder="Actions will be logged here..."
            />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
    
