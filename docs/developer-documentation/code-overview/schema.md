---
sidebar_position: 15
---
# Schema

## Spec-Up-T Boilerplate

The Spec-Up-T Boilerplate is the starting point of the Spec-Up-T system. This is the go to directory.

<div class="filesystemlayout">
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
  ├── main.sh  - - - - - - - - - - - - - - Command Line Menu
  │
  └── specs.json - - - - - - - - - - - - - Configuration file
```
</div>

## Spec-Up-T package

These are the main files and directories of the spec-up-t package, necessary for understanding how it works.

<div class="filesystemlayout">
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
</div>

## Spec-Up-T `src/`

### Listing of all files

<div class="filesystemlayout">

```sh
boilerplate/node_modules/spec-up-t/src/
  │
  ├── asset-map.json
  │
  ├── create-pdf.js
  │
  ├── create-term-index.js
  │
  ├── create-term-relations.js
  │
  ├── create-versions-index.js
  │
  ├── fix-markdown-files.js
  │
  ├── freeze.js
  │
  ├── get-xtrefs-data.js
  │
  ├── insert-term-index.js
  │
  ├── json-key-validator.js
  │
  ├── markdown-it-extensions.js
  │
  ├── prepare-tref.js
  │
  └── references.js

```

</div>

### Description of all files

#### `create-pdf.js`

Creates pdf's with one click.

#### `create-term-index.js`

[Read more](./workflow-abstraction#create-term-indexjs)

#### `create-term-relations.js`

Not in use at the moment.

#### `create-versions-index.js`

Creates version index

#### `fix-markdown-files.js`

Fixes markdown files

#### `freeze.js`

Fixes markdown files

#### `get-xtrefs-data.js`

Get xtref data

#### `insert-term-index.js`

[Read more](./workflow-abstraction#insert-term-indexjs)

#### `json-key-validator.js`

To Be Written

#### `markdown-it-extensions.js`

To Be Written

#### `prepare-tref.js`

To Be Written

#### `references.js`

To Be Written