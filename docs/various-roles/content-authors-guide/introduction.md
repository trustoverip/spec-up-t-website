---
sidebar_position: 1
---

# Intro

## Use cases


Uses: an IDE, git and a browser extension, to edit Spec-Up markdown files for his/her specific context (mental model) in a version managed environment, authenticated, to write the concept and specificatio.

### A. Write content 
Content in markdown will be processed by Spec-Up-T. There is extra functionality in Spec-Up-T to reference
1. Write your standardization/specification in `.md` in the `spec` directory, either locally on your computer or on gtihub.com. 
2. `[[ref: ]]` terms that you have definitions of, available in the Spec-Up-T-based terminology section
3. `[[xref: ]]` terms that you have definitions of, available in the Spec-Up-T-based terminology section of hosted glossaries by others.
4. In case you use 3., then specify the repo in your `specs.json` file, before you can start referencing them.
5. In case you use 2., 3. and 4. a content author can check the versions and its management of the own terminology section and also of the hosted glossaries. And pick the right form of a reference: either 2 or 3 of the plain URLs to a specific version of a term. 

### B. Save the modifications
With sufficient user-rights on a repo a content author can directly write changes to a repository. This is done via the `git push` command. Sometimes a content author does not have to explicitly use this command. For example if you use the github.com editor with sufficient user-rights as a logged-in user, than the push (and execution of invoked scripts by this push) will automatically follow.

### C. Offer changes as a PR
Without sufficient user-rights you can still offer the changes to the repo. Follow use case B, and then automatically your edit will go into the PR route on github.com.

On a local machine you won't be able to push the changes to the production server. Instead you might want to push the changes to your own user-account on github.com and from there offer a PR on the destination repo.

### D. Check technical consistency
He/she uses browser extensions to check technical consistency of the links in the text and harvests a personal collection of term definitions.
