# LocalNav

Import: `import { LocalNavMenu, LocalNavDropdown } from "@lifesg/react-design-system/local-nav"`

## When to use

Use to let users navigate between sections on the same page (in-page navigation). Two components exist for different breakpoints — use both together for full responsive coverage.

## Sub-components

`LocalNavMenu`, `LocalNavDropdown`

## Variants

| Component          | Viewport          | Behaviour                                                              |
| ------------------ | ----------------- | ---------------------------------------------------------------------- |
| `LocalNavMenu`     | Desktop           | Vertical link list fixed to the left of page content, sticky on scroll |
| `LocalNavDropdown` | Tablet and mobile | Renders inline, then sticks to top of viewport after scroll            |

## Usage

```tsx
import {
    LocalNavMenu,
    LocalNavDropdown,
} from "@lifesg/react-design-system/local-nav";

const navItems = [
    { title: "Overview", id: "overview" },
    { title: "Eligibility", id: "eligibility" },
    { title: "How to apply", id: "how-to-apply" },
];

{
    /* Desktop */
}
<LocalNavMenu
    items={navItems}
    selectedItemIndex={activeIndex}
    onNavItemSelect={(e, item, index) => {}}
/>;

{
    /* Mobile / tablet */
}
<LocalNavDropdown
    items={navItems}
    selectedItemIndex={activeIndex}
    defaultLabel="Jump to section"
    onNavItemSelect={(e, item, index) => {}}
/>;
```

## Props — `LocalNavItemProps`

| Prop       | Type                        | Default | Description |
| ---------- | --------------------------- | ------- | ----------- |
| `title` \* | `string \| React.ReactNode` | —       | —           |
| `id`       | `string`                    | —       | —           |

## Props — `LocalNavMenuItemRenderProps`

| Prop          | Type      | Default | Description                                                  |
| ------------- | --------- | ------- | ------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item. |

## Props — `LocalNavMenuProps`

| Prop                 | Type                                                                                                                       | Default | Description                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)`                            | —       | Custom renderer for each navigation item.        |
| `className`          | `string`                                                                                                                   | —       | —                                                |
| `id`                 | `string`                                                                                                                   | —       | —                                                |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.      |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.          |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item. |

## Props — `LocalNavDropdownItemRenderProps`

| Prop          | Type      | Default | Description                                                                                                                                |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item.                                                                               |
| `stickied` \* | `boolean` | —       | Whether the dropdown is currently in its stickied (fixed) state. Use this to conditionally style items differently when the nav is pinned. |

## Props — `LocalNavDropdownProps`

| Prop                 | Type                                                                                                                       | Default | Description                                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultLabel` \*    | `string \| React.ReactNode`                                                                                                | —       | Label shown in the collapsed trigger when no item is selected or when the dropdown is not stickied. Once the dropdown is stickied and an item is selected, the trigger displays the selected item's title instead. |
| `stickyOffset`       | `number`                                                                                                                   | 0       | Distance in pixels from the top of the viewport while the dropdown is stickied.                                                                                                                                    |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)`                        | —       | Custom renderer for each item in the dropdown list.                                                                                                                                                                |
| `className`          | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `id`                 | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.                                                                                                                                                                        |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.                                                                                                                                                                            |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item.                                                                                                                                                                   |

## Props — `LocalNavItemProps`

| Prop       | Type                        | Default | Description |
| ---------- | --------------------------- | ------- | ----------- |
| `title` \* | `string \| React.ReactNode` | —       | —           |
| `id`       | `string`                    | —       | —           |

## Props — `LocalNavMenuItemRenderProps`

| Prop          | Type      | Default | Description                                                  |
| ------------- | --------- | ------- | ------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item. |

## Props — `LocalNavMenuProps`

| Prop                 | Type                                                                                                                       | Default | Description                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)`                            | —       | Custom renderer for each navigation item.        |
| `className`          | `string`                                                                                                                   | —       | —                                                |
| `id`                 | `string`                                                                                                                   | —       | —                                                |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.      |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.          |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item. |

## Props — `LocalNavDropdownItemRenderProps`

| Prop          | Type      | Default | Description                                                                                                                                |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item.                                                                               |
| `stickied` \* | `boolean` | —       | Whether the dropdown is currently in its stickied (fixed) state. Use this to conditionally style items differently when the nav is pinned. |

## Props — `LocalNavDropdownProps`

