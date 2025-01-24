---
sidebar_position: 60
---

# Add Content

:::warning

Work in process

:::

## Overview:
This process outlines the steps to add content to a new Spec-Up-T installation by migrating data from an existing Spec-Up repository and organizing terms for efficient management.

## Steps:

1. **Prepare for Migration:**
   - Ensure you have a working Spec-Up installation.
   - Rename your existing GitHub repository and `.github.io` site (e.g., `Main-KERI-glossary` to `Main-KERI-glossary-OLD`).
   - Rename your local directory accordingly (e.g., `Main-KERI-glossary-OLD`).

2. **Set Up the New Repository:**
   - Create a new empty directory with the established name (e.g., `Main-KERI-glossary`).
   - Initialize the directory as a Git repository:
     ```bash
     cd <new_directory_name>
     git init
     ```
   - Link it to the new GitHub repository:
     ```bash
     git remote set-url origin <URL_to_new_GitHub_repo>
     ```

3. **Install Spec-Up-T:**
   - Follow the installation steps for Spec-Up-T:
     ```bash
     npx create-spec-up-t <directory_name>
     ```

4. **Migrate Data:**
   - Copy the `markdown_paths` from `specs.json` in the old repository to the new one, excluding `terms-definitions.md`.
   - Move markdown files from the old repository to the `/spec` directory of the new one.

5. **Organize Terms:**
   - Split `terms-definitions.md` into individual files, naming each file after its corresponding term. Place these files in a dedicated `terms-definitions` directory.
     - For automation, use the Splitter Tool (see **Tools** section).

6. **Generate Specification:**
   - Use the Spec-Up-T menu to add terms and generate the specification:
     ```bash
     npm run menu
     ```

7. **Finalize:**
   - Push the new repository to GitHub.
   - Archive the old repository for reference.

---


