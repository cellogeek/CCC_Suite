
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
import { UserPlus } from 'lucide-react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({ title: "Signup Error", description: "Passwords do not match.", variant: "destructive" });
      return;
    }
    setIsPending(true);
    try {
      await signUp(email, password);
      toast({ title: "Signup Successful", description: "Your account has been created. Please sign in." });
      router.push('/login'); // Redirect to login after successful signup
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Signup Failed",
        description: error.message || "Could not create account. Please try again.",
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
          <CardTitle className="text-3xl font-headline">Create your CCC Suite Account</CardTitle>
          <CardDescription>Join us to access powerful tools for worship and sermon preparation.</CardDescription>
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
                placeholder="Choose a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="bg-background/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-background/70"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isPending}>
              <UserPlus className="mr-2 h-5 w-5" />
              {isPending ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
         <CardFooter className="flex flex-col items-center space-y-2 pt-4">
            <p className="text-sm text-muted-foreground">
                Already have an account? <Link href="/login" className="text-primary hover:underline">Sign In</Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
