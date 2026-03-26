---
mode: "agent"
description: "Generates or copies JSDoc comments for component props and fills catalog content gaps (MDX overview, stories tags)."
---

# Document Component Props and Fill Catalog Gaps

You will document all public props in `src/[COMPONENT_NAME]/types.ts` and ensure the
component catalog has a `description` and `searchKeys` by filling the MDX overview and
stories tags.

The user must specify a component name. If they do not, prompt them for one.

## Step 0: Decide Which Approach to Use

Before reading anything else, check whether `stories/[COMPONENT_NAME]/props-table.tsx`
exists.

-   **If it exists** → use the **Props-Table Approach** (Section A). Props-table
    descriptions are manually written and more accurate than inferred descriptions.
-   **If it does not exist** → use the **Source-Inference Approach** (Section B).

Either way, always complete **Section C** (MDX overview + stories tags) before
finishing.

If `src/[COMPONENT_NAME]/types.ts` does not exist, skip Sections A and B entirely — do
not create the file. Still complete Section C.

---

## Section A — Props-Table Approach (props-table.tsx exists)

### A1: Read Source Files

1. `stories/[COMPONENT_NAME]/[COMPONENT_NAME].mdx` — extract overview description and
   high-level feature headings
2. `stories/[COMPONENT_NAME]/props-table.tsx` — parse the `DATA: ApiTableSectionProps[]`
   array for all property descriptions
3. `src/[COMPONENT_NAME]/types.ts` (and any related type files if types are spread across
   multiple files — use grep if needed)
4. `src/[COMPONENT_NAME]/[COMPONENT_NAME].style.tsx` (if present) — identify `$`-prefixed
   transient props to skip

### A2: Compose the Interface JSDoc

Combine the MDX overview and relevant high-level section headings into a concise
description above the main `*Props` interface:

```typescript
/**
 * Primary description from the MDX overview.
 *
 * Additional capabilities, structure, or modes inferred from MDX section headings.
 *
 * @keywords keyword1, keyword2, keyword3
 */
export interface ComponentNameProps {
```

For `@keywords`, provide 3–6 comma-separated terms a developer might search for (see
Section B2 for keyword guidelines). These are read by the component catalog and
Storybook — they must be present on the main `*Props` interface.

**Include** in the additional sentences:

-   Component anatomy (e.g., `Tab` + `Tab.Item` sub-components)
-   Key feature capabilities (sort, multi-select, loading states, etc.)
-   Controlled vs uncontrolled mode notes

**Exclude**: code examples, step-by-step usage, edge-case warnings.

### A3: Write Property JSDoc from Props-Table

For each `attribute` in `DATA`, add a JSDoc comment above the matching prop in `types.ts`.

**Finding the right type file**: Props tables often document types spread across multiple
files. Match `section.name` (e.g., `"HeaderItemProps"`) to the interface with that name
wherever it lives in `src/`. Use grep to locate it if not in the main `types.ts`.

**Converting props-table values to JSDoc**:

-   `description` (string or JSX) → plain-text JSDoc comment
    -   `<code>value</code>` → `` `value` ``
    -   HTML entities → appropriate Unicode
    -   Links → keep URL in parentheses
-   `defaultValue` present → append `@default "value"` tag
-   `mandatory: true` → do not add `@default` (required prop)
-   `name: ""` empty-name attributes → include as a leading comment on the interface body
    if relevant

**Replacing existing JSDoc**: Replace existing JSDoc comments with the props-table
description, even if JSDoc already exists — props-table content is the authoritative
source.

### A4: Handle Multiple Sections

A single `props-table.tsx` can document several types:

-   Section with no `name` → describes the main component props (e.g., `DataTableProps`)
-   Section with `name: "HeaderItemProps"` → find and update `HeaderItemProps` wherever
    it is defined in `src/`

Process all sections, not just the first.

---

## Section B — Source-Inference Approach (no props-table.tsx)

### B1: Read Source Files

1. `src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx` — understand what each prop does at runtime
2. `src/[COMPONENT_NAME]/types.ts` — see existing props and any partial JSDoc
3. `src/[COMPONENT_NAME]/[COMPONENT_NAME].style.tsx` (if present) — identify `$`-prefixed
   transient props to skip
4. `stories/[COMPONENT_NAME]/[COMPONENT_NAME].mdx` (if present) — extract overview

### B2: Document the Main Interface

Add a JSDoc block above the main exported `*Props` interface:

````typescript
/**
 * Props for the [Component] component - [one-line purpose]
 *
 * [2-3 sentences: when to use this component, key capabilities, important behaviours]
 *
 * @keywords keyword1, keyword2, keyword3
 *
 * @example
 * ```tsx
 * <ComponentName prop="value">content</ComponentName>
 * ```
 */
