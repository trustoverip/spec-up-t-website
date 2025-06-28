---
sidebar_position: 0
---

# Intro

## Runtime Architecture Clarification

This section serves to clarify that there is no active runtime server-side code for this project. The Spec-Up-T specification is implemented as a static `index.html` file and does not require any server-side technologies during runtime.

All Node.js processing happens during the build phase to generate the static HTML output. These build-time scripts handle:

- Markdown parsing and processing
- Term definition resolution
- External reference collection
- Asset compilation and bundling
- HTML template generation