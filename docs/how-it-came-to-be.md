---
sidebar_position: 7
---

# How it came to be

**the ToIP Terms extension of Spec-Up**

This article is meant for technical experts in Spec-Up and git.

**What is Spec-Up, what is Spec-Up-T and why do we need a fork? Could we move faster by creating our own? Do objectives diverge? Is it possible to work together in a better and more productive way?
A brief answer to all of these questions is ‘yes’. This article elaborates on the details and comes up with an elegant, yet simple and practical, git governance proposal that will keep the ties between Spec-Up and Spec-Up-T in tact.**

> “Spec-Up is a technical specification development tool that enables you to create rich specification documents for standards bodies and engineering projects by writing in an extended version of markdown that features all the bells and whistles - for example: advanced syntax highlighting, notice blocks, complex tables, charts, UML diagrams, and more.”
By: Spec-Up creator Daniel Buchner, at Decentralised Identity Foundation (DIF).

Spec-Up is a great tool for creating online standardization specifications. We use it a lot at TrustoverIP. Recently, we also started contributing to DIF’s Spec-Up code.

At ToIP we support the original objective of DIF with Spec-Up. Spec-Up, as it is at present, gives us a base that we want to stay in sync with. Why do we want to merge changes to and fro DIF's spec-up? 
- To acknowledge the great work accomplished by DIF
- Support a common specification tool in the SSI field that overarches the active umbrella organisations
- last but not least: to combine current and future efforts. 

### What's different?
 
At ToIP we do more with concepts and terminology than has been foreseen with Spec-Up. For example: versioning of individual terms, and versioning of who references them and when, has been proven a key to success of building consensus within ToIP.

To offer ToIP-specific Spec-Up functionality we need to extent the code. Happily, we are able to extend Spec-Up with specific front-end and back-end functionality. As we did before, we could offer those extensions as a PR to DIF’s Spec-Up. In practise this means: and ask Daniel Buchner to have a look at it and ask him to consider merging the new code into the main code repository of Spec-Up.

### A rock and a hard place

What could be problematic for ToIP about the approach to present PRs regarding our *specific* ToIP code to DIF's Spec-Up:
1. We put Daniel Buchner / DIF on the critical path for ToIP development
2. We ask DIF to accept bolt-ons to a lean and mean Spec-Up
3. We trigger discussions about objectives of Spec-Up, where we want to implement Spec-Up right away.
This leaves us between a rock and a hard place if we were to proceed as before.

### Versioning of terms and interactive use of specifications

At ToIP we have a need for a Spec-Up tool that has a slightly different angle to static site generation for specification-documents:
1. because we have a ToIP-specific fine-grained view on concepts and terminology.
2. we might want to have a few front-end amendments that would not match the lean and mean Spec-Up at DIF with the vision to have a compact simple solution for standards documents.
3. We might want to extend the layout capabilities to adhere to standards of specific target audiences.
The last reason is that we want to move faster with as little “desks to go for a stamp” as possible.
We call this extended Spec-Up *Spec-Up-T*, where ’T’ can both cover - or refer to - ‘Terms’ and ‘ToIP’.

### No-go solo

What if we were to declare a part of the code in the DIF Spec-Up repository a *no-go area*? More specifically, within a common shared area we only change code under consensus by offering PRs to be accepted and merged by DIF. That would make coding easier and offer a clear division in feature sets of Spec-Up and Spec-Up-T.

Due to the reasons listed above, we need to partly develop solo in a fork (Spec-Up-T), and then we could offer our work to DIF. If they merge our code in their repo, that’d be great because it would confirm consensus about objectives behind Spec-Up. But this mutual merge is optional for DIF. 

### How do we stay in sync?

We propose a "bi-directional sync" or "mutual synchronization" model. In this model, both repositories are equally important, and changes are synced between them at will to ensure they both contain the same information or updates. 

### Charting territories

For clarity, there are three main perspectives on Spec-Up(-T) publicly AND on your local computer: 
- **Authors** look at ready-to-use Spec-Up github.com version (after running Starter-pack)
- **Coders** look at the NPM Spec-Up libraries
- **Users** see the generated end-product on github.io (index.html)

