---
sidebar_position: 1
---

# Introduction

## Intro

A quick demo of how the installation and main menu works.

<video controls autoplay muted poster={require('@site/static/video/spec-up-t-menu.jpg').default}>
    <source src={require('@site/static/video/spec-up-t-menu.mp4').default} type="video/mp4" />
 Your browser does not support video tags.
</video>

[Link to the video](/video/spec-up-t-menu.mp4)


**Spec-Up-T** is a tool that helps you write specifications. It is a tool for writing in Markdown and creates *one* `index.html` file.

**This `index.html` file is the actual specification file that is the goal of it all.**

This `index.html` file is stand-alone and can be hosted on any web server. Or double-click it, and it will open in a browser.

The Spec-Up-T code is available [on Github](https://github.com/blockchainbird/spec-up-t).

Spec-Up-T is based on **Spec-Up**, and some of the content on this website is taken from the [Spec-Up website](https://identity.foundation/spec-up/) and [repo](https://github.com/decentralized-identity/spec-up).

:::tip

You will have to install Spec-Up-T to start using it. Go straight to the [admin section](various-roles/admins-guide/admins-guide.md) for instructions.

:::

## History

Spec-Up-T is based on Spec-Up ([Spec-Up on Github](https://github.com/decentralized-identity/spec-up)).

Spec-Up is a tool provided by [DIF](https://github.com/decentralized-identity) (Decentralized Identity Foundation) and created by [Daniel Buchner](https://github.com/csuwildcat).

<div class='image-medium center'>
![Logo ToIP and DIF combined](/img/logo.svg)
</div>

From the Spec-Up documentation: “*Spec-Up* is a technical specification development tool that enables you to create rich specification documents for standards bodies and engineering projects by writing in an extended version of markdown that features all the bells and whistles - for example, advanced syntax highlighting, notice blocks, complex tables, charts, UML diagrams, and more.”
| Spec-Up | Spec-Up-T |
|----------------|----------------|
| <div class='image-small'>![DIF Logo](/img/logo-dif.svg)</div>Decentralized Identity Foundation | <div class='image-small'>![ToIP Logo](/img/logo-toip.svg)</div>Trust over IP |
| “Together we're building a new identity ecosystem” | “Developing a complete architecture for Internet Digital Trust. And a better Internet for everyone.” |
| [Spec-Up on Github](https://github.com/decentralized-identity/spec-up) | [Spec-Up-T on Github](https://github.com/blockchainbird/spec-up-t) |
| [DIF website](https://identity.foundation/)  | [ToIP website](https://trustoverip.org/)  |

*Spec-Up-T* is an expansion of [DIF's Spec-Up](https://github.com/decentralized-identity/spec-up) specifically for the needs of the Trust-over-IP foundation. Read more in the elaborate motivation in this technical article: [How it came to be](how-it-came-to-be.md).

## Spec-Up-T

Spec-Up-T stays in sync with Spec-Up and currently adds the following extra functionality:

1. Search & Find (only searches the main content, unlike the browser search);
2. Splitter for Terms and Definition section following the [Termininology Governance Guide](https://trustoverip.github.io/ctwg-terminology-governance-guide/) and various meeting reports since [CTWG April 2024](https://wiki.trustoverip.org/display/HOME/2024-04-22+CTWG+Meeting+Notes)
3. External Reference (xref) functionality
4. Small User Interface enhancements (back-to-top button, automatic copying of urls when clicking on anchors (“$”), menu-item highlighting, definitions collapse button for quick terms-only listing)

*Spec-Up* and *Spec-Up-T* work on *Github*. The specification is stored in a Github repo. Editing can be done locally in a suitable editor (Visual Studio Code is widely used), or can be done web-based via the editor provided by Github if you are logged in.

*[Github Actions](glossary#github-actions)* is a convenient way to automate things within Github by creating *workflows*. For example, you can create a workflow that generates an updated version of the specification.