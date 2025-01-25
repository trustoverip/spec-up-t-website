---
sidebar_position: 0
---

# Intro

## Description of repositories related to Spec-Up-T

### The Spec-Up-T installer repository

The Spec-Up-T Installer repository installs a set of files somewhere on a file system.

- That can be on your local file system, which you later create a GitHub repository from so that others can use your repository as an external source for their glossary. However, you don't have to make a repository of it; without it, you will also get a working glossary.
- You can also start from GitHub and create a repository through this web interface with the files included in the Starterpack (this option is in development).

The Spec-Up-T Installer repository has a subdirectory named `spec-up-t-boilerplate`. This subdirectory is a working Spec-Up-T install. The scripts in the root copy this subdirectory to your chosen location on your file system via an NPX command (or you do this via GitHub's web interface, but this is under development, as mentioned above).

Note: You can also copy `spec-up-t-boilerplate/` manually and then call `npm install`. That has the same result.

When you run this NPX command, this subdirectory is copied to your local file system, and then, when that is done, `npm install` is called. This installs the packages as defined in the co-copied `package.json`, which is also in the mentioned subdirectory. The `package.json` in the root of the repository serves to copy the subdirectory to your local file system, via `create-spec-up-t-starterpack.js`.

:::info
The relevant files + a directory in the Spec-Up-T installer repository:

```
spec-up-t-boilerplate/
create-spec-up-t-starterpack.js
messages.js
package.json
```

This directory contains a working Spec-Up-T:
```
spec-up-t-boilerplate/
```

These files …

```
create-spec-up-t-starterpack.js
messages.js
package.json
```

… copy the `spec-up-t-boilerplate/` directory to your desired location via NPX.
:::

### The Spec-Up-T repository

One of the packages listed in the `package.json` copied to the local file system is `spec-up-t`. This package does all the work from the `node_modules` directory created when you run `npm install`. The copied files in the subdirectory have a helper function.

In the `package.json` you will find a `scripts` section. These reference the `spec-up-t` package, which can be called via npm commands, such as `npm run render`. Some calls go through a file in the `/src/server/` directory. This workaround is necessary so that you can include a  GitHub token. This token is needed to raise the GitHub API limit.

### Adding server-side functionality

The Node.js scripts that run server-side are in the root of the Spec-Up-T repo and the `/src/` directory.

If you have a Spec-Up-T installation (via `npx create-spec-up-t`), how can you run and test server-side Node.js code locally without publishing it on npm first?

- Clone the Spec-Up-T repo
- Install a Spec-Up-T via the installer
  
Generally, if you now run `npm run render,` it will call the scripts from the Spec-Up-T inside `node_modules` .

### Scripts section

In the `scripts` section of the `package.json` file for your Spec-Up-T installation, you will find commands like `render` in the `scripts` section:

ToDo: add file list

These are calls to the `Spec-Up-T` library in `node_modules`.

However, we want to test locally. To do this, we will call the scripts from your local Spec-Up-T clone, where you are developing.

Type this into your terminal:

:::warning
It is only tested on macOS.
:::

To `render` the index.html file, run this in your terminal:

```bash
node -e "require('/Users/***/path/to/your/spec-up-t/index.js')({ nowatch: true })"
```

You will notice that this is the same as the value of the `render` key without the escape characters.

Adjust the other entries if you want to run them.

## Directory structure

ToDo: Add file list

| File/Directory | Description / remarks                                        |
| -------------- | ------------------------------------------------------------ |
| `assets/`      | client-side: JS and CSS files                                |
| `gulpfile.js`  | responsible for the “build” of the index.html                |
| `index.js`     | main JS file, called via the “render” command                |
| `package.json` | “script” is needed for testing                               |
| `src/`         | JS files (Node.js, for server side stuff) + `asset-map.json` |
| `static/`      | Static files, like logo.svg                                  |
| `templates/`   | Mostly HTML, final step                                      |

