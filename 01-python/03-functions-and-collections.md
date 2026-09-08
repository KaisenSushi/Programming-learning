# Functions and Collections

[Previous lesson](02-decisions-and-loops.md) | [Module home](README.md) | [Exercises](exercises.md) | [Roadmap](../ROADMAP.md)

Functions name a unit of behavior. A useful function receives inputs through parameters, returns a result, and avoids unrelated work. Returning a value lets the caller decide whether to print it, store it, or use it in another calculation.

```python
def session_label(minutes):
    if minutes < 0:
        raise ValueError("minutes cannot be negative")
    if minutes < 25:
        return "short"
    if minutes < 60:
        return "focused"
    return "long"
```

Calling `session_label(40)` produces the string `"focused"`. The `raise` statement rejects input outside the function contract. A docstring can document that contract when the name and parameters are not sufficient. Type hints improve readability and tool support:

```python
def average(values: list[int]) -> float:
    if not values:
        raise ValueError("values cannot be empty")
    return sum(values) / len(values)
```

Hints are not automatic runtime validation. They communicate intent to people and analysis tools.

Lists store ordered, mutable sequences. Append with `items.append(value)`, access an item by zero-based index, and slice with expressions such as `items[1:3]`. Tuples are ordered but immutable, which makes them appropriate for fixed records. Sets store unique values and support membership tests. Dictionaries map unique keys to values:

```python
minutes_by_topic = {"loops": 35, "functions": 40}
minutes_by_topic["files"] = 25
for topic, minutes in minutes_by_topic.items():
    print(topic, minutes)
```

Choose a collection based on the operations you need. Use a list when order and duplicates matter, a set for uniqueness or fast membership checks, and a dictionary for lookup by meaningful keys. Nested structures model richer data, but deeply nested data can become hard to validate.

Variables assigned inside a function are local unless declared otherwise. Avoid modifying global state because it makes behavior depend on hidden context. Pass data in and return data out. Also remember that lists and dictionaries are mutable: a function can change an object supplied by its caller. Copy a collection when the contract should preserve the original.

Exceptions separate normal results from failures. Catch only errors you can handle meaningfully, and keep the protected block narrow. For user-entered numbers, catching `ValueError` near conversion is sensible. Catching every exception around an entire program hides programming mistakes.

Small functions and well-chosen collections turn a script from a sequence of instructions into a design that can be tested one behavior at a time.

[Take the quiz](quiz.md) | [Build the project](project.md)
