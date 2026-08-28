# Filter

Import: `import { Filter } from "@lifesg/react-design-system/filter"`

## When to use

Use on listing pages to narrow a result set. `Filter` automatically switches between a desktop sidebar and a mobile modal at the `lg-max` breakpoint.

## Composition

```
Filter                                  ← recommended: auto-switches sidebar ↔ modal at lg breakpoint
├── Filter.Item title="Sort by"         ← section header + collapsible wrapper
│   └── {RadioButton group}             ← sort options use RadioButton, not Filter.Checkbox
├── Filter.Item title="Category"
│   └── Filter.Checkbox                 ← multi-select filter options
└── Filter.Item title="..."
    └── Filter.Checkbox
```

Manual variants (bypass auto-responsive):

```
Filter.Sidebar                          ← desktop sidebar only
Filter.Modal                            ← mobile modal only
Filter.Page                             ← full-page filter (mobile-only flows)
```

`Filter.Item` is the only valid direct child of `Filter`, `Filter.Sidebar`, or `Filter.Modal`. Use `RadioButton` for sort (single-select); use `Filter.Checkbox` for multi-select filters.

## Variants

| Variant                  | When to use                                                     |
| ------------------------ | --------------------------------------------------------------- |
| `<Filter>` (recommended) | Auto-responsive — desktop sidebar + mobile modal                |
| `<Filter.Sidebar>`       | Desktop sidebar only — when bypassing auto-responsive behaviour |
| `<Filter.Modal>`         | Mobile modal only — when bypassing auto-responsive behaviour    |

## Usage

### Auto-responsive Filter (recommended)

`Filter` renders a sidebar on desktop and a modal on mobile automatically. Pass children as a function to receive `mode` (`"desktop" | "mobile"`) when you need to render differently per viewport.

```tsx
import { useState } from "react";
import { Filter } from "@lifesg/react-design-system/filter";
import { RadioButton } from "@lifesg/react-design-system/radio-button";

const ListingFilter = () => {
    const [category, setCategory] = useState("all");
    const [activeCount, setActiveCount] = useState(0);

    const handleClear = () => {
        setCategory("all");
        setActiveCount(0);
    };

    return (
        <Filter
            count={activeCount}
            onClear={handleClear}
            onDone={() => {
                /* commit draft state */
            }}
            onDismiss={() => {
                /* discard draft state */
            }}
        >
            {(mode) => (
                <>
                    <Filter.Item title="Category">
                        <RadioButton
                            name="category"
                            value="all"
                            checked={category === "all"}
                            onChange={() => setCategory("all")}
                        >
                            All
                        </RadioButton>
                        <RadioButton
                            name="category"
                            value="news"
                            checked={category === "news"}
                            onChange={() => setCategory("news")}
                        >
                            News
                        </RadioButton>
                    </Filter.Item>
                    <Filter.Item title="Sort by" collapsible={false}>
                        <RadioButton name="sort" value="newest" defaultChecked>
                            Newest first
                        </RadioButton>
                        <RadioButton name="sort" value="oldest">
                            Oldest first
                        </RadioButton>
                    </Filter.Item>
                </>
            )}
        </Filter>
    );
};
```

Key points:

-   `onDone` and `onDismiss` are mobile-only callbacks; they are ignored on desktop.
-   `collapsible={false}` on sort sections keeps them always expanded.
-   `count` drives the active-filter badge in the header.

## Props

### Filter

Auto-responsive: renders `Filter.Sidebar` on desktop and `Filter.Modal` on mobile at the `lg-max` breakpoint.

| Prop                      | Type                                                               | Default   | Description                                                      |
| ------------------------- | ------------------------------------------------------------------ | --------- | ---------------------------------------------------------------- |
| `children`                | `React.ReactNode \| (mode: Mode) => React.ReactNode`               | —         | `Filter.Item` children — **required**                            |
| `onClear`                 | `() => void`                                                       | —         | Called when the Clear button is pressed                          |
| `clearButtonDisabled`     | `boolean`                                                          | `false`   | Disable the Clear button                                         |
| `count`                   | `number`                                                           | —         | Selected filter count shown in the header when greater than zero |
| `customLabels`            | `FilterModalCustomLabelProps \| FilterSidebarCustomLabelProps`     | —         | Override built-in label strings                                  |
| `onDismiss`               | `() => void`                                                       | —         | Mobile only — called when the modal is dismissed                 |
| `onDone`                  | `() => void`                                                       | —         | Mobile only — called when Done is tapped                         |
| `onModalOpen`             | `() => void`                                                       | —         | Mobile only — called when the modal opens                        |
| `toggleFilterButtonStyle` | `"default" \| "secondary" \| "light" \| "link"`                    | `"light"` | Mobile only — style of the "Filters" toggle button               |
| `insets`                  | `{ top?: number, bottom?: number, left?: number, right?: number }` | —         | Mobile only — safe-area insets for notched devices               |
| `id`                      | `string`                                                           | —         | Unique identifier                                                |
| `className`               | `string`                                                           | —         | Class selector                                                   |
| `data-testid`             | `string`                                                           | —         | Test identifier                                                  |

