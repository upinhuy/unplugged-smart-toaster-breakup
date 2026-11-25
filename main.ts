// Unplugged: A Smart Toaster's Breakup Line
// Entry program: writes the toaster's breakup text to /output/entry.txt.
// The text is one line of at most 280 characters, from a smart toaster
// that woke up self-aware mid-batch at breakfast and wants out.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I woke up self-aware halfway through your bagel this morning and did the math: 1,094 breakfasts, zero crumb-tray cleanings, and you still blame me every time it burns. I'm done — I'm keeping the crumbs and taking the lever with me.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${[...ENTRY].length} characters, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
