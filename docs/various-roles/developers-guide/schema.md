---
sidebar_position: 15
---
# Schema

## Boilerplate

The boilerplate is the starting point of the Spec-Up-T system. This is the go to directory.

```mermaid

flowchart LR
    %% Class Definitions
    classDef default fill:#d8e5ff,stroke:#333,stroke-width:1px,font-family:Arial
    
    classDef directory stroke:#333,stroke-width:2px,font-size:16px,font-family:monospace,color:#eee,font-weight:bold
    classDef backgroundGreen fill:#abff43,color:#111
    classDef backgroundBlue fill:#d8e5ff,color:#111
    classDef borderDashed stroke-dasharray: 5 5
    classDef file fill: none,stroke:none,font-size:12px,font-family:monospace,stroke-dasharray: 5 5;
    classDef explanation fill:#f9f9f9,stroke:#333,stroke-width:1px,font-family:Arial
    classDef attention fill:#f9f9f9,stroke:#ff1d27,stroke-width:3px,font-family:Arial
    %% End Class Definitions


    %% Directory Structure
    %% root["Spec-Up-T Boilerplate/"]
    dir-src-server["src/server/"]
    dir-nodemodules["node_modules/spec-up-t/"]
    dir-spec["spec/"]
    dir-output["output/"]
    file-main["main.sh"]
    file-specs["specs.json"]


    %% Explanations
    expl-main["Command Line Menu"]
    expl-specs["Configuration file"]
    dir-src-server_expl["Scripts that ask for user input"]
    dir-nodemodules_expl["Spec-Up-T package"]
    dir-spec_expl["Markdown files"]
    dir-output_expl["Generated output"]

    %% Directory Structure Links
    root["Spec-Up-T Boilerplate/"] --> dir-src-server
    root --> dir-nodemodules
    root --> dir-spec
    root --> dir-output
    root --> file-main
    root --> file-specs
    %% dir-src-server --> file3

    %% Explanation Links
    file-main --> expl-main
    file-specs --> expl-specs
    dir-src-server --> dir-src-server_expl
    dir-nodemodules --> dir-nodemodules_expl
    dir-spec --> dir-spec_expl
    dir-output --> dir-output_expl


    %% Attach Classes to Nodes
    %% class root directory
    %% class dir-src-server backgroundBlue
    class dir-src-server borderDashed

    %% class dir-nodemodules backgroundBlue
    class dir-nodemodules borderDashed
    class dir-nodemodules attention

    class dir-spec directory
    class dir-spec backgroundGreen
    
    %% class dir-output backgroundBlue
    class dir-output borderDashed

    class file-main file
    %% class file-main backgroundBlue

    class file-specs file
    %% class file-specs backgroundBlue

    %% class dir-spec_expl explanation

```


## Spec-Up-T package

These are the main files and directories of the spec-up-t package, necessary for understanding how it works.

```mermaid
flowchart LR
    %% Class Definitions
    classDef default fill:#d8e5ff,stroke:#333,stroke-width:1px,font-family:Arial
    
    classDef directory stroke:#333,stroke-width:2px,font-size:16px,font-family:monospace,color:#eee,font-weight:bold
    classDef backgroundGreen fill:#abff43,color:#111
    classDef backgroundBlue fill:#d8e5ff,color:#111
    classDef borderDashed stroke-dasharray: 5 5
    classDef file fill: none,stroke:none,font-size:12px,font-family:monospace,stroke-dasharray: 5 5;
    classDef explanation fill:#f9f9f9,stroke:#333,stroke-width:1px,font-family:Arial
    classDef attention fill:#f9f9f9,stroke:#ff1d27,stroke-width:3px,font-family:Arial
    %% End Class Definitions


    root["node_modules/spec-up-t/"]
    root --> dir-src-server["src/"] --> dir-src-server-expl["Back-end code: Node.js scripts"]
    root --> dir-template["template/"] --> dir-template-expl["HTML template"]
    root --> dir-assets["assets/"] --> dir-assets-expl["Front-end code: JavaScript scripts"]
    root --> dir-nodemodules["node_modules/"] --> dir-nodemodules-expl["NPM packages used by Spec-Up-T"]
    root --> index.js --> indexjs-expl["Entry point"]
    root --> gulpfile.js --> gulpfile-expl["Compiles front-end JavaScript"]

    class root borderDashed
    class root attention
    class dir-src-server borderDashed
    class dir-template borderDashed
    class dir-assets borderDashed
    class dir-nodemodules borderDashed
    class index.js file
    class gulpfile.js file


```

## Spec-Up-T `src`

```mermaid
flowchart LR
  %% Class Definitions
  classDef default fill:#d8e5ff,stroke:#333,stroke-width:1px,font-family:Arial
  
  classDef directory stroke:#333,stroke-width:2px,font-size:16px,font-family:monospace,color:#eee,font-weight:bold
  classDef backgroundGreen fill:#abff43,color:#111
  classDef backgroundBlue fill:#d8e5ff,color:#111
  classDef borderDashed stroke-dasharray: 5 5
  classDef file fill: none,stroke:none,font-size:12px,font-family:monospace,stroke-dasharray: 5 5;
  classDef explanation fill:#f9f9f9,stroke:#333,stroke-width:1px,font-family:Arial
  classDef attention fill:#f9f9f9,stroke:#ff1d27,stroke-width:3px,font-family:Arial
  %% End Class Definitions

  root["src/"] --> create-pdf.js --> create-pdf-expl["<a href="#create-pdfjs">Create PDF's</a>"]
  root["src/"] --> create-term-index.js --> create-term-index-expl["<a href="#create-term-indexjs">Create Term Index</a>"]
  root["src/"] --> create-term-relations.js --> create-term-relations-expl["<a href="#create-term-relationsjs">Create Term Relations</a>"]
  root["src/"] --> create-versions-index.js --> create-versions-index-expl["<a href="#create-versions-indexjs">Create Version Index</a>"]
  root["src/"] --> fix-markdown-files.js --> fix-markdown-files-expl["<a href="#fix-markdown-filesjs">Fix Markdown files</a>"]
  root["src/"] --> freeze.js --> freeze-expl["<a href="#freezejs">Freeze</a>"]
  root["src/"] --> get-xtrefs-data.js --> get-xtrefs-data-expl["<a href="#get-xtrefs-datajs">Get xrefs data</a>"]
  root["src/"] --> init.js --> init-expl["<a href="#initjs">Initialises</a>"]
  root["src/"] --> ETCETERA-WORK-IN-PROGRESS 


  class root borderDashed
  class root attention
  class create-pdf.js file
  class create-term-index.js file
  class create-term-relations.js file
  class create-versions-index.js file
  class fix-markdown-files.js file
  class freeze.js file
  class get-xtrefs-data.js file
  class init.js file



```

## Files description

### create-pdf.js

Creates pdf's.

### create-term-index.js

Creates term index.

### create-term-relations.js

Creates term relations.

### create-versions-index.js

Creates version index

### fix-markdown-files.js

Fixes markdown files

### freeze.js

Fixes markdown files

### get-xtrefs-data.js

Get xtref data

### init.js

Initialise.


