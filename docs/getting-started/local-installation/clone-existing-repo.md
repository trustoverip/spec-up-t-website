---
sidebar_position: 6
---

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
git clone https://github.com/blockchainbird/spec-up-t-starter.git
```

### 4. Navigate to the Cloned Directory

After cloning, navigate into the newly created directory:

```bash
cd repository-name
```

For example:

```bash
cd spec-up-t-starter
```

### 5. Install Dependencies

Most Spec-Up-T repositories require Node.js dependencies. Install them using:

```bash
npm install
```

### 6. Verify the Installation

Check if everything is working by running the Spec-Up-T menu:

```bash
npm run menu
```

This should open the interactive menu where you can start working with the specification.

## Working with the Cloned Repository

Once you've successfully cloned the repository:

1. **Make changes locally**: Edit the markdown files in the `spec/` directory
2. **Generate output**: Use the Spec-Up-T menu to generate HTML files
3. **Commit your changes**: Use Git to track your modifications
4. **Push updates**: Share your changes back to the repository (if you have permissions)

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
