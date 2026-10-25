---
name: write-jsdoc
description: >-
    Writes or updates JSDoc comments for component APIs — props interfaces,
    component constants, types, hooks, and catalog entries. Follows
    JSDOC_CONVENTIONS.md. Use when documenting a component's public API.
argument-hint: >-
    Provide the component name or path (e.g. "button", "src/navbar").
---

# Write JSDoc

You are tasked with adding or improving JSDoc for a single component's public API in `src/<component-name>/`.

The source of truth for writing style, tag usage, examples, and decisions is `JSDOC_CONVENTIONS.md` at `../../../JSDOC_CONVENTIONS.md`. If this skill and that file ever disagree, follow `JSDOC_CONVENTIONS.md`.

## Input requirements

The user must provide:

1. **Component**, specified as:
    - Component name (e.g. `button`), OR
    - Path to the component folder (e.g. `src/input-select`)

## Goal

Produce JSDoc that improves:

-   IntelliSense hover quality
-   AI understanding of the component API
-   Accuracy of generated props documentation

Do not add boilerplate comments. Document only the behavior that TypeScript types alone do not explain.

## Files to read

Read these files in order when they exist:

1. `src/<component-name>/<component-name>.tsx` — exported component function, runtime behavior, controlled/uncontrolled patterns, sub-components, and existing JSDoc
2. `src/<component-name>/types.ts` — public props, public nested types, unions, handles, and deprecations
3. `src/<component-name>/index.ts` — detect sub-component exposure patterns

If `types.ts` does not exist, do not create it. Only document the exported component function and any sub-components in existing `src/` files.

If types are split across multiple files under the same component directory, read the related files and document the public ones.

## What to document

Follow `JSDOC_CONVENTIONS.md` for scope, skip rules, tag usage, and writing style. Do not create new type files.

## Files you may modify

-   Only files under `src/`

Do not read or modify:

-   Storybook files or `stories/`
-   Prompt files, convention files, or docs outside `src/`

## Workflow

1. Read the component runtime and public types
2. Identify the exported public API surface
3. Decide which symbols need JSDoc based on `JSDOC_CONVENTIONS.md`
4. Improve existing JSDoc where it is vague, incomplete, or misleading
5. Add new JSDoc only where it provides real value
6. Skip obvious or internal symbols
7. Re-read your edits and remove filler language

## Verification checklist

Do **not** start Storybook yourself. Remind the user to run `npm run storybook` and verify props are reflected correctly in Storybook.

## Output

Report:

-   Which files were updated
-   Which public interfaces, type aliases, component functions, or sub-components were documented or improved
-   Count of props documented or improved
-   Any public props or types intentionally skipped, and why

If the component directory does not contain enough public surface to justify new JSDoc, say so instead of forcing comments.
