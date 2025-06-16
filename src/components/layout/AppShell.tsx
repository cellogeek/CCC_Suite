
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Music2, BookOpenText, Settings, Menu } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // For mobile nav
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "ChordPro Suite", icon: Music2 },
  { href: "/scripture", label: "Scripture Lookup", icon: BookOpenText },
  { href: "/settings", label: "Settings", icon: Settings },
];

// Simple SVG Logo Placeholder
const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" className="text-primary" fill="currentColor">
    <rect width="100" height="100" rx="20" fill="hsl(var(--primary-foreground))" />
    <path d="M30 70 L30 30 L50 30 Q65 30 65 40 Q65 50 50 50 L40 50 M40 50 L70 50 L70 70 L50 70 Q35 70 35 60 Q35 50 50 50" stroke="hsl(var(--primary))" strokeWidth="10" fill="none" />
  </svg>
);


export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentPage = navItems.find((item) => item.href === pathname || (item.href !== "/" && pathname.startsWith(item.href)));

  return (
    <SidebarProvider defaultOpen={true}>
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:block border-r border-sidebar-border">
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <h1 className="text-2xl font-headline font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              CCC Suite
            </h1>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                  tooltip={{ children: item.label, className: "font-body" }}
                  className="font-body text-base"
                >
                  <Link href={item.href}>
                    <item.icon size={20}/>
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 mt-auto border-t border-sidebar-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center justify-start gap-3 w-full p-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="group-data-[collapsible=icon]:hidden text-left">
                    <p className="font-semibold text-sm font-body">User Name</p>
                    <p className="text-xs text-muted-foreground font-body">user@example.com</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start" className="w-56 font-body mb-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      
      <div className="flex flex-col md:pl-[var(--sidebar-width)] group-data-[collapsible=icon]:md:pl-[var(--sidebar-width-icon)] transition-[padding-left] duration-200 ease-linear">
        {/* Mobile Header & Sidebar Trigger */}
         <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-md md:justify-end">
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col p-0 w-72">
                        <SidebarHeader className="p-4 border-b">
                             <Link href="/" className="flex items-center gap-3">
                                <Logo />
                                <h1 className="text-xl font-headline font-bold text-sidebar-foreground">
                                CCC Suite
                                </h1>
                            </Link>
                        </SidebarHeader>
                        <SidebarContent className="py-4">
                        <nav className="grid gap-2 text-lg font-medium">
                            {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) && "bg-muted text-primary"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.label}
                            </Link>
                            ))}
                        </nav>
                        </SidebarContent>
                         <SidebarFooter className="p-4 mt-auto border-t">
                           {/* Simplified user for mobile */}
                            <Button variant="ghost" className="flex items-center justify-start gap-3 w-full p-2">
                                <Avatar className="h-9 w-9">
                                <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar" />
                                <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <div className="text-left">
                                    <p className="font-semibold text-sm font-body">User Name</p>
                                </div>
                            </Button>
                        </SidebarFooter>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:block flex-1">
                 <h2 className="text-xl font-semibold font-headline text-foreground">
                    {currentPage?.label || "CCC Suite"}
                </h2>
            </div>
            <div className="md:hidden flex-1 text-center">
                <h2 className="text-lg font-semibold font-headline text-foreground">
                    {currentPage?.label || "CCC Suite"}
                </h2>
            </div>
            <div className="hidden md:block">
                <SidebarTrigger />
            </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-background">
            <div className="max-w-screen-xl mx-auto">
             {children}
            </div>
        </main>
        <footer className="border-t bg-background/80 backdrop-blur-md p-4 text-center text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} CCC Suite. Designed with reverence and joy.
        </footer>
      </div>
    </SidebarProvider>
  );
}
