
"use client";

import React, { useState, useTransition, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Keep if other inputs are planned
import { Label } from "@/components/ui/label"; // Keep for consistency or future use
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, ChevronsRight, Download, Loader2, AlertCircle } from 'lucide-react';
import { fetchVerse, getApiKey } from '@/lib/actions';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';


interface FetchedVerse {
    id: number;
    reference: string;
    text: string;
}

export default function ScripturePage() {
  const [verseInput, setVerseInput] = useState('');
  const [parsedVerses, setParsedVerses] = useState<FetchedVerse[]>([]);
  const [isFetching, startFetchingTransition] = useTransition();
  const [fetchError, setFetchError] = useState('');
  
  const { user } = useAuth();
  const { toast } = useToast();
  const [currentApiKey, setCurrentApiKey] = useState<string | null>(null);
  const [apiKeyChecked, setApiKeyChecked] = useState(false);

  useEffect(() => {
    const loadApiKey = async () => {
      if (user) {
        const key = await getApiKey(user.uid);
        setCurrentApiKey(key);
        if (!key) {
          toast({
            title: "ESV API Key Needed",
            description: (
              <p>
                Please configure your ESV API Key in the{' '}
                <Link href="/settings" className="underline text-primary hover:text-primary/80">
                  Settings page
                </Link>{' '}
                to fetch scripture.
              </p>
            ),
            variant: "default", 
            duration: 10000,
          });
        }
      }
      setApiKeyChecked(true);
    };
    loadApiKey();
  }, [user, toast]);

  const handleParseAndFetch = async () => {
    if (!verseInput) return;
    if (!currentApiKey && user) { // Check user to avoid error if API key check is somehow bypassed before user context ready
      setFetchError("ESV API Key is not configured. Please set it in Settings.");
      toast({ title: "API Key Missing", description: "Please set your ESV API Key in Settings.", variant: "destructive" });
      return;
    }
    if (!user) { // Should not happen with mock user, but good check
        setFetchError("User not authenticated.");
        toast({ title: "Authentication Error", description: "User not authenticated.", variant: "destructive" });
        return;
    }
    
    startFetchingTransition(async () => {
      setFetchError('');
      setParsedVerses([]);
      
      const query = verseInput.split(';').map(v => v.trim()).filter(Boolean).join(',');
      const result = await fetchVerse(query, currentApiKey);

      if (result.success && result.data) {
        setParsedVerses([{ id: Date.now(), reference: result.query || query, text: result.data.trim() }]);
      } else {
        setFetchError(result.error || 'Verse not found or invalid query. Try a full reference (e.g., John 3:16).');
        toast({ title: "Error Fetching Verse", description: result.error || 'Unknown error', variant: "destructive" });
      }
    });
  };

  const handleGenerateRtf = () => {
    if (parsedVerses.length === 0) return;

    let rtf = `{\\rtf1\\ansi\\deff0 {\\fonttbl{\\f0 Arial;}} \\fs24`;
    parsedVerses.forEach(verse => {
        const rtfEscape = (str: string | undefined) => String(str || '').replace(/\\/g, '\\\\').replace(/{/g, '\\{').replace(/}/g, '\\}');
        rtf += `{\\pard\\b ${rtfEscape(verse.reference)}\\b0\\par}`;
        const cleanedText = verse.text.replace(/\n\s*\n/g, '\\par ').replace(/\n/g, ' ');
        rtf += `{\\pard ${rtfEscape(cleanedText)}\\par}`;
        rtf += `{\\pard\\par}`; 
    });
    rtf += `}`;
    
    const blob = new Blob([rtf], { type: 'application/rtf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeDate = new Date().toISOString().split('T')[0];
    a.href = url;
    a.download = `sermon-notes-${safeDate}.rtf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({ title: "RTF Exported", description: "Sermon notes RTF file has been downloaded." });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-3">
            <BookOpenText size={32} className="text-accent" />
            Sermon Builder
          </CardTitle>
          <CardDescription>
            Enter Bible verse references to fetch and format them for your sermon notes or presentations.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="font-headline">1. Input Verses</CardTitle>
            <CardDescription>Enter references separated by semicolons (e.g., John 3:16; Romans 8:1; Ps 23:1-6).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
                value={verseInput} 
                onChange={(e) => setVerseInput(e.target.value)}
                className="h-28 bg-background/70 dark:bg-input/70 placeholder:text-muted-foreground"
                placeholder="e.g., John 3:16-17; Romans 8:28; Psalm 23" 
            />
            <Button 
                onClick={handleParseAndFetch} 
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground" 
                disabled={isFetching || !verseInput || (!apiKeyChecked && user) || (!currentApiKey && user) }
            >
              <ChevronsRight className="mr-2 h-4 w-4" />
              {isFetching ? 'Fetching...' : 'Parse & Fetch Verses'}
            </Button>
             {!currentApiKey && apiKeyChecked && user && (
                <p className="text-sm text-destructive mt-2 flex items-center gap-1">
                  <AlertCircle size={16} /> ESV API Key is not configured. Please set it in <Link href="/settings" className="underline hover:text-primary">Settings</Link>.
                </p>
              )}
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="font-headline">2. Formatted Output</CardTitle>
            <CardDescription>Verses will appear here, ready for export.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 w-full p-1 rounded-md border border-input bg-background/50 dark:bg-input/50">
                <div className="p-3 space-y-4">
                    {!verseInput && !isFetching && !fetchError && parsedVerses.length === 0 && (
                         <div className="text-muted-foreground text-center py-10">Your formatted verses will appear here.</div>
                    )}
                    {isFetching && (
                        <div className="text-muted-foreground text-center py-10 flex items-center justify-center gap-2">
                            <Loader2 className="animate-spin" /> Loading...
                        </div>
                    )}
                    {fetchError && !isFetching && (
                        <div className="text-destructive bg-destructive/10 p-4 rounded-md flex items-start gap-2">
                            <AlertCircle className="mt-1 flex-shrink-0"/>
                            <p>{fetchError}</p>
                        </div>
                    )}
                    {!isFetching && !fetchError && parsedVerses.length > 0 && parsedVerses.map(verse => (
                        <div key={verse.id} className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg shadow">
                            <p className="font-semibold text-primary dark:text-primary-foreground/90">{verse.reference}</p>
                            <p className="text-foreground/90 dark:text-foreground/80 mt-1 whitespace-pre-wrap">{verse.text}</p>
                        </div>
                    ))}
                </div>
            </ScrollArea>
            <div className="border-t border-border pt-4 mt-4 flex justify-end">
                 <Button onClick={handleGenerateRtf} disabled={parsedVerses.length === 0 || isFetching} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Download className="mr-2 h-4 w-4" />
                    Generate RTF
                 </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
