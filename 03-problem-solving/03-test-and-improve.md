# 3. Test and Improve

[Previous lesson](02-design-an-algorithm.md) | [Module home](README.md) | [Exercises](exercises.md) | [Project](project.md)

## Simple version

Do not only test the normal case. Test small, empty, repeated, ordered, and invalid inputs when the rules allow them. Each test should check one way the program could be wrong.

Testing is a search for disagreement between the contract and the program. A few happy-path examples cannot establish much confidence. Choose cases by category: typical input, smallest valid input, empty input when allowed, repeated values, already ordered values, extreme values, and invalid input if the contract defines an error.

Consider a function that checks whether brackets are balanced. `"([])"` is a normal success case. `"([)]"` exposes incorrect nesting, `")"` exposes an early closing bracket, and `"(("` exposes leftover opening brackets. Each case targets a different failure mode.

```python
def balanced(text):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for character in text:
        if character in pairs.values():
            stack.append(character)
        elif character in pairs:
            if not stack or stack.pop() != pairs[character]:
                return False
    return not stack
```

This algorithm scans each character once, so its time complexity is `O(n)`. In the worst case, every character is an opening bracket, so the stack uses `O(n)` space. State what `n` means whenever you make a complexity claim. Here, it is the number of characters in `text`.

When a test fails, reduce the input until the failure is still visible. A small counterexample is easier to trace. Record the expected result, actual result, and first state where execution diverges. Fix the cause rather than adding a special case for one example.

Improvement should be measured against a goal. If runtime matters, generate increasing input sizes and time repeated runs. If maintainability matters, simplify names and responsibilities. If correctness matters, add tests for every discovered bug. An optimization that changes behavior is not an improvement.

Finish with a review pass. Check that the function does not unexpectedly mutate input, failure behavior is documented, variable names match their meaning, and complexity claims match the operations used. A dictionary lookup is usually average `O(1)`, but sorting remains `O(n log n)`. Honest analysis makes later design choices much easier.
