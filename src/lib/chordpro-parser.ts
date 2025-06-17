
// --- NEW CUSTOM PARSING ENGINE V9 ---
interface SongLineItem {
  chord: string | null;
  lyrics: string;
}

interface SongLine {
  type: 'lyrics' | 'section' | 'comment' | 'chorus_start' | 'chorus_end';
  items?: SongLineItem[];
  content?: string;
}

export interface ParsedSong {
  title: string;
  artist: string;
  key: string;
  meta: Record<string, string>;
  footer_comments: string[];
  body: SongLine[];
}

export const CustomParserV9 = {
  parse(text: string): ParsedSong {
    const song: ParsedSong = {
      title: 'Untitled Song',
      artist: '',
      key: 'C',
      meta: {},
      footer_comments: [],
      body: [],
    };
    const lines = text.split(/\r?\n/);

    // --- New "Smart Footer" Detection Logic ---
    let inFooterSection = false;

    lines.forEach(line => {
      const trimmedLine = line.trim();

      // Check if we should enter the footer section. 
      // This triggers on the first plain text line starting with "CCLI".
      // Once this flag is true, it stays true for the rest of the file.
      if (!inFooterSection && !trimmedLine.startsWith('{') && trimmedLine.toLowerCase().startsWith('ccli')) {
          inFooterSection = true;
      }

      // If we are in the footer section, treat the entire line as a footer comment
      // and skip all other parsing for this line.
      // We'll push the original line content (not trimmed) to preserve formatting.
      if (inFooterSection) {
          song.footer_comments.push(line);
          return; // Move to the next line
      }
      
      // --- Existing Parser Logic ---
      // This code will only run if we have NOT entered the footer section.
      const directiveMatch = trimmedLine.match(/^{\s*([^:]+?)\s*:\s*(.+?)\s*}/) || trimmedLine.match(/^{\s*(.+?)\s*}/);
      if (directiveMatch) {
        const key = (directiveMatch[1] || '').toLowerCase().trim();
        const value = (directiveMatch[2] || '').trim();
        switch (key) {
          case 't': case 'title': song.title = value; return;
          case 'k': case 'key': song.key = value; return;
          case 'a': case 'artist': song.artist = value; return;
          case 'soc': case 'start_of_chorus': song.body.push({ type: 'chorus_start' }); return;
          case 'eoc': case 'end_of_chorus': song.body.push({ type: 'chorus_end' }); return;
          case 'c': case 'comment': song.body.push({ type: 'comment', content: value }); return;
          // We no longer need the {cf} directive, but we can leave it for backward compatibility
          case 'cf': case 'comment_footer': song.footer_comments.push(value); return;
          default: song.meta[key] = value; return;
        }
      }
      
      const sectionMatch = trimmedLine.match(/^\[([^\[\]]+)\]$/);
       if (sectionMatch) {
           const commonSections = ['verse', 'chorus', 'bridge', 'intro', 'outro', 'instrumental', 'pre-chorus', 'tag', 'v', 'b', 'i', 'o'];
           const content = sectionMatch[1].toLowerCase();
           if (commonSections.some(s => content.startsWith(s))) {
              song.body.push({ type: 'section', content: sectionMatch[1] });
              return;
           }
      }
      
      if (trimmedLine === '') {
           song.body.push({ type: 'lyrics', items: [] });
           return;
      }
      
      const lineItems: SongLineItem[] = [];
      // Use the original line for splitting chords and lyrics to preserve leading/trailing spaces if any.
      const parts = line.split(/(\[[^\]]+\])/g).filter(Boolean);
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part.startsWith('[')) {
          const chord = part.substring(1, part.length - 1);
          const nextPartIsLyrics = i + 1 < parts.length && !parts[i + 1].startsWith('[');
          const lyrics = nextPartIsLyrics ? parts[i + 1] : '';
          lineItems.push({ chord, lyrics });
          if (nextPartIsLyrics) { i++; }
        } else {
          lineItems.push({ chord: null, lyrics: part });
        }
      }

      if (lineItems.length > 0) {
           song.body.push({ type: 'lyrics', items: lineItems });
      }
    });
    return song;
  }
};
