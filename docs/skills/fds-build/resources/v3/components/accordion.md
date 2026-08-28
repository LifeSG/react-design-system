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

## Props

### Accordion props

| Prop                     | Type                               | Default        | Description                                        |
| ------------------------ | ---------------------------------- | -------------- | -------------------------------------------------- |
| `children`               | `JSX.Element` \| `JSX.Element[]`   | —              | Accordion items — required                         |
| `title`                  | `string`                           | —              | Group title shown above items                      |
| `enableExpandAll`        | `boolean`                          | `true`         | Show Expand All / Collapse All button              |
| `initialDisplay`         | `"collapse-all"` \| `"expand-all"` | `"expand-all"` | Initial expand/collapse state of all items         |
| `showTitleInMobile`      | `boolean`                          | `false`        | Show group title on mobile viewports               |
| `headingLevel`           | `number`                           | `2`            | Heading level for the group title                  |
| `id`                     | `string`                           | —              | Unique id of the component                         |
| `className`              | `string`                           | —              | Class selector                                     |
| `data-testid`            | `string`                           | —              | Test identifier                                    |
| `onExpandCollapseChange` | `(expanded: boolean) => void`      | —              | Callback when Expand All / Collapse All is toggled |

### Accordion.Item props

| Prop          | Type                             | Default     | Description                                                       |
| ------------- | -------------------------------- | ----------- | ----------------------------------------------------------------- |
| `children`    | `JSX.Element` \| `JSX.Element[]` | —           | Panel content — required                                          |
| `title`       | `string` \| `JSX.Element`        | —           | Header text of the item                                           |
| `type`        | `"default"` \| `"small"`         | `"default"` | Title text size                                                   |
| `expanded`    | `boolean`                        | —           | Controlled expand state; overrides `initialDisplay` for this item |
| `collapsible` | `boolean`                        | `true`      | Whether the item can be collapsed                                 |
| `id`          | `string`                         | —           | Unique id of the item                                             |
| `className`   | `string`                         | —           | Class selector                                                    |
| `data-testid` | `string`                         | —           | Test identifier                                                   |

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
