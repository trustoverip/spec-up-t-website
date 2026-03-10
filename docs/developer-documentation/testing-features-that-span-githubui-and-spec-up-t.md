# Testing Features That Span GitHubUi and spec-up-t

This guide explains how to test changes that span both the **GitHubUi** (browser UI) and **spec-up-t** (Node.js backend) repositories. We use the **customizable freeze/snapshot label feature** as a concrete example, but this testing pattern applies to any feature that requires coordination between the two repos.

## Example: The Freeze Label Feature

The freeze label feature adds a customizable label field to GitHubUi that gets passed through GitHub Actions to the `freeze-spec-data.js` script via the `FREEZE_LABEL` environment variable.

**The data flow is:**
```
GitHubUi (browser)
  └─ User types snapshot label
  └─ Triggers menu.yml workflow dispatch
       └─ menu.yml passes freeze_label as FREEZE_LABEL env var
            └─ freeze-spec-data.js reads process.env.FREEZE_LABEL
                 └─ Label saved to versions/labels.json
```

Because of this architecture, testing requires two stages:

## Stage 1: Local Testing with npm link

Use `npm link` to test the spec-up-t changes locally **before** committing and pushing to GitHub.

### Prerequisites
- You have uncommitted spec-up-t changes on a local branch
- You have spec-up-t-demo checked out locally (or any consuming repo)

### Steps

1. **Register spec-up-t globally:**
   ```bash
   cd /path/to/spec-up-t
   npm link
   ```

2. **Link it in the consuming repo:**
   ```bash
   cd /path/to/spec-up-t-demo
   npm link spec-up-t
   ```

3. **Test the freeze script locally:**
   ```bash
   # With env var (simulating GitHub Actions)
   FREEZE_LABEL="My custom label" npm run freeze
   
   # Or interactively (simulating local CLI)
   npm run freeze
   # When prompted, enter: My custom label
   ```

4. **Verify the label was saved:**
   ```bash
   cat docs/versions/labels.json
   # Should contain: { "v1": "My custom label" }
   ```

5. **Check the rendered index:**
   ```bash
   cat docs/versions/index.html
   # The link text should be "My custom label"
   ```

### Advantages
- ✅ Fast iteration — no commit/push/wait for GitHub Actions
- ✅ Tests the Node.js logic in isolation
- ✅ Safe — local changes only

### Limitations
- ✗ Does not test the GitHub Actions workflow dispatch
- ✗ Does not test the GitHubUi → workflow → script integration
- ✗ Does not test the actual deployment path

---

## Stage 2: CI Testing with GitHub Actions

After local testing passes, test the full integration using GitHub Actions. This involves:
- Pushing the spec-up-t branch to GitHub
- Pointing a test consuming repo at that branch
- Using the GitHubUi test instance to trigger the workflow

### Prerequisites
- Your spec-up-t branch is pushed to GitHub (e.g., `trustoverip/spec-up-t#issue251-for-GitHubUi`)
- GitHubUi is built and deployed to a test instance (e.g., `https://app-test.blockchainbird.org/`)
- You have a test consuming repo (e.g., a clone of spec-up-t-demo) set up on GitHub

### Steps

1. **Update the test repo's package.json:**
   ```json
   {
     "dependencies": {
       "spec-up-t": "github:trustoverip/spec-up-t#issue251-for-GitHubUi"
     }
   }
   ```

2. **Ensure the test repo has the updated menu.yml:**
   The `.github/workflows/menu.yml` must include the `freeze_label` input:
   ```yaml
   on:
     workflow_dispatch:
       inputs:
         freeze_label:
           description: 'Label for the snapshot'
           required: false
           default: ''
   ```

3. **Commit and push the test repo:**
   ```bash
   cd /path/to/test-consuming-repo
   git add package.json .github/workflows/menu.yml
   git commit -m "Test freeze label feature"
   git push
   ```

4. **Open GitHubUi test instance:**
   Navigate to `https://app-test.blockchainbird.org/` and log in with your GitHub token.

5. **Navigate to GitHub Actions:**
   - Select your test repo (e.g., `your-org/test-spec-up-t-demo`)
   - Go to **Settings** → **GitHub Actions** → **Freeze Specification**

6. **Enter a custom label:**
   In the "Snapshot label" field, enter something descriptive, e.g., `"Public review draft"`.

7. **Trigger the workflow:**
   Click the **Freeze Specification** button and wait for the workflow to complete.

8. **Verify the results:**
   - Check the GitHub Actions run log to confirm `FREEZE_LABEL` was passed
   - Verify the `docs/versions/labels.json` file in the test repo contains your label
   - Check that `docs/versions/index.html` displays your label as the link text

### Advantages
- ✅ Tests the complete integration
- ✅ Tests GitHub Actions dispatch and environment variable passing
- ✅ Tests the real-world deployment path
- ✅ Validates the GitHubUi UI changes

### Limitations
- ✗ Slower — requires GitHub Actions queue time
- ✗ Requires pushing code to GitHub
- ✗ Harder to debug if something fails

---

## Troubleshooting

### Stage 1 (Local) Issues

**"npm run freeze" hangs waiting for input:**
- You're in a non-TTY environment. Set `FREEZE_LABEL` explicitly:
  ```bash
  FREEZE_LABEL="Test label" npm run freeze
  ```

**"labels.json is empty or missing":**
- Check that `docs/index.html` exists (spec must be built first):
  ```bash
  npm run render  # or menu 1
  npm run freeze
  ```

**Label not appearing in index:**
- Verify `create-versions-index.js` is reading the labels correctly:
  ```bash
  cat docs/versions/labels.json
  cat docs/versions/index.html | grep -i "public review"
  ```

### Stage 2 (CI) Issues

**"freeze_label input not recognized":**
- Ensure your test repo's `menu.yml` has the `freeze_label` input defined
- Check that you've pushed the updated `menu.yml` to `main`

**"Workflow uses old spec-up-t code":**
- Verify the test repo's `package.json` points to your branch:
  ```json
  "spec-up-t": "github:trustoverip/spec-up-t#issue251-for-GitHubUi"
  ```
- Run `npm install` in the workflow to ensure the dependency is downloaded fresh

**Label not saved or appearing in index:**
- Check the workflow's **Run selected script** step for error messages
- Inspect the versions/index.html and versions/labels.json files in the repo after the workflow completes

---

## Summary

1. **Always start with Stage 1 (local).** Use `npm link` to validate the Node.js logic quickly.
2. **Progress to Stage 2 (CI) once Stage 1 passes.** Push your branch and test with GitHub Actions.
3. **Use a dedicated test repo** (not production) for CI testing to avoid polluting the actual snapshot history.
4. **Before merging,** ensure both stages pass and consider testing edge cases (empty label, very long label, special characters, etc.).
