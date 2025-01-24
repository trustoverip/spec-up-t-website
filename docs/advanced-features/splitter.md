---
sidebar_position: 3
---

# Splitter Tool


### Introduction

[The splitter tool](https://github.com/blockchainbird/spec-up-splitter) is a tool that can be used in conjunction with Spec-Up or Spec-Up-T. You feed it a markdown file (the source file) and it creates several new markdown files based on this source file.

This tool is for Spec-Up and Spec-Up-T users. Use this tool if you want to make managing your Spec-Up or Spec-Up-T easier.

### An example of what the tool does

This tool splits a `Spec-Up` Markdown file with many terms and definitions into separate files, each containing only one term and definition.

#### Input: source file

An example of a source file is shown below:

`terms-definitions.md` :


```bash
[[def: term 1, term one, Term One]]

~ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus volutpat justo, sed ornare velit.

[[def: term 2, term two, Term Two]]

~ Nam euismod augue sed tempus imperdiet. Pellentesque ac porta ipsum, sed sodales leo. Suspendisse molestie est sit amet est porta, sit amet molestie dolor pharetra. Duis porta mollis sem vel aliquam. Maecenas laoreet turpis nunc, vitae mattis urna auctor ac. Donec mattis quis urna nec porta. Sed sit amet viverra ligula. Vivamus vitae sem sodales, malesuada dui sit amet, viverra lectus. Integer ullamcorper molestie ante, in blandit nunc tempus auctor.

[[def: term 3, term three, Term Three]]

~ Sed lorem nunc, ultricies nec nibh eu, bibendum sollicitudin arcu. Nullam porttitor condimentum elit ac commodo. Aenean ac augue quis arcu congue aliquam vitae in massa. Aliquam erat volutpat. Curabitur lobortis, sapien vitae mattis dignissim, risus augue iaculis risus, sed tempus sapien ex nec massa. Integer quis maximus nunc. Nunc ultrices sapien erat, at congue augue mattis sit amet. Aliquam condimentum luctus nunc, ut euismod augue commodo in.
```

#### Output: new files

An example of the new files is shown below. The splitter tool has cut up the original file into three new files where the names of the files are based on the definition in the first line:

`term1.md` :

```bash
[[def: term 1, term one, Term One]]

~ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus volutpat justo, sed ornare velit.
```


`term2.md` :

```bash
[[def: term 2, term two, Term Two]]

~ Nam euismod augue sed tempus imperdiet. Pellentesque ac porta ipsum, sed sodales leo. Suspendisse molestie est sit amet est porta, sit amet molestie dolor pharetra. Duis porta mollis sem vel aliquam. Maecenas laoreet turpis nunc, vitae mattis urna auctor ac. Donec mattis quis urna nec porta. Sed sit amet viverra ligula. Vivamus vitae sem sodales, malesuada dui sit amet, viverra lectus. Integer ullamcorper molestie ante, in blandit nunc tempus auctor.
```


`term3.md` :

```bash
[[def: term 3, term three, Term Three]]

~ Sed lorem nunc, ultricies nec nibh eu, bibendum sollicitudin arcu. Nullam porttitor condimentum elit ac commodo. Aenean ac augue quis arcu congue aliquam vitae in massa. Aliquam erat volutpat. Curabitur lobortis, sapien vitae mattis dignissim, risus augue iaculis risus, sed tempus sapien ex nec massa. Integer quis maximus nunc. Nunc ultrices sapien erat, at congue augue mattis sit amet. Aliquam condimentum luctus nunc, ut euismod augue commodo in.
```

### Why

Each term in a specification will be kept in its own file to keep management doable. Sometimes you have the situation that files have already been created with many `Spec-Up` terms and definitions. Splitting many terms in one file is laborious, so this tool was built.

### How to use it

:::warning
Note the `npx`, not `npm`.
:::

#### Get help

```bash
npx spec-up-splitter -help
```

This will output a URL that points to this website.

#### Use the tool

```bash
npx spec-up-splitter [pathToTermsFile] [pathToTermsDir]
```

#### Example

```bash
npx spec-up-splitter custom_terms.md custom-terms-output
```

:::warning
Currently this tool works only on the first spec definition in specs.json (on the first element in de specs array in specs.json), which is usually the case for most Spec-Up projects. If you have multiple specs in your project, you may need to modify the tool to work with the correct spec definition.
:::

### Arguments

- pathToTermsFile: Optional. The path to the markdown file containing terms and definitions to be split. If not provided, defaults to 'terms_and_definitions.md'.
- pathToTermsDir: Optional. The path to the directory where the individual term files should be saved. If not provided, defaults to 'terms-definitions'.

### Requirements

- The tool requires a 'specs.json' file to be present. This file should be in a standard Spec-Up install.

### Behavior

1. The tool first checks for the existence of 'specs.json'. If it is not found, the tool stops with an error message.
2. It then checks if the source terms file exists. If not, it stops with an error message.
3. If the specified directory for term files already exists and is empty, the tool proceeds with the splitting operation. If it contains markdown files, it stops.

### Repo and Package

- [Github repo](https://github.com/blockchainbird/spec-up-splitter)
- [NPM package](https://www.npmjs.com/package/spec-up-splitter)
