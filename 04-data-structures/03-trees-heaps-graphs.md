# 3. Trees, Heaps, and Graphs

[Previous lesson](02-stacks-queues-linked-lists.md) | [Module home](README.md) | [Exercises](exercises.md) | [Project](project.md)

A tree connects nodes in a hierarchy. Each node except the root has one parent, and a node may have children. File systems and syntax trees fit this model. A binary tree limits each node to left and right children. A binary search tree additionally keeps smaller keys on the left and larger keys on the right. Search is `O(h)`, where `h` is tree height. It is `O(log n)` when the tree stays balanced, but `O(n)` when insertion order creates a chain.

A heap is a partially ordered tree commonly stored in a list. In a min-heap, the smallest item is at the root. Python’s `heapq` inserts and removes the smallest value in `O(log n)`, while reading it takes `O(1)`. A heap is ideal for repeatedly selecting the next priority, but it does not keep every value fully sorted.

```python
import heapq

jobs = []
heapq.heappush(jobs, (3, "write report"))
heapq.heappush(jobs, (1, "fix outage"))
priority, task = heapq.heappop(jobs)
```

A graph represents general relationships. Vertices are entities and edges are connections. Edges may be directed, undirected, weighted, or unweighted. An adjacency-list representation maps each vertex to its neighbors. It uses `O(V + E)` space, where `V` is the vertex count and `E` is the edge count.

```python
network = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["D"],
    "D": [],
}
```

Trees are a restricted kind of graph, but that restriction enables stronger assumptions. A general graph may contain cycles, so traversal must track visited vertices. A dependency graph is directed because “A requires B” is not interchangeable with “B requires A.” A route map may be weighted because roads have different distances.

Choose a heap when repeated minimum or maximum removal is central. Choose a tree for hierarchical structure or ordered search with a balancing strategy. Choose a graph when entities can have many-to-many relationships. State the representation along with the abstract structure, because an adjacency matrix and adjacency list have different memory and neighbor-iteration costs.

