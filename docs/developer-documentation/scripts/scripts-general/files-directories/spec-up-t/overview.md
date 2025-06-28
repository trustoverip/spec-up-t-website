---
sidebar_position: 1
---

# Overview

## Introduction

Below is a summary of the files and folders found in the `spec-up-t` [GitHub repository](https://github.com/trustoverip/spec-up-t) / [npm package](https://www.npmjs.com/package/spec-up-t).

:::info

It is essential to understand:

- that the files and directories listed below can be found in the `spec-up-t` npm package installed in the `node_modules` directory of a working **Spec-Up-T installation**
- that this working **Spec-Up-T installation** was created **from the boilerplate directory** inside this `spec-up-t` npm package via NPX

:::

## Abstracted overview

Abstracted overview of files and directories in the Spec-Up-T GitHub repository (and npm package).

<div class="filesystemlayout">

```sh

./
│
│   👇 GITHUB ACTIONS WORKFLOW
│
├── .github/
│   └── workflows/
│       └── render-specs.yml
│
│
│
│   👇 CLIENT-SIDE (BROWSER) JAVASCRIPT AND CSS FILES
│
├── assets/
│   │
│   │
│   │
│   │   👇 COMPILED VIA GULP (FROM THE CSS AND JS FILES BELOW)
│   │
│   ├── compiled/
│   │   ├── body.js
│   │   ├── head.css
│   │   ├── head.js
│   │   └── refs.json
│   │
│   │
│   │
│   │   👇 SOURCE FILES (TO BE COMPILED VIA GULP)
│   │
│   ├── css/
│   │   ├── backToTop.css
│   │   ├── … etc
│   │   ├── … etc
│   │   └── … etc
│   │
│   ├── js/
│   │   ├── add-href-to-snapshot-link.js
│   │   ├── … etc
│   │   ├── … etc
│   │   └── … etc
│   │
│   └── icons.svg
│
│
│
│   👇 FONTS
│
├── fonts/
│   ├── KaTeX_AMS-Regular.ttf
│   ├── … etc
│   ├── … etc
│   └── … etc
│
│
│
│   👇 NODE JAVASCRIPT FILES
│
├── src/
│   ├── collectExternalReferences/
│   │   ├── checkRateLimit.js
│   │   ├── fetchTermsFromGitHubRepository.js
│   │   ├── matchTerm.js
│   │   ├── processXTrefsData.js
│   │   └── setupFetchHeaders.js
│   │
│   ├── config/
│   │   └── paths.js
│   │
│   │
│   │
│   │   👇 CREATES NEW SPEC-UP-T “INSTALLATION”
│   │
│   ├── install-from-boilerplate/
│   │   │
│   │   │
│   │   │
│   │   │   👇 SPEC-UP-T BOILERPLATE: A FULL “INSTALLATION”
│   │   │
│   │   ├── boilerplate/
│   │   │   ├── .github/
│   │   │   │   └── workflows/
│   │   │   │       ├── fetch-and-push-xrefs.yml
│   │   │   │       └── render-specs.yml
│   │   │   │
│   │   │   ├── assets/
│   │   │   │   ├── test.json
│   │   │   │   └── test.text
│   │   │   │
│   │   │   ├── spec/
│   │   │   │   ├── terms-definitions/
│   │   │   │   │   ├── term-1.md
│   │   │   │   │   ├── term-2.md
│   │   │   │   │   ├── term-3.md
│   │   │   │   │   └── term-4.md
│   │   │   │   │
│   │   │   │   ├── example-markup-in-markdown.md
│   │   │   │   ├── spec-body.md
│   │   │   │   ├── spec-head.md
│   │   │   │   └── terms-and-definitions-intro.md
│   │   │   │
│   │   │   ├── static/
│   │   │   │   ├── favicon.ico
│   │   │   │   └── logo.svg
│   │   │   │
│   │   │   ├── .env.example
│   │   │   ├── README.md
│   │   │   ├── gitignore
│   │   │   └── specs.json
│   │   │
│   │   │
│   │   │
│   │   │   👇 FILES THAT COPY AND INITIALIZE THE BOILERPLATE DIRECTORY
│   │   │
│   │   ├── add-gitignore-entries.js
│   │   ├── add-scripts-keys.js
│   │   ├── config-gitignore-entries.js
│   │   ├── config-scripts-keys.js
│   │   ├── config-system-files.js
│   │   ├── copy-boilerplate.js
│   │   ├── copy-system-files.js
│   │   ├── custom-update.js
│   │   ├── help.txt
│   │   ├── install.js
│   │   ├── menu.sh
│   │   └── postinstall-message.js
│   │
│   │
│   │
│   │   👇 GENERAL NODE FILES
│   │
│   ├── utils/
│   │   ├── doesUrlExist.js
│   │   └── isLineWithDefinition.js
│   │
│   ├── add-remove-xref-source.js
│   ├── asset-map.json
│   ├── collect-external-references.js
│   ├── configure.js
│   ├── create-pdf.js
│   ├── create-term-index.js
│   ├── create-term-relations.js
│   ├── create-versions-index.js
│   ├── fix-markdown-files.js
│   ├── freeze.js
│   ├── init.js
│   ├── insert-term-index.js
│   ├── json-key-validator.js
│   ├── markdown-it-extensions.js
│   ├── prepare-tref.js
│   └── references.js
│
│
│
│   👇 ASSETS LIKE LOGO'S
│
├── static/
│   └── specup_logo.png
│
│
│
│   👇 THE TEMPLATE FOR INDEX.HTML WHERE EVERYTHING IS INJECTED INTO
│
├── templates/
│   └── template.html
│
│
│
│   👇 COMPILES CLIENT-SIDE FILES INTO ONE INDEX.HTML
│
├── gulpfile.js
│
│
│
│   👇 ENTRY POINT FOR NODE SCRIPTS
│
└── index.js

```

## Tip

Zoom in and out to get a better picture.

:::tip

- Zoom in: Ctrl / Command + Plus sign (+) 
- Zoom out: Ctrl / Command + Minus sign (-)
- Reset: Ctrl / Command + 0

:::

</div>
