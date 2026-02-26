# Create a Zenodo DOI

This is a temporary documentation of how to create Zenodo DOI

## What is a Zenodo DOI?

A Zenodo DOI (Digital Object Identifier) is a persistent, universally recognized identifier assigned to research outputs and datasets hosted on Zenodo, an open-access repository developed by CERN. A DOI provides a permanent link to your work, ensuring that it remains accessible even if the URL changes, and allows for proper attribution and citation across the scientific community. By creating a Zenodo DOI, you make your specification or research artifact citable, discoverable in academic databases, and ensures long-term preservation of your work.

Below is the description of a specific use case for https://github.com/trustoverip/kswg-acdc-specification. This will be the basis for a generic instruction.

## Step 1: Get the repo ready

- Merge https://github.com/henkvancann/kswg-acdc-specification   (toDOI) into https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Run `npm run custom-update` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Run `npm run menu 4` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- git fetch https://github.com/trustoverip/kswg-acdc-specification  (main) 
- git merge https://github.com/trustoverip/kswg-acdc-specification  (main) into https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) as follows: `git merge -X ours toip/main`
- push to remote https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI)
- Create PR: https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) offers a PR to https://github.com/trustoverip/kswg-acdc-specification  (main)
- Accept PR and merge

## Step 2: Generate and use the Zenode DOI

:::info

Global description of the next steps: Create a DOI first, include it in your Spec-Up-T document, create a GitHub Release (that contains the text with the DOI), upload the automatically generated ZIP file of that release to Zenodo. Ready.

:::


- Go to https://help.zenodo.org/docs/deposit/describe-records/reserve-doi/
- Go to https://zenodo.org/uploads/new

  ![Alt text](/img/DOI/zenodo.org-uploads-new-1.png)

- Choose “No, I need one”
  
  The following text appears: “**Reserve a DOI by pressing the button (so it can be included in files prior to upload). The DOI is registered when your upload is published.**”

  ![Alt text](/img/DOI/zenodo.org-uploads-new-2.png)

- Generate a DOI:

  ![Alt text](/img/DOI/zenodo.org-uploads-new-3.png)

- Make a working URL of the DOI by prepending `10.5281/zenodo.18785919` with `https://doi.org/`, so you have this: `https://doi.org/10.5281/zenodo.18785919`
- Paste this URL into your Spec-Up-T document (preferably at the top somewhere). Spec-Up-T will create a clickable link after rendering
- In `spec-head.md` on https://github.com/kordwarshuis/kswg-acdc-specification  (toDOI) in the first line below the heading (“Authentic Chained Data Containers (ACDC)”) change `**Specification Status**: v1.0` to `**Specification Status**: v1.0 Draft`
- Create a release named `v1.0-draft`: https://github.com/kordwarshuis/kswg-acdc-specification at the right under “Releases”, “Create a new release”
- First create a new tag: `v1.0-draft`, enter in modal, and confirm, you will return to the page
- Enter Release title: `v1.0-draft` (can be the same as the tag, but doesn't have to be)
- Check “Pre-release”
- Results in: https://github.com/kordwarshuis/kswg-acdc-specification/releases/tag/v1.0-draft
- Upload the automatically generated ZIP file of that release to Zenodo via the `Drag and drop files` / `Upload files` section on the Zenodo page, which is above the section where you can generate a DOI
