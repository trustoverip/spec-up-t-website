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

So the `index.html` is the endresult. You should view it in a browser. The simplest way to do so is go to the file with your Explorer, Finder or other file manager, and double-click on it. Usually it now opens in your browser.

If not, go to the browser, and try to open the file from the browser menu.
