---
sidebar_position: 2
---

# Requirements

To run **Spec-Up-T** locally, your system needs the tools below.

## Tools

- A **terminal** — Terminal on macOS/Linux; PowerShell or Windows Terminal on Windows.
- An **editor** (IDE). Visual Studio Code is recommended; any editor that works well with Markdown is fine.
  - Download from [code.visualstudio.com](https://code.visualstudio.com/).
- A **web browser** — you almost certainly already have one.
- **Node.js** and **npm** — Spec-Up-T runs on Node.js; npm is bundled with it.
- **Git** — needed to clone repositories and publish to GitHub. You can generate a specification without GitHub, but you lose version-managed collaboration.

## System requirements

1. **Operating System**: Windows 10/11, macOS Monterey or later, or Linux (Ubuntu 20.04+ recommended).
2. **Node.js**: Version **18.x or later** (even-numbered **LTS** releases such as 18, 20, 22, 24 are recommended).
   - Verify: `node -v`
3. **npm**: Version **7.x or later** (installed with Node.js).
   - Verify: `npm -v`
4. **Git**: Any recent version.
   - Verify: `git --version`
5. **Internet connection**: Required to fetch packages from the npm registry (and to use GitHub).

## How to install

For step-by-step instructions on macOS and Windows (Node.js, npm, Git, and PowerShell), see [Install Node.js, npm, Git, and PowerShell](install-prerequisites.md).

## Additional notes

- Prefer an **LTS** Node.js release for day-to-day work.
- After installing tools, restart your terminal (or VS Code) so updated `PATH` values are picked up.
- Keep system time synchronized; incorrect clocks can break HTTPS certificate checks.
