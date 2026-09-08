# Git and GitHub Exercises

[Module home](README.md) | [Lessons](01-tracking-changes.md) | [Solutions](solutions.md) | [Roadmap](../ROADMAP.md)

Use a new disposable repository. Run `git status` after each numbered task and describe what changed in Git's report.

1. Initialize a repository, create `README.md`, stage it, inspect the staged difference, and commit it with a specific message.
2. Edit `README.md` after the first commit. Compare `git diff` with `git diff --staged` before and after staging the edit.
3. Add a `.gitignore` containing Python cache and virtual-environment rules. Commit it separately and explain why it belongs in history.
4. Create a branch named `add-example`, add a small valid Python file, and commit it. Return to the original branch and confirm the file is absent before merging.
5. Merge `add-example`, then draw or describe how the branch names and commits relate.
6. Stage a harmless edit, use `git restore --staged` on it, and confirm the edit remains in the working tree.
7. Explain why `git revert` is generally safer than rewriting a commit that teammates may already have.
8. If you have a GitHub account, push a practice branch and open a pull request. Review the changed-files view. Do not merge it until its base and changes are correct.

Keep all credentials out of files and command examples. The solutions describe expected observations rather than assuming a specific account or remote URL.
