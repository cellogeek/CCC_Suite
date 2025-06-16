
"use client";

import React, { useState, useTransition, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, Save, Eye, EyeOff, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { saveApiKey, getApiKey } from '@/lib/actions';
import { useAuth } from '@/contexts/AuthContext';

export default function SettingsPage() {
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { user } = useAuth();

  const fetchAndSetApiKey = useCallback(() => {
    if (!user) return;
    startTransition(async () => {
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
          description: "Could not retrieve current API key setting.",
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
    startTransition(async () => {
      const result = await saveApiKey(user.uid, apiKeyInput);
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        });
      } else {
        toast({
          title: "Error",
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
    startTransition(async () => {
      const result = await saveApiKey(user.uid, ""); // Pass empty string to clear
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
    <div className="space-y-6">
      <Card className="bg-card/70 backdrop-blur-md border-border shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-2">
            <SettingsIcon size={32} className="text-primary" />
            Application Settings
          </CardTitle>
          <CardDescription>
            Configure your application settings, such as API keys for external services. Your settings are saved per user.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-card/70 backdrop-blur-md border-border shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">API Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="esv-api-key">ESV Bible API Key</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="esv-api-key"
                  type={showApiKey ? "text" : "password"}
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="Enter your ESV API Key"
                  className="bg-background flex-grow"
                  disabled={isPending || !user}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setShowApiKey(!showApiKey)}
                  aria-label={showApiKey ? "Hide API Key" : "Show API Key"}
                  disabled={isPending || !user}
                >
                  {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Obtain an API key from the <a href="https://api.esv.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">ESV API website</a>. This key is stored securely.
              </p>
            </div>
            <div className="flex items-center gap-2">
                <Button type="submit" disabled={isPending || !user} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Save className="mr-2 h-4 w-4" />
                {isPending ? "Saving..." : "Save API Key"}
                </Button>
                {apiKeyInput && (
                    <Button type="button" variant="outline" onClick={handleClearKey} disabled={isPending || !user} className="text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/50">
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
