
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await signIn(email, password);
      toast({ title: "Login Successful", description: "Welcome back!" });
      router.push('/'); // Redirect to homepage after successful login
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md shadow-2xl bg-card/80 backdrop-blur-lg border-border">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <svg width="48" height="48" viewBox="0 0 100 100" className="text-primary" fill="currentColor">
              <rect width="100" height="100" rx="20" fill="hsl(var(--primary-foreground))" />
              <path d="M30 70 L30 30 L50 30 Q65 30 65 40 Q65 50 50 50 L40 50 M40 50 L70 50 L70 70 L50 70 Q35 70 35 60 Q35 50 50 50" stroke="hsl(var(--primary))" strokeWidth="10" fill="none" />
            </svg>
          </div>
          <CardTitle className="text-3xl font-headline">Welcome to CCC Suite</CardTitle>
          <CardDescription>Sign in to access your worship and sermon tools.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background/70"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isPending}>
              <LogIn className="mr-2 h-5 w-5" />
              {isPending ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2 pt-4">
            <p className="text-sm text-muted-foreground">
                Forgot your password? <Link href="#" className="text-primary hover:underline">Reset it here</Link>.
            </p>
            <p className="text-sm text-muted-foreground">
                Don't have an account? <Link href="/signup" className="text-primary hover:underline">Sign Up</Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
