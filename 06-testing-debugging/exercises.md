# Exercises

[Module home](README.md) | [Solutions](solutions.md) | [Roadmap](../ROADMAP.md)

Complete these in a new `test_practice.py` file using `unittest`.

1. Write a `clamp(value, minimum, maximum)` function. It returns the minimum when the value is too small, the maximum when it is too large, and the original value otherwise. Reject a minimum greater than the maximum with `ValueError`. Write tests for all three regions, both exact boundaries, and the invalid range.
2. The function below fails on some inputs. Reproduce the defect with the smallest test you can, explain the violated assumption in one sentence, and correct the function.

```python
def first_letter(name):
    return name.strip()[0].upper()
```

3. Classify each proposed check as unit, integration, or end-to-end: testing a pure tax calculation; saving and reading a row from a real test database; completing checkout through a browser.
4. Explain why a test that uses the current date can become flaky. Describe one design that lets the test supply a fixed date.
5. Run your tests from the command line. Copy one deliberate failure message into your notes, then explain which parts show the expected value and actual value.

Compare your work with [solutions](solutions.md) only after running it.
