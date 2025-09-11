---
sidebar_position: 1
---

# Adding client-side functionality

Client-side JavaScript and CSS can be found in these directories: `/assets/js` and `/assets/css`.

This code must first be "compiled" before it enters `index.html`. Compiling, in this case, means that it will end up in the directory `/assets/compiled`. If it is there, it will end up in a newly generated `index.html` via the `render` step. For rendering, see the admin section.

If you introduce a new CSS or JS file, it should be declared here: `/src/asset-map.json`.

This is the command to compile:

```bash
gulp compile
```

### Testing

So, if you have written client-side JavaScript or custom CSS, you need to take the following steps to get this code running:

```bash
gulp compile
```

Wait for the code to finish. Then:

```bash
npm run render
```

Now, your `index.html` file should be created or updated.

### Handling data

Since everything is contained in one HTML file, the question arises as to how we store and call data. After all, we can't load external JSON because we want to keep everything within this one HTML file.

The solution is to include the data as an embedded JavaScript variable. In the development environment (the installation on your file system from where you invoke commands on the command line), you can choose to store the data as JSON as well. However, in order to get it working in the HTML file, you will also have to include a JS variable. You will have to arrange this through Gulp.

### Gulp

Of course, you can only use Gulp if you have it [installed](https://gulpjs.com/docs/en/getting-started/quick-start).

:::warning
If Gulp suddenly stops working even though it worked before, it could be because you are using NVM and have a different Node.js version active.
:::


