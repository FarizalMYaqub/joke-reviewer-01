# The Nodding Manager

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/FarizalMYaqub/joke-reviewer-01/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/FarizalMYaqub/joke-reviewer-01/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)

A program that writes one one-line joke about working beside an AI coding agent. The agent writes the code, reviews it, and merges it — and the human just sits there nodding at the diff like a manager who stopped reading the reports.

## Run it

```sh
node main.ts
# writes /output/entry.txt (UTF-8, one line, 147 characters)
```

`main.ts` (Node 22, standard library only) writes the fixed joke to `/output/entry.txt` and validates it first: 1–280 Unicode code points, not only white space, a single line. The output is deterministic — the same text on every run.
