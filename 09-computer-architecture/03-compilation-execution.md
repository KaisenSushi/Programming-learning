# From Source to Execution

[Previous lesson](02-cpu-memory.md) | [Module home](README.md) | [Exercises](exercises.md)

Source code is text written for people and language tools. A compiled language translates that source toward machine instructions before execution. In a typical C toolchain, preprocessing handles directives, compilation checks and translates a source file, assembly creates an object file, and linking combines objects and libraries into an executable.

An object file contains machine code plus metadata and unresolved references. If one file calls a function defined in another file, the linker connects that call to the function's address. A static library contributes code during linking. A shared library is loaded separately and can be used by several programs, but the required compatible version must be present.

When a user starts an executable, the operating system loader maps program sections and libraries into a new process, prepares stack and other state, and transfers control to startup code. Startup code eventually calls the language's entry point. The process also has data regions. A simplified view includes machine code, read-only constants, static data, dynamically allocated heap storage, and thread stacks. Actual layouts include security randomization and platform-specific details.

Interpreted and virtual-machine languages use different paths. Python commonly compiles source to bytecode interpreted by its runtime. Java and .NET runtimes may compile intermediate code to native instructions while a program runs. These approaches still depend on machine code in the runtime and operating system.

Debug and release builds are choices, not different languages. Debug information connects addresses to source lines and names. Optimization can rearrange or remove operations while preserving defined behavior, which can make debugging harder. Undefined behavior breaks that promise because the compiler assumes a valid program follows language rules.

An executable file is not safe merely because it compiles. The operating system enforces permissions, but programs still need validation and least privilege. Understanding the path from source to process helps you place an error: source diagnostics belong to compilation, missing symbols to linking, missing libraries to loading, and invalid runtime state to execution.

Apply the complete model in the [project](project.md).
