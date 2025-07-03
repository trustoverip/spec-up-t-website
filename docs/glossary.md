---
sidebar_position: 11
---

# 📖 Glossary

This is a glossary with some terms that you need to know in order to understand working with Spec-Up-T.

This glossary was not created in Spec-Up-T, it could have been, but to avoid confusion we did not.

## The Specification

When we talk about **The Specification** here, we mean the result of our efforts, located in an `index.html` file. We call this The Specification.

## Git and Github

GitHub is a web-based platform used primarily for version control and collaborative software development. It allows developers to host, manage, and track changes to their code using Git, a distributed version control system.

GitHub provides a user-friendly interface for working with Git, enabling developers to collaborate on projects, review each other's code, manage tasks, and deploy software. In addition to hosting code repositories, GitHub also offers features like issue tracking, project management tools, and integration with other development services, making it a central hub for many software development workflows.


## Github Actions

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows developers to automate workflows directly within their GitHub repositories. With GitHub Actions, you can create custom workflows that are triggered by specific events, such as pushing code, creating pull requests, or opening issues. These workflows can include steps for building, testing, and deploying code, among other tasks.

GitHub Actions uses YAML files to define workflows, making it flexible and customizable. It integrates seamlessly with GitHub, allowing developers to automate a wide range of tasks related to their software development process, improving efficiency and ensuring that code changes are automatically tested and deployed in a consistent manner.

## Spec-Up

**Spec-Up** is the original technical specification development tool created by Daniel Buchner at the Decentralized Identity Foundation (DIF). It enables you to create rich specification documents for standards bodies and engineering projects by writing in an extended version of markdown. Spec-Up-T is based on and extends Spec-Up while maintaining compatibility with its core features.

## Spec-Up-T

**Spec-Up-T** (where "T" stands for "Terms" and "ToIP") is an enhanced version of DIF's Spec-Up, developed by the Trust over IP Foundation. It extends the original Spec-Up with additional functionality focused on terminology management, external references, and enhanced collaborative features while maintaining all the capabilities of the original Spec-Up.

## DIF

**DIF** stands for Decentralized Identity Foundation, the organization that created and maintains the original Spec-Up tool. DIF works on building a new identity ecosystem through various projects and specifications.

## ToIP

**ToIP** stands for Trust over IP Foundation, the organization behind Spec-Up-T. ToIP develops a complete architecture for Internet Digital Trust and works to create a better Internet for everyone.

## npm package

An **npm package** is a reusable code library that can be installed and managed using npm (Node Package Manager). Spec-Up-T is distributed as an npm package called `spec-up-t`, which contains all the build tools and processing scripts needed to transform markdown files into rendered specifications.

## Starterpack

The **Starterpack** refers to the Spec-Up-T installer repository that provides the initial setup for new Spec-Up-T projects. When you run `npx create-spec-up-t`, it uses the starterpack to copy the boilerplate files and set up your project structure with all necessary dependencies.

## Boilerplate

The **boilerplate** is a set of template files and directories that provide the initial structure for a new Spec-Up-T project. It includes sample markdown files, configuration files, assets, and the basic directory structure needed to create a specification or glossary.

## specs.json

**specs.json** is the main configuration file for a Spec-Up-T project. It contains settings that dictate how the tool generates and outputs the specification documents, including external specification references, styling options, and build parameters.

## Template Tags

**Template tags** are special syntax elements used in Spec-Up-T markdown to create dynamic content. Examples include `[[def: term]]` for definitions, `[[xref: spec, term]]` for external references, and `[[spec: name]]` for specification references.

## GitHub Pages

**GitHub Pages** is a static site hosting service provided by GitHub that allows you to publish websites directly from a GitHub repository. Spec-Up-T projects are typically deployed to GitHub Pages, making specifications accessible via github.io URLs.

## Version Management

**Version management** in Spec-Up-T refers to the ability to track changes and create snapshots of specifications over time. This includes features like the freeze function that creates versioned copies of specifications and the ability to maintain multiple versions of term definitions.
