---
sidebar_position: 2
---

# Updating

## intro

Updating Spec-Up-T means two things:

- Updating **your own installation**, which you did via the installer, uses the Spec-Up-T npm package.
- Updating the **npm package called Spec-Up-T**


## Updating your own installation

Updating your own installation requires manually copying and updating files.

Here is a step-by-step description:

### Source files in the Installer

The information (files, code) to be copied to your existing Spec-Up-T installation can be found in the [directory `spec-up-t-boilerplate` of the installer](https://github.com/blockchainbird/spec-up-t-starter-pack/tree/main/spec-up-t-boilerplate).

The file- and directory names in the source are leading. If for some reason the naming in your current installation differs from the source, then you should change it to the situation in the source.

### `package.json`

#### Summary

The following entries of `package.json` should be updated:

- `scripts`
- `dependencies`
- `version`

The update info should be copied from the `spec-up-t-boilerplate` link above.

#### `scripts`

Remove your current `scripts` section, meaning:

```json

"scripts": {
// everything here
}

```
Replace it with:

```json
"scripts": {
// everything here
}
```

from the `spec-up-t-boilerplate` link above.


#### `dependencies`

Remove your current `dependencies` section, meaning:

```json

"dependencies": {
// everything here
}

```
Replace it with:

```json
"dependencies": {
// everything here
}
```

from the `spec-up-t-boilerplate` link above.


#### `version`

Remove your current `version` section, meaning:

```json  
  "version": "-.-.-"
```  

The “-”'s are placeholders for what is currently listed in your `package.json`.

```
Replace it with:

```json
"version": "-.-.-"
```

The “-”'s are placeholders, use the version number as listed in [this file](https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-boilerplate/package.json#L3)


### `.gitignore`

If there are entries in `gitignore` (no dot at the beginning) from the `spec-up-t-boilerplate` link above that are not in your `.gitignore` (dot at the beginning), then copy these entries to your `.gitignore`.





### Copy files to the root of your installation

Copy the following files to the root of your installation, overwrite if they exist:

- .env.example
- gitignore
- help.txt
- main.sh
- postinstall-message.js
- README.md

(Maybe there are old unused files, we leave them for now, they will do no harm).

  
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
