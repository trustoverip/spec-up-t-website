---
sidebar_position: 15
---

# Developers Guide

This is the developers guide for the Spec-Up-T system.

The repo can be found [here](https://github.com/blockchainbird/spec-up-t).

## How do you get a new version of Spec-Up-T live?

If you want to add new functionality to Spec-Up-T you will find below how to proceed.

There are two repos that come into play:

- [The Spec-Up-T repo](https://github.com/blockchainbird/spec-up-t), with [associated NPM package](https://www.npmjs.com/package/spec-up-t)
- [The Spec-Up-T installer repo](https://github.com/blockchainbird/spec-up-t-starter-pack), with [associated NPM package](https://www.npmjs.com/package/create-spec-up-t)

The Spec-Up-T installer uses Spec-Up-T as a package in node_modules, which is installed via `npm install` after you install the Spec-Up-T installer itself (see [Admins Guide](./admins-guide.md) for this).

How to update Git repositories goes too far here, you can find a lot of info about that online.

How to publish an updated package version to NPM:

- Update the "version" in `package.json` to a higher number (use [SemVer](https://semver.org/)), for example go from
  `"version": "0.11.29"` to `"version": "0.11.30"`
- Run `npm publish`

Note: The The Spec-Up-T installer repo has two `package.json`s. One in the root, it belongs to the repo itself. The other inside the directory that contains a full Spec-Up-T installation. This is the `package.json` that will be used later. The first one is only used for the installation itself. For simplicity, keep both version numbers the same.

The new package will usually be available as soon as it is uploaded.


## Adding client-side functionality

Client-side JavaScript and CSS can be found in these directories: `/assets/js` and `/assets/css`. 

This code must first be “compiled” before it enters `index.html`. Compiling in this case means that it will end up in the directory `/assets/compiled`. If it is there, it will end up in a newly generated `index.html` via the `render` step. For rendering, see the admin section.

This is the command to compile: `gulp compile`

So, if you have written client-side JavaScript, or custom CSS you need to take the following steps to get this code working (the “$” at the beginning is the command prompt, and you should not type it):


```
$ gulp compile
```

Wait for the code to finish. Then:

```
$ npm run render
```
Now your `index.html` file should be created or updated.

## Gulp

Of course, you can only use Gulp if you have it [installed](https://gulpjs.com/docs/en/getting-started/quick-start).

:::warning
If Gulp suddenly stops working even though it worked before, it could be because you are using NVM and have a different Node.js version active.
:::

## Adding server-side functionality

To be written.

