# Create a Zenodo DOI

This page documents how to create a Zenodo DOI.

## What is a Zenodo DOI?

A Zenodo DOI (Digital Object Identifier) is a persistent, universally recognized identifier assigned to research outputs and datasets hosted on Zenodo, an open-access repository developed by CERN. A DOI provides a permanent link to your work, ensuring it remains accessible even if the URL changes and allowing for proper attribution and citation across the scientific community. By creating a Zenodo DOI, you make your specification or research artifact citable, discoverable in academic databases, and ensure the long-term preservation of your work.

The steps below describe a specific use case for https://github.com/trustoverip/kswg-acdc-specification and serve as the basis for a generic set of instructions.

## Step 1: Get the repo ready

- Merge https://github.com/henkvancann/kswg-acdc-specification   (toDOI) into https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Run `npm run custom-update` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Run `npm run menu 4` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- git fetch https://github.com/trustoverip/kswg-acdc-specification  (main) 
- git merge https://github.com/trustoverip/kswg-acdc-specification  (main) into https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) as follows: `git merge -X ours toip/main`
- push to remote https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Create PR: https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) offers a PR to https://github.com/trustoverip/kswg-acdc-specification  (main)
- Accept PR and merge

## Step 2: Generate and use the Zenodo DOI

:::info

Overview of the next steps: first reserve a DOI, include it in your Spec-Up-T document, create a GitHub Release containing the document with the DOI, then upload the automatically generated ZIP file of that release to Zenodo.

:::


- Go to https://help.zenodo.org/docs/deposit/describe-records/reserve-doi/
- Go to https://zenodo.org/uploads/new

  ![Alt text](/img/DOI/zenodo.org-uploads-new-1.png)

- Choose “No, I need one”
  
  The following text appears: “**Reserve a DOI by pressing the button (so it can be included in files prior to upload). The DOI is registered when your upload is published.**”

  ![Alt text](/img/DOI/zenodo.org-uploads-new-2.png)

- Generate a DOI:

  ![Alt text](/img/DOI/zenodo.org-uploads-new-3.png)

- Construct a working URL by prefixing the DOI with `https://doi.org/`, resulting in: `https://doi.org/10.5281/zenodo.18785919`
- Paste this URL into your Spec-Up-T document (preferably near the top). Spec-Up-T will render it as a clickable link
- In `spec-head.md` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) in the first line below the heading (“Authentic Chained Data Containers (ACDC)”) change `**Specification Status**: v1.0` to `**Specification Status**: v1.0 Draft`
- Create a release named `v1.0-draft`: on the right side of https://github.com/kordwarshuis/kswg-acdc-specification, under "Releases", click "Create a new release"
- Create a new tag: `v1.0-draft`, enter it in the modal, and confirm — you will be returned to the release page
- Enter a release title: `v1.0-draft` (this can match the tag name, but it does not have to)
- Check “Pre-release”
- Results in: https://github.com/kordwarshuis/kswg-acdc-specification/releases/tag/v1.0-draft
- Upload the automatically generated ZIP file of that release to Zenodo via the `Drag and drop files` / `Upload files` section on the Zenodo page, which is above the section where you can generate a DOI
