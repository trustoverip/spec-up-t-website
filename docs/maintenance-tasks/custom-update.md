---
sidebar_position: 3
---

# Updating Spec-Up-T (custom-update)

Use this when your spec repo already runs Spec-Up-T and you want a newer `spec-up-t` package (scripts, boilerplate files, recommended dependencies).

This is not the same as [migrating an old Spec-Up install](./updating.md).

## From 1.x to 2.x

The GitHubUi “Custom Update” button does **not** jump 1.x → 2.x. `npm update` will not cross a major.

In the root of your spec repo:

```bash
npx spec-up-t@2 custom-update
```

Also valid, two steps:

```bash
npm install spec-up-t@2
npm run custom-update
```

Commit the rewritten `package.json` and any other files the update changed.

## On 2.x

After the first successful 2.x update:

```bash
npm run custom-update
```

That is still what GitHubUi / the Actions “Custom update” option runs.

## Escape hatch

Always this package from npm, not the (possibly stale) local install:

```bash
npx spec-up-t@2 custom-update
```

Unqualified `npx spec-up-t` prefers the **local** install. `@2` (or later `@latest`) matters.

## What custom-update does not do

- It does not create a git commit. `menu.yml` or you commit the result.
- GitHubUi does not need a code change for 2.0.0.
