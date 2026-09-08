# C Programming

C makes data representation and resource lifetime visible. That clarity is useful, but it also means the programmer must prevent out-of-bounds access, invalid pointers, leaks, and undefined behavior. Work in small steps, enable compiler warnings, and use sanitizers where your toolchain supports them.

Begin with [Types, Control Flow, and Functions](01-language-basics.md), continue to [Pointers and Memory](02-pointers-memory.md), and finish with [Compilation and Program Structure](03-compilation.md). Complete the [exercises](exercises.md), [quiz](quiz.md), and [project](project.md), then compare with [solutions](solutions.md).

Examples target standard C11. A common GCC or Clang command is `cc -std=c11 -Wall -Wextra -Wpedantic source.c -o program`. Compiler and operating-system details vary, so adapt executable names without removing warnings. By the end, you should be able to build a multi-file program, pass arrays with explicit lengths, allocate and release memory on all paths, and explain why apparently working undefined behavior is still incorrect. Return to the [course roadmap](../ROADMAP.md) for context.

Optional video: [CS50x Week 1, C](https://cs50.harvard.edu/x/weeks/1/) demonstrates C basics with lecture video and notes. Pause often and type the small examples yourself.
