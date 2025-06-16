
"use client";

import type { User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut as firebaseSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button'; // For loading state

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, pass: string) => Promise<User | null>;
  signIn: (email: string, pass: string) => Promise<User | null>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for development
const mockUser: User = {
  uid: 'dev-user-uid',
  email: 'dev@example.com',
  displayName: 'Dev User',
  emailVerified: true,
  isAnonymous: false,
  photoURL: null,
  providerData: [],
  metadata: {},
  providerId: 'password',
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => 'dev-token',
  getIdTokenResult: async () => ({ token: 'dev-token', claims: {}, authTime: '', expirationTime: '', issuedAtTime: '', signInProvider: null, signInSecondFactor: null }),
  reload: async () => {},
  toJSON: () => ({}),
};


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(mockUser); // Initialize with mock user
  const [loading, setLoading] = useState(false); // Start with loading false
  const router = useRouter();
  const pathname = usePathname();

  /*
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  */

  /*
  useEffect(() => {
    if (!loading && !user && pathname !== '/login' && pathname !== '/signup') {
      router.push('/login');
    }
  }, [user, loading, router, pathname]);
  */


  const signUp = async (email: string, pass: string): Promise<User | null> => {
    try {
      // For dev mode, we can simulate signup or just log
      console.log("Dev mode: signUp attempted for", email);
      // const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      // return userCredential.user;
      alert("Signup is disabled in dev mode. You are already logged in with a mock user.");
      return mockUser; // Or return a new mock user if needed
    } catch (error) {
      console.error("Error signing up (dev mode):", error);
      throw error; 
    }
  };

  const signIn = async (email: string, pass: string): Promise<User | null> => {
    try {
      // For dev mode, simulate signin
      console.log("Dev mode: signIn attempted for", email);
      // const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      // return userCredential.user;
      alert("Signin is disabled in dev mode. You are already logged in with a mock user.");
      setUser(mockUser); // Ensure mock user is set
      return mockUser;
    } catch (error) {
      console.error("Error signing in (dev mode):", error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      console.log("Dev mode: logOut attempted. User state remains mocked.");
      // await firebaseSignOut(auth);
      // setUser(null); // In dev mode, don't set user to null to keep app accessible
      // router.push('/login'); // Don't redirect in dev mode
      alert("Logout is simulated in dev mode. You remain logged in with a mock user to continue development.");
    } catch (error) {
      console.error("Error signing out (dev mode):", error);
      throw error; 
    }
  };
  
  // This global loading screen is effectively bypassed as loading starts false.
  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-background">
  //       <Button disabled size="lg">
  //         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  //           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  //           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  //         </svg>
  //         Loading Application...
  //       </Button>
  //     </div>
  //   );
  // }


  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

