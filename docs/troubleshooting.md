---
sidebar_position: 10
---

# Troubleshooting

Some tips in case of problems:

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
