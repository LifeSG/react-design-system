---
mode: "agent"
description: "Generates comprehensive JSDoc comments for component props in types.ts by reading the component source."
---

# Generate JSDoc for Component Props

You will read the component source and generate professional JSDoc comments for all public props in `src/[COMPONENT_NAME]/types.ts`.

The user must specify a component name. If they do not, prompt them for one.

## When to Use This Prompt

Use this prompt when a component is **newly created** and has no props-table yet. If the component already has a `stories/[component]/props-table.tsx`, use the `move-api-table-data-to-type` prompt instead — it produces more accurate descriptions by using manually written documentation.

## Step 1: Understand the Component

Read the following files for the target component:

1. `src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx` — understand what each prop does at runtime
2. `src/[COMPONENT_NAME]/types.ts` — see existing props and any partial JSDoc
3. If a storybook file exists, `stories/[COMPONENT_NAME]/[COMPONENT_NAME].mdx` — extract the overview description

## Step 2: Document the Interface

Add a JSDoc block **above the main exported interface**:

````typescript
/**
 * Props for the [Component] component - [one-line purpose]
 *
 * [2-3 sentences: when to use this component, key capabilities, important behaviours]
 *
 * Keywords: [3-6 search terms developers might use, not in the component name]
 *
 * @example
 * ```tsx
 * <ComponentName prop="value">content</ComponentName>
 * ```
 */
export interface ComponentNameProps {
````

## Step 3: Document Each Prop

Add JSDoc above **every public prop** in every exported `*Props` interface. Apply the pattern that fits:

### Boolean prop

```typescript
/**
 * [What it does — active voice, present tense]
 *
 * @default false
 */
disabled?: boolean | undefined;
```

### Enum / union prop

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

### Callback prop

```typescript
/**
 * Called when [event occurs]
 *
 * @param paramName - [Description]
 */
onEvent?: (paramName: Type) => void;
```

### Object / config prop

```typescript
/**
 * [What this configuration controls]
 *
 * @see RelatedInterfaceName for all available options
 */
config?: RelatedInterfaceName | undefined;
```

### Required prop (no `?`)

```typescript
/**
 * [Description — no @default tag for required props]
 */
children: React.ReactNode;
```

## Writing Standards

-   First line: brief description under 80 characters
-   Active voice, present tense: "Displays", "Triggers", "Controls"
-   Be specific: "Disables interaction and shows loading spinner" not "Loading state"
-   Explain every union option — when to choose it
-   Add `@default` for optional props (use `undefined` if no meaningful default)
-   Add `@example` for non-obvious or complex props
-   End all sentences with a period
-   Do NOT document props that extend standard HTML element attributes (e.g. `onClick`, `className` from `React.ButtonHTMLAttributes`)

## What NOT to Do

-   Do not document `$`-prefixed transient styled-component props
-   Do not document `StyleProps` or `*StyleProps` interfaces — these are internal
-   Do not write obvious comments: "The disabled prop disables the component"
-   Do not skip enum options — explain each one
-   Do not add `@default` to required props

## After Writing JSDoc

1. Run `npm run catalog:generate` to refresh the catalog with the new JSDoc
2. Run `npm run catalog:instructions` to regenerate the Copilot instruction file
3. Commit both `component-catalog.json` and `.github/instructions/design-system-components.instructions.md`

## Output Requirements

Report:

-   Which interfaces were documented
-   Count of props documented
-   Any props skipped and why
