---
sidebar_position: 3
---

# Splitter Tool NEW

:::warning

Work in process

:::


## Overview:
The Splitter Tool automates the splitting of a markdown file containing multiple terms into individual files for easier management.

## Usage:

1. **Install and Access the Tool:**
   - Use `npx` to access the Splitter Tool:
     ```bash
     npx spec-up-splitter -help
     ```

2. **Split Terms:**
   - Run the tool with the following syntax:
     ```bash
     npx spec-up-splitter <source_file> <destination_directory>
     ```
     - Example:
       ```bash
       npx spec-up-splitter terms-definitions.md terms-definitions/
       ```

3. **Requirements:**
   - Ensure `specs.json` is present in the repository.
   - Verify the source file exists and the destination directory is empty.

4. **Behavior:**
   - Each term in the source file is split into a separate markdown file named after the term.
   - The tool skips any non-empty directories to prevent overwriting.

## Example:
Input:
```markdown
[[def: term 1]]
~ Description for term 1.
[[def: term 2]]
~ Description for term 2.
```

Output:
- `term1.md`
  ```markdown
  [[def: term 1]]
  ~ Description for term 1.
  ```
- `term2.md`
  ```markdown
  [[def: term 2]]
  ~ Description for term 2.
  ```

## Notes:
- The tool currently works on the first specification in `specs.json`.
- It is ideal for projects where terms are already consolidated in a single file.

