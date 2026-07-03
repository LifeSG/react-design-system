---
agent: agent
argument-hint: "Provide the name of a component to generate or improve JSDoc for its public API. For example, 'Button' or 'InputSelect'."
description: "Documents a component's public API in src/ by adding or improving JSDoc on exported component functions, public props types, public unions, and sub-components using the repo JSDoc convention."
---

# Generate Component JSDoc

Use this prompt to add or improve JSDoc for a single component's public API in
`src/[COMPONENT_NAME]/`.

The user must provide a component name. If they do not, ask for one.

Your source of truth is:

-   `JSDOC_CONVENTIONS.md`
-   The component's runtime behavior in `src/[COMPONENT_NAME]/`

If this prompt and `JSDOC_CONVENTIONS.md` ever disagree, follow
`JSDOC_CONVENTIONS.md`.

Files you may modify:

-   Only files under `src/`

Do not read or modify:

-   Storybook files
-   `stories/`
-   Prompt files, convention files, or docs outside `src/`

---

## Goal

Produce JSDoc that improves:

-   IntelliSense hover quality
-   AI understanding of the component API
-   Accuracy of generated props documentation

Follow `JSDOC_CONVENTIONS.md` for all writing style, tag usage, examples, and
decisions about what should or should not be documented.

Do not add boilerplate comments. Document only the behavior that TypeScript
types alone do not explain.

---

## Files To Read

Read these files in order when they exist:

1. `src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx`
   Purpose: exported component function, runtime behavior, controlled/uncontrolled
   patterns, sub-components, and existing JSDoc.

2. `src/[COMPONENT_NAME]/types.ts`
   Purpose: public props, public nested types, unions, handles, and deprecations.

3. `src/[COMPONENT_NAME]/index.ts`
   Purpose: detect sub-component exposure patterns.

If `types.ts` does not exist, do not create it. Only document the exported
component function and any sub-components in existing `src/` files.

If types are split across multiple files under the same component directory,
read the related files and document the public ones.

---

## What To Document

Follow `JSDOC_CONVENTIONS.md` for scope, skip rules, tag usage, and writing
style. The conventions file is the single source of truth for **what** to write;
this prompt only governs **how** to approach the task.

Do not create new type files.

---

## Workflow

1. Read the component runtime and public types.
2. Identify the exported public API surface.
3. Decide which symbols need JSDoc based on the repo convention.
4. Improve existing JSDoc where it is vague, incomplete, or misleading.
5. Add new JSDoc only where it provides real value.
6. Skip obvious or internal symbols.
7. Re-read your edits mentally and remove filler language.

---

## Output Requirements

Report:

-   Which files were updated
-   Which public interfaces, type aliases, component functions, or sub-components were documented or improved
-   Count of props documented or improved
-   Any public props or types intentionally skipped, and why

If the component directory does not contain enough public surface to justify new JSDoc, say so instead of forcing comments.
