# 3. Dynamic Programming

[Previous lesson](02-graph-traversal.md) | [Module home](README.md) | [Exercises](exercises.md) | [Project](project.md)

Dynamic programming helps when a problem contains smaller problems that repeat. Instead of solving the same smaller problem again, save its answer and reuse it. This idea can be implemented from the top down with memoization or from the bottom up with a table.

Fibonacci numbers give a simple example. The definition says that each number is the sum of the previous two. A direct recursive function calculates the same earlier values many times, leading to exponential growth in calls. A bottom-up version keeps only the two values needed next.

```python
def fibonacci(n):
    if n < 0:
        raise ValueError("n must be nonnegative")
    previous, current = 0, 1
    for _ in range(n):
        previous, current = current, previous + current
    return previous
```

This version takes `O(n)` time and `O(1)` extra space. Not every dynamic programming solution can discard its table, but this one can because each new state depends only on two earlier states.

To design a dynamic program, define the state in one sentence. For a staircase problem where you can climb one or two steps, let `ways[i]` mean the number of ways to reach step `i`. Then define base cases and a transition: `ways[i] = ways[i - 1] + ways[i - 2]`. Finally, identify which state is the answer.

Dynamic programming is not the right tool for every recursive-looking problem. It needs overlapping subproblems and a larger answer that can be built from smaller answers. If subproblems never repeat, caching may only add memory. If a greedy local choice can be proven correct, that may be simpler.

Test base cases carefully because every later table entry depends on them. Trace the state table for a tiny input and write what each entry means. A table full of correct numbers is not enough if its meaning is unclear. Good state definitions are the hardest and most reusable part of this technique.

For optional deeper instruction, use the dynamic programming lectures in MIT OpenCourseWare’s [Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/).

