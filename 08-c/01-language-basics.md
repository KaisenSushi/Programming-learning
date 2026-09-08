# Types, Control Flow, and Functions

[Module home](README.md) | [Next lesson](02-pointers-memory.md) | [Roadmap](../ROADMAP.md)

A C program is built from declarations and functions. Execution begins at `main`. Types determine how values are represented and which operations are meaningful.

```c
#include <stdio.h>

static int maximum(int a, int b) {
    return a > b ? a : b;
}

int main(void) {
    int left = 12;
    int right = 19;
    printf("maximum: %d\n", maximum(left, right));
    return 0;
}
```

`#include` makes library declarations available. The `static` function is limited to this translation unit, which prevents accidental external use. `main` returns zero to report success to the environment. Compile with strong warnings: `cc -std=c11 -Wall -Wextra -Wpedantic main.c -o main`.

Integer types have implementation-defined ranges, although `<stdint.h>` provides exact-width types such as `uint32_t` when the platform supports them. Use `size_t` for object sizes and array indexes, and print it with `%zu`. Signed integer overflow is undefined behavior. Unsigned arithmetic wraps modulo a power of two, but that does not automatically make it appropriate for every calculation.

Conditions treat zero as false and nonzero as true. Loops must maintain an invariant and stay within array bounds. C arrays do not carry their length when passed to a function, so pass it separately:

```c
static long sum(const int values[], size_t count) {
    long total = 0;
    for (size_t i = 0; i < count; ++i) {
        total += values[i];
    }
    return total;
}
```

The `const` qualifier promises this function will not modify elements through that parameter. Check the documented return value of input functions and library calls. Avoid unsafe input patterns and unbounded string operations. Clear functions with narrow contracts are easier to test and make later pointer reasoning manageable.

Continue with [Pointers and Memory](02-pointers-memory.md).
