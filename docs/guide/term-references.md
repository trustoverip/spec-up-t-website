---
sidebar_position: 3
---

## Term References

### Definition Lists

Many specs may want to include a section for terminology references, and Definition Lists are a great way to do that. Here's how to leverage Spec-Up's automatic term reference features via Definition List markup:

<pre>
[[def: Term 1, Term One]]:
~ This is the first term we will define.

[[def: Term 2, Term Two]]:
~ This is the second term, but not the last.

[[def: Term 3, Term Three]]:
~ This is the last term, because you know what they say: third term's the charm!
</pre>

[[def: Term 1, Term One]]:
~ This is the first term we will define.

[[def: Term 2, Term Two]]:
~ This is the second term, but not the last.

[[def: Term 3, Term Three]]:
~ This is the last term, because you know what they say: third term's the charm!

Now let's refer to some of the terms defined above to show how the auto-linking of terms works: [[ref: Term 1]], [[ref: Term Two]], [[ref: Term 3]]. Additionally, as long as you define your terms using Definition Lists (as seen in the markdown above), you will be able to hover any reference to a term to see a tooltip with its definition.

### Table-defined Terms

You can also reference table-oriented terms and definitions which are decomposed into heading-titled attributes in distinct cells:

<pre>
Variable           | Default Value | Max Value
------------------- | -------------- | ---------
[[def: Variable 1]] | 123          | 9999
</pre>

Variable            | Default Value | Max Value
------------------- | ------------- | ---------
[[def: Variable 1]] | 123           | 9999

Anytime you add a definition of a term in the first column of a table, like [[ref: Variable 1]], it will link to the cell and display a tooltip with the entire set of row values when you hover the term.
