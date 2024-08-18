---
sidebar_position: 3
---

# External Term References

It is possible to include references to terms from external spec-up generated specifications. To include a source you would like to pull references from include an `external_specs` array in your spec config. The value should be a key/value object where the key is used in the external reference below and the value is the URL of the external spec.

::: example

```json
{
  "specs": [
    {
      ...
      "external_specs": [
        {"test-1": "https://kordwarshuis.github.io/spec-up-xref-test-1/"}
      ]
    }
  ]
}
```

:::

To include an external term reference within your spec use the following format `[[xref: {title}, {term}]]` where `{title}` is the title given to the spec in the config and `{term}` is the term being used. For example using the PE spec given in the example above [[xref: test-1, AAL]]
