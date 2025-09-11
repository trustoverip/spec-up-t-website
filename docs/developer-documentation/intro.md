---
sidebar_position: 0
---

# Introduction

Welcome to the comprehensive developer's guide for the Spec-Up-T system. This documentation will guide you through contributing to Spec-Up-T, whether you're adding features, fixing bugs, or creating custom extensions for your specific needs.

The `Spec-Up-T` tool is written in `JavaScript` (client-side) and `Node.js` (build-time).

When we say "build-time," in this context, we mean that Node.js runs locally on a developer's computer during the build process, where the `index.html` is generated through Node.js scripts.

After that, the `index.html` can be placed anywhere on a web server, but GitHub Pages are preferable because they allow you to take advantage of GitHub's power. The fact that it is an HTML file means that there are minimal hosting requirements.

## What is Spec-Up-T?

**Spec-Up-T** is a technical specification and standardization tool with a special focus on terminology. Built as an enhanced version of DIF's Spec-Up, it enables you to create rich specification documents and glossaries using an extended version of Markdown.

Key characteristics:

- **Enhanced Markdown Support**: Advanced syntax highlighting, notice blocks, complex tables, charts, UML diagrams, and more
- **Interrelated Specifications**: Reference or embed terms from external specifications, creating a connected web of interrelated documents
- **Version Management**: Track changes and manage snapshots for streamlined version control
- **GitHub Integration**: Hosted on GitHub for seamless collaboration and accessibility
- **Minimal Hosting Requirements**: Designed to operate efficiently with basic hosting setup

## Architecture Overview

Spec-Up-T follows a hybrid architecture combining client-side and build-time JavaScript:

### Build-Time (Node.js)

The build-time components run locally on a developer's computer during the compilation process, where the `index.html` is generated through Node.js scripts. This includes:

- **Build Process**: Markdown files are processed and compiled into a single HTML specification
- **Term Processing**: Terminology definitions and references are linked and validated
- **External References**: Integration with external specification databases (like specref.org)
- **Asset Compilation**: CSS and JavaScript files are bundled and optimized
- **PDF Generation**: Specifications can be exported to PDF format

### Client-Side (Browser JavaScript)

The client-side code provides interactive features in the generated specification:

- **Syntax Highlighting**: Via Prism.js for beautiful code display
- **Interactive Tooltips**: Using Tippy.js for enhanced user experience
- **Diagram Rendering**: Mermaid.js for creating flowcharts and diagrams
- **Charts and Visualizations**: Chart.js for data presentation
- **Navigation Enhancements**: Search functionality and interactive menus

### Static Output

The final product is a standalone `index.html` file that:

- Can be hosted on any web server
- Works optimally with GitHub Pages
- Requires minimal hosting infrastructure
- Contains all assets embedded or linked

## Repository Structure

Spec-Up-T consists of two main repositories:

### 1. [Spec-Up-T Starter Pack](https://github.com/trustoverip/spec-up-t-starter-pack)

- **Purpose**: Installation and boilerplate generation
- **npm package**: `create-spec-up-t`
- **Contents**:
  - Boilerplate directory with sample content
  - Installation scripts that copy the boilerplate
  - Default configuration files

### 2. [Spec-Up-T Core](https://github.com/trustoverip/spec-up-t)

- **Purpose**: Core processing engine and tools
- **npm package**: `spec-up-t`
- **Contents**:
  - Node.js processing scripts
  - Client-side assets (CSS, JavaScript)
  - Template files
  - Build tools (Gulp configuration)

## Core Technologies

### Build Tools

- **Node.js 18+**: Runtime environment for build-time processing
- **npm**: Package management and script execution
- **Gulp**: Asset compilation and build automation
- **markdown-it**: Markdown processing with custom extensions

### Front-End Libraries

- **Prism.js**: Syntax highlighting for code blocks
- **Tippy.js**: Interactive tooltips and popovers
- **Mermaid.js**: Diagram generation from text
- **Chart.js**: Data visualization and charts
- **Bootstrap**: CSS framework for responsive design

### Processing Pipeline

1. **Markdown Processing**: Files are parsed using markdown-it with custom extensions
2. **Term Resolution**: Terminology references are resolved and linked
3. **External References**: Integration with specification databases
4. **Asset Compilation**: CSS and JavaScript are bundled
5. **Template Injection**: Content is injected into the HTML template
6. **Output Generation**: Final `index.html` is produced

## Key Features for Developers

### Custom Markdown Extensions

Spec-Up-T extends standard Markdown with specialized syntax:

```markdown
[[def:term]]        # Define a term
[[ref:term]]        # Reference a term
[[xref:spec,term]]  # External term reference
[[spec:name]]       # Specification reference
```

### Terminology System

- **Term Definitions**: Individual markdown files for each term
- **Cross-References**: Automatic linking between related terms
- **External Sources**: Integration with external glossaries
- **Version Tracking**: History and snapshots of term evolution

### Development Workflows

- **Local Development**: `npm run dev` for testing and debugging
- **Rendering**: `npm run render` to generate the specification
- **Asset Compilation**: `gulp compile` for front-end assets
- **PDF Export**: Built-in PDF generation capabilities

## Installation Methods

### Local Installation

```bash
npx create-spec-up-t my-spec-up-t-website
```

### Web-Based Installation

- Fork the repository
- Use GitHub Actions workflows
- No local setup required

## Getting Started as a Developer

1. **Set Up Environment**:
   - Install Node.js 18+
   - Ensure Git is configured
   - Choose your preferred IDE (VS Code recommended)

2. **Clone and Install**:

   ```bash
   npx create-spec-up-t my-project
   cd my-project
   npm install
   ```

3. **Understand the Structure**:
   - `spec/` - Markdown content files
   - `assets/` - Static assets and test files
   - `static/` - Images and media
   - `node_modules/spec-up-t/` - Core processing engine

4. **Start Developing**:
   - Modify content in `spec/` directory
   - Use `npm run render` to generate output
   - Test locally by opening `index.html`

## Next Steps

- Explore the [Scripts Documentation](../category/scripts/) to understand the build process
- Learn about [GitHub Repositories](./github-repositories.md) structure
- Check out [Front-End Development](./scripts/scripts-front-end/intro.md) for client-side customization
- Review [Specification References](./spec-references/add-to-specref.md) for external integrations
