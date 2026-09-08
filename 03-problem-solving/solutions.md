# Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Quiz](quiz.md) | [Project](project.md)

These are reference answers, not the only valid designs. Compare contracts, edge cases, and complexity as well as code.

## Exercises

```python
def count_words(words):
    counts = {}
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    return counts

def first_unique(numbers):
    counts = {}
    for number in numbers:
        counts[number] = counts.get(number, 0) + 1
    return next((number for number in numbers if counts[number] == 1), None)

def is_palindrome(text):
    normalized = ''.join(text.lower().split())
    return normalized == normalized[::-1]

def has_duplicate(values):
    seen = set()
    for value in values:
        if value in seen:
            return True
        seen.add(value)
    return False
```

The first three functions take `O(n)` time. Their dictionaries or normalized strings require `O(n)` extra space. The duplicate finder also takes expected `O(n)` time and `O(n)` space. For `{a[()]b}`, the bracket stack progresses as `{`, `{[`, `{[(`, `{[`, `{`, empty. `([)]` fails by ordering, while `((` ends with openings remaining.

## Quiz

1. Inputs, outputs, rules, and constraints. 2. Examples expose ambiguity and provide test targets. 3. An invariant is a statement preserved by each iteration. 4. Expected `O(n)`. 5. Sorting, so `O(n log n)`. 6. It exercises initialization and missing-data behavior. 7. You may make incorrect code faster or introduce harder bugs. 8. Expected `O(n)` time and `O(n)` space. 9. An early or mismatched closing bracket, and leftover openings. 10. A small failure is easier to trace precisely.

## Project

```python
def normalize(text):
    return ''.join(c.lower() if c.isalnum() else ' ' for c in text).split()

def frequencies(words):
    counts = {}
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    return counts

def build_report(text):
    words = normalize(text)
    counts = frequencies(words)
    most = max(words, key=counts.get) if words else None
    unique = [word for word in words if counts[word] == 1]
    return {'total': len(words), 'distinct': len(counts),
            'most_frequent': most, 'unique': unique}
```

Normalization and counting each traverse their inputs once. `max` and the unique-word comprehension add linear scans, so total expected time is `O(c + w)` and space is `O(c + w)`, where `c` is characters and `w` is words.
