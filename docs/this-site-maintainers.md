---
sidebar_position: 19
---

# Maintaining this site

Here you will find information about things specific to this site.

## Info about Docusaurus

This site is built in [Docusaurus](https://docusaurus.io/).

## Extra tools

Show the content of a GitHub repo directory:

ToDo: Add file list

:::warning

You should always specify a tree and a repo,

so this doesn't work: `https://github.com/trustoverip/spec-up-t/`,

and this does work: `https://github.com/trustoverip/spec-up-t/tree/master` although the former refers to the latter.

If `/tree/master` (in this case) is not already at the end of the URL, add it manually.

:::


Show the content of a GitHub repo file:

``` markdown
<GitHubFileViewer githubFileUrl="https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-starterpack/package.json" />
```

::: info
You do not have to import a component for this to work.
:::

These data are fetched during the build of the website.