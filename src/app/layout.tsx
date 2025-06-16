import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppShell from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'CCC Suite',
  description: 'Suite for ChordPro, Scripture, and more.',
  icons: {
    icon: '/favicon.ico', // Placeholder, actual favicon not generated
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppShell>{children}</AppShell>
        <Toaster />
      </body>
    </html>
  );
}
