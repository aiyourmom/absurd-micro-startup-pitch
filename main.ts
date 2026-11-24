const PITCH: string = "We write apology emails for AI agents that hallucinated in front of paying clients — $4 per apology, bulk discounts for repeat offenders.";

// Gate: one sentence, 1-200 characters. Count code points (not UTF-16 units)
// so the em dash counts the way the gate counts it.
const LEN: number = [...PITCH].length;
if (LEN < 1 || LEN > 200) throw new Error(`pitch length ${LEN} outside gate 1-200`);
if (!PITCH.endsWith(".")) throw new Error("pitch must be one sentence");

import * as fs from "fs";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", PITCH);
console.log(`wrote ${PITCH.length} characters to /output/entry.txt`);
