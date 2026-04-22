---
mode: "agent"
description: "Generates JSDoc for component props and component function from source files. Only modifies src/ files."
---

# Document Component Props

You will document all public props in `src/[COMPONENT_NAME]/types.ts` and add or
improve JSDoc on the exported component function in
`src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx`.

The user must specify a component name. If they do not, prompt them for one.

If `src/[COMPONENT_NAME]/types.ts` does not exist, skip prop documentation — do not
create the file.

**Files you may modify**: only files under `src/`. Do not read or modify any storybook
or stories files.

---

## Step 1: Read Source Files

1. `src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx` — component function, sub-components,
   runtime behaviour, existing JSDoc
2. `src/[COMPONENT_NAME]/types.ts` — existing props and any partial JSDoc; use grep to
   find related type files if types are spread across multiple files
3. `src/[COMPONENT_NAME]/[COMPONENT_NAME].style.tsx` (if present) — identify
   `$`-prefixed transient props to skip

---

## Step 2: Document the Component Function

The component-level description and `@keywords` must both be placed on the **exported
component function** in `src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx`. This ensures both
appear in IntelliSense when consumers hover over the component in their IDE.

Add a JSDoc block above the exported component function:

````typescript
/**
 * [One-line purpose of the component]
 *
 * [2-3 sentences: when to use this component, key capabilities, important behaviours]
 *
 * @keywords keyword1, keyword2, keyword3
 * @example
 * ```tsx
 * <ComponentName prop="value">content</ComponentName>
 * ```
 */
export const ComponentName = ({
````

**`@keywords` guidelines** — provide 3–6 comma-separated terms a developer might search
for:

-   Alternative names or common search terms (e.g. `dropdown` for InputSelect)
-   Related UI patterns or concepts (e.g. `multi-select`, `chips`, `filter`)
-   Focus on terms NOT already present in the component's kebab-case name

**Include** in the description:

-   Component anatomy (e.g., `Tab` + `Tab.Item` sub-components)
-   Key feature capabilities (sort, multi-select, loading states, etc.)
-   Controlled vs uncontrolled mode notes

**Exclude**: step-by-step usage, edge-case warnings.

If the component exposes sub-components (detected in Step 1), also apply **Section D**
to add JSDoc to each sub-component's exported constant.

The `*Props` interface in `types.ts` does **not** need a `@keywords` tag — keywords live
on the component function only.

---

## Step 3: Document Each Prop

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

## Section D — Subcomponent JSDoc (if applicable)

Sub-components are exposed either via `Object.assign` in the main component file, or as
properties of an object literal in `index.ts`. Hovering over `Parent.Sub` in an IDE
resolves to the JSDoc on the **sub-component's own exported constant** — the parent's
JSDoc does not propagate.

### D1: Detect Sub-Component Exposure

Check two locations:

1. `src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx` — look for:
   `export const Parent = Object.assign(Base, { SubName: SubComponent })`
2. `src/[COMPONENT_NAME]/index.ts` — look for:
   `export const Parent = { SubName: SubComponent, ... }`

If neither pattern exists, skip this section.

### D2: Add JSDoc to Each Sub-Component Exported Constant

For each sub-component (e.g. `Accordion.Item` → `AccordionItem`), locate its source file
and add a JSDoc block above its **exported constant**. Focus the description on the
sub-component's role within the parent.

**Arrow-function component:**

```typescript
/**
 * [One-line role of this sub-component within the parent.]
 *
 * [Optional: key behaviour or usage note.]
 */
export const SubComponent = ({
```

**`forwardRef` component** — JSDoc goes on the exported `const`, not on the inner
render function:

```typescript
/**
 * [One-line role of this sub-component within the parent.]
 *
 * [Optional: note if a ref is exposed and what the handle provides.]
 */
export const SubComponent = forwardRef<Handle, Props>(Component);
```

**`React.forwardRef` with a separate `Component` function:**

```typescript
/**
 * [One-line role of this sub-component within the parent.]
 */
export const SubComponent = React.forwardRef(Component);
```

### D3: Placement Rules

-   JSDoc goes on the **exported constant** assigned as the sub-component, not on any
    private inner function (`Base`, `Component`, `NBWithRef`, etc.).
-   Sub-component JSDoc does **not** need `@keywords`.
-   If the sub-component already has JSDoc on its exported const, improve it if vague;
    do not discard accurate content.

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
    accurate existing content

## What NOT to Do

-   Do not document `$`-prefixed transient styled-component props
-   Do not document `StyleProps` or `*StyleProps` interfaces — these are internal
-   Do not write obvious comments: "The disabled prop disables the component"
-   Do not skip enum options — explain each one
-   Do not add `@default` to required props
-   Do not create `types.ts` if it does not already exist
-   Do not read or modify any storybook or stories files
-   Do not add `@keywords` to `types.ts` — keywords belong on the component function only

---

## Output Requirements

Report:

-   Which interfaces and type aliases were documented, with file links
-   Count of props documented
-   Any props skipped and why
