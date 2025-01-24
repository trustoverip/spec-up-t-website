Terms definition optionally in various languages and optionally in various user levels are stored in the `terms-definitions` folder also in the spec directory.

Content is stored in markdown files under the `spec` directory.

both resulting in single-file html servable from any webserver:


- - - 

---
sidebar_position: 10
---

# Technical introduction

In short, it comes down to this: as a user, you only need to consider the following directories: `spec/` and `docs/`.

## `spec/`

You will place the source files you create yourself in this directory. The format is markdown. Here, you write your content.

## `docs/`

This is the directory where the final `index.html` is created. This file is what you end up consuming as a reader. You will also find a version history here.

## Images

Serve your assets like images, sound files, and videos from an external domain. We consider this common practice.

Do this:
```markdown
![your image alt text](full-url)
```

Please refrain from:

```markdown
![local image alt text](local-url-or-path)
```

:::tip

If you aren't contributing to an existing Spec-Up-T project and want to create one yourself, you will have to install Spec-Up-T to start using it. Go straight to the [installation section](../../getting-started/installation.md) for instructions. If you are contributing to an existing Spec-Up-T project you can contribute to content directly within GitHub's web editor (for example) by editing and adding the appropriate markdown files.

:::
