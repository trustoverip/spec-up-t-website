---
sidebar_position: 100
---

# Serve GitHub Pages site on a custom domain

This document describes how to configure GitHub Pages to serve the repository at a custom domain (example: `glossary.trustoverip.org`).

## 1. Add a CNAME file
- In the site source directory used for Pages (here: `docs/`), create a file named `CNAME` (no file extension).
- Add a single line with your custom domain, for example:
```
glossary.trustoverip.org
```
- Commit and push the file to the branch you use for Pages (e.g., `main`).

## 2. Configure GitHub Pages settings
- Open: https://github.com/trustoverip/ctwg-main-glossary/settings/pages
- Under **Build and deployment**, select **Deploy from a branch** and choose `main / docs`.
- Enter `glossary.trustoverip.org` in **Custom domain** and save.

## 3. DNS and HTTPS
- Point your DNS to GitHub Pages as required by GitHub (CNAME or appropriate A records for apex domains). Refer to GitHub Pages DNS documentation for provider-specific guidance.
- GitHub will provision an HTTPS certificate once DNS is correct; enable **Enforce HTTPS** after the certificate is issued.

> Note: DNS propagation and certificate issuance may take some time. Verify the site is reachable and HTTPS is enabled after these steps.
