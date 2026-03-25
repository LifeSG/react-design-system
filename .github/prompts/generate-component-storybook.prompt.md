---
mode: "agent"
description: "Generates a Storybook .stories.tsx, props-table.tsx, and .mdx documentation file for a component, based on its JSDoc."
---

# Generate Storybook Story and MDX Documentation

You will create or update the Storybook files for a component, using its JSDoc-annotated `types.ts` as the source of truth.

The user must specify a component name. If they do not, prompt them for one.

## When to Use This Prompt

Use this prompt after running `generate-component-jsdoc.prompt.md`, once the component's `src/[COMPONENT]/types.ts` has been annotated with JSDoc. This prompt reads those annotations to produce consistent, accurate documentation.

---

## Step 1: Read Source Files

Read the following files before writing anything:

1. `src/[COMPONENT_NAME]/types.ts` — JSDoc on interfaces (interface description, `Keywords:` line, prop types)
2. `src/[COMPONENT_NAME]/[COMPONENT_NAME].tsx` — component structure, sub-components (e.g. `Component.Item`)
3. `stories/[COMPONENT_NAME]/[COMPONENT_NAME].stories.tsx` — if it exists, check the current title category and story names

---

## Step 2: Determine the Story Category

Use the title `"Category/ComponentName"` format. Choose the category that fits the component's purpose:

| Category     | When to use                                                       |
| ------------ | ----------------------------------------------------------------- |
| `General`    | Buttons, links, icons, basic interactive elements                 |
| `Form`       | Inputs, selects, checkboxes, validation-related components        |
| `Modules`    | Complex or self-contained UI modules (tables, carousels, drawers) |
| `Layout`     | Structural and spacing components                                 |
| `Navigation` | Navbars, breadcrumbs, tabs, pagination                            |
| `Feedback`   | Alerts, toasts, loading indicators, empty states                  |
| `Overlays`   | Modals, popovers, tooltips, drawers                               |

---

## Step 3: Extract Tags from JSDoc

Find the `@keywords` tag in the primary `*Props` interface JSDoc block in
`src/[COMPONENT_NAME]/types.ts`. It contains comma-separated search terms:

```typescript
/**
 * ...
 * @keywords filter, multi-select, dropdown, search, chips
 */
export interface ComponentNameProps {
```

Map those terms to the `tags` array in `Meta`. Do NOT include `"autodocs"` — only
the keyword terms:

```typescript
// @keywords: filter, multi-select, dropdown, search, chips
tags: ["filter", "multi-select", "dropdown", "search", "chips"],
```

Also populate `parameters.keywords` with the same terms as a string array:

```typescript
parameters: {
    docs: {
        description: {
            component: "One-sentence overview from the top of the interface JSDoc.",
        },
    },
    keywords: ["filter", "multi-select", "dropdown", "search", "chips"],
},
```

If `@keywords` is absent from the interface JSDoc, add it before writing the story
(follow the keyword guidelines in `generate-component-jsdoc.prompt.md` Section B2).

---

## Step 4: Write argTypes

Inspect each prop type in the primary `*Props` interface and generate an appropriate `argTypes` entry:

| Prop type                                         | argTypes entry                                                 |
| ------------------------------------------------- | -------------------------------------------------------------- |
| `boolean`                                         | `control: { type: "boolean" }`                                 |
| Union / enum string                               | `control: { type: "radio" }` with `options: [...]`             |
| Callback (`(...) => void`)                        | `action: "descriptiveEventName"`                               |
| Object, array, `React.ReactNode`, render function | `control: false`                                               |
| Reference to another interface                    | `control: false`, add `description: "See [InterfaceName] tab"` |

Always include a `description` field drawn from the prop's JSDoc comment. Keep it under 100 characters.

```typescript
argTypes: {
    onItemClick: { action: "itemClicked" },
    items: {
        control: false,
        description: "Array of items to render. See ItemProps tab for structure.",
    },
    disabled: {
        control: { type: "boolean" },
        description: "Disables the component and prevents interaction.",
    },
    styleType: {
        control: { type: "radio" },
        options: ["default", "bordered"],
        description: "Visual variant of the component.",
    },
},
```

---

## Step 5: Identify Sub-component Interfaces

Scan `types.ts` for all exported `*Props` interfaces beyond the primary one (e.g. `ItemProps`, `HeaderProps`, `RowProps`). These each become a separate tab in the API docs.

Exclude interfaces that are internal/style-only — skip those ending in `StyleProps`, `WrapperStyleProps`, `PartialProps`, `WithForwardedRefProps`, `RenderProps`, or starting with `Base`.

For each public sub-interface, you will:

