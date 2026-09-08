# Terminal and Files

[Previous lesson](02-preparing-your-workspace.md) | [Module home](README.md) | [Exercises](exercises.md) | [Roadmap](../ROADMAP.md)

## Simple version

A terminal is a window where you type commands. The shell is the program that reads those commands. Most file commands act on your current folder, so check that folder when a command cannot find something.

A terminal is a text interface to a shell. The terminal displays characters and accepts keyboard input. The shell reads commands, locates programs, expands paths, and reports results. PowerShell, Bash, and Zsh are different shells, so their command syntax is not always interchangeable.

Every shell session has a current working directory. Relative paths begin there. Absolute paths identify a location from a filesystem root. In PowerShell, inspect your current directory and list its contents with:

```powershell
Get-Location
Get-ChildItem
```

In Bash or Zsh, the comparable commands are `pwd` and `ls`. Change directory with `Set-Location path` in PowerShell or `cd path` in either environment. `.` means the current directory and `..` means its parent. These symbols are path components, not vague references. For example, `..\notes.txt` on Windows names a file in the parent directory.

Create a directory and a plain text file in PowerShell:

```powershell
New-Item -ItemType Directory -Path sandbox
Set-Location sandbox
New-Item -ItemType File -Path notes.txt
Set-Content -Path notes.txt -Value "first observation"
Get-Content -Path notes.txt
```

On a Unix-like shell, use `mkdir sandbox`, `cd sandbox`, `touch notes.txt`, `printf 'first observation\n' > notes.txt`, and `cat notes.txt`. Redirection with `>` replaces a file, while `>>` normally appends. Treat replacement commands carefully because a successful command can still destroy information you wanted.

Commands have a name, arguments, and often named options. In `python script.py --verbose`, `python` is the program, `script.py` is an argument, and `--verbose` is an option interpreted by that program. Spaces separate arguments unless quoting preserves them. A path such as `My Projects\demo.py` must be quoted because it contains a space.

Pay attention to exit status. Programs return zero by convention for success and a nonzero value for failure. PowerShell exposes the last native program status as `$LASTEXITCODE`; Bash and Zsh expose it as `$?`. Error text is evidence. Read the first relevant error, verify your directory and spelling, then change one thing at a time.

Use a safe practice loop: inspect the current location, list files, run a narrow command, and inspect the result. That habit scales from a one-file exercise to a large software repository.

[Take the quiz](quiz.md) | [Build the project](project.md)
