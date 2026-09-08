# Preparing Your Workspace

[Previous lesson](01-how-computers-run-programs.md) | [Module home](README.md) | [Next lesson](03-terminal-and-files.md) | [Roadmap](../ROADMAP.md)

## Simple version

Keep all course work in one folder and give each project its own folder inside it. A clean layout helps you find files, run the right commands, and undo mistakes.

A good workspace makes mistakes easy to inspect and undo. Start with one parent folder for course work, then give each project its own directory. Avoid scattering source files across Downloads, the desktop, and temporary folders. A predictable location makes terminal navigation, backups, and version control much easier.

Install Python 3 from the official Python website or your operating system package manager. On Windows, the installer can add Python to `PATH`. The `PATH` environment variable is a list of directories the shell searches when you enter a command. After installation, open a new terminal and check the version:

On Windows 10 or 11, `winget` is a convenient option when it is already available. These commands install Python, Git, and Visual Studio Code one at a time:

```powershell
winget install --id Python.Python.3.14 --exact
winget install --id Git.Git --exact
winget install --id Microsoft.VisualStudioCode --exact
```

Package identifiers and available versions can change. Read the package name and publisher shown by `winget` before accepting an installation. If `winget` is unavailable or reports no matching package, use the official [Python](https://www.python.org/downloads/windows/), [Git](https://git-scm.com/download/win), and [Visual Studio Code](https://code.visualstudio.com/download) download pages. Do not paste installation commands from an unknown page, and do not add unofficial package sources just to make a command work. Visual Studio Code is the recommended editor for this course, but any plain-text code editor is acceptable.

```powershell
python --version
git --version
code --version
```

Some systems use `python3 --version`. A version result confirms that the shell found an executable. It does not prove every future project will use the same interpreter, so notice the exact command that works on your machine. You can also ask where it was found. In PowerShell, use `Get-Command python`. In a Unix shell, use `command -v python3`.

Choose an editor that can save plain text and display line numbers. Visual Studio Code is common, but it is not required. Learn how to open a folder, create a file, save it, and open the integrated terminal. Do not depend entirely on a Run button. Running the same file from a terminal shows which directory and interpreter are involved.

Create a `practice` directory and a file named `check_setup.py`:

```python
from pathlib import Path

print("Python is ready")
print("Working directory:", Path.cwd())
print("Script location:", Path(__file__).resolve())
```

Run it from the directory containing the file:

```powershell
python .\check_setup.py
```

The working directory and script location can differ. The working directory belongs to the running process, while the script location identifies the file Python loaded. This distinction explains many missing-file errors later.

Keep tool installation separate from project work. Do not run commands copied from an unknown source without reading them. Understand the program, arguments, target directory, and expected effect first. A short setup note containing the versions and commands that worked is more valuable than a complicated setup you cannot reproduce.

[Try the exercises](exercises.md) | [Build the project](project.md)
