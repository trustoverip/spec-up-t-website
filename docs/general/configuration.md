---
sidebar_position: 2
---

# Configuration

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
