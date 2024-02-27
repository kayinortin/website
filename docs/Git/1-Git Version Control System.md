---
id: 1
title: Git Version Control System
description: Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository.
keywords: [Git, Git Version, Git Order]
---

# Git Version Control System (VCS)

## What is Git

Git is a distributed version control system used to track changes in files and enable collaborative development. It is developed in C language for optimal performance.

## History

Git was developed by the father of Linux, "Linus Torvalds", for the purpose of better managing the Linux kernel. Before Git, the Linux kernel used BitKeeper for version control because it was a free distributed version control system, generously provided by the company. However, a Linux Kernel developer attempted to crack into BitKeeper, which angered BitKeeper, leading to the revocation of the free usage rights. Linus Torvalds decided to take matters into his own hands and developed Git within just 10 days.

## Advantages of Git

- Distributed: Each developer has a complete code repository and can perform version control and commits locally.
- Efficiency: Git stores file changes as snapshots rather than differences, making operations faster.
- Powerful Branching: Git's branching feature is very powerful, allowing easy creation, merging, and management of branches.
- Security: Git uses SHA-1 Hash to identify files, ensuring file integrity and security.

:::info

**Snapshots**: When using `git commit`, Git takes a snapshot of all files for storage.

:::

## Basic Concepts of Git

- Repository: A place to store code and version history.
- Commit: An operation to save changes in files to the repository.
- Branch: Used for parallel development and managing different code versions.
- Merge: Combines code from different branches.
- Remote Repository: A repository stored on the network, used for collaborative development.

## How Does Git Work

1. **.git/index**: The **.git/index** file acts as a staging area between your working directory and your repository. It is where changes are recorded before they are committed to the repository. The index doesn't directly reflect the **SHA-1 hashes** of **Git objects** when using `git ls-files`. Instead, `git ls-files` shows the files currently staged (in the index) for the next commit.
   
2. **SHA-1 and Git Objects**: The **SHA-1 hash** is a checksum used by Git to uniquely identify objects within the repository, such as commits, trees, and blobs. These objects are stored in the **.git/objects** directory. The index file does contain information about the staged files, including their paths and a reference to their **SHA-1 hashes**, but it is not directly showing these **SHA-1 hashes** with the `git ls-files` command.
   
3. **Changing Code and Git Blob Objects**: When you modify a file and then stage the changes (for example, using `git add`), Git creates a **new blob object** if the content is new to the repository. This blob object contains the file content and is identified by a **SHA-1 hash**. The index is updated to reference this new blob object. So, while changing the code and staging it does lead to the creation of a new Git Blob Object, the index file's role is to reference these changes rather than directly contain or show them through `git ls-files`.

## Basic Git Commands

- `git init`: Initialize a new Git repository.
- `git add`: Add files to the staging area (mark files for snapshot).
- `git commit`: Commit files from the staging area to the repository (commit snapshots).
- `git branch`: Create, view, and delete branches.
- `git merge`: Merge code from different branches.
- `git clone`: Copy files from a remote repository to the local machine.
- `git push`: Push local code to a remote repository.
- `git pull`: Fetch the latest code from a remote repository.
- `git stash`: Stash current directory files that have not been committed.
- `git blame`: Show what revision and author last modified each line of a file.
