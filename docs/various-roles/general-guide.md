---
sidebar_position: 1
---

# General Guide

:::info
This page is temporary; parts will be moved to other pages and assigned to the various roles.
:::

## Start command line menu

Assuming you already [installed](admins-guide/#installation) Spec-Up-T, here you find further instructions:

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

### `[Q] Quit`

This command will take you out of the menu.

**This is the end of the menu explanation.**

- - -

## Create (or edit the sample) `spec.json`

The `specs.json` file, located in the root folder of your repository, specifies the configuration values used in generating your specification documents. These values include the locations of your markdown files, the output path for the generated spec, and metadata like the title, logo, and repository links for each of your specs. Below are the required and optional fields supported in the `specs.json` config file:

- **`public_root`** _(PATH STRING, optional)_: Used to specify a path segment for platforms where the directory structure may differ between local and published environments.
- **`specs`** _(ARRAY, required)_: Contains descriptor objects for each spec in your project, including properties like:
  - **`spec_directory`** _(STRING, required)_: The repo-root-relative location of your markdown file directory. The tool automatically searches for `spec.md` here unless otherwise specified in the optional `markdown_paths`.
  - **`title`** _(STRING, required)_: The title for your spec, rendered in the document's H1 text and page title.
  - **`logo`** _(PATH/URI STRING, optional)_: A reference to a logo asset via a path or URI.
  - **`logo_link`** _(URI STRING, optional)_: The URI your logo points to on the rendered page.
  - **`markdown_paths`** _(ARRAY, optional)_: Specifies alternative names for your markdown files or includes multiple files for assembly into a single document.
  - **`katex`** _(BOOLEAN, optional)_: Enables TeX support via KaTeX when set to `true`.
  - **`output_path`** _(STRING, optional)_: Specifies an alternative output location for the generated spec document.
  - **`source`** _(OBJECT, optional)_: Configures the source of repo-specific data, such as the hosting service (`host`), account/org (`account`), and repository name (`repo`).

You're now ready to start rendering specs as HTML sites locally and/or pushing them to GitHub Pages.

## A complete installation

This is what a complete installation looks:

- a `specs.json` file
- a `spec/` directory with sample markdown files
- a `docs` directory with a sample index.html file
- a `node_modules` directory, a `package.json` file, and a `package-lock.json` file (these three elements belong to the `npm` system)

See [directory `spec-up-t-starterpack` of the installer](https://github.com/blockchainbird/spec-up-t-starter-pack/tree/main/spec-up-t-starterpack)

## Automation

The above scripts can easily be triggered by [GitHub Actions](../glossary#github-actions). See [this repo's example](https://github.com/decentralized-identity/spec-up/blob/master/.github/workflows/render-specs.yml).
