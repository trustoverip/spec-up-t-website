# Moving Spec-Up-T repo to another location

Actions to take when migrating repo to another GitHub user.

Due to management technical reasons, **Spec-Up-T** will be moved, and later reinstated.

## Replace hardcoded URLs

Replace hardcoded URLs to the documentation website

Replace 
`trustoverip.github.io/spec-up-t-website`
with
`blockchainbird.github.io/spec-up-t-website`

Currently 18 occurences found.

# `specs.json` changes

In `specs.json` change:

```json
            "logo": "https://raw.githubusercontent.com/trustoverip/spec-up-t/refs/heads/master/src/install-from-boilerplate/boilerplate/static/logo.svg",
            "logo_link": "https://github.com/trustoverip/spec-up-t",
            "favicon": "https://raw.githubusercontent.com/trustoverip/spec-up-t/refs/heads/master/src/install-from-boilerplate/boilerplate/static/favicon.ico",
```

to

```json
            "logo": "https://raw.githubusercontent.com/blockchainbird/spec-up-t/refs/heads/master/src/install-from-boilerplate/boilerplate/static/logo.svg",
            "logo_link": "https://github.com/blockchainbird/spec-up-t",
            "favicon": "https://raw.githubusercontent.com/blockchainbird/spec-up-t/refs/heads/master/src/install-from-boilerplate/boilerplate/static/favicon.ico",
```
