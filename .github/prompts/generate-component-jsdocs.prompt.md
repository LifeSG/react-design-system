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

4. `src/[COMPONENT_NAME]/[COMPONENT_NAME].style.tsx` or related style files
   Purpose: identify transient `$`-prefixed props and internal style-only types to
   skip.

If `types.ts` does not exist, do not create it. Only document the exported
component function and any sub-components in existing `src/` files.

If types are split across multiple files under the same component directory,
read the related files and document the public ones.

---

## What To Document

Document these when they are public and consumer-facing:

-   Exported component function JSDoc in `[COMPONENT_NAME].tsx`
-   Exported `*Props` interfaces in `types.ts`
-   Exported public nested interfaces or config types used by consumers
-   Exported public union type aliases
-   Exported handle or ref API types
-   Deprecated public props or types
-   Exposed sub-components such as `Parent.Item`

Do not document:

-   Internal helper types
-   `StyleProps` or `*StyleProps` interfaces
-   `$`-prefixed transient style props
-   Pure implementation details
-   Obvious passthrough props unless a short comment materially helps

---

## Component Function JSDoc

Add or improve JSDoc on the exported component function in
`src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx`.

The component JSDoc should usually include:

-   A one-line purpose statement
-   One short paragraph describing when to use it, key behavior, and notable
    interaction model
-   Optional `@example` only when it clarifies usage

Do not add `@keywords`.

Include in the prose when relevant:

-   Controlled vs uncontrolled behavior
-   Desktop/mobile or responsive behavior
-   Main capabilities
-   Sub-component anatomy
-   Accessibility behavior

Example:

````tsx
/**
 * Renders the main navigation bar for desktop and mobile layouts.
 *
 * Use this component to present primary site navigation, optional branding,
 * and action buttons in a single responsive header. Mobile navigation falls
 * back to desktop items when mobile-specific items are not provided.
 *
 * @example
 * ```tsx
 * <Navbar
 *   selectedId="overview"
 *   items={{
 *     desktop: [{ id: "overview", label: "Overview", href: "/overview" }],
 *   }}
 * />
 * ```
 */
export const Navbar = ({
````

---

## Public Type JSDoc

Add symbol-level JSDoc to exported public interfaces and type aliases in
`types.ts`.

---

## Prop-Level Decision Rules

Do not document every prop. Use the convention file to decide which props need
JSDoc and which should be left undocumented.

If a public `data-testid` prop is documented, use this wording:

```tsx
/**
 * Sets the `data-testid` attribute for targeting the element in automated
 * tests.
 */
"data-testid"?: string | undefined;
```

---

## Tags

Use only the tags allowed by `JSDOC_CONVENTIONS.md` and only when they add real
value.

---

## Unions, Handles, and Generics

Document these when they are public and meaningful to consumers. Follow the
convention file for how much detail to include.

```tsx
/**
 * Navigation item rendered by the navbar.
 *
 * `itemType` determines whether the item is a standard link or a custom
 * component slot.
 */
export type NavItemProps<T> = NavItemLinkProps<T> | NavItemComponentProps;
```

Document handle or ref API types when they expose imperative methods.

Example:

```tsx
/**
 * Imperative handle returned by NavbarDrawer via `ref`.
 * Use the ref to dismiss the drawer programmatically.
 */
export type NavbarDrawerHandle = HTMLDivElement & {
    dismissDrawer: () => void;
};
```

For generic public types, explain the generic meaning in plain prose when it is
important to consumers.

---

## Sub-Components

If the component exposes sub-components, add or improve JSDoc on each
sub-component's exported constant.

Check for exposure patterns in:

-   `Object.assign` in `[COMPONENT_NAME].tsx`
-   object-literal exports in `index.ts`

Place the JSDoc on the exported sub-component constant itself, not on a private
inner render function.

Do not add `@keywords` to sub-components.

Example:

```tsx
/**
 * Renders an individual accordion section within Accordion.
 */
export const AccordionItem = ({
```

---

## Skip Rules

Skip documentation for:

-   inherited standard HTML attributes unless locally redefined with meaningful
    behavior
-   obvious passthrough props with no behavioral meaning
-   private helpers
-   style-only and transient props
-   comments that would only restate the property name or type

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
-   Which public interfaces, type aliases, component functions, or sub-components
    were documented or improved
-   Count of props documented or improved
-   Any public props or types intentionally skipped, and why

If the component directory does not contain enough public surface to justify new
JSDoc, say so instead of forcing comments.
