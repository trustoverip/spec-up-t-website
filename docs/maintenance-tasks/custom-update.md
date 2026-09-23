---
sidebar_position: 3
---

# Updating Spec-Up-T (custom-update)

:::tip Steps

From 1.x:

```bash
npx spec-up-t@latest custom-update
```

After 2.1.0:

```bash
npm run custom-update
```

The command prints a plan and asks before it writes. `--yes` applies the plan without asking. `--dry-run` prints the plan only.

Commit the changes.

:::

Use this when your spec repo already runs Spec-Up-T and you want a newer `spec-up-t` package (scripts, boilerplate files, recommended dependencies).

This is not the same as [migrating an old Spec-Up install](./updating.md).

New projects are a separate path. `npx create-spec-up-t` installs whatever `spec-up-t` version the starter pack pins. See [Starter Pack Architecture](../developer-documentation/starter-pack-architecture.md).

## From 1.x, or from the old `node -e` script, to 2.1.0

You do not have to install 2.0.0 first.

The GitHubUi “Custom Update” button does not jump 1.x → 2.1.0. `npm update` will not cross a major.

As of 2.1.0, this script no longer runs the update:

```text
node -e "require('spec-up-t/src/install-from-boilerplate/custom-update.js')"
```

It exits with an error and prints the repair command. In the root of your spec repo, run:

```bash
npx spec-up-t@latest custom-update
```

`@latest` matters. Unqualified `npx spec-up-t` uses the local install, which is the old code.

That one command is the path from 1.x to 2.1.0, including repos that skipped 2.0.0. Commit the rewritten `package.json` and any other files the update changed.

This two-step sequence worked on 2.0.0 and does **not** work on 2.1.0 while `package.json` still has the `node -e` script:

```bash
npm install spec-up-t@2.1.0
npm run custom-update
```

The second command fails and does not rewrite `package.json`. Use `npx spec-up-t@latest custom-update` instead.

## After a successful 2.1.0 update

```bash
npm run custom-update
```

The script is then:

```text
spec-up-t custom-update
```

That uses the local install, so later updates stay on the version you installed. GitHubUi and the Actions “Custom update” option still run `npm run custom-update`.

Repos that already completed the 2.0.0 update have:

```text
node ./node_modules/spec-up-t/src/install-from-boilerplate/custom-update.js
```

That path still runs the update. The next successful run rewrites it to `spec-up-t custom-update`.

## Escape hatch

Always the package from npm, not the local install:

```bash
npx spec-up-t@latest custom-update
```

## Upgrading to 2.2.0

From 2.2.0, `custom-update` prints a plan and does not write unless you confirm on a terminal or pass `--yes`. GitHub Actions has no prompt.

The GitHubUi Custom Update button runs whatever `menu.yml` is already in the repo. Until the custom-update case is:

```bash
npm run custom-update -- --yes
```

the button prints the plan and the job fails. Nothing is written.

Do one of these once, then commit:

```bash
npx spec-up-t@latest custom-update --yes
```

or edit `.github/workflows/menu.yml` so that case is the line above.

The `--yes` command rewrites `menu.yml`. After the commit, the button applies the plan.

## Preview and apply

`custom-update` prints a plan before it writes. The plan lists script changes, file changes, dependency changes, `.gitignore` patterns to add, `npm install`, and per-spec snapshot copies or tracked build-dir renames.

On your machine it then asks `Apply this plan? [y/N]`.

```bash
npx spec-up-t@latest custom-update --dry-run
npx spec-up-t@latest custom-update --yes
npm run custom-update -- --yes
```

`--dry-run` prints the plan and leaves the repo as it is. `--yes` applies the plan without asking. The boilerplate `menu.yml` passes `--yes`. See [Upgrading to 2.2.0](#upgrading-to-220) when the button still runs the old line.

## Workflow files

Known boilerplate workflows are copied over the files already in the repo:

- `.github/workflows/menu.yml` (this file keeps the **custom-update** choice)
- `.github/workflows/render-and-deploy.yml`
- `.github/workflows/zenodo-update.yml`

Known stale files are removed, including `.github/workflows/set-gh-pages.yml`. Any other file under `.github/workflows` stays.

## When to run it

For a Trust over IP specification, the working group decides when to take a Spec-Up-T release. The command applies an update; it does not schedule one. See [When to run custom-update](./when-to-update.md).

## What custom-update does not do

- It does not create a git commit. `menu.yml` or you commit the result.
- It does not read dependency versions from the starter-pack repository. Those versions are shipped inside `spec-up-t`.
- It does not delete extra GitHub Actions workflows. It replaces the known boilerplate workflows listed above.
- GitHubUi does not need a code change. It still dispatches `menu.yml`. That workflow passes `--yes`.
