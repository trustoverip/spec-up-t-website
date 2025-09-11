---
sidebar_position: 1
---

# Introduction

An Admin role is a supporting role in Spec-Up-T. 

## Use cases

1. The Admin splits a terminology file that contains multiple definition in spec-up syntax (mostly originated from a terminology editor) into single definition files in the right subdirectory of the terms-definition directory.

2. The Admin updates the **npm package called Spec-Up-T**. This is relevant when modules are depreciated or new modules offer crucial features.

3. The Admin update its **own installation**, which he installed with the installer, using the Spec-Up-T npm package.

4. _Not yet operational!_ The Admin adds a new language subdirectory to terms-definition directory and specifies the right API calls to chatGPT for a language and/or user-level translation from the source terms definition.

5. The Admin migrates a legacy Spec-Up (DIF) to the latest Spec-Up-T. He/she removes the obsolete files that Spec-Up has by hand.

## Solutions

### Add 2 and 3. Updates
Use case 2, [update Spec-Up-T](../../maintenance-tasks/updating.md), has to be followed by Use cases 3: [Update own installation](../../maintenance-tasks/updating.md) (ToDo: add anchor links)

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

See [Migrate From Spec-Up](../../advanced-features/migration)