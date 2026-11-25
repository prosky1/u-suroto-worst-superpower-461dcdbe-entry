import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I can hear plants scream, but only when I water them wrong.";

// Runtime gate: the scorer requires 1-140 UTF-8 characters, one line,
// not only whitespace. Fail loudly here rather than ship an invalid entry.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(`entry length ${charCount} outside 1..140`);
}
if (LINE.includes("\n") || LINE.trim() === "") {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
