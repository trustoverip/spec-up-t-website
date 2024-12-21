---
sidebar_position: 2
---

# Configuration

The `specs.json` file, located in the root folder of your repository, specifies the configuration values used in generating your specification documents. Using the command line menu, you can configure the most important elements. The rest you can do manually.

## Create (or edit the sample) `spec.json`

```json
{
    "specs": [
        {
            "title": "Spec-Up-T Starterpack",
            "description": "Create technical specifications in markdown. Based on the original Spec-Up, extended with Terminology tooling",
            "author": "Trust over IP Foundation",
            "spec_directory": "./spec",
            "spec_terms_directory": "terms-definitions",
            "output_path": "./docs",
            "markdown_paths": [
                "spec-head.md",
                "terms-and-definitions-intro.md",
                "example-markup-in-markdown.md",
                "spec-body.md"
            ],
            "logo": "https://raw.githubusercontent.com/trustoverip/spec-up-t-starter-pack/main/spec-up-t-starterpack/static/logo.svg",
            "logo_link": "https://github.com/trustoverip/spec-up-t",
            "favicon": "https://raw.githubusercontent.com/trustoverip/spec-up-t-starter-pack/main/spec-up-t-starterpack/static/favicon.ico",
            "source": {
                "host": "github",
                "account": "trustoverip",
                "repo": "spec-up-t-starter-pack"
            },
            "external_specs": [
                {
                    "external_spec": "test-1",
                    "gh_page": "https://blockchainbird.github.io/spec-up-xref-test-1/",
                    "url": "https://github.com/blockchainbird/spec-up-xref-test-1",
                    "terms_dir": "spec/term-definitions"
                },
                {
                    "external_spec": "test-2",
                    "gh_page": "https://blockchainbird.github.io/spec-up-xref-test-2/",
                    "url": "https://github.com/blockchainbird/spec-up-xref-test-2",
                    "terms_dir": "spec/term-definitions"
                }
            ],
            "katex": false
        }
    ]
}
```