export interface ComponentNameProps {
````

For `@keywords`, provide 3–6 comma-separated terms that a developer might search for:

-   Alternative names or common search terms (e.g. `dropdown` for InputSelect)
-   Related UI patterns or concepts (e.g. `multi-select`, `chips`, `filter`)
-   Focus on terms NOT already present in the component's kebab-case name

### B3: Document Each Prop

Apply the pattern that fits each prop type:

**Boolean prop**

```typescript
/**
 * [What it does — active voice, present tense]
 *
 * @default false
 */
disabled?: boolean | undefined;
```

**Enum / union prop**

```typescript
/**
 * [What this prop controls]
 *
 * - `value1`: [When to use it, what it does]
 * - `value2`: [When to use it, what it does]
 *
 * @default "value1"
 */
styleType?: "value1" | "value2" | undefined;
```

**Callback prop**

```typescript
/**
 * Called when [event occurs]
 *
 * @param paramName - [Description]
 */
onEvent?: (paramName: Type) => void;
```

**Object / config prop**

```typescript
/**
 * [What this configuration controls]
 *
 * @see RelatedInterfaceName for all available options
 */
config?: RelatedInterfaceName | undefined;
```

**Required prop (no `?`)**

```typescript
/**
 * [Description — no @default tag for required props]
 */
children: React.ReactNode;
```

**`data-testid` prop** — always document with this standard text:

```typescript
/**
 * Sets the `data-testid` attribute for targeting the element in automated tests.
 */
"data-testid"?: string | undefined;
```

**Exported type alias** — document public union type aliases:

```typescript
/**
 * [What this type represents and when each value applies]
 *
 * - `value1`: [Description]
 * - `value2`: [Description]
 */
export type MyType = "value1" | "value2";
```

**Handle / ref type** — document types that expose an imperative API:

```typescript
/**
 * Imperative handle returned by [ComponentName] via `ref`.
 *
 * Use [Component]'s `ref` prop to access these methods.
 */
export type ComponentHandle = HTMLDivElement & {
    expand: () => void;
    collapse: () => void;
};
```

---

## Section C — Catalog Content (always required)

The component catalog reads from two specific locations — these are separate from JSDoc
and must be filled regardless of which approach was used above.

### C1: MDX Overview (`description` field)

File: `stories/[COMPONENT_NAME]/[COMPONENT_NAME].mdx`

The catalog reads the text immediately after `<Secondary>Overview</Secondary>`. If this
block is missing or empty, add a concise 1–3 sentence description of the component
directly after that marker.

If the `<Secondary>Overview</Secondary>` heading itself is absent, locate the first
logical introductory paragraph in the MDX file and add the heading + description there.

### C2: JSDoc Keywords (`searchKeys` field)

The component catalog reads `@keywords` from the `@keywords` tag on the main `*Props`
interface in `src/[COMPONENT_NAME]/types.ts`. This is the same tag added in Section A2
or B2 — no additional action is needed here if that step was completed.

Verify the `@keywords` tag is present on the main interface before finishing. If it is
missing (e.g. `types.ts` was not modified), add it now.

---

## Writing Standards

-   First line of every JSDoc block: brief description under 80 characters
-   Active voice, present tense: "Displays", "Triggers", "Controls"
-   Be specific: "Disables interaction and shows loading spinner" not "Loading state"
-   Explain every union option — when to choose it
-   Add `@default` for optional props (use `undefined` if no meaningful default exists)
-   Add `@example` for non-obvious or complex props
-   End all sentences with a period
-   Do NOT document props inherited from standard HTML element attributes (e.g. `onClick`,
    `className` from `React.ButtonHTMLAttributes`)
-   If a prop already has JSDoc, improve it if incomplete or unclear; do not discard
    accurate existing content (exception: Section A always replaces with props-table data)

## What NOT to Do

-   Do not document `$`-prefixed transient styled-component props
-   Do not document `StyleProps` or `*StyleProps` interfaces — these are internal
-   Do not write obvious comments: "The disabled prop disables the component"
-   Do not skip enum options — explain each one
-   Do not add `@default` to required props
-   Do not create `types.ts` if it does not already exist
-   Do not modify `props-table.tsx` files

---

## Output Requirements

Report:

-   Which approach was used (props-table or source-inference)
-   Which interfaces and type aliases were documented, with file links
-   Count of props documented
-   Any props skipped and why
-   Any props-table entries that could not be matched to a type (Section A only)
-   Whether the MDX overview block was present or added (Section C1)
-   Whether the stories `tags` array was present or updated (Section C2)
