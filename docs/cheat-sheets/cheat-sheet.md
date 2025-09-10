# Spec-Up-T Cheatsheet

:::info

Since “***Installation & Setup***” is used less often, this is listed [***below***](#installation--setup).

:::

## TL;DR

1. `npx create-spec-up-t project-name`
2. Add terms in `spec/terms-definitions/*.md` with `[[def: term, alias]]` or `[[tref: term, alias]]` (external definition)
3. Reference with `[[ref: term]]` or `[[xref: spec, term]]`
4. `npm run menu` → Option 4 (Also runs Option 1)
5. Open `docs/index.html`

## Reference Types

| Type       | Syntax                      | Purpose                      | Output                  |
| ---------- | --------------------------- | ---------------------------- | ----------------------- |
| **`def`**  | `[[def:term,alias]]`        | 🏷️ Define new term            | Creates anchor point    |
| **`ref`**  | `[[ref:term]]`              | 🔗 Link to local term         | Clickable internal link |
| **`xref`** | `[[xref:spec,term]]`        | 🌐 Link to external           | Opens external spec     |
| **`tref`** | `[[tref:spec,term, alias]]` | 📥 Import external definition | Embeds full content     |
| **`spec`** | `[[spec:RFC-7519]]`         | 📚 Cite specification         | Links to standard spec  |

:::info

The `,` (comma) is the delimiter. A space after a comma is okay, but not necessary.

:::



## Creating Definition Files

### 1. Create a new term file

```bash
# Navigate to terms directory
cd spec/terms-definitions/

# Create new definition file
touch my-new-term.md
```

:::info

File name should be descriptive but doesn't need to match the term

:::


### 2. Basic term file structure

```markdown
[[def: primary-term, synonym1, synonym2]]

~ This is the definition of the term using tilde prefix.

~ Additional paragraphs also use the tilde prefix.

~ Each paragraph represents a separate concept or detail.
```

Here follows a description of the structure of a term file:

| Markdown snippet       | Explanation       |
| -------------- | -------------- |
| `[[def: primary-term, synonym1, synonym2]]` | The definition should be the first line |
| `~ This is the definition of the term using tilde prefix.` | Each new line should start with a `~` to indicate that it belongs to the definition (it becomes a `<dd>…</dd>` in HTML) |
| `~ Additional paragraphs also use the tilde prefix.` | " |
| `~ Each paragraph represents a separate concept or detail.` | " |

:::info

`[[def: primary-term,synonym1,synonym2]]` without the spaces is also okay.

:::

**Key Points:**

- File name should be descriptive but doesn't need to match the term
- `[[def:]]` tag **must be the first line**
- Multiple synonyms are comma-separated
- Definition content uses `~` prefix for each paragraph

## Reference Syntax

### `[[def: ...]]`

Local Term Definition example:

```markdown
[[def: authentication, auth, authn]]

~ The process of verifying the identity of a user or system.
```

**Usage:** First line of term definition files only

### `[[ref: ...]]`

Internal Reference example:

```markdown
[[def: access-control]]

~ Access control is a security technique that regulates who or what can view or use resources in a computing environment.

~ The system requires [[ref: authentication]] before access.
```

**Usage:** Anywhere in the definition part of the content, to link to locally defined terms

### `[[xref: ...]]`

External Reference example:

```markdown
[[def: verifiable-credential]]

~ A verifiable credential is a tamper-evident credential that has authorship that can be cryptographically verified.

~ See the [[xref: external-spec, credential]] specification for more details.
```

**Usage:** Anywhere in the definition part of the content, to link to terms in other Spec-Up-T repositories

### `[[tref: ...]]`

Transcluded Reference example:

```markdown
[[tref: external-spec, digital-signature, alias]]
```

**Usage:** Embeds complete external definition (file can contain only this tag, but optionally you can add text in your local file, that will be added below the external, embedded definition)

:::info

Final result:

```markdown
[[tref: …]]

External definition text.

Optional: your own text.

```



:::






### Specification Reference: `[[spec: ...]]`

```markdown
According to [[spec: RFC-7519]], JSON Web Tokens are...
```

**Usage:** Reference standard specifications <del>(from specref.org database)</del> currently under development.

## Rendering & Menu Navigation

### Launch Menu

```bash
npm run menu
```

**Menu Options:**

```text
  ┌─────────────────────────────────────┐
  │  [0] Add content                    │
  │  [1] Render specification           │
  │  [2] Export to PDF                  │
  │  [3] Export to DOCX                 │
  │  [4] Collect external references    │ (will also run [1])
  │  [5] Add/remove xref source         │
  │  [6] Configure                      │
  │  [7] Run health check               │
  │  [8] Open documentation website     │
  │  [9] Freeze specification           │
  │  [Q] Quit                           │
  └─────────────────────────────────────┘
```


### [0]: Add content

**What it does:**

- Shows a short instruction on how to add content
- Shows a link to the this website (the website you are currently reading)

### [1]: Render Specification

**What it does:**

- Processes all markdown files
- Resolves term references
- Generates `docs/index.html`
- Creates complete specification
- Opening in a browser via local file system (`file:///`) will work for almost everything (simply put: double click on the file in “Finder” or “Explorer”)

### [2]: Export to PDF

**What it does:**

- Exports the specification to PDF format
- Creates a `.pdf` file


### [3]: Export to DOCX

**What it does:**

- Exports the specification to Microsoft Word format
- Creates a `.docx` file

### [4]: Collect External References

**What it does:**

- Fetches definitions from external repositories
- Updates local cache with latest versions
- Also runs option 1

**When to use:**

- After adding new external specifications

### [7]: Run Health Check

**What it does:**

- Provides diagnostic information

### [8]: Open Documentation Website

**Alternative:** Opens `https://blockchainbird.github.io/spec-up-t-website/`

### [9]: Freeze Specification

**What it does:**

- Creates a snapshot of your current specification

## Installation & Setup

```bash
# Create new Spec-Up-T project
npx create-spec-up-t my-spec-project
cd my-spec-project

# npm install will run automatically

# Launch interactive menu
npm run menu
```

## Project Structure

`docs/`: output files
`spec/`: input files

```text
my-spec-project/
├── .cache/                  # 📝 Can be removed at all times
├── docs/
│   ├── versions/            # 📝 Versioned files
│   │   ├── v1
│   │   └── v2
│   ├── index.html           # 📄 The final specification file
│
├── spec/
│   ├── terms-definitions/   # 📝 Individual term files
│   │   ├── term-1.md
│   │   └── term-2.md
│   ├── spec-head.md         # 📄 Main content files
│   └── spec-body.md
└── specs.json               # ⚙️  Configuration
```


## Configuration Example

**specs.json:** [Go to `specs.json` (raw file in the Spec-Up-T repo boilerplate code)](https://raw.githubusercontent.com/blockchainbird/spec-up-t/refs/heads/master/src/install-from-boilerplate/boilerplate/specs.json)

## Common Patterns & Tips

### ❌ DON'T

- … put content before `[[def:]]` or `[[tref:]]` tag in term files
- … forget the `~` prefix for definition content
- … skip re-running menu option 4 when using new `xref`/`tref`
