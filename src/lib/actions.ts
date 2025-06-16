"use server";

import { revalidatePath } from "next/cache";

// This is a placeholder for storing settings. In a real app, use a database or secure storage.
let settingsStore: { apiKey?: string } = {};

export async function saveApiKey(apiKey: string): Promise<{ success: boolean; message: string }> {
  if (!apiKey) {
    // Allow clearing the API key
    settingsStore.apiKey = undefined;
    console.log("API Key cleared (server-side).");
    revalidatePath("/settings");
    revalidatePath("/scripture");
    return { success: true, message: "API Key cleared successfully." };
  }
  
  // Basic validation example (can be more complex)
  if (apiKey.length < 10) {
     return { success: false, message: "API Key seems too short." };
  }

  settingsStore.apiKey = apiKey;
  console.log("API Key saved (server-side).");

  revalidatePath("/settings");
  revalidatePath("/scripture");

  return { success: true, message: "API Key saved successfully." };
}

export async function getApiKey(): Promise<string | null> {
  return settingsStore.apiKey || null;
}

export async function simplifyChordsAI(chordProText: string, currentKey: string): Promise<string> {
    // This is where you would import and call your Genkit flow from src/ai/flows
    // e.g., import { chordSimplifierFlow } from '@/ai/flows/chordSimplifier';
    // const simplifiedOutput = await chordSimplifierFlow.run({ chordProText, currentKey });
    console.log("Calling AI to simplify chords for key:", currentKey);
    
    // Placeholder simulation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Example: very naive simplification for demonstration
    let simplified = chordProText;
    simplified = simplified.replace(/\[([A-G])m7\]/g, '[$1m]'); // m7 to m
    simplified = simplified.replace(/\[([A-G])maj7\]/g, '[$1]'); // maj7 to major
    simplified = simplified.replace(/\[([A-G])7\]/g, '[$1]');   // 7 to major
    simplified = simplified.replace(/\[([A-G])sus4\]/g, '[$1]'); // sus4 to major
    simplified = simplified.replace(/\[([A-G])add9\]/g, '[$1]'); // add9 to major

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

    // Placeholder: In a real app, use the apiKey to call the ESV API.
    // Example ESV API endpoint: `https://api.esv.org/v3/passage/text/?q=${encodeURIComponent(reference)}&include-headings=false...`
    // Headers: `Authorization: Token ${apiKey}`
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    if (reference.trim().toLowerCase() === "john 3:16") {
      return { success: true, data: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. (Fetched via API placeholder)"};
    } else if (reference.trim().toLowerCase() === "genesis 1:1") {
      return { success: true, data: "In the beginning, God created the heavens and the earth. (Fetched via API placeholder)"};
    }
    return {success: false, error: `Verse for "${reference}" not found or invalid reference (API placeholder).`};
}
