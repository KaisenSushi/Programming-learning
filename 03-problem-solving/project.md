# Project: Text Report

[Module home](README.md) | [Exercises](exercises.md) | [Solutions](solutions.md) | [Roadmap](../ROADMAP.md)

Build a command-line text report without external packages. Your program receives a string and produces a dictionary containing the total word count, the number of distinct normalized words, the most frequent word, and a list of words that appear exactly once.

Normalize by converting text to lowercase and replacing each character that is not a letter or digit with a space. Split the result on whitespace. If several words share the highest frequency, choose the one that appears first in the normalized word sequence. Empty input should produce zero counts, `None` for the most frequent word, and an empty list of unique words.

Separate the work into at least three functions: normalization, frequency counting, and report construction. Do not modify caller-owned collections. Include at least six `assert` tests covering empty text, punctuation, mixed case, a frequency tie, repeated words, and digits.

Before coding, write the contract and pseudocode. After coding, state time and space complexity in terms of the number of input characters and words. The intended solution runs in linear time on average. Finally, add a short reflection describing one test that changed your implementation and one design choice that made the code easier to understand.

A reference implementation appears in [solutions.md](solutions.md), but complete and test your own version first.
