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