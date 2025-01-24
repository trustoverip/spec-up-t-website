---
sidebar_position: 100
---

# Migration Process

:::warning

Work in process

:::


## Overview:
This process details how to transition from Spec-Up to Spec-Up-T to utilize its enhanced features.

## Steps:

1. **Pre-Migration Setup:**
   - Back up critical files:
     ```bash
     cp specs.json specs-backup.json
     cp package.json package-backup.json
     ```
   - Download the latest `specs.json` template for Spec-Up-T from the official repository.

2. **Modify Spec-Up Installation:**
   - Replace the `specs.json` structure with the updated version for Spec-Up-T.
   - Add `terms-and-definitions-intro.md` to the `/spec` directory:
     ```bash
     touch spec/terms-and-definitions-intro.md
     ```

3. **Organize Terms:**
   - Place all term files in the directory specified in `specs.json` under `spec_terms_directory`.
   - Reorganize the glossary order using `terms-index.json`. Optionally prefix file names with order numbers for custom sorting.

4. **Update Dependencies:**
   - Delete `node_modules` and `package-lock.json`:
     ```bash
     rm -rf node_modules package-lock.json
     ```
   - Install Spec-Up-T:
     ```bash
     npm install
     ```

5. **Generate Specification:**
   - Use the menu to add terms and generate the specification:
     ```bash
     npm run menu
     ```

6. **Finalize Migration:**
   - Confirm the following are present:
     - Updated `specs.json`.
     - Organized `/spec` directory.
     - `docs/` directory containing the generated `index.html` file.
   - Push the migrated repository to GitHub.

---
