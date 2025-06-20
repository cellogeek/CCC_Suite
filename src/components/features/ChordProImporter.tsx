
"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Music, FileText, Download, Eye, FileUp, Workflow, TerminalSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from '@/components/ui/GlassCard';
import { ActionButton } from '@/components/ui/ActionButton';
import { useDebounce } from '@/hooks/use-debounce';
import { CustomParserV9, ParsedSong } from '@/lib/chordpro-parser';
import { CustomTransposer } from '@/lib/chord-transposer';
import { rtfEscape } from '@/lib/utils';

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
export const ChordProImporter = () => {
    const [chordProInput, setChordProInput] = useState('');
    const [targetKey, setTargetKey] = useState('C');
    const [simplifyChords, setSimplifyChords] = useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showArtist, setShowArtist] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const [parsedSong, setParsedSong] = useState<ParsedSong | null>(null);
    const [log, setLog] = useState<string[]>([]);
    const debouncedChordProInput = useDebounce(chordProInput, 500);
    const { toast } = useToast();
    
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
        setLog([]); // Clear log on new input
        addLog("--- AUTO-PARSING (V9) ---");
        if (!debouncedChordProInput) {
            addLog("Input is empty. Clearing song.");
            setParsedSong(null);
            return;
        }
        try {
            const song = CustomParserV9.parse(debouncedChordProInput);
            setParsedSong(song);
            addLog("Parsed Song Object:", song);
            if (song.key && musicalKeys.includes(song.key)) {
                setTargetKey(song.key);
            } else {
                 addLog(`Parsed key "${song.key}" not in standard keys or not found. Defaulting target to C.`);
                setTargetKey('C'); 
            }
        } catch (e: any) {
            addLog(`FATAL ERROR during parsing: ${e.message}`, e);
            setParsedSong(null);
        }
    }, [debouncedChordProInput]);

    const processedSong = useMemo(() => {
        if (!parsedSong) return null;
        addLog("--- TRANSPOSING SONG ---", { originalKey: parsedSong.key, targetKey });
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
        addLog(`Transposition interval: ${interval} semitones.`);
        
        return {
            ...parsedSong,
            key: targetKey, // Update key to targetKey
            body: parsedSong.body.map(line => {
                if (line.type !== 'lyrics' || !line.items) return line;
                return { ...line, items: line.items.map(item => ({ ...item, chord: CustomTransposer.transpose(item.chord, interval), })) };
            }).filter(Boolean) // Ensure no null/undefined lines if filtering happens
        };
    }, [parsedSong, targetKey]);

    const simplifyChordDisplay = (chord: string | null): string => {
        if (!chord || !simplifyChords) return chord || '';
        // Simplifies chords like Cmaj7, Cm7, C7 to C, Cm, C respectively
        const rootMatch = chord.match(/^[A-G][#b]?/);
        if (!rootMatch) return chord; // Not a simple chord root
        const root = rootMatch[0];
        const restOfChord = chord.substring(root.length);

        if (restOfChord.startsWith('m')) return root + 'm'; // Keep minor, e.g., Cm7 -> Cm
        // For all others (major, dominant 7th, sus, add, etc.), just return the root
        return root; 
    };

    const processedSongHtml = useMemo(() => {
        if (!processedSong) return '';
        addLog("--- RE-GENERATING HTML (DejaVu Sans Mono Bold, Black Text, No Italics, Improved Spacing) ---");
        const songToFormat = processedSong;
        
        let html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${rtfEscape(songToFormat.title)}</title>
            <link href="https://cdn.jsdelivr.net/npm/dejavu-sans-mono@1.0.0/css/dejavu-sans-mono.min.css" rel="stylesheet">
            <style>
                body { font-family: 'DejaVu Sans Mono', Menlo, Monaco, Consolas, monospace; font-size: 18pt; line-height: 1.2; font-weight: bold; color: black; }
                .cpro { width: 100%; }
                h1 { font-size: 24pt; text-align: center; font-weight: bold; color: black; margin-bottom: 0; font-family: Arial, sans-serif; }
                .meta-info { font-size: 14pt; text-align: center; color: black; font-weight: bold; margin-bottom: 36px; font-family: Arial, sans-serif; }
                .line-pair { margin-bottom: 18pt; }
                .chord-line { font-family: 'DejaVu Sans Mono', Menlo, Monaco, Consolas, monospace; font-size: 18pt; white-space: pre; font-weight: bold; color: #ff0000; } /* Red color for chords */
                .lyric-line { font-family: 'DejaVu Sans Mono', Menlo, Monaco, Consolas, monospace; font-size: 18pt; white-space: pre; font-weight: bold; color: black; }
                .section { font-weight: bold; color: black; font-family: Arial, sans-serif; }
                .comment { color: black; font-weight: bold; font-family: Arial, sans-serif; } 
                .footer { font-size: 10pt; color: black; font-weight: bold; margin-top: 36px; text-align: center; font-family: Arial, sans-serif; }
            </style></head><body><div class="cpro"><h1>${rtfEscape(songToFormat.title)}</h1>`;
        
        let metaHtml = '<div class="meta-info">';
        if (showArtist && songToFormat.artist) {
            metaHtml += `Artist: ${rtfEscape(songToFormat.artist)}<br/>`;
        }
        metaHtml += `<span style="font-family: Arial, sans-serif;">Key: </span><span class="chord-line">${rtfEscape(songToFormat.key)}</span></div>`; 
        html += metaHtml;

        let firstSectionProcessed = false;
        songToFormat.body.forEach((line, index) => {
            if (line.type === 'section') {
                if(firstSectionProcessed && line.content?.trim()){ // Add space only if not the first section AND content exists
                    html += `<br><br>`; 
                }
                html += `<div class="section">${rtfEscape(line.content)}</div>`;
                firstSectionProcessed = true;
            } else if (line.type === 'comment') {
                html += `<div class="comment">${rtfEscape(line.content)}</div>`;
            } else if (line.type === 'lyrics' && line.items) {
                if (line.items.length === 0) {  return; } // Skip empty lyric lines (e.g. from input)
                
                let chordLine = '';
                let lyricLine = '';
                line.items.forEach((item, itemIndex) => {
                    const chord = simplifyChordDisplay(item.chord);
                    const lyrics = item.lyrics || ''; // Ensure lyrics is never null/undefined
                    
                    let effectiveLength = lyrics.length;
                    // Heuristic: Add some padding for chords over multi-character lyrics, especially if not the first chord-lyric pair.
                    // This aims to prevent chords from "crashing" into subsequent lyrics when chords are long.
                    // This scaling factor can be adjusted based on visual preference.
                    if (itemIndex > 0) { // Apply more aggressive padding for subsequent items in the line
                        effectiveLength = Math.round(effectiveLength * 1.5); // Was 0.75, try 1.5 for more space
                    }

                    if (chord) {
                        chordLine += chord;
                        const padding = Math.max(0, effectiveLength - chord.length);
                        chordLine += ' '.repeat(padding);
                    } else {
                        // If no chord, pad with spaces to align with lyrics below
                        chordLine += ' '.repeat(effectiveLength);
                    }
                    lyricLine += lyrics;
                });
                
                html += `<div class="line-pair">`;
                if(chordLine.trim().length > 0) { // Only add chord line if it has content
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
            // Add footer_comments parsed by CustomParserV9
            if (songToFormat.footer_comments && songToFormat.footer_comments.length > 0) {
                if (footerContent) footerContent += '<br>'; // Add separator if other footer content exists
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
        
        // Start RTF document with Arial font definition and color table
        let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Arial;}}{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green0\\blue0;}\\pard\\slmult1\\f0\\fs36`;

        // Title: Centered, Bold, 24pt (fs48)
        rtf += `{\\pard\\qc\\b\\fs48 ${rtfEscape(songToFormat.title)}\\par}`;
        
        // Meta Info: Centered, 14pt (fs28), Key in Red and Bold
        let metaRtf = `{\\pard\\qc\\fs28\\cf2 `; // cf2 is blue for comments, let's use cf0 (black) or make it specific
        if (showArtist && songToFormat.artist) {
            metaRtf += `Artist: ${rtfEscape(songToFormat.artist)}   `;
        }
        // Key: use \cf1 for red, \b for bold, fs36 for slightly larger key display
        metaRtf += `{\\b\\fs36\\cf1 Key: ${rtfEscape(songToFormat.key)}}}`; 
        rtf += metaRtf + `\\par`; // End meta info paragraph
        
        let firstSectionProcessed = false;
        songToFormat.body.forEach((line, index) => {
            rtf += `\\pard `; // Reset paragraph formatting for each line
            if (line.type === 'section') {
                 if(firstSectionProcessed && line.content?.trim()){ rtf += `\\par\\par`; } // Two blank lines before new section
                 rtf += `{\\b ${rtfEscape(line.content)}}`; // Section name bold
                 firstSectionProcessed = true;
            } else if (line.type === 'comment') {
                rtf += `{\\cf2 ${rtfEscape(line.content)}}`; // Comments in default color (cf2 if blue desired)
            } else if (line.type === 'lyrics' && line.items) {
                if (line.items.length === 0) {  /* Handled by \par below if needed, or skip if it was just an empty line */ } 
                else {
                    let chordLine = '';
                    let lyricLine = '';
                    line.items.forEach((item, itemIndex) => {
                        const chord = simplifyChordDisplay(item.chord) || '';
                        const lyrics = item.lyrics || '';
                        let effectiveLength = lyrics.length;
                        if (itemIndex > 0) { // Apply scaling for subsequent items
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
                        rtf += `{\\b\\cf1 ${rtfEscape(chordLine)}}\\par\\pard `; // Chords bold, red (\cf1)
                    }
                    rtf += `{\\cf0 ${rtfEscape(lyricLine)}}`; // Lyrics in default color (\cf0 black)
                }
            }
            rtf += `\\par`; // New paragraph after each line element
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
            // Remove trailing \line if it exists
            if (footerRtfContent.endsWith('\\line ')) {
                footerRtfContent = footerRtfContent.substring(0, footerRtfContent.length - '\\line '.length);
            }
            if(footerRtfContent) {
                rtf += `\\par\\par{\\pard\\qc\\cf2\\fs20 ${footerRtfContent}\\par}`; // Footer centered, smaller font (fs20), comment color
            }
        }

        rtf += `}`; // Close RTF document
        return rtf;
    };
    
    const generateRtfContentMono = (): string | null => {
        if (!processedSong) return null;
        addLog("--- GENERATING RTF (Mono, Corrected Braces & Spacing) ---");
        const songToFormat = processedSong;
        
        // Start RTF document with Courier New and Arial font definitions, and color table
        let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Courier New;}{\\f1 Arial;}}{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green0\\blue0;}\\pard\\slmult1\\f0\\fs36`; // Default to Courier New (f0), 18pt (fs36)
        
        // Title: Centered, Bold, Arial (f1), 24pt (fs48)
        rtf += `{\\pard\\qc\\b\\f1\\fs48 ${rtfEscape(songToFormat.title)}\\par}`; 
        
        // Meta Info: Centered, Arial (f1), 14pt (fs28), Key in Red and Bold
        let metaRtf = `{\\pard\\qc\\f1\\fs28\\cf2 `; // cf2 is blue, use cf0 for black or specific color
        if (showArtist && songToFormat.artist) {
            metaRtf += `Artist: ${rtfEscape(songToFormat.artist)}   `;
        }
        metaRtf += `{\\b\\f1\\fs36\\cf1 Key: ${rtfEscape(songToFormat.key)}}}`; 
        rtf += metaRtf + `\\par`;
        
        let firstSectionProcessed = false;
        songToFormat.body.forEach((line, index) => {
            rtf += `\\pard `; // Reset paragraph formatting
            if (line.type === 'section') {
                 if(firstSectionProcessed && line.content?.trim()) { rtf += `\\par\\par`; } // Two blank lines
                 rtf += `{\\b\\f1 ${rtfEscape(line.content)}}`; // Section name bold, Arial (f1)
                 firstSectionProcessed = true;
            } else if (line.type === 'comment') {
                 rtf += `{\\f1\\cf2 ${rtfEscape(line.content)}}`; // Comments in Arial (f1), comment color
            } else if (line.type === 'lyrics' && line.items) {
                 if (line.items.length === 0) { /* Handled by \par */ }
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
                        rtf += `{\\f0\\b\\cf1 ${rtfEscape(chordLine)}}\\par\\pard `; // Chords Courier New (f0), bold, red (\cf1)
                    }
                    rtf += `{\\f0\\cf0 ${rtfEscape(lyricLine)}}`; // Lyrics Courier New (f0), default color (\cf0 black)
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
                // Footer centered, Arial (f1), smaller font (fs20), comment color
                rtf += `\\par\\par{\\pard\\qc\\f1\\cf2\\fs20 ${footerRtfContent}\\par}`; 
            }
        }

        rtf += `}`; // Close RTF document
        return rtf;
    };

    const createAndDownloadBlob = (content: string | null, type: string, extension: string) => {
        if (!content) { 
            addLog(`${extension.toUpperCase()} EXPORT FAILED: No content to export.`); 
            toast({title: "Export Failed", description: "No content to export.", variant: "destructive"});
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
        toast({title: "Download Complete", description: `${extension.toUpperCase()} file saved.`});
    };

    const handleExportHtml = () => createAndDownloadBlob(processedSongHtml, 'text/html', 'html');
    const handleExportRtf = () => createAndDownloadBlob(generateRtfContent(), 'application/rtf', 'rtf-arial');
    const handleExportRtfMono = () => createAndDownloadBlob(generateRtfContentMono(), 'application/rtf', 'rtf-mono');
    const handleFileImportClick = () => fileInputRef.current?.click();
    
    const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setLog([]); // Clear previous log
            addLog(`Importing file: ${file.name}`);
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target?.result as string;
                setChordProInput(fileContent);
                addLog("File content loaded. Auto-parsing will begin shortly.");
            };
            reader.onerror = (e) => {
              addLog(`ERROR: Failed to read file: ${e.target?.error?.message}`);
              toast({title: "File Read Error", description: e.target?.error?.message || "Could not read file.", variant: "destructive"})
            }
            reader.readAsText(file);
        }
        // Reset file input to allow re-selection of the same file
        if(fileInputRef.current) fileInputRef.current.value = ""; 
    };

    const handleDownloadLog = () => {
        addLog("Downloading debug log.");
        const logContent = log.slice().reverse().join('\n\n'); // Newest entries at the bottom of the file
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
