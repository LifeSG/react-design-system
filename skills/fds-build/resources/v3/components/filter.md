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

## Props — `FilterBaseProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterSidebarProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `FilterSidebarCustomLabelProps`            | —       | Overrides default labels used by the sidebar variant.                                                                                                                                        |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterModalProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDismiss`               | `(() => void)`                             | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                             | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                               | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                          | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `customLabels`            | `FilterModalCustomLabelProps`              | —       | Overrides default labels used by the modal variant.                                                                                                                                          |
| `insets`                  | `Insets`                                   | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterProps`

| Prop                      | Type                                                              | Default | Description                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `\| FilterModalCustomLabelProps \| FilterSidebarCustomLabelProps` | —       | Overrides default labels for the active variant. Only the labels relevant to the current mode (sidebar or modal) are used.                                                                   |
| `id`                      | `string`                                                          | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                                          | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                                                   | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                                          | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                                         | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                                                    | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)`                        | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                                          | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                                          | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                                          | —       | —                                                                                                                                                                                            |
| `onDismiss`               | `(() => void)`                                                    | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                                                    | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                                                      | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                                                 | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `insets`                  | `Insets`                                                          | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |

## Props — `FilterItemProps`

| Prop                | Type                                                                                     | Default | Description                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `\| React.ReactNode \| ((mode: Mode, state: { minimised: boolean }) => React.ReactNode)` | —       | Content rendered inside the filter item. Pass a render function to receive the current `Mode` and minimised state, enabling content to adapt between desktop and mobile contexts. |
| `showDivider`       | `boolean`                                                                                | true    | Whether a divider line is shown above the item in desktop mode.                                                                                                                   |
| `showMobileDivider` | `boolean`                                                                                | true    | Whether a divider line is shown above the item in mobile mode.                                                                                                                    |
| `title`             | `string`                                                                                 | —       | Label rendered in the item header.                                                                                                                                                |
| `addon`             | `FormLabelAddonProps`                                                                    | —       | Optional popover addon displayed inline with the title.                                                                                                                           |
| `className`         | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `id`                | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `collapsible`       | `boolean`                                                                                | true    | Whether the item can be expanded or collapsed in desktop mode. Items are always expanded in mobile mode regardless of this setting.                                               |
| `initialExpanded`   | `boolean`                                                                                | false   | Initial expanded state for the uncontrolled component. Has no effect when `expanded` is provided.                                                                                 |
| `expanded`          | `boolean`                                                                                | —       | Controls the expanded state. When provided, the component is controlled and `onExpandChange` must be used to update the value.                                                    |
| `onExpandChange`    | `((expanded: boolean) => void)`                                                          | —       | Called when the user toggles the expand/collapse state.                                                                                                                           |
| `minimisable`       | `boolean`                                                                                | false   | Whether the item content can be minimised to show a truncated height with a "View more" button.                                                                                   |
| `minimisedHeight`   | `number`                                                                                 | —       | Height in pixels to clip the content when minimised. Defaults to 50% of content height, capped at 216 px.                                                                         |
| `style`             | `React.CSSProperties`                                                                    | —       | —                                                                                                                                                                                 |

## Props — `FilterPageProps`

| Prop          | Type              | Default | Description                                       |
| ------------- | ----------------- | ------- | ------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                 |
| `onDismiss`   | `(() => void)`    | —       | Called when the back (dismiss) button is pressed. |
| `onDone`      | `(() => void)`    | —       | Called when the done button is pressed.           |

## Props — `FilterBaseProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterSidebarProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `FilterSidebarCustomLabelProps`            | —       | Overrides default labels used by the sidebar variant.                                                                                                                                        |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterModalProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDismiss`               | `(() => void)`                             | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                             | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                               | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                          | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `customLabels`            | `FilterModalCustomLabelProps`              | —       | Overrides default labels used by the modal variant.                                                                                                                                          |
| `insets`                  | `Insets`                                   | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterProps`

| Prop                      | Type                                                              | Default | Description                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `\| FilterModalCustomLabelProps \| FilterSidebarCustomLabelProps` | —       | Overrides default labels for the active variant. Only the labels relevant to the current mode (sidebar or modal) are used.                                                                   |
| `id`                      | `string`                                                          | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                                          | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                                                   | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                                          | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                                         | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                                                    | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)`                        | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                                          | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                                          | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                                          | —       | —                                                                                                                                                                                            |
| `onDismiss`               | `(() => void)`                                                    | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                                                    | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                                                      | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                                                 | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `insets`                  | `Insets`                                                          | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |

