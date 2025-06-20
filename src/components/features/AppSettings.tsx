
"use client";

import React, { useState, useEffect } from 'react';
import { Settings, KeyRound, Eye, EyeOff, Save, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { getApiKey, saveApiKey } from '@/lib/actions';
import { GlassCard } from '@/components/ui/GlassCard';
import { ActionButton } from '@/components/ui/ActionButton';

export const AppSettings = ({ appApiKey, setAppApiKey }: { appApiKey: string, setAppApiKey: (key: string) => void }) => {
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
