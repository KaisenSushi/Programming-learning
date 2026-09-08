# 2. Stacks, Queues, and Linked Lists

[Previous lesson](01-sequences-and-mappings.md) | [Module home](README.md) | [Next lesson](03-trees-heaps-graphs.md) | [Exercises](exercises.md)

A stack follows last in, first out order. The most recently pushed value is the first popped. Python lists implement stacks naturally with `append` and `pop`, both amortized `O(1)` at the end. Stacks appear in undo history, expression evaluation, parsing, and depth-first search.

A queue follows first in, first out order. Removing index zero from a Python list costs `O(n)` because remaining elements shift. `collections.deque` supports `append` and `popleft` in `O(1)` time, making it the usual Python queue. Queues model waiting work and support breadth-first search.

```python
from collections import deque

def process_jobs(jobs):
    waiting = deque(jobs)
    completed = []
    while waiting:
        completed.append(waiting.popleft())
    return completed
```

A linked list stores each value in a node that also refers to the next node. Inserting at the head is `O(1)` because no later values shift. Accessing the item at position `i` is `O(i)` because links must be followed from the head. In Python, built-in lists or deques are usually preferable, but linked lists reveal how references form structures.

```python
class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next = next_node

def prepend(head, value):
    return Node(value, head)
```

The first node is called the head. An empty list can be represented by `None`. A doubly linked list gives each node both next and previous references, enabling constant-time removal when the exact node is already known, at the cost of more memory and more links to maintain.

The abstract behavior matters more than the implementation. A stack promises access at one end; a queue promises arrival order. A linked list describes node connections. Python’s deque is implemented differently from the small linked examples, yet it satisfies the queue operations we need. Program against the required behavior, then choose an implementation whose costs match the workload.