| Prop                 | Type                                                                                                                       | Default | Description                                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultLabel` \*    | `string \| React.ReactNode`                                                                                                | —       | Label shown in the collapsed trigger when no item is selected or when the dropdown is not stickied. Once the dropdown is stickied and an item is selected, the trigger displays the selected item's title instead. |
| `stickyOffset`       | `number`                                                                                                                   | 0       | Distance in pixels from the top of the viewport while the dropdown is stickied.                                                                                                                                    |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)`                        | —       | Custom renderer for each item in the dropdown list.                                                                                                                                                                |
| `className`          | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `id`                 | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.                                                                                                                                                                        |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.                                                                                                                                                                            |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item.                                                                                                                                                                   |

## Props — `LocalNavItemProps`

| Prop       | Type                        | Default | Description |
| ---------- | --------------------------- | ------- | ----------- |
| `title` \* | `string \| React.ReactNode` | —       | —           |
| `id`       | `string`                    | —       | —           |

## Props — `LocalNavMenuItemRenderProps`

| Prop          | Type      | Default | Description                                                  |
| ------------- | --------- | ------- | ------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item. |

## Props — `LocalNavMenuProps`

| Prop                 | Type                                                                                                                       | Default | Description                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)`                            | —       | Custom renderer for each navigation item.        |
| `className`          | `string`                                                                                                                   | —       | —                                                |
| `id`                 | `string`                                                                                                                   | —       | —                                                |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.      |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.          |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item. |

## Props — `LocalNavDropdownItemRenderProps`

| Prop          | Type      | Default | Description                                                                                                                                |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item.                                                                               |
| `stickied` \* | `boolean` | —       | Whether the dropdown is currently in its stickied (fixed) state. Use this to conditionally style items differently when the nav is pinned. |

## Props — `LocalNavDropdownProps`

| Prop                 | Type                                                                                                                       | Default | Description                                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultLabel` \*    | `string \| React.ReactNode`                                                                                                | —       | Label shown in the collapsed trigger when no item is selected or when the dropdown is not stickied. Once the dropdown is stickied and an item is selected, the trigger displays the selected item's title instead. |
| `stickyOffset`       | `number`                                                                                                                   | 0       | Distance in pixels from the top of the viewport while the dropdown is stickied.                                                                                                                                    |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)`                        | —       | Custom renderer for each item in the dropdown list.                                                                                                                                                                |
| `className`          | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `id`                 | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.                                                                                                                                                                        |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.                                                                                                                                                                            |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item.                                                                                                                                                                   |

## Props — `LocalNavItemProps`

| Prop       | Type                        | Default | Description |
| ---------- | --------------------------- | ------- | ----------- |
| `title` \* | `string \| React.ReactNode` | —       | —           |
| `id`       | `string`                    | —       | —           |

## Props — `LocalNavMenuItemRenderProps`

| Prop          | Type      | Default | Description                                                  |
| ------------- | --------- | ------- | ------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item. |

## Props — `LocalNavMenuProps`

| Prop                 | Type                                                                                                                       | Default | Description                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)`                            | —       | Custom renderer for each navigation item.        |
| `className`          | `string`                                                                                                                   | —       | —                                                |
| `id`                 | `string`                                                                                                                   | —       | —                                                |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.      |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.          |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item. |

## Props — `LocalNavDropdownItemRenderProps`

| Prop          | Type      | Default | Description                                                                                                                                |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item.                                                                               |
| `stickied` \* | `boolean` | —       | Whether the dropdown is currently in its stickied (fixed) state. Use this to conditionally style items differently when the nav is pinned. |

## Props — `LocalNavDropdownProps`

| Prop                 | Type                                                                                                                       | Default | Description                                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultLabel` \*    | `string \| React.ReactNode`                                                                                                | —       | Label shown in the collapsed trigger when no item is selected or when the dropdown is not stickied. Once the dropdown is stickied and an item is selected, the trigger displays the selected item's title instead. |
| `stickyOffset`       | `number`                                                                                                                   | 0       | Distance in pixels from the top of the viewport while the dropdown is stickied.                                                                                                                                    |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)`                        | —       | Custom renderer for each item in the dropdown list.                                                                                                                                                                |
| `className`          | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `id`                 | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.                                                                                                                                                                        |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.                                                                                                                                                                            |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item.                                                                                                                                                                   |

## Props — `LocalNavItemProps`

| Prop       | Type                        | Default | Description |
| ---------- | --------------------------- | ------- | ----------- |
| `title` \* | `string \| React.ReactNode` | —       | —           |
| `id`       | `string`                    | —       | —           |

## Props — `LocalNavMenuItemRenderProps`

| Prop          | Type      | Default | Description                                                  |
| ------------- | --------- | ------- | ------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item. |

## Props — `LocalNavMenuProps`

