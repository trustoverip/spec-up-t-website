---
sidebar_position: 1
---

# Intro

An Admin role is a supporting role in Spec-Up-T. 

## Use cases

1. The Admin splits a terminology file that contains multiple definition in spec-up syntax (mostly originated from a terminology editor) into single definition files in the right subdirectory of the terms-definition directory.

2. The Admin updates the **npm package called Spec-Up-T**. This is relevant when modules are depreciated or new modules offer crucial features.

3. The Admin update its **own installation**, which he installed with the installer, using the Spec-Up-T npm package.

4. _Not yet operational!_ The Admin adds a new language subdirectory to terms-definition directory and specifies the right API calls to chatGPT for a language and/or user-level translation from the source terms definition.

5. The Admin migrates a legacy Spec-Up (DIF) to the latest Spec-Up-T. He/she removes the obsolete files that Spec-Up has by hand.

## Solutions

### Add 1. Convenience tool splitting a file into atomic single definition files
The input of a [Splitter tool](./tools.md#splitter-tool) is a markdown file with multiple spec-up definition, references, and external references. 

You can do the splitting operation by hand, the splitter tool is just a convenience tool for large glossaries.

### Add 2 and 3. Updates
Use case 2, [update Spec-Up-T](./updating.md#updating-the-npm-package-called-spec-up-t), has to be followed by Use cases 3: [Update own installation](./updating.md#updating-your-installation)

### Add 4. Languages
_Not yet operational!_ However, The design is:

#### Data
_Not yet operational!_ 
- one reference source language, which is English for example
- the most comprehensive definition of concept covered by a term
- it matches the Spec-Up-T directory structure: atomic definitions in markdown files with spec-up syntax under a `terms-definition` folder in the `spec` folder.
- per language-userlevel an extra subdirectory with this naming convention:
   _languagecode-LVL1_, _languagecode-LVL2_, ..., _languagecode-LVLn_

   Since the reference source-files are LVLn, where n is the most comprehensive description.

#### Functionality
_Not yet operational!_ 
 - AI will convert the reference source data and export the resulting files into directories named in this convention:

  _languagecode-LVLx_

For example:
EN is the reference language and we have one other language (Dutch) and two user levels in total.

`terms-definition` folder contains:

- files that have the characteristics: English, user level 2.
- subdirectories EN-LVL1, NL-LVL1, NL-LVL2

An essential feature of this AI conversion is the linking back to the original source in the generated content. So a Reader always has a reference back to the curated source in the original language. Just imagine how important this is in legally enforced specifications: you don't want to be liable for over-simplified or incorrectly translated rules and regulations.
### Add 5. Migration

Preparation:

Go to the repo to be migrated on your local machine and Fetch the legacy Spec-Up install from github production server.

For example:

```
cd my-legacy-spec-up-repo
git fetch upstream
```

#### Merge specs.json

In `new-dir` copy `specs.json` to `specs.json-default`. 
Copy the legacy  `specs.json` into `new-dir` under a new name: `specs.json-legacy`
Open both the legacy `specs.json-legacy` and `specs.json` Copy these attributes over from the legacy file into `specs.json` **where the values are different**:

```          "title": 
            "spec_directory":
            "output_path": 
            "markdown_paths": [
                   | all the files listed here |
            ],
            "logo": 
            "logo_link": 
            "katex": 
            "source": {
                "host": 
                "account": 
                "repo": 
```

Example
```
            "title": "Key Event Receipt Infrastructure",
            "spec_directory": "./spec",
            "output_path": "./docs",
            "markdown_paths": [
                   spec.md
            ],
            "logo": "https://raw.githubusercontent.com/trustoverip/logo-assets/master/logos/ToIP-Logo-Color-SolidDimensional-Horizontal-LightOnDark.svg",
            "logo_link": "https://github.com/trustoverip/tswg-keri-specification",
            "katex": true,
            "source": {
                "host": "github",
                "account": "trustoverip",
                "repo": "tswg-keri-specification"
```

Now we can distinguish two approaches:

A. Start a clean Spec-Up-T install and copy content files over from the legacy Spec-Up install

B. Run Spec-Up-T updates over the legacy Spec-Up repo and clean obsolete files by hand

#### A. Fresh install

BEWARE: THIS RESULTS IN UNRELATED GIT HISTORIES!

Perform a local spec-up-t install via `npx create-spec-up-t new-dir`

Remove the instructive and placeholder .md files from the `spec` directory:
 - example-markup-in-markdown.md
 - intro.md
 - outro.md
 - terms-and-definitions-intro.md

Empty the `terms-definitions` folder
- remove term-1.md, term-2.md, term-3.md, term-4.md 



Copy the content of the legacy Spec-Up install in the spec folder, leave the `terms-definitions` folder empty, then run the [split tool](https://trustoverip.github.io/spec-up-t-website/docs/various-roles/admins-guide/tools#splitter-tool).

Now you should be up & running to test this repo, back-up the legacy Spec-Up repo to a new name and rename the Spec-Up-T `new-dir` to the name of formerly legacy Spec-Up folder.

You should be able to commit the changes and figure out how to deal with the *unrelated* histories on the github remote repository.

> Interesting use case: when legacy install uses local images -> beware!
> Suspect that the src of those images will be a full url to the repo.

#### B. Overwrite and clean up

Via this approach we keep the git history of the legacy Spec-Up install available after the Spec-Up-T migration.

Follow use case 2. and 3. Use case 2, [update Spec-Up-T](./updating.md#updating-the-npm-package-called-spec-up-t), has to be followed by Use cases 3: [Update own installation](./updating.md#updating-your-installation)

And then remove obsolete files and directories (ToDo: add link to list) by hand. This is difficult because you don't know by definition what dirs and files have been put in.

| @Kor : could you provide a list of legacy Spec-Up files and directories that we nominate to remove? |

So again., be aware during a migration that extra content may have been added by users. Always back-up before migration. Better safe than sorry.

