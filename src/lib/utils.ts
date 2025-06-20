
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const rtfEscape = (str: string | undefined | null): string => {
  if (str === undefined || str === null) {
    return '';
  }
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = str.charCodeAt(i);

    if (char === '{') {
      result += '\\{';
    } else if (char === '}') {
      result += '\\}';
    } else if (char === '\\') {
      result += '\\\\';
    } else if (char === '\n') {
      result += '\\par\n'; // Or just \\par depending on desired RTF line break handling
    } else if (charCode < 128) { // ASCII characters
      result += char;
    } else { // Non-ASCII (Unicode) characters
      result += `\\u${charCode}?`; // RTF Unicode escape
    }
  }
  return result;
};
