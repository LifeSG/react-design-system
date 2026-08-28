# Tab

Import: `import { Tab } from "@lifesg/react-design-system/tab"`

## When to use

Use to switch between related views within the same context — not for navigating between pages.

## Sub-components

```
Tab                          ← tab strip container, manages active state
├── Tab.Item                 ← individual tab (title + panel content)
├── Tab.Item
└── Tab.Item
```

All direct children of `Tab` must be `Tab.Item`. `Tab.Item` renders both the tab label and its associated panel content.

## Variants

| Mode                         | When to use                                |
| ---------------------------- | ------------------------------------------ |
| Uncontrolled (default)       | Tab manages its own active state           |
| Controlled (`currentActive`) | Parent needs to control which tab is shown |

## Props

### Tab

| Prop                     | Type                                     | Default | Description                                                   |
| ------------------------ | ---------------------------------------- | ------- | ------------------------------------------------------------- |
| `children`               | `JSX.Element \| JSX.Element[]`           | —       | `Tab.Item` elements — **required**                            |
| `initialActive`          | `number`                                 | `0`     | Index of the initially active tab (uncontrolled)              |
| `currentActive`          | `number`                                 | —       | Controlled active tab index; disables internal state when set |
| `onTabClick`             | `(title: string, index: number) => void` | —       | Called when a tab selector is clicked                         |
| `fullWidthIndicatorLine` | `boolean`                                | —       | Extend the bottom border to the full container width          |
| `fadeColor`              | `string[] \| FadeColorSet`               | —       | Scroll fade color on mobile; set to match page background     |
| `headingLevel`           | `number`                                 | `2`     | Heading level for tab labels                                  |
| `id`                     | `string`                                 | —       | Unique identifier                                             |
| `className`              | `string`                                 | —       | Class selector                                                |
| `data-testid`            | `string`                                 | —       | Test identifier                                               |

### Tab.Item

| Prop          | Type                           | Default | Description                                  |
| ------------- | ------------------------------ | ------- | -------------------------------------------- |
| `title`       | `string`                       | —       | Tab selector label — **required**            |
| `children`    | `JSX.Element \| JSX.Element[]` | —       | Tab panel content — **required**             |
| `titleAddon`  | `TitleAddonProps`              | —       | Custom addon displayed next to the tab label |
| `width`       | `string`                       | —       | Custom width of the tab selector             |
| `id`          | `string`                       | —       | Unique identifier                            |
| `className`   | `string`                       | —       | Class selector                               |
| `data-testid` | `string`                       | —       | Test identifier                              |

### TitleAddonProps

| Prop       | Type                | Default   | Description                                 |
| ---------- | ------------------- | --------- | ------------------------------------------- |
| `content`  | `JSX.Element`       | —         | The addon element (e.g. a `Badge`)          |
| `position` | `"left" \| "right"` | `"right"` | Position of the addon relative to the label |

### FadeColorSet

| Prop    | Type       | Description                 |
| ------- | ---------- | --------------------------- |
| `left`  | `string[]` | Color(s) for the left fade  |
| `right` | `string[]` | Color(s) for the right fade |

## Rules

-   When `currentActive` is set, the component is in controlled mode — you must update it via `onTabClick`.
-   Tab order is determined by the order of `Tab.Item` children.
-   Keep tab labels short — labels truncate beyond 20 characters on tablet and mobile.
-   Use controlled mode (`currentActive` + `onTabClick`) only when the parent needs to sync tab state with external logic (e.g. URL params, deep links).
-   Use `titleAddon` with a `Badge` to show counts or status indicators on tab labels.
-   Set `headingLevel` to match the component's position in the page heading hierarchy.
-   Set `fadeColor` to match the page background so the horizontal scroll fade blends correctly on mobile.

## Anti-patterns

-   Do not use tabs for page-level navigation — use Navbar or LocalNav instead.
-   Do not use more than 5–6 tabs — consider a different navigation pattern for many sections.
-   Do not use long labels — they truncate on mobile and tablet.
-   Do not set `currentActive` without also providing `onTabClick` — the tab state will be stuck.
