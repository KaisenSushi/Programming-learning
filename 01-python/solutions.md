# Python Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Quiz](quiz.md) | [Roadmap](../ROADMAP.md)

## Exercise answers

1. Convert the text after reading it, then format the result to one decimal place:

   ```python
   celsius = float(input("Celsius: "))
   fahrenheit = celsius * 9 / 5 + 32
   print(f"Fahrenheit: {fahrenheit:.1f}")
   ```

   An input of `0` prints `Fahrenheit: 32.0`.

2. Check the valid range before testing the passing boundary:

   ```python
   def classify_score(score):
       if not 0 <= score <= 100:
           return "invalid"
       return "pass" if score >= 60 else "retry"
   ```

3. Add a value only when it is positive:

   ```python
   total = 0
   for value in [-2, 5, 0, 8, -1]:
       if value > 0:
           total += value
   print(total)
   ```

   The result is `13`.

4. Use each word as a dictionary key and build its count:

   ```python
   def count_words(words):
       counts = {}
       for word in words:
           counts[word] = counts.get(word, 0) + 1
       return counts
   ```

5. Reject the empty case before dividing:

   ```python
   def average(values):
       if not values:
           raise ValueError("values cannot be empty")
       return sum(values) / len(values)
   ```

6. Keep asking until conversion succeeds and the converted value is positive:

   ```python
   while True:
       text = input("Positive whole number: ")
       try:
           number = int(text)
       except ValueError:
           print("Enter a whole number greater than zero.")
           continue
       if number > 0:
           break
       print("Enter a whole number greater than zero.")

   print("Accepted:", number)
   ```

7. Convert the list to a set to remove duplicates, then sort the unique values:

   ```python
   topics = ["loops", "files", "loops", "functions"]
   unique_topics = sorted(set(topics))
   print(unique_topics)
   ```

8. A returned result can be compared directly in a test, stored, formatted differently, or passed into another function. A function that only prints decides the presentation immediately and gives the caller no useful result to reuse.

## Quiz answers

1. `str`.
2. `2`.
3. `1`.
4. At most one.
5. `0`, `1`, and `2`.
6. A `for` loop.
7. It ends the function call and gives a value back to the caller.
8. A set.
9. A dictionary.
10. Division by the length would otherwise divide by zero.
11. No.
12. It can hide defects the program does not know how to recover from.

## Project sample core

```python
def parse_session(text):
    if "," not in text:
        raise ValueError("use topic,minutes")
    topic, minutes_text = text.split(",", maxsplit=1)
    topic = topic.strip()
    if not topic:
        raise ValueError("topic cannot be blank")
    minutes = int(minutes_text.strip())
    if minutes < 1:
        raise ValueError("minutes must be positive")
    return topic, minutes

def add_session(totals, topic, minutes):
    totals[topic] = totals.get(topic, 0) + minutes

def format_report(totals):
    if not totals:
        return "No sessions recorded."
    lines = [f"{topic}: {totals[topic]} minutes" for topic in sorted(totals)]
    lines.append(f"Overall: {sum(totals.values())} minutes")
    leader = min(totals, key=lambda topic: (-totals[topic], topic))
    lines.append(f"Leading topic: {leader}")
    return "\n".join(lines)
```

Wrap these functions in the input loop described in the project. The `min` key selects the greatest total through negation and then the alphabetically first topic.
