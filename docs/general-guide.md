---
sidebar_position: 3
---

# General Guide

These are general instructions.

#### Look up xrefs

Xrefs are [To Do: write explanation]

```
npm run xrefs
```

Now the references to external specs are generated, if any.

#### Create index.html

The final result will be just one file: `index.html`. This file is rendered or rerendered with the following command:

```
npm run render
```

Now an index.html file is created in the `docs` directory. This is the default directory, specified in the `specs.json` file.

#### You are ready

Now you have a basic Spec-Up-T specification file (`index.html`) with the following content:

- a `specs.json` file
- a `spec/` directory with a sample markdown files
- a `docs` directory with a sample index.html file
- a `node_modules` directory, a `package.json` file and a `package-lock.json` file (these three elements belong to the `npm` system)

#### View your specification

So the `index.html` is the endresult. You should view it in a browser. Er zijn twee manieren om dit te doen:

- via `http://`
- via `file:///`

The simplest way to do so is via `file:///`: go to the `index.html` file with your Explorer, Finder or other file manager, and double-click on it. Usually it now opens in your browser.

If not, go to the browser, and try to open the file from the browser menu.

This way you open the `index.html` file via the `file protocol` (“`file:///`”).

What you can also do is access it via `HTTP`. You then need to place the `index.html` file on a web server and access it through a browser using the url under which the file is accessible.

This way you can share it with the world by sharing the url.

:::info
HTTP stands for HyperText Transfer Protocol. It is the foundation of any data exchange on the Web and it is a protocol used for transmitting hypertext requests and information on the internet. HTTP is used by the World Wide Web and defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.
:::

#### Three different modes

`npm run render` is not the only way to go. There are three different modes for rendering the specification:

|command|behavior|
|---|---|
|`npm run edit`|after rendering, this will stay running and the `gulp` library will watch the source files in your spec directory/ies for changes and re-render any time you save a file. Opening these rendered files in a browser and refreshing them will keep you up to date.|
|`npm run render`|this renders the site once and does not keep a gulpy watch on the underlying files.|
|`npm run dev`|this enables debugging features.|

#### Automation

The above scripts can easily be triggered by [github actions](glossary#github-actions).  See [this repo's example](https://github.com/decentralized-identity/spec-up/blob/master/.github/workflows/render-specs.yml)