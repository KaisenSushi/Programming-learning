# Project: Trace a Tiny Program

[Module home](README.md) | [Solutions](solutions.md)

Choose a short C program that adds two command-line integers and prints the result. Your project is an illustrated text trace from source code to running process. Keep the program small enough that every stage can be explained clearly.

Write the source, then record commands that preprocess, compile to assembly, create an object file, link, and run it with safe sample values. Toolchain flags differ, so identify the compiler and operating system you used. Save short extracts from generated output rather than committing huge generated files. Do not claim that compiler-produced assembly will match another architecture or optimization level.

Create a table that connects source concepts to architecture concepts: source variables to stored values, addition to one or more instructions, the executable to machine code and metadata, and startup to the loader and process. Include the roles of registers, cache, RAM, virtual addresses, and persistent storage without claiming each value always stays in one place.

Finally, classify one deliberate compiler error, linker error, and runtime error. Restore a valid program after each experiment. Submit source code and a Markdown report with commands, observed evidence, and explanations in your own words. Use [solutions](solutions.md) as a checklist.
