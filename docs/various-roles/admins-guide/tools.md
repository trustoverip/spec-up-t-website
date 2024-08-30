---
sidebar_position: 3
---

# Extra Tools

## Splitter Tool

### Why

Each term in a specification will be kept in its own file to keep management doable. Sometimes you have the situation that files have already been created with many `Spec-Up` terms and definitions. Splitting many terms in one file is laborious, so this tool was built.

### What does it do?

This tool splits a `Spec-Up` Markdown file with many terms and definitions into separate files, each containing only one term and definition.

### How to use it

:::warning
Note the `npx`, not `npm`.
:::

#### Get help

```
npx spec-up-splitter -help
```
This will output a URL that points to this website.

#### Usage

```bash
npx spec-up-split [pathToTermsFile] [pathToTermsDir]
```

#### Example

```bash
npx spec-up-split custom_terms.md custom-terms-output
```

:::warning
Currently this tool works only on the first spec definition in specs.json (on the first element in de specs array in specs.json), which is usually the case for most Spec-Up projects. If you have multiple specs in your project, you may need to modify the tool to work with the correct spec definition.
:::

### Arguments

- pathToTermsFile: Optional. The path to the markdown file containing terms and definitions to be split. If not provided, defaults to 'terms_and_definitions.md'.
- pathToTermsDir: Optional. The path to the directory where the individual term files should be saved. If not provided, defaults to 'terms-definitions'.

### Requirements

- The tool requires a 'specs.json' file to be present. This file should be in a standard Spec-Up install.

### Behavior

1. The tool first checks for the existence of 'specs.json'. If it is not found, the tool stops with an error message.
2. It then checks if the source terms file exists. If not, it stops with an error message.
3. If the specified directory for term files already exists and is empty, the tool proceeds with the splitting operation. If it contains markdown files, it stops.

### Repo and Package

- Github repo: https://github.com/blockchainbird/spec-up-splitter
- NPM package: https://www.npmjs.com/package/spec-up-splitter
