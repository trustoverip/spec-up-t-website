---
sidebar_position: 2
---


# Updating Spec-Up-T

## Introduction

Updating Spec-Up-T involves two key processes:

1. Updating **your own installation**, which you initially set up using the Spec-Up-T installer.
2. Updating the **Spec-Up-T npm package** to ensure you have the latest features and fixes.

This guide provides step-by-step instructions to update your installation.

## Prerequisites

Before proceeding, ensure you have the following tools and knowledge:

- Basic familiarity with Git and npm.
- A text editor (e.g., VS Code or Notepad++).
- Installed Node.js and npm.
- Access to the Spec-Up-T GitHub repository.

## Updating Your Own Installation

Updating your installation requires manually copying and updating files from the boilerplate provided in the Spec-Up-T repository. Follow these steps:

### 1. Retrieve Source Files from the Installer

The necessary files can be found in the [`spec-up-t-boilerplate`](https://github.com/blockchainbird/spec-up-t-starter-pack/tree/main/spec-up-t-boilerplate)[ directory](https://github.com/blockchainbird/spec-up-t-starter-pack/tree/main/spec-up-t-boilerplate).

#### Methods to Download Files

- Clone the repository using Git:
  ```bash
  git clone https://github.com/blockchainbird/spec-up-t-starter-pack.git
  ```
- Download a ZIP of the repository and extract it locally.
- Manually copy the content of individual files into your local setup.

Ensure the file and directory names in your local installation match those in the GitHub source repository. If they differ, rename your local files to align with the repository structure.

### 2. Update `package.json`

The following sections in your `package.json` file need updating:

#### `scripts`

Replace your current `scripts` section with the one from the boilerplate:

```json
"scripts": {
  // contents from the boilerplate
}
```

#### `dependencies`

Replace your current `dependencies` section:

```json
"dependencies": {
  // contents from the boilerplate
}
```

#### `version`

Update the `version` field to match the boilerplate version:

```json
"version": "<latest-version>"
```

You can find the latest version number [here](https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-boilerplate/package.json#L3).

### 3. Update `.gitignore`

Compare your `.gitignore` file with the boilerplate version. Copy any entries missing in your file from the boilerplate.

### 4. Configure GitHub Token

If you are using a GitHub token for authentication:

- Rename `.env.example` to `.env`.
- Add your token in the `.env` file as follows:
  ```env
  GITHUB_TOKEN=<your-token>
  ```

### 5. Update `specs.json`

Compare your `specs.json` with the boilerplate version. Use a file comparison tool like `diff` or `Meld` to identify differences. Ensure all entries align with the boilerplate.

### 6. Copy Boilerplate Files

Copy the following files from the boilerplate to the root of your installation. Overwrite existing files:

- `.env.example`
- `help.txt`
- `main.sh`
- `postinstall-message.js`
- `README.md`

Old, unused files can remain for now; they will not interfere with the system.

Copy the following directory (including sub-directories) from the boilerplate to the root of your installation. Overwrite existing directory:

- `/src`



### 7. Set Up Terms

#### `terms-and-definitions-intro.md`

- Create a file named `terms-and-definitions-intro.md` in the `/specs` directory.
- Add an intro text or leave it empty. Ensure this file is referenced in `specs.json`.

### 8. Run `npm update`

Update your npm dependencies by running:

```bash
npm update
```

## Completion

Your Spec-Up-T installation is now up to date. If you encounter any issues, refer to the troubleshooting guide or open an issue in the [Spec-Up-T GitHub repository](https://github.com/blockchainbird/spec-up-t-starter-pack/issues).



