# Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Project](project.md)

Exercise 1 validates `result`, then validates `values` only when count is greater than zero, loops with `size_t`, and stores the final count. Exercise 2 fails because the local object's lifetime ends at function return; a caller-owned `int *result` remains valid when the caller's object remains live. Exercise 3 checks `count > SIZE_MAX / sizeof(int)`, checks `malloc`, initializes before reading, and calls `free` once. Exercise 4 includes possible overflow, missing capacity calculation, use after free, and double free. Exercise 5 puts the prototype and required includes in a guarded header, implementation in `stats.c`, and calls in `main.c`. Exercise 6 is no: aliases still dangle. Exercise 7 should produce a sanitizer diagnostic on supported toolchains before the invalid access is removed.

Quiz notes: success is zero. C does not preserve array length in a function parameter. `const` prevents modification through that pointer. Out-of-bounds access, use after free, double free, invalid dereference, and signed overflow are examples of undefined behavior. Size multiplication can wrap. One null assignment does not change aliases. A zero byte terminates a string. `gets` has no capacity limit. Compilation handles individual translation units; linking resolves symbols. Headers carry interfaces, while source files carry definitions. Guards prevent repeated header contents. Sanitizers cover many observed executions, not every input or ownership mistake.

The project should check `strtol` errors with `errno`, the end pointer, and `INT_MIN` through `INT_MAX`, then release its allocated array through a clear cleanup path.
