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

## Knowledge

- **Workspace**: The place where you usually store your project code.
- **Index / Stage**: For temporarily storing your changes. In fact, it is just a file that holds information about the files that are about to be committed.
- **Repository**: A safe place to store data. It contains all the versions of data that you have committed. The HEAD points to the latest version that was put into the repository.
- **Remote**: The server that hosts the code. It can be simply thought of as a computer in your project team used for remote data exchange.
