# `specs-generated.md`

```mermaid
flowchart TD
    %% Input Sources
    A[specs.json<br/>Base configuration] --> D[insertTermIndex function]
    B[.cache/term-index.json<br/>Term definitions array] --> D
    C[Term definition .md files<br/>Individual glossary terms] -.-> B
    
    %% Processing
    D --> E{Find 'terms-and-definitions-intro.md'<br/>in markdown_paths}
    E -->|Found at index| F[Insert term files<br/>after intro file]
    E -->|Not found| G[No insertion performed]
    
    %% Output Generation
    F --> H[specs-generated.json<br/>Complete build configuration]
    G --> H
    
    %% File Structure
    H --> I[.cache/ directory<br/>Build artifacts]
    
    %% Downstream Usage
    H --> J[Spec-Up or similar<br/>Document generator]
    J --> K[Final HTML/PDF<br/>specification]
    
    %% Process Flow
    subgraph "Build Pipeline"
        L[1. Process terms] --> M[2. Generate term-index.json]
        M --> N[3. Insert term index]
        N --> O[4. Create specs-generated.json]
        O --> P[5. Generate final docs]
    end
    
    %% Data Flow
    subgraph "Configuration Evolution"
        Q[Original specs.json<br/>Static paths] --> R[Term definitions<br/>Dynamic content]
        R --> S[specs-generated.json<br/>Complete configuration]
    end
    
    %% Styling
    classDef input fill:#e1f5fe
    classDef process fill:#f3e5f5
    classDef output fill:#e8f5e8
    classDef artifact fill:#fff3e0
    
    class A,B,C input
    class D,E,F,G process
    class H,I output
    class J,K,L,M,N,O,P,Q,R,S artifact
    ```