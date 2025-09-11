---
sidebar_position: 2
---

# Local Clone of a remote GitHub repository containing a Spec-Up-T installation

## Usecase
Suppose you'd like to kickstart content creation or development based on an existing specification and/or glossary.

Example
```text
git clone https://github.com/trustoverip/tswg-acdc-specification.git
cd tswg-acdc-specification
```

Because this repo is already a Spec-Up-T installation

##  Installation of npm

```text
npm install
```

### Let's check the presence of a up-and-running Spec-Up-T

```text
npm run menu
```

If this offers this menu, we're good:

```text
  ,---.                  .   .        --.--
  `---.,---.,---.,---.   |   |,---.     |  
      ||   ||---'|    ---|   ||   |---  |  
  `---'|---'`---'`---'   `---'|---'     `  
       |                      |            

  Please choose one of the following options:

   [0] Add content
   [1] Render specification
   [2] Export to PDF
   [3] Export to DOCX
   [4] Collect external references
   [5] Add, remove or view xref source
   [6] Configure
   [7] Run health check
   [8] Open documentation website
   [9] Freeze specification
   [Q] Quit

   An xref is a reference to another repository.

   Enter your choice: 
```


## Result


What you do have yet is the following:

- a `docs` directory with a pulled-in version of `index.html` file (which is the resulting specification file).

What you don't have yet is a newly generated index.html locally:

-  `index.html` file in the `docs` directory with a timestamp of just seconds ago

```bash
npm run menu 1
```

## Work more on this specification or glossary

Have a look at your options in the [Command Line Menu](../../user-interface-overview/command-line-menu.md).

Now [let's get your changes to GitHub](push-to-github.md).