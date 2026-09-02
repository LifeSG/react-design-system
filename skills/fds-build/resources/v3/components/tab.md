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

## Props — `TabProps`

| Prop                     | Type                                       | Default | Description                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`             | —       | —                                                                                                                                                                                                                                      |
| `initialActive`          | `number`                                   | 0       | Zero-based index of the tab panel displayed on first render. Ignored when `currentActive` is provided.                                                                                                                                 |
| `currentActive`          | `number`                                   | —       | Zero-based index of the currently active tab panel. When provided, the component operates in controlled mode — the caller is responsible for updating this value in response to `onTabClick` to reflect tab changes.                   |
| `className`              | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `id`                     | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `onTabClick`             | `((title: string, index: number) => void)` | —       | Called when the user clicks a tab link.                                                                                                                                                                                                |
| `fullWidthIndicatorLine` | `boolean`                                  | false   | Extends all tab indicator lines to the full width of the tab bar instead of matching only the tab link width.                                                                                                                          |
| `fadeColor`              | `string[] \| FadeColorSet`                 | —       | Background color(s) used for the fade overlays at the edges of the scrollable tab link bar. Pass a `string[]` to apply the same gradient stop colors on both edges, or a `FadeColorSet` to specify left and right edges independently. |

## Props — `TabItemProps`

| Prop          | Type                           | Default | Description                                                                         |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `title` \*    | `string`                       | —       | Text label rendered in the tab link bar for this panel.                             |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                   |
| `titleAddon`  | `TitleAddonProps`              | —       | Optional addon element rendered alongside the tab title in the link bar.            |
| `className`   | `string`                       | —       | —                                                                                   |
| `id`          | `string`                       | —       | —                                                                                   |
| `width`       | `string`                       | —       | Explicit width for this tab link in the tab bar. Accepts any valid CSS width value. |

## Props — `TitleAddonProps`

| Prop         | Type                | Default | Description                                       |
| ------------ | ------------------- | ------- | ------------------------------------------------- |
| `content` \* | `JSX.Element`       | —       | The element rendered as the addon.                |
| `position`   | `"left" \| "right"` | "right" | Which side of the tab title the addon appears on. |

## Props — `TabProps`

| Prop                     | Type                                       | Default | Description                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`             | —       | —                                                                                                                                                                                                                                      |
| `initialActive`          | `number`                                   | 0       | Zero-based index of the tab panel displayed on first render. Ignored when `currentActive` is provided.                                                                                                                                 |
| `currentActive`          | `number`                                   | —       | Zero-based index of the currently active tab panel. When provided, the component operates in controlled mode — the caller is responsible for updating this value in response to `onTabClick` to reflect tab changes.                   |
| `className`              | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `id`                     | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `onTabClick`             | `((title: string, index: number) => void)` | —       | Called when the user clicks a tab link.                                                                                                                                                                                                |
| `fullWidthIndicatorLine` | `boolean`                                  | false   | Extends all tab indicator lines to the full width of the tab bar instead of matching only the tab link width.                                                                                                                          |
| `fadeColor`              | `string[] \| FadeColorSet`                 | —       | Background color(s) used for the fade overlays at the edges of the scrollable tab link bar. Pass a `string[]` to apply the same gradient stop colors on both edges, or a `FadeColorSet` to specify left and right edges independently. |

## Props — `TabItemProps`

| Prop          | Type                           | Default | Description                                                                         |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `title` \*    | `string`                       | —       | Text label rendered in the tab link bar for this panel.                             |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                   |
| `titleAddon`  | `TitleAddonProps`              | —       | Optional addon element rendered alongside the tab title in the link bar.            |
| `className`   | `string`                       | —       | —                                                                                   |
| `id`          | `string`                       | —       | —                                                                                   |
| `width`       | `string`                       | —       | Explicit width for this tab link in the tab bar. Accepts any valid CSS width value. |

## Props — `TitleAddonProps`

| Prop         | Type                | Default | Description                                       |
| ------------ | ------------------- | ------- | ------------------------------------------------- |
| `content` \* | `JSX.Element`       | —       | The element rendered as the addon.                |
| `position`   | `"left" \| "right"` | "right" | Which side of the tab title the addon appears on. |

