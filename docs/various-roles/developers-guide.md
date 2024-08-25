---
sidebar_position: 15
---

# Developers Guide

This page is the developer's guide for the Spec-Up-T system.

The repo can be found [here](https://github.com/blockchainbird/spec-up-t).

## How do you get a new version of Spec-Up-T live?

If you want to add new functionality to Spec-Up-T, you will find below how to proceed.

Two repos come into play:

- [The Spec-Up-T repo](https://github.com/blockchainbird/spec-up-t), with [associated NPM package](https://www.npmjs.com/package/spec-up-t)
- [The Spec-Up-T installer repo](https://github.com/blockchainbird/spec-up-t-starter-pack), with [associated NPM package](https://www.npmjs.com/package/create-spec-up-t)

The Spec-Up-T installer uses Spec-Up-T as a package in node_modules, which is installed via `npm install` after you install the Spec-Up-T installer itself (see [Admins Guide](./admins-guide.md) for this).

The topic of updating Git repositories goes too far here; you can find a lot of information about that online.

How to publish an updated package version to NPM:

- Update the "version" in `package.json` to a higher number (use [SemVer](https://semver.org/)); for example, go from
  `"version": "0.11.29"` to `"version": "0.11.30"`
- Run `npm publish`

Note: The Spec-Up-T installer repo has two package.json files. One is in the root and belongs to the repo itself. The other is inside the directory that contains a full Spec-Up-T installation. This is the package.json that will be used later. The first one is only used for the installation itself. For simplicity, keep both version numbers the same.

The new package will be available as soon as it is uploaded.

## Adding functionality

The `Spec-Up-T` tool is written in `JavaScript,` client-side, and server-side (Node.js).

### Adding client-side functionality

Client-side JavaScript and CSS can be found in these directories: `/assets/js` and `/assets/css`. 

This code must first be "compiled" before it enters `index.html`. Compiling, in this case, means that it will end up in the directory `/assets/compiled`. If it is there, it will end up in a newly generated `index.html` via the `render` step. For rendering, see the admin section.

This is the command to compile:

```bash
gulp compile`
```

So, if you have written client-side JavaScript or custom CSS, you need to take the following steps to get this code working (the "$" at the beginning is the command prompt, and you should not type it):


```
$ gulp compile
```

Wait for the code to finish. Then:

```
$ npm run render
```
Now, your `index.html` file should be created or updated.

### Gulp

Of course, you can only use Gulp if you have it [installed](https://gulpjs.com/docs/en/getting-started/quick-start).

:::warning
If Gulp suddenly stops working even though it worked before, it could be because you are using NVM and have a different Node.js version active.
:::

### Adding server-side functionality

The Node.js scripts that run server-side are in the root of the Spec-Up-T repo and the `/src/` directory.

How can you run and test Node.js code locally without publishing it on npm first?

- Clone the Spec-Up-T repo
- Install a Spec-Up-T via the installer
- Run `npm install` in the Spec-Up-T website that you installed via the installer
  
Generally, if you now run `npm run render,` it will call the scripts from the Spec-Up-T inside `node_modules.` 

In the `scripts` section of the `package.json` file for your Spec-Up-T installation, you will find commands like this:

```json
"scripts": {
  "render": "node -e \"require('spec-up-t')({ nowatch: true })\"",
  "xrefs": "node -e \"require('spec-up-t/src/get-xrefs-data.js').getXrefsData()\""
}
```

These are calls to the `Spec-Up-T` library in `node_modules`.

However, we want to test locally. To do this, we will call the scripts from your local Spec-Up-T clone, where you are developing.

Type this into your terminal:

:::warning
It is only tested on macOS.
:::

```bash
node -e "require('/Users/***/path/to/your/spec-up-t/index.js')({ nowatch: true })"
```

or

```bash
node -e "require('/Users/***/path/to/your/spec-up-t/spec-up-t/src/get-xrefs-data.js').getXrefsData()"
```

Adjust this based on what you need.

