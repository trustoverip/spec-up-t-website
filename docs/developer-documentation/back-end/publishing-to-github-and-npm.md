---
sidebar_position: 2
---

# Publishing to GitHub and NPM

The suggested way to publish to GitHub and NPM will be described here.

## Add changes to Git

Make your changes and commit them:

```bash
git add .
git commit -m "Add new feature"
```

::: info
Merging branches is not described here.It's generally best to run npm version after merging your feature branch into the main (or master) branch. This ensures that the version bump and tag are applied to the final state of the code that will be released.
:::

## Publish to NPM

### Update version numbers

:::warning

It's easy to forget to update the version nummer in different locations. Please read carefully what is written below.

:::

Update the version number in four locations in three`package.json`'s. The idea is to keep the version numbers of all repos the same. If you publish an update to NPM you have to raise the version number in four places:

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

The % s in the npm version command is a placeholder that gets replaced with the new version number.When you run the command, npm automatically substitutes % s with the version number you specified.

npm automatically creates a new Git tag that matches the new version number you specified.

### Push changes

Push the changes and the tag to the remote repository:

```bash
git push origin main --tags
```

### Publish to NPM

Publish the new version to npm:

```bash
npm publish
```

The new package will be available as soon as it is uploaded.
