# Git and GitHub Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Quiz](quiz.md) | [Roadmap](../ROADMAP.md)

## Exercise answers

1. One complete PowerShell sequence is:

   ```powershell
   New-Item -ItemType Directory git-exercises
   Set-Location git-exercises
   git init
   Set-Content README.md "# Git Exercises"
   git add README.md
   git diff --staged
   git commit -m "Add project introduction"
   git status
   ```

   The final status should report no pending changes.

2. After editing `README.md`, `git diff` shows the edit and `git diff --staged` is empty. After `git add README.md`, ordinary `git diff` is empty and `git diff --staged` shows the edit proposed for the next commit.

3. Create and commit the exclusions with:

   ```powershell
   Set-Content .gitignore "__pycache__/`n.venv/"
   git add .gitignore
   git commit -m "Ignore local Python files"
   ```

   Keeping `.gitignore` in history gives every clone the same project-level rules.

4. First find the original branch name with `git branch --show-current`. Then run `git switch -c add-example`, create `example.py`, stage it, and commit it. After `git switch main`, or the original name you recorded, the file is absent because that branch does not yet point to the feature commit.

5. Run `git merge add-example`. For this simple history, the original branch usually moves forward to the same commit as `add-example`, called a fast-forward merge. `git log --oneline --decorate --graph --all` shows both names and their commit positions.

6. Edit and stage a file, then run:

   ```powershell
   git diff --staged
   git restore --staged README.md
   git status
   git diff
   ```

   The final diff still shows the edit, proving it remains in the working tree but is no longer staged.

7. `git revert COMMIT_ID` records a new commit that reverses the selected change. Teammates can obtain that new history normally. Rewriting a shared commit changes commit identities and can make their existing branch history diverge.

8. Push with `git push -u origin add-example`, then open a pull request whose base is the original branch and whose compare branch is `add-example`. In Files changed, confirm only the intended Python file and related changes appear. If no GitHub remote is configured, this exercise should be described but not represented as completed.

## Quiz answers

1. Repository metadata in a `.git` directory.
2. They hold editable files, the proposed next snapshot, and saved snapshots respectively.
3. No.
4. `git diff`.
5. `git diff --staged`.
6. A commit.
7. The current difference and whether that work can be discarded.
8. It adds a visible inverse change without moving shared history.
9. A named reference to another repository location.
10. No.
11. Fetch downloads remote information; pull also integrates the tracked branch.
12. To review and discuss a proposed branch change before integration.

## Project sample program

```python
text = input("Text: ")
if not text.strip():
    print("Please enter some text.")
else:
    print("Characters:", len(text))
    print("Words:", len(text.split()))
```

A suitable initial commit might be `Create text counter`. The feature commit might be `Handle blank counter input`. The pull request should mention tests with a normal sentence, surrounding spaces, and blank input. Verify `git remote -v` before sharing output so it contains an ordinary repository URL and no secret.
