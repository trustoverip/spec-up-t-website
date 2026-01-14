# TREF vs XREF

This document explains the differences between `xref` (external reference) and `tref` (transcluded reference) in the Spec-Up-T specification generation system.

## Overview

Both `xref` and `tref` are mechanisms for referencing terms from external specifications, but they serve different purposes and behave differently in the generated documentation.

## XREF (External Reference)

### Purpose
An `xref` creates a **clickable link** to a term definition in an external specification without importing the content into the current document. Like `tref`, the `xref` reference information is collected and stored in the generated `xtrefsData` for processing.

### Syntax
```markdown
[[xref: external-spec-name, term-name]]
```

### Example
```markdown
~ Xref example: [[xref: test-1, Aal]]
```

### Generated HTML
When processed, an `xref` generates an anchor tag that links to the external specification:

```html
<a class="x-term-reference term-reference" 
   data-local-href="#term:test-1:aal"
   href="https://external-spec-url.com#term:aal">Aal</a>
```

### Key Characteristics
- **Behavior**: Creates a clickable link that opens the external specification
- **Content**: No content is imported; only creates a reference link
- **Visual**: Appears as a standard hyperlink in the document
- **Use Case**: When you want to reference a term but keep readers in the current document context

## TREF (Transcluded Reference)

### Purpose
A `tref` **imports and embeds** the complete definition of a term from an external specification into the current document.

### Syntax
```markdown
[[tref: external-spec-name, term-name]]
```

### Example
```markdown
[[tref: kmg-1, authentic-chained-data-container]]
```

### Generated HTML Structure
A `tref` creates a definition term with embedded content:

```html
<dt class="transcluded-xref-term">
  <span class="transcluded-xref-term" id="term:authentic-chained-data-container">
    authentic-chained-data-container
  </span>
</dt>
<dd class="transcluded-xref-term meta-info-content-wrapper collapsed">
  <!-- Meta information table with source repo details -->
</dd>
<dd class="transcluded-xref-term transcluded-xref-term-embedded">
  <!-- Full definition content from external source -->
</dd>
```

### Key Characteristics
- **Behavior**: Embeds the complete definition content into the current document
- **Content**: Full definition text, examples, and metadata are imported
- **Visual**: Appears as a definition list item with special styling (blue background)
- **Metadata**: Includes source repository information (owner, repo, commit hash)
- **Collapsible**: Content can be expanded/collapsed for better navigation
- **Use Case**: When you want to include the full definition without requiring readers to navigate away

## Technical Implementation Differences

### Processing Pipeline

#### XREF Processing

1. **External Spec Lookup**: Finds the target specification URL from `specs.json`
2. **Link Generation**: Creates `<a>` tag with `href` pointing to external URL
3. **Reference Collection**: External reference information is collected and stored in `xtrefsData`

#### TREF Processing

1. **Placeholder Creation**: Creates `<dt>` element with special classes
2. **Content Insertion**: JavaScript (`insert-trefs.js`) populates content after page load
3. **Definition Integration**: Content is processed and styled as definition list items

### CSS Styling Differences

#### XREF Styling
- Standard link appearance
- No special background
- Hover effects like normal links

#### TREF Styling
- **Background**: Light blue background (`#a9dde03b`)
- **Arrow Icon**: Right-pointing arrow indicating external content
- **Padding**: Extra padding for embedded content
- **Collapsible UI**: Visual indicators for expand/collapse state

## Configuration in specs.json

Both types require external specifications to be configured:

```json
{
  "specs": [{
    "external_specs": [
      {
        "external_spec": "test-1",
        "url": "https://github.com/owner/repo",
        "gh_page": "https://owner.github.io/repo/"
      }
    ]
  }]
}
```

## Use Case Guidelines

### When to Use XREF
- Quick references to concepts defined elsewhere
- When you want to acknowledge a term without cluttering your document
- For brief mentions where full definition isn't needed
- When maintaining document focus is important

### When to Use TREF
- When readers need the full definition to understand your content
- For key concepts central to your specification
- When you want to provide complete information without requiring navigation
- For building comprehensive, self-contained documents

