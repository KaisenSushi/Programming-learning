# Project: Workspace Inspector

[Module home](README.md) | [Exercises](exercises.md) | [Solutions](solutions.md) | [Roadmap](../ROADMAP.md)

Build a small, reproducible workspace that proves you can create files, navigate paths, and run a program deliberately.

Create a directory named `workspace-inspector` with a `notes` subdirectory. Add `notes/setup.txt` containing your Python version, shell name, and the command that locates Python. Create `inspect_workspace.py`. The program must print a heading, the current working directory, its own resolved file path, and the names of entries beside the script. Use `pathlib.Path`, not hard-coded absolute paths.

Run the program in two ways: once while your terminal is inside `workspace-inspector`, and once from its parent directory using a relative script path. Save the two commands and outputs in `notes/runs.txt`. Add a short explanation of why the script location remains stable while the working directory changes.

Your finished structure should resemble:

```text
workspace-inspector/
  inspect_workspace.py
  notes/
    setup.txt
    runs.txt
```

Check that another learner could copy the directory, run the script, and understand the recorded observations. Avoid machine-specific assumptions except where `setup.txt` intentionally documents your environment. Compare your work with the sample approach only after your own version runs correctly.
