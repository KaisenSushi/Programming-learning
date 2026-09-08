# Writing Useful Tests

[Module home](README.md) | [Next lesson](02-debugging.md) | [Roadmap](../ROADMAP.md)

## Simple version

A test gives a small piece of code an input and checks the result. A good test protects one clear rule and gives a useful failure when that rule breaks.

A test is an executable example of expected behavior. It prepares an input, runs a small unit of code, and checks the result. Good tests are valuable because they turn a requirement into something repeatable. A test should fail for a clear reason when behavior changes and should pass without relying on network access, clock timing, or another test.

Suppose a shop represents percentage discounts with this function:

```python
def discounted(price, percent):
    if price < 0 or not 0 <= percent <= 100:
        raise ValueError("invalid price or percentage")
    return round(price * (1 - percent / 100), 2)
```

Python's standard library can exercise normal behavior and rejected input:

```python
import unittest

class DiscountTests(unittest.TestCase):
    def test_twenty_percent_discount(self):
        self.assertEqual(discounted(50, 20), 40.00)

    def test_zero_discount(self):
        self.assertEqual(discounted(12.50, 0), 12.50)

    def test_negative_price_is_rejected(self):
        with self.assertRaises(ValueError):
            discounted(-1, 10)

if __name__ == "__main__":
    unittest.main()
```

Run a saved test file with `python -m unittest test_shop.py`. Test names should describe behavior, not an implementation detail. Arrange each test so its input and expected result are visible together. One test may contain several assertions when they describe one coherent behavior, but unrelated scenarios are easier to diagnose as separate tests.

Include ordinary examples, boundaries, and invalid inputs. For a percentage, zero and one hundred are meaningful boundaries. Avoid testing private helper steps merely because they exist. Prefer the public result that a caller depends on. A mock can replace a slow or unreliable dependency, but excessive mocking creates tests that confirm the mock setup instead of real behavior. Begin with plain functions and small deterministic inputs. A test suite is not proof that no defect exists. It is a maintained collection of evidence that chosen behaviors still work.

Continue with [Debugging Systematically](02-debugging.md).
