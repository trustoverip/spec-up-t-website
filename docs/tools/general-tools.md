---
sidebar_position: 100
---

# General tools

## Find local clones of GitHub repositories

Imagine the situation where you cloned a GitHub repository locally and you can't remember where on your local file system you did this. Then use [find-remote-repo-on-local tool](https://github.com/kordwarshuis/find-remote-repo-on-local/blob/main/README.md) to find the location.

Example usage that searches the current directory (where you ran the command) and all subdirectories for a local clone of a GitHub repository:

```bash
npx find-remote-repo-on-local <github-repo-url>
```

## Return Top Level Elements in HTML

For Frontend developers, understanding the structure of HTML documents is crucial. This tool provides a quick way to visualize the top-level elements in an HTML document, making it easier to analyze and debug web pages.

The [return-top-level-elements-in-html tool](https://github.com/kordwarshuis/return-top-level-elements-in-html/blob/main/README.md) is an npx tool that extracts and displays the top-level DOM structure of HTML documents in a beautifully styled web page. Supports both local HTML files and remote URLs.

```bash
npx return-top-level-elements-in-html [depth] [url]
```
