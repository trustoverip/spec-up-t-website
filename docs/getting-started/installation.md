---
sidebar_position: 1
---

# Installation

Get started by **creating a new Spec-Up-T installation**.



## Create a new Spec-Up-T installation

### Let's create

Make sure you are in the directory where you want to install Spec-Up-T. A new subdirectory will be created with **your chosen name**, and the Spec-Up-T files will be placed in this subdirectory.

```bash
npx create-spec-up-t my-spec-up-t-website
```

*my-spec-up-t-website* can be anything you want it to be, that will **your chosen name** (however, it is recommended to not use spaces or special characters in directory names).

You can also omit the last part:

```bash
npx create-spec-up-t
```

If you omit `my-spec-up-t-website`, a default directory name, namely `spec-up-t-boilerplate,` is used.

Sometimes, you want to force the latest version to be installed. Then you can do the following:

```bash
npx create-spec-up-t@latest my-spec-up-t-website
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor. It should work on any operating system (not tested yet).

### Result

You should now have a directory called `my-spec-up-t-website` (or `spec-up-t-boilerplate` if you did not specify a name) with a subdirectory called `spec/`. You will find markdown files and another subdirectory, `terms-definitions` containing markdown files containing some sample content.

What you don't have yet is the following:

- a `docs` directory with a sample `index.html` file (which is the actual specification file that is the goal of it all).

How to do this, go to the [Command Line Menu](../user-interface-overview/command-line-menu.md).

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

## Difference between MacOS and Windows or Linux instructions

### Windows

Here are the differences between the original **macOS instructions** and the modified **Windows-specific instructions**:

1. **Terminal Type and Command Differences**:
   - **macOS**: Uses `Terminal` and general `bash` commands.
   - **Windows**: Uses **Command Prompt** or **PowerShell** instead of `Terminal`.
   - The command lines for `npx` and directory navigation are modified to explicitly reference PowerShell.

   #### Example

   - **macOS**:
     ```bash
     npx create-spec-up-t my-spec-up-t-website
     ```
   - **Windows**:
     ```powershell
     npx create-spec-up-t my-spec-up-t-website
     ```

2. **Directory Navigation**:
   - **macOS**: General command `cd my-spec-up-t-website` is the same, but assumed to run in macOS Terminal.
   - **Windows**: Specified as using PowerShell or Command Prompt, with `cd` unchanged.

   #### Example
   - **macOS and Windows**:
     ```bash
     cd my-spec-up-t-website
     ```

3. **Command Syntax for Install Dependencies**:
   - **macOS**: General usage of `npm` command with no specific shell mentioned.
   - **Windows**: Specifies running `npm` commands in PowerShell.

   #### Example
   - **macOS**:
     ```bash
     npm run install
     ```
   - **Windows**:
     ```powershell
     npm run install
     ```

4. **Environment Testing**:
   - **macOS**: Terminal and general `bash` or zsh commands are assumed.
   - **Windows**: Adds instructions to verify installation with PowerShell using `node -v`, `npm -v`, and `git --version` commands in PowerShell.

### Linux

Here are the differences between the original **macOS instructions** and the modified **Linux-specific instructions**:

1. **Terminal Type and Command Differences**:
   - **macOS**: Uses `Terminal` with general `bash` commands.
   - **Linux**: Uses `Terminal` with `bash` commands, similar to macOS, but provides additional installation steps specific to Linux systems (e.g., using `apt-get` for installing Node.js and Git).

   #### Example
   - **macOS**:
     ```bash
     npx create-spec-up-t my-spec-up-t-website
     ```
   - **Linux**:
     ```bash
     npx create-spec-up-t my-spec-up-t-website
     ```

2. **Node.js and Git Installation**:
   - **macOS**: Assumes Node.js and Git are downloaded and installed via their respective installers.
   - **Linux**: Adds specific commands for installing Node.js and Git through the package manager (`apt-get` for Debian-based systems).

   #### Example
   - **Linux**:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
     sudo apt-get install -y nodejs
     sudo apt-get install git
     ```

3. **Environment Testing**:
   - **macOS**: Assumes installation verification with general `bash` commands.
   - **Linux**: Adds instructions for verifying installation in `bash` using `node -v`, `npm -v`, and `git --version`.

   #### Example
   - **macOS and Linux**:
     ```bash
     node -v
     npm -v
     git --version
     ```

4. **Package Installation and Directory Navigation**:
   - **macOS**: Uses `Terminal` commands without additional setup.
   - **Linux**: Uses `Terminal` commands similarly, with no changes for directory navigation or `npm` commands, as Linux and macOS share similar shell environments.

   #### Example
   - **macOS and Linux**:
     ```bash
     cd my-spec-up-t-website
     npm run install
     ```