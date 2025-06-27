---
sidebar_position: 4
---

# Local test environment

## What is `npm link`?

`npm link` is a command that allows you to symlink a local npm package to your project, making it easy to test changes to the package without publishing it to the npm registry.

## How it Works

- Navigate to Your Package Directory

Go to the folder of the npm package you're developing:

```bash
cd /path/to/your-package
```

- Run npm link

In the package directory, run:

```bash
npm link
```

This creates a global symlink to your package in your system's npm global directory (e.g., `~/.nvm/versions/node/<version>/lib/node_modules`). The symlink is named after the `name` field in your package's `package.json`.

- Link the Package to Your Project

Go to the project where you want to test the package:

```bash
cd /path/to/your-project
```

Then run:

```bash
npm link <package-name>
```

Replace `<package-name>` with the name of your package (as defined in its `package.json`). This creates a symlink in your project's `node_modules` folder pointing to the global symlink.

- Test Your Package

Now, your project uses the local version of the package. Any changes you make to the package's source code are immediately reflected in your project (no need to reinstall).

- Unlink When Done

To remove the link from your project:

```bash
npm unlink <package-name>
```

To remove the global symlink:

```bash
cd /path/to/your-package
npm unlink
```

## How to test if the package is linked

From the consuming project, run:

```bash
readlink node_modules/<package-name>
```

- If it returns a path (e.g., `/path/to/your-package`), the link is active.
- If it returns nothing or an error, it’s not linked.

or

```bash
npm list <package-name>
```

If it’s linked, the output might show a path like:

```bash
my-awesome-lib@1.0.0 -> /path/to/your-package
```

To check if the package is globally linked:

```bash
npm list -g <package-name>
```

Look for a -> pointing to your package’s local path.

## Example

- Package folder: `my-awesome-lib` (with `"name"`: `"my-awesome-lib"` in `package.json`)
- Project folder: my-app

Steps:

```bash
cd my-awesome-lib
npm link
cd ../my-app
npm link my-awesome-lib
```

Now my-app uses the local my-awesome-lib. Edit files in my-awesome-lib, and my-app will see the updates.

## Tips

- If your package has dependencies, run npm install in the package folder first.
- Use npm link --force if you encounter issues re-linking.
- For TypeScript or other compiled packages, ensure you rebuild the package after changes (e.g., `npm run build`).

That’s it! `npm link` is a handy tool for local package development and testing.

- Finding where links are created

```bash
# See global packages
npm list -g --depth=0

# See where global modules are stored
npm root -g
```

