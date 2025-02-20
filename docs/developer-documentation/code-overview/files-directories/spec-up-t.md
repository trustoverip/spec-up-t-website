---
sidebar_position: 2
---

# Spec-Up-T

The Spec-Up-T Boilerplate is the starting point of the Spec-Up-T system. This is the go to directory.

<div class="filesystemlayout">
```sh

├── boilerplate
│   ├── assets
│   │   ├── test.json
│   │   └── test.text
│   ├── spec
│   │   ├── terms-definitions
│   │   │   ├── term-1.md
│   │   │   ├── term-2.md
│   │   │   ├── term-3.md
│   │   │   └── term-4.md
│   │   ├── example-markup-in-markdown.md
│   │   ├── spec-body.md
│   │   ├── spec-head.md
│   │   └── terms-and-definitions-intro.md
│   ├── static
│   │   ├── favicon.ico
│   │   └── logo.svg
│   ├── README.md
│   ├── gitignore
│   └── specs.json
├── add-gitignore-entries.js
├── add-scripts-keys.js
├── config-gitignore-entries.js
├── config-scripts-keys.js
├── config-system-files.js
├── copy-boilerplate.js
├── copy-system-files.js
├── custom-update.js
├── help.txt
├── install.js
│
├── menu.sh
└── postinstall-message.js




```
</div>

- ¹: Can be deleted, the index.html will be regenerated, but you will lose snapshots directory

- ²: Can safely be deleted


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
├── collectExternalReferences/
├── config/
├── install-from-boilerplate/
├── utils/
├── add-remove-xref-source.js
├── asset-map.json
├── collect-external-references.js
├── configure.js
├── create-pdf.js
├── create-term-index.js
├── create-term-relations.js
├── create-versions-index.js
├── fix-markdown-files.js
├── freeze.js
├── init.js
├── insert-term-index.js
├── json-key-validator.js
├── markdown-it-extensions.js
├── prepare-tref.js
└── references.js
```




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
  ├── collectExternalReferences.js
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

[Read more](../workflow-abstraction.md#create-term-indexjs)

#### `create-term-relations.js`

Not in use at the moment.

#### `create-versions-index.js`

[Read more](../workflow-abstraction.md#create-versions-indexjs)

#### `fix-markdown-files.js`

[Read more](../workflow-abstraction.md#fix-markdown-filesjs)

#### `freeze.js`

[Read more](../workflow-abstraction.md#menu-option-8-freeze-specification)

#### `collectExternalReferences.js`

Get xtref data

#### `insert-term-index.js`

[Read more](../workflow-abstraction.md#insert-term-indexjs)

#### `json-key-validator.js`

To Be Written

#### `markdown-it-extensions.js`

To Be Written

#### `prepare-tref.js`

To Be Written

#### `references.js`

To Be Written.