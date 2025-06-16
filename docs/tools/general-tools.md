---
sidebar_position: 100
---

# General tools

Imagine the situation where you cloned a GitHub repository locally and you can't remember where on your local file system you did this. Then use [this tool](https://github.com/kordwarshuis/find-remote-repo-on-local/blob/main/README.md) to find the location.

Example usage that searches the current directory (where you ran the command) and all subdirectories for a local clone of a GitHub repository:

```bash
npx find-remote-repo-on-local <github-repo-url>
```