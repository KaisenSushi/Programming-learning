# Project: Reliable Reading Summary

[Module home](README.md) | [Solutions](solutions.md)

Build a small Python module that summarizes integer sensor readings. Implement `summarize(readings)` so it returns a dictionary containing `count`, `minimum`, `maximum`, and `mean`. Reject an empty collection with `ValueError`. Reject booleans and non-integers with `TypeError`, since Python otherwise treats booleans as integers in some contexts. Do not modify the caller's list.

Create a separate `unittest` file. Cover a typical list, one item, negative numbers, repeated values, empty input, a boolean, and another invalid type. Add a test proving the original list remains unchanged. Test observable results rather than copying the implementation into the test.

Next, introduce a defect deliberately, such as dividing by `count - 1`. Capture the failing test output in your own development notes, diagnose the mismatch, and restore the correct code. Run the complete suite with `python -m unittest` from the project directory.

Your finished submission should contain the implementation, tests, and a short README that states the contract and test command. Review the [solution outline](solutions.md), but keep your own naming and explanation if they are clear.
