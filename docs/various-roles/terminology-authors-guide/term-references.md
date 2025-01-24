---
sidebar_position: 2
---

# Term References

See the [demo site](https://trustoverip.github.io/spec-up-t-demo-on-documentation-website/#term:aaa-example-1).


:::info

If you've been working with Spec-Up, it's good to know that adding a term file doesn't require adding it to the configuration file anymore; it's automatic now.

:::

## Definition Lists

Many specs may want to include a section for terminology references, and Definition Lists are a great way to do that. Here's how to leverage Spec-Up's automatic term reference features via Definition List markup:

```markdown
[[def: Term 1, Term One]]:
~ This is the first term we will define.

~ Second paragraph

```

Now let's refer to some of the terms defined above to show how the auto-linking of terms works. Additionally, as long as you define your terms using Definition Lists (as seen in the markdown above), you will be able to hover any reference to a term to see a tooltip with its definition. See the [demo site](https://blockchainbird.github.io/spec-up-t-demo-on-documentation-website/#term:term-1).

## What are the “~” ?

That is how Markdown indicates that it is a &lt;dd&gt;&lt;/dd&gt;, the definition part of a “definition list.” Just use it for each sentence. In the future, we want to catch this automated so that if you accidentally forget it, you still get it right.

What goes wrong if you don't? You see, some things don't fold in and out properly, for example, because the structure of the HTML is no longer correct.

## Table-defined Terms

You can also reference table-oriented terms and definitions which are decomposed into heading-titled attributes in distinct cells:

```markdown
Variable            | Default Value  | Max Value
------------------- | -------------  | ---------
[[def: Variable 1]] | 123            | 9999
```

Variable            | Default Value | Max Value
------------------- | ------------- | ---------
[[def: Variable 1]] | 123           | 9999

Anytime you add a definition of a term in the first column of a table, like [[ref: Variable 1]], it will link to the cell and display a tooltip with the entire set of row values when you hover the term.
