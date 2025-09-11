---
sidebar_position: 1
---

# Spec-Up-T Installer (Starterpack)

## Overview

The Spec-Up-T Installer repository (also known as the Starterpack) is responsible for installing a set of files somewhere on a file system to get users started with Spec-Up-T. This document focuses on how the installer relates to the build process.

## Installation Options

The installer provides two main installation paths:

- **Local file system installation**: You can install on your local file system, which you can later create a GitHub repository from so that others can use your repository as an external source for their glossary. However, you don't have to make a repository of it; without it, you will also get a working glossary.
- **GitHub web interface**: You can also start from GitHub and create a repository through this web interface with the files included in the Starterpack (this option is in development).

## Installation Process

When you run the NPX command (`npx create-spec-up-t my-project`), the installer:

1. Copies the `spec-up-t-boilerplate/`, directory (located in the `Spec-Up-T` repository) to your chosen location
2. Runs `npm install` to install the `spec-up-t` package and its dependencies
3. Sets up the build environment with the necessary scripts

**Note**: You can also copy `spec-up-t-boilerplate/` manually and then call `npm install`. That has the same result.

The `package.json` in the root of the installer repository serves to copy the subdirectory to your local file system, via `create-spec-up-t-starterpack.js`.

## Build Integration

After installation, the copied files include a `package.json` with a `scripts` section that references the `spec-up-t` package for build operations. These scripts enable you to run commands like `npm run render` to build your specification documents.

The build process uses the `spec-up-t` package from `node_modules` to transform your markdown files into rendered HTML specifications.

## Related Documentation

For detailed information about the installer files and structure, see:

- [Starterpack Files & Directories](../scripts-general/files-directories/starterpack.md)

For installation instructions, see:

- [Getting Started Guide](../../../getting-started/intro.md)
