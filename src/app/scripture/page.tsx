
"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function OldScripturePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-lg text-center card-glass">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Feature Update</CardTitle>
          <CardDescription>
            The Sermon Builder / Slide Creator functionality has been integrated into the main CCC Suite application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            You can find the updated "Slide Creator" tool within the main application interface.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go to Main App
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
