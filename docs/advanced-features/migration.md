---
sidebar_position: 100
---

# Migrate from Spec-Up to Spec-Up-T

:::info Complete Migration Guide
For comprehensive migration instructions, see the [**spec-up-migrate documentation**](https://github.com/blockchainbird/spec-up-migrate/blob/main/README.md).
:::

## Quick Start

If you have a **Spec-Up** installation and want to convert it to **Spec-Up-T**, use the migration tool:

```bash
# Navigate to your Spec-Up project directory
cd /path/to/your/spec-up-project

# Run complete migration
npx spec-up-migrate complete

# Test the migrated project
npm run menu
```

## Why Migrate to Spec-Up-T?

Spec-Up-T extends the original Spec-Up with powerful new features:

- ✨ **Enhanced Terminology Support**: Individual term files with automatic definition management
- 🔄 **Modern Definition System**: Use `[[iref:]]` inline references that automatically display current definitions
- 📖 **Multi-File Definition Extraction**: Extract all `[[def:]]` definitions into organized term files
- 🎯 **Professional Output**: Generate publication-ready HTML specifications
- ⚡ **Better Configuration**: Dynamic configuration from the latest Spec-Up-T standards
- 🚀 **Enhanced Developer Experience**: Improved scripts, validation, and live development mode

## Prerequisites

If you're running a Spec-Up installation, you already have most of what you need:

- **Node.js** version 18 or higher (already installed if you have Spec-Up)
- **Terminal/Command Line** access
- **Git** (recommended for version control)
- A **text editor** or IDE (Visual Studio Code recommended)
- A **web browser** to view your specifications

:::note Non-Technical Info

- **Command Line**: A text interface to type commands for your computer
- **IDE**: Software where you can easily write, test, and debug code
- **Node.js**: The runtime that makes Spec-Up and Spec-Up-T work
- **Git**: A system to track and manage changes in your code

:::

## What the Migration Tool Does

The `spec-up-migrate` tool provides enterprise-grade automation:

- � **Smart Detection**: Automatically detect Spec-Up installations with 95%+ confidence
- 📦 **Safe Backup**: Create comprehensive backups before migration
- 🧹 **Clean Removal**: Remove obsolete files and legacy dependencies
- ⚡ **Dynamic Configuration**: Fetch latest Spec-Up-T configuration from official repository
- 🔄 **Intelligent Conversion**: Convert legacy formats to modern Spec-Up-T structure
- 🚀 **Complete Setup**: Install Spec-Up-T with proper project structure
- ✅ **Validation**: Built-in validation to ensure migration success

## Learn More

For detailed instructions, advanced features, troubleshooting, and command reference, see:

📚 **[Complete Migration Guide](https://github.com/blockchainbird/spec-up-migrate/blob/main/README.md)**

Additional resources:

- 🐛 [Report Issues](https://github.com/blockchainbird/spec-up-migrate/issues)
- 💻 [Source Code](https://github.com/blockchainbird/spec-up-migrate)
