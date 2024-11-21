---
sidebar_position: 1
---

# Installation

Get started by **creating a new Spec-Up-T installation**.

## What you'll need

- A terminal / Command Line
- An editor, also called IDE (Integrated Development Environment). We recommend Visual Studio Code, but an editor in which you can quickly write Markdown is also good
- [Node.js](https://nodejs.org/en/download/):
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies
  - Use Node.js version 18 or higher
- A [webbrowser](https://en.wikipedia.org/wiki/Web_browser). You are probably reading this in a browser, so you already have one
- [Git](https://git-scm.com/). To host your specification on Github, you must also have Git installed on your local system. By the way, you can also create a specification (index.html) without hosting it on GitHub. But if you do so, the whole idea of a version-managed glossary using Git goes through the window.

:::info
Non-technical explanation:

- Command Line: A text interface to type commands for your computer.
- IDE: A software where you can easily write, test, and debug code.
- Node.js: This makes Spec-Up-T run
- Git: A system to track and manage changes in your code.

:::

## Create a new Spec-Up-T installation

### General info

Installing Spec-Up-T is as follows:

- Install the tool via `npx`
- Install the spec-up-t package via `npm`

It is explained in more detail below:

### Let's create

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

### Result

You should now have a directory called `my-spec-up-t-website` (or `spec-up-t-starterpack` if you did not specify a name) with the following files and directories:

<GitHubDirectoryList githubUrl="https://github.com/trustoverip/spec-up-t-starter-pack/tree/main/spec-up-t-starterpack" />

What you don't have yet is the following:

- a `docs` directory with a sample `index.html` file (which is the actual specification file that is the goal of it all).

How to do this, go to the [General Instructions](./command-line-menu.md).

### Add repo to Github

You should push your new specification (i.e. the sample content) to a GitHub repo.

These are the steps to take:

#### Edit `specs.json`

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

#### Commit and Push repo to GitHub

Now, commit your changes and push the repo to GitHub. Use the command line or your preferred way to do this.
