# Compilation and Program Structure

[Previous lesson](02-pointers-memory.md) | [Module home](README.md) | [Exercises](exercises.md)

## Simple version

Building a C program happens in stages. Source files are checked and turned into object files. The linker then connects those files and the libraries they use to make the final program.

C source passes through preprocessing, compilation, assembly, and linking. The preprocessor expands includes and macros. Each source file is compiled into an object file. The linker combines object files and libraries, resolving external symbols into an executable. Recognizing the stage helps interpret errors: a syntax or type error comes from compilation, while an undefined reference generally comes from linking.

Headers publish declarations shared between translation units. Put definitions in source files and guard headers against repeated inclusion:

```c
#ifndef STATS_H
#define STATS_H

#include <stddef.h>

int stats_min(const int values[], size_t count, int *result);

#endif
```

The implementation belongs in `stats.c`; clients include `stats.h`. Returning a status code lets the function reject an empty array, while the output pointer receives the result only on success. Avoid defining non-`static` objects or ordinary functions in headers because every including source may create a conflicting definition.

Compile separately with `cc -std=c11 -Wall -Wextra -Wpedantic -c stats.c` and the same command for `main.c`, then link with `cc main.o stats.o -o stats_app`. During development, add debug information with `-g`. With compatible GCC or Clang builds, `-fsanitize=address,undefined -fno-omit-frame-pointer` enables useful runtime checks. Use sanitizers in test builds and read the toolchain documentation for platform support.

Warnings deserve fixes, not blanket suppression. A conversion warning may reveal data loss, and a missing prototype can corrupt calls on some systems. A small build script or build system should declare source dependencies and provide repeatable debug, test, and release settings. Do not optimize away validation merely for a release build.

Keep public interfaces small. Internal helpers should be `static`, and headers should include the types they require. Test exported functions at boundaries and compile from a clean directory periodically. Reproducible commands turn compilation from an editor trick into part of the project's documented behavior.

Use these practices in the [project](project.md).
