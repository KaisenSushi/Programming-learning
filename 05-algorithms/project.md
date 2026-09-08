# Project: Route Finder

[Module home](README.md) | [Exercises](exercises.md) | [Solutions](solutions.md) | [Roadmap](../ROADMAP.md)

Build a route finder for an unweighted, undirected map. The graph is an adjacency-list dictionary whose keys and neighbor values are place names. Your function `find_route(graph, start, goal)` returns one route with the fewest edges, including the start and goal. Return `None` when no route exists.

Use breadth-first search. Maintain a queue of places waiting to be explored and a dictionary mapping each discovered place to the place from which it was first reached. This dictionary acts as both the visited record and the information needed to reconstruct the final path. When the goal is found, walk backward through the predecessor dictionary, then reverse that list.

Do not mutate the graph. Treat a missing start or goal as unreachable unless the two names are equal, in which case return a one-item route. Preserve neighbor-list order when equally short routes exist.

Add `reachable_places(graph, start)`, using either BFS or DFS to return a set of all reachable places. Include tests for a direct connection, multiple equally short routes, a cycle, disconnected sections, missing vertices, and start equal to goal.

Explain why both functions take `O(V + E)` time in the reachable part of the graph and use `O(V)` extra traversal space. Include a hand trace showing the queue and predecessor dictionary after each step for one map of at least five places. Compare your completed work with [solutions.md](solutions.md).
