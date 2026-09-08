# Data Structures

[Roadmap](../ROADMAP.md) | [Lesson 1](01-sequences-and-mappings.md) | [Lesson 2](02-stacks-queues-linked-lists.md) | [Lesson 3](03-trees-heaps-graphs.md) | [Exercises](exercises.md) | [Quiz](quiz.md) | [Project](project.md) | [Solutions](solutions.md)

A data structure organizes values so that particular operations are convenient. Choosing one is part of solving the problem, not a cleanup step after the code works. A list provides ordered indexing, a dictionary provides key-based access, a stack exposes the most recently added item, and a queue exposes the earliest waiting item.

This module compares those tradeoffs using Python and small custom implementations. You will examine operation costs, learn how linked nodes differ from contiguous sequences, and build mental models for trees, heaps, and graphs. Complexity statements use `n` for the number of stored items unless another meaning is given. Costs for Python dictionaries and sets are expected averages because unusual collision patterns can be worse.

Read the lessons in order and trace every structure on paper. For mutable structures, draw their state before and after each operation. Complete the exercises before checking the solutions, then build the dependency scheduler project. The project brings together dictionaries, sets, a queue, and a directed graph.

By the end, you should be able to select a structure by required operations, explain the cost of those operations, and recognize when the same real-world data can be represented in several useful ways.

## Optional video

Harvard’s official [CS50 course site](https://cs50.harvard.edu/x/) includes a lecture on data structures with visual explanations of linked nodes, trees, and hash tables. Watch it after lesson 2 or 3 if drawing the structures on paper still feels unfamiliar.
