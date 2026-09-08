# Project: Dependency Scheduler

[Module home](README.md) | [Exercises](exercises.md) | [Solutions](solutions.md) | [Roadmap](../ROADMAP.md)

Build a scheduler that orders tasks according to their prerequisites. The input is a dictionary mapping each task name to a list of tasks that must be completed first. For example, `{'test': ['build'], 'build': ['design'], 'design': []}` should produce `['design', 'build', 'test']`.

Use a directed graph and Kahn’s algorithm. Build an outgoing adjacency list and an incoming-edge count for every task, including prerequisite names that do not appear as keys. Add every task with incoming count zero to a `collections.deque`. Repeatedly remove one ready task, append it to the result, reduce the counts of tasks that depend on it, and enqueue newly ready tasks.

If the result contains fewer tasks than the graph, a cycle prevents a valid schedule. Raise `ValueError` with a clear message. Preserve deterministic behavior by processing tasks in their first appearance order. Do not mutate the input.

Include tests for a chain, independent tasks, shared prerequisites, an implicit prerequisite, empty input, and a cycle. Explain why runtime is `O(V + E)` and additional storage is `O(V + E)`. Add a short design note comparing the queue, dictionary, set, and list responsibilities in your program. The [solutions](solutions.md) file contains one reference implementation after the exercise answers.
