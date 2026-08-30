---
sidebar_position: 2
---

# Embedding GitHub-hosted images

The URL in your browser when you view an image on GitHub is usually **not** the image file. GitHub shows a page *around* the image (navigation, history, download). That page is HTML, even if the address ends in `.png` or `.jpg`.

If you paste that address into Markdown, HTML, a spec, or a website, the image breaks. A published page might look fine until you inspect the source and find something like:

```text
https://github.com/WebOfTrust/keri/blob/main/images/prefix.png
```

The `/blob/` path is the HTML wrapper. For embedding you need a **raw** URL that returns the file itself.

## Getting a raw image URL

Any of these three methods works.

### Copy the image address

1. Open the image file in the GitHub repository.
2. Click **Download**.
3. Right-click the displayed image and choose **Copy Image Address**.

Result: `https://raw.githubusercontent.com/WebOfTrust/keri/main/images/prefix.png`

### Copy the download link

1. Open the image file in the GitHub repository.
2. Right-click **Download** and choose **Copy Link**.

Result: `https://github.com/WebOfTrust/keri/raw/main/images/prefix.png`

### Append `?raw=true`

Add `?raw=true` to the file URL you already have. Useful when you are converting existing `/blob/` links in an editor and do not want to leave it.

Original:

```text
https://github.com/WebOfTrust/keri/blob/main/images/prefix.png
```

Modified:

```text
https://github.com/WebOfTrust/keri/blob/main/images/prefix.png?raw=true
```
