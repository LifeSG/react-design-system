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

Find the `Keywords:` line in the primary interface's JSDoc block. This line lists comma-separated search terms.

Map it to the `tags` array in `Meta`. Do NOT include `"autodocs"` — only the keyword terms:

```typescript
// JSDoc: Keywords: filter, multi-select, dropdown, search, chips
tags: ["filter", "multi-select", "dropdown", "search", "chips"],
```

Also populate `parameters.keywords` with the same terms as a string array for catalog search support:

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

For each sub-interface, you will:

1. Create a docs component in `props-table.tsx`
2. Add an `ArgTypes` tab in the MDX

---

## Step 6: Write `stories/[COMPONENT_NAME]/props-table.tsx`

If the file does not exist, create it. If it does, add any missing docs components.

```tsx
import { createDocsComponent } from "../storybook-common/create-docs-component";
import { ItemProps, SecondaryProps } from "../../src/[component-name]/types";

export const ItemDocs = createDocsComponent<ItemProps>();
export const SecondaryDocs = createDocsComponent<SecondaryProps>();
```

If there are no sub-interfaces, create the file with just the import (no exports needed for docs components, but the file must be referenced in the MDX).

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
import { Canvas, Meta, Controls, ArgTypes } from "@storybook/blocks";
import { Heading3, Secondary, Title } from "../storybook-common";
import * as ComponentNameStories from "./[component-name].stories";
import { ItemDocs } from "./props-table";
import { PropTableTabs } from "../storybook-common/prop-table-tabs";

<Meta of={ComponentNameStories} />

<Title>Component Name</Title>

<Secondary>Overview</Secondary>

One or two sentences from the interface JSDoc.

```tsx
import { ComponentName } from "@lifesg/react-design-system/[component-name]";
` ``

<Canvas of={ComponentNameStories.Default} />

<!-- Add a Heading3 + Canvas block for each non-Default story -->
<Heading3>Story title derived from export name</Heading3>

Brief sentence explaining what this variant demonstrates.

<Canvas of={ComponentNameStories.StoryName} />

<Secondary>Component API</Secondary>

<PropTableTabs
    tabs={[
        {
            label: "ComponentName",
            content: <Controls of={ComponentNameStories.Default} />,
        },
        {
            label: "Item",
            content: <ArgTypes of={ItemDocs} />,
        },
    ]}
/>
```
````

Rules:

-   The first `PropTableTabs` tab always uses `<Controls of={...Default} />` (not `ArgTypes`) — this is the interactive controls panel.
-   Each sub-interface gets its own tab using `<ArgTypes of={SubDocs} />`.
-   If there are no sub-interfaces, omit `PropTableTabs` and use `<Controls of={...Default} />` directly.
-   The import path in the code snippet must use the published package path: `@lifesg/react-design-system/[component-name]`.

---

## Step 9: Verify

After creating the files, confirm:

-   `props-table.tsx` exports a `createDocsComponent` for each sub-interface
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
