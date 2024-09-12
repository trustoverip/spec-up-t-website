---
sidebar_position: 0
---

# Cheat sheet

## Video

A quick demo of how the installation and main menu works.

<video controls poster={require('@site/static/video/spec-up-t-menu.jpg').default}>
    <source src="https://dwarshuis.com/various/spec-up-t/documentation-website/video/spec-up-t-menu.mp4" type="video/mp4" />
 Your browser does not support video tags
</video>

[Link to the video](https://dwarshuis.com/various/spec-up-t/documentation-website/video/spec-up-t-menu.mp4)



## Start command line menu

```bash
npm run menu
```

You will now see this menu:

```bash
Please choose one of the following options:

    [1] Render specification
    [2] Export to PDF
    [3] Look up xrefs
    [4] Remove xref
    [5] Validate config file
    [6] Add new terms
    [7] Open documentation website
    [8] Freeze specification
    [Q] Quit
```

These are “shortcuts” to the commands covered later below (such as `npm run render`, etc.). You can choose which you prefer: the menu or the direct commands.

## Install a new Spec-Up-T site

### Run install script

```bash
npx create-spec-up-t my-spec-up-t-website
```

### Go into the directory

```bash
cd my-spec-up-t-website
```

### Install all dependencies

```bash
npm run install
```

## Add repo to Github

### Edit `specs.json`

Change this entry in `specs.json`:

```json
"source": {
                "host": "github",
                "account": "blockchainbird",
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

### Test `spec.json`

```bash
npm run validatespec
```

### Commit and Push repo to GitHub

Now, commit your changes and push the repo to GitHub. Use the command line or your preferred way to do this.

## View your specification

So the `index.html` is the endresult. You should view it in a browser. There are two ways to do this:

- via `http://`
- via `file:///`

The simplest way to do so is via `file:///`: go to the `index.html` file with your Explorer, Finder, or other file manager, and double-click on it. Usually, it now opens in your browser.

If not, go to the browser and try to open the file from the browser menu.

This way, you open the `index.html` file via the `file protocol` (“`file:///`”).

You can also access it via HTTP. You then need to place the `index.html` file on a web server and access it through a browser using the URL under which the file is accessible.

This way, you can share it with the world by sharing the URL.

## Explanation buttons

| Button                                                                 | Explanation |
|----------------------------------------------------------------------------------|-------------------|
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) edit</span> | Link to the term file in the Github repo in a new tab |
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) history</span> | Link to a GitHub page that shows a history of the edits in a new tab |
| <span className='button-style-imitation'>xref < > ![GitHub Mark](/img/github-mark.svg) now</span>  | Show diff between the latest version and the referenced version |
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) xref < > ![GitHub Mark](/img/github-mark.svg) now</span> | A Diff between the current commit hash of the definition and the commit hash referenced when the link was created. |
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) xref</span>         | Go to the repo page of the definition‘s version referenced when the link was created. |
| <span className='button-style-imitation'>![GitHub Mark](/img/github-mark.svg) now</span>          | Go to the repo page of the definition‘s current version. |
