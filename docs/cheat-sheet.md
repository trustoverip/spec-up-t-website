---
sidebar_position: 0
---

# Cheat sheet

:::info
This cheat sheet still needs to be completed. Information on how to write content, create references, and more will be added in the future.
:::


## Get help

```bash
npm run help
```

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

```
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

##### Commit and Push repo to GitHub

Now, commit your changes and push the repo to GitHub. Use the command line or your preferred way to do this.


## Look up `xrefs`

```bash
npm run xrefs
```

## Remove `xref`

```bash
npm run removexref -- "termValue" "externalSpecValue"
```

## Create index.html

```bash
npm run render
```

## Create PDF

```bash
npm run topdf
```

## View your specification

So the `index.html` is the endresult. You should view it in a browser. There are two ways to do this:

- via `http://`
- via `file:///`

The simplest way to do so is via `file:///`: go to the `index.html` file with your Explorer, Finder, or other file manager, and double-click on it. Usually, it now opens in your browser.

If not, go to the browser and try to open the file from the browser menu.

This way, you open the `index.html` file via the `file protocol` (“`file:///`”).

You can also access it via HTTP. You then need to place the `index.html` file on a web server and access it through a browser using the URL under which the file is accessible.

This way, you can share it with the world by sharing the URL.
