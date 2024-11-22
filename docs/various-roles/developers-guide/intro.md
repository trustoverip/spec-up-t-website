---
sidebar_position: 15
---

# Developers Guide

This page is the developer's guide for the Spec-Up-T system.

## How do you get a new version of Spec-Up-T live?

If you want to add new functionality to Spec-Up-T, you will find below how to proceed.

:::danger
Be aware that your specification is just one file, an `index.html` file. Keeping this file as small as possible should be a priority when adding functionality. There is no lazy loading or optimization. It is basic HTML plus embedded CSS and JS. (This applies only to client-side functionality and not to server-side things you do from the command line during the “build” phase. That's code that doesn't end up in the `index.html`  after all.)

Also, realize that the GitHub API reaches its limit fairly quickly, especially if there is no authentication. So, in everything, keep in mind that the number of requests should remain minimal.
:::

Two repos come into play:

- [The Spec-Up-T repo](https://github.com/blockchainbird/spec-up-t), with [associated NPM package](https://www.npmjs.com/package/spec-up-t)
- [The Spec-Up-T installer repo](https://github.com/blockchainbird/spec-up-t-starter-pack), with [associated NPM package](https://www.npmjs.com/package/create-spec-up-t)

The Spec-Up-T installer uses Spec-Up-T as a package in node_modules, which is installed via `npm install` after you install the Spec-Up-T installer itself (see [Admins Guide](../admins-guide/introduction.md) for this).

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

<GitHubFileViewer githubFileUrl="https://github.com/trustoverip/spec-up-t-starter-pack/blob/main/spec-up-t-starterpack/package.json" />

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

<GitHubDirectoryList githubUrl="https://github.com/trustoverip/spec-up-t/tree/master" />

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

The suggested way to publish to GitHub and NPM is as follows:

- Make your changes and commit them:

```bash
git add .
git commit -m "Add new feature"
```

:::info
Merging branches is not described here. It's generally best to run npm version after merging your feature branch into the main (or master) branch. This ensures that the version bump and tag are applied to the final state of the code that will be released.
:::

- Update the version in package.json, commit the change, and create a Git tag:

```bash
npm version <newversion> -m "Bump version to %s"
```

:::info
The %s in the npm version command is a placeholder that gets replaced with the new version number. When you run the command, npm automatically substitutes %s with the version number you specified.

npm automatically creates a new Git tag that matches the new version number you specified.
:::

Replace `<newversion>` with the new version number (e.g., 0.11.32).

- Push the changes and the tag to the remote repository:

```bash
git push origin main --tags
```

- Publish the new version to npm:

```bash
npm publish
```
