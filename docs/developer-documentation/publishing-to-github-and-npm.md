---
sidebar_position: 2
---

# Publishing to GitHub and npm

This guide describes the recommended workflow for publishing packages to GitHub and npm.

## Prerequisites

Before publishing, ensure you have:

1. Authentication with npm: Run `npm login` if not already authenticated
2. Your changes merged into the main branch (or `master` depending on your repository)
3. All tests passing and changes committed

## Commit Your Changes

Make your changes and commit them:

```bash
git add .
git commit -m "Add new feature"
```

:::info
It's generally best to run `npm version` after merging your feature branch into the main branch. This ensures that the version bump and tag are applied to the final state of the code that will be released.
:::

## Understanding Version Numbers

Choose the appropriate version number according to [Semantic Versioning (SemVer)](https://semver.org/):

- **Patch** (e.g., `1.0.0` → `1.0.1`): Bug fixes and minor changes
- **Minor** (e.g., `1.0.0` → `1.1.0`): New features, backward compatible
- **Major** (e.g., `1.0.0` → `2.0.0`): Breaking changes
- **Pre-release** (e.g., `1.0.0-beta.1`): Beta or alpha versions

### Version Command Syntax

The basic command structure is:

```bash
npm version <newversion> -m "Bump version to %s"
```

The `%s` in the command is a placeholder that npm automatically replaces with the new version number. For example:

```bash
npm version 1.1.0 -m "Bump version to %s"
```

This command automatically:

- Updates `package.json` to the new version
- Creates a Git commit with your message
- Creates a Git tag matching the version (e.g., `v1.1.0`)

## Beta Release Workflow

Use this workflow when publishing a pre-release version for testing:

```bash
npm version 1.0.0-beta.1 -m "Bump version to %s"
git push origin main --tags
npm publish --tag beta
```

:::tip
Replace `main` with `master` if your repository uses the older branch naming convention.
:::

### How the Beta Release Works

1. **`npm version 1.0.0-beta.1 -m "Bump version to %s"`**
   - Updates `package.json` to `"version": "1.0.0-beta.1"`
   - Creates a Git commit with the message `"Bump version to 1.0.0-beta.1"`, including changes to `package.json` (and `package-lock.json` if present)
   - Creates a Git tag `v1.0.0-beta.1` pointing to this commit
   - **Standard Compliance**: Uses a Semantic Versioning (SemVer) pre-release identifier (`-beta.1`), which is the standard for beta releases

2. **`git push origin main --tags`**
   - Pushes the commit and the Git tag (`v1.0.0-beta.1`) to the remote repository
   - **Standard Compliance**: Ensures the version history and tags are synchronized with the remote repository, a common practice for release tracking

3. **`npm publish --tag beta`**
   - Publishes the package version `1.0.0-beta.1` to the npm registry with the `beta` tag
   - Ensures `npm install <package>` does **not** install this beta version by default (it installs the `latest` tagged version instead)
   - Users can install the beta with `npm install <package>@beta` or `npm install <package>@1.0.0-beta.1`
   - **Standard Compliance**: Using a custom tag like `beta` for pre-release versions is the recommended npm practice to avoid breaking users who rely on stable versions

**Result**: Users get the stable version with `npm install <package>`, and beta testers can opt in with `npm install <package>@beta`. This is fully aligned with npm and Git best practices.

## Stable Release Workflow

Use this workflow when publishing a stable version:

```bash
npm version 1.0.0 -m "Bump version to %s"
git push origin main --tags
npm publish
```

:::tip
Replace `main` with `master` if your repository uses the older branch naming convention.
:::

### How the Stable Release Works

1. **`npm version 1.0.0 -m "Bump version to %s"`**
   - Updates `package.json` to `"version": "1.0.0"`
   - Creates a Git commit with the message `"Bump version to 1.0.0"`
   - Creates a Git tag `v1.0.0`
   - **Standard Compliance**: Follows SemVer for stable releases and creates a clear version marker in Git

2. **`git push origin main --tags`**
   - Pushes the commit and tag (`v1.0.0`) to the remote repository
   - **Standard Compliance**: Keeps the remote repository in sync, standard for release workflows

3. **`npm publish`**
   - Publishes version `1.0.0` to the npm registry with the default `latest` tag
   - Makes this version the default for `npm install <package>`
   - **Standard Compliance**: Assigning the `latest` tag to stable releases is the npm standard, ensuring users get the latest stable version by default

**Result**: The stable version `1.0.0` is installed by default with `npm install <package>`, following npm's expected behavior.

## Installing Versions

### Installing the Latest Stable Version

To install the latest stable version (default behavior):

```bash
npm install <package>
```

This installs the version tagged as `latest` on the npm registry.

### Installing a Beta Version

To install the latest beta version:

```bash
npm install <package>@beta
```

This installs the latest version tagged as `beta` on the npm registry (e.g., `1.0.0-beta.1`).

### Installing a Specific Version

To install a specific version by exact version number:

```bash
npm install <package>@1.0.0
npm install <package>@1.0.0-beta.1
```

### Checking Available Versions

To list all available versions and their tags:

```bash
npm view <package> versions
npm dist-tag ls <package>
```

The `npm dist-tag ls` command shows which tags (like `latest` and `beta`) point to which versions, helpful for understanding what's available.

### Updating an Installed Package

If you already have the package installed and want to update to a different version:

```bash
npm update <package>                 # Updates to the latest minor/patch of current major version
npm install <package>@1.0.0          # Installs a specific version
npm install <package>@beta           # Updates to the latest beta version
```

## Summary

- **Beta Workflow**: Using `npm publish --tag beta` ensures beta versions (e.g., `1.0.0-beta.1`) are available only to users who explicitly request them, protecting users who rely on the `latest` stable version
- **Stable Workflow**: Publishing without a tag automatically uses the `latest` tag, making the version available to all users by default
- **Git Integration**: Both workflows use `npm version` to synchronize `package.json` with Git commits and tags, which is a standard practice for Node.js projects
- **SemVer Compliance**: Using `1.0.0-beta.1` for betas and `1.0.0` for stable releases adheres to Semantic Versioning standards
- **User Experience**: The distinction between `latest` (stable) and `beta` tags ensures a clear separation, which is a best practice for package maintainers

## Additional Resources

- [Semantic Versioning (SemVer)](https://semver.org/)
- [npm version documentation](https://docs.npmjs.com/cli/v9/commands/npm-version)
- [npm publish documentation](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [npm dist-tag documentation](https://docs.npmjs.com/cli/v9/commands/npm-dist-tag)
