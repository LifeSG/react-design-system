# Accordion

Import: `import { Accordion } from "@lifesg/react-design-system/accordion"`

## When to use

Use to reduce visual complexity when users don't need all content at once — FAQs, supplementary details, or grouped settings. Do not use when all content needs to be visible at the same time.

## Composition

```
Accordion                    ← container, manages expand/collapse state
├── Accordion.Item           ← expandable panel
├── Accordion.Item
└── Accordion.Item
```

All children must be `Accordion.Item`. Do not place other elements directly inside `Accordion`.

## Variants

| `type` on `Accordion.Item` | Usage                                |
| -------------------------- | ------------------------------------ |
| `"default"`                | Standard title size — default        |
| `"small"`                  | Compact title size for dense layouts |

## Usage

```tsx
import { Accordion } from "@lifesg/react-design-system/accordion";

// Multiple items — all collapsed by default
const FaqSection = () => (
    <Accordion
        title="Frequently asked questions"
        headingLevel={2}
        initialDisplay="collapse-all"
        enableExpandAll
    >
        <Accordion.Item title="What is this service?">
            <p>This service lets you manage your account settings.</p>
        </Accordion.Item>
        <Accordion.Item title="How do I reset my password?">
            <p>Click "Forgot password" on the login page.</p>
        </Accordion.Item>
        {/* JSX in title must be wrapped in <span> — title renders inside <button> */}
        <Accordion.Item
            title={
                <span>
                    Can I use <strong>bold text</strong> in a title?
                </span>
            }
        >
            <p>Yes — wrap JSX title content in a span.</p>
        </Accordion.Item>
    </Accordion>
);

// Controlled item — force one item open regardless of Expand All state
const ControlledExample = () => (
    <Accordion initialDisplay="collapse-all">
        <Accordion.Item title="Always expanded" expanded={true}>
            <p>This item ignores the parent initialDisplay.</p>
        </Accordion.Item>
        <Accordion.Item title="Follows parent state">
            <p>This item collapses with the rest.</p>
        </Accordion.Item>
    </Accordion>
);
```

## Props — `AccordionProps`

| Prop                     | Type                             | Default      | Description                                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`   | —            | —                                                                                                                                                                                                                                                         |
| `title`                  | `string`                         | —            | Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true.                                                                                                                                               |
| `enableExpandAll`        | `boolean`                        | true         | Renders the "Show all" / "Hide all" toggle button.                                                                                                                                                                                                        |
| `initialDisplay`         | `"collapse-all" \| "expand-all"` | "expand-all" | Controls whether all items start expanded or collapsed.                                                                                                                                                                                                   |
| `showTitleInMobile`      | `boolean`                        | false        | When `true`, the `title` remains visible on mobile viewports.                                                                                                                                                                                             |
| `id`                     | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `className`              | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `headingLevel`           | `number`                         | 2            | The ARIA heading level for the accordion and item titles. Specify a custom value to reflect the component's hierarchy within a page. When a title is provided, the title level = n and the item title level = n + 1. Otherwise, the item title level = n. |
| `onExpandCollapseChange` | `((expanded: boolean) => void)`  | —            | Called after the expand/collapse state changes.                                                                                                                                                                                                           |

## Props — `AccordionItemProps`

| Prop          | Type                           | Default | Description                                                                                                                                                                                               |
| ------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` \*    | `string \| JSX.Element`        | —       | —                                                                                                                                                                                                         |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                                                                                                                                         |
| `expanded`    | `boolean`                      | —       | Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent "Show all" / "Hide all" button manage the state. Pass an explicit boolean to take individual control of this item. |
| `id`          | `string`                       | —       | —                                                                                                                                                                                                         |
| `className`   | `string`                       | —       | —                                                                                                                                                                                                         |
| `type`        | `AccordionItemType`            | —       | Visual size variant for the accordion item.                                                                                                                                                               |
| `collapsible` | `boolean`                      | true    | When `false`, the item header is non-interactive and the content panel is always visible.                                                                                                                 |

## Props — `AccordionItemApi`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionProps`

| Prop                     | Type                             | Default      | Description                                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`   | —            | —                                                                                                                                                                                                                                                         |
| `title`                  | `string`                         | —            | Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true.                                                                                                                                               |
| `enableExpandAll`        | `boolean`                        | true         | Renders the "Show all" / "Hide all" toggle button.                                                                                                                                                                                                        |
| `initialDisplay`         | `"collapse-all" \| "expand-all"` | "expand-all" | Controls whether all items start expanded or collapsed.                                                                                                                                                                                                   |
| `showTitleInMobile`      | `boolean`                        | false        | When `true`, the `title` remains visible on mobile viewports.                                                                                                                                                                                             |
| `id`                     | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `className`              | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `headingLevel`           | `number`                         | 2            | The ARIA heading level for the accordion and item titles. Specify a custom value to reflect the component's hierarchy within a page. When a title is provided, the title level = n and the item title level = n + 1. Otherwise, the item title level = n. |
| `onExpandCollapseChange` | `((expanded: boolean) => void)`  | —            | Called after the expand/collapse state changes.                                                                                                                                                                                                           |

## Props — `AccordionItemProps`

| Prop          | Type                           | Default | Description                                                                                                                                                                                               |
| ------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` \*    | `string \| JSX.Element`        | —       | —                                                                                                                                                                                                         |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                                                                                                                                         |
| `expanded`    | `boolean`                      | —       | Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent "Show all" / "Hide all" button manage the state. Pass an explicit boolean to take individual control of this item. |
| `id`          | `string`                       | —       | —                                                                                                                                                                                                         |
| `className`   | `string`                       | —       | —                                                                                                                                                                                                         |
| `type`        | `AccordionItemType`            | —       | Visual size variant for the accordion item.                                                                                                                                                               |
| `collapsible` | `boolean`                      | true    | When `false`, the item header is non-interactive and the content panel is always visible.                                                                                                                 |

