---
sidebar_position: 4
---

# How it came to be

:::warning

Legacy considerations 2024 First intent to synchronize DIF's Spec-Up and ToIP's Spec-Up-T.

:::

## History

Spec-Up-T is based on Spec-Up ([Spec-Up on Github](https://github.com/decentralized-identity/spec-up)).

Spec-Up is a tool provided by [DIF](https://github.com/decentralized-identity) (Decentralized Identity Foundation) and created by [Daniel Buchner](https://github.com/csuwildcat).

<div className='image-medium center'>
![Logo ToIP and DIF combined](/img/logo.svg)
</div>

From the Spec-Up documentation: “*Spec-Up* is a technical specification development tool that enables you to create rich specification documents for standards bodies and engineering projects by writing in an extended version of markdown that features all the bells and whistles - for example, advanced syntax highlighting, notice blocks, complex tables, charts, UML diagrams, and more.”
| Spec-Up | Spec-Up-T |
|----------------|----------------|
| <div className='image-small'>![DIF Logo](/img/logo-dif.svg)</div>Decentralized Identity Foundation | <div className='image-small'>![ToIP Logo](/img/logo-toip.svg)</div>Trust over IP |
| “Together we're building a new identity ecosystem” | “Developing a complete architecture for Internet Digital Trust. And a better Internet for everyone.” |
| [Spec-Up on Github](https://github.com/decentralized-identity/spec-up) | [Spec-Up-T on Github](https://github.com/blockchainbird/spec-up-t) |
| [DIF website](https://identity.foundation/)  | [ToIP website](https://trustoverip.org/)  |

*Spec-Up-T* is an expansion of [DIF's Spec-Up](https://github.com/decentralized-identity/spec-up) specifically for the needs of the Trust-over-IP foundation. Read more in the elaborate motivation in this technical article: [How it came to be](how-it-came-to-be.md).

## Spec-Up-T

Spec-Up-T stays in sync with Spec-Up and currently adds the following extra functionality:

1. Search & Find (only searches the main content, unlike the browser search);
2. Splitter for Terms and Definition section following the [Termininology Governance Guide](https://trustoverip.github.io/ctwg-terminology-governance-guide/) and various meeting reports since [CTWG April 2024](https://wiki.trustoverip.org/display/HOME/2024-04-22+CTWG+Meeting+Notes)
3. External Reference (xref) functionality
4. Small User Interface enhancements (back-to-top button, automatic copying of urls when clicking on anchors (“$”), menu-item highlighting, definitions collapse button for quick terms-only listing)

*Spec-Up* and *Spec-Up-T* work on *Github*. The specification is stored in a Github repo. Editing can be done locally in a suitable editor (Visual Studio Code is widely used), or can be done web-based via the editor provided by Github if you are logged in.

*[Github Actions](../glossary#github-actions)* is a convenient way to automate things within Github by creating *workflows*. For example, you can create a workflow that generates an updated version of the specification.

- - -

## The ToIP Terms extension of Spec-Up

This article is meant for technical experts in Spec-Up and git.

**What is Spec-Up, what is Spec-Up-T, and why do we need a fork? Could we move faster by creating our own? Do objectives diverge? Is it possible to work together in a better and more productive way?
A brief answer to all of these questions is 'yes'. This article elaborates on the details and comes up with an elegant yet simple and practical git governance proposal that will keep the ties between Spec-Up and Spec-Up-T intact.**

> "Spec-Up is a technical specification development tool that enables you to create rich specification documents for standards bodies and engineering projects by writing in an extended version of markdown that features all the bells and whistles - for example, advanced syntax highlighting, notice blocks, complex tables, charts, UML diagrams, and more."
By Spec-Up creator Daniel Buchner at Decentralised Identity Foundation (DIF).

Spec-Up is a great tool for creating online standardization specifications. We use it a lot at TrustoverIP. Recently, we also started contributing to DIF's Spec-Up code.

At ToIP, we support the original objective of DIF with Spec-Up. Spec-Up, as it is now, gives us a base with which we want to stay in sync. Why do we want to merge changes to and from DIF's spec-up? 
- To acknowledge the great work accomplished by DIF
- Support a standard specification tool in the SSI field that overarches the active umbrella organizations
Last but not least, we need to combine current and future efforts. 

### What's different?
 
At ToIP, we do more with concepts and terminology than Spec-Up has foreseen. An example of this work is versioning individual terms and versioning who references them and when have been proven critical to building consensus within ToIP.

To offer ToIP-specific Spec-Up functionality, we need to extend the code. Happily, we are able to extend Spec-Up with specific front-end and back-end functionality. As we did before, we could offer those extensions as a PR to DIF's Spec-Up. In practice, this means asking Daniel Buchner to have a look at it and asking him to consider merging the new code into the main code repository of Spec-Up.

### A rock and a hard place

What could be problematic for ToIP about the approach to present PRs regarding our *specific* ToIP code to DIF's Spec-Up:
1. We put Daniel Buchner / DIF on the critical path for ToIP development
2. We ask DIF to accept bolt-ons to a lean and mean Spec-Up
3. We trigger discussions about the objectives of Spec-Up, where we want to implement Spec-Up right away.
This leaves us between a rock and a hard place if we were to proceed as before.

### Versioning of terms and interactive use of specifications

At ToIP, we need a Spec-Up tool that has a slightly different angle to static site generation for specification documents:
1. because we have a ToIP-specific fine-grained view of concepts and terminology.
2. We should have a few front-end amendments that would not match the lean and mean Spec-Up at DIF with the vision of a compact, simple solution for standards documents.
3. We can extend the layout capabilities to adhere to the standards of specific target audiences.
The last reason is that we want to move faster with as few "desks to go for a stamp" as possible.
We call this extended Spec-Up *Spec-Up-T*, where' T' can both cover - or refer to - 'Terms' and 'ToIP.'

### No-go solo

What if we declared a part of the code in the DIF Spec-Up repository a *no-go area*? More specifically, within a common shared area, we only change code under consensus by offering PRs to be accepted and merged by DIF. That would make coding easier and offer a clear division in feature sets of Spec-Up and Spec-Up-T.

Due to the reasons listed above, we need to partly develop solo in a fork (Spec-Up-T), and then we could offer our work to DIF. If they merge our code in their repo, that'd be great because it would confirm consensus about the objectives behind Spec-Up. But this mutual merge is optional for DIF. 

### How do we stay in sync?

We propose a "bi-directional sync" or "mutual synchronization" model. In this model, both repositories are equally important, and changes are synced between them at will to ensure they both contain the same information or updates. 

### Charting territories

For clarity, there are three main perspectives on Spec-Up(-T) publicly AND on your local computer: 
- **Authors** look at the ready-to-use Spec-Up github.com version (after running Starter-pack)
- **Coders** look at the npm Spec-Up libraries
- **Users** see the generated end-product on github.io (index.html)

### Perspective: Authors
Authors of a new Specification start with an empty directory on their local machine. After the command `npm install spec-up-T`, the spec directory and all the files mentioned will be present. The grey files are not to be touched because they are generated results. The green files can be altered to fill and configure the new specification. A Spec-Up-T install will typically include all DIF Spec-Up codes.

#### What's the meaning of this? ->
After this, an author can start filling the project and configuring Spec-Up(-T).

![image](/img/how-it-came-to-be/HymBy8j4A.png)

Next is the 'Npm install` command that populates the author's local Specification repo with the Spec-Up(-T) code.

Mind you; it's no different on github.com: a `push` will invoke a github action that generates a branch called `gh-pages` with the same files.

#### What's the meaning of this? ->
Both a local and remote version of an author's specification can be generated, monitored, and curated.

![image](/img/how-it-came-to-be/H1aQg8iNC.png)

The static site generation results in a one-page `index.html` file. 

#### What's the meaning of this? ->
An author can develop and test the specification locally and then push it to production.

![image](/img/how-it-came-to-be/H1Gk-UiEA.png)

#### Important note
In his wish to put the github page online, the implementor must follow a few configuration steps on the github.com repo, branch `master`:
> Go to 'Settings' -> 'Pages' (you need administrator rights)

To publish the specification as a one-pager on github.io.

![image](/img/how-it-came-to-be/rJAWXLsNR.png)


### Perspective: Coders

Suppose DIF's Spec-Up is stable and not actively enhanced further. Spec-Up can still merge PRs from others. In time, Spec-Up-T libraries will grow (second circle pair), and with this development and through merges, Spec-Up can cherry-pick whatever it wants to incorporate from Spec-Up-T and grow too, without diverging (third circle pair).

![image](/img/how-it-came-to-be/SyxaaHsEC.png)

The image below shows the github.com repo and its npm library section in green, red, and orange. We won't touch the red and orange sections in our repo 'Spec-Up-T' without making a separate branch and offering the changes as a PR to DIF.

![image](/img/how-it-came-to-be/Hy_mVl1rR.png)

Mind you, the `Spec` directory regularly holds the authors' markdown, but it's crossed out because this is a configurable location.

### Legend
- Red: definitely do not touch anything because the red files and red directories are generated, and some are core components
- Orange: may touch, but in consultation via PRs with DIF / Daniel Buchner
- Green: These are the files that can freely be altered under Spec-Up-T. 

In the orange sections, we could make amendments to ToIP concepts and terminology. By doing so, we can move forward without having to wait for DIF to accept or reject these changes.

Other Spec-Up-based repos could come over to Spec-Up-T and pull the amendments that we've made to their repo. We'll branch off per feature. Because we stay in sync with the latest Spec-Up, a clean merge with little or no merge conflicts should be possible. Of course, for this to happen, the target repo needs to be in sync with the latest Spec-Up, too.

### Preparatory code organization and Git configuration in current DIF Spec-Up

To have a clean start, we suggest offering a PR to Daniel Buchner. This PR doesn't change any feature or outcome at the front-end side of a Spec-Up-generated site but only alters the code organization. These are the points of interest:

1. Maintain a Clean Division: Currently, our Node.js scripts are placed in the root directory, while client-side JavaScript and CSS have their own directory under /assets. We should aim for a similar clean separation of all Node.js (and server-side code in general) for all new developments. By organizing new features and code into separate files within a dedicated directory, we can ensure that code and content are even more manageable and even better organized.

2. Minimize Changes to Existing Code: This is done to facilitate smoother updates and reduce the burden of acceptance checks; it's crucial to keep modifications to existing code to a minimum. By placing new code in distinct files and directories, we allow ongoing work without significant disruption. This approach respects the existing codebase while permitting necessary extensions and bug fixes.

3. Exclude Generated Files from Git. In our case, it is about node_modules and generated files (e.g., everything in /compiled). It should not be included in our Git repositories. These files are the result of compilation commands like `$ gulp compile` and can be recreated from the source, making their inclusion in version control redundant and cluttering.

4. Maintenance issues:
- main and master branch?! What's the use of keeping both?
- .gitignore revision (fonts in .ignore? other stuff in .gitignore?)