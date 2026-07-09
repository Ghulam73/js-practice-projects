# JS Practice Projects

Daily JavaScript practice log. Each day covers one topic through targeted practice questions and a mini-project that combines that day's concepts - the goal is genuine, independent understanding of JavaScript fundamentals, not just following along with tutorials.

## Why This Repo Exists

I'm a MERN/Next.js developer with production projects already shipped (visa processing platforms, e-commerce, booking systems), but a lot of that work leaned heavily on AI-assisted coding (Claude, Cursor). This repo is where I rebuild the fundamentals independently - JS core concepts, written and debugged by hand, reviewed with AI only *after* attempting on my own.

## Structure

```
js-practice-projects/
├── day-01-variables-datatypes/
│   ├── questions/            # 6-7 practice questions for the day's topic
│   │   ├── q1.js
│   │   ├── q2.js
│   │   └── ...
│   ├── mini-project/         # ~200 line project combining the day's concepts
│   │   └── project.js
│   └── notes.md              # 2-3 line self-explanation of the concept
├── day-02-hoisting/
│   ├── questions/
│   ├── mini-project/
│   └── notes.md
...
└── reviews/
    ├── week-01-mixed-review.js
    ├── week-02-mixed-review.js
    └── rebuilds/              # old mini-projects re-attempted from scratch
        └── day-05-rebuild.js
```

## Daily Workflow

1. **Morning:** Watch 2-3 videos from the series.
2. **After each video:** Write a 1-line note on what was learned, to keep topics distinct before practice.
3. **Night:** Practice, kept topic-wise (not mixed):
   - Solve 6-7 questions per topic covered that day.
   - Build one mini-project (~200 lines) that combines all of that day's concepts together.
4. **Weekly (Day 6):** No-AI review day — solve mixed questions from the past 2-3 weeks using only documentation, no AI help.
5. **Every 7-10 days:** Pick an old mini-project and rebuild it from scratch without looking at the original, to check retention and measure growth in code quality.
6. **Milestones (video 35, 45, 51):** Full mixed test covering all topics up to that point, attempted before any AI help.

## Rules I Follow

- Practice questions come from a mix of AI-generated prompts **and** real platforms (LeetCode/HackerRank), not AI alone.
- Every solved question gets a short self-written explanation of *why* it works, not just that it works.
- AI review happens after attempting, and I ask it for alternative approaches, not just correctness checks.

## Topics Covered So Far

| Day | Topic | Questions | Mini-Project | Status |
|-----|-------|-----------|--------------|--------|
| 1 | Variables & Data Types | ✅ | ✅ | Done |
| 2 | Hoisting | ✅ | ✅ | Done |
| 3 | Functions | ✅ | ✅ | Done |
| 4 | Array Methods | ✅ | ✅ | Done |
| 5 | Objects | ✅ | ✅ | Done |
| ... | ... | | | |

*(Update this table as each day is completed — add rows up through day 25, then keep going)*



## Upcoming Topics (Remaining 26 Videos)

- Closures
- `this` keyword
- Prototypes & Prototypal Inheritance
- Async JS: Callbacks, Promises, Async/Await
- Event Loop
- ES6+ Features (destructuring, spread/rest, generators, modules)
- Error Handling

## Long-Term Goal

Build strong, independent JavaScript fundamentals to complement the MERN/Next.js stack, reducing reliance on AI-assisted coding for core logic — and have a visible, dated record of the process for future reference (including job applications, where relevant).