## Props — `FilterItemProps`

| Prop                | Type                                                                                     | Default | Description                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `\| React.ReactNode \| ((mode: Mode, state: { minimised: boolean }) => React.ReactNode)` | —       | Content rendered inside the filter item. Pass a render function to receive the current `Mode` and minimised state, enabling content to adapt between desktop and mobile contexts. |
| `showDivider`       | `boolean`                                                                                | true    | Whether a divider line is shown above the item in desktop mode.                                                                                                                   |
| `showMobileDivider` | `boolean`                                                                                | true    | Whether a divider line is shown above the item in mobile mode.                                                                                                                    |
| `title`             | `string`                                                                                 | —       | Label rendered in the item header.                                                                                                                                                |
| `addon`             | `FormLabelAddonProps`                                                                    | —       | Optional popover addon displayed inline with the title.                                                                                                                           |
| `className`         | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `id`                | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `collapsible`       | `boolean`                                                                                | true    | Whether the item can be expanded or collapsed in desktop mode. Items are always expanded in mobile mode regardless of this setting.                                               |
| `initialExpanded`   | `boolean`                                                                                | false   | Initial expanded state for the uncontrolled component. Has no effect when `expanded` is provided.                                                                                 |
| `expanded`          | `boolean`                                                                                | —       | Controls the expanded state. When provided, the component is controlled and `onExpandChange` must be used to update the value.                                                    |
| `onExpandChange`    | `((expanded: boolean) => void)`                                                          | —       | Called when the user toggles the expand/collapse state.                                                                                                                           |
| `minimisable`       | `boolean`                                                                                | false   | Whether the item content can be minimised to show a truncated height with a "View more" button.                                                                                   |
| `minimisedHeight`   | `number`                                                                                 | —       | Height in pixels to clip the content when minimised. Defaults to 50% of content height, capped at 216 px.                                                                         |
| `style`             | `React.CSSProperties`                                                                    | —       | —                                                                                                                                                                                 |

## Props — `FilterPageProps`

| Prop          | Type              | Default | Description                                       |
| ------------- | ----------------- | ------- | ------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                 |
| `onDismiss`   | `(() => void)`    | —       | Called when the back (dismiss) button is pressed. |
| `onDone`      | `(() => void)`    | —       | Called when the done button is pressed.           |

## Props — `FilterBaseProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterSidebarProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `FilterSidebarCustomLabelProps`            | —       | Overrides default labels used by the sidebar variant.                                                                                                                                        |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterModalProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDismiss`               | `(() => void)`                             | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                             | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                               | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                          | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `customLabels`            | `FilterModalCustomLabelProps`              | —       | Overrides default labels used by the modal variant.                                                                                                                                          |
| `insets`                  | `Insets`                                   | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterProps`

| Prop                      | Type                                                              | Default | Description                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `\| FilterModalCustomLabelProps \| FilterSidebarCustomLabelProps` | —       | Overrides default labels for the active variant. Only the labels relevant to the current mode (sidebar or modal) are used.                                                                   |
| `id`                      | `string`                                                          | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                                          | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                                                   | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                                          | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                                         | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                                                    | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)`                        | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                                          | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                                          | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                                          | —       | —                                                                                                                                                                                            |
| `onDismiss`               | `(() => void)`                                                    | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                                                    | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                                                      | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                                                 | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `insets`                  | `Insets`                                                          | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |

## Props — `FilterItemProps`

| Prop                | Type                                                                                     | Default | Description                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `\| React.ReactNode \| ((mode: Mode, state: { minimised: boolean }) => React.ReactNode)` | —       | Content rendered inside the filter item. Pass a render function to receive the current `Mode` and minimised state, enabling content to adapt between desktop and mobile contexts. |
| `showDivider`       | `boolean`                                                                                | true    | Whether a divider line is shown above the item in desktop mode.                                                                                                                   |
| `showMobileDivider` | `boolean`                                                                                | true    | Whether a divider line is shown above the item in mobile mode.                                                                                                                    |
| `title`             | `string`                                                                                 | —       | Label rendered in the item header.                                                                                                                                                |
| `addon`             | `FormLabelAddonProps`                                                                    | —       | Optional popover addon displayed inline with the title.                                                                                                                           |
| `className`         | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `id`                | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `collapsible`       | `boolean`                                                                                | true    | Whether the item can be expanded or collapsed in desktop mode. Items are always expanded in mobile mode regardless of this setting.                                               |
| `initialExpanded`   | `boolean`                                                                                | false   | Initial expanded state for the uncontrolled component. Has no effect when `expanded` is provided.                                                                                 |
| `expanded`          | `boolean`                                                                                | —       | Controls the expanded state. When provided, the component is controlled and `onExpandChange` must be used to update the value.                                                    |
| `onExpandChange`    | `((expanded: boolean) => void)`                                                          | —       | Called when the user toggles the expand/collapse state.                                                                                                                           |
| `minimisable`       | `boolean`                                                                                | false   | Whether the item content can be minimised to show a truncated height with a "View more" button.                                                                                   |
| `minimisedHeight`   | `number`                                                                                 | —       | Height in pixels to clip the content when minimised. Defaults to 50% of content height, capped at 216 px.                                                                         |
| `style`             | `React.CSSProperties`                                                                    | —       | —                                                                                                                                                                                 |

