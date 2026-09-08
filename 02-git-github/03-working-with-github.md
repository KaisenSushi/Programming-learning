# Working with GitHub

[Previous lesson](02-branches-and-recovery.md) | [Module home](README.md) | [Exercises](exercises.md) | [Roadmap](../ROADMAP.md)

## Simple version

GitHub stores a copy of your Git repository online. You send commits with `push` and get newer commits with `pull`. A pull request is a place to review a branch before it is joined into another branch.

GitHub hosts Git repositories and adds issue tracking, pull requests, review, and automation. A remote is a local name for another repository location. The conventional name for the primary remote is `origin`, but that name has no special technical power.

The simplest beginner workflow is to create an empty GitHub repository without an added README, license, or `.gitignore`, then connect an existing local repository. GitHub displays commands using the repository URL. They usually resemble:

```powershell
git remote add origin https://github.com/your-name/your-repository.git
git branch -M main
git push -u origin main
```

Replace the example URL with the exact URL from your repository page. Check it with `git remote -v` before pushing. The `-u` option records a tracking relationship, allowing later `git push` and `git pull` commands to infer the branch.

Authentication is separate from Git identity. `user.name` and `user.email` label commits; they do not log you into GitHub. Git Credential Manager, GitHub CLI, or an SSH key can authenticate. Follow current [GitHub authentication documentation](https://docs.github.com/en/authentication) and never place a token in a repository or in a remote URL that you plan to share.

For a feature, create and push a branch:

```powershell
git switch -c improve-readme
git add README.md
git commit -m "Clarify setup instructions"
git push -u origin improve-readme
```

Open a pull request on GitHub from `improve-readme` into `main`. The title should summarize the result. The description should explain what changed, why it changed, and how you checked it. Review the Files changed tab before requesting review. A pull request is a discussion and integration tool, not the same as a commit.

When collaborating, run `git fetch origin` to download remote information without changing working files. `git pull` fetches and then integrates the tracked branch, so inspect your branch and working tree first. Keep local work committed or otherwise safely accounted for before integrating updates.

Useful official references include the [Git handbook](https://docs.github.com/en/get-started/using-git/about-git), [pull request guide](https://docs.github.com/en/pull-requests), and [Git documentation](https://git-scm.com/doc). Use documentation to confirm commands whose effects you do not understand.

[Take the quiz](quiz.md) | [Build the project](project.md)
