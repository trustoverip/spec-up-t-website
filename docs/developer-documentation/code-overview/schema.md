---
sidebar_position: 15
---
# Schema

## Spec-Up-T Boilerplate

The Spec-Up-T Boilerplate is the starting point of the Spec-Up-T system. This is the go to directory.

```sh
boilerplate/
  │
  ├── src/
  │   │
  │   └── server/  - - - - - - - - - - - - Scripts that ask for user input
  │
  ├── node_modules/
  │   │
  │   └── spec-up-t/ - - - - - - - - - - - Spec-Up-T package
  │
  ├── spec/  - - - - - - - - - - - - - - - Markdown files
  │
  ├── output/ -- - - - - - - - - - - - - - Generated output
  │
  └── main.sh  - - - - - - - - - - - - - - Command Line Menu
  │
  └── specs.json - - - - - - - - - - - - - Configuration file
```

## Spec-Up-T package

These are the main files and directories of the spec-up-t package, necessary for understanding how it works.

```sh
boilerplate/node_modules/spec-up-t/
  │
  ├── src/ ------------ Node.js scripts
  │
  ├── template/ ------- HTML template
  │
  ├── assets/   ------- Front-end code: JavaScript
  │
  ├── node_modules/ --- NPM packages used by Spec-Up-T
  │
  ├── index.js -------- Entry point
  │
  └── gulpfile.js ----- Compiles front-end JavaScript
```

## Spec-Up-T `src/`

```sh
boilerplate/node_modules/spec-up-t/src/
  │
  ├── create-pdf.js -------------- Create PDF's
  │
  ├── create-term-index.js ------- Create Term Index
  │
  ├── create-term-relations.js --- Create Term Relations
  │
  ├── create-versions-index.js --- Create Version Index
  │
  ├── fix-markdown-files.js ------ Fix Markdown files
  │
  ├── freeze.js ------------------ Freeze
  │
  ├── get-xtrefs-data.js --------- Get xrefs data
  │
  └── init.js -------------------- Initialises


```





## Files description

### create-pdf.js

Creates pdf's.

### create-term-index.js

Creates term index.

### create-term-relations.js

Creates term relations.

### create-versions-index.js

Creates version index

### fix-markdown-files.js

Fixes markdown files

### freeze.js

Fixes markdown files

### get-xtrefs-data.js

Get xtref data

### init.js

Initialise.


