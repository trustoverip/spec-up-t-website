---
sidebar_position: 3
---

# Publishing to GitHub and NPM

The suggested way to publish to GitHub and NPM will be described here.

## Add changes to Git

Make your changes and commit them:

```bash
git add .
git commit -m "Add new feature"
```

:::info
Merging branches is not described here. It's generally best to run npm version after merging your feature branch into the main (or master) branch. This ensures that the version bump and tag are applied to the final state of the code that will be released.
:::

## Publish to NPM

### Update version number

https://github.com/trustoverip/spec-up-t/blob/master/package.json#L3


Use this command:

```bash
npm version <newversion> -m "Bump version to %s"
```

In this case that would be something like:

```bash
npm version 1.0.88 -m "Bump version to %s"
```

The % s in the npm version command is a placeholder that gets replaced with the new version number. When you run the command, npm automatically substitutes % s with the version number you specified.

npm automatically creates a new Git tag that matches the new version number you specified.

### Push changes

Push the changes and the tag to the remote repository:

```bash
git push origin master --tags
```

or

```bash
git push upstream master --tags
```

where `origin` and/or `upstream` are the remotes that you have configured.



### Publish to NPM

Publish the new version to npm:

```bash
npm publish
```

The package files will now be uploaded. The new package will be available as soon as it is uploaded.
