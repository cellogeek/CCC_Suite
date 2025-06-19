
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
// AppShell is removed as src/app/page.tsx now provides its own shell for main features
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: 'CCC Suite',
  description: 'Suite for ChordPro, Scripture, and more.',
  icons: {
    icon: '/favicon.ico', 
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
        {/* Font links are now managed within src/app/page.tsx for the main app style */}
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          {children} {/* AppShell removed, children (like page.tsx) now render full layout */}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