### Custom labels (Filter / Filter.Modal)

| Key                       | Default                   |
| ------------------------- | ------------------------- |
| `headerTitle`             | `"Filters"`               |
| `clearButtonLabel`        | `"Clear"`                 |
| `toggleFilterButtonLabel` | `"Filters"` (mobile only) |
| `doneButtonLabel`         | `"Done"` (mobile only)    |

### Filter.Sidebar

| Prop                  | Type                                                  | Default | Description                             |
| --------------------- | ----------------------------------------------------- | ------- | --------------------------------------- |
| `children`            | `React.ReactNode`                                     | —       | `Filter.Item` components — **required** |
| `onClear`             | `() => void`                                          | —       | Called when the Clear button is pressed |
| `clearButtonDisabled` | `boolean`                                             | `false` | Disable the Clear button                |
| `count`               | `number`                                              | —       | Selected filter count                   |
| `customLabels`        | `{ headerTitle?: string, clearButtonLabel?: string }` | —       | Override label strings                  |
| `id`                  | `string`                                              | —       | Unique identifier                       |
| `className`           | `string`                                              | —       | Class selector                          |
| `data-testid`         | `string`                                              | —       | Test identifier                         |

### Filter.Modal

Inherits Filter.Sidebar props, plus:

| Prop                      | Type                                                               | Default   | Description                                       |
| ------------------------- | ------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| `onDismiss`               | `() => void`                                                       | —         | Called when the modal is dismissed                |
| `onDone`                  | `() => void`                                                       | —         | Called when Done is tapped                        |
| `onModalOpen`             | `() => void`                                                       | —         | Called when the modal opens                       |
| `toggleFilterButtonStyle` | `"default" \| "secondary" \| "light" \| "link"`                    | `"light"` | Style of the "Filters" toggle button              |
| `insets`                  | `{ top?: number, bottom?: number, left?: number, right?: number }` | —         | Safe-area insets for notched devices              |
| `customLabels`            | `FilterModalCustomLabelProps`                                      | —         | Override label strings including mobile-only keys |

### Filter.Item

| Prop                | Type                                                 | Default | Description                                     |
| ------------------- | ---------------------------------------------------- | ------- | ----------------------------------------------- |
| `children`          | `React.ReactNode \| (mode: Mode) => React.ReactNode` | —       | Filter controls — **required**                  |
| `title`             | `string`                                             | —       | Section heading                                 |
| `collapsible`       | `boolean`                                            | `true`  | Allow collapsing the section (desktop only)     |
| `initialExpanded`   | `boolean`                                            | `false` | Initial expand state (uncontrolled)             |
| `expanded`          | `boolean`                                            | —       | Controlled expand state                         |
| `onExpandChange`    | `(expanded: boolean) => void`                        | —       | Called when expand state changes (desktop only) |
| `showDivider`       | `boolean`                                            | `true`  | Show header divider in desktop mode             |
| `showMobileDivider` | `boolean`                                            | `true`  | Show divider in mobile mode                     |
| `id`                | `string`                                             | —       | Unique identifier                               |
| `className`         | `string`                                             | —       | Class selector                                  |
| `data-testid`       | `string`                                             | —       | Test identifier                                 |

### Filter.Page

| Prop        | Type              | Description                          |
| ----------- | ----------------- | ------------------------------------ |
| `children`  | `React.ReactNode` | Page content — **required**          |
| `onDismiss` | `() => void`      | Called when the back arrow is tapped |
| `onDone`    | `() => void`      | Called when Done is tapped           |

`Mode` is `"desktop" | "mobile"`.

## Rules

-   `Filter` is the recommended entry point — it automatically renders `Filter.Sidebar` on desktop and `Filter.Modal` on mobile.
-   Always provide `onClear` to reset all filter state in a single handler.
-   Set `collapsible={false}` on sort sections — sort options should always be visible.
-   Pass children as a function `(mode) => ReactNode` to render different content on desktop vs mobile.
-   `Filter.Modal` has a built-in Done button — do not add an external Apply button; use `onDone` to react to it.
-   Add a keyword search input (`Form.Input`) above the `Filter` component — search is not built into `Filter`.
-   Use `count` to show the number of active filters in the header.
-   Use `Filter.Sidebar` or `Filter.Modal` directly only when overriding the responsive behaviour.
-   `Filter.Page` is used inside `Filter.Modal` only, for drill-down sub-pages.

## Anti-patterns

-   Do not pass `viewport`, `showSearch`, or `searchText` — these props do not exist.
-   Do not use `headerTitle`, `toggleFilterButtonLabel`, or `doneButtonLabel` directly on `Filter` — these are deprecated. Use `customLabels` instead.
-   Do not add an external Apply button when using `Filter.Modal` — the built-in Done button handles it.
-   Do not use `Filter.Sidebar` and `Filter.Modal` separately unless you need to override responsive behaviour — use `Filter` instead.