### Perspective: Authors
Authors of a new Specification start with an empty directory on their local machine. After the command `npm install spec-up-T` the spec directory and all the files mentioned will be present. The grey files are not to be touched because they are generated results. The green files can be altered to fill and configure the new Specification. A Spec-Up-T install will typically include all DIF Spec-Up code.

#### What's the meaning of this? ->
After this an author can start filling the project, and configuring Spec-Up(-T).

![image](/img/how-it-came-to-be/HymBy8j4A.png)

Next is the`Npm install` command that actually populates the authors local Specification repo with the Spec-Up(-T) code.

Mind you, it's no different on github.com: a `push` will invoke a github action that generates a branch called `gh-pages` with the same files.

#### What's the meaning of this? ->
Both a local and remote version of an author's specification can be generated, can be monitored and curated.

![image](/img/how-it-came-to-be/H1aQg8iNC.png)

The static site generation result in a one page `index.html` file. 

#### What's the meaning of this? ->
An author can develop and test the Specification locally and then push it to production.

![image](/img/how-it-came-to-be/H1Gk-UiEA.png)

#### Important note
To get the github page online a few configuration steps must follow on github.com repo, branche `master`
> Go to 'Settings' -> 'Pages' (you need administrator-rights)

to publish the Specification as a one pager on github.io.

![image](/img/how-it-came-to-be/rJAWXLsNR.png)


### Perspective: Coders

Suppose DIF's Spec-Up is stable and not actively enhanced further. Spec-Up still can merge PRs from others. In time Spec-Up-T libraries will grow (second circle pair) and with this development and through merges Spec-Up can cherry pick whatever it wants to incorporate from Spec-Up-T and grow too, without diverging (third circle pair).

![image](/img/how-it-came-to-be/SyxaaHsEC.png)

The image below shows the github.com repo and its NPM library section op the  in green, red and orange. and in below. We won’t touch the red and orange sections in our repo ‘Spec-Up-T’ without making a separate branche and offer the changes as a PR to DIF.

![image](/img/how-it-came-to-be/Hy_mVl1rR.png)

Mind you, the `Spec` directory regularly holds the authors' markdown, but it's crossed out because this is a configurable location.

### Legend
- Red: definitely do not touch anything, because of the red files and red directories are generated and some are core components
- Orange: may touch, but in consultation via PRs with DIF / Daniel Buchner
- Green: these are the files to freely alter under Spec-Up-T. 


In the orange sections, we could make amendments for ToIP concepts and terminology. By doing so, we can move forward without having to wait for DIF to accept or reject these changes.

Other Spec-Up-based repos could come over to Spec-Up-T and pull the amendments that we've made to their repo. We’ll branch off per feature. Because we stay in sync with the latest Spec-Up, a clean merge with little or no merge conflicts should be possible. Of course, for this to happen, the target repo needs to be in sync with the latest Spec-Up too.

### Preparatory code organization and Git configuration in current DIF Spec-Up

To have a clean start we suggest to offer a PR to Daniel Buchner. This PR doesn't change any feature nor outcome at the front-end side of a Spec-Up generated site, but only alters the code organisation. Thesse are the points of interest:

1. Maintain a Clean Division: Currently, our Node.js scripts are placed in the root directory, while client-side JavaScript and CSS have their own directory under /assets. We should aim for a similar clean separation of all Node.js (and server side code in general) for all new developments. By organizing new features and code into separate files within a dedicated directory, we can ensure that code and content is even more manageable and even better organized.

2. Minimize Changes to Existing Code: To facilitate smoother updates and reduce the burden of acceptance checks, it's crucial to keep modifications to existing code to a minimum. By placing new code in distinct files and directories, we allow ongoing work without significant disruption. This approach respects the existing codebase while permitting necessary extensions and bug fixes.

3. Exclude Generated Files from Git. In our case it is about node_modules, generated files (e.g., everything in /compiled). It should not be included in our Git repositories. These files are the result of compilation commands like `$ gulp compile` and can be recreated from source, making their inclusion in version control redundant and cluttering.

4. Maintenance issues:
- main and master branch?! What's the use of keeping both?
- .gitignore revision (fonts in ignore? other stuff in .gitignore?)