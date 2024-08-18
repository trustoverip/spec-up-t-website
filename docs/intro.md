---
sidebar_position: 1
---

# Introduction

## Intro

*Spec-Up-T* is a tool that helps you write specifications. It is a tool for writing in Markdown and creates *one* `index.html` file. This `index.html` file is stand-alone and can be hosted on any webserver. Or double click it and it will open.

The code is available [on Github](https://github.com/blockchainbird/spec-up-t).

**Spec-Up-T** is based on **Spec-Up** and some of the content on this website is taken from the [Spec-Up website](https://identity.foundation/spec-up/).

## History

Spec-Up-T is based on Spec-Up ([Spec-Up on Github](https://github.com/decentralized-identity/spec-up)).

Spec-Up is a tool provided by [DIF](https://github.com/decentralized-identity) (Decentralized Identity Foundation) and created by [Daniel Buchner](https://github.com/csuwildcat).

<div class='image-medium center'>
![Logo ToIP and DIF combined](/img/logo.svg)
</div>

From the Spec-Up documentation: “*Spec-Up* is a technical specification development tool that enables you to create rich specification documents for standards bodies and engineering projects by writing in an extended version of markdown that features all the bells and whistles - for example: advanced syntax highlighting, notice blocks, complex tables, charts, UML diagrams, and more.”
| Spec-Up | Spec-Up-T |
|----------------|----------------|
| <div class='image-small'>![DIF Logo](/img/logo-dif.svg)</div>Decentralized Identity Foundation | <div class='image-small'>![ToIP Logo](/img/logo-toip.svg)</div>Trust over IP |
| “Together we're building a new identity ecosystem” | “Developing a complete architecture for Internet Digital Trust. And a better Internet for everyone.” |
| [Spec-Up on Github](https://github.com/decentralized-identity/spec-up) | [Spec-Up-T on Github](https://github.com/blockchainbird/spec-up-t) |
| [DIF website](https://identity.foundation/)  | [ToIP website](https://trustoverip.org/)  |

*Spec-Up-T* is an expansion of [DIF's Spec-Up](https://github.com/decentralized-identity/spec-up) specifically for the needs of the Trust-over-IP foundation. Read more in the elaborate motivation in this technical article: [How it came to be](how-it-came-to-be.md).

## Spec-Up-T

Spec-Up-T stays in sync with Spec-Up, and currently adds the following extra functionality:
1. Search & Find (not the same as the browser search)
2. Splitter for Terms and Definition section following the [Termininology Governance Guide](https://trustoverip.github.io/ctwg-terminology-governance-guide/) and various meeting report since [CTWG April 2024](https://wiki.trustoverip.org/display/HOME/2024-04-22+CTWG+Meeting+Notes)
3. External Reference (xref) functionality (To Do: add link)
4. Small User Interface enhancements (back to top button, automatic copying of urls when clicking on anchors (“$”), menu-item highlighting)



*Spec-Up* and *Spec-Up-T* work on *Github*. The specification is stored in a Github repo. Editing can be done locally in a suitable editor (Visual Studio Code is widely used), or can be done web-based via the editor provided by Github if you are logged in.

*Github Actions* is a convenient way to automate things within Github by creating *workflows*. For example, you can create a workflow that generates an updated version of the specification.


## Roles

The following roles can be distinguished:

| Role               | Description                                                                                       | Guide Link                                               |
|--------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Content Author     | Focusses on content and concepts of the group he/she belongs to.                                  | [Content Author Guide](content-authors-guide/introduction) |
| Terminology Author | Focusses on term definitions covering concepts of the group he/she belongs to.                    | [Terminology Author Guide](terminology-authors-guide/introduction) |
| Curator            | Checks logical consistency & meaning of term definition in a certain context.                      | [Curator Guide](curators-guide/introduction)             |
| Reader             | Reads concepts in text and terminology in glossaries.                                             | [Reader Guide](readers-guide/introduction.md)            |
| Admin              | Installs, updates and maintains Spec-Up-T.                                                        | [Admin Guide](admins-guide.md)                           |
| Developer          | Adds new functionality to Spec-Up-T.                                                              | [Developer Guide](developers-guide.md)                   |


## Markdown

Authors must write in Markdown.

Spec-Up-T is a simple tool that auto-generates specs from markdown. The version of markdown Spec-Up-T uses contains all the same features you might expect from common implementations, like GitHub, but adds much more, including notice blocks, complex tables, charts, advanced syntax highlighting, UML diagrams, etc.

> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.

Read more about [Markdown](https://www.markdownguide.org/getting-started/)
