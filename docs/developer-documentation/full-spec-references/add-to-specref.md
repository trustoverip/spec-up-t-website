---
sidebar_position: 10
---

# Adding to specref.org

This tutorial explains how to add a new specification reference to the Specref database, which is a community-maintained database of web standards and related references.

## Overview

Specref is an open-source, community-maintained database of web standards and related references that serves over 23,000 references through a simple JSON API. The database is automatically updated hourly from various standards organizations (W3C, IETF, WHATWG, etc.), but manual additions are also welcome for specifications not covered by automated processes.

## Prerequisites

Before you begin, you should have:

- A GitHub account
- Basic familiarity with JSON format
- Git installed on your system
- Node.js (version 20.14 or higher) and npm (version 10.7 or higher)
- Understanding of the specification you want to add
- The source URL of the specification: [specref.org](https://specref.org/) and [the repository](https://github.com/tobie/specref)

## Understanding the Repository Structure

The key files and directories for adding specifications:

```
specref/
├── refs/
│   ├── biblio.json          # Main file for manual entries
│   ├── w3c.json            # Auto-generated W3C specs
│   ├── ietf.json           # Auto-generated IETF specs
│   ├── whatwg.json         # Auto-generated WHATWG specs
│   └── ...                 # Other auto-generated files
├── schemas/
│   └── raw-reference.json  # JSON schema defining valid formats
├── test/                   # Test files
└── scripts/                # Update scripts
```

**Important**: Manual additions should only be made to `refs/biblio.json`.

## Types of Specification Entries

### 1. Standard Reference Entry
A complete specification reference with all metadata:

```json
{
    "SPEC-ID": {
        "authors": ["Author Name", "Another Author"],
        "href": "https://example.org/spec",
        "title": "Specification Title",
        "status": "Working Draft",
        "publisher": "Standards Organization",
        "date": "2025-01-01",
        "repository": "https://gihub.com/org/spec-repo",
    }
}
```

An example of a complete specification entry:

```json
{
    "KERI": {
        "authors": [
            "Samuel M. Smith",
            "Kevin Griffin"
        ],
        "href": "https://trustoverip.github.io/tswg-keri-specification/",
        "title": "Key Event Receipt Infrastructure (KERI)",
        "status": "Working Draft",
        "publisher": "Trust Over IP Foundation",
        "date": "2023",
        "repository": "https://github.com/trustoverip/tswg-keri-specification"
    }
}
```

## Step-by-Step Guide for Manual Additions

### Step 1: Set Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/specref.git
   cd specref
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Step 2: Check if the Specification Already Exists

Before adding a new entry, verify it doesn't already exist:

1. Search the web interface: https://specref.org/
2. Check the API: `https://api.specref.org/search-refs?q=YOUR_SEARCH_TERM`
3. Search the codebase:
   ```bash
   grep -r "specification title" refs/
   ```

### Step 3: Create a New Branch

```bash
git checkout -b add-your-spec-name
```

### Step 4: Edit refs/biblio.json

1. Open `refs/biblio.json` in your editor
2. Find the appropriate alphabetical location for your entry
3. Add your specification entry following the schema


### Step 5: Run Tests

Test your changes locally:

```bash
npm test
```

This will validate:
- JSON syntax
- Schema compliance
- No duplicate entries
- Alias resolution
- Reference integrity

### Step 6: Commit and Push

```bash
git add refs/biblio.json
git commit -m "Add [SPEC-NAME] specification reference"
git push origin add-your-spec-name
```

### Step 7: Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Provide a clear description of what you're adding
4. Wait for automated tests to pass
5. Address any review feedback

## Reference Format and Schema

All entries must conform to the JSON schema defined in `schemas/raw-reference.json`.


