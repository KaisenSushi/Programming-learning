# Debugging Systematically

[Previous lesson](01-writing-tests.md) | [Module home](README.md) | [Next lesson](03-test-design.md)

## Simple version

Make the bug happen again with the smallest input you can find. Record what you expected and what actually happened. Then test one possible cause at a time.

Debugging works best as an investigation. Begin by reproducing the failure with the smallest dependable input. Record the exact command, input, expected result, and actual result. If the problem cannot be reproduced, gather more observations rather than editing code at random. A traceback is a route through the program: read the final exception first, then follow the application frames back toward the call that supplied the bad state.

Consider a function that averages measurements:

```python
def average(values):
    total = 0
    for value in values:
        total += value
    return total / len(values)
```

An empty list raises `ZeroDivisionError`. The immediate failing line is division, but the design question is whether an empty collection is invalid or whether it should produce a special result. A clear contract might reject it:

```python
def average(values):
    if not values:
        raise ValueError("average requires at least one value")
    return sum(values) / len(values)
```

Write a regression test before or alongside the fix. That test demonstrates the failure and protects the chosen contract later. Change one relevant idea at a time, rerun the smallest test, and then run the full suite to detect side effects.

Python's built-in debugger can pause execution. Insert `breakpoint()` temporarily, run the program, and use `p variable_name` to inspect a value, `n` for the next line, `s` to step into a call, and `c` to continue. Remove temporary breakpoints before committing. Logging is better for intermittent failures because it preserves a sequence across a run. Never log passwords, tokens, or sensitive personal data.

Use assertions for internal facts that should be impossible if the program is correct, not for validating untrusted user input. Assertions can be disabled and often produce the wrong error message for callers. A useful debugging note explains evidence and eliminated hypotheses. The goal is not merely to silence an exception. It is to identify the violated assumption, correct it at the right boundary, and prove the correction.

Continue with [Test Design and Maintenance](03-test-design.md).
