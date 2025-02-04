---
sidebar_position: 8
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
