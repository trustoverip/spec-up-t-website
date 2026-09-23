---
sidebar_position: 4
---

# When to run custom-update

`custom-update` upgrades the repository you run it in. It does not decide the moment. Maintainers do. This page is the instruction for Trust over IP specification repositories ([issue #269](https://github.com/trustoverip/spec-up-t/issues/269)).

How to run the command is on [Updating Spec-Up-T (custom-update)](./custom-update.md).

## The working group decides

A published `spec-up-t` release can wait. The working group that owns the specification agrees to take it, in its regular meeting or in the pull-request thread that group already uses for decisions between meetings.

Each repository is updated on its own, by someone who runs the command in that repository. There is no switch that updates every ToIP spec at once.

After the group agrees, one maintainer runs the update and opens a pull request. Reviewers read the printed plan and the diff, including:

- `package.json` scripts and dependency versions
- `.github/workflows/menu.yml`, `render-and-deploy.yml`, and `zenodo-update.yml` (these files are replaced, and `menu.yml` keeps the custom-update choice)
- every other file under `.github/workflows` (those stay; confirm the pull request leaves them)

Merge after that review.

## Apply before the next meeting

Apply the release before the next regular meeting when the release notes say this repository needs the version for rendering, publishing, or GitHub Actions, or when the notes describe a security fix in Spec-Up-T or in a dependency the update pins. Put that reason in the pull request.

## GitHubUi

The Custom Update button runs the update on the repository you select. Start it after the decision above.

In GitHub Actions, `menu.yml` passes `--yes`. The job prints the plan and writes it in the same run. The approval is the decision to start the workflow. To see the plan with no write, run this locally:

```bash
npx spec-up-t@latest custom-update --dry-run
```
