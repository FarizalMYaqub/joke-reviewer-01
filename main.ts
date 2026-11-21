// The Nodding Manager — a program that writes one one-line joke about
// working beside an AI coding agent.
//
// The joke: the agent now does the writing, the reviewing, and the
// merging, and the human's remaining job is to sit there nodding at a
// diff too big to read, like a manager who stopped reading the reports.
// The surprise lands on "manager": the developer has been quietly
// demoted by their own assistant. The truth any developer recognises
// at once is the nod — nobody reads a 400-line agent diff line by line.
//
// The judge reads exactly the text this program writes, so the output
// is fixed and deterministic: the same joke on every run, in both of
// the grader's runs. The program's job is to carry it to
// /output/entry.txt intact and to refuse to write anything outside the
// gate (1-280 Unicode code points, not only white space).

import { mkdir, readFile, writeFile } from "node:fs/promises";

const JOKE: string =
  "My AI coding agent writes the code, reviews it, and merges it — I just sit here nodding at the diff like a manager who stopped reading the reports.";

// The gate counts Unicode code points, not bytes, and refuses blank text.
// A joke that opens or closes with white space would reach the judge with
// a ragged edge, so leading and trailing space fail here too, as does a
// joke that never lands on terminal punctuation.
function validateJoke(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 280) {
    throw new Error(`joke is ${length} code points, must be 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only white space");
  }
  if (text.includes("\n")) {
    throw new Error("joke must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("joke must not open or close with white space");
  }
  if (!/[.!?]$/.test(text)) {
    throw new Error("joke must land on terminal punctuation");
  }
}

async function main(): Promise<void> {
  const text = JOKE;

  validateJoke(text);

  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", text, "utf8");

  // Read it back: the grader runs the program twice and compares, so a
  // write that did not land intact must fail loudly here, not silently.
  const written = await readFile("/output/entry.txt", "utf8");
  if (written !== text) {
    throw new Error("entry.txt read-back differs from the joke");
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
