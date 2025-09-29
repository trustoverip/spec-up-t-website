---
sidebar_position: 0
---

# Introduction

## Build Scripts Overview

This section covers the build-time scripts and processes used in Spec-Up-T to generate specification documents from markdown source files.

## Core Components

### The Spec-Up-T Package

The main `spec-up-t` npm package contains all the build-time functionality. When you install Spec-Up-T (either via the installer or manually), this package is added to your `node_modules` directory and provides all the tools needed to transform your markdown files into rendered specifications.

### Scripts Section in package.json

In the `scripts` section of the `package.json` file for your Spec-Up-T installation, you will find commands that trigger the build process:

```json
{
  "scripts": {
    "edit": "node -e \"require('spec-up-t')()\"",
    "render": "node --no-warnings -e \"require('spec-up-t/index.js')({ nowatch: true })\"",
    "dev": "node -e \"require('spec-up-t')({ dev: true })\"",
    "collectExternalReferences": "node --no-warnings -e \"require('spec-up-t/src/pipeline/references/collect-external-references.js').collectExternalReferences()\"",
    "topdf": "node -e \"require('spec-up-t/src/create-pdf.js')\"",
    "todocx": "node -e \"require('spec-up-t/src/create-docx.js')\"",
    "freeze": "node -e \"require('spec-up-t/src/freeze-spec-data.js')\"",
    "references": "node -e \"require('spec-up-t/src/pipeline/references/external-references-service.js')\"",
    "help": "cat ./node_modules/spec-up-t/src/install-from-boilerplate/help.txt",
    "menu": "bash ./node_modules/spec-up-t/src/install-from-boilerplate/menu.sh",
    "addremovexrefsource": "node --no-warnings -e \"require('spec-up-t/src/add-remove-xref-source.js')\"",
    "configure": "node --no-warnings -e \"require('spec-up-t/src/configure.js')\"",
    "healthCheck": "node --no-warnings -e \"require('spec-up-t/src/health-check.js')\"",
    "custom-update": "npm update && node -e \"require('spec-up-t/src/install-from-boilerplate/custom-update.js')\""
  }
}
```

These are Node.js commands that directly require and execute specific modules from the `spec-up-t` package in `node_modules`. Each script serves a different purpose in the build and maintenance process.

### Build Process Architecture

The Node.js scripts that run during the build process are located in:

- The root of the Spec-Up-T repository
- The `/src/` directory within the Spec-Up-T package

When you run `npm run render`, it calls the build scripts from the Spec-Up-T package inside `node_modules`, which then:

1. **Parse Configuration**: Read the `specs.json` configuration file
2. **Process Markdown**: Transform markdown files according to Spec-Up-T syntax
3. **Handle Terms**: Process terminology definitions and cross-references
4. **Generate Output**: Create the final HTML specification document
5. **Apply Styling**: Add CSS and JavaScript for interactive features

### Build-Time Features

The build scripts handle several key features:

- **Terminology Processing**: Converting term definitions and creating cross-references
- **External References**: Fetching and linking to terms from external specifications
- **Markdown Extensions**: Processing Spec-Up-T specific markdown syntax
- **Template Rendering**: Applying HTML templates and styling
- **Asset Management**: Handling images, CSS, and JavaScript files

## Getting Started

To understand how the build process works:

1. Start with [Spec-Up-T Installer](./spec-up-t-installer.md) to understand how the build environment is set up
2. Review the specific build script documentation in this section
3. Examine the configuration options available in `specs.json`

For installation and setup instructions, refer to the [Getting Started](../../../getting-started/intro.md) section.

