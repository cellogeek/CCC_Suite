
// --- Custom Transposer Engine ---
export const CustomTransposer = {
  notes: {
    sharp: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    flat:  ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"],
  },
  transpose(chordString: string | null, interval: number): string | null {
    if (!chordString || interval === 0) return chordString;
    
    const chordRegex = /^([A-G][#b]?)(.*)/;
    const match = chordString.match(chordRegex);
    
    if (!match) return chordString; // Not a valid chord root or no suffix (e.g. "N.C.")

    const [, root, suffix] = match;
    
    const sharpIndex = this.notes.sharp.indexOf(root);
    const flatIndex = this.notes.flat.indexOf(root);
    
    let newRoot: string;

    if (sharpIndex !== -1) { // Prefer sharp notes for transposition if root is sharp or natural
      newRoot = this.notes.sharp[(sharpIndex + interval + 12) % 12];
    } else if (flatIndex !== -1) { // Use flat notes if root is flat
      newRoot = this.notes.flat[(flatIndex + interval + 12) % 12];
    } else {
      return chordString; // Should not happen if regex matches
    }
    
    return newRoot + suffix;
  }
};
