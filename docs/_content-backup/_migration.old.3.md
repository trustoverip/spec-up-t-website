---
sidebar_position: 101
---

# Migrate from Spec-Up to Spec-Up-T (new, work in progress)

:::info
We are building a [migration tool to automate this process](https://github.com/blockchainbird/spec-up-migrate/blob/main/README.md). 
:::

:::warning
Work in progress.
:::

## Prerequisites

- A functioning **Spec-Up** installation that you want to convert to **Spec-Up-T**
- Node.js version 18 or higher
- Git installed on your local system
- A terminal/command line interface
- A text editor or IDE (Visual Studio Code recommended)

## Is it **Spec-Up**?

How do we know if your repository is a Spec-Up installation?

- Is there a `specs.json` present in the root directory that looks like [this](https://github.com/decentralized-identity/spec-up/blob/master/specs.json): 
- Is there a `package.json` present in the root directory that looks like [this](https://github.com/decentralized-identity/spec-up/blob/master/package.json):
- Is there a `index.js` present in the root directory that looks like [this](https://github.com/decentralized-identity/spec-up/blob/master/index.js): 

If so, then you are likely using Spec-Up.

## Migration Process in Detail

### 1. Back Up Your Critical Files

First, create backups of your configuration files:
```bash
cp specs.json specs-backup.json
cp package.json package-backup.json
```

### 2. Clean Up Repository Structure

Remove unnecessary directories and files:
- Empty the `/assets` directory
- Delete `/fonts` directory if present
- Delete `/docs/fonts` directory if present
- Delete `/gulpfile.js` file
- Delete `/index.js` file
- Remove all files from `.github/workflows`
- Clean up your `.gitignore` file:
  - Remove `package-lock.js` entry
  - Make sure that the `index.html` file in the `"output_path"` directory (in `specs.json`) is not ignored

### 3. Add Required Files and Configuration

#### Update Package Configuration
Replace your `/package.json` with the version from the [spec-up-t starter pack](https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/package.spec-up-t.json) or from a similar repository you've already migrated.

#### Create New Specs.json
1. Download the latest specs.json template from the [starter pack](https://github.com/blockchainbird/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/specs.json)
2. Save it to the root of your repository
3. Customize it with your specific information:
   - Title
   - Source information (host, account, repo)
   - Markdown paths (copy from your backup, excluding terminology files)
   - Set up your preferred `spec_terms_directory` (e.g., "terms-definitions")

Example structure:
```json
{
    "specs": [
        {
            "title": "Your Specification Title",
            "spec_directory": "./spec",
            "spec_terms_directory": "terms-definitions",
            "output_path": "./docs",
            "markdown_paths": [
                "intro.md",
                "your-content-files.md"
            ],
            "logo": "path/to/your/logo.svg",
            "logo_link": "your-logo-link-url",
            "source": {
                "host": "github",
                "account": "your-account",
                "repo": "your-repo-name"
            }
        }
    ]
}
```

#### Set Up Terminology Structure
1. Create a terminology introduction file:
   ```bash
   cd ./spec
   touch terms-and-definitions-intro.md
   ```
2. Create a directory for your terminology files:
   ```bash
   mkdir -p ./spec/terms-definitions
   ```

### 4. Installation and Package Setup

1. Clean up existing installation:
   ```bash
   rm -rf node_modules
   rm package-lock.json
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install spec-up-t package:
   ```bash
   npm install spec-up-t
   ```

4. Run the update scripts:
   ```bash
   npm update
   node node_modules/spec-up-t/src/install-from-boilerplate/custom-update.js
   (or npm run custom-update)
   ```

### 5. Organize Your Terminology

1. Use the splitter tool to separate your terms and definitions into individual files:
       ```bash
       npx spec-up-splitter
       ```

       (find the markdown file that holds the terms and definitions and use it as the source file)
2. Place these files in your designated terminology directory (`/spec/terms-definitions`)
3. You can organize terms by:
   - Using the `terms-index.json` file to change the order
   - Using filename prefixes for custom ordering (e.g., `10_validator.md`, `15_autonomous-identifier.md`)

### 6. Generate Your Specification

1. Run the setup menu:
   ```bash
   npm run menu
   ```

2. Select option 1 to generate the specification in `index.html`
3. If needed, add new terms using option 6

### 7. Final Review Before Commit

1. Review your README.md content to ensure it's up to date
2. Check your .gitignore file for any duplicate entries and clean them up
3. Verify that `index.html` has been generated correctly
4. Check that all terms appear correctly in the generated glossary

## Troubleshooting

- If you encounter npm warnings during installation, you can generally ignore them
- If generation fails, check your specs.json format and markdown paths
- For term organization issues, verify the structure of your terminology files

Run the final generation with `npm run menu` and select option 1 to complete the migration.

