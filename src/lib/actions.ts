
"use server";

import { revalidatePath } from "next/cache";
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import type { User } from "firebase/auth";

// Helper function to get current user (server-side)
// Note: This approach for getting user on server actions is basic.
// For robust auth in server actions, consider using NextAuth.js or managing session state.
// Firebase Admin SDK would be ideal for backend operations if this were a traditional backend.
// Since these are Server Actions, we rely on the client to be authenticated.
// A more secure way would be to pass the user's ID token and verify it.
// For this stub, we'll assume client context provides user for simplicity when calling.

async function getCurrentUserId(): Promise<string | null> {
  // This is a simplified way to get user ID on server actions.
  // In a real app, you'd get this from a session or by verifying an ID token passed from client.
  // For now, this won't work directly without client passing UID or ID token.
  // We will modify functions to accept userId as a parameter.
  // const user = auth.currentUser; // This only works client-side or with specific server setups
  // return user ? user.uid : null; // Placeholder - functions will require userId
  return null;
}


export async function saveApiKey(userId: string, apiKey: string): Promise<{ success: boolean; message: string }> {
  if (!userId) {
    return { success: false, message: "User not authenticated." };
  }

  const userSettingsRef = doc(db, "users", userId, "settings", "api");

  try {
    if (!apiKey) {
      await setDoc(userSettingsRef, { esvApiKey: null }, { merge: true });
      console.log("API Key cleared in Firestore for user:", userId);
      revalidatePath("/settings");
      revalidatePath("/scripture");
      return { success: true, message: "API Key cleared successfully." };
    }

    if (apiKey.length < 10) {
      return { success: false, message: "API Key seems too short." };
    }

    await setDoc(userSettingsRef, { esvApiKey: apiKey }, { merge: true });
    console.log("API Key saved to Firestore for user:", userId);
    revalidatePath("/settings");
    revalidatePath("/scripture");
    return { success: true, message: "API Key saved successfully." };
  } catch (error) {
    console.error("Error saving API key to Firestore:", error);
    return { success: false, message: "Failed to save API key. " + (error as Error).message };
  }
}

export async function getApiKey(userId: string): Promise<string | null> {
   if (!userId) {
    console.log("No user ID provided for getApiKey");
    return null;
  }
  try {
    const userSettingsRef = doc(db, "users", userId, "settings", "api");
    const docSnap = await getDoc(userSettingsRef);
    if (docSnap.exists() && docSnap.data().esvApiKey) {
      return docSnap.data().esvApiKey;
    }
    return null;
  } catch (error) {
    console.error("Error fetching API key from Firestore:", error);
    return null;
  }
}

export async function simplifyChordsAI(chordProText: string, currentKey: string): Promise<string> {
    console.log("Calling AI to simplify chords for key:", currentKey);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let simplified = chordProText;
    // Corrected regular expressions
    simplified = simplified.replace(/\[([A-G])m7\]/g, '[$1m]');
    simplified = simplified.replace(/\[([A-G])maj7\]/g, '[$1]');
    simplified = simplified.replace(/\[([A-G])7\]/g, '[$1]');
    simplified = simplified.replace(/\[([A-G])sus4\]/g, '[$1]');
    simplified = simplified.replace(/\[([A-G])add9\]/g, '[$1]');

    if (simplified === chordProText) {
        return `{comment: AI attempted simplification for key ${currentKey}, but no obvious changes were made based on placeholder logic.}\n${chordProText}`;
    }

    return `{comment: Simplified version for key ${currentKey} (placeholder AI logic)}\n${simplified}`;
}

export async function fetchVerse(reference: string, apiKey: string | null): Promise<{success: boolean, data?: string, error?: string}> {
    console.log(`Fetching verse: ${reference} using API key: ${apiKey ? 'Provided' : 'Not provided'}`);
    if (!apiKey) {
        return {success: false, error: "ESV API Key not configured. Please set it in Settings."};
    }
    
    try {
        const response = await fetch(`https://api.esv.org/v3/passage/text/?q=${encodeURIComponent(reference)}&include-headings=false&include-footnotes=false&include-verse-numbers=true&include-short-copyright=false&include-passage-references=false`, {
            headers: {
                'Authorization': `Token ${apiKey}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("ESV API Error:", errorData);
            return {success: false, error: `ESV API error: ${errorData.detail || response.statusText}`};
        }

        const data = await response.json();
        if (data.passages && data.passages.length > 0) {
            return { success: true, data: data.passages[0].trim() };
        } else {
            return { success: false, error: `Verse for "${reference}" not found or invalid reference.`};
        }

    } catch (error) {
        console.error("Error fetching verse from ESV API:", error);
        return { success: false, error: "Could not connect to ESV API. " + (error as Error).message };
    }
}

export async function saveSongToFirestore(userId: string, songTitle: string, chordProContent: string): Promise<{ success: boolean; message: string; songId?: string }> {
  if (!userId) {
    return { success: false, message: "User not authenticated." };
  }
  if (!songTitle.trim() || !chordProContent.trim()) {
    return { success: false, message: "Song title and content cannot be empty." };
  }

  try {
    const songsCollectionRef = collection(db, "users", userId, "songs");
    const docRef = await addDoc(songsCollectionRef, {
      title: songTitle,
      content: chordProContent,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    revalidatePath("/"); // Revalidate ChordPro page
    return { success: true, message: "Song saved successfully!", songId: docRef.id };
  } catch (error) {
    console.error("Error saving song to Firestore:", error);
    return { success: false, message: "Failed to save song. " + (error as Error).message };
  }
}

export async function loadSongsFromFirestore(userId: string): Promise<{ success: boolean; songs?: {id: string, title: string, content: string}[]; message?: string }> {
  if (!userId) {
    return { success: false, message: "User not authenticated." };
  }

  try {
    const songsCollectionRef = collection(db, "users", userId, "songs");
    const q = query(songsCollectionRef); // Potentially add orderBy('title') or orderBy('updatedAt', 'desc')
    const querySnapshot = await getDocs(q);
    
    const songs: {id: string, title: string, content: string}[] = [];
    querySnapshot.forEach((doc) => {
      songs.push({ id: doc.id, ...doc.data() } as {id: string, title: string, content: string});
    });
    
    return { success: true, songs };
  } catch (error) {
    console.error("Error loading songs from Firestore:", error);
    return { success: false, message: "Failed to load songs. " + (error as Error).message };
  }
}

