
"use client";

import React, { useState, useTransition, useEffect } from 'react';
import Link from 'next/link'; // Added missing import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, Search } from 'lucide-react';
import { fetchVerse, getApiKey } from '@/lib/actions';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export default function ScripturePage() {
  const [reference, setReference] = useState("John 3:16");
  const [verseText, setVerseText] = useState<string | null>(null);
  const [displayedReference, setDisplayedReference] = useState<string | null>(null);
  const [isFetching, startFetchingTransition] = useTransition();
  const { user } = useAuth();
  const { toast } = useToast();
  const [currentApiKey, setCurrentApiKey] = useState<string | null>(null);

  useEffect(() => {
    const loadApiKey = async () => {
      if (user) {
        const key = await getApiKey(user.uid);
        setCurrentApiKey(key);
        if (!key) {
            toast({
                title: "API Key Needed",
                description: "ESV API Key is not set. Please configure it in Settings for full functionality.",
                variant: "default" 
            });
        }
      }
    };
    loadApiKey();
  }, [user, toast]);


  const handleFetchVerse = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerseText(null);
    
    if (!user) {
      toast({ title: "Authentication Required", description: "Please log in to fetch verses.", variant: "destructive" });
      return;
    }
    if (!currentApiKey) {
      toast({ title: "API Key Missing", description: "ESV API Key not found. Please set it in Settings.", variant: "destructive" });
      return;
    }
    
    startFetchingTransition(async () => {
      const result = await fetchVerse(reference, currentApiKey);

      if (result.success && result.data) {
        setVerseText(result.data);
        setDisplayedReference(reference);
      } else {
        setVerseText(null);
        setDisplayedReference(null);
        toast({
            title: "Error Fetching Verse",
            description: result.error || "Could not fetch verse. Check the reference or API key in Settings.",
            variant: "destructive"
        });
      }
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card/70 backdrop-blur-md border-border shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-2">
            <BookOpenText size={32} className="text-primary" />
            Scripture Lookup
          </CardTitle>
          <CardDescription>
            Enter a Bible reference to display the verse. Requires ESV API Key to be set in Settings.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-card/70 backdrop-blur-md border-border shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Enter Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFetchVerse} className="space-y-4">
            <div>
              <Label htmlFor="scripture-reference" className="block text-sm font-medium mb-1">Scripture Reference</Label>
              <div className="flex gap-2">
                <Input
                  id="scripture-reference"
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="e.g., John 3:16"
                  className="flex-grow bg-background"
                  aria-label="Scripture Reference"
                />
                <Button type="submit" disabled={isFetching || !user || !currentApiKey} className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                  <Search className="mr-2 h-4 w-4" />
                  {isFetching ? "Fetching..." : "Fetch Verse"}
                </Button>
              </div>
               {!currentApiKey && user && (
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                  ESV API Key is not configured. Please set it in <Link href="/settings" className="underline hover:text-primary">Settings</Link>.
                </p>
              )}
            </div>
          </form>

          { verseText && !isFetching && (
            <div className="mt-6 pt-4 border-t border-border">
              {displayedReference && <h3 className="font-headline text-xl mb-2 text-primary-foreground">{displayedReference}</h3>}
              <blockquote className="p-4 border-l-4 border-accent bg-accent/10 text-accent-foreground/90 rounded-r-md shadow">
                <p className="italic leading-relaxed text-base">{verseText}</p>
              </blockquote>
            </div>
          )}
           {isFetching && (
             <div className="mt-6 pt-4 text-center text-muted-foreground">
                <p>Loading verse...</p>
             </div>
           )}
        </CardContent>
      </Card>
    </div>
  );
}

    