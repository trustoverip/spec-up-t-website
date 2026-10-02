---
sidebar_position: 2
---


# Migrating from Spec-Up

## Introduction

Use this page when the repo still runs **classic Spec-Up** and you need to convert it once to Spec-Up-T with `spec-up-migrate`.

If the repo **already runs Spec-Up-T** and you only want a newer `spec-up-t` package (scripts, boilerplate, dependencies), use [Updating Spec-Up-T (custom-update)](./custom-update.md) instead. Do not run the migration again on a Spec-Up-T project.

## Prerequisites

- Basic familiarity with Git and npm.
- A text editor (e.g., VS Code or Notepad++).
- Installed Node.js and npm.
- Access to the Spec-Up-T GitHub repository.

## Migrate

### 1. Run the migration script

From the root of the classic Spec-Up installation:

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

Depending on the installation being converted, `specs.json` may need updates, and terminology files may need to be moved. That is manual work.

Compare your `specs.json` with [the boilerplate version](https://github.com/trustoverip/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/specs.json). Use this tool to find differences and align entries with the boilerplate:

```bash
npx compare-spec-up-t-specs
```

See the [tools page](../tools/compare-spec-up-t-specs.md) for more details.

## After migration

The repo should now be a Spec-Up-T project. Later version bumps use [custom-update](./custom-update.md), not this migration again.

If you encounter issues, refer to the troubleshooting guide or open an issue in the [Spec-Up-T GitHub repository](https://github.com/trustoverip/spec-up-t-starter-pack/issues).
