---
sidebar_position: 3
---

# General Guide

:::warning
This is a temporary page; parts will be moved to other pages.
:::

These are general instructions for every role involved.

The following instructions should be entered into a terminal (command line):

## Test `spec.json`

Once you have edited the `spec.json,` you can test here to see if it is OK; that is, it checks whether each key is present. It does not check whether the value of the key meets specific rules:

```bash
npm run validatespec
```

If a key is missing you will get a notification about it.



## Look up xrefs

Xrefs are [To Do: write explanation]

```bash
npm run xrefs
```

Now, the references to external specs are generated, if any.

## Create index.html

The final result will be just one file: `index.html`. This file is rendered or re-rendered with the following command:

```bash
npm run render
```

Now, an index.html file is created in the `docs` directory. This is the default directory specified in the `specs.json` file.

## You are ready

Now you have a basic Spec-Up-T specification file (`index.html`) with the following content:

- a `specs.json` file
- a `spec/` directory with sample markdown files
- a `docs` directory with a sample index.html file
- a `node_modules` directory, a `package.json` file, and a `package-lock.json` file (these three elements belong to the `npm` system)

## View your specification

So the `index.html` is the endresult. You should view it in a browser. There are two ways to do this:

- via `http://`
- via `file:///`

The simplest way to do so is via `file:///`: go to the `index.html` file with your Explorer, Finder, or other file manager, and double-click on it. Usually, it now opens in your browser.

If not, go to the browser and try to open the file from the browser menu.

This way, you open the `index.html` file via the `file protocol` (“`file:///`”).

You can also access it via HTTP. You then need to place the `index.html` file on a web server and access it through a browser using the URL under which the file is accessible.

This way, you can share it with the world by sharing the URL.

:::info
HTTP stands for HyperText Transfer Protocol. It is the foundation of any data exchange on the Web and a protocol for transmitting hypertext requests and information online. The World Wide Web uses HTTP and defines how messages are formatted and transmitted and how web servers and browsers should respond to various commands.
:::

## Three different modes

`npm run render` is not the only way to go. There are three different modes for rendering the specification:

|command|behavior|
|---|---|
|`npm run edit`| After rendering, this will stay running, and the `gulp` library will watch the source files in your spec directory/ies for changes and re-render any time you save a file. Opening these rendered files in a browser and refreshing them will keep you up to date.|
|`npm run render`| This renders the site once and does not keep a gulpy watch on the underlying files.|
|`npm run dev`|this enables debugging features.|

## Automation

The above scripts can easily be triggered by [github actions](../glossary#github-actions).  See [this repo's example](https://github.com/decentralized-identity/spec-up/blob/master/.github/workflows/render-specs.yml)