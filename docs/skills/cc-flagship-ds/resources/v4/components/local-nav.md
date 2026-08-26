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

## Props

### Shared props (both components)

| Prop                | Type                                                                                                  | Default | Description                          |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------ |
| `items`             | `LocalNavItemProps[]`                                                                                 | —       | Nav items                            |
| `selectedItemIndex` | `number`                                                                                              | —       | Index of the currently active item   |
| `onNavItemSelect`   | `(e: React.MouseEvent \| React.KeyboardEvent, item: LocalNavItemProps, index: number) => void`        | —       | Called when an item is selected      |
| `renderItem`        | `(item: LocalNavItemProps, renderProps: { selected: boolean, stickied: boolean }) => React.ReactNode` | —       | Custom render function for nav items |
| `id`                | `string`                                                                                              | —       | Unique identifier                    |
| `className`         | `string`                                                                                              | —       | Class selector                       |
| `data-testid`       | `string`                                                                                              | —       | Test identifier                      |

### LocalNavDropdown (additional props)

| Prop           | Type     | Default | Description                                             |
| -------------- | -------- | ------- | ------------------------------------------------------- |
| `defaultLabel` | `string` | —       | Label shown before any item is selected — **required**  |
| `stickyOffset` | `number` | —       | Top offset in pixels when the dropdown sticks on scroll |

### LocalNavItemProps

| Prop    | Type                        | Description                        |
| ------- | --------------------------- | ---------------------------------- |
| `title` | `string \| React.ReactNode` | Display label — **required**       |
| `id`    | `string`                    | Unique identifier for the nav item |

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
