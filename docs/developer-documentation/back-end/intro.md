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

## Publishing to GitHub and NPM

The suggested way to publish to GitHub and NPM will be described here.

### Add changes to Git

Make your changes and commit them:

```bash
git add .
git commit -m "Add new feature"
```

:::info
Merging branches is not described here. It's generally best to run npm version after merging your feature branch into the main (or master) branch. This ensures that the version bump and tag are applied to the final state of the code that will be released.
:::

### Publish to NPM

#### Update version numbers

:::warning

It's easy to forget to update the version nummer in different locations. Please read carefully what is written below.

:::

Update the version number in four `package.json`'s. The idea is to keep the version numbers of all repos the same. If you publish an update to NPM you have to raise the version number in four places:

1. https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-boilerplate/package.json#L3
2. https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-boilerplate/package.json#L8
3. https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/package.json#L3
4. https://github.com/trustoverip/spec-up-t/blob/master/package.json#L3

add 1: do this manually, if the current version is 1.0.87, make it 1.0.88

add 2: do this manually, if the current version is 1.0.87, make it 1.0.88

Now commit this file with message: “Bump version to 1.0.88”

add 3 & 4: Use this command:

```bash
npm version <newversion> -m "Bump version to %s"
```

In this case that would be:

```bash
npm version 1.0.88 -m "Bump version to %s"
```

The %s in the npm version command is a placeholder that gets replaced with the new version number. When you run the command, npm automatically substitutes %s with the version number you specified.

npm automatically creates a new Git tag that matches the new version number you specified.

#### Push changes

Push the changes and the tag to the remote repository:

```bash
git push origin main --tags
```

#### Publish to NPM

Publish the new version to npm:

```bash
npm publish
```

The new package will be available as soon as it is uploaded.
