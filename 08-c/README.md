# C Programming

[Roadmap](../ROADMAP.md) | [Start lesson 1](01-language-basics.md)

C lets you see details that Python normally handles for you. You will work more directly with memory, addresses, files, and compiled programs.

This also means you can make mistakes that Python prevents. Work in small steps. Keep compiler warnings on. Fix warnings instead of hiding them.

## Do these in order

1. [Types, control flow, and functions](01-language-basics.md)
2. [Pointers and memory](02-pointers-memory.md)
3. [Compilation and program structure](03-compilation.md)
4. [Exercises](exercises.md)
5. [Quiz](quiz.md)
6. [Project](project.md)
7. [Solutions](solutions.md)

The examples use standard C11. A common build command is:

```text
cc -std=c11 -Wall -Wextra -Wpedantic source.c -o program
```

Your compiler may use a different name, but keep the warning options when it supports them.

You are done when you can build a program from more than one file, pass an array with its length, check pointers, and free memory on every path that owns it.

[CS50x Week 1](https://cs50.harvard.edu/x/weeks/1/) has an optional C lecture and notes.
