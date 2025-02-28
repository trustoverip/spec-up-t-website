---
sidebar_position: 2
---

# Create a new Spec-Up-T installation

## Running the "Create Spec-Up-T Project via Repo Creation" Workflow

This guide explains how to use the "Create Spec-Up-T Project via Repo Creation" workflow in the `trustoverip/spec-up-t` repository to generate a new Spec-Up-T project repository directly from your browser—no local setup required!

### Prerequisites

- A GitHub account.
- (Optional, but strongly recommended) A Personal Access Token (PAT) with `repo` and `workflow` scopes if you want the project pushed to your own repository. If you skip this, you’ll get a downloadable artifact instead.

:::info

[How to create a Personal Access Token (PAT)](../github-token.md)

:::

### Steps to Run the Workflow

1. **Navigate to the Workflow**:
   - Go to the [`Create Spec-Up-T project`](https://github.com/trustoverip/spec-up-t/actions/workflows/create-project-via-repo-creation.yml) Action Workflow in the `trustoverip/spec-up-t` repository.

2. **Start the Workflow**:
   - On the right side, you’ll see a "Run workflow" button or dropdown (it might say "Run workflow" directly or be under a small arrow). Click it.
   - A form will pop up with input fields.

3. **Fill in the Inputs**:
   - **Name of the new project repository**:
     - Enter a name for your new project (e.g., `my-spec-project`).
     - This will be the name of the repository created under your GitHub account (if using a PAT) or the artifact folder (if downloading).
     - Example: `my-spec-project`
   - **Your GitHub username (required if PAT is provided)**:
     - Enter your GitHub username (e.g., `johndoe`).
     - Required only if you’re providing a PAT (see below); otherwise, leave blank.
     - Example: `johndoe`
   - **Your GitHub PAT (optional, to push to your own repo)**:
     - If you want the project pushed to a new repository under your account, enter a Personal Access Token (PAT) here.
     - To create a PAT:
       1. Go to `Settings > Developer settings > Personal access tokens > Tokens (classic)` in your GitHub account.
       2. Click "Generate new token."
       3. Give it a name (e.g., `spec-up-t`), set an expiration, and check `repo` and `workflow` scopes.
       4. Copy the token (e.g., `ghp_xxxxxxxxxxxxxxxxxxxxx`) and paste it here.
     - If you leave this blank, the project files will be available as a downloadable ZIP instead.
     - Example: `ghp_xxxxxxxxxxxxxxxxxxxxx`

4. **Run the Workflow**:
   - Click the green "Run workflow" button at the bottom of the form.
   - You’ll be taken back to the Actions page, where a new run will appear under "Create Spec-Up-T Project via Repo Creation" with a yellow circle (running) or green check (completed).

5. **Check the Results**:
   - **With a PAT**:
     - Wait a minute or two for the workflow to finish (refresh the page if needed).
     - Look for a green checkmark next to the run, then click it to view details.
     - In the logs, find the "Output repository URL" step—it’ll show a link like `https://github.com/your-username/my-spec-project`.
     - Visit that URL to see your new Spec-Up-T project repository!
   - **Without a PAT**:
     - Wait for the run to complete (green checkmark).
     - Click the run, scroll to the bottom, and find the "Artifacts" section.
     - Download the ZIP file named after your project (e.g., `my-spec-project.zip`).
     - Unzip it locally or upload it to your own repo manually (e.g., drag files into a new GitHub repo).

### Troubleshooting

- **Error in Logs**: If the run fails (red X), click it, expand the steps, and read the error (e.g., "PAT invalid" or "Repo already exists"). Adjust your inputs and retry.
- **No PAT, No Artifact**: Ensure the workflow completed successfully—artifacts only appear on success.
- **Repo Not Created**: Verify your PAT has `repo` and `workflow` scopes and matches your username.

### Example

To create a repo named `my-spec-project` under `johndoe`:

- Inputs:
  - Name: `my-spec-project`
  - Username: `johndoe`
  - PAT: `ghp_xxxxxxxxxxxxxxxxxxxxx`
- Result: A new repo at `https://github.com/johndoe/my-spec-project`.

Enjoy your new Spec-Up-T project—happy specifying!
