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
