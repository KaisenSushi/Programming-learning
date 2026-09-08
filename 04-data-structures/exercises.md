# Exercises

[Module home](README.md) | [Lessons](01-sequences-and-mappings.md) | [Quiz](quiz.md) | [Solutions](solutions.md)

For each exercise, state why the selected structure fits and give time and extra-space complexity.

1. Write `deduplicate(values)` that returns values in first-seen order. Use a list for output and a set for membership. Do not modify the input.
2. Write `invert(mapping)` that groups original keys by their value. For `{'a': 1, 'b': 2, 'c': 1}`, return `{1: ['a', 'c'], 2: ['b']}` while preserving key iteration order inside each group.
3. Use a list as a stack to write `reverse_words(words)` without slicing or `reversed`.
4. Use `collections.deque` to simulate a printer. `serve(jobs, limit)` returns at most `limit` jobs in arrival order and the deque of jobs still waiting. Reject a negative limit with `ValueError`.
5. Given an adjacency-list graph, write `edge_count(graph)` for a directed graph. Count every listed neighbor as one edge.
6. Use `heapq` to write `smallest_three(values)`. Return all values in ascending order when fewer than three are supplied. Explain why building one heap and popping at most three times differs from fully sorting the input.

Create at least two tests for each function. Include empty input and a case containing duplicates where appropriate. Compare your work with [solutions.md](solutions.md) only after the tests pass.

