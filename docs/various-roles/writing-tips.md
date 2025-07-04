---
sidebar_position: 1
---

# Writing tips

We have one tip for you about how to use the Spec-Up-T specific tags in instructions, so they are not processed.

## Comments in Markdown

As [explained on Stackoverflow](https://stackoverflow.com/a/20885980) this is the best way to write comments in Markdown:

```markdown
[//]: # (This may be the most platform independent comment)
```

This is a common convention in Markdown to include comments that are not rendered in the final output. Everything inside `[//]: # ( ... )` is ignored by Markdown processors, so it's useful for adding notes, section markers, or instructions for editors and tools without affecting the visible document.

## Backslash Escape Mechanism

### Overview

The Spec-Up tool supports an escape mechanism that allows you to display substitution tag syntax literally in your documentation. This is useful when writing instructions about how to use the tags themselves, or when you need to show tag syntax as examples.

### Quick Start

Use a single backslash before the opening brackets to display any tag literally:

```markdown
\[[def: example]]  →  renders as: [[def: example]]
\[[xref: spec, term]]  →  renders as: [[xref: spec, term]]
\[[tref: spec, term]]  →  renders as: [[tref: spec, term]]
\[[spec: specification]]  →  renders as: [[spec: specification]]
```

### Supported Syntax

| Input                | Output              | Description         |
| -------------------- | ------------------- | ------------------- |
| `\[[def: term, id]]` | `[[def: term, id]]` | Literal display     |
| `[[def: term, id]]`  | Normal definition   | Standard processing |

**Supported Tag Types**: All tag types are supported: `def`, `xref`, `tref`, `spec`

### Examples

#### Writing Instructions

When documenting how to use Spec-Up tags:

```markdown
### How to Create Definitions

To create a definition, use the syntax \[[def: term-name, synonym1, synonym2]].

For example:
- \[[def: authentication, auth]] creates a definition for "authentication"
- \[[def: credential, cred]] creates a definition for "credential"

### How to Create References

To reference a term, use \[[ref: term-name]].
To reference external terms, use \[[tref: spec-name, term]].
```

#### Mixed Content

You can mix escaped and normal tags in the same document:

```markdown
# Documentation Example

Normal processing: [[def: identifier, id]]
~ A unique identifier used in the system.

Escaped syntax examples:
- Use \[[def: term, id]] to define terms
- Use \[[xref: id]] for cross-references
- Use \[[tref: spec, term]] for external references

The escaped tag displays as \[[def: escaped]], while the normal tag [[ref: identifier]] creates a working link.
```

#### Edge Cases

```markdown
Multiple escaped tags: \[[def: first]] and \[[xref: second]] in one line.
Escaped tag at start: \[[def: start]] of line.
Escaped tag at end: \[[def: end]]
No space: text\[[def: attached]]right next to it.
```
