# Pointers and Memory

[Previous lesson](01-language-basics.md) | [Module home](README.md) | [Next lesson](03-compilation.md)

## Simple version

A pointer stores an address. That address must point to valid memory of the right type before you use it. If the memory is gone or the address is outside its allowed area, the program is wrong even if it seems to work once.

A pointer stores the address of an object or function. `&value` takes an address, while `*pointer` accesses the pointed-to object. Dereferencing is valid only when the pointer refers to a live object of a compatible type and the access stays within its bounds.

```c
static void increment(int *value) {
    if (value != NULL) {
        ++*value;
    }
}
```

Automatic local objects normally live until their block ends. Their addresses must not be returned for later use. Dynamically allocated storage lives until `free` is called, which creates explicit ownership work:

```c
#include <stdint.h>
#include <stdlib.h>

int *make_zeros(size_t count) {
    if (count > SIZE_MAX / sizeof(int)) {
        return NULL;
    }
    return calloc(count, sizeof(int));
}
```

The multiplication guard prevents the allocation size from wrapping. `calloc` may return `NULL`; callers must check before dereferencing. A successful allocation must be freed exactly once. Reading after `free`, freeing twice, reading uninitialized storage, moving beyond an array, or using an invalid format specifier can cause undefined behavior. Undefined behavior is not a predictable error mode. The compiler may optimize under the assumption that it never occurs, so a program seeming to work once proves nothing.

Document ownership: who allocates, who frees, and whether a borrowed pointer may outlive a call. Set a local pointer to `NULL` after freeing when that prevents accidental local reuse, but remember aliases may still dangle. Prefer one cleanup path for functions that acquire several resources. Release them in reverse order and handle partial failure.

Strings are arrays terminated by a zero byte. Functions such as `strlen` require a valid terminator within accessible memory. Track destination capacity and leave room for the terminator. Never use `gets`; it cannot limit input. Tools such as AddressSanitizer and UndefinedBehaviorSanitizer can expose many mistakes during tests, but they do not replace bounds checks, ownership design, warnings, or review.

Continue with [Compilation and Program Structure](03-compilation.md).
