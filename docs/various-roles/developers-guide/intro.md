---
sidebar_position: 15
---

# Developers Guide

This page is the developer's guide for the Spec-Up-T system.

## Description of repositories related to Spec-Up-T

### Intro

There are **three** components distinguishable in **two** repositories.

1. The **Spec-Up-T installation** containing the markdown files containing the texts such as specifications and terms plus definitions
2. **Installer files** that copy this Spec-Up-T installation to the desired location
3. A **Spec-Up-T npm package** (created from the Spec-Up-T repository) that is installed after the Spec-Up-T installation is copied to the desired location

### The repositories

- [The Spec-Up-T installer repository](https://github.com/blockchainbird/spec-up-t-starter-pack), with [associated NPM package](https://www.npmjs.com/package/create-spec-up-t) (1. and 2.)
- [The Spec-Up-T repository](https://github.com/blockchainbird/spec-up-t), with [associated NPM package](https://www.npmjs.com/package/spec-up-t) (3.)

We will now explain how these relate to each other.

### The Spec-Up-T installer repository

The Spec-Up-T Installer repository installs a set of files somewhere on a file system.

- That can be on your local file system, which you later create a GitHub repository from so that others can use your repository as an external source for their glossary. However, you don't have to make a repository of it; without it, you will also get a working glossary.
- You can also start from GitHub and create a repository through this web interface with the files included in the Starterpack (this option is in development).

The Spec-Up-T Installer repository has a subdirectory named `spec-up-t-starter-pack`. This subdirectory is a working Spec-Up-T install. The scripts in the root copy this subdirectory to your chosen location on your file system via an NPX command (or you do this via GitHub's web interface, but this is under development, as mentioned above).

Note: You can also copy `spec-up-t-boilerplate/` manually and then call `npm install`. That has the same result.

When you run this NPX command, this subdirectory is copied to your local file system, and then, when that is done, `npm install` is called. This installs the packages as defined in the co-copied `package.json`, which is also in the mentioned subdirectory. The `package.json` in the root of the repository serves to copy the subdirectory to your local file system, via `create-spec-up-t-starterpack.js`.

:::info
The relevant files + a directory in the Spec-Up-T installer repository:

```
spec-up-t-boilerplate/
create-spec-up-t-starterpack.js
messages.js
package.json
```

This directory contains a working Spec-Up-T:
```
spec-up-t-boilerplate/
```

These files …

```
create-spec-up-t-starterpack.js
messages.js
package.json
```

… copy the `spec-up-t-boilerplate/` directory to your desired location via NPX.
:::

### The Spec-Up-T repository

One of the packages listed in the `package.json` copied to the local file system is `spec-up-t`. This package does all the work from the `node_modules` directory created when you run `npm install`. The copied files in the subdirectory have a helper function.

In the `package.json` you will find a `scripts` section. These reference the `spec-up-t` package, which can be called via npm commands, such as `npm run render`. Some calls go through a file in the `/src/server/` directory. This workaround is necessary so that you can include a  GitHub token. This token is needed to raise the GitHub API limit.

## Adding functionality

:::info
Be aware that your specification is just one file, an `index.html` file. Keeping this file as small as possible should be a priority when adding functionality. There is no lazy loading or optimization. It is basic HTML plus embedded CSS and JS. (This applies only to client-side functionality and not to server-side things you do from the command line during the “build” phase. That's code that doesn't end up in the `index.html`  after all.)

Also, realize that the GitHub API reaches its limit fairly quickly, especially if there is no authentication. So, in everything, keep in mind that the number of requests should remain minimal.
:::


The `Spec-Up-T` tool is written in `JavaScript,` client-side, and server-side (Node.js).

### Adding client-side functionality

Client-side JavaScript and CSS can be found in these directories: `/assets/js` and `/assets/css`.

This code must first be "compiled" before it enters `index.html`. Compiling, in this case, means that it will end up in the directory `/assets/compiled`. If it is there, it will end up in a newly generated `index.html` via the `render` step. For rendering, see the admin section.

If you introduce a new CSS or JS file, it should be declared here: `/src/asset-map.json`.

This is the command to compile:

```bash
gulp compile
```

### Testing

So, if you have written client-side JavaScript or custom CSS, you need to take the following steps to get this code running:

```bash
gulp compile
```

Wait for the code to finish. Then:

```bash
npm run render
```

Now, your `index.html` file should be created or updated.

### Handling data

Since everything is contained in one HTML file, the question arises as to how we store and call data. After all, we can't load external JSON because we want to keep everything within this one HTML file.

The solution is to include the data as an embedded JavaScript variable. In the development environment (the installation on your file system from where you invoke commands on the command line), you can choose to store the data as JSON as well. However, in order to get it working in the HTML file, you will also have to include a JS variable. You will have to arrange this through Gulp.

### Gulp

Of course, you can only use Gulp if you have it [installed](https://gulpjs.com/docs/en/getting-started/quick-start).

:::warning
If Gulp suddenly stops working even though it worked before, it could be because you are using NVM and have a different Node.js version active.
:::

### Adding server-side functionality

The Node.js scripts that run server-side are in the root of the Spec-Up-T repo and the `/src/` directory.

If you have a Spec-Up-T installation (via `npx create-spec-up-t`), how can you run and test server-side Node.js code locally without publishing it on npm first?

- Clone the Spec-Up-T repo
- Install a Spec-Up-T via the installer
  
Generally, if you now run `npm run render,` it will call the scripts from the Spec-Up-T inside `node_modules` .

### Scripts section

In the `scripts` section of the `package.json` file for your Spec-Up-T installation, you will find commands like `render` in the `scripts` section:

ToDo: add file list

These are calls to the `Spec-Up-T` library in `node_modules`.

However, we want to test locally. To do this, we will call the scripts from your local Spec-Up-T clone, where you are developing.

Type this into your terminal:

:::warning
It is only tested on macOS.
:::

To `render` the index.html file, run this in your terminal:

```bash
node -e "require('/Users/***/path/to/your/spec-up-t/index.js')({ nowatch: true })"
```

You will notice that this is the same as the value of the `render` key without the escape characters.

Adjust the other entries if you want to run them.

## Directory structure

ToDo: Add file list

| File/Directory                | Description / remarks |
|-------------------------------|-------------|
| `assets/`                        | client-side: JS and CSS files |
| `gulpfile.js`                   | responsible for the “build” of the index.html |
| `index.js`                     | main JS file, called via the “render” command |
| `package.json`                  | “script” is needed for testing |
| `src/`                           | JS files (Node.js, for server side stuff) + `asset-map.json`  |
| `static/` | Static files, like logo.svg |
| `templates/` | Mostly HTML, final step |

## Github API

### Example of API response

```json
[
  {
    sha: '117b86fa676c0bd3030c16e8bbb87ebaa61af576',
    node_id: 'C_kwDOMi-o_toAKDExN2I4NmZhNjc2YzBiZDMwMzBjMTZlOGJiYjg3ZWJhYTYxYWY1NzY',
    commit: {
      author: [Object],
      committer: [Object],
      message: 'first commit',
      tree: [Object],
      url: 'https://api.github.com/repos/****/****/git/commits/117b86fa676c0bd3030c16e8bbb87ebaa61af576',
      comment_count: 0,
      verification: [Object]
    },
    url: 'https://api.github.com/repos/****/****/commits/117b86fa676c0bd3030c16e8bbb87ebaa61af576',
    html_url: 'https://github.com/****/****/commit/117b86fa676c0bd3030c16e8bbb87ebaa61af576',
    comments_url: 'https://api.github.com/repos/****/****/commits/117b86fa676c0bd3030c16e8bbb87ebaa61af576/comments',
    author: {
      login: '****',
      id: 0,
      node_id: '****',
      avatar_url: 'https://avatars.githubusercontent.com/u/****?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/****',
      html_url: 'https://github.com/****',
      followers_url: 'https://api.github.com/users/****/followers',
      following_url: 'https://api.github.com/users/****/following{/other_user}',
      gists_url: 'https://api.github.com/users/****/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/****/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/****/subscriptions',
      organizations_url: 'https://api.github.com/users/****/orgs',
      repos_url: 'https://api.github.com/users/****/repos',
      events_url: 'https://api.github.com/users/****/events{/privacy}',
      received_events_url: 'https://api.github.com/users/****/received_events',
      type: 'User',
      site_admin: false
    },
    committer: {
      login: '****',
      id: 0,
      node_id: '****',
      avatar_url: 'https://avatars.githubusercontent.com/u/****?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/****',
      html_url: 'https://github.com/****',
      followers_url: 'https://api.github.com/users/****/followers',
      following_url: 'https://api.github.com/users/****/following{/other_user}',
      gists_url: 'https://api.github.com/users/****/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/****/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/****/subscriptions',
      organizations_url: 'https://api.github.com/users/****/orgs',
      repos_url: 'https://api.github.com/users/****/repos',
      events_url: 'https://api.github.com/users/****/events{/privacy}',
      received_events_url: 'https://api.github.com/users/****/received_events',
      type: 'User',
      site_admin: false
    },
    parents: []
  }
]

```

## Publishing to GitHub and NPM

The suggested way to publish to GitHub and NPM will be described here.

### Add changes to Git

Make your changes and commit them:

```bash
git add .
git commit -m "Add new feature"
```

:::info
Merging branches is not described here. It's generally best to run npm version after merging your feature branch into the main (or master) branch. This ensures that the version bump and tag are applied to the final state of the code that will be released.
:::

### Publish to NPM

#### Update version numbers

:::warning

It's easy to forget to update the version nummer in different locations. Please read carefully what is written below.

:::

Update the version number in four `package.json`'s. The idea is to keep the version numbers of all repos the same. If you publish an update to NPM you have to raise the version number in four places:

1. https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-boilerplate/package.json#L3
2. https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-boilerplate/package.json#L8
3. https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/package.json#L3
4. https://github.com/trustoverip/spec-up-t/blob/master/package.json#L3

add 1: do this manually, if the current version is 1.0.87, make it 1.0.88

add 2: do this manually, if the current version is 1.0.87, make it 1.0.88

Now commit this file with message: “Bump version to 1.0.88”

add 3 & 4: Use this command:

```bash
npm version <newversion> -m "Bump version to %s"
```

In this case that would be:

```bash
npm version 1.0.88 -m "Bump version to %s"
```

The %s in the npm version command is a placeholder that gets replaced with the new version number. When you run the command, npm automatically substitutes %s with the version number you specified.

npm automatically creates a new Git tag that matches the new version number you specified.

#### Push changes

Push the changes and the tag to the remote repository:

```bash
git push origin main --tags
```

#### Publish to NPM

Publish the new version to npm:

```bash
npm publish
```

The new package will be available as soon as it is uploaded.
