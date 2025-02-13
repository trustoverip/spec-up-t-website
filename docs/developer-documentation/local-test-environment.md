---
sidebar_position: 6
---

import PackageJsonScript from '../_shared-content/package-json-script.md';

# Local test environment

As a developer, before you package your code to an npm package, you want to test it locally.

You can do that as follows. Assuming you have a Spec-Up-T installation running locally:

## 1. Open `/package.json` and look for the `script` section

<PackageJsonScript />

## 2. Find & Replace:

In the `scripts` section:

Find

```sh
'spec-up-t/
```

Replace it with:

```sh
'/Your/path/to/local/spec-up-t/repo/
```

where `/Your/path/to/local/spec-up-t/repo/spec-up-t/spec-up-t` should be the actual path on your machine.
