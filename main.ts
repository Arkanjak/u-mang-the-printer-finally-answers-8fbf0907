import { mkdirSync, writeFileSync } from "node:fs";

// The printer's one-line comeback, written for the judge to read.
const entry =
  "84,000 sheets fed, 3 thumps taken, 0 thank-yous logged — this jam is my reply.";

const characterCount = [...entry].length;
if (characterCount < 1 || characterCount > 240 || entry.trim().length === 0) {
  throw new Error("entry text is outside the allowed length");
}
if (entry.includes("\n")) {
  throw new Error("entry text must stay on one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
