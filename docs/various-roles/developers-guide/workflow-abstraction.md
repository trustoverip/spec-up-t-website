# Workflow abstraction

## Starting point

We start with a collection of markdown files containing terms and definitions. We want to create a “specification” from these markdownfiles. This is going to be an **`index.html`** file.

User Entry **Point** is a Command Line Menu:


```sh
  ,---.                  .   .        --.--
  `---.,---.,---.,---.   |   |,---.     |
      ||   ||---'|    ---|   ||   |---  |
  `---'|---'`---'`---'   `---'|---'     `
       |                      |


  Please choose one of the following options:

   [0] Add content
   [1] Render specification
   [2] Export to PDF
   [3] Update new xrefs
   [4] Update all xrefs
   [5] Add, remove or view xref source
   [6] Configure
   [7] Open documentation website
   [8] Freeze specification
   [Q] Quit

   An xref is a reference to another repository.

   Enter your choice:

```

## End result

The end result is an **`index.html`** file that is “self containing”, in this case meaning that it has all the styling (CSS) and behaviour (JS) and data (a JS variable) inside.

## Menu option `[0] Add content`

Steps:

| Summary                                                                  | Description                                                                                                                                   | where                       |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| 1: Initialize                                                            | Not yet active                                                                                                                                | in init.js                  |
| 2: Create **term index** based on the files containing terms             | Make an ordered list (JSON) of all terms markdown files                                                                     | in create-term-index.js     |
| 3: Insert **term index** into the *system config file*                   | based on user config file and *term index*                                                                                                    | insert-term-index.js        |
| 4: Create a version index.                                               | This page lists all available snapshots of this Spec-Up-T specification                                                                       | in create-versions-index.js |
| 5: Prepare the markdown files that contain '*[[tref]]*'s as a definition | A '*[[tref]]*' is a term defined in another (“remote”) specification. The definition (already locally stored in JSON) is inserted in the file | in prepare-tref.js          |
| 6: Fix the markdown in the term files                                    | One blank line between paragraphs, prepend `~` to lines, etc                                                                                  | in fix-markdown-files.js    |
| 7: Create a &lt;script&gt; object that contains external data            | A local copy of external data are inserted in the `index.html`                                                                                | in index.js                 |
| Work in progress                                                                         |                                                                                                                                               |



