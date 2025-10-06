---
sidebar_position: 2
---

# Embedding GitHub-Hosted Images

## Overview

**Audience**: Content developers and documentation maintainers  
**Purpose**: Prevent and resolve broken image references  
**Outcome**: Properly functioning GitHub-hosted images with valid URLs

## Problem Statement

GitHub image URLs can be misleading. When browsing to an image file in a GitHub repository, the URL displayed in your browser's address bar may not point directly to the raw image file. Instead, it references a GitHub-generated HTML page that wraps the image with repository navigation, version history, and other interface elements.

### Example Scenario

Consider an image that appears broken on a published page (e.g., `https://trustoverip.github.io/acdc/glossary#prefix`). When you inspect the image source, you might see a URL like:

```text
https://github.com/WebOfTrust/keri/blob/main/images/prefix.png
```


Despite the `.png` extension, this URL does not return a raw image file—it returns an HTML page containing the image. This distinction is crucial for embedding images correctly.

## Understanding GitHub's URL Structure

When you commit an image to GitHub and navigate to its location in the repository, GitHub displays a formatted page rather than the raw file. This behavior is intentional and provides context about the file, including:

- Repository navigation
- Version history
- File metadata
- Download options

However, for embedding images in documentation, specifications, websites, or any other context, you need the **raw image URL**, not the HTML wrapper.

## Solution: Three Methods to Obtain Raw Image URLs

To properly embed GitHub-hosted images, use one of the following methods to retrieve the raw image URL:

### Method 1: Copy Image Address

1. Navigate to the image file in the GitHub repository
2. Click the **Download** button
3. Right-click on the displayed image
4. Select **Copy Image Address**

**Result format**: `https://raw.githubusercontent.com/WebOfTrust/keri/main/images/prefix.png`

### Method 2: Copy Download Link

1. Navigate to the image file in the GitHub repository
2. Right-click on the **Download** button
3. Select **Copy Link**

**Result format**: `https://github.com/WebOfTrust/keri/raw/main/images/prefix.png`

### Method 3: Append Raw Parameter

Add the `?raw=true` parameter to any GitHub file URL:

**Original URL**:

```text
https://github.com/WebOfTrust/keri/blob/main/images/prefix.png
```

**Modified URL**:

```text
https://github.com/WebOfTrust/keri/blob/main/images/prefix.png?raw=true
```

## Best Practices

All three methods produce valid raw image URLs that can be embedded in any context, including:

- Markdown files
- HTML documents
- Specification documents
- README files
- External websites
- GitHub wiki pages
- Documentation sites

Choose the method that best fits your workflow. Method 3 is particularly useful when you need to quickly convert existing URLs without leaving your editor.

## Summary

Understanding the difference between GitHub's rendered HTML pages and raw file URLs is essential for effective documentation. By using the methods outlined above, you can ensure that images are properly embedded and accessible across all your documentation and web content.
