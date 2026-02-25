# Create a Zenodo DOI

This is a temporary documentation of how to create Zenodo DOI

## What is a Zenodo DOI?

A Zenodo DOI (Digital Object Identifier) is a persistent, universally recognized identifier assigned to research outputs and datasets hosted on Zenodo, an open-access repository developed by CERN. A DOI provides a permanent link to your work, ensuring that it remains accessible even if the URL changes, and allows for proper attribution and citation across the scientific community. By creating a Zenodo DOI, you make your specification or research artifact citable, discoverable in academic databases, and ensures long-term preservation of your work.

Below is the description of a specific use case for https://github.com/trustoverip/kswg-acdc-specification.

Steps:

- Merge https://github.com/henkvancann/kswg-acdc-specification   (toDOI) into https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Run `npm run custom-update` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Run `npm run menu 4` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- git fetch https://github.com/trustoverip/kswg-acdc-specification  (main) 
- git merge https://github.com/trustoverip/kswg-acdc-specification  (main) into https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) as follows: `git merge -X ours toip/main`
- push to remote https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Create PR: https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) offers a PR to https://github.com/trustoverip/kswg-acdc-specification  (main)
- PR is accepted and merged

Next round:

- In `spec-head.md` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) change `**Specification Status**: v1.0` to `**Specification Status**: v1.0 Draft`
- Create a release named `v1.0-draft`: https://github.com/kordwarshuis/kswg-acdc-specification at the right under “Releases”, “Create a new release”
- First create a new tag: `v1.0-draft`, enter in modal, and confirm, you will return to the page
- Enter Release title: `v1.0-draft` (can be the same as the tag, but doesn't have to be)
- Check “Pre-release”
- Results in: https://github.com/kordwarshuis/kswg-acdc-specification/releases/tag/v1.0-draft
- Go to https://help.zenodo.org/docs/deposit/describe-records/reserve-doi/
- Go to https://zenodo.org/me/uploads 
- Click New Upload
- To be continued