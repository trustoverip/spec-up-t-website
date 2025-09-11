---
sidebar_position: 6
---

import CommandLineMenu from '../../_shared-content/command-line-menu.md';

# Clone an Existing Spec-Up-T Repository

If you want to work with an existing Spec-Up-T repository (either your own or someone else's), you'll need to clone it to your local machine. This is useful when:

- You want to contribute to an existing specification
- You're working on a team project
- You want to use an existing specification as a starting point
- You need to make local changes to a specification

## Prerequisites

Before cloning a repository, ensure you have:

- [Git installed](system-requirements.md) on your system
- Basic familiarity with the command line

## Steps to Clone a Repository

### 1. Get the Repository URL

First, you need the URL of the repository you want to clone. You can find this on the GitHub repository page:

1. Navigate to the repository on GitHub
2. Click the green "Code" button
3. Copy the HTTPS or SSH URL (HTTPS is recommended for beginners)

### 2. Choose Your Local Directory

Open your terminal or command prompt and navigate to the directory where you want to store the project:

```bash
cd /path/to/your/projects
```

For example:

```bash
cd ~/Documents/projects
```

### 3. Clone the Repository

Use the `git clone` command followed by the repository URL:

```bash
git clone https://github.com/username/repository-name.git
```

Replace the URL with the actual repository URL. For example:

```bash
git clone https://github.com/trustoverip/tswg-acdc-specification.git

```

### 4. Navigate to the Cloned Directory

After cloning, navigate into the newly created directory:

```bash
cd repository-name
```

For example:

```bash
cd tswg-acdc-specification
```

### 5. Check Out the Correct Branch (if needed)

By default, Git clones the default branch (usually `main` or `master`). If you need to work on a different branch:

First, see what branches are available:

```bash
git branch -a
```

Then check out the branch you need:

```bash
git checkout branch-name
```

For example, to switch to a development branch:

```bash
git checkout develop
```

If you need to create a new branch for your work:

```bash
git checkout -b my-new-feature
```

### 6. Set Up Git Remotes (Recommended)

When working with collaborative repositories, it's recommended to set up your Git remotes properly:

- **origin**: Points to your personal fork of the repository
- **upstream**: Points to the original production repository

By default, after cloning, you'll have (example):

```bash
origin	https://github.com/trustoverip/tswg-acdc-specification.git (fetch)
origin	https://github.com/trustoverip/tswg-acdc-specification.git (push)
```

To set up the recommended remote configuration:

1. Add the original repository as upstream:

```bash
git remote add upstream https://github.com/trustoverip/tswg-acdc-specification.git
```

2. Change origin to point to your personal fork:

```bash
git remote set-url origin https://github.com/{USERNAME}/tswg-acdc-specification.git
```

Replace `{USERNAME}` with your actual GitHub username.

#### Verify Remote Settings

Check your remote configuration with:

```bash
git remote -v
```

You should see output like this:

```bash
origin	https://github.com/henkvancann/tswg-acdc-specification.git (fetch)
origin	https://github.com/henkvancann/tswg-acdc-specification.git (push)
upstream	https://github.com/trustoverip/tswg-acdc-specification.git (fetch)
upstream	https://github.com/trustoverip/tswg-acdc-specification.git (push)
```

This setup allows you to push changes to your fork (origin) and pull updates from the production repository (upstream).

### 7. Install Dependencies

Spec-Up-T repositories require Node.js dependencies. Install them using:

```bash
npm install
```

:::warning

Do the `npm install` after checking out the correct branch since different branches can have different `package.json`.

`package.json` contains the instructions for `npm install`.

:::

### 8. Verify the Installation

Check if everything is working by running the Spec-Up-T menu:

```bash
npm run menu
```

This should open the interactive menu where you can start working with the specification. It looks like this (see below):

<CommandLineMenu />

## Working with the Cloned Repository

Once you've successfully cloned the repository:

1. **Make changes locally**: Edit the markdown files in the `spec/` directory
2. **Generate output**: Use the Spec-Up-T menu to generate HTML files
3. **Commit your changes**: Use Git to track your modifications
4. **Push updates**: Share your changes back to the repository (if you have permissions)

### Add. 1: Make changes locally

Edit the markdown files in the `spec/` directory using your preferred text editor. You can modify terms, definitions, and specification content as needed. After making changes, save the files and proceed to generate the updated output.

### Add. 2: Generate output

What you currently have is the following:

- A `docs` directory with a pulled-in version of `index.html` file (which is the resulting specification file).

What you don't have yet is a newly generated `index.html` locally:

- An `index.html` file in the `docs` directory with a timestamp of just seconds ago

To generate the local `index.html`, run:

```bash
npm run menu
```

Then select option `1` to generate the specification.

### Add. 3: Commit your changes

After generating the updated output, commit your changes to Git:

```bash
git add .
git commit -m "Your commit message describing the changes"
```

This saves your changes locally in the Git repository.

### Add. 4: Push updates

Push your committed changes to the remote repository (if you have write permissions):

```bash
git push origin branch-name
```

Replace `branch-name` with the name of the branch you're working on (e.g., `main` or `develop`). This makes your changes available to others.


## Common Issues and Solutions

### Permission Denied

If you get a "Permission denied" error when cloning:

- Make sure you have access to the repository
- For private repositories, ensure your [GitHub token](../github-token.md) is properly configured
- Consider using SSH keys for authentication

### Repository Not Found

If you get a "repository not found" error:

- Double-check the repository URL
- Verify the repository exists and is public (or you have access if private)
- Ensure you're using the correct GitHub username/organization name

### Git Not Installed

If the `git clone` command is not recognized:

- Install Git on your system (see [System Requirements](system-requirements.md))
- Restart your terminal after installation

## Next Steps

After successfully cloning and setting up the repository:

1. Familiarize yourself with the [Command Line Menu](../../user-interface-overview/command-line-menu.md)
2. Learn about [editing specifications](../../spec-up-t-editor/intro.md)
3. Understand how to [push changes to GitHub](push-to-github.md)

## Alternative: Fork Instead of Clone

If you want to make significant changes to someone else's repository, consider forking it first:

1. Click the "Fork" button on the GitHub repository page
2. Clone your fork instead of the original repository
3. This gives you full control over your copy while allowing you to contribute back via pull requests
