---
sidebar_position: 20
---
# Adding to Spec-Up-T

## How to

This guide explains how to add a new specification reference for use in Spec-Up-T.

1. **Add the Specification to specref.org**  
   Follow the instructions in [Adding to specref.org](./add-to-specref.md).

2. **Ensure Availability in Spec-Up-T**  
   Verify that the specification is included in one of the sources listed in the [`gulpfile.js`](https://github.com/blockchainbird/spec-up-t/blob/master/gulpfile.js#L19).

3. **Recompile References**  
   Update the compiled references by running the following command in the root of your Spec-Up-T repository:

   ```bash
   gulp refs
   ```

   See [the relevant line in `gulpfile.js`](https://github.com/blockchainbird/spec-up-t/blob/master/gulpfile.js#L67).

4. Use the Reference
   Incorporate the new reference in your specification as described in the [Spec-Up documentation](https://identity.foundation/spec-up/#external-spec-references).


## Explanation

Running the `gulp refs` command retrieves the latest reference data from remote sources and updates the `refs.json` file located at: [assets/compiled/refs.json](https://github.com/blockchainbird/spec-up-t/blob/master/assets/compiled/refs.json).

When rendering a specification using the command `npm run menu 1`, any `[[spec: …]]` placeholders in the content will be replaced with the corresponding reference data from `refs.json`. This ensures that specifications are rendered with up-to-date and accurate references.
