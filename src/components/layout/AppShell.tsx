
"use client";

import * as React from "react"; 
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Music, BookOpenText, Settings, Menu, LogOut, UserCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const navItems = [
  { href: "/", label: "ChordPro Importer", icon: Music, protected: true },
  { href: "/scripture", label: "Sermon Builder", icon: BookOpenText, protected: true },
  { href: "/settings", label: "Settings", icon: Settings, protected: true },
];

const Logo = () => (
  <div className="p-1.5 bg-accent rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
  </div>
);


export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logOut } = useAuth();
  const { toast } = useToast();

  const currentPage = navItems.find((item) => item.href === pathname || (item.href !== "/" && pathname.startsWith(item.href)));
  
  const handleLogout = async () => {
    try {
      await logOut(); // This will now just log in dev mode
      // toast({ title: "Logged Out (Dev Mode)", description: "Logout simulated." });
    } catch (error) {
      toast({ title: "Logout Error (Dev Mode)", description: "Could not simulate log out. Please try again.", variant: "destructive" });
    }
  };

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  
  /*
  React.useEffect(() => {
    // This redirection logic is disabled for development to keep app accessible
    // if (!loading && !user && !isAuthPage) {
    //   router.push('/login');
    // }
    // if (!loading && user && isAuthPage) {
    //   router.push('/');
    // }
  }, [user, loading, isAuthPage, router, pathname]);
  */

  // In dev mode with mocked user, isAuthPage check is the main driver for displaying content
  // If we are on login/signup, we show that page's content directly
  if (isAuthPage && !user) { // Allow viewing login/signup if user explicitly logs out (or if mock fails)
    return <div className="min-h-screen bg-background">{children}</div>;
  }
  
  // If loading (even if mocked to false) or no user (and not an auth page)
  // This condition will effectively be false in dev mode because user is mocked and loading is false
  if (loading || (!user && !isAuthPage)) {
     return ( // Fallback minimal loader if auth context is somehow not ready
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Button disabled size="lg">
          Preparing Application...
        </Button>
      </div>
     );
  }


  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="hidden md:block border-r border-sidebar-border bg-sidebar">
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <h1 className="text-2xl font-headline font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              CCC <span className="text-accent group-data-[collapsible=icon]:hidden">Suite</span>
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
                  className="font-body text-base text-sidebar-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground"
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
              <Button variant="ghost" className="flex items-center justify-start gap-3 w-full p-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0 text-sidebar-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground">
                <Avatar className="h-9 w-9">
                  {user?.photoURL ? <AvatarImage src={user.photoURL} alt="User Avatar" /> : <AvatarFallback><UserCircle size={20}/></AvatarFallback>}
                </Avatar>
                <div className="group-data-[collapsible=icon]:hidden text-left">
                    <p className="font-semibold text-sm font-body">{user?.displayName || user?.email?.split('@')[0] || "User"}</p>
                    <p className="text-xs text-muted-foreground font-body">{user?.email || "Logged In"}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start" className="w-56 font-body mb-2 bg-popover text-popover-foreground">
              <DropdownMenuLabel>{user?.displayName || user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>Profile (soon)</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:bg-red-500/10 focus:text-red-600 dark:text-red-400 dark:focus:bg-red-400/10 dark:focus:text-red-300">
                <LogOut className="mr-2 h-4 w-4" />
                Log out (Dev Mode)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      
      <div className="flex flex-col md:pl-[var(--sidebar-width)] group-data-[collapsible=icon]:md:pl-[var(--sidebar-width-icon)] transition-[padding-left] duration-200 ease-linear bg-background">
         <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-md md:justify-end">
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col p-0 w-72 bg-sidebar text-sidebar-foreground">
                        <SidebarHeader className="p-4 border-b border-sidebar-border">
                             <Link href="/" className="flex items-center gap-3">
                                <Logo />
                                <h1 className="text-xl font-headline font-bold text-sidebar-foreground">
                                CCC <span className="text-accent">Suite</span>
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
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/80",
                                (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) && "bg-sidebar-accent text-sidebar-accent-foreground"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.label}
                            </Link>
                            ))}
                        </nav>
                        </SidebarContent>
                         <SidebarFooter className="p-4 mt-auto border-t border-sidebar-border">
                            <Button variant="ghost" className="flex items-center justify-start gap-3 w-full p-2 text-sidebar-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground">
                                <Avatar className="h-9 w-9">
                                  {user?.photoURL ? <AvatarImage src={user.photoURL} alt="User Avatar" /> : <AvatarFallback><UserCircle size={20}/></AvatarFallback>}
                                </Avatar>
                                <div className="text-left">
                                    <p className="font-semibold text-sm font-body">{user?.displayName || user?.email?.split('@')[0] || "User"}</p>
                                </div>
                            </Button>
                             <Button onClick={handleLogout} variant="outline" className="w-full mt-2 text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent/20 hover:border-sidebar-accent">
                                <LogOut className="mr-2 h-4 w-4" />
                                Log out (Dev Mode)
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
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="max-w-screen-2xl mx-auto"> 
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
