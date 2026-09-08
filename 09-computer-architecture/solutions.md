# Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Project](project.md)

Exercise 1: 13 is `00001101`, 42 is `00101010`, 255 is `11111111`, and `00110110` is 54. Exercise 2: `10101111` is `AF`, and `3C` is `00111100`. Exercise 3 gives 16, 256, and 65,536 values; `n` bits represent `2` raised to `n` patterns. Exercise 4 uses ASCII values 67, 80, and 85. UTF-8 uses variable-width encoding, and visible text can combine code points. Exercise 5 normally orders registers, cache, RAM, and SSD. Exact size and speed depend on hardware. Exercise 6 loops fetch to decode to execute and back. Exercise 7 maps to compilation, linking, loading, and execution. Exercise 8 fails because the instruction sets and machine-code encodings differ unless translation or emulation is provided.

Quiz summary: a chosen type or format gives bits meaning. Hex maps neatly to four-bit groups. Eight unsigned bits represent 256 values from 0 to 255. UTF-8 code points use varying byte counts. The simple cycle is fetch, decode, execute, and advance. An ISA is the machine-visible instruction contract. Virtual memory supplies mapped address spaces and isolation. Data races allow unsafe interleavings. Linkers resolve references and combine objects. Loaders map an executable and libraries into a process. Debug information maps machine locations back to source concepts.

The project should preserve commands and observed outputs, identify the target architecture, distinguish all four build stages, and avoid treating one generated assembly listing as universal.
