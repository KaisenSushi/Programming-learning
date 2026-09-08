# Decisions and Loops

[Previous lesson](01-values-and-input.md) | [Module home](README.md) | [Next lesson](03-functions-and-collections.md) | [Roadmap](../ROADMAP.md)

## Simple version

An `if` statement chooses which code runs. A loop repeats code. These two tools let the same program react to different input and handle more than one item.

Control flow determines which statements run and how often they run. An `if` statement evaluates a condition and executes its indented block when the condition is true. Optional `elif` branches test further conditions in order, and `else` handles everything that remains.

```python
minutes = 42

if minutes < 0:
    print("Minutes cannot be negative")
elif minutes < 25:
    print("Short session")
elif minutes < 60:
    print("Focused session")
else:
    print("Long session")
```

Only one branch in this chain runs. Ordering matters because the first true condition wins. Notice that `42` is already known to be at least `25` when Python reaches the second `elif`, so that branch only needs an upper boundary.

Python considers several values false in a condition, including `False`, `None`, numeric zero, and empty collections or strings. Other values are generally true. Writing `if name:` is an idiomatic way to test whether a string is nonempty. Use `and`, `or`, and `not` to combine Boolean expressions, but prefer a readable intermediate name when a condition becomes dense.

A `for` loop visits items from an iterable:

```python
durations = [20, 35, 15]
total = 0
for duration in durations:
    total += duration
print(total)
```

The loop variable receives one item at a time. `range(5)` produces the integers from zero through four. If you need both an index and a value, `enumerate(durations, start=1)` is clearer than maintaining a separate counter.

A `while` loop repeats while its condition remains true. It fits input validation because the number of attempts is not known beforehand:

```python
while True:
    text = input("Positive minutes: ")
    if text.isdigit() and int(text) > 0:
        minutes = int(text)
        break
    print("Enter a positive whole number.")
```

`break` exits the nearest loop. `continue` skips to its next iteration. Both are useful, but excessive use can hide the loop's purpose. Ensure every `while` loop has a reachable path that changes the condition or breaks, otherwise it can run forever.

Build loops by stating the invariant: what must be true before and after each iteration. For the total example, `total` equals the sum of durations already visited. That sentence makes initialization and update mistakes easier to spot.

[Exercises](exercises.md) | [Build the project](project.md)
