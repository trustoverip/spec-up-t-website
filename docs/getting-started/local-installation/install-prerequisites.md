---
sidebar_position: 3
---

# Install Node.js, npm, Git, and PowerShell

Spec-Up-T itself uses the same commands on every operating system (`npx`, `npm`, `git`, `cd`). What differs is **how you install the tools** and **which terminal you open**.

This page covers **macOS** and **Windows**. Linux users can follow the same verification steps; install the tools with your distribution’s package manager.

## What you need

| Tool | Purpose | Notes |
| --- | --- | --- |
| **Node.js** (18.x or later, LTS recommended) | Runs Spec-Up-T | Installer includes **npm** |
| **npm** | Installs packages and runs scripts | Bundled with Node.js — no separate install |
| **Git** | Clone, commit, and push repositories | Required for GitHub workflows |
| **Terminal** | Where you run commands | macOS: Terminal; Windows: PowerShell or Windows Terminal |
| **PowerShell** | Shell on Windows (optional on macOS) | Preinstalled on Windows 10/11 |

After installing, **close and reopen** your terminal so `PATH` updates take effect.

---

## macOS

### Open a terminal

Use **Terminal** (Applications → Utilities → Terminal), or the integrated terminal in Visual Studio Code.

### Install Node.js and npm

**Option A — Official installer (simple)**

1. Go to [https://nodejs.org](https://nodejs.org).
2. Download the **LTS** macOS installer.
3. Run the `.pkg` and follow the prompts.
4. npm is installed automatically with Node.js.

**Option B — Homebrew**

If you use [Homebrew](https://brew.sh):

```bash
brew install node
```

### Install Git

macOS often already has a Git stub. Install the full tools with one of these:

**Option A — Xcode Command Line Tools**

```bash
xcode-select --install
```

**Option B — Homebrew**

```bash
brew install git
```

**Option C — Official installer**

Download from [https://git-scm.com/download/mac](https://git-scm.com/download/mac).

### Install PowerShell (optional)

macOS does not need PowerShell for Spec-Up-T. If you want it anyway:

```bash
brew install --cask powershell
```

Or follow Microsoft’s guide: [Installing PowerShell on macOS](https://learn.microsoft.com/powershell/scripting/install/installing-powershell-on-macos).

Start it with:

```bash
pwsh
```

### Verify on macOS

```bash
node -v
npm -v
git --version
```

You should see a Node.js version **18 or higher**, an npm version, and a Git version. Then continue with [Local Installation](installation.md) or [Clone an Existing Repository](clone-existing-repo.md).

---

## Windows

### PowerShell (your terminal)

On Windows, you run Spec-Up-T commands in a **shell**. **PowerShell** is the recommended shell: it is Microsoft’s modern command-line environment for installing software, navigating folders, and running `node`, `npm`, and `git`.

:::tip

**Command Prompt** (`cmd.exe`) can run many of the same commands, but PowerShell is the better default on modern Windows. You can also use the integrated terminal in Visual Studio Code — set the default profile to PowerShell if you like.

:::

**Windows PowerShell 5.1** is already installed on Windows 10 and 11. Open it from the Start menu by searching for **Windows PowerShell**.

For **PowerShell 7+** (the current cross-platform shell; optional but recommended):

**Option A — Microsoft Store**

Search for **PowerShell** in the Microsoft Store and install it.

**Option B — Installer**

See [Installing PowerShell on Windows](https://learn.microsoft.com/powershell/scripting/install/installing-powershell-on-windows).

**Option C — winget** (if `winget` is already available in your current PowerShell window)

```powershell
winget install Microsoft.PowerShell
```

Start PowerShell 7 with:

```powershell
pwsh
```

Use this PowerShell window for the install steps below.

### Install Node.js and npm

**Option A — Official installer (simple)**

1. Go to [https://nodejs.org](https://nodejs.org).
2. Download the **LTS** Windows installer (`.msi`).
3. Run the installer.
4. Accept the defaults. Leave **npm** and any “necessary tools” / PATH options enabled.
5. npm is installed automatically with Node.js.

**Option B — winget**

In PowerShell:

```powershell
winget install OpenJS.NodeJS.LTS
```

### Install Git

**Option A — Official installer**

1. Download **Git for Windows** from [https://git-scm.com/download/win](https://git-scm.com/download/win).
2. Run the installer.
3. Defaults are fine for most users. Ensure Git is added to your `PATH` (default).

**Option B — winget**

In PowerShell:

```powershell
winget install Git.Git
```

### Verify on Windows

:::important

After installing Node.js or Git, **close PowerShell completely and open a new window** (if you use VS Code’s terminal, quit and restart VS Code). The installer updates `PATH`, but an already-open terminal does not pick that up — so `node`, `npm`, or `git` may look “not recognized” until you start a fresh session.

A full PC reboot is rarely needed; try a new terminal first.

:::

In the **new** PowerShell window:

```powershell
node -v
npm -v
git --version
```

You should see a Node.js version **18 or higher**, an npm version, and a Git version. Then continue with [Local Installation](installation.md) or [Clone an Existing Repository](clone-existing-repo.md).

#### If `npm` says “running scripts is disabled”

PowerShell may block Node’s `npm.ps1` helper. Allow local scripts for your user account:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Confirm with `Y` if prompted, then run `npm -v` again.

Alternatively, use Command Prompt (`cmd`) instead of PowerShell, or call `npm.cmd -v` — those do not use the PowerShell script.

---

## Do Spec-Up-T commands differ by OS?

No — once the tools are installed, the same commands work everywhere:

```bash
npx create-spec-up-t my-spec-up-t-website
cd my-spec-up-t-website
npm install
npm run menu
```

Minor OS differences you may notice:

- **Paths**: macOS/Linux use `/`; Windows often shows `\`, though many tools accept `/`.
- **Shell features**: quoting and some builtins differ between bash/zsh and PowerShell; Spec-Up-T’s npm scripts are written to work in common shells.
- **WSL**: If you use WSL2, prefer a **bash** terminal profile in VS Code rather than PowerShell for that Linux environment. See [Troubleshooting](../../troubleshooting.md).