## Props — `TabProps`

| Prop                     | Type                                       | Default | Description                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`             | —       | —                                                                                                                                                                                                                                      |
| `initialActive`          | `number`                                   | 0       | Zero-based index of the tab panel displayed on first render. Ignored when `currentActive` is provided.                                                                                                                                 |
| `currentActive`          | `number`                                   | —       | Zero-based index of the currently active tab panel. When provided, the component operates in controlled mode — the caller is responsible for updating this value in response to `onTabClick` to reflect tab changes.                   |
| `className`              | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `id`                     | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `onTabClick`             | `((title: string, index: number) => void)` | —       | Called when the user clicks a tab link.                                                                                                                                                                                                |
| `fullWidthIndicatorLine` | `boolean`                                  | false   | Extends all tab indicator lines to the full width of the tab bar instead of matching only the tab link width.                                                                                                                          |
| `fadeColor`              | `string[] \| FadeColorSet`                 | —       | Background color(s) used for the fade overlays at the edges of the scrollable tab link bar. Pass a `string[]` to apply the same gradient stop colors on both edges, or a `FadeColorSet` to specify left and right edges independently. |

## Props — `TabItemProps`

| Prop          | Type                           | Default | Description                                                                         |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `title` \*    | `string`                       | —       | Text label rendered in the tab link bar for this panel.                             |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                   |
| `titleAddon`  | `TitleAddonProps`              | —       | Optional addon element rendered alongside the tab title in the link bar.            |
| `className`   | `string`                       | —       | —                                                                                   |
| `id`          | `string`                       | —       | —                                                                                   |
| `width`       | `string`                       | —       | Explicit width for this tab link in the tab bar. Accepts any valid CSS width value. |

## Props — `TitleAddonProps`

| Prop         | Type                | Default | Description                                       |
| ------------ | ------------------- | ------- | ------------------------------------------------- |
| `content` \* | `JSX.Element`       | —       | The element rendered as the addon.                |
| `position`   | `"left" \| "right"` | "right" | Which side of the tab title the addon appears on. |

## Props — `TabProps`

| Prop                     | Type                                       | Default | Description                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`             | —       | —                                                                                                                                                                                                                                      |
| `initialActive`          | `number`                                   | 0       | Zero-based index of the tab panel displayed on first render. Ignored when `currentActive` is provided.                                                                                                                                 |
| `currentActive`          | `number`                                   | —       | Zero-based index of the currently active tab panel. When provided, the component operates in controlled mode — the caller is responsible for updating this value in response to `onTabClick` to reflect tab changes.                   |
| `className`              | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `id`                     | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `onTabClick`             | `((title: string, index: number) => void)` | —       | Called when the user clicks a tab link.                                                                                                                                                                                                |
| `fullWidthIndicatorLine` | `boolean`                                  | false   | Extends all tab indicator lines to the full width of the tab bar instead of matching only the tab link width.                                                                                                                          |
| `fadeColor`              | `string[] \| FadeColorSet`                 | —       | Background color(s) used for the fade overlays at the edges of the scrollable tab link bar. Pass a `string[]` to apply the same gradient stop colors on both edges, or a `FadeColorSet` to specify left and right edges independently. |

## Props — `TabItemProps`

| Prop          | Type                           | Default | Description                                                                         |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `title` \*    | `string`                       | —       | Text label rendered in the tab link bar for this panel.                             |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                   |
| `titleAddon`  | `TitleAddonProps`              | —       | Optional addon element rendered alongside the tab title in the link bar.            |
| `className`   | `string`                       | —       | —                                                                                   |
| `id`          | `string`                       | —       | —                                                                                   |
| `width`       | `string`                       | —       | Explicit width for this tab link in the tab bar. Accepts any valid CSS width value. |

## Props — `TitleAddonProps`

| Prop         | Type                | Default | Description                                       |
| ------------ | ------------------- | ------- | ------------------------------------------------- |
| `content` \* | `JSX.Element`       | —       | The element rendered as the addon.                |
| `position`   | `"left" \| "right"` | "right" | Which side of the tab title the addon appears on. |

## Props — `TabProps`

