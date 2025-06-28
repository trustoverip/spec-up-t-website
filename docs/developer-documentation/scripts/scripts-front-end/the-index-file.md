---
sidebar_position: 2
---

# The `index.html` file

Your specification is just one file, an `index.html` file. Keeping this file as small as possible should be a priority when adding functionality. There is no lazy loading or optimization. It is basic HTML plus embedded CSS and JS.

This applies only to client-side functionality and not to the "build-time" tasks you do from the command line during the "build" phase. That's code that doesn't end up in the `index.html` after all.

Also, realize that the GitHub API reaches its limit fairly quickly, especially if there is no authentication. So, in everything, keep in mind that the number of requests should remain minimal.
