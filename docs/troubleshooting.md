---
sidebar_position: 200
---

# Troubleshooting

Some tips in case of problems:

## `npm run menu` doesn't work after `npm update` (to spec-up-t version 1.6.26)

Run `npm run custom-update`.

To reach **2.1.0** from 1.x, or if `npm run custom-update` fails because the script is still `node -e "require('…/custom-update.js')"`, run `npx spec-up-t@latest custom-update`. You do not have to install 2.0.0 first. See [Updating Spec-Up-T (custom-update)](./maintenance-tasks/custom-update.md).

## Custom update stops with “Refusing to write without --yes”

The command printed a plan and wrote nothing, because this run has no terminal and did not pass `--yes`.

Apply it:

```bash
npx spec-up-t@latest custom-update --yes
```

In GitHub Actions, `menu.yml` should contain `npm run custom-update -- --yes`. After one successful `--yes` run, that line is in the boilerplate `menu.yml`. Commit it. Later Custom Update runs from the button apply the plan.

See [When to run custom-update](./maintenance-tasks/when-to-update.md).

## There is no pdf and / or docx button

This is normal behavior. The download buttons only appear when the corresponding PDF and/or DOCX files actually exist in your `docs/` folder.

**Solution:** Export your specification to PDF and/or DOCX format first:

1. Run `npm run menu` in your project
2. Select option `[2] Export to PDF` (to generate `index.pdf`)
3. Select option `[3] Export to DOCX` (to generate `index.docx`)
4. Refresh your specification page in the browser

Once the files exist, the download buttons will automatically appear in the top navigation bar next to the theme toggle button.

**Note:** The buttons are intentionally only shown when files exist to avoid displaying broken download links.

## GitHub and API and limits

Problem: I want to look up an external reference (*xref*) but I get an error about GitHub and API and limits.

Solution: [get a GitHub Token](./getting-started/github-token.md).

## I am sure an external reference contains the term I am referencing, but it does not show

Maybe the repository is not indexed by GitHub. Do a manual search on the term:

- Go to the repository
- Enter your search term in the search field that shows: “**Type / to search**” and enter.

If you see this: 
*“This repository's code has not been indexed yet. Try again later.” *
the repository has not been indexed (yet).

You cannot directly trigger the indexing, but making a change by committing something helps.

## WSL2 users

WSL2 users are recommended to use the `bash` option rather than `PowerShell` in the terminal of Visual Studio Code.

## Use Node.js versions 18+

Spec-Up-T uses `fetch`, which was [added in version 18](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch).

Install NVM if you haven't already. (Instructions not given here).

Then run Node.js version 18.

## Cache Issues

Problem: Persistent build or rendering issues.

Solution: Remove the `.cache` directory and rerender the site.

- **Windows:** Open File Explorer, navigate to the project root directory, and delete the `.cache` folder
- **Mac:** Open Finder, navigate to the project root directory, and delete the `.cache` folder
- **Linux (Ubuntu):** Open the file manager (e.g., Files), navigate to the project root directory, and delete the `.cache` folder

:::warning

If using the terminal command `rm -rf`, be cautious as it is powerful and irreversible. For safer options, use your system's file explorer or manager.

:::

## GitHub Pages does not work

If your site is not appearing on GitHub Pages, ensure the Pages settings are configured to use the `gh-pages` branch:

1. Go to your repository on GitHub.
2. Click **Settings**.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select the **gh-pages** branch and **/** (root) folder.
6. Click **Save**.

Give it a minute for the site to deploy, then refresh your GitHub Pages URL.

