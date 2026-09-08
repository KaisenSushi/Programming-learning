# Values, Types, and Input

[Module home](README.md) | [Next lesson](02-decisions-and-loops.md) | [Roadmap](../ROADMAP.md)

## Simple version

A value is a piece of data, such as `12`, `3.5`, or `"hello"`. A variable gives that value a name. Input arrives as text, so you must convert it when you need a number.

A Python program works by evaluating expressions and keeping references to values. In `price = 12.50`, Python creates a floating-point value and binds the name `price` to it. The equals sign performs assignment. It does not state a permanent mathematical equality, so `price = price + 1` is valid: Python evaluates the right side first, then makes the name refer to the new result.

Common built-in types include `int` for whole numbers, `float` for approximate decimal values, `str` for text, `bool` for `True` or `False`, and `NoneType` for the single value `None`. Use `type(value)` while exploring, but write programs based on what operations the data should support. Strings can be joined with `+`; numbers can be added. Python deliberately rejects unclear mixtures such as `"3" + 4`.

The `input` function always returns a string:

```python
name = input("Name: ").strip()
minutes_text = input("Minutes practiced: ")
minutes = int(minutes_text)
print(f"{name} practiced for {minutes} minutes.")
```

Calling `.strip()` removes surrounding whitespace. `int` converts suitable text into an integer and raises `ValueError` when the text is not a valid whole number. Conversion is a useful boundary: outside data enters as text, then the program turns it into a type that matches its purpose.

Operators build expressions. Arithmetic includes `+`, `-`, `*`, `/`, `//`, `%`, and `**`. Ordinary division `/` returns a float. Floor division `//` rounds down to an integer-like quotient, while `%` gives the remainder. Comparisons such as `minutes >= 30` produce Boolean values.

Names should describe meaning rather than type. `session_minutes` is clearer than `num1`. Python convention uses lowercase words separated by underscores. Constants that should not change are commonly written in uppercase, such as `MINIMUM_SESSION = 10`, although Python does not enforce constancy.

Floating-point arithmetic is approximate. For example, `0.1 + 0.2` may not display as exactly `0.3`. That is expected binary representation behavior. Use rounded display for ordinary measurements and the `decimal` module when exact decimal accounting is required.

Good input code separates prompting, conversion, calculation, and display. That structure will make validation and automated testing easier in later lessons.

[Exercises](exercises.md) | [Quiz](quiz.md)
