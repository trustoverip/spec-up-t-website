---
sidebar_position: 3
---

# Command Line Menu

You don't have to be a command-line wizard to use Spec-Up-T. There's even a menu, so all you have to do is type in a number, which makes a difference, right?

Still, it can be confusing. And if you're used to a regular application you control with your mouse, it takes some getting used to.

## Start command line menu

Assuming you already [installed](./installation.md) Spec-Up-T, here you find further instructions:

```bash
npm run menu
```

You will now see this menu:

```bash
Please choose one of the following options:

    [1] Render specification
    [2] Export to PDF
    [3] Look up xrefs
    [4] Remove xref
    [5] Validate config file
    [6] Add new terms
    [7] Open documentation website
    [8] Freeze specification
    [Q] Quit
```

These menu options act as shortcuts to the below commands, such as `npm run render` and others. You can choose between using the menu or entering the direct commands yourself.

### `[1] Render specification`

Direct command:

```bash
npm run render
```

Creates the specification, an index.html, in the `docs` directory, as specified in the `specs.json` file.

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

Direct command:

```bash
npm run topdf
```

Creates a PDF. The PDF will be created in the same directory as the `index.html` file.

### `[3] Look up xrefs`

Direct command:

```bash
npm run xrefs
```

`xrefs` are references to external glossaries (specifications). Each `xref` is checked against a local data collection to see if a reference exists, maintaining an external term's original version.


### `[4] Remove xref`

Direct command:

```bash
npm run removexref -- "termValue" "externalSpecValue"
```

If you need to remove an `xref` to update it to the current version of an external reference, use:

After removing the old reference, you can run `npm run xrefs` again to get the latest reference.

### `[5] Validate config file`

Direct command:

```bash
npm run validatespec
```

Once you've edited the `spec.json`, you can test it to check for missing keys. If a key is missing, you'll receive a notification.

### `[6] Add new terms`

Direct command:

```bash
npm run addterms
```

If you create a new Markdown file with a term and definition in it, it is not automatically included in the final product. It can be included in the index only if you want it to be. With this command, you add it to the index.


### `[7] Open documentation website`

No Direct command.

This command will redirect to the documentation website (the site you are reading right now).

### `[8] Freeze specification`

Direct command:

```bash
npm run freeze
```

This command makes a copy of the `index.html` file and adds a version number to the file name (`index-v1.html`, `index-v2.html` etc). These files are placed in the same folder as the `index.html` but in a subfolder called `versions`.


### `[Q] Quit`

This command will take you out of the menu.
