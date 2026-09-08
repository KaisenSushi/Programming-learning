# Roadmap

This roadmap gives the course an order, but it is not a race. A learner with five focused hours each week might finish in six to nine months. Someone studying full time may move faster. The useful measure is what you can build and explain, not how many files you have opened.

## Phase 1: Learn the working environment

Start with [Getting started](00-getting-started/README.md). Learn what a program is, set up your editor and language tools, and practice navigating from a terminal. Finish the setup project on the same machine you expect to use for the course.

Then study [Python](01-python/README.md). Spend extra time here. Python supplies the examples for problem solving, data structures, algorithms, and testing. Build small variations of every example instead of copying it once.

Complete [Git and GitHub](02-git-github/README.md) before your Python project grows large. Use a repository for every later project. Small, focused commits give you checkpoints and make experiments less risky.

Checkpoint: you can write a Python program with functions and file input, run it from a terminal, diagnose a basic error, and save the work in a Git repository.

## Phase 2: Think about programs

[Problem solving](03-problem-solving/README.md) teaches a repeatable way to move from a vague request to a testable solution. Do the tracing work on paper. It may feel slower at first, but it prevents hours of random editing later.

[Data structures](04-data-structures/README.md) explains how the shape of data affects the operations you can perform efficiently. Implement the small versions even when Python already provides a built-in type. The point is to see the tradeoffs.

[Algorithms](05-algorithms/README.md) connects correctness to resource use. Measure real inputs, but also learn to reason about growth before you benchmark.

Checkpoint: you can choose a useful representation, explain the expected running time of a solution, and defend its correctness with examples and invariants.

## Phase 3: Build reliable software

[Testing and debugging](06-testing-debugging/README.md) should change how you approach every later project. Treat a failure as evidence. Reduce it to the smallest repeatable case, state your theory, and test that theory.

[SQL and databases](07-sql-databases/README.md) introduces durable, shared data. You will design tables, write queries, and learn why transactions protect related changes.

Checkpoint: you can turn requirements into tests, debug from observations, design a small relational schema, and query it without duplicating facts unnecessarily.

## Phase 4: Look below the language

[C](08-c/README.md) makes memory and compilation visible. Work carefully. Compiler warnings and memory-checking tools are part of the exercise, not optional polish.

[Computer architecture](09-computer-architecture/README.md) connects source code to instructions, memory, and hardware. It will also make earlier lessons about performance and representation more concrete.

Final checkpoint: you can describe how source code becomes a running process, explain where its data lives, and investigate a correctness or performance problem across more than one layer.

## A weekly routine

A steady week can follow this pattern:

1. Read one chapter and type every example.
2. Change the examples and predict each result.
3. Complete the chapter exercises without the solution file open.
4. Review mistakes and write a short note about each one.
5. Spend one longer session on the module project.
6. Commit the finished work with a message that says what changed and why.

Take the quiz after a short break from the material. If you miss a question, return to the relevant example and produce your own explanation before checking the supplied answer.

## When to ask for help

Ask after you have recorded the command you ran, the exact result, what you expected, and one or two things you tried. Include the smallest code sample that still fails. This makes it easier for another person to help and often reveals the problem while you prepare the question.

Good places to learn how technical collaboration works include [GitHub Discussions documentation](https://docs.github.com/en/discussions) and [Stack Overflow's guide to asking](https://stackoverflow.com/help/how-to-ask). Follow each community's rules before posting.

