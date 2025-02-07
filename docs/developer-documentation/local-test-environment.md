---
sidebar_position: 6
---

import PackageJsonScript from '../_shared-content/package-json-script.md';

# Local test environment

As a developer, before you package your code to an npm package, you want to test it locally.

You can do that as follows. Assuming you have a Spec-Up-T installation running locally:

## 1. Open `/package.json` and look for the `script` section

<PackageJsonScript />

## 2. Replace it with this:

```json
"scripts": {
    "edit": "node -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t')()\"",
    "render": "node --no-warnings -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/index.js')({ nowatch: true })\"",
    "dev": "node -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t')({ dev: true })\"",
    "collectExternalReferencesCache": "node --no-warnings -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/src/collect-external-references.js').collectExternalReferences({cache: true})\"",
    "collectExternalReferencesNoCache": "node --no-warnings -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/src/collect-external-references.js').collectExternalReferences({cache: false})\"",
    "topdf": "node -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/src/create-pdf.js')\"",
    "freeze": "node -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/src/freeze.js')\"",
    "references": "node -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/src/references.js')\"",
    "help": "cat help.txt",
    "menu": "bash ./main.sh",
    "addremovexrefsource": "node --no-warnings -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/src/add-remove-xref-source.js')\"",
    "configure": "node --no-warnings -e \"require('/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t/src/configure.js')\"",
    "postinstall": "node postinstall-message.js"
}
```

## 3. Replace with actual path

And replace `/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t` with your actual path.
