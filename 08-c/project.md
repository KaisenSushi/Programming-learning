# Project: Integer Statistics Tool

[Module home](README.md) | [Solutions](solutions.md)

Build a C11 command-line program that accepts integer arguments and reports count, minimum, maximum, and arithmetic mean. Separate reusable calculations into `stats.c` and declarations into `stats.h`; keep parsing and output in `main.c`. Reject missing input, malformed integers, and values outside the `int` range. Use `strtol` with an end pointer and range checks rather than `atoi`.

Allocate storage based on the argument count. Check that the count fits the allocation calculation, check the allocation result, and free storage on every path after successful allocation. Avoid signed overflow while summing by choosing a suitable wider representation and stating its remaining limits. Do not read from an empty array.

Provide compile and link commands with C11 and strong warnings. If supported, provide a separate sanitizer command. Test one value, positive and negative mixtures, repeated values, invalid text, an out-of-range value, and no arguments. Record expected exit status for success and invalid input.

Submit the three source files plus a README explaining ownership, error handling, and commands. The [solution outline](solutions.md) names critical checks without replacing the design work.
