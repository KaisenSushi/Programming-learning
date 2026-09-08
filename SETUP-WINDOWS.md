# Windows setup

This page installs the small set of tools used at the start of the course. You do not need a large bundle of programming software. Python runs your programs, Visual Studio Code gives you a comfortable place to edit them, the Python extension connects the editor to Python, and Git records your work.

If these tools are already installed and the verification commands work, skip to [Create your course folder](#create-your-course-folder).

## Before you begin

The commands below use WinGet, the Windows package manager. Open PowerShell or Windows Terminal as your normal user. You may see a Windows permission prompt during an installation. Read the package name before accepting it.

Check that WinGet is available:

```powershell
winget --version
```

If Windows says the command does not exist, install or update App Installer from the Microsoft Store, or use the official download links in [Resources](RESOURCES.md).

## Install the required tools

Run one command at a time. The `--exact` option prevents WinGet from choosing a similarly named package.

```powershell
winget install --exact --id Python.Python.3.14
winget install --exact --id Git.Git
winget install --exact --id Microsoft.VisualStudioCode
```

Close the terminal and open a new one after the installations finish. This lets Windows refresh the command search path.

Install Microsoft's Python extension for Visual Studio Code:

```powershell
code --install-extension ms-python.python
```

If `code` is not found, open Visual Studio Code, select Extensions from the left side, search for `Python`, and install the extension published by Microsoft.

## Verify the installation

Run these commands in a new PowerShell window:

```powershell
py --version
py -m pip --version
git --version
code --version
```

Each command should print a version and return to the prompt. A version does not have to match a screenshot or video exactly. New releases are normal. What matters is that the command is recognized.

If `python` opens the Microsoft Store, use the Windows launcher command `py` throughout this course. The lessons show `python` in places where it works on several operating systems. On Windows, `py` can replace it.

## Create your course folder

Choose a location you can find again. The following commands create a folder inside your Documents directory and open it in Visual Studio Code:

```powershell
Set-Location $HOME\Documents
New-Item -ItemType Directory -Name programming-course
Set-Location programming-course
code .
```

The final dot means the current folder. It tells Visual Studio Code which folder to open.

## Create an isolated Python environment

A virtual environment keeps packages for one project away from other projects. Create one inside your course folder:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install --upgrade pip
```

After activation, the prompt usually begins with `(.venv)`. Install a package with `py -m pip install package-name`. Do not install a long list of packages now. The early Python lessons use the standard library, which comes with Python.

If PowerShell blocks the activation script, you can use the environment without activation:

```powershell
.\.venv\Scripts\python.exe --version
.\.venv\Scripts\python.exe your_program.py
```

This avoids changing your system execution policy.

## Select Python in the editor

Open a file ending in `.py`. Press `Ctrl+Shift+P`, type `Python: Select Interpreter`, and choose the entry inside `.venv`. The selected interpreter appears near the bottom of the window. VS Code uses it when you run or debug the file.

Try this short program in a file named `hello.py`:

```python
name = input("What is your name? ")
print(f"Hello, {name}.")
```

Run it from the terminal:

```powershell
py hello.py
```

When that works, continue with [Getting started](00-getting-started/README.md). If it fails, copy the exact command and exact error into a note before changing anything. That record makes troubleshooting much easier.

## Optional tools for later modules

You do not need a C compiler for the first seven modules. The [C module](08-c/README.md) explains compiler choices when you reach it. You also do not need Jupyter, a database server, or a large Python distribution at the beginning. SQLite support comes with Python, and the course introduces extra tools only when they serve a lesson.

The official [Python in Visual Studio Code guide](https://code.visualstudio.com/docs/languages/python) explains the editor, extension, and interpreter as three separate pieces. The [WinGet documentation](https://learn.microsoft.com/en-us/windows/package-manager/winget/) covers package searches, upgrades, and uninstall commands.
