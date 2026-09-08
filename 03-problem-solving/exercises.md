# Exercises

[Module home](README.md) | [Lessons](01-understand-the-problem.md) | [Quiz](quiz.md) | [Solutions](solutions.md)

Solve these in order. For each one, write the input-output contract, two boundary cases, pseudocode, Python code, and time and space complexity. Test your answer before reading the solutions.

1. Write `count_words(words)` that returns a dictionary mapping each string to its frequency. Treat uppercase and lowercase as different values. An empty list returns an empty dictionary.
2. Write `first_unique(numbers)` that returns the first value appearing exactly once, or `None` when no such value exists. Preserve the original order and do not modify the input.
3. Write `is_palindrome(text)` that ignores spaces and letter case. Punctuation remains significant. For example, `"Never odd or even"` is true.
4. A slow duplicate finder compares every pair of values. Explain its `O(n^2)` time cost, then replace it with an average `O(n)` solution using a set. Return `True` as soon as any duplicate is found.
5. Trace the bracket algorithm from lesson 3 on `"{a[()]b}"`. Show the stack after each bracket. Then give one input that fails because of ordering and another that fails because an opening bracket remains.

For an extra challenge, create tests with Python `assert` statements. Include normal, empty, and adversarial inputs. A test is strongest when you can name the exact mistake it would catch.
