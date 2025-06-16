
"use client";

import React, { useState, useTransition, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, Save, Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { saveApiKey, getApiKey } from '@/lib/actions';

export default function SettingsPage() {
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const fetchAndSetApiKey = useCallback(() => {
    startTransition(async () => {
      try {
        const currentKey = await getApiKey();
        if (currentKey) {
          setApiKeyInput(currentKey);
        } else {
          setApiKeyInput(""); // Ensure field is cleared if no key is stored
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
  }, [toast]);


  useEffect(() => {
    fetchAndSetApiKey();
  }, [fetchAndSetApiKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await saveApiKey(apiKeyInput);
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
      // Optionally re-fetch to confirm or rely on optimistic update
      // fetchAndSetApiKey(); 
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
            Configure your application settings, such as API keys for external services.
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
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setShowApiKey(!showApiKey)}
                  aria-label={showApiKey ? "Hide API Key" : "Show API Key"}
                >
                  {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Obtain an API key from the <a href="https://api.esv.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">ESV API website</a>. This key is stored server-side (currently in memory for this demo).
              </p>
            </div>
            <Button type="submit" disabled={isPending} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Save className="mr-2 h-4 w-4" />
              {isPending ? "Saving..." : "Save API Key"}
            </Button>
             {apiKeyInput && (
                <Button type="button" variant="outline" onClick={() => {
                    setApiKeyInput("");
                    // Optionally, you could call saveApiKey("") here immediately
                    // or let the user click "Save API Key" to confirm clearing.
                }} className="ml-2">
                    Clear Key
                </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