| Prop                 | Type                                                                                                                       | Default | Description                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)`                            | —       | Custom renderer for each navigation item.        |
| `className`          | `string`                                                                                                                   | —       | —                                                |
| `id`                 | `string`                                                                                                                   | —       | —                                                |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.      |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.          |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item. |

## Props — `LocalNavDropdownItemRenderProps`

| Prop          | Type      | Default | Description                                                                                                                                |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item.                                                                               |
| `stickied` \* | `boolean` | —       | Whether the dropdown is currently in its stickied (fixed) state. Use this to conditionally style items differently when the nav is pinned. |

## Props — `LocalNavDropdownProps`

| Prop                 | Type                                                                                                                       | Default | Description                                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultLabel` \*    | `string \| React.ReactNode`                                                                                                | —       | Label shown in the collapsed trigger when no item is selected or when the dropdown is not stickied. Once the dropdown is stickied and an item is selected, the trigger displays the selected item's title instead. |
| `stickyOffset`       | `number`                                                                                                                   | 0       | Distance in pixels from the top of the viewport while the dropdown is stickied.                                                                                                                                    |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)`                        | —       | Custom renderer for each item in the dropdown list.                                                                                                                                                                |
| `className`          | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `id`                 | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.                                                                                                                                                                        |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.                                                                                                                                                                            |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item.                                                                                                                                                                   |

## Props — `LocalNavItemProps`

| Prop       | Type                        | Default | Description |
| ---------- | --------------------------- | ------- | ----------- |
| `title` \* | `string \| React.ReactNode` | —       | —           |
| `id`       | `string`                    | —       | —           |

## Props — `LocalNavMenuItemRenderProps`

| Prop          | Type      | Default | Description                                                  |
| ------------- | --------- | ------- | ------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item. |

## Props — `LocalNavMenuProps`

| Prop                 | Type                                                                                                                       | Default | Description                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)`                            | —       | Custom renderer for each navigation item.        |
| `className`          | `string`                                                                                                                   | —       | —                                                |
| `id`                 | `string`                                                                                                                   | —       | —                                                |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.      |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.          |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item. |

## Props — `LocalNavDropdownItemRenderProps`

| Prop          | Type      | Default | Description                                                                                                                                |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `selected` \* | `boolean` | —       | Whether this item is the currently selected navigation item.                                                                               |
| `stickied` \* | `boolean` | —       | Whether the dropdown is currently in its stickied (fixed) state. Use this to conditionally style items differently when the nav is pinned. |

## Props — `LocalNavDropdownProps`

| Prop                 | Type                                                                                                                       | Default | Description                                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultLabel` \*    | `string \| React.ReactNode`                                                                                                | —       | Label shown in the collapsed trigger when no item is selected or when the dropdown is not stickied. Once the dropdown is stickied and an item is selected, the trigger displays the selected item's title instead. |
| `stickyOffset`       | `number`                                                                                                                   | 0       | Distance in pixels from the top of the viewport while the dropdown is stickied.                                                                                                                                    |
| `renderItem`         | `\| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)`                        | —       | Custom renderer for each item in the dropdown list.                                                                                                                                                                |
| `className`          | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `id`                 | `string`                                                                                                                   | —       | —                                                                                                                                                                                                                  |
| `onNavItemSelect` \* | `( e: React.MouseEvent<HTMLElement> \| React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void` | —       | Called when a navigation item is activated.                                                                                                                                                                        |
| `items` \*           | `LocalNavItemProps[]`                                                                                                      | —       | The list of navigation items to render.                                                                                                                                                                            |
| `selectedItemIndex`  | `number`                                                                                                                   | —       | Zero-based index of the currently selected item.                                                                                                                                                                   |

## Rules

-   Use `LocalNavMenu` on desktop and `LocalNavDropdown` on tablet/mobile — render both and show/hide with CSS breakpoints.
-   Always implement scroll-spy: update `selectedItemIndex` as the user scrolls to keep the active item in sync with the visible section. This is not automatic.
-   Place `LocalNavMenu` on the left side of the page content area — not above it.
-   Set `stickyOffset` on `LocalNavDropdown` equal to the height of the fixed Navbar so the dropdown does not overlap it when sticky.
-   Keep item labels short — long labels cause overflow.
-   `defaultLabel` is required on `LocalNavDropdown` — it is the placeholder shown before any item is selected.

## Anti-patterns

-   Do not use `LocalNavMenu` on tablet or mobile — use `LocalNavDropdown` instead.
-   Do not omit scroll-spy logic — without it, `selectedItemIndex` will not reflect the current section.
-   Do not place `LocalNavMenu` above the content — it must be a left sidebar.
