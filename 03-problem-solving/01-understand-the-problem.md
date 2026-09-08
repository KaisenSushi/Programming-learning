# 1. Understand the Problem

[Module home](README.md) | [Next lesson](02-design-an-algorithm.md) | [Exercises](exercises.md) | [Roadmap](../ROADMAP.md)

A vague problem produces vague code. Before choosing a loop or function, rewrite the task as a contract. State what information comes in, what result must come out, and which rules connect them. If a prompt says, “find the most common word,” important questions remain. Does capitalization matter? How is punctuation treated? What happens when two words tie? Is empty input allowed? Each answer changes the program.

Begin with small examples that you can solve by hand. For a function that returns the first repeated number, `[4, 2, 7, 2]` should produce `2`. Also test an input with no repetition, one with an immediate repetition, and an empty list. Examples are not only tests. They force the contract to become concrete.

Next, identify constraints. Ten values can tolerate almost any reasonable approach. Ten million values make repeated scanning expensive. Constraints also include valid ranges, ordering, available memory, and whether input may be changed. Write these facts beside the prompt.

Break the problem into named questions. For the repeated-number task:

1. How will the program remember values already seen?
2. In what order will it inspect the input?
3. How will it report that no repetition exists?

The questions suggest a set, a left-to-right loop, and a documented sentinel such as `None`.

```python
def first_repeat(numbers):
    seen = set()
    for number in numbers:
        if number in seen:
            return number
        seen.add(number)
    return None
```

Finally, state assumptions in the function name, documentation, or surrounding explanation. Silent assumptions are a common source of bugs. Clear assumptions can be reviewed and changed. Before moving on, trace the example by hand: record `number`, `seen`, and the return decision after every iteration. If the trace and contract disagree, fix the plan before adding more code.

## Check your understanding

Rewrite this prompt as a precise contract: “Remove duplicates from a list.” Decide whether order must be preserved, whether the original list may change, and what should happen with an empty list.
