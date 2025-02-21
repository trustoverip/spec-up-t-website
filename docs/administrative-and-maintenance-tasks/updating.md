---
sidebar_position: 2
---


# Updating Spec-Up-T

## Introduction

This guide provides step-by-step instructions to update your **Spec-Up-T** installation.

## Prerequisites

Before proceeding, ensure you have the following tools and knowledge:

- Basic familiarity with Git and npm.
- A text editor (e.g., VS Code or Notepad++).
- Installed Node.js and npm.
- Access to the Spec-Up-T GitHub repository.

## Update

Updating your **Spec-Up-T** installation requires the following steps:

### 1. Configure GitHub Token

You need a GitHub Personal Access Token for authentication. [Instructions how to create a GitHub Personal Access Token](../getting-started/github-token.md).

- Rename `.env.example` to `.env`.
- Add your token in the `.env` file as follows:
  ```env
  GITHUB_TOKEN=<your-token>
  ```

:::info
If there is a `.env` file already, with a token, you can skip this step.
:::

### 2. Update `specs.json`

Compare your `specs.json` with [the boilerplate version](https://github.com/trustoverip/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/specs.json). Use a file comparison tool like `diff` or `Meld` to identify differences. Ensure all entries align with the boilerplate.

### 3. Set Up Terms

#### `terms-and-definitions-intro.md`

- Create a file named `terms-and-definitions-intro.md` in the `/specs` directory.
- Add an intro text or leave it empty. Ensure this file is referenced in `specs.json`. See the [boilerplate](https://github.com/trustoverip/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/specs.json#L12).

:::info
If there is a `terms-and-definitions-intro.md` file in the `/specs` directory already you can skip this step.
:::

### 4. Update

Run the update function:

```bash
npm run custom-update
```

This will run
1. `npm update` (which will update the `spec-up-t` package, and other packages)
2. a custom script.

If this giver errors, then run the following command:

```bash
node node_modules/spec-up-t/src/install-from-boilerplate/custom-update.js
```

and then run this again:

```bash
npm run custom-update
```



## Completion

Your Spec-Up-T installation is now up to date. If you encounter any issues, refer to the troubleshooting guide or open an issue in the [Spec-Up-T GitHub repository](https://github.com/blockchainbird/spec-up-t-starter-pack/issues).



