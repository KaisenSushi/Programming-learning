# Project: Study Session Tracker

[Module home](README.md) | [Exercises](exercises.md) | [Solutions](solutions.md) | [Roadmap](../ROADMAP.md)

Build a command-line tracker that summarizes study time by topic. The user enters records in the form `topic,minutes`, one per line. A blank line finishes input.

Split the program into functions. `parse_session(text)` must return a tuple containing a cleaned topic and positive integer minutes. It must raise `ValueError` for missing commas, blank topics, non-integer minutes, or values less than one. `add_session(totals, topic, minutes)` must update a dictionary total. `format_report(totals)` must return a multi-line string with topics sorted alphabetically, each topic total, the overall minutes, and the topic with the greatest total. Decide and document how ties are resolved.

The input loop should catch `ValueError`, print a useful message, and continue without losing earlier records. If no valid sessions were entered, print a clear message instead of attempting to choose a leading topic.

Example session:

```text
Session: loops,25
Session: functions,40
Session: loops,15
Session:

functions: 40 minutes
loops: 40 minutes
Overall: 80 minutes
Leading topic: functions
```

Use alphabetical order to resolve a tie, as shown. Test repeated topics, extra surrounding spaces, invalid minutes, and empty input. Keep calculation functions free of `input` and `print` so you can call them directly during testing.
