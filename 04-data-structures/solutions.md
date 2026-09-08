# Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Quiz](quiz.md) | [Project](project.md)

Use these references to inspect differences after your own tests pass. Equivalent implementations may make different reasonable tradeoffs.

## Exercises

```python
from collections import deque
import heapq

def deduplicate(values):
    seen, result = set(), []
    for value in values:
        if value not in seen:
            seen.add(value)
            result.append(value)
    return result

def invert(mapping):
    result = {}
    for key, value in mapping.items():
        result.setdefault(value, []).append(key)
    return result

def reverse_words(words):
    stack = []
    for word in words:
        stack.append(word)
    return [stack.pop() for _ in range(len(stack))]

def serve(jobs, limit):
    if limit < 0:
        raise ValueError("limit cannot be negative")
    waiting, served = deque(jobs), []
    while waiting and len(served) < limit:
        served.append(waiting.popleft())
    return served, waiting

def edge_count(graph):
    return sum(len(neighbors) for neighbors in graph.values())

def smallest_three(values):
    heap = list(values)
    heapq.heapify(heap)
    return [heapq.heappop(heap) for _ in range(min(3, len(heap)))]
```

These functions are linear except heap construction plus three removals, which is `O(n + log n)` and therefore `O(n)`. Fully sorting is `O(n log n)`.

## Quiz answers

Front insertion is `O(n)` due to shifting. Sets discard duplicates and meaningful sequence order. Dictionary access is expected `O(1)`. End append and pop form a stack. A deque avoids shifting on left removal. Linked nodes must be followed sequentially. An unbalanced search tree can become a chain. A min-heap guarantees only that its root is smallest, not full sorted order. `V` counts vertices and `E` edges. Visited tracking prevents cycle-driven repetition.

## Project

```python
from collections import deque

def schedule(requirements):
    order = []
    for task, prerequisites in requirements.items():
        for name in [task, *prerequisites]:
            if name not in order:
                order.append(name)
    outgoing = {name: [] for name in order}
    incoming = {name: 0 for name in order}
    for task, prerequisites in requirements.items():
        for prerequisite in prerequisites:
            outgoing[prerequisite].append(task)
            incoming[task] += 1
    ready = deque(name for name in order if incoming[name] == 0)
    result = []
    while ready:
        name = ready.popleft()
        result.append(name)
        for dependent in outgoing[name]:
            incoming[dependent] -= 1
            if incoming[dependent] == 0:
                ready.append(dependent)
    if len(result) != len(order):
        raise ValueError("dependencies contain a cycle")
    return result
```

Each vertex and edge is processed a constant number of times, giving `O(V + E)` time and space.
