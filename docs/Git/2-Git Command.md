---
id: 2
title: Git Commands
description: Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository.
keywords: [Git, Git Flow, Git Order]
---
import CenterImage from "@site/src/components/helper/CenterImage"

## Git References
Git references also known as refs, function within the Git version control system. These references are essentially pointers to specific commits within the repository's history, allowing easier access and management of versions without needing to remember long SHA-1 hashes.

<CenterImage src="https://willbchang.notion.site/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2022%2Fpng%2F260235%2F1650188808405-a8903b7a-24e3-42e7-8def-074fba7867ef.png?table=block&id=a8185ad8-a26f-4bf0-98fc-ecf1b3e37949&spaceId=c9e7ae34-64f6-4cc4-9c74-4ce3b1d1ee92&width=2000&userId=&cache=v2" />

## Understanding Git References
- References or Refs: In Git, references are simple names or pointers that map to SHA-1 hashes of commits. They make it easier to interact with the commit history without dealing with raw SHA-1 values directly.

- .git/refs Directory: This directory within a Git repository stores the refs. It typically contains subdirectories such as heads for branch references and tags for tag references, although initially, it might not contain any files until refs are created.

<CenterImage src="https://git-scm.com/book/en/v2/images/data-model-4.png"/>

:::info
When you run commands like `git branch <branch>`, Git basically runs that update-ref command to add the SHA-1 of the last commit of the branch you’re on into whatever new reference you want to create.
:::

## Working with References
- **Creating a Reference**: You can create a reference manually by echoing a commit's SHA-1 hash into a file within the .git/refs/heads directory. For example, creating a master branch reference by writing the SHA-1 hash to .git/refs/heads/master.

- **Using git log with References**: Once a reference is created, it can be used with Git commands like `git log` to view the commit history starting from the commit pointed to by the reference.

- **Safe Reference Updates**: While direct editing of reference files is possible, it's not recommended. Instead, Git provides the git update-ref command to safely update references.

## Branches and Tags
- **Branches as References**: In Git, a branch is essentially a reference to the tip of a line of development. Creating a new branch involves adding a new reference that points to a specific commit.

- **Tags**: Tags are another type of reference in Git, used to mark specific points in a repository's history as significant, usually for release versions. Unlike branches, tags do not change once created; they always point to the same commit.

## Conceptual Understanding
The provided illustration likely shows how branches and tags point to specific commits in the Git history, visually explaining the relationship between these references and the commit objects they point to.

## Practical Implications
- **Ease of Use**: References simplify navigating and managing a project's history, making it more accessible to work with different versions and branches.

- **Collaboration**: By using references, teams can more easily collaborate on projects, as they provide clear markers for features, fixes, and releases.

## <a href="https://git-scm.com/docs">Git Commands</a>

Below is a compilation of commonly used Git commands, organized by functionality. This list covers a wide range of basic to intermediate operations, essential for daily Git usage.

1. Setting Up and Configuring Git Setting Your Git Username:
- `git config --global user.name "Your Name"`
2. Setting Your Git Email Address:
- `git config --global user.email "your_email@example.com"`
3. Listing All Git Configuration Settings:
- `git config --list`
4. Starting and Initializing a New Git Repository:
- `git init`

   This command turns a directory into an empty Git repository.

5. **Cloning an Existing Repository**:
- `git clone <repository-url>`

   Creates a local copy of a remote repository.

6. **Basic Snapshotting Checking the Status of Your Files**:
- `git status`

   Displays the status of files in the working directory and staging area.

7. **Adding Changes to the Staging Area**:
- `git add <file>`

- `git add .`

   Adds a file to the staging area, making it ready for commit.

8. Committing Changes:
- `git commit -m "Commit message"`

   Records a snapshot of the staging area along with a descriptive message.

9. Removing Files from the Working Directory and Staging Area:
- `git rm <file>`

   Deletes a file from your working directory and stages the deletion.

10. Renaming or Moving Files:
- `git mv <file-original> <file-renamed>`

   Moves or renames a file, directory, or symlink.

11. **Branching and Merging Listing All Branches**:
- `git branch`

   Lists all local branches in the current repository.

12. **Creating a New Branch**:
- `git branch <branch-name>`

   Creates a new branch.

13. **Switching Branches**:
- `git checkout <branch-name>`

   Switches to the specified branch and updates the working directory.