| Prop                     | Type                                       | Default | Description                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`             | —       | —                                                                                                                                                                                                                                      |
| `initialActive`          | `number`                                   | 0       | Zero-based index of the tab panel displayed on first render. Ignored when `currentActive` is provided.                                                                                                                                 |
| `currentActive`          | `number`                                   | —       | Zero-based index of the currently active tab panel. When provided, the component operates in controlled mode — the caller is responsible for updating this value in response to `onTabClick` to reflect tab changes.                   |
| `className`              | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `id`                     | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `onTabClick`             | `((title: string, index: number) => void)` | —       | Called when the user clicks a tab link.                                                                                                                                                                                                |
| `fullWidthIndicatorLine` | `boolean`                                  | false   | Extends all tab indicator lines to the full width of the tab bar instead of matching only the tab link width.                                                                                                                          |
| `fadeColor`              | `string[] \| FadeColorSet`                 | —       | Background color(s) used for the fade overlays at the edges of the scrollable tab link bar. Pass a `string[]` to apply the same gradient stop colors on both edges, or a `FadeColorSet` to specify left and right edges independently. |

## Props — `TabItemProps`

| Prop          | Type                           | Default | Description                                                                         |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `title` \*    | `string`                       | —       | Text label rendered in the tab link bar for this panel.                             |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                   |
| `titleAddon`  | `TitleAddonProps`              | —       | Optional addon element rendered alongside the tab title in the link bar.            |
| `className`   | `string`                       | —       | —                                                                                   |
| `id`          | `string`                       | —       | —                                                                                   |
| `width`       | `string`                       | —       | Explicit width for this tab link in the tab bar. Accepts any valid CSS width value. |

## Props — `TitleAddonProps`

| Prop         | Type                | Default | Description                                       |
| ------------ | ------------------- | ------- | ------------------------------------------------- |
| `content` \* | `JSX.Element`       | —       | The element rendered as the addon.                |
| `position`   | `"left" \| "right"` | "right" | Which side of the tab title the addon appears on. |

## Props — `TabProps`

| Prop                     | Type                                       | Default | Description                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*            | `JSX.Element \| JSX.Element[]`             | —       | —                                                                                                                                                                                                                                      |
| `initialActive`          | `number`                                   | 0       | Zero-based index of the tab panel displayed on first render. Ignored when `currentActive` is provided.                                                                                                                                 |
| `currentActive`          | `number`                                   | —       | Zero-based index of the currently active tab panel. When provided, the component operates in controlled mode — the caller is responsible for updating this value in response to `onTabClick` to reflect tab changes.                   |
| `className`              | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `id`                     | `string`                                   | —       | —                                                                                                                                                                                                                                      |
| `onTabClick`             | `((title: string, index: number) => void)` | —       | Called when the user clicks a tab link.                                                                                                                                                                                                |
| `fullWidthIndicatorLine` | `boolean`                                  | false   | Extends all tab indicator lines to the full width of the tab bar instead of matching only the tab link width.                                                                                                                          |
| `fadeColor`              | `string[] \| FadeColorSet`                 | —       | Background color(s) used for the fade overlays at the edges of the scrollable tab link bar. Pass a `string[]` to apply the same gradient stop colors on both edges, or a `FadeColorSet` to specify left and right edges independently. |

## Props — `TabItemProps`

| Prop          | Type                           | Default | Description                                                                         |
| ------------- | ------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `title` \*    | `string`                       | —       | Text label rendered in the tab link bar for this panel.                             |
| `children` \* | `JSX.Element \| JSX.Element[]` | —       | —                                                                                   |
| `titleAddon`  | `TitleAddonProps`              | —       | Optional addon element rendered alongside the tab title in the link bar.            |
| `className`   | `string`                       | —       | —                                                                                   |
| `id`          | `string`                       | —       | —                                                                                   |
| `width`       | `string`                       | —       | Explicit width for this tab link in the tab bar. Accepts any valid CSS width value. |

## Props — `TitleAddonProps`

| Prop         | Type                | Default | Description                                       |
| ------------ | ------------------- | ------- | ------------------------------------------------- |
| `content` \* | `JSX.Element`       | —       | The element rendered as the addon.                |
| `position`   | `"left" \| "right"` | "right" | Which side of the tab title the addon appears on. |

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
