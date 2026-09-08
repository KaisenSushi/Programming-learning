# Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Project](project.md)

For exercise 1, `clamp` should first reject `minimum > maximum`, then return `minimum` for smaller values, `maximum` for larger values, and `value` otherwise. Tests should include values on each side and exactly equal to each bound. For exercise 2, whitespace-only or empty input becomes an empty string before indexing. One reasonable contract raises `ValueError` when `not name.strip()`. Exercise 3 answers are unit, integration, and end-to-end in that order. Exercise 4 can inject a `today` argument or clock function. This gives the test a fixed value.

Quiz answers: a test arranges input, acts, and asserts the result. Separate tests make failures specific. Test ordinary values, zero, one hundred, and invalid values just outside the range. Record a reproducible input, command, expected behavior, and actual behavior. A bare exception handler hides unexpected programming errors. Logging preserves evidence for intermittent or remote runs. Integration tests exercise cooperating components or a real boundary. Coverage cannot judge assertion quality. Order dependence leaks shared state. Python version, operating system, locale, time zone, dependency versions, and filesystem rules are useful environment checks.

A compact project implementation begins by validating that readings is nonempty, checks each value with `type(value) is int`, and then returns `{"count": len(readings), "minimum": min(readings), "maximum": max(readings), "mean": sum(readings) / len(readings)}`. Tests should use `assertEqual`, `assertAlmostEqual` for nonexact means, `assertRaises`, and a copied input list to verify no mutation.
