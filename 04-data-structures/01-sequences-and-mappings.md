# 1. Sequences, Sets, and Mappings

[Module home](README.md) | [Next lesson](02-stacks-queues-linked-lists.md) | [Exercises](exercises.md) | [Roadmap](../ROADMAP.md)

Python lists store an ordered sequence and allow indexing by position. Reading or replacing `items[i]` takes `O(1)` time. Appending is amortized `O(1)`: an occasional resize is expensive, but the average cost over many appends is constant. Inserting or removing near the front is `O(n)` because later elements must shift. Searching an unsorted list is also `O(n)` in the worst case.

A tuple has sequence behavior but cannot be changed after creation. Immutability makes intent clear and allows a tuple of hashable values to serve as a dictionary key. It does not make arbitrary access faster than list access.

Sets answer membership questions efficiently. `value in values` is expected `O(1)`, compared with `O(n)` for a list. Sets do not represent duplicates and should not be chosen when occurrence count or meaningful order is required.

Dictionaries associate unique keys with values. Lookup, insertion, and deletion are expected `O(1)`. They are well suited to indexes, counters, caches, and records addressed by identifiers.

```python
def group_by_first_letter(words):
    groups = {}
    for word in words:
        if not word:
            continue
        key = word[0].lower()
        groups.setdefault(key, []).append(word)
    return groups
```

This function traverses the words once. If the total number of characters is ignored, its expected time is `O(n)`, and its output requires `O(n)` space. The dictionary makes finding a group cheap, while each list preserves the input order within that group.

Choose by operation, not habit. If you repeatedly test whether an identifier was seen, use a set. If you retrieve a record by identifier, use a dictionary. If you need stable positions and duplicates, use a list. Sometimes two structures cooperate: a list preserves display order while a set prevents duplicates. That uses more memory but expresses both requirements clearly.

Be alert to aliasing. Assigning `second = first` does not copy a list; both names refer to the same object. Use `first.copy()` for a shallow copy when nested values do not require independent copies. Data structure choice includes ownership and mutation rules, not only runtime cost.
