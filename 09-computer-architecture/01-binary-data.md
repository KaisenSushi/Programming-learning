# Bits and Data

[Module home](README.md) | [Next lesson](02-cpu-memory.md) | [Roadmap](../ROADMAP.md)

A bit has two possible values, written as 0 and 1. A byte is commonly eight bits. Bits do not carry meaning by themselves. Software and hardware agree on an interpretation, such as an unsigned number, a character, a color component, or part of an instruction.

Decimal is base ten, so each position has ten times the value of the position to its right. Binary is base two. The binary value `10110` means:

```text
1 * 16 + 0 * 8 + 1 * 4 + 1 * 2 + 0 * 1 = 22
```

To convert a small positive decimal number to binary, repeatedly select powers of two or divide by two and read the remainders backward. Eight unsigned bits can represent 0 through 255. Signed integers often use two's complement. With eight bits, that usually represents -128 through 127. The exact width matters, and arithmetic outside a type's range may wrap, trap, or be undefined depending on the language and type.

Hexadecimal is base sixteen and uses digits 0 through 9 and letters A through F. One hexadecimal digit represents exactly four bits, which makes long bit patterns easier to read. Binary `1111 1010` is hexadecimal `FA`. Prefixes such as `0b` and `0x` are language notation, not extra stored bits.

Text uses character encodings. ASCII maps a small set of characters to numbers. Unicode defines code points for writing systems and symbols; UTF-8 stores those code points as one to four bytes. A visible character is not always one byte or even one code point, so string length can have several meanings.

Images and sound are also numbers interpreted by a format. File formats include structure and metadata so programs know how to interpret bytes. Endianness describes the byte order used for a multi-byte value. Architecture understanding begins with this rule: bytes are physical representations, while types and formats supply meaning.

Continue with [CPU and Memory](02-cpu-memory.md).
