---
sidebar_position: 3
---

# General Guide

:::warning
These are general instructions. This is a temporary page; parts will be moved to other pages and assigned to the various roles.
:::

## Get help

```bash
npm run help
```

This command will show a URL to the documentation website (the website you are reading right now).


## Create (or edit the sample) `spec.json`

The`specs.json` file **in the root folder of your repository** specifies configuration values used in the generation of your spec documents. The values in your `specs.json` file include things like where your spec's markdown files are located, where to output the generated spec document, and various metadata values used in rendering, such as the title, logo, and repo links for each of your specs. The following are the required/optional fields supported in the `specs.json` config file:

- **`public_root`** _(PATH STRING, optional)_ - For some platforms and services where you may want to output your rendered spec, the pathing may differ from the directory structure of your local project. To account for this, you can use the `public_root` property to specify the insertion of a path segment to account for the difference in pathing between your local renders and wherever you publish your spec.
- **`specs`** _(ARRAY, required)_ - the `specs` array contains descriptor objects for each of the specs you are generating in your project and are composed of the following required and optional properties:
- **`spec_directory`** _(STRING, required)_ - You must specify the **repo-root-relative** location of your spec's markdown file directory. You ****MUST**** name your spec's markdown file `spec.md` and locate it in your `spec_directory` so the tool can automatically find and use it for rendering. If you want to use a different name for the markdown file, or you have multiple markdown files you would like the tool to assemble into one document, you must specify them using the optional`markdown_paths` field described below. See the "multi-file" example in the spec-up repo.
- **`title`** _(STRING, required)_ - You must add a title for your spec, which will be rendered in the generated document's H1 text and page title.
- **`logo`** _(PATH/URI STRING, optional)_ - You may add a reference to a logo asset, either via a path to the asset or a URI
- **`logo_link`** _(URI STRING, optional)_ - The URI you want your logo to point to on the rendered page.
- **`markdown_paths`** _(ARRAY, optional)_ - If you want to name your spec's markdown file something other than `spec.md`, or you have multiple files you would like assembled into a single output document, you must specify their paths as array entries in the order you would like them assembled. The paths in this array are assumed to be based on the `spec_directory` you specified, so _DO NOT_ repeat the full root relative path.
- **`katex`** _(BOOLEAN, optional)_ - To enable TeX support via KaTeX, set this property to `true`. After rendering, be sure to copy the `fonts/` subdirectory containing the necessary web fonts.
- **`output_path`** _(STRING, optional)_ - If you want the generated spec document to be output to a different location than the `spec_directory` you specified (e.g. the project root for GitHub Pages publishing), you can specify another root relative path (use `./` for root), and the tool will write the document file there instead.
- **`source`** _(OBJECT, optional)_ - this object allows you to configure where repo-specific data is pulled from to power some of the more advanced repo-related features. To do this, specify the code hosting service by adding a service ID string to `host` (currently Spec-Up only supports `"github"`, but this is extensible), add the account/org the repo is located within via the `account` property, and add the repo name under the `repo` property. Here is an example configuration:

 ```json
 {
 "host": "github",
 "account": "decentralized-identity",
 "repo": "sidetree"
 }
 ```

You're ready to start rendering specs as HTML sites locally and/or pushing them to github pages however you see fit to automate.

## Test `spec.json`

Once you have edited the `spec.json,` you can test here to see if it is OK; that is, it checks whether each key is present. It does not check whether the value of the key meets specific rules:

```bash
npm run validatespec
```

If a key is missing you will get a notification about it.



## Look up `xrefs`

`xrefs` are references to external glossaries (specifications).

```bash
npm run xrefs
```

Now, the `xref` is generated, if any.

Every `xref` is checked against a local data collection to see if there is already a reference. If so, it is left untouched. This way, every xref will point to the definition as it was created. If the external term changes in the meantime, the reference is still to the original version.

## Remove `xref`

Removing an `xref` from the text is something you'll do via the text editor. However, if you want to update the xref and make it point to the current version of the external reference, remove the current reference that might point to an older version:

```bash
npm run removexref -- "termValue" "externalSpecValue"
```

After that, you can run `npm run xrefs` again to get the latest reference (that might be identical if the external reference did not change).




## Create index.html

The final result will be just one file: `index.html`. This file is rendered or re-rendered with the following command:

```bash
npm run render
```

Now, an index.html file is created in the `docs` directory. This is the default directory specified in the `specs.json` file.

## You are ready

Now you have a basic Spec-Up-T specification file (`index.html`) with the following content:

- a `specs.json` file
- a `spec/` directory with sample markdown files
- a `docs` directory with a sample index.html file
- a `node_modules` directory, a `package.json` file, and a `package-lock.json` file (these three elements belong to the `npm` system)

## View your specification

So the `index.html` is the endresult. You should view it in a browser. There are two ways to do this:

- via `http://`
- via `file:///`

The simplest way to do so is via `file:///`: go to the `index.html` file with your Explorer, Finder, or other file manager, and double-click on it. Usually, it now opens in your browser.

If not, go to the browser and try to open the file from the browser menu.

This way, you open the `index.html` file via the `file protocol` (“`file:///`”).

You can also access it via HTTP. You then need to place the `index.html` file on a web server and access it through a browser using the URL under which the file is accessible.

This way, you can share it with the world by sharing the URL.

:::info
HTTP stands for HyperText Transfer Protocol. It is the foundation of any data exchange on the Web and a protocol for transmitting hypertext requests and information online. The World Wide Web uses HTTP and defines how messages are formatted and transmitted and how web servers and browsers should respond to various commands.
:::

## Three different modes

`npm run render` is not the only way to go. There are three different modes for rendering the specification:

|command|behavior|
|---|---|
|`npm run edit`| After rendering, this will stay running, and the `gulp` library will watch the source files in your spec directory/ies for changes and re-render any time you save a file. Opening these rendered files in a browser and refreshing them will keep you up to date.|
|`npm run render`| This renders the site once and does not keep a gulpy watch on the underlying files.|
|`npm run dev`|this enables debugging features.|

## Automation

The above scripts can easily be triggered by [github actions](../glossary#github-actions).  See [this repo's example](https://github.com/decentralized-identity/spec-up/blob/master/.github/workflows/render-specs.yml)