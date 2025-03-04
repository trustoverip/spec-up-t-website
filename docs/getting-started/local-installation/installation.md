---
sidebar_position: 2
---

# 1: Local Installation

Get started by **creating a new Spec-Up-T installation**.



## Create a new Spec-Up-T installation

### Let's create

Make sure you are in the directory where you want to install Spec-Up-T. A new subdirectory will be created with **your chosen name**, and the Spec-Up-T files will be placed in this subdirectory.

```bash
npx create-spec-up-t my-spec-up-t-website
```

*my-spec-up-t-website* can be anything you want it to be, that will **your chosen name** (however, it is recommended to not use spaces or special characters in directory names).

You can also omit the last part:

```bash
npx create-spec-up-t
```

If you omit `my-spec-up-t-website`, a default directory name, namely `spec-up-t-boilerplate,` is used.

Sometimes, you want to force the latest version to be installed. Then you can do the following:

```bash
npx create-spec-up-t@latest my-spec-up-t-website
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor. It should work on any operating system (not tested yet).

### Result

You should now have a directory called `my-spec-up-t-website` (or `spec-up-t-boilerplate` if you did not specify a name) with a subdirectory called `spec/`. You will find markdown files and another subdirectory, `terms-definitions` containing markdown files containing some sample content.

What you don't have yet is the following:

- a `docs` directory with a sample `index.html` file (which is the actual specification file that is the goal of it all).

How to do this, go to the [Command Line Menu](../../user-interface-overview/command-line-menu.md).

Now [let's get this thing on GitHub](push-to-github.md).