## Props — `FilterPageProps`

| Prop          | Type              | Default | Description                                       |
| ------------- | ----------------- | ------- | ------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                 |
| `onDismiss`   | `(() => void)`    | —       | Called when the back (dismiss) button is pressed. |
| `onDone`      | `(() => void)`    | —       | Called when the done button is pressed.           |

## Props — `FilterBaseProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterSidebarProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `FilterSidebarCustomLabelProps`            | —       | Overrides default labels used by the sidebar variant.                                                                                                                                        |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterModalProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDismiss`               | `(() => void)`                             | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                             | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                               | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                          | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `customLabels`            | `FilterModalCustomLabelProps`              | —       | Overrides default labels used by the modal variant.                                                                                                                                          |
| `insets`                  | `Insets`                                   | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterProps`

| Prop                      | Type                                                              | Default | Description                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `\| FilterModalCustomLabelProps \| FilterSidebarCustomLabelProps` | —       | Overrides default labels for the active variant. Only the labels relevant to the current mode (sidebar or modal) are used.                                                                   |
| `id`                      | `string`                                                          | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                                          | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                                                   | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                                          | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                                         | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                                                    | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)`                        | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                                          | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                                          | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                                          | —       | —                                                                                                                                                                                            |
| `onDismiss`               | `(() => void)`                                                    | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                                                    | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                                                      | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                                                 | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `insets`                  | `Insets`                                                          | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |

## Props — `FilterItemProps`

| Prop                | Type                                                                                     | Default | Description                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `\| React.ReactNode \| ((mode: Mode, state: { minimised: boolean }) => React.ReactNode)` | —       | Content rendered inside the filter item. Pass a render function to receive the current `Mode` and minimised state, enabling content to adapt between desktop and mobile contexts. |
| `showDivider`       | `boolean`                                                                                | true    | Whether a divider line is shown above the item in desktop mode.                                                                                                                   |
| `showMobileDivider` | `boolean`                                                                                | true    | Whether a divider line is shown above the item in mobile mode.                                                                                                                    |
| `title`             | `string`                                                                                 | —       | Label rendered in the item header.                                                                                                                                                |
| `addon`             | `FormLabelAddonProps`                                                                    | —       | Optional popover addon displayed inline with the title.                                                                                                                           |
| `className`         | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `id`                | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `collapsible`       | `boolean`                                                                                | true    | Whether the item can be expanded or collapsed in desktop mode. Items are always expanded in mobile mode regardless of this setting.                                               |
| `initialExpanded`   | `boolean`                                                                                | false   | Initial expanded state for the uncontrolled component. Has no effect when `expanded` is provided.                                                                                 |
| `expanded`          | `boolean`                                                                                | —       | Controls the expanded state. When provided, the component is controlled and `onExpandChange` must be used to update the value.                                                    |
| `onExpandChange`    | `((expanded: boolean) => void)`                                                          | —       | Called when the user toggles the expand/collapse state.                                                                                                                           |
| `minimisable`       | `boolean`                                                                                | false   | Whether the item content can be minimised to show a truncated height with a "View more" button.                                                                                   |
| `minimisedHeight`   | `number`                                                                                 | —       | Height in pixels to clip the content when minimised. Defaults to 50% of content height, capped at 216 px.                                                                         |
| `style`             | `React.CSSProperties`                                                                    | —       | —                                                                                                                                                                                 |

## Props — `FilterPageProps`

| Prop          | Type              | Default | Description                                       |
| ------------- | ----------------- | ------- | ------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                 |
| `onDismiss`   | `(() => void)`    | —       | Called when the back (dismiss) button is pressed. |
| `onDone`      | `(() => void)`    | —       | Called when the done button is pressed.           |

