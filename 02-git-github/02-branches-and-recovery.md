# Branches and Safe Recovery

[Previous lesson](01-tracking-changes.md) | [Module home](README.md) | [Next lesson](03-working-with-github.md) | [Roadmap](../ROADMAP.md)

A branch is a movable name pointing to a commit. Branches let you develop a change without placing unfinished work on the main line. They are lightweight, so creating a branch for a focused change is normal.

Start from a clean working tree and create a branch:

```powershell
git status
git switch -c add-greeting
git branch --show-current
```

Edit files, inspect the difference, stage them, and commit. Then return to the main branch and merge. New repositories may use `main` or `master`; check `git branch` rather than guessing.

```powershell
git add greeting.py
git diff --staged
git commit -m "Add greeting script"
git switch main
git merge add-greeting
```

A merge combines histories. If two branches change incompatible parts of the same lines, Git pauses with a merge conflict. The affected file contains markers showing both versions. Open the file, decide what the final content should be, remove every marker, test the result, stage it, and complete the merge. `git status` explains the current state and suggested next actions.

Recovery begins with inspection. If an unstaged file has an unwanted edit, `git diff` shows it. `git restore path` replaces its working copy with the staged version, which can discard work, so use it only after reading the diff. To remove a file from the staging area while keeping the working copy, use:

```powershell
git restore --staged path-to-file
```

If a commit is already shared, prefer `git revert COMMIT_ID`. Revert creates a new commit that applies the opposite change, preserving an honest history. Avoid `git reset --hard` while learning. It can discard changes and move branch history, and it is rarely necessary for the workflows in this course.

Before switching branches, committing, merging, or recovering, ask four questions: Which branch am I on? What is changed? What is staged? Has this history been shared? `git status`, `git diff`, `git diff --staged`, and `git log --oneline --decorate -5` answer those questions. This inspection habit prevents more mistakes than memorizing advanced repair commands.

[Exercises](exercises.md) | [Build the project](project.md)
