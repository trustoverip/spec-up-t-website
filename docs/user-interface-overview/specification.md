---
sidebar_position: 2
slug: specification
---

# The specification

## View your specification

Your specification is stored in `index.html`: the end result. You should view it in a browser. There are two ways to do this:

- via `file:///`
- via `http://`

### Via `file:///`

The simplest way to do so is via `file:///`:
- go to the `index.html` file with your Explorer, Finder, or other file manager
- double-click on it. Usually, it now opens in your browser.

If not, go to the browser and try to open the file from the browser menu.

This way, you open the `index.html` file via the `file protocol` (“`file:///`”).

### Via `http://`

You can also access it via HTTP. You then need to place the `index.html` file on a web server and access it through a browser using the URL under which the file is accessible.

This way, you can share it with the world by sharing the URL.

If you follow the most likely scenario, namely, you host your specification on GitHub Pages, then you look at it "via HTTP.”

:::info

“Via `http://`” is a complicated way of saying that you are just looking at your specifications via the Internet, just like you are looking at a Wikipedia page, etc.

However, here it is briefly necessary to mention this because you can also double-click on the file and look “via `file:///`”.

:::

## Explanation buttons

### Terms

| Button | Explanation |
|-|-|
| <span className='button-style-imitation'>🖊️</span> | Link to the term file in the Github repo in a new tab |
| <span className='button-style-imitation'>📅</span> | Link to a GitHub page that shows a history of the edits in a new tab |

### External references

| Button | Explanation |
|-|-|
| <span className='button-style-imitation'>xref</span>         | Show the local snapshot of the referenced term, created at the moment the xref was made. |
| <span className='button-style-imitation'>xref < > ![GitHub Mark](/img/github-mark.svg) now</span>  | Show diff between the local snapshot of the latest version and the referenced version |
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) xref < > ![GitHub Mark](/img/github-mark.svg) now</span> | A Diff between the latest commit hash of the definition and the commit hash referenced when the link was created. |
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) xref</span>         | Go to the repo page of the definition‘s version referenced when the link was created. |
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) now</span>          | Go to the repo page of the definition‘s latest version. |
