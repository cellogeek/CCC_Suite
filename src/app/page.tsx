
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
import { Music, FileText, Download, FileUp, Workflow, TerminalSquare, Eye, Save, FolderOpen, Loader2 } from 'lucide-react';
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
      sandbox="allow-scripts"
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
  const [showFooter, setShowFooter] = useState(true); // Consolidated from showCopyright, showCcli removed

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
      addLog("Parsed Song Object:", {title: song.title, artist: song.artist, key: song.key, metaCount: Object.keys(song.meta).length, bodyLines: song.body.length});
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
    addLog("--- RE-GENERATING HTML ---");
    const songToFormat = processedSong;
    let html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${songToFormat.title}</title><link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Geist+Sans:wght@700&display=swap" rel="stylesheet"><style>body{font-family:'Geist Sans','Verdana',sans-serif;margin:2em;font-weight:bold;}.cpro{width:100%;}h1{font-size:16pt;text-align:center;}.meta-info{font-size:16pt;text-align:center;margin-bottom:2em;}.line-pair{margin-bottom:.8em;}.chord-line,.lyric-line{font-family:'Fira Mono','Courier New',monospace;font-size:14pt;white-space:pre;line-height:1.2;}.chord-line{color:#FF8C00; /* Accent Orange */}.section{font-weight:bold;margin-top:1.2em;margin-bottom:.25em;font-size:14pt;}.comment{font-style:italic;color:#666;margin-bottom:.5em;font-size:14pt;}.chorus-block{padding-left:20px;border-left:2px solid #ccc;margin-left:5px;margin-top:.5em;margin-bottom:.5em;}.footer{font-size:9pt;color:#888;margin-top:3em;text-align:center;}</style></head><body><div class="cpro"><h1>${songToFormat.title}</h1><div class="meta-info">`;
    if (showArtist && songToFormat.artist) html += `Artist: ${songToFormat.artist}<br/>`;
    html += `Key: ${songToFormat.key}<br/>`;
    html += `</div>`;
    songToFormat.body.forEach(line => {
        if (line.type === 'section') { html += `<div class="section">${line.content}</div>`; }
        else if (line.type === 'comment') { html += `<div class="comment">${line.content}</div>`; }
        else if (line.type === 'chorus_start') { html += `<div class="chorus-block">`; }
        else if (line.type === 'chorus_end') { html += `</div>`; }
        else if (line.type === 'lyrics' && line.items) {
            if (line.items.length === 0) { html += `<br>`; return; }
            let chordLine = '';
            let lyricLine = '';
            line.items.forEach(item => {
                const chord = simplifyChordDisplay(item.chord);
                const lyrics = item.lyrics || '';
                if (chord) {
                    chordLine += chord;
                    const padding = Math.max(0, lyrics.length - chord.length);
                    chordLine += ' '.repeat(padding);
                } else { chordLine += ' '.repeat(lyrics.length); }
                lyricLine += lyrics;
            });
            html += `<div class="line-pair"><div class="chord-line">${chordLine}</div><div class="lyric-line">${lyricLine}</div></div>`;
        }
    });
    
    const footerMeta = songToFormat.meta || {};
    if (showFooter) {
        let footerContent = '';
        if (footerMeta.ccli) footerContent += `CCLI Song #${footerMeta.ccli}<br>`;
        if (footerMeta.copyright) footerContent += `${footerMeta.copyright}<br>`;
        if (footerMeta.footer) footerContent += `${footerMeta.footer}<br>`; // Custom footer text
        
        if(footerContent) {
            html += `<div class="footer">${footerContent}</div>`;
        }
    }
    html += `</div></body></html>`;
    return html;
  }, [processedSong, simplifyChords, showArtist, showFooter]);

  const generateRtfContent = () => {
    if (!processedSong) return null;
    addLog("--- GENERATING RTF ---");
    const rtfEscape = (str: string | undefined) => String(str || '').replace(/\\/g, '\\\\').replace(/{/g, '\\{').replace(/}/g, '\\}');
    let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Arial;}{\\f1 Courier New;}}{\\colortbl;\\red255\\green0\\blue0;}`; // Red color for chords
    
    rtf += `{\\pard\\qc\\sa200\\sl276\\slmult1\\b\\f0\\fs32 ${rtfEscape(processedSong.title)}\\par}`;
    if (showArtist && processedSong.artist) { rtf += `{\\pard\\qc\\b0\\fs24 Artist: ${rtfEscape(processedSong.artist)}\\par}`; }
    rtf += `{\\pard\\qc\\b0\\fs24 Key: ${rtfEscape(processedSong.key)}\\par}\\par`;
    
    let inChorus = false;
    processedSong.body.forEach(line => {
        if (line.type === 'section') { rtf += `{\\pard\\sa200\\sl276\\slmult1\\b\\f0\\fs24 ${rtfEscape(line.content)}\\par}`; }
        else if (line.type === 'comment') { rtf += `{\\pard\\sa200\\sl276\\slmult1\\i\\f0\\fs24 ${rtfEscape(line.content)}\\par}`; }
        else if (line.type === 'chorus_start') { 
            rtf += `{\\pard\\li720\\sa100\\sl276\\slmult1 `; // Indent chorus start
            inChorus = true;
        }
        else if (line.type === 'chorus_end') { 
            rtf += `\\par}`; // End chorus block
            inChorus = false;
        }
        else if (line.type === 'lyrics' && line.items) {
            if (line.items.length === 0) { 
                rtf += `{\\pard${inChorus ? '\\li720': ''}\\sa200\\sl276\\slmult1\\fs24 \\par}`;
                return; 
            }
            
            // Start lyric line paragraph, apply chorus indent if active
            rtf += `{\\pard${inChorus ? '\\li720': ''}\\sa100\\sl276\\slmult1\\trowd \\trgaph108\\trleft-108`;
            
            let chordsRow = '';
            let lyricsRow = '';
            let cellsDef = '';
            let currentPos = 0;
            
            line.items.forEach(item => {
                const chord = simplifyChordDisplay(item.chord) || '';
                const lyrics = item.lyrics || ' '; 
                const text = chord.length > lyrics.length ? chord : lyrics;
                const cellWidth = Math.floor(text.length * 150) + 200; // Approx char width in twips
                currentPos += cellWidth;
                
                chordsRow += `{\\pard\\intbl\\b\\cf1\\f1\\fs24 ${rtfEscape(chord)}\\cell}`;
                lyricsRow += `{\\pard\\intbl\\b0\\cf0\\f0\\fs24 ${rtfEscape(lyrics)}\\cell}`;
                cellsDef += `\\clbrdrb\\brdrs\\clbrdrl\\brdrs\\clbrdrr\\brdrs\\clbrdrt\\brdrs\\cellx${currentPos}`;
            });

            rtf += cellsDef + chordsRow + `\\row` + lyricsRow + `\\row}`;
            rtf += `}`; // End the paragraph for the table row
        }
    });

    if (showFooter) {
        rtf += `{\\pard\\qc\\sa200\\sl276\\slmult1\\fs18 `;
        const footerMeta = processedSong.meta || {};
        let footerText = "";
        if (footerMeta.ccli) { footerText += `CCLI Song #${rtfEscape(footerMeta.ccli)} `; }
        if (footerMeta.copyright) { footerText += rtfEscape(footerMeta.copyright); }
        if (footerMeta.footer) { footerText += (footerText ? `\\par ` : ``) + rtfEscape(footerMeta.footer); }
        rtf += footerText;
        rtf += `\\par}`;
    }
    rtf += `}`; // Close main RTF group
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

