---
sidebar_position: 1
---

# GitHub Repositories

There are currently **two** repositories that contain **three** components.

1. [**Spec-Up-T Starterpack**](https://github.com/trustoverip/spec-up-t-starter-pack) ([npm package](https://www.npmjs.com/package/create-spec-up-t))
2. [**Spec-Up-T**](https://github.com/trustoverip/spec-up-t) ([npm package](https://www.npmjs.com/package/spec-up-t))

Ad 1: **The Spec-Up-T Starterpack**

- 1a: **Spec-Up-T boilerplate** containing the markdown files containing the texts such as specifications and terms plus definitions
- 1b: **Installer files** that copy this Spec-Up-T boilerplate to the desired location

Ad 2: **The Spec-Up-T repository**: an **npm package** (created from the Spec-Up-T repository) that is installed after the Spec-Up-T installation is copied to the desired location

Schematic representation of how the repositories relate to each other.

```sh

(1 ) Spec-Up-T starterpack
(1b)  └ installer file 1
(1b)  └ installer file 2
(1b)  └ installer file 3
      └ …
(1a)  └ Spec-Up-T boilerplate
        └ node_modules
(2)       └ spec-up-t
```