1. Generate API data via `npm run props:generate` (or confirm `stories/[COMPONENT]/generated-props.ts` is already up to date)
2. Import the generated data in `props-table.tsx` and render via `<ApiTable>`

---

## Step 6: Write `stories/[COMPONENT_NAME]/props-table.tsx`

If the file does not exist, create it. If it does, update it.

First, run (or confirm already done):

```bash
npm run props:generate
```

This writes `stories/[COMPONENT_NAME]/generated-props.ts` with a `<InterfaceName>Data` export for each sub-interface.

Then write `props-table.tsx`:

```tsx
import { ArgTypes } from "@storybook/addon-docs/blocks";
import { ApiTable, PropTableTabs } from "stories/storybook-common";
import { ComponentName } from "src/[component-name]";
import { ItemPropsData, SecondaryPropsData } from "./generated-props";

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[
            {
                label: "ComponentName",
                content: <ArgTypes of={ComponentName} />,
            },
            {
                label: "ItemProps",
                content: <ApiTable sections={ItemPropsData} />,
            },
            {
                label: "SecondaryProps",
                content: <ApiTable sections={SecondaryPropsData} />,
            },
        ]}
    />
);
```

If there are no public sub-interfaces, omit `PropsTableTabs` and use `<ArgTypes of={ComponentName} />` directly in the MDX.

---

## Step 7: Write `stories/[COMPONENT_NAME]/[COMPONENT_NAME].stories.tsx`

Use this exact structure:

```tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ComponentName } from "src/[component-name]";

type Component = typeof ComponentName;

const meta: Meta<Component> = {
    title: "Category/ComponentName",
    component: ComponentName,
    tags: ["keyword1", "keyword2"],
    parameters: {
        docs: {
            description: {
                component: "One-sentence description from the interface JSDoc.",
            },
        },
        keywords: ["keyword1", "keyword2"],
    },
    argTypes: {
        // ... as per Step 4
    },
};

export default meta;

export const Default: StoryObj<Component> = {
    args: {
        // minimum required props with sensible values from JSDoc @example
    },
};
```

Add additional named story exports for each meaningful use case found in JSDoc `@example` tags:

```tsx
export const WithDisabledState: StoryObj<Component> = {
    args: {
        // ...
        disabled: true,
    },
};
```

Use `render: () => (...)` instead of `args` when the story requires composition (e.g. sub-components, wrappers).

---

## Step 8: Write `stories/[COMPONENT_NAME]/[COMPONENT_NAME].mdx`

Use this template:

````mdx
import { Canvas, Meta } from "@storybook/blocks";
import { Heading3, Secondary, Title } from "../storybook-common";
import * as ComponentNameStories from "./[component-name].stories";
import { PropsTableTabs } from "./props-table";

<Meta of={ComponentNameStories} />

<Title>Component Name</Title>

<Secondary>Overview</Secondary>

One or two sentences from the interface JSDoc.

```tsx
import { ComponentName } from "@lifesg/react-design-system/[component-name]";
```

<Canvas of={ComponentNameStories.Default} />

<!-- Add a Heading3 + Canvas block for each non-Default story -->

<Heading3>Story title derived from export name</Heading3>

Brief sentence explaining what this variant demonstrates.

<Canvas of={ComponentNameStories.StoryName} />

<Secondary>Component API</Secondary>

<PropsTableTabs />
````

Rules:

-   `<PropsTableTabs />` is defined in `props-table.tsx` (Step 6) and renders all tabs internally.
-   The first tab always shows `<ArgTypes of={ComponentName} />` — the full prop reference for the primary component.
-   Each public sub-interface gets its own tab via `<ApiTable sections={...Data} />` from `generated-props.ts`.
-   If there are no sub-interfaces, omit `PropsTableTabs` from `props-table.tsx` and render `<ArgTypes of={ComponentName} />` directly in the MDX.
-   The import path in the code snippet must use the published package path: `@lifesg/react-design-system/[component-name]`.

---

## Step 9: Verify

After creating the files, confirm:

-   `stories/[COMPONENT_NAME]/generated-props.ts` exists and has a `<InterfaceName>Data` export for each public sub-interface (run `npm run props:generate` if missing)
-   `props-table.tsx` exports `PropsTableTabs` using `<ArgTypes of={ComponentName} />` for the primary tab and `<ApiTable sections={...Data} />` for each sub-interface tab
-   `[component].stories.tsx` imports from `src/[component-name]` (webpack alias), not relative paths
-   MDX `import` paths use relative paths (`./`, `../storybook-common`)
-   Story export names are PascalCase and match the `Canvas` references in MDX

---

## Output Report

List:

-   Files created or modified
-   Story exports written (names)
-   Sub-component interface tabs added to `PropTableTabs`
-   Any props skipped in `argTypes` and why
