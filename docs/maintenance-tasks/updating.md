---
sidebar_position: 2
---


# Updating

## Introduction

This guide is for converting an older Spec-Up installation with `spec-up-migrate`.

To bump the `spec-up-t` npm package in a repo that already uses Spec-Up-T (including 1.x → 2.1.0), see [Updating Spec-Up-T (custom-update)](./custom-update.md).

## Prerequisites

Before proceeding, ensure you have the following tools and knowledge:

- Basic familiarity with Git and npm.
- A text editor (e.g., VS Code or Notepad++).
- Installed Node.js and npm.
- Access to the Spec-Up-T GitHub repository.

## Update

Updating your **Spec-Up-T** installation requires the following steps:

### 1. Run migration script

Make sure you are in the root directory of your installation, then run the migration script as follows:

```bash
npx spec-up-migrate complete --skip-detection
```

:::info

Good to know:

```
npx spec-up-migrate complete --skip-detection
│   │               │        │
│   │               │        └── Option/Flag
│   │               └─────────── Subcommand/Command
│   └─────────────────────────── Package/Tool
└─────────────────────────────── Package runner
```
:::




### 2. Manual work: check `specs.json` and terminology files

Depending on the installation being converted, the `specs.json` may need to be updated.

Also, the terminology files may need to be moved. This is manual work.

Compare your `specs.json` with [the boilerplate version](https://github.com/trustoverip/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/specs.json). Use the following tool to identify differences. Ensure all entries align with the boilerplate.

```bash
npx compare-spec-up-t-specs
```

See the [tools page](../tools/compare-spec-up-t-specs.md) for more details.



## Completion

Your Spec-Up-T installation is now up to date. If you encounter any issues, refer to the troubleshooting guide or open an issue in the [Spec-Up-T GitHub repository](https://github.com/trustoverip/spec-up-t-starter-pack/issues).