## Props — `AccordionItemApi`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionProps`

| Prop                     | Type                             | Default      | Description                                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`   | —            | —                                                                                                                                                                                                                                                         |
| `title`                  | `string`                         | —            | Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true.                                                                                                                                               |
| `enableExpandAll`        | `boolean`                        | true         | Renders the "Show all" / "Hide all" toggle button.                                                                                                                                                                                                        |
| `initialDisplay`         | `"collapse-all" \| "expand-all"` | "expand-all" | Controls whether all items start expanded or collapsed.                                                                                                                                                                                                   |
| `showTitleInMobile`      | `boolean`                        | false        | When `true`, the `title` remains visible on mobile viewports.                                                                                                                                                                                             |
| `id`                     | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `className`              | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `headingLevel`           | `number`                         | 2            | The ARIA heading level for the accordion and item titles. Specify a custom value to reflect the component's hierarchy within a page. When a title is provided, the title level = n and the item title level = n + 1. Otherwise, the item title level = n. |
| `onExpandCollapseChange` | `((expanded: boolean) => void)`  | —            | Called after the expand/collapse state changes.                                                                                                                                                                                                           |

## Props — `AccordionItemProps`

| Prop          | Type                           | Default | Description                                                                                                                                                                                               |
| ------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` \*    | `string \| JSX.Element`        | —       | —                                                                                                                                                                                                         |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                                                                                                                                         |
| `expanded`    | `boolean`                      | —       | Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent "Show all" / "Hide all" button manage the state. Pass an explicit boolean to take individual control of this item. |
| `id`          | `string`                       | —       | —                                                                                                                                                                                                         |
| `className`   | `string`                       | —       | —                                                                                                                                                                                                         |
| `type`        | `AccordionItemType`            | —       | Visual size variant for the accordion item.                                                                                                                                                               |
| `collapsible` | `boolean`                      | true    | When `false`, the item header is non-interactive and the content panel is always visible.                                                                                                                 |

## Props — `AccordionItemApi`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionItemHandle`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionProps`

| Prop                     | Type                             | Default      | Description                                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`   | —            | —                                                                                                                                                                                                                                                         |
| `title`                  | `string`                         | —            | Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true.                                                                                                                                               |
| `enableExpandAll`        | `boolean`                        | true         | Renders the "Show all" / "Hide all" toggle button.                                                                                                                                                                                                        |
| `initialDisplay`         | `"collapse-all" \| "expand-all"` | "expand-all" | Controls whether all items start expanded or collapsed.                                                                                                                                                                                                   |
| `showTitleInMobile`      | `boolean`                        | false        | When `true`, the `title` remains visible on mobile viewports.                                                                                                                                                                                             |
| `id`                     | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `className`              | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `headingLevel`           | `number`                         | 2            | The ARIA heading level for the accordion and item titles. Specify a custom value to reflect the component's hierarchy within a page. When a title is provided, the title level = n and the item title level = n + 1. Otherwise, the item title level = n. |
| `onExpandCollapseChange` | `((expanded: boolean) => void)`  | —            | Called after the expand/collapse state changes.                                                                                                                                                                                                           |

## Props — `AccordionItemProps`

| Prop          | Type                           | Default | Description                                                                                                                                                                                               |
| ------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` \*    | `string \| JSX.Element`        | —       | —                                                                                                                                                                                                         |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                                                                                                                                         |
| `expanded`    | `boolean`                      | —       | Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent "Show all" / "Hide all" button manage the state. Pass an explicit boolean to take individual control of this item. |
| `id`          | `string`                       | —       | —                                                                                                                                                                                                         |
| `className`   | `string`                       | —       | —                                                                                                                                                                                                         |
| `type`        | `AccordionItemType`            | —       | Visual size variant for the accordion item.                                                                                                                                                               |
| `collapsible` | `boolean`                      | true    | When `false`, the item header is non-interactive and the content panel is always visible.                                                                                                                 |

## Props — `AccordionItemApi`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionItemHandle`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionProps`

