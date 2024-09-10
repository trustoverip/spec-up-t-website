---
sidebar_position: 2
---

# Updating

Updating Spec-Up-T means two things:

- Updating the **npm package called Spec-Up-T**
- Updating **your own installation**, which you did via the installer, uses the Spec-Up-T npm package.

## Updating the npm package called Spec-Up-T

If you installed Spec-Up-T, you probably did so via the installer. This installer uses the Spec-Up-T npm package via the `node_modules` directory in which Spec-Up-T is installed. To update the package, you can use the standard procedure at the command line:

```bash
npm update
```

## Updating your installation

Updating your installation requires manually copying and updating files (an automated update script may be made in the future).

Here is a step-by-step description:

### Source files in the Installer

The information (files, code) to be copied to your existing Spec-Up-T installation can be found in the [directory `spec-up-t-starterpack` of the installer](https://github.com/blockchainbird/spec-up-t-starter-pack/tree/main/spec-up-t-starterpack).


### `package.json`

Copy the following information from the `package.json` file in the aforementioned installer files into the `package.json` of your Spec-Up-T installation:

- Overwrite the entire `scripts` section
- Update the `dependencies` as follows:

```json
"dependencies": {
    "dotenv": "^16.4.5",
    "spec-up-t": "^1.0.8"
  }
```

- Change version:

```json  
  "version": "1.0.49"
```  

### Copy the following files to the root of your installation:

- `main.sh`
- `remove-xref.js`
- `postinstall-message.js`
- `help.txt`
- `logo.svg`
- `.env.example`
  
### GitHub token

If you have a GitHub Token, rename `.env.example` to `.env`, then put it in `.env`.

### Terms

You should place the terms in their own directory. This directory is defined in `specs.json` as "spec_terms_directory".

A JSON file containing the references to these files should also exist. This file should be called `term-index.json`.

- Create `term-index.json` in the root
- Move everything with "term-definitions" over to `term-index.json`

Example:

```json
[
  "terms-definitions/aal.md",
  "terms-definitions/abac.md",
  "terms-definitions/acceptance.md",
  "terms-definitions/acceptance-network.md",
  "terms-definitions/access-control.md",
  ... etc.
]
```

### "terms-and-definitions-intro.md”

The "terms-and-definitions-intro.md" file is needed as a pointer for Spec-Up-T where to place the term files in the generated specification file.

Make sure there is an entry "terms-and-definitions-intro.md" in specs.json and create it as a file in the directory called `/specs`. It's okay if it is empty, but it can also contain an intro text. 

### `npm update`

Run `npm update`.

```bash
npm update
```

### Done

Now you have an updated Spec-Up-T installation.
