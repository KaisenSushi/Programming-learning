# 1. Searching and Sorting

[Module home](README.md) | [Next lesson](02-graph-traversal.md) | [Exercises](exercises.md) | [Roadmap](../ROADMAP.md)

Searching means finding whether a target is present, and often where it appears. Linear search checks values from left to right. It works on any sequence and takes `O(n)` time in the worst case because the target may be last or missing.

Binary search is faster on sorted data. Compare the target with the middle value. If the target is smaller, discard the right half. If it is larger, discard the left half. Each comparison halves the remaining search area, so the worst-case time is `O(log n)`. The sorted-input requirement is essential.

```python
def binary_search(values, target):
    low, high = 0, len(values) - 1
    while low <= high:
        middle = (low + high) // 2
        if values[middle] == target:
            return middle
        if values[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return None
```

Sorting arranges values by a key. Selection sort repeatedly finds the smallest remaining value and moves it forward. Its nested scans take `O(n^2)` time. It is useful for learning, but Python’s built-in `sorted` is faster and clearer in real programs. Python’s sort has `O(n log n)` worst-case time and is stable, meaning equal-key items keep their earlier relative order.

```python
records = [("Mira", 82), ("Jon", 75), ("Ava", 82)]
by_score = sorted(records, key=lambda record: record[1])
```

Sorting first is not always a win. One linear search costs `O(n)`, while sorting followed by binary search costs `O(n log n)`. If the same collection receives many searches, paying the sorting cost once may be worthwhile. If data changes frequently or only one search is needed, a direct scan or a set may be better.

Always state whether your algorithm returns any matching index, the first match, or all matches. With duplicates, ordinary binary search may return any matching position. A clear contract prevents a correct algorithm from being used for the wrong question.

