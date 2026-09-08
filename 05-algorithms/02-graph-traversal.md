# 2. Graph Traversal

[Previous lesson](01-searching-and-sorting.md) | [Module home](README.md) | [Next lesson](03-dynamic-programming.md) | [Exercises](exercises.md)

A graph has vertices and edges. Traversal means visiting vertices by following edges. Breadth-first search, called BFS, explores one distance layer at a time. Depth-first search, called DFS, follows one path as far as it can before returning. Both need a visited set because a graph may contain cycles.

BFS uses a queue. Put the start vertex in the queue and mark it visited. Repeatedly remove the oldest waiting vertex, then add each unvisited neighbor. In an unweighted graph, the first time BFS reaches a vertex, it has found a path using the fewest edges.

```python
from collections import deque

def shortest_distances(graph, start):
    distances = {start: 0}
    queue = deque([start])
    while queue:
        vertex = queue.popleft()
        for neighbor in graph.get(vertex, []):
            if neighbor not in distances:
                distances[neighbor] = distances[vertex] + 1
                queue.append(neighbor)
    return distances
```

DFS uses a stack or recursion. An iterative stack avoids Python’s recursion-depth limit. DFS is useful for exploring components, detecting cycles with additional state, and processing nested relationships. It does not generally return a shortest path in an unweighted graph.

To trace BFS, write the queue and distance dictionary after each removal. On a tiny graph such as `A` connected to `B` and `C`, both neighbors enter with distance one. Their new neighbors enter with distance two. This paper trace makes the layer-by-layer behavior easy to see.

With an adjacency list, BFS and DFS both take `O(V + E)` time. Every reachable vertex is handled once, and every outgoing edge from those vertices is examined once. The visited set, queue, or stack can use `O(V)` extra space.

Neighbor order affects which equally valid traversal order or shortest path is returned. If deterministic output matters, preserve a documented neighbor order or sort neighbors, remembering that sorting adds work. Also decide how to handle a start vertex absent from the dictionary. The example treats it as a vertex with no outgoing neighbors.
