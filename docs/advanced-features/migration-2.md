---
sidebar_position: 60
---

# Migration 2

**Pre condition: You have a Spec-Up installation up and running**

## What you'll need

We consider migration a task for the roles `developer` or `administrator`.

Rename your current Spec-Up **GitHub repo** and **github.io site**, e.g., `Main-KERI-glossary` -> `Main-KERI-glossary-OLD`

Change your existing local directory name by the **new** name, e.g., `Main-KERI-glossary-OLD`

Go into the local directory and

```
 git remote set-url origin < URL to new GitHub repo name >
 ```

Start a new empty directory with the **established** name (e.g.`Main-KERI-glossary`) and

```
cd < established dirname >
git init
cd ..
```

Now that you're outside the repo directory (!): Go over [Installation](../getting-started/installation) and create a new repo with the established name. In the example `Main-KERI-glossary`, you start with: 

```
npx create-spec-up-t < established dirname >
```

Example:
```
npx create-spec-up-t ./Main-KERI-glossary
```

## Grab your data

Go to `Main-KERI-glossary-OLD`
Open Specs.json and  copy the list of `markdown_paths` and paste the list into the specs.json of `Main-KERI-glossary` under `markdown_paths` and remove the terminology markdown file (e.g., `terms-definitions.md`) from the list. 

:::warning 
Don't delete the terms-definitions.md, we need the content later!
:::

Example:
           "markdown_paths": [
                "05_title.md",
                "10_header.md",
                "16_foreword.md",
                "20_introduction.md",
                ~~25_"terms-and-definitions.md"~~,
                "28_design.md",
                "90_annex.md"
            ],

### Copy markdown files to /spec directory


**Be sure to be in the root of your newly created Spec-Up-T repo.**

Steps:
```
pwd
cp ../Main-KERI-glossary-OLD/spec/*.md ./spec/
cd ./spec
ls
rm terms-and-definitions.md 
```

:::note
with the above command, we suggest the old and new repos are both in the same parent directory.

We do not need the copy of terms-and-definitions.md 
:::


### Split your terms definitions into separate files

Two approaches: 

1. By hand
2. use the splitter tool

#### 1. By hand splitting of term-defnitions file
Example: `terms-and-definitions.md` contains 5 definitions -> 5 separate files, optionally with the name of the term as the file name, in a new directory named `terms-definitions` in the `./spec` directory of the Spec-Up-T install.

##### Alpha-numerical sorting
If you choose to have leading numbers in the filename (e.g., `13verifier.md`, `1200ssi.md`), the files will be used in this order. Any file without a number will be appended in the output alphabetically, AFTER the numbered files.

:::warning 
The name of the directory is declared in `specs.json` under "spec_terms_directory" entry. 
:::

Example:
```
spec/terms-definitions/abbrev.md 
spec/terms-definitions/alias.md 
spec/terms-definitions/doctag.md 
spec/terms-definitions/guide.md 
spec/terms-definitions/normative.md
```
#### 2. Splitter-tool

See [splitter tool documentation](./tools#splitter-tool)

It's about file management. It's in line with how static website generator generally work. So, be aware that you only organize your files in the migration process, you then configure your configuration files and you're good to go. 

#### Next steps
Spec-Up-T will:

- create the `terms-index.json` in the root of the repo
- generate the glossary in `index.html`
- creates `specs-generated.json` in the output directory, DON'T TOUCH


### Feel free to reorganize the order of term in the glossary
See [Migration reorganize glossary](./migration#feel-free-to-reorganize-the-order-of-term-in-the-glossary)
  

#### Npm run

Go into the menu

```
npm run menu
```

Add new terms: option 6

Generate the specification

```
npm run menu
1
```

It can take some time, and you should see multiple lines of output during installation.

When the prompt is visible again, you should now have a Spec-Up-T install of your former Spec-Up install.

### Push repo to Github

## Organize your Terminology data
- Split your Terms and Definition into separate files under a directory in `/spec` directory

## Archive

Archive the repo of your old Spec-Up repo and site, e.g.,  `Main-KERI-glossary-OLD`.
