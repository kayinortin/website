---
id: 2
title: Git Flow
description: Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository.
keywords: [Git, Git Flow, Git Order]
---

# Git Flow

Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository.

## Branches

Git Flow defines several types of branches:

- **Master**: The main branch that represents the production-ready code.
- **Develop**: The branch where all the new features are integrated and tested before being merged into the master branch.
- **Feature**: Branches created for developing new features. They are based on the develop branch and merged back into it once the feature is complete.
- **Release**: Branches created for preparing a new release. They are based on the develop branch and merged into both the master and develop branches once the release is ready.
- **Hotfix**: Branches created for fixing critical issues in the production code. They are based on the master branch and merged back into both the master and develop branches.

## Workflow

The typical workflow in Git Flow is as follows:

1. Create a new feature branch from the develop branch: `git flow feature start <feature-name>`.
2. Work on the feature and commit your changes.
3. Finish the feature and merge it back into the develop branch: `git flow feature finish <feature-name>`.
4. Create a new release branch from the develop branch: `git flow release start <release-version>`.
5. Perform any necessary final adjustments and testing on the release branch.
6. Finish the release and merge it into both the master and develop branches: `git flow release finish <release-version>`.
7. Create a new hotfix branch from the master branch: `git flow hotfix start <hotfix-version>`.
8. Fix the critical issue on the hotfix branch and commit your changes.
9. Finish the hotfix and merge it back into both the master and develop branches: `git flow hotfix finish <hotfix-version>`.

