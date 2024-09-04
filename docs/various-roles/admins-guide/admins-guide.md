---
sidebar_position: 1
---

# Intro

This is the admin guide for the Spec-Up-T system.

The repo can be found [here](https://github.com/blockchainbird/spec-up-t).

## Installation

Get started by **creating a new site**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/):
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- A [webbrowser](https://en.wikipedia.org/wiki/Web_browser). You are probably reading this in a browser, so you already have one.

Use Node.js version 18 or higher.

### Install a new site

#### General info

Installing Spec-Up-T works similarly to installing any other npm package. You install it locally (not globally), and then you run it.

#### Install a new Spec-Up-T site

```bash
npx create-spec-up-t my-spec-up-t-website
```

*my-spec-up-t-website* can be anything you want it to be (however, it is recommended to not use spaces or special characters in directory names).

You can also omit the last part:

```bash
npx create-spec-up-t
```

If you omit `my-spec-up-t-website`, a default directory name, namely `spec-up-t-starterpack,` is used.

Sometimes, you want to force the latest version to be installed. Then you can do the following:

```bash
npx create-spec-up-t@latest my-spec-up-t-website
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor. It should work on any operating system (not tested yet).

You should now have a directory called `my-spec-up-t-website` (or `spec-up-t-starterpack` if you did not specify a name).

#### Go into the directory

- Go into this directory (folder) that was just created:

```bash
cd my-spec-up-t-website
```

You are now in this directory.

#### Install all dependencies

- Install all dependencies:

```bash
npm run install
```

It can take some time, and you should see multiple lines of output during installation.

When the prompt is visible again, you should now have a basic Spec-Up-T install:

- a `specs.json` file
- a `spec/` directory with sample markdown files
- a `node_modules` directory, a `package.json` file, and a `package-lock.json` file (these three elements belong to the `npm` system)

What you don't have yet is the following:

- a `docs` directory with a sample `index.html` file (which is the actual specification file that is the goal of it all).

How to do this, go to the [General Instructions](../general-guide.md).

#### Add repo to Github

You should push your new specification (i.e. the sample content) to a GitHub repo.

These are the steps to take:

##### Edit `specs.json`

Change this entry in `specs.json`:

```json
"source": {
                "host": "github",
                "account": "blockchainbird",
                "repo": "spec-up-t-starter-pack"
            }
```

to the correct information:

```json
"source": {
                "host": "github",
                "account": "your-account",
                "repo": "your-repo"
            }
```

These are the host (GitHub), your GitHub account name, and the repo name of the repo you are about to push.

##### Commit and Push repo to GitHub

Now, commit your changes and push the repo to GitHub. Use the command line or your preferred way to do this.
