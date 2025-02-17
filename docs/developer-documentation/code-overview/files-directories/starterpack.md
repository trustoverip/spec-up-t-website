---
sidebar_position: 1
---

# Spec-Up-T Starterpack

<div class="filesystemlayout">
```sh

├── create-spec-up-t-starterpack.js
├── messages.js
├── package-lock.json
├── package.json
├── package.spec-up-t.json
└── start.js
```
</div>

`create-spec-up-t-starterpack.js`: This script is called via NPX and starts the installation process. What it does:

- Handle file system operations (create the target directory etc.)
- Initialize Git
- Initialize NPM (copy `package.spec-up-t.json` to the target directory and rename to `package.json`, and then install the `spec-up-t` npm package)
- Hand over to `install.js` in the now available `spec-up-t` package.

