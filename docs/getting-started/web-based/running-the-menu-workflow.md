---
sidebar_position: 3
---

# Menu Workflow

## Running the "Menu" Workflow

This guide shows you how to use the "Menu" workflow in the `trustoverip/spec-up-t` repository to run various Spec-Up-T scripts directly from your browser—no local setup needed! Whether you want to render a specification, update files, or generate a PDF, this workflow has you covered.

### Prerequisites

- A GitHub account with access to the repository where this workflow runs (e.g., a repo created by the "Create Spec-Up-T Project via Repo Creation" workflow).
- The repository must have a `MY_PAT` secret set up with `repo` and `workflow` scopes (automatically added if created via the "Create Spec-Up-T Project" workflow).

### Steps to Run the Workflow

1. **Navigate to the Workflow**:
   - Go to the [Actions tab](https://github.com/kordwarshuis/myproject4/actions) in your project repository (e.g., `your-username/my-spec-project`).
   - Scroll through the list of workflows on the left and find **"Run Menu"**. Click it to select it.

2. **Start the Workflow**:
   - On the right side, click the "Run workflow" button or dropdown (it might be a button or under a small arrow). A form will appear with a dropdown menu.

3. **Select a Script**:
   - **Select the script to run**:
     - Use the dropdown to choose one of the following options:
       - **Render specification**: Renders your specification to `index.html`
       - **Collect external references (cached)**: Gathers external references using a cache (will fetch cache the first time you run it)
       - **Collect external references (no cache)**: Gathers external references without caching, using `MY_PAT` for authentication
       - **Convert to PDF**: Generates a PDF from your specification
       - **Freeze specification**: Freezes the specification state
       - **List references**: Lists all references in the specification
       - **Custom update**: Updates your installation
     - Default: "Render specification"
   - Click the green "Run workflow" button at the bottom of the form.

4. **Monitor the Workflow**:
   - You’ll return to the Actions page, where a new run appears under "Menu" with a yellow circle (running) or green check (completed).
   - Wait a minute or two (refresh if needed) for it to finish.

5. **Check the Results**:
   - **For Most Options (e.g., "Render specification", "Convert to PDF")**:
     - If successful (green check), the output is deployed to the `gh-pages` branch.
     - Visit your GitHub Pages site (e.g., `https://your-username.github.io/my-spec-project`) to see the result (after running "Set GitHub Pages and Homepage" if not yet set).
   - **For "Custom update"**:
     - Changes are committed to your repository’s `main` branch.
     - Check the repo’s commit history (e.g., `https://github.com/your-username/my-spec-project/commits/main`) for a commit like "Custom update: Copy files from spec-up-t".
   - **For "Show help" or "Show menu"**:
     - Output appears in the workflow logs—no deployment occurs.
     - Click the run, expand "Run selected script," and read the text output.

### Troubleshooting

- **Run Fails (Red X)**:
  - Click the run, expand steps (e.g., "Run selected script"), and check for errors (e.g., missing `MY_PAT`, file not found).
  - Ensure `MY_PAT` is in your repo’s secrets (`Settings > Secrets and variables > Actions`).
- **No Pages Update**:
  - Verify "Set GitHub Pages and Homepage" has run to configure Pages.
  - Check `gh-pages` branch for updated files.
- **No Commits from "Custom update"**:
  - Ensure `custom-update.js` modifies files—empty changes won’t commit.

### Example

To render a specification:

- Select: "Render specification"
- Result: Files deploy to `gh-pages`, viewable at your Pages URL.

Enjoy exploring Spec-Up-T—happy scripting!
