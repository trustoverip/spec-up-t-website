---
sidebar_position: 1
---

import CommandLineMenu from '../_shared-content/command-line-menu.md';

# Command Line Menu

You don't have to be a command-line wizard to use Spec-Up-T. There's a menu, so all you have to do is type in a number.

Still, it can be confusing. And if you're used to a regular application you control with your mouse, it takes some getting used to.

## Start command line menu

:::info
Currently, the menu is only tested on MacOs and has not been tested on Windows OS.
:::

:::info
Some of these menu items are available in the GitHub Web-based version (based on Github Actions). But since GitHub Actions cannot be interactive, the “Configure” option for example is not available. That, you will have to do manually.
:::

Assuming you already [installed](../getting-started/local-installation/installation.md) Spec-Up-T, here you find further instructions.

To start, run this command in the terminal:

```bash
npm run menu
```

You will now see this menu:

<CommandLineMenu />

These menu options act as shortcuts to the below commands, such as `npm run render` and others. You can choose between using the menu or entering the direct commands yourself.

### `[0] Add content`

- Shows a short instruction on how to add content
- Shows a link to the this website (the website you are currently reading)


### `[1] Render specification`

**Creates the specification, an index.html, in the `docs` directory, as specified in the `specs.json` file.**

To view the `index.html` file, you can:

- Open it via `file:///` in your file manager or
- Access it via HTTP by placing it on a web server.

The easiest way is to double-click the file in your file manager, which should open it in your browser.

By the way, there are **three** modes for rendering the specification:

| Command | Behavior |
|---|---|
| **`npm run edit`** | Renders the site and watches for changes, re-rendering automatically when you save a file. |
| **`npm run render`** | Renders the site once without watching for changes. |
| **`npm run dev`** | Enables debugging features. |

### `[2] Export to PDF`

Creates a PDF. The PDF will be created in the same directory as the `index.html` file.

### `[3] Export to DOCX`

Creates a Microsoft Word document. The DOCX file will be created in the same directory as the `index.html` file.

### `[4] Collect external references`

Also runs [1].

:::info
External references (`xrefs`) are references to external glossaries (specifications).
:::

Fetches definitions from external repositories and updates local cache with latest versions.

### `[5] Add, remove or view xref source`

See an overview of all external references, or add or delete them.

### `[6] Configure`

Configure a new installation.

### `[7] Run health check`

Provides diagnostic information about your Spec-Up-T installation and configuration.

### `[8] Open documentation website`

This command will redirect to the documentation website (the site you are reading right now).

### `[9] Freeze specification`

Makes a copy of the `index.html` file and adds a version number to the file name.

Example: `index-v1.html`, `index-v2.html` etc. These files are placed in the same folder as the `index.html` but in a subfolder called `versions`.

### `[Q] Quit`

This command will take you out of the menu.