14. **Creating and Switching to a New Branch**:
- `git checkout -b <new-branch>`

   Creates a new branch and switches to it.

15. **Merging a Branch into the Current Branch**:
- `git merge <branch>`

   Combines the specified branch's history into the current branch.

16. Sharing and Updating Projects Fetching Changes from a Remote Repository:
- `git fetch <remote>`

   Downloads objects and refs from another repository.

17. **Pulling Changes from a Remote Repository**:
- `git pull <remote> <branch>`

   Fetches and integrates changes from a remote branch into your current branch.

18. **Pushing Changes to a Remote Repository**:
- `git push <remote> <branch>`

   Updates the remote branch with local commits.

19. Inspection and Comparison Viewing the Commit History:
- `git log`

   Shows the commit logs.

20. Comparing Changes:
- `git diff`

   Shows the differences not yet staged.

21. Showing Changes Between Commits, Branches, etc.:
- `git diff <branch1> <branch2>`

   Shows differences between two branches.

22. Stashing and Cleaning Stashing Uncommitted Changes:
- `git stash push -m "Message"`

   Temporarily shelves changes so you can work on a different branch.

23. Listing Stashed Changes:
- `git stash list`

   Lists all stashed changesets.

24. Applying Stashed Changes:
- `git stash pop`

   Applies the changes from the top stash and removes it from the stash list.

25. To See Who Has Changed:
- `git blame "<file-name>"`


26. Redefine the branch's reference base:
- `git rebase <branch>`

**Git rebase is a command that is used to apply changes from one branch onto another.** It's primarily used to maintain a cleaner, linear project history by integrating changes from one branch (typically the main branch) into a feature branch. Rebasing rewrites the commit history by creating new commits for each commit in the original branch, which can make the project history easier to understand.

<CenterImage src="https://edison-frontend-notes.s3.ap-northeast-1.amazonaws.com/rebase.png"/>

The term "base" refers to "where this branch originated from." In the example above, both the cat and dog branches have their base in master. Next, we try to use the git rebase command to "combine" the cat and dog branches:

```
$ git checkout cat
$ git rebase dog
> cat rebase into dog
```

Translated into plain language, this command roughly means "I am the cat branch, and I now intend to redefine my reference base, using the dog branch as my new reference base." The message output by executing this command is as follows:

```
$ git rebase dog
First, rewinding head to replay your work on top of it...
Applying: add cat 1
Applying: add cat 2
```

<CenterImage src="https://gitbook.tw/images/tw/branch/merge-with-rebase/rebase-branch1.png"/>

:::note
I first take the commit `c68537` and apply it on top of commit `053fb2`. Since the original parent of commit `c68537` was `e12d8e`, and now it's being applied to `053fb2`, Git needs to recalculate the SHA-1 value of this commit to reflect its new history. This results in the creation of a new commit object, `35bc96`.

Next, I take the commit `b174a5` and apply it on top of the newly created commit object `35bc96`. Similarly, because commit `b174a5` is now being based on a new commit, its SHA-1 value is recalculated, leading to the creation of another new commit object, `28a76d`.

Finally, the original branch cat, which was pointing to commit `b174a5`, is now updated to point to the newly created commit object `28a76d`, reflecting the new history after the rebase.
:::

The first clear difference between merging branches with Rebase and the standard branch merging is that, when branches are merged using the Rebase method, Git does not create a specific commit for the merge.

From the outcome perspective, it feels like "cutting the cat branch and then pasting it on top of the dog branch," somewhat similar to the concept of "grafting" in flower arranging.

## How To Cancel A Rebase
To cancel a rebase, the situation is a bit more complex than simply undoing a regular merge. If it were a standard merge, you might just need to execute the command `git reset HEAD^ --hard `to remove the merge commit, and everyone would revert to the state before the merge.

However, as noted from the above, Rebase does not create a dedicated merge commit. Instead, it integrates the commits in a linear sequence, similar to regular commits.

Therefore, executing `git reset HEAD^ --hard` in this situation would only remove the last commit but would not revert to the state before the rebase.

In the case of needing to cancel a rebase, you would likely use the command `git rebase --abort`, which is specifically designed to stop the rebase process and revert to the original state before the rebase began.

This command is the safest way to cancel an ongoing rebase or to revert a rebase that has not been fully completed or pushed to a remote repository.