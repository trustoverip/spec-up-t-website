---
sidebar_position: 3
---

# 2: From local to remote (GitHub)

You now have a Spec-Up-T installation on your local system. To make use of all the Spec-Up-T features you should publish your installation on GitHub. 

## Publishing a Local Project to GitHub

This guide explains how to publish a local Git project to a GitHub repository. During the local installation, the installer script initialized your project with Git (i.e., it contains a `.git` directory). This is the starting point for the instructions below.

### Prerequisites

Before starting, ensure the following:

1. **Git Installed:** Verify that Git is installed on your system. Run:

   ```bash
   git --version
   ```

   If not installed, download and install Git from [git-scm.com](https://git-scm.com).

2. **GitHub Account:** Create a GitHub account if you don’t already have one.

3. **Personal Access Token (Optional):** If you’re using HTTPS and two-factor authentication, [generate a Personal Access Token (PAT) from your GitHub account settings](../github-token.md)].

4. **Add your credentials** to `specs.json`

You will find `specs.json` in the root of your project directory. Change the following entries in `specs.json`:

```json
"source": {
  "host": "github",
  "account": "trustoverip",
  "repo": "spec-up-t-starter-pack"
}
```

to the correct information:

```json
"source": {
  "host": "github",
  "account": "your-account",
  "repo": "your-repo"
}
```

These are the host (GitHub), your GitHub account name, and the repo name of the repo you are about to push.

---

### Steps to Publish a Local Project to GitHub

#### 1. Create a Repository on GitHub

1. Log in to your GitHub account.
2. Click the "+" icon in the top-right corner and select **New repository**.
3. Fill in the repository details:
   - **Repository name:** Choose a name for your project.
   - **Visibility:** Set it to public or private.
   - Skip the initialization options (e.g., README, .gitignore).
4. Click **Create repository**.

GitHub will display a page with repository details, including instructions for adding an existing project.

#### 2. Link Your Local Repository to GitHub

In your terminal, navigate to your project directory:

```bash
cd /path/to/your/project
```

Add the remote URL for your GitHub repository:

##### Using HTTPS:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

##### Using SSH:

```bash
git remote add origin git@github.com:USERNAME/REPOSITORY.git
```

Replace `USERNAME` with your GitHub username and `REPOSITORY` with your repository name.

Verify the remote URL:

```bash
git remote -v
```

#### 3. Push Local Changes to GitHub

Before pushing, ensure your local branch is up-to-date:

```bash
git fetch origin
```

Push your code to GitHub:

```bash
git push -u origin main
```

> **Note:** Replace `main` with your branch name if it’s different (e.g., `master`).

If you encounter errors such as “branch does not exist,” create the branch on GitHub by running:

```bash
git push -u origin main
```

For HTTPS users, you may need to provide your GitHub credentials or a Personal Access Token.

#### 4. Verify Changes on GitHub

1. Navigate to your repository page on GitHub.
2. Confirm that the files have been uploaded.

#### 5. (Optional) Set Up a Default Branch

To set a default branch for future commits:

```bash
git branch -M main
```

If you want to rename `master` to `main`, ensure the branch exists locally and remotely.

#### 6. Update the README (Optional)

To add a description to your repository:

1. Edit or create a `README.md` file in your project directory.
2. Commit and push the changes:

   ```bash
   git add README.md
   git commit -m "Add README"
   git push
   ```

#### Troubleshooting

- **Authentication Issues:** Ensure you’re using the correct credentials or Personal Access Token.
- **Permission Denied (SSH):** Verify that your SSH key is added to GitHub.
- **Conflicts:** Resolve any merge conflicts locally before pushing.

---

Your project is now successfully published to GitHub and ready for collaboration!