## Props — `FilterBaseProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterSidebarProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `FilterSidebarCustomLabelProps`            | —       | Overrides default labels used by the sidebar variant.                                                                                                                                        |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterModalProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDismiss`               | `(() => void)`                             | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                             | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                               | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                          | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `customLabels`            | `FilterModalCustomLabelProps`              | —       | Overrides default labels used by the modal variant.                                                                                                                                          |
| `insets`                  | `Insets`                                   | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterProps`

| Prop                      | Type                                                              | Default | Description                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `\| FilterModalCustomLabelProps \| FilterSidebarCustomLabelProps` | —       | Overrides default labels for the active variant. Only the labels relevant to the current mode (sidebar or modal) are used.                                                                   |
| `id`                      | `string`                                                          | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                                          | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                                                   | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                                          | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                                         | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                                                    | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)`                        | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                                          | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                                          | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                                          | —       | —                                                                                                                                                                                            |
| `onDismiss`               | `(() => void)`                                                    | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                                                    | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                                                      | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                                                 | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `insets`                  | `Insets`                                                          | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |

## Props — `FilterItemProps`

| Prop                | Type                                                                                     | Default | Description                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `\| React.ReactNode \| ((mode: Mode, state: { minimised: boolean }) => React.ReactNode)` | —       | Content rendered inside the filter item. Pass a render function to receive the current `Mode` and minimised state, enabling content to adapt between desktop and mobile contexts. |
| `showDivider`       | `boolean`                                                                                | true    | Whether a divider line is shown above the item in desktop mode.                                                                                                                   |
| `showMobileDivider` | `boolean`                                                                                | true    | Whether a divider line is shown above the item in mobile mode.                                                                                                                    |
| `title`             | `string`                                                                                 | —       | Label rendered in the item header.                                                                                                                                                |
| `addon`             | `FormLabelAddonProps`                                                                    | —       | Optional popover addon displayed inline with the title.                                                                                                                           |
| `className`         | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `id`                | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `collapsible`       | `boolean`                                                                                | true    | Whether the item can be expanded or collapsed in desktop mode. Items are always expanded in mobile mode regardless of this setting.                                               |
| `initialExpanded`   | `boolean`                                                                                | false   | Initial expanded state for the uncontrolled component. Has no effect when `expanded` is provided.                                                                                 |
| `expanded`          | `boolean`                                                                                | —       | Controls the expanded state. When provided, the component is controlled and `onExpandChange` must be used to update the value.                                                    |
| `onExpandChange`    | `((expanded: boolean) => void)`                                                          | —       | Called when the user toggles the expand/collapse state.                                                                                                                           |
| `minimisable`       | `boolean`                                                                                | false   | Whether the item content can be minimised to show a truncated height with a "View more" button.                                                                                   |
| `minimisedHeight`   | `number`                                                                                 | —       | Height in pixels to clip the content when minimised. Defaults to 50% of content height, capped at 216 px.                                                                         |
| `style`             | `React.CSSProperties`                                                                    | —       | —                                                                                                                                                                                 |

## Props — `FilterPageProps`

| Prop          | Type              | Default | Description                                       |
| ------------- | ----------------- | ------- | ------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                 |
| `onDismiss`   | `(() => void)`    | —       | Called when the back (dismiss) button is pressed. |
| `onDone`      | `(() => void)`    | —       | Called when the done button is pressed.           |

## Props — `FilterBaseProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterSidebarProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `FilterSidebarCustomLabelProps`            | —       | Overrides default labels used by the sidebar variant.                                                                                                                                        |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterModalProps`

| Prop                      | Type                                       | Default | Description                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDismiss`               | `(() => void)`                             | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                             | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                               | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                          | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `customLabels`            | `FilterModalCustomLabelProps`              | —       | Overrides default labels used by the modal variant.                                                                                                                                          |
| `insets`                  | `Insets`                                   | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |
| `id`                      | `string`                                   | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                   | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                            | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                   | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                  | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                             | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)` | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                   | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                   | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                   | —       | —                                                                                                                                                                                            |

## Props — `FilterProps`