| Prop                     | Type                             | Default      | Description                                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`   | —            | —                                                                                                                                                                                                                                                         |
| `title`                  | `string`                         | —            | Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true.                                                                                                                                               |
| `enableExpandAll`        | `boolean`                        | true         | Renders the "Show all" / "Hide all" toggle button.                                                                                                                                                                                                        |
| `initialDisplay`         | `"collapse-all" \| "expand-all"` | "expand-all" | Controls whether all items start expanded or collapsed.                                                                                                                                                                                                   |
| `showTitleInMobile`      | `boolean`                        | false        | When `true`, the `title` remains visible on mobile viewports.                                                                                                                                                                                             |
| `id`                     | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `className`              | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `headingLevel`           | `number`                         | 2            | The ARIA heading level for the accordion and item titles. Specify a custom value to reflect the component's hierarchy within a page. When a title is provided, the title level = n and the item title level = n + 1. Otherwise, the item title level = n. |
| `onExpandCollapseChange` | `((expanded: boolean) => void)`  | —            | Called after the expand/collapse state changes.                                                                                                                                                                                                           |

## Props — `AccordionItemProps`

| Prop          | Type                           | Default | Description                                                                                                                                                                                               |
| ------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` \*    | `string \| JSX.Element`        | —       | —                                                                                                                                                                                                         |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                                                                                                                                         |
| `expanded`    | `boolean`                      | —       | Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent "Show all" / "Hide all" button manage the state. Pass an explicit boolean to take individual control of this item. |
| `id`          | `string`                       | —       | —                                                                                                                                                                                                         |
| `className`   | `string`                       | —       | —                                                                                                                                                                                                         |
| `type`        | `AccordionItemType`            | —       | Visual size variant for the accordion item.                                                                                                                                                               |
| `collapsible` | `boolean`                      | true    | When `false`, the item header is non-interactive and the content panel is always visible.                                                                                                                 |

## Props — `AccordionItemApi`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionItemHandle`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionProps`

| Prop                     | Type                             | Default      | Description                                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`   | —            | —                                                                                                                                                                                                                                                         |
| `title`                  | `string`                         | —            | Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true.                                                                                                                                               |
| `enableExpandAll`        | `boolean`                        | true         | Renders the "Show all" / "Hide all" toggle button.                                                                                                                                                                                                        |
| `initialDisplay`         | `"collapse-all" \| "expand-all"` | "expand-all" | Controls whether all items start expanded or collapsed.                                                                                                                                                                                                   |
| `showTitleInMobile`      | `boolean`                        | false        | When `true`, the `title` remains visible on mobile viewports.                                                                                                                                                                                             |
| `id`                     | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `className`              | `string`                         | —            | —                                                                                                                                                                                                                                                         |
| `headingLevel`           | `number`                         | 2            | The ARIA heading level for the accordion and item titles. Specify a custom value to reflect the component's hierarchy within a page. When a title is provided, the title level = n and the item title level = n + 1. Otherwise, the item title level = n. |
| `onExpandCollapseChange` | `((expanded: boolean) => void)`  | —            | Called after the expand/collapse state changes.                                                                                                                                                                                                           |

## Props — `AccordionItemProps`

| Prop          | Type                           | Default | Description                                                                                                                                                                                               |
| ------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` \*    | `string \| JSX.Element`        | —       | —                                                                                                                                                                                                         |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                                                                                                                                         |
| `expanded`    | `boolean`                      | —       | Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent "Show all" / "Hide all" button manage the state. Pass an explicit boolean to take individual control of this item. |
| `id`          | `string`                       | —       | —                                                                                                                                                                                                         |
| `className`   | `string`                       | —       | —                                                                                                                                                                                                         |
| `type`        | `AccordionItemType`            | —       | Visual size variant for the accordion item.                                                                                                                                                               |
| `collapsible` | `boolean`                      | true    | When `false`, the item header is non-interactive and the content panel is always visible.                                                                                                                 |

## Props — `AccordionItemApi`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Props — `AccordionItemHandle`

| Prop            | Type            | Default | Description |
| --------------- | --------------- | ------- | ----------- |
| `expand` \*     | `() => void`    | —       | —           |
| `collapse` \*   | `() => void`    | —       | —           |
| `isExpanded` \* | `() => boolean` | —       | —           |

## Rules

-   Always set `headingLevel` when `title` is provided — ensures correct heading hierarchy.
-   Use `Accordion.Item` for all panels — do not place content directly in `Accordion`.
-   Wrap custom JSX titles in `<span>` — item title renders inside a `<button>` and block elements are invalid inside it.
-   Individual `expanded` on `Accordion.Item` overrides Expand All / Collapse All for that item.
-   Use `initialDisplay="collapse-all"` when content is supplementary and users are unlikely to need it immediately.

## Anti-patterns

-   Placing content directly inside `Accordion` without `Accordion.Item` wrappers.
-   Using Accordion when all content should be visible at once — use a plain layout instead.
-   Using block elements (e.g. `<div>`) directly as `title` in `Accordion.Item` — wrap in `<span>`.
-   Skipping `headingLevel` when `title` is set — this breaks heading hierarchy for screen readers.
