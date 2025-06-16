
"use client";

import React, { useState, useEffect, useTransition, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Music, Settings2, Lightbulb, RotateCcw } from 'lucide-react';
import { simplifyChordsAI } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

const musicalKeys = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
const initialChordPro = `{title: Amazing Grace}
{artist: John Newton}
{key: G}
{capo: 0}

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


const renderChordPro = (text: string) => {
  // This is a basic parser. A full ChordPro parser is complex.
  return text.split('\n').map((line, index) => {
    if (line.startsWith('{title:') || line.startsWith('{t:')) {
      return <h2 key={index} className="text-2xl font-headline font-semibold my-3 text-primary">{line.substring(line.indexOf(':') + 1).trim()}</h2>;
    }
    if (line.startsWith('{subtitle:') || line.startsWith('{st:')) {
      return <h3 key={index} className="text-xl font-headline font-medium my-2 text-secondary-foreground">{line.substring(line.indexOf(':') + 1).trim()}</h3>;
    }
    if (line.startsWith('{artist:}') || line.startsWith('{a:')) {
      return <p key={index} className="text-md font-medium my-1 text-muted-foreground">{line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if (line.startsWith('{key:}')) {
         return <p key={index} className="text-sm my-1 text-muted-foreground">Key: {line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if (line.startsWith('{capo:}')) {
         return <p key={index} className="text-sm my-1 text-muted-foreground">Capo: {line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if (line.startsWith('{comment:') || line.startsWith('{c:')) {
      return <p key={index} className="text-sm text-muted-foreground italic my-1 py-1">{line.substring(line.indexOf(':') + 1).trim()}</p>;
    }
    if (line.trim() === '') {
      return <div key={index} className="h-2" />; // Represents a blank line for spacing verses
    }

    // Line with chords and lyrics
    if (line.includes('[')) {
      const parts = [];
      let lastIndex = 0;
      const regex = /\[([^\]]+)\]([^\[]*)/g;
      let match;
      while ((match = regex.exec(line)) !== null) {
        // Text before the chord (if any, from lastIndex)
        if (match.index > lastIndex) {
          parts.push(<span key={`lyrics-${index}-${lastIndex}`} className="text-foreground">{line.substring(lastIndex, match.index)}</span>);
        }
        // Chord
        parts.push(
          <span key={`chord-${index}-${match.index}`} className="relative inline-block h-0">
            <span className="absolute bottom-0 left-0 transform -translate-y-full font-bold text-accent px-0.5 text-sm whitespace-nowrap">
              {match[1]}
            </span>
          </span>
        );
        // Lyrics after the chord
        parts.push(<span key={`lyrics-after-${index}-${match.index}`} className="text-foreground">{match[2]}</span>);
        lastIndex = match.index + match[0].length;
      }
      // Remaining lyrics on the line
      if (lastIndex < line.length) {
        parts.push(<span key={`lyrics-remaining-${index}-${lastIndex}`} className="text-foreground">{line.substring(lastIndex)}</span>);
      }
      return <p key={index} className="mb-6 leading-normal pt-4 text-base">{parts}</p>;
    }
    
    // Plain lyric line (no chords)
    return <p key={index} className="mb-1 leading-normal text-base text-foreground">{line}</p>;
  });
};


export default function ChordProPage() {
  const [chordProInput, setChordProInput] = useState(initialChordPro);
  const [originalInput, setOriginalInput] = useState(initialChordPro);
  const [currentKey, setCurrentKey] = useState("G"); // Example default
  
  const [isSimplifying, startSimplifyTransition] = useTransition();
  const { toast } = useToast();

  const renderedContent = useMemo(() => renderChordPro(chordProInput), [chordProInput]);

  const handleSimplifyChords = async () => {
    setOriginalInput(chordProInput); // Save current state before simplifying
    startSimplifyTransition(async () => {
      try {
        const result = await simplifyChordsAI(chordProInput, currentKey);
        setChordProInput(result); // Update input with simplified version
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
  
  // Placeholder for transposition logic
  const handleTranspose = (newKey: string) => {
    setCurrentKey(newKey);
    // Actual transposition of chordProInput would happen here
    // This is complex and would require a music theory library or robust parsing
    toast({
      title: "Key Changed",
      description: `Key set to ${newKey}. Actual transposition logic not yet implemented.`,
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
            Enter ChordPro text, select a key for context, and use AI to suggest simplified chords.
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
              <Label htmlFor="chordpro-input" className="block text-sm font-medium mb-1">ChordPro Input</Label>
              <Textarea
                id="chordpro-input"
                value={chordProInput}
                onChange={(e) => {
                  setChordProInput(e.target.value);
                  setOriginalInput(e.target.value); // Update original if manually edited
                }}
                rows={18}
                className="font-mono text-xs p-3 border-input bg-background focus:ring-primary focus:border-primary leading-relaxed"
                placeholder="Enter ChordPro text here..."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="key-transposer" className="block text-sm font-medium mb-1">Current Key (for context)</Label>
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
          </CardContent>
        </Card>

        <Card className="bg-card/70 backdrop-blur-md border-border shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">ChordPro Preview</CardTitle>
            <CardDescription>Displaying content for key: {currentKey} (transposition visual only)</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[450px] w-full p-4 rounded-md border border-input bg-white dark:bg-muted/20">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                 {renderedContent.length > 0 ? renderedContent : <p className="text-muted-foreground">Enter ChordPro text to see a preview.</p>}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
