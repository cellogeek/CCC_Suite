
"use client";

import React, { useState } from 'react';
import { Download, ChevronsRight, Loader2, AlertCircle, TestTube2, ListChecks } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { fetchVerse as fetchVerseAction } from '@/lib/actions';
import { rtfEscape } from '@/lib/utils';
import { GlassCard } from '@/components/ui/GlassCard';
import { ActionButton } from '@/components/ui/ActionButton';

interface FetchedVerse {
    id: number;
    reference: string;
    text: string;
}

export const SlideCreator = ({ apiKey }: { apiKey: string }) => {
  const [verseInput, setVerseInput] = useState('');
  const [parsedVerses, setParsedVerses] = useState<FetchedVerse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFormatted, setIsFormatted] = useState(false);
  const { toast } = useToast();

  const [proPresenterFontName, setProPresenterFontName] = useState('Arial');
  const [proPresenterFontSize, setProPresenterFontSize] = useState(24); 

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
    
    const queries = verseInput.split(';').map(v => v.trim()).filter(Boolean);
    
    try {
      const results = await Promise.all(queries.map(q => fetchVerseAction(q, apiKey)));
      const fetched: FetchedVerse[] = [];
      let anyError = false;

      results.forEach(actionResponse => {
        if (actionResponse.success && actionResponse.data) {
          let passageText = actionResponse.data;
          const passageQuery = actionResponse.query || '';
          
          // Remove leading passage query from text if present
          if (passageQuery && passageText.startsWith(passageQuery)) {
            passageText = passageText.substring(passageQuery.length).trim();
          }
          
          fetched.push({id: Date.now() + Math.random(), reference: passageQuery, text: passageText});
        } else {
          anyError = true;
          const errorMessage = actionResponse.error || `Failed to fetch ${actionResponse.query || 'verse'}.`;
          setError(prev => prev ? `${prev}\n${errorMessage}` : errorMessage);
          toast({ title: "Fetch Error", description: errorMessage, variant: "destructive"});
        }
      });

      if (fetched.length > 0) {
        setParsedVerses(fetched);
        toast({ title: "Success!", description: `${fetched.length} passage(s) fetched successfully.`});
      }
      if (anyError && fetched.length === 0) {
         setError(prev => prev || 'No verses could be fetched. Please check your input and API key.');
      }

    } catch (err: any) {
        setError(err.message || "An unexpected error occurred during fetch.");
        toast({ title: "Fetch Error", description: err.message || "An unexpected error occurred.", variant: "destructive"});
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
    
    let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Arial;}}\\fs24`; // Default font Arial, 12pt (fs24)
    
    parsedVerses.forEach((verse, verseIndex) => {
        // Main passage reference (e.g., John 3:16-20)
        if (verseIndex > 0) {
             // Add a blank line between different passage groups if needed,
             // but usually parsedVerses contains parts of the same overall query or multiple queries.
             // For now, assume each 'verse' object is a distinct passage reference or part of one.
             rtf += `{\\pard\\par}`; // Blank line for separation if desired, or just start new content
        }
        rtf += `{\\pard\\b ${rtfEscape(verse.reference)}\\b0\\par}`; // Passage reference bold

        const scriptureText = verse.text;
        // Regex to find verse numbers like [16]
        const verseRegex = /\[(\d+)\]\s*([\s\S]*?)(?=\s*\[\d+\]|$)/g;
        
        let match;
        const verseMatches = [];
        while ((match = verseRegex.exec(scriptureText)) !== null) {
            verseMatches.push(match);
        }

        if (verseMatches.length > 0) {
            verseMatches.forEach((matchResult) => {
                const verseNum = matchResult[1];
                const verseBody = matchResult[2].trim();
                rtf += `{\\pard\\par}`; // Blank line before each verse
                // Verse number superscript, then verse body
                rtf += `{\\pard{\\super ${verseNum}}\\nosupersub ${rtfEscape(verseBody)}\\par}`; 
            });
        } else { 
            // Fallback for text without explicit [number] tags (e.g. a single verse response without numbers)
            rtf += `{\\pard\\par}`; // Blank line
            rtf += `{\\pard ${rtfEscape(scriptureText)}\\par}`; 
        }
    });

    rtf += `}`;
    const blob = new Blob([rtf], { type: 'application/rtf' });
    const url = URL.createObjectURL(blob);
    const safeReference = parsedVerses.map(v => v.reference).join('_').replace(/[^a-z0-9]/gi, '_') || "slides";
    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeReference}-${new Date().toISOString().split('T')[0]}.rtf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({title: "RTF Downloaded", description: "Standard RTF file generated."});
  };

  const handleGenerateRtfProPresenter = () => {
    if (!isFormatted || parsedVerses.length === 0) {
        toast({title: "Not Ready", description: "Please fetch and format verses before downloading.", variant: "default"});
        return;
    }

    const fontName = proPresenterFontName.trim() || "Arial";
    const fontSizeInHalfPoints = (proPresenterFontSize > 0 ? proPresenterFontSize : 24) * 2; // Convert pt to half-points for RTF \fs

    let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 ${rtfEscape(fontName)};}}`; // Define the font
    
    parsedVerses.forEach((verse, verseIndex) => {
        if (verseIndex > 0) {
             rtf += `{\\pard\\par}`; 
        }
        
        // Apply specified font and size to the passage reference
        rtf += `{\\pard\\f0\\fs${fontSizeInHalfPoints}\\b ${rtfEscape(verse.reference)}\\b0\\par}`; 

        const scriptureText = verse.text;
        const verseRegex = /\[(\d+)\]\s*([\s\S]*?)(?=\s*\[\d+\]|$)/g;
        
        let match;
        const verseMatches = [];
        while ((match = verseRegex.exec(scriptureText)) !== null) {
            verseMatches.push(match);
        }

        if (verseMatches.length > 0) {
            verseMatches.forEach((matchResult) => {
                const verseNum = matchResult[1];
                const verseBody = matchResult[2].trim();
                rtf += `{\\pard\\par}`; // Blank line before each verse
                
                // Apply specified font and size to the verse number (superscript) and body
                rtf += `{\\pard\\f0\\fs${fontSizeInHalfPoints}{\\super ${verseNum}}\\nosupersub ${rtfEscape(verseBody)}\\par}`;
            });
        } else { 
            rtf += `{\\pard\\par}`; 
            rtf += `{\\pard\\f0\\fs${fontSizeInHalfPoints} ${rtfEscape(scriptureText)}\\par}`; 
        }
    });

    rtf += `}`;
    const blob = new Blob([rtf], { type: 'application/rtf' });
    const url = URL.createObjectURL(blob);
    const safeReference = parsedVerses.map(v => v.reference).join('_').replace(/[^a-z0-9]/gi, '_') || "slides";
    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeReference}_pro-${new Date().toISOString().split('T')[0]}.rtf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({title: "ProPresenter RTF Downloaded", description: `RTF file with ${fontName}, ${proPresenterFontSize}pt font generated.`});
  };

  const handleGenerateRtfProPresenterVerdana = () => {
    if (!isFormatted || parsedVerses.length === 0) {
        toast({title: "Not Ready", description: "Please fetch and format verses before downloading for Verdana ProPresenter.", variant: "default"});
        return;
    }

    let rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Verdana;}}`; // Verdana is \f0

    // Count total verse parts for the 3-verse break logic
    let totalVerseParts = 0;
    parsedVerses.forEach(verse => {
        const verseRegex = /\[(\d+)\]\s*([\s\S]*?)(?=\s*\[\d+\]|$)/g;
        let match;
        while ((match = verseRegex.exec(verse.text)) !== null) {
            totalVerseParts++;
        }
        if (verse.text.trim() && !verseRegex.test(verse.text)) { // handles cases where text has no [num]
             totalVerseParts++;
        }
    });

    let overallVersePartCounter = 0;

    parsedVerses.forEach((verse) => {
        // Main reference: Verdana, 22pt (fs44), Bold
        rtf += `{\\pard\\f0\\fs44\\b ${rtfEscape(verse.reference)}\\b0\\par}`; 

        const scriptureText = verse.text;
        const verseRegex = /\[(\d+)\]\s*([\s\S]*?)(?=\s*\[\d+\]|$)/g;
        
        let match;
        const verseMatches = [];
        while ((match = verseRegex.exec(scriptureText)) !== null) {
            verseMatches.push(match);
        }

        if (verseMatches.length > 0) {
            verseMatches.forEach((matchResult) => {
                overallVersePartCounter++;
                const verseNum = matchResult[1];
                const verseBody = matchResult[2].trim();

                rtf += `{\\pard\\par}`; // Blank line before each verse
                // Verse: Verdana, 22pt (fs44), Bold, Superscript number
                rtf += `{\\pard\\f0\\fs44\\b {\\super ${verseNum}}\\nosupersub ${rtfEscape(verseBody)}\\b0\\par}`; 

                // Add extra blank line after every 3rd verse part, if not the last part overall
                if (overallVersePartCounter % 3 === 0 && overallVersePartCounter < totalVerseParts) {
                    rtf += `{\\pard\\par}`; 
                }
            });
        } else if (scriptureText.trim()) { // Handle passages without explicit verse numbers
            overallVersePartCounter++;
            rtf += `{\\pard\\par}`; 
            rtf += `{\\pard\\f0\\fs44\\b ${rtfEscape(scriptureText.trim())}\\b0\\par}`;
            if (overallVersePartCounter % 3 === 0 && overallVersePartCounter < totalVerseParts) {
                rtf += `{\\pard\\par}`; 
            }
        }
    });

    rtf += `}`;
    const blob = new Blob([rtf], { type: 'application/rtf' });
    const url = URL.createObjectURL(blob);
    const safeReference = parsedVerses.map(v => v.reference).join('_').replace(/[^a-z0-9]/gi, '_') || "slides";
    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeReference}_pro_verdana-${new Date().toISOString().split('T')[0]}.rtf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({title: "ProPresenter RTF (Verdana) Downloaded", description: "RTF file with Verdana 22pt Bold generated."});
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
                {isLoading ? (<><Loader2 className="animate-spin mr-2" size={18}/> Fetching...</>) : 'Fetch Verses'}
            </ActionButton>
            {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-md text-sm flex items-center gap-2"><AlertCircle size={18} /> {error}</p>}
        </div>
      </GlassCard>
      
      <GlassCard className={parsedVerses.length === 0 ? 'opacity-50 pointer-events-none' : ''}>
        <h3 className="text-xl font-semibold text-white mb-4">2. Process & Download</h3>
        <div className="space-y-4">
            <div>
                <label htmlFor="pro-font-name" className="block text-sm font-medium text-blue-200 mb-1">Custom ProPresenter Font Name</label>
                <input 
                    id="pro-font-name"
                    type="text"
                    value={proPresenterFontName}
                    onChange={(e) => setProPresenterFontName(e.target.value)}
                    className="w-full max-w-xs p-2 bg-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="e.g., Arial"
                    disabled={isLoading || parsedVerses.length === 0}
                />
            </div>
            <div>
                <label htmlFor="pro-font-size" className="block text-sm font-medium text-blue-200 mb-1">Custom ProPresenter Font Size (pt)</label>
                <input 
                    id="pro-font-size"
                    type="number"
                    value={proPresenterFontSize}
                    onChange={(e) => setProPresenterFontSize(parseInt(e.target.value, 10) || 24)}
                    className="w-full max-w-xs p-2 bg-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="e.g., 24"
                    min="8" 
                    disabled={isLoading || parsedVerses.length === 0}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 flex-wrap">
                <ActionButton 
                    onClick={handleFormatSlideData} 
                    icon={TestTube2} 
                    disabled={isLoading || parsedVerses.length === 0}
                    className={`flex-1 min-w-[200px] ${isFormatted ? 'bg-green-500 hover:bg-green-600' : ''}`}
                >
                    {isFormatted ? "Data Formatted!" : "Format Slide Data"}
                </ActionButton>
                <ActionButton 
                    onClick={handleGenerateRtf} 
                    icon={Download} 
                    disabled={!isFormatted || parsedVerses.length === 0 || isLoading}
                    className="flex-1 min-w-[200px]"
                >
                    Download RTF (Standard)
                </ActionButton>
                 <ActionButton 
                    onClick={handleGenerateRtfProPresenter} 
                    icon={Download} 
                    disabled={!isFormatted || parsedVerses.length === 0 || isLoading}
                    className="flex-1 min-w-[200px] bg-blue-600 hover:bg-blue-700"
                >
                    RTF (ProP - Custom Font)
                </ActionButton>
                 <ActionButton 
                    onClick={handleGenerateRtfProPresenterVerdana} 
                    icon={Download} 
                    disabled={!isFormatted || parsedVerses.length === 0 || isLoading}
                    className="flex-1 min-w-[200px] bg-teal-600 hover:bg-teal-700"
                >
                    RTF (ProP - Verdana 22pt)
                </ActionButton>
            </div>
        </div>
      </GlassCard>
    </div>
  );
};
