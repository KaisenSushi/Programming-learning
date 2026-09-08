# Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Quiz](quiz.md) | [Project](project.md)

These reference solutions favor clear control flow. Check behavior, assumptions, and complexity rather than comparing line by line.

## Exercises

```python
from collections import deque

def linear_search(values, target):
    for index, value in enumerate(values):
        if value == target:
            return index
    return None

def binary_contains(values, target):
    low, high = 0, len(values) - 1
    while low <= high:
        middle = (low + high) // 2
        if values[middle] == target:
            return True
        if values[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return False

def selection_sort(values):
    result = list(values)
    for left in range(len(result)):
        smallest = min(range(left, len(result)), key=result.__getitem__)
        result[left], result[smallest] = result[smallest], result[left]
    return result

def dfs(graph, start):
    order, seen, stack = [], set(), [start]
    while stack:
        vertex = stack.pop()
        if vertex in seen:
            continue
        seen.add(vertex)
        order.append(vertex)
        stack.extend(reversed(graph.get(vertex, [])))
    return order

def bfs_path(graph, start, goal):
    if start == goal:
        return [start]
    queue = deque([[start]])
    seen = {start}
    while queue:
        path = queue.popleft()
        for neighbor in graph.get(path[-1], []):
            if neighbor == goal:
                return path + [neighbor]
            if neighbor not in seen:
                seen.add(neighbor)
                queue.append(path + [neighbor])
    return None

def climb_ways(n):
    if n < 0:
        raise ValueError("n must be nonnegative")
    older, newer = 1, 1
    for _ in range(n):
        older, newer = newer, older + newer
    return older

def min_coins(amount, coins):
    best = [amount + 1] * (amount + 1)
    best[0] = 0
    for value in range(1, amount + 1):
        for coin in coins:
            if coin <= value:
                best[value] = min(best[value], best[value - coin] + 1)
    return None if best[amount] > amount else best[amount]
```

Linear and binary search cost `O(n)` and `O(log n)`. Selection sort is `O(n^2)`. Traversals are `O(V + E)`. Stair climbing is `O(n)` time and `O(1)` space. Coin change is `O(amount * len(coins))` time and `O(amount)` space.

## Quiz answers

Binary search uses sorted order to eliminate one half. Its input must be sorted. Linear search is `O(n)` and binary search is `O(log n)`. Sorting once costs more than one scan. Stability preserves the order of equal-key items. BFS uses a queue and explores layers; iterative DFS uses a stack. Visited state prevents repeated cycling. BFS finds a fewest-edge path in an unweighted graph. Repeated subproblems and composition from smaller answers suggest dynamic programming. State gives a smaller problem’s meaning, base cases start it, and transitions connect answers. Fibonacci retains only its previous two states.

## Project

```python
from collections import deque

def find_route(graph, start, goal):
    if start == goal:
        return [start]
    if start not in graph or goal not in graph:
        return None
    queue = deque([start])
    previous = {start: None}
    while queue:
        vertex = queue.popleft()
        for neighbor in graph.get(vertex, []):
            if neighbor in previous:
                continue
            previous[neighbor] = vertex
            if neighbor == goal:
                route = []
                current = goal
                while current is not None:
                    route.append(current)
                    current = previous[current]
                return list(reversed(route))
            queue.append(neighbor)
    return None

def reachable_places(graph, start):
    if start not in graph:
        return set()
    seen, stack = set(), [start]
    while stack:
        vertex = stack.pop()
        if vertex not in seen:
            seen.add(vertex)
            stack.extend(graph.get(vertex, []))
    return seen
```

Each reachable vertex and edge is considered a constant number of times. The queue, stack, predecessor dictionary, and result use at most `O(V)` extra space.
