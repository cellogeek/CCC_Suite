
"use client";

import React, { useState, useTransition, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, Save, Eye, EyeOff, Trash2, KeyRound } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { saveApiKey, getApiKey } from '@/lib/actions';
import { useAuth } from '@/contexts/AuthContext';

export default function SettingsPage() {
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [isProcessing, startApiTransition] = useTransition();
  const { toast } = useToast();
  const { user } = useAuth();

  const fetchAndSetApiKey = useCallback(async () => {
    if (!user) return;
    startApiTransition(async () => {
      try {
        const currentKey = await getApiKey(user.uid);
        if (currentKey) {
          setApiKeyInput(currentKey);
        } else {
          setApiKeyInput(""); 
        }
      } catch (error) {
        console.error("Failed to fetch API key:", error);
        toast({
          title: "Error",
          description: "Could not retrieve current API key.",
          variant: "destructive",
        });
      }
    });
  }, [user, toast]);

  useEffect(() => {
    fetchAndSetApiKey();
  }, [fetchAndSetApiKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to save settings.", variant: "destructive" });
      return;
    }
    startApiTransition(async () => {
      const result = await saveApiKey(user.uid, apiKeyInput);
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        });
      } else {
        toast({
          title: "Error Saving Key",
          description: result.message,
          variant: "destructive",
        });
      }
    });
  };
  
  const handleClearKey = () => {
    if (!user) {
      toast({ title: "Not Authenticated", description: "Please log in to clear settings.", variant: "destructive" });
      return;
    }
    startApiTransition(async () => {
      const result = await saveApiKey(user.uid, ""); 
      if (result.success) {
        setApiKeyInput("");
        toast({
          title: "API Key Cleared",
          description: result.message,
        });
      } else {
        toast({
          title: "Error Clearing Key",
          description: result.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-3">
            <SettingsIcon size={32} className="text-accent" />
            Application Settings
          </CardTitle>
          <CardDescription>
            Manage API keys for external services like ESV Bible API.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <KeyRound className="text-primary" />
            API Keys
          </CardTitle>
          <CardDescription>Your API keys are stored securely and used only for their intended purpose.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="esv-api-key" className="block text-sm font-medium">ESV API Key</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="esv-api-key"
                  type={showApiKey ? "text" : "password"}
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="Enter your ESV API Key"
                  className="bg-background/70 dark:bg-input/70 flex-grow"
                  disabled={isProcessing || !user}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setShowApiKey(!showApiKey)}
                  aria-label={showApiKey ? "Hide API Key" : "Show API Key"}
                  disabled={isProcessing || !user}
                >
                  {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Obtain an API key from the <a href="https://api.esv.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">ESV API website</a>.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button type="submit" disabled={isProcessing || !user} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Save className="mr-2 h-4 w-4" />
                {isProcessing ? "Saving..." : "Save API Key"}
              </Button>
              {apiKeyInput && (
                <Button type="button" variant="outline" onClick={handleClearKey} disabled={isProcessing || !user} className="text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/50">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Key
                </Button>
              )}
            </div>
            {!user && <p className="text-sm text-destructive">Please log in to manage API keys.</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
