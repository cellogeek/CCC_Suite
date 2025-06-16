
"use client";

import React, { useState, useEffect, useTransition, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; // Ensured import
import { Checkbox } from "@/components/ui/checkbox";
import { Music, Settings2, Lightbulb, RotateCcw, Save, FolderOpen, FileDown, FileText } from 'lucide-react';
import { simplifyChordsAI, saveSongToFirestore, loadSongsFromFirestore } from '@/lib/actions';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input'; // For song title input

const musicalKeys = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
const initialChordPro = `{title: Amazing Grace}
{artist: John Newton}
{key: G}
{capo: 0}
{copyright: Public Domain}

{comment: Verse 1}
[G]Amazing grace! (how [C]sweet the [G]sound)
That [G]saved a wretch like [D7]me!
I [G]once was lost, but [C]now am [G]found,
Was [Em]blind, but [D7]now I [G]see.

{comment: Verse 2}
'Twas [G]grace that taught my [C]heart to [G]fear,
And [G]grace my fears re[D7]lieved;
How [G]precious did that [C]grace ap[G]pear
The [Em]hour I [D7]first be[G]lieved!`;

interface OutputOptions {
  showArtist: boolean;
  showCopyright: boolean;
  // Add more options here if needed
}

const extractMetadata = (text: string, directive: string): string | null => {
  const regex = new RegExp(`{(${directive}):\\s*([^}]*)}`, 'i');
  const match = text.match(regex);
  return match ? match[2].trim() : null;
};


const renderChordPro = (text: string, options: OutputOptions) => {
  return text.split('\n').map((line, index) => {
    if (line.startsWith('{title:') || line.startsWith('{t:')) {
      return <h2 key={index} className="text-2xl font-headline font-semibold my-3 text-primary">{line.substring(line.indexOf(':') + 1).trim()}</h2>;
    }
    if (line.startsWith('{subtitle:') || line.startsWith('{st:')) {
      return <h3 key={index} className="text-xl font-headline font-medium my-2 text-secondary-foreground">{line.substring(line.indexOf(':') + 1).trim()}</h3>;
    }
    if ((line.startsWith('{artist:}') || line.startsWith('{a:}')) && options.showArtist) {
      return <p key={index} className="text-md font-medium my-1 text-muted-foreground">{line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if ((line.startsWith('{copyright:}') || line.startsWith('{coy:}')) && options.showCopyright) {
      return <p key={index} className="text-xs my-1 text-muted-foreground italic">&copy; {line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if (line.startsWith('{key:}')) {
         return <p key={index} className="text-sm my-1 text-muted-foreground">Key: {line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if (line.startsWith('{capo:}')) {
         return <p key={index} className="text-sm my-1 text-muted-foreground">Capo: {line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if (line.startsWith('{comment:') || line.startsWith('{c:')) {
      // Don't render lines that are only {comment:} or {c:}
      const commentContent = line.substring(line.indexOf(':') + 1).trim();
      if (!commentContent) return null;
      return <p key={index} className="text-sm text-muted-foreground italic my-1 py-1">{commentContent}</p>;
    }
    if (line.trim() === '') {
      return <div key={index} className="h-2" />;
    }

    if (line.includes('[')) {
      const parts = [];
      let lastIndex = 0;
      const regex = /\[([^\]]+)\]([^[]*)/g;
      let match;
      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(<span key={`lyrics-${index}-${lastIndex}`} className="text-foreground">{line.substring(lastIndex, match.index)}</span>);
        }
        parts.push(
          <span key={`chord-${index}-${match.index}`} className="relative inline-block h-0">
            <span className="absolute bottom-0 left-0 transform -translate-y-full font-bold text-accent px-0.5 text-sm whitespace-nowrap">
              {match[1]}
            </span>
          </span>
        );
        parts.push(<span key={`lyrics-after-${index}-${match.index}`} className="text-foreground">{match[2]}</span>);
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(<span key={`lyrics-remaining-${index}-${lastIndex}`} className="text-foreground">{line.substring(lastIndex)}</span>);
      }
      return <p key={index} className="mb-6 leading-normal pt-4 text-base">{parts}</p>;
    }
    
    // Filter out empty directive lines like {artist:}, {copyright:} if those options are off
    if ((line.startsWith('{artist:}') || line.startsWith('{a:}')) && !options.showArtist) return null;
    if ((line.startsWith('{copyright:}') || line.startsWith('{coy:}')) && !options.showCopyright) return null;
    // Filter out other known directives that might be empty if not handled above
    if (line.match(/^\{[^:]+:\s*\}$/)) return null;


    return <p key={index} className="mb-1 leading-normal text-base text-foreground">{line}</p>;
  }).filter(Boolean); // Filter out nulls from hidden directives
};


export default function ChordProPage() {
  const [chordProInput, setChordProInput] = useState(initialChordPro);
  const [originalInput, setOriginalInput] = useState(initialChordPro);
  const [currentKey, setCurrentKey] = useState("G");
  const [songTitle, setSongTitle] = useState(extractMetadata(initialChordPro, "title") || "Untitled Song");
  
  const [outputOptions, setOutputOptions] = useState<OutputOptions>({
    showArtist: true,
    showCopyright: true,
  });
  
  const [isSimplifying, startSimplifyTransition] = useTransition();
  const [isSaving, startSavingTransition] = useTransition();
  const [isLoading, startLoadingTransition] = useTransition();
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Update song title from ChordPro input if it changes
    const titleFromInput = extractMetadata(chordProInput, "title");
    if (titleFromInput && titleFromInput !== songTitle) {
      setSongTitle(titleFromInput);
    }
  }, [chordProInput, songTitle]);

  const renderedContent = useMemo(() => renderChordPro(chordProInput, outputOptions), [chordProInput, outputOptions]);

  const handleSimplifyChords = async () => {
    setOriginalInput(chordProInput);
    startSimplifyTransition(async () => {
      try {
        const result = await simplifyChordsAI(chordProInput, currentKey);
        setChordProInput(result);
        toast({
          title: "Chords Simplified",
          description: "AI has provided a simplified version. You can revert if needed.",
        });
      } catch (error) {
        console.error("Error simplifying chords:", error);
        toast({
          title: "Simplification Error",
          description: (error as Error).message || "Could not simplify chords at this time.",
          variant: "destructive",
        });
      }
    });
  };

  const handleRevertChords = () => {
    setChordProInput(originalInput);
    toast({
      title: "Chords Reverted",
      description: "Reverted to the version before simplification.",
    });
  };
  
  const handleTranspose = (newKey: string) => {
    setCurrentKey(newKey);
    toast({
      title: "Key Changed (Placeholder)",
      description: `Key set to ${newKey}. Actual transposition logic not yet implemented. This key is used as context for AI simplification.`,
    });
  };

  const handleExportHTML = () => {
    toast({ title: "Export HTML (Placeholder)", description: "This feature will be implemented soon." });
  };

  const handleExportRTF = () => {
    toast({ title: "Export RTF (Placeholder)", description: "This feature will be implemented soon." });
  };

  const handleSaveSong = async () => {
    if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to save songs.", variant: "destructive" });
      return;
    }
    if (!songTitle.trim()) {
      toast({ title: "Cannot Save", description: "Please provide a song title.", variant: "destructive" });
      return;
    }
    startSavingTransition(async () => {
      const result = await saveSongToFirestore(user.uid, songTitle, chordProInput);
      if (result.success) {
        toast({ title: "Song Saved", description: `'${songTitle}' has been saved successfully.` });
      } else {
        toast({ title: "Save Failed", description: result.message, variant: "destructive" });
      }
    });
  };

  const handleLoadSongs = async () => {
     if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to load songs.", variant: "destructive" });
      return;
    }
    startLoadingTransition(async () => {
      const result = await loadSongsFromFirestore(user.uid);
      if (result.success && result.songs) {
        // For now, just log. In future, show a dialog to select a song.
        console.log("Loaded songs:", result.songs);
        if (result.songs.length > 0) {
          // Example: load the first song
          // setChordProInput(result.songs[0].content);
          // setSongTitle(result.songs[0].title);
          // setOriginalInput(result.songs[0].content);
          toast({ title: "Songs Loaded (Placeholder)", description: `${result.songs.length} songs found. Check console. UI to select a song coming soon.` });
        } else {
          toast({ title: "No Saved Songs", description: "You haven't saved any songs yet." });
        }
      } else {
        toast({ title: "Load Failed", description: result.message, variant: "destructive" });
      }
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card/70 backdrop-blur-md border-border shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-2">
            <Music size={32} className="text-primary" />
            ChordPro Editor & Viewer
          </CardTitle>
          <CardDescription>
            Enter ChordPro text, manage songs, and use AI to suggest simplified chords.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card/70 backdrop-blur-md border-border shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Settings2 />Controls & Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="song-title" className="block text-sm font-medium mb-1">Song Title</Label>
              <Input 
                id="song-title"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                placeholder="Enter song title"
                className="font-semibold bg-background focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="chordpro-input" className="block text-sm font-medium mb-1">ChordPro Input</Label>
              <Textarea
                id="chordpro-input"
                value={chordProInput}
                onChange={(e) => {
                  setChordProInput(e.target.value);
                  setOriginalInput(e.target.value);
                }}
                rows={12}
                className="font-mono text-xs p-3 border-input bg-background focus:ring-primary focus:border-primary leading-relaxed"
                placeholder="Enter ChordPro text here..."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="key-transposer" className="block text-sm font-medium mb-1">Current Key (for AI context)</Label>
                <Select value={currentKey} onValueChange={handleTranspose}>
                  <SelectTrigger id="key-transposer" className="w-full bg-background">
                    <SelectValue placeholder="Select key" />
                  </SelectTrigger>
                  <SelectContent>
                    {musicalKeys.map(key => (
                      <SelectItem key={key} value={key}>{key}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                 <Button onClick={handleSimplifyChords} disabled={isSimplifying} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  {isSimplifying ? "Simplifying..." : "Simplify Chords (AI)"}
                </Button>
                <Button onClick={handleRevertChords} variant="outline" className="w-full" disabled={chordProInput === originalInput}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Revert Simplification
                </Button>
              </div>
            </div>
             <div className="space-y-3 pt-2">
                <Label className="block text-sm font-medium">Output Options</Label>
                <div className="flex items-center space-x-2">
                    <Checkbox 
                        id="showArtist" 
                        checked={outputOptions.showArtist} 
                        onCheckedChange={(checked) => setOutputOptions(prev => ({...prev, showArtist: !!checked}))}
                    />
                    <Label htmlFor="showArtist" className="text-sm font-normal">Show Artist</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox 
                        id="showCopyright"
                        checked={outputOptions.showCopyright}
                        onCheckedChange={(checked) => setOutputOptions(prev => ({...prev, showCopyright: !!checked}))}
                    />
                    <Label htmlFor="showCopyright" className="text-sm font-normal">Show Copyright</Label>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
                <Button onClick={handleSaveSong} disabled={isSaving || !user} className="w-full">
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save Song"}
                </Button>
                <Button onClick={handleLoadSongs} variant="outline" disabled={isLoading || !user} className="w-full">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  {isLoading ? "Loading..." : "Load Songs"}
                </Button>
                 <Button onClick={handleExportHTML} variant="outline" className="w-full">
                  <FileDown className="mr-2 h-4 w-4" />
                  Export HTML
                </Button>
                <Button onClick={handleExportRTF} variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Export RTF
                </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/70 backdrop-blur-md border-border shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">ChordPro Preview</CardTitle>
            <CardDescription>Displaying content for key: {currentKey} (transposition visual only)</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[520px] w-full p-4 rounded-md border border-input bg-white dark:bg-muted/20">
              <div className="max-w-none">
                 {renderedContent.length > 0 ? renderedContent : <p className="text-muted-foreground">Enter ChordPro text to see a preview.</p>}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
