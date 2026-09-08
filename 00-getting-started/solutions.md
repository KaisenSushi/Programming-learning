# Getting Started Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Quiz](quiz.md) | [Roadmap](../ROADMAP.md)

## Exercise answers

1. Source code is the human-readable file. Python reads that file and carries out its instructions inside a process. The operating system creates the process, gives it memory and processor time, and controls its access to files and devices.

2. In PowerShell, run:

   ```powershell
   python --version
   Get-Command python
   ```

   A common Unix-shell equivalent is `python3 --version` followed by `command -v python3`. The first command reports a version; the second identifies the executable selected by the shell.

3. In PowerShell, use `New-Item -ItemType Directory terminal-practice`, `Set-Location terminal-practice`, and `Get-Location`. In Bash or Zsh, use `mkdir terminal-practice`, `cd terminal-practice`, and `pwd`. The final command should show a path ending in `terminal-practice`.

4. A PowerShell sequence is:

   ```powershell
   Set-Content observation.txt "I created this file."
   Get-Content observation.txt
   Add-Content observation.txt "I appended this line."
   Get-Content observation.txt
   ```

   The last output should contain both sentences in order.

5. One suitable `where_am_i.py` is:

   ```python
   from pathlib import Path

   print("Working:", Path.cwd())
   print("Script:", Path(__file__).resolve())
   ```

   Run `python .\where_am_i.py` from its directory. From the parent, run `python .\terminal-practice\where_am_i.py`. The working directory changes because it is inherited from the shell. The resolved script path remains the same because both commands load the same file.

6. Running `python missing_file.py` normally starts Python successfully, but Python cannot open the requested file. The failure occurs before source parsing, so it is not a syntax or logic error in the missing program.

7. `print("hello"` has a syntax error because its parenthesis is unmatched. `print(10 / 0)` raises a runtime error after execution starts. `area = width + height` is a logic error if the intended formula was `width * height`; it runs but computes the wrong result.

## Quiz answers

1. Source code is written for people and language tools; machine instructions are encoded operations a processor executes.
2. A process.
3. Persistent storage.
4. It parses the command, searches for the program, passes arguments, and reports the result.
5. The `course` directory.
6. Without quotes, the shell may treat each space-separated part as a different argument.
7. Success.
8. A runtime error.
9. A logic error.
10. The working directory comes from where the process was launched, not necessarily where the script is stored.

## Project sample

```python
from pathlib import Path

script = Path(__file__).resolve()
print("Workspace Inspector")
print("Working directory:", Path.cwd())
print("Script location:", script)
print("Nearby entries:")
for entry in sorted(script.parent.iterdir()):
    print("-", entry.name)
```

The recorded commands should demonstrate both launch locations and explain the observed difference.
