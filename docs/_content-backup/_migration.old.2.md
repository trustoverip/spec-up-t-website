---
sidebar_position: 101
---

# Migrate from Spec-Up Old

TO DO: CONTROLEREN OF ER INFO VAN DIT DOCUMENT NAAR NIEUW MOET

:::warning
Work in progress. This instruction is based on one repo. It is not yet tested on other repos.
:::

## Clean

- empty `/assets`
- remove `/docs/fonts`
- remove `/gulpfile.js`
- remove `/.idea`
- from `.gitignore` remove:
  - `package-lock.js`
  - `*.index.html`
- Remove all files from `.github/workflows`

## Add

- add these files to `/assets`:
  - https://github.com/blockchainbird/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/assets/test.json
  - https://github.com/blockchainbird/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/assets/test.text
- remove content of `/package.json` and replace it with https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/package.json
- move `specs.json` to `specs.json.backup` and create new `specs.json` from https://github.com/blockchainbird/spec-up-t/blob/3dc92062d95c918b3e47e4704634b39fef603aca/src/install-from-boilerplate/boilerplate/specs.json
- use the following entries from backup file:
    - `"title": "***your title***"`
    - example:
    - `"title": "Authentic Chained Data Containers (ACDC)"`
    - `"source": {  
        "host": "***your host***",
        "account": "***your account***",
        "repo": "***your repo***"
    }`
    - example: 
    - `"source": {  
        "host": "github",
        "account": "trustoverip",
        "repo": "tswg-acdc-specification"
    }`
    - `"markdown_paths": [
                "your-term-1.md",
                "your-term-2.md"
            ]`
    
- Make sure `specs.json` is valid JSON
- add this file to `/spec`
    https://github.com/blockchainbird/spec-up-t/blob/master/src/install-from-boilerplate/boilerplate/spec/terms-and-definitions-intro.md
- create directory called `terms-definitions` in the `/spec` directory

## Run

- run:
    `npm install`
- run:
    `npm install spec-up-t`
- run
    `node node_modules/spec-up-t/src/install-from-boilerplate/custom-update.js`
- run
    `npx spec-up-splitter`
    (find the markdown file that holds the terms and definitions and use it as the source file)
- In `specs.json`, `"markdown_paths"` add these two files:      `"markdown_paths": [        "glossary-intro-created-by-split-tool.md",        "terms-and-definitions-intro.md"      ]`,
- Deactivate `/spec/spec.md` by renaming `/spec/spec.md` to `/spec/_spec.md`
- `npm run menu`, option 1, etc

## Repair before git commit:
- Do not commit README.md but check if you want to keep the original content
- Check if there are double entries in .gitignore and deduplicate

