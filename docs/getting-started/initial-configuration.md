---
sidebar_position: 3
---

# Initial configuration

The `specs.json` file, located in the root folder of your repository, specifies the configuration values used in generating your specification documents. Using the command line menu, you can configure the most important elements. The rest you can do manually.

## Create (or edit the sample) `spec.json`

If you have external glossaries in mind, then this is time to connect them to your specification and/or glossary, under "external_specs".

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
            "logo": "https://raw.githubusercontent.com/trustoverip/spec-up-t/refs/heads/master/src/install-from-boilerplate/boilerplate/static/logo.svg",
            "logo_link": "https://github.com/trustoverip/spec-up-t",
            "source": {
                "host": "github",
                "account": "trustoverip",
                "repo": "spec-up-t-starter-pack",
                "branch": "main"
            },
            "external_specs": [
                {
                    "external_spec": "vLEI",
                    "gh_page": "https://henkvancann.github.io/vlei-glossary/",
                    "url": "https://github.com/henkvancann/vlei-glossary"
                },
                {
                    "external_spec": "KERISuite",
                    "gh_page": "https://weboftrust.github.io/kerisuite-glossary/",
                    "url": "https://github.com/weboftrust/kerisuite-glossary"
                },
                {
                    "external_spec": "ToIP",
                    "gh_page": "https://glossary.trustoverip.org/",
                    "url": "https://github.com/trustoverip/ctwg-main-glossary"
                },
                {
                    "external_spec": "GenIT",
                    "gh_page": "https://trustoverip.github.io/ctwg-general-glossary/",
                    "url": "https://github.com/trustoverip/ctwg-general-glossary"
                }
            ],
            "katex": false,
            "anchor_symbol": "§"
        }
    ]
}
```








