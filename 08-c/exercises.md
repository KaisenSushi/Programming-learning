# Exercises

[Module home](README.md) | [Solutions](solutions.md)

Compile every exercise with C11 and strong warnings.

1. Write `int count_positive(const int values[], size_t count, size_t *result)`. Reject a null output pointer and reject a null input pointer when count is nonzero. Store the count and return zero on success, nonzero on invalid arguments.
2. Explain why returning the address of a local integer is invalid. Rewrite the idea using an output parameter supplied by the caller.
3. Allocate an array for `count` integers. Check multiplication overflow and allocation failure, initialize every element, print them, and free the allocation on every successful allocation path.
4. Find four defects in code that allocates ten bytes, copies an arbitrary user string with `strcpy`, frees the buffer, prints it, and frees it again.
5. Split a `minimum` function into `stats.h`, `stats.c`, and `main.c`. Write separate compile commands and one link command.
6. Explain whether setting one pointer to `NULL` after `free` makes another pointer to the same allocation safe.
7. Run a sanitizer build if supported. Intentionally perform a one-element out-of-bounds read in a disposable exercise, observe the report, and then remove the defect.

Check [solutions](solutions.md) after completing and testing your versions.