| Prop                      | Type                                                              | Default | Description                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customLabels`            | `\| FilterModalCustomLabelProps \| FilterSidebarCustomLabelProps` | —       | Overrides default labels for the active variant. Only the labels relevant to the current mode (sidebar or modal) are used.                                                                   |
| `id`                      | `string`                                                          | —       | —                                                                                                                                                                                            |
| `className`               | `string`                                                          | —       | —                                                                                                                                                                                            |
| `style`                   | `CSSProperties`                                                   | —       | —                                                                                                                                                                                            |
| `count`                   | `number`                                                          | —       | Number of active filter selections displayed as a badge on the header and toggle button.                                                                                                     |
| `clearButtonDisabled`     | `boolean`                                                         | false   | When `true`, the clear button is rendered in a disabled state.                                                                                                                               |
| `onClear`                 | `(() => void)`                                                    | —       | Called when the clear button is pressed.                                                                                                                                                     |
| `children`                | `ReactNode \| ((mode: Mode) => ReactNode)`                        | —       | Content rendered inside the filter panel. Pass a render function to receive the current `Mode` and conditionally render different content for desktop (`"default"`) and mobile (`"mobile"`). |
| `headerTitle`             | `string`                                                          | —       | —                                                                                                                                                                                            |
| `toggleFilterButtonLabel` | `string`                                                          | —       | —                                                                                                                                                                                            |
| `doneButtonLabel`         | `string`                                                          | —       | —                                                                                                                                                                                            |
| `onDismiss`               | `(() => void)`                                                    | —       | Called when the dismiss (close) button is pressed in the modal overlay.                                                                                                                      |
| `onDone`                  | `(() => void)`                                                    | —       | Called when the done button is pressed in the modal overlay.                                                                                                                                 |
| `onModalOpen`             | `() => void`                                                      | —       | Called when the modal overlay is opened by the toggle button.                                                                                                                                |
| `toggleFilterButtonStyle` | `ButtonStyleType`                                                 | "light" | Visual style of the toggle button that opens the modal.                                                                                                                                      |
| `insets`                  | `Insets`                                                          | —       | Safe-area insets applied to the modal header and footer, useful for notch or home-indicator offsets on mobile devices.                                                                       |

## Props — `FilterItemProps`

| Prop                | Type                                                                                     | Default | Description                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `\| React.ReactNode \| ((mode: Mode, state: { minimised: boolean }) => React.ReactNode)` | —       | Content rendered inside the filter item. Pass a render function to receive the current `Mode` and minimised state, enabling content to adapt between desktop and mobile contexts. |
| `showDivider`       | `boolean`                                                                                | true    | Whether a divider line is shown above the item in desktop mode.                                                                                                                   |
| `showMobileDivider` | `boolean`                                                                                | true    | Whether a divider line is shown above the item in mobile mode.                                                                                                                    |
| `title`             | `string`                                                                                 | —       | Label rendered in the item header.                                                                                                                                                |
| `addon`             | `FormLabelAddonProps`                                                                    | —       | Optional popover addon displayed inline with the title.                                                                                                                           |
| `className`         | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `id`                | `string`                                                                                 | —       | —                                                                                                                                                                                 |
| `collapsible`       | `boolean`                                                                                | true    | Whether the item can be expanded or collapsed in desktop mode. Items are always expanded in mobile mode regardless of this setting.                                               |
| `initialExpanded`   | `boolean`                                                                                | false   | Initial expanded state for the uncontrolled component. Has no effect when `expanded` is provided.                                                                                 |
| `expanded`          | `boolean`                                                                                | —       | Controls the expanded state. When provided, the component is controlled and `onExpandChange` must be used to update the value.                                                    |
| `onExpandChange`    | `((expanded: boolean) => void)`                                                          | —       | Called when the user toggles the expand/collapse state.                                                                                                                           |
| `minimisable`       | `boolean`                                                                                | false   | Whether the item content can be minimised to show a truncated height with a "View more" button.                                                                                   |
| `minimisedHeight`   | `number`                                                                                 | —       | Height in pixels to clip the content when minimised. Defaults to 50% of content height, capped at 216 px.                                                                         |
| `style`             | `React.CSSProperties`                                                                    | —       | —                                                                                                                                                                                 |

## Props — `FilterPageProps`

| Prop          | Type              | Default | Description                                       |
| ------------- | ----------------- | ------- | ------------------------------------------------- |
| `children` \* | `React.ReactNode` | —       | —                                                 |
| `onDismiss`   | `(() => void)`    | —       | Called when the back (dismiss) button is pressed. |
| `onDone`      | `(() => void)`    | —       | Called when the done button is pressed.           |

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
-   Do not add an external Apply button when using `Filter.Modal` — the built-in Done button handles it.
-   Do not use `Filter.Sidebar` and `Filter.Modal` separately unless you need to override responsive behaviour — use `Filter` instead.
