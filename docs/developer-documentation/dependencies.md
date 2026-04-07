---
sidebar_position: 4
---

# Dependencies

This page describes the main runtime and build-time dependencies used by the `spec-up-t` package.

They provide the functionality needed to parse Markdown, manage file operations, generate DOM-like HTML, use GitHub APIs, and build the final website output.

## Key dependency categories

### Markdown processing

`spec-up-t` uses `markdown-it` and a suite of `markdown-it-*` plugins to support extended Markdown syntax.
This includes features such as anchors, tables, task lists, UML diagrams, KaTeX math, and custom reference handling.

### Build-time tooling

Dependencies such as `gulp`, `gulp-concat`, `gulp-clean-css`, and `gulp-terser` help assemble and optimize the generated CSS and JavaScript for the final HTML output.

### HTML and DOM utilities

`jsdom` and `cheerio` are used to parse and transform HTML during the build process.
These tools let `spec-up-t` inspect generated pages, manipulate DOM structures, and add cross-reference links after the Markdown has been rendered.

### External integrations

Packages like `@octokit/plugin-throttling`, `axios`, and `octokit` handle communication with GitHub APIs and external services.
This enables features such as importing external specification references, resolving metadata, and managing API rate limits.

### Output generation

`pdf-lib` and `puppeteer` are used when generating PDF versions of specifications or when creating rendered snapshots of the HTML output for testing or export.

### CLI and utility support

Utilities such as `dotenv`, `fs-extra`, `readline-sync`, and `pkg-dir` provide environment configuration, file system convenience, CLI interactivity, and package-directory resolution.

## Notes for contributors

When updating dependencies, keep in mind that `spec-up-t` must remain compatible with both Node.js build-time usage and the generated browser output.
Major dependency upgrades should be tested carefully, especially for Markdown plugins and HTML transformation libraries.
