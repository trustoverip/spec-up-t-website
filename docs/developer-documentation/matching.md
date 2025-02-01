---
sidebar_position: 2
---

# Matching terms

## Intro

One of the strengths of Spec-Up-T is that you specify a term, and the link to the definition is automatically established. Both internally (via `[[ref:term]]`) and to external specifications (via `[[xref:term]]` and `[[tref:term]]`).

This matching occurs in several ways, each with its advantages and disadvantages. Here, we discuss these methods.

## `ref`

- Where: [`/src/markdown-it-extensions.js`](https://github.com/trustoverip/spec-up-t/blob/master/src/markdown-it-extensions.js)
- Source: the markdown files containing terms and definitions in the exact specification where the `ref` is located.
- How: Through a custom-written `markdown-it` extension.


## `xref`

- Where: [`/src/references.js`](https://github.com/trustoverip/spec-up-t/blob/master/src/references.js)
- Source: The GitHub page with the external definition.
- How: Reads HTML via JSDOM and makes a cross-reference call to the GitHub page. 

:::info

The JSDOM library brings JavaScript DOM selectors to Node.js.

:::

Downside: It will no longer work if GitHub makes the CORS policy stricter. GitHub already has some CORS restrictions in place, so further restrictions could be a natural progression.

## `tref`

- Where: [`/src/get-xtrefs-data.js`](https://github.com/trustoverip/spec-up-t/blob/master/src/get-xtrefs-data.js) and imported modules
- Source: The markdown files in the external repository.
- How: It uses the GitHub API to download the remote repository files to the local computer and then search for a match in the files via JavaScript methods and / or regex.

Disadvantage: The API has a limit. Using a Personal Access Token broadens the limit, but it is still a limit.
