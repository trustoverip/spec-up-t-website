---
sidebar_position: 1
---

# Introduction

## Intro

*Spec-Up-T* is a tool that helps you write specifications. It is a tool for writing in Markdown and creates *one* `index.html` file. This `index.html` file is stand-alone and can be hosted on any webserver. Or double click it and it will open.

*Spec-Up-T* works on *Github*. The specification is stored in a Github repo. Editing can be done locally in a suitable editor (Visual Studio Code is widely used), or can be done web-based via the editor provided by Github if you are logged in.

*Github Actions* is a convenient way to automate things within Github by creating *workflows*. For example, you can create a workflow that generates an updated version of the specification.

*Spec-Up* is a technical specification development tool that enables you to create rich specification documents for standards bodies and engineering projects by writing in an extended version of markdown that features all the bells and whistles - for example: advanced syntax highlighting, notice blocks, complex tables, charts, UML diagrams, and more.

*Spec-Up-T* is an expansion of [DIF's Spec-Up](https://github.com/decentralized-identity/spec-up) specifically for the needs of the Trust-over-IP foundation. Read more in the elaborate motivation in this technical article [Spec-Up-T, the ToIP Terms extension of Spec-Up](https://hackmd.io/s1TEBBluQBSL10ZT5yRVPw)

## Extension

Spec-Up-T stays in sync with Spec-Up, and currently adds the following extra functionality:
1. Search & Find
2. Splitter for Terms and Definition section following the [Termininology Governance Guide](https://trustoverip.github.io/ctwg-terminology-governance-guide/) and various meeting report since [CTWG April 2024](https://wiki.trustoverip.org/display/HOME/2024-04-22+CTWG+Meeting+Notes)



## Roles

The following roles can be distinguished:

- [Content Author](content-author-guide/introduction), focusses on content and concepts of the group he/she belongs to.
- [Terminology Author](terminology-author-guide/introduction), focusses on term definitions covering concepts of the group he/she belongs to.
- [Curator](curator-guide/introduction), checks logical consistency & meaning of term definition in a certain context.
- [Reader](reader-guide/introduction.md), reads concepts in text and terminology in glossaries.
- [Admin](admin-guide), installs, updates and maintains Spec-Up-T.

## Markdown

Authors must write in Markdown.

Spec-Up-T is a simple tool that auto-generates specs from markdown. The version of markdown Spec-Up-T uses contains all the same features you might expect from common implementations, like GitHub, but adds much more, including notice blocks, complex tables, charts, advanced syntax highlighting, UML diagrams, etc.

> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.

Read more about [Markdown](https://www.markdownguide.org/getting-started/)
