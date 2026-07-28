# Create a Zenodo DOI

:::info

The Zenodo DOI workflow fits into [the broader Trust over IP process for publishing a Spec-Up-T specification as a ToIP Approved Deliverable](https://lf-toip.atlassian.net/wiki/spaces/HOME/pages/767787009/ToIP+Approved+Deliverable+Process).

:::

This page explains how to assign a Zenodo DOI to a Spec-Up-T specification. It is written for people who need a permanent citation link and do not want to learn Zenodo in depth.

## What you get

A DOI is a permanent, citable link. Zenodo stores a ZIP copy of your specification repository and gives you:

- **Main ID** (Zenodo calls this the *Concept DOI*) — one ID for the work as a whole. It **never changes**. It always resolves to the latest published version.
- **Sub-ID** (Zenodo calls this a *Version DOI*) — one ID per published snapshot. Each new published version gets a **new** sub-ID.

Embed the **main ID** in the specification once you have it (after the first publish). That keeps one stable link in the document forever.

**Example DOI:** `10.5281/zenodo.18797357`

**Example markdown link:**

```markdown
[https://doi.org/10.5281/zenodo.18797357](https://doi.org/10.5281/zenodo.18797357)
```

## Where you must do this

Zenodo itself does not care which GitHub branch or repository you use.

Here we will do this on the **`main` branch** of the **original repository**, to keep it simple.

Do **all** of the following there:

- Embed the DOI in the specification source (and merge that change to `main` first)
- Create the Git tag and GitHub Release
- Upload the release ZIP to Zenodo and publish

Do not create the GitHub Release or the Zenodo record from a non-`main` branch or from a non-original repository.

## Two cases only

| Case | When | What you do on Zenodo |
| --- | --- | --- |
| **First time** | No Zenodo record exists yet | Create a new upload, reserve a DOI, publish |
| **Later adjustment / update** | A Zenodo record already exists | Open that record → **New version** → publish (new sub-ID; main ID stays) |

This guide uses the **manual** approach (you upload the GitHub Release ZIP yourself). That is required if you need the DOI **before** the ZIP is published — Zenodo’s automatic GitHub integration cannot reserve a DOI in advance.

:::note

Reserve the DOI *before* you publish. Zenodo lets you reserve it so you can put it in the document first. It becomes official only when you click Publish.

:::

---

## First time

Goal: create the Zenodo record, get the main ID + first sub-ID, and put a DOI link in the specification.

### 1. Reserve a DOI on Zenodo

- Go to [https://zenodo.org/uploads/new](https://zenodo.org/uploads/new)

  ![Zenodo new upload page](/img/DOI/zenodo.org-uploads-new-1.png)

- When asked whether you already have a DOI, choose **"No, I need one"**

  Zenodo shows: *"Reserve a DOI by pressing the button (so it can be included in files prior to upload). The DOI is registered when your upload is published."*

  ![Reserve DOI option](/img/DOI/zenodo.org-uploads-new-2.png)

- Click the button to reserve a DOI

  ![Generated DOI](/img/DOI/zenodo.org-uploads-new-3.png)

- Build the URL: `https://doi.org/` + the DOI  
  Example: `https://doi.org/10.5281/zenodo.18785919`

Keep this Zenodo draft open. You will return to it in step 4.

### 2. Put the DOI in the specification on `main`

- Paste a markdown link with the reserved DOI near the top of the source (for example in `spec-head.md`)
- Commit and push so the change lands on the original repository’s **`main`** branch

The reserved DOI is the **first sub-ID**. After you publish (step 4), Zenodo also shows the **main ID**. Prefer updating the specification to the **main ID** once it is available, so the link in the document stays stable forever.

### 3. Create a GitHub Release from `main`

On the **original repository**:

- Open **Releases** → **Create a new release**
- Create a new tag from **`main`** (for example `v1.0`)
- Enter a title, publish the release

GitHub builds a ZIP of the repository at that tag. Download that ZIP.

### 4. Upload the ZIP and publish

- Return to the Zenodo draft from step 1
- Upload the GitHub Release ZIP
- Fill in the required metadata (title, creators, description, …)
- Click **Publish**

You now have:

- a **sub-ID** for this first snapshot (the DOI you reserved)
- a **main ID** for the work as a whole (shown on the Zenodo record; never changes)

If the specification still embeds the reserved sub-ID, update it to the **main ID** when convenient (that update is a later adjustment / update below).

Details: [Zenodo — reserve a DOI](https://help.zenodo.org/docs/deposit/describe-records/reserve-doi/).

---

## Later adjustment / update

Goal: publish an updated ZIP **without** creating a second, unrelated Zenodo record. The **main ID stays**. Zenodo issues a **new sub-ID** for the new snapshot.

Do **not** start a fresh upload at `/uploads/new` for the same specification. Use **New version** on the existing record.

### 1. Update the specification on `main` (if needed)

- Make source changes on the original repository’s **`main`** branch
- If you are switching the embedded link from the first sub-ID to the **main ID**, do that here and merge to `main` before releasing

### 2. Create a new GitHub Release from `main`

Same as First time step 3: new tag on **`main`**, new release on the original repository, download the new ZIP.

### 3. Create a new Zenodo version (new sub-ID)

- Open the existing Zenodo record
- Click **New version**
- Upload the new GitHub Release ZIP (and adjust metadata if needed)
- Click **Publish**

Result:

- **Main ID** — unchanged
- **New sub-ID** — for this snapshot only

If the specification already embeds the **main ID**, you usually do not need to change the DOI text again.

Details: [Zenodo — manage versions](https://help.zenodo.org/docs/deposit/manage-versions/).

:::warning

Do not overwrite a published Zenodo record’s files as the normal update path. Zenodo treats published files as fixed. For real updates, use **New version**.  
Minor file fixes are only allowed briefly after publish (Zenodo’s own grace window); prefer **New version** unless Zenodo’s UI explicitly offers a minor file correction and you are still within that window.

:::

---

## Quick troubleshooting

### Wrong ZIP or missing DOI in the release

The release ZIP is generated from the commit the tag points to. Fix the source on **`main`**, retarget or recreate the tag at the corrected commit, confirm the release ZIP contents, then publish a Zenodo **New version** with that ZIP.

```sh
git checkout main
git pull
# ... commit fixes on main ...
git tag -d v1.0
git push origin :refs/tags/v1.0
git tag v1.0
git push origin v1.0
```

Then download the regenerated release ZIP and upload it as a Zenodo **New version** (later adjustment / update), not as a brand-new unrelated record.
