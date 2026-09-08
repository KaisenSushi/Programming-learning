# Exercises

[Module home](README.md) | [Lessons](01-searching-and-sorting.md) | [Quiz](quiz.md) | [Solutions](solutions.md)

Write tests and state complexity for every solution. Use the simplest correct algorithm that meets the stated requirement.

1. Write `linear_search(values, target)` that returns the first matching index or `None`.
2. Change binary search so `binary_contains(values, target)` returns only `True` or `False`. It may assume ascending sorted input and must not modify it.
3. Implement selection sort as `selection_sort(values)`. Return a new ascending list and leave the input unchanged.
4. Write iterative DFS as `dfs(graph, start)`. Return vertices in visit order. Push neighbors in reverse list order so the first listed neighbor is visited first.
5. Write BFS as `bfs_path(graph, start, goal)`. Return one shortest path in an unweighted graph, including both endpoints, or `None` if no path exists.
6. Write `climb_ways(n)` for a staircase climbed in steps of one or two. Define `climb_ways(0)` as `1`, reject negative input, and use `O(1)` extra space.
7. Write `min_coins(amount, coins)` using dynamic programming. Return the minimum number of coins needed, or `None` when the amount cannot be formed. Assume a nonnegative amount and positive integer coin values.

Trace at least one search, one traversal, and one dynamic programming table by hand. Compare the trace with your program’s changing variables before opening [solutions.md](solutions.md).
