---
sidebar_position: 1
---

# Starterpack (via NPX)

<div class="filesystemlayout">
```sh

├── create-spec-up-t-starterpack.js
├── messages.js
├── package.spec-up-t.json
└── start.js
```
</div>

## `create-spec-up-t-starterpack.js`

This script is called via NPX and starts the installation process. What it does:

1. Handle file system operations (create the target directory etc.)
2. Initialize Git
3. Initialize npm
    1. copy `package.spec-up-t.json` to the target directory
    2. rename to `package.json`
    3. install the `spec-up-t` npm package
4. Hand over to `install.js` in the now available `spec-up-t` package.

## `messages.js`

Contains messages intended for feedback to the user.

## `start.js`

Work in progress: GitHub Action Workflow.

