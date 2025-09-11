---
sidebar_position: 3
---

# Web of Repo's

:::warning
Work in progress.
:::

Here is a description of the proposed future way of referencing external repositories, with the goal of creating a consistent system.

## Repository Flow Diagram


A glossary / specification is captured in an index.html file. Input for this file is code for styling and behaviour and the actual text.

This text is imported from markdown files. The markdown files are stitched together in a specific order. The markdown files that contain the terms are in a dedicated sub directory.

## Relation between the markdown files and the index.html file

```mermaid
flowchart TD
    %% Central block representing the specification/glossary with terms inside
    S["<div style='text-align:left; border: 1px solid red; '>Spec/glossary (index.html)
    -----------------------
    &lt;dl data-commithash='<i>a7f3bc9</i>'&gt;Key Event Log&lt;/dl&gt;
    &lt;dl data-commithash='<i>e12d64f</i>'&gt;next-threshold&lt;/dl&gt;
    &lt;dl data-commithash='<i>9b08version1d</i>'&gt;rotation-event&lt;/dl&gt;
    &lt;dl data-commithash='<i>45f8e3a</i>'&gt;self-addressing-identifiers&lt;/dl&gt;
    &lt;dl data-commithash='<i>d6c71b5</i>'&gt;watcher&lt;/dl&gt;</div>"]
    
    %% Term blocks with variations positioned in a circle around the central block with commit hashes above them
    T1["<div style='text-align:left'><i>a7f3bc9</i><br>Key Event Log<br>(key-event-log.md)</div>"]
    T2["<div style='text-align:left'><i>e12d64f</i><br>next-threshold<br>(next-threshold.md)</div>"]
    T3["<div style='text-align:left'><i>9b08version1d</i><br>rotation-event<br>(rotation-event.md)</div>"]
    T4["<div style='text-align:left'><i>45f8e3a</i><br>self-addressing-identifiers<br>(self-addressing-identifiers.md)</div>"]
    T5["<div style='text-align:left'><i>d6c71b5</i><br>watcher<br>(watcher.md)</div>"]
    
    %% Position terms around the central node in a circle pattern
    %% T1 at the top
    T1 ----> S
    %% T2 at the top right
    T2 ---> S
    %% T3 at the bottom right
    T3 --> S
    %% T4 at the bottom left
    T4 ---> S
    %% T5 at the top left
    T5 ----> S
    
    %% Positioning with invisible connections to create the circular layout
    T1 ~~~ T2
    T2 ~~~ T3
    T3 ~~~ T4
    T4 ~~~ T5
    T5 ~~~ T1
    
    %% Visual layout hints for the circular arrangement
    classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px;
    classDef central fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef hash fill:none,stroke:none,color:#888,font-size:10px;
    class S central;
```
## Relation between glossaries



```mermaid
flowchart TD
    subgraph A["Glossary-A"]
        direction LR
        A1["latest<br><small>(index.html)</small>"]
    end

    subgraph B["Glossary-B"]
        direction LR
        Blatest["latest<br><small>(index.html)</small>"] 
        --- Bjson["json"] 
        --- Bversion1["versions/v1/<br><small>(index.html)</small>"] 
        --- Bversion2["versions/v2/<br><small>(index.html)</small>"] 
        --- Bversion3["versions/v3/<br><small>(index.html)</small>"]
    end

    subgraph C["Glossary-C"]
        direction LR
        Clatest["latest<br><small>(index.html)</small>"] 
        --- Cversion1["versions/v1/<br><small>(index.html)</small>"] 
        --- Cversion2["versions/v2/<br><small>(index.html)</small>"] 
        --- Cversion3["versions/v3/<br><small>(index.html)</small>"]
    end
    
    %% Define connections between the subgraphs
    Cversion2 -.->|tref| Bversion1
    JSON -.->|"tref"| A1
    
    %% Ensure horizontal alignment with invisible links
    A --- B --- C
    linkStyle 2,3 stroke:none,stroke-width:0;

    classDef json fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    class Bjson json
```


