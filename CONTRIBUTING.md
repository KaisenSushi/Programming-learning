# Contributing

Thank you for helping improve the course. A useful contribution makes a learner's next step clearer without removing the need to think.

## Before you change a lesson

Open an issue for a large change so the teaching goal can be discussed first. Small corrections can go straight to a pull request. Search existing issues and pull requests to avoid duplicating work.

When reporting a problem, name the file and heading, describe what a learner is likely to misunderstand, and suggest a concrete correction if you can. For code defects, include the input, expected result, actual result, and the tool versions you used.

## Writing guidelines

- Address the learner directly and use specific verbs.
- Introduce one new idea at a time, then show it in a small example.
- Explain why a step matters before adding extra terminology.
- Prefer short paragraphs, but keep related reasoning together.
- Avoid slogans, filler introductions, and exaggerated claims.
- Do not use emoji or the em dash character.
- Do not claim an exercise is easy. Give a useful hint instead.
- Keep examples small enough to type and change.
- Make every exercise answerable from the material that comes before it.

Natural writing has rhythm. Sentence length can vary, and a careful aside can help when it answers the question a learner is likely to ask. Clarity matters more than trying to satisfy a mechanical style score. Prose lint tools can point out weak phrasing, but every suggestion needs human judgment.

## Course file pattern

Each numbered module contains:

- `README.md` for goals, prerequisites, and navigation
- numbered lesson files
- `exercises.md` for practice
- `quiz.md` for recall and explanation
- `project.md` for an integrated assignment
- `solutions.md` for worked answers and reasoning

Keep links relative so forks and local copies work. If you add or rename a file, update the module README and root roadmap in the same pull request.

## Code standards

Examples should run with the tool versions named in the lesson. Prefer standard-library code unless a dependency teaches an important idea. Check error paths and use safe sample data. C examples should compile with strong warnings and explain ownership or lifetime when memory is involved. SQL examples should state the database dialect if they depend on one.

Never include real secrets, personal data, or active credentials. Use obvious sample values and document any environment variables an example expects.

## Pull request checklist

1. Read the changed section from a beginner's point of view.
2. Run every changed code example.
3. Complete the changed exercises using only the lesson material.
4. Compare each answer with its question.
5. Check all local links.
6. Summarize the teaching problem and how the change addresses it.

Use focused commits. A commit message such as `Clarify list mutation example` gives reviewers more information than `Update files`.
