# Tracking Changes

[Module home](README.md) | [Next lesson](02-branches-and-recovery.md) | [Roadmap](../ROADMAP.md)

Git stores snapshots of a project in a repository. A repository is the project directory plus a hidden `.git` directory containing history and settings. Before starting, verify Git is installed with `git --version`. On Windows, the setup lesson in the previous module provides installation choices.

Tell Git the name and email to attach to new commits. These values become part of commit history, so choose information you are comfortable publishing:

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

You may omit `--global` while inside a repository to set a value only for that project. Inspect effective values with `git config user.name` and `git config user.email`.

Create a practice directory, enter it, and initialize a repository:

```powershell
New-Item -ItemType Directory -Path git-practice
Set-Location git-practice
git init
git status
```

Your working tree contains the files you can edit. The staging area is the proposed content for the next commit. A commit is a saved snapshot with metadata and a message. This three-part model explains the basic workflow: edit a file, stage the intended version, then commit it.

```powershell
Set-Content -Path README.md -Value "# Git Practice"
git status
git add README.md
git diff --staged
git commit -m "Add project introduction"
git log --oneline
```

`git add` does not permanently save a file and does not upload anything. It copies the current content into the staging area. If you edit the file again after staging, the staged and working versions differ. Use `git diff` for unstaged changes and `git diff --staged` for the proposed commit.

A good commit is one coherent change. Its message uses an imperative summary such as `Add input validation`, which reads like an instruction describing what the commit applies. Do not use vague messages such as `stuff` or combine unrelated formatting, features, and repairs without reason.

Create a `.gitignore` file for generated or local-only files before they are tracked. For a small Python project, common entries include `__pycache__/`, `.venv/`, and editor-specific local settings. A `.gitignore` rule does not remove a file already tracked. Never commit passwords, access tokens, private keys, or environment files containing secrets.

[Exercises](exercises.md) | [Quiz](quiz.md)
