# 2. Design an Algorithm

[Previous lesson](01-understand-the-problem.md) | [Module home](README.md) | [Next lesson](03-test-and-improve.md) | [Exercises](exercises.md)

An algorithm is a finite sequence of steps that transforms valid input into the promised output. It does not need to begin as code. Plain language, a diagram, or pseudocode often makes mistakes easier to see because syntax is not competing for attention.

Suppose you need to find the second-largest distinct number in a list. A useful first plan is: remove duplicates, sort the remaining values, then select the next-to-last value. This approach is easy to explain and usually costs `O(n log n)` time because sorting dominates. It also uses `O(n)` extra space for the distinct values.

A one-pass plan can keep the largest and second-largest values seen so far. That uses `O(n)` time and `O(1)` extra space, but it requires more careful handling of duplicates and short inputs. Complexity describes growth, not the exact runtime on one input. For small lists, clarity may matter more than eliminating a sort.

```python
def second_largest(numbers):
    largest = None
    second = None

    for number in numbers:
        if largest is None or number > largest:
            if number != largest:
                second = largest
                largest = number
        elif number != largest and (second is None or number > second):
            second = number

    return second
```

To justify this algorithm, use an invariant: after each iteration, `largest` is the greatest distinct value examined, and `second` is the next greatest when it exists. Each branch preserves that statement. An invariant gives a compact reason the final result is correct.

When designing your own algorithm, first write the direct solution. Identify the repeated or growing work. Then ask whether a set, dictionary, running total, stack, queue, or sorted order would make that work cheaper. Compare alternatives with input size and readability in mind. Do not optimize from instinct alone.

Pseudocode should be detailed enough that another person could implement it without inventing missing rules. Include validation, loop order, state updates, and the exact returned result. Then trace the pseudocode against a normal case and at least two boundary cases before translating it into Python.
