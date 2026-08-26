# Navbar

Import: `import { Navbar } from "@lifesg/react-design-system/navbar"`

## When to use

Place at the top of every page. Required on all pages. Automatically collapses navigation items into a hamburger drawer on mobile.

## Variants

| `layout`    | When to use                                     |
| ----------- | ----------------------------------------------- |
| `"default"` | Centered content container — standard pages     |
| `"stretch"` | Full-width content — must match Footer `layout` |

## Usage

### Complete Navbar with link items, a submenu, and an action button

`NavItemProps` is a discriminated union on `itemType`. The default (no `itemType`) is a link item. Use `itemType: "component"` for custom elements like an avatar with a dropdown.

```tsx
import { useState } from "react";
import { Navbar } from "@lifesg/react-design-system/navbar";

const AppNavbar = () => {
    const [selectedId, setSelectedId] = useState("home");

    return (
        <Navbar
            masthead
            selectedId={selectedId}
            onItemClick={(item) => item.id && setSelectedId(item.id)}
            items={{
                desktop: [
                    // itemType defaults to "link"
                    {
                        id: "home",
                        children: "Home",
                        href: "/",
                    },
                    {
                        id: "guides",
                        children: "Guides",
                        href: "/guides",
                        // subMenu items share the same shape as top-level link items
                        subMenu: [
                            {
                                id: "guides-start",
                                children: "Getting started",
                                href: "/guides/start",
                            },
                            {
                                id: "guides-api",
                                children: "API reference",
                                href: "/guides/api",
                            },
                        ],
                    },
                    {
                        // itemType: "component" — renders arbitrary JSX; no href or id needed
                        itemType: "component",
                        children: <UserAvatar />,
                    },
                ],
            }}
            actionButtons={{
                desktop: [
                    {
                        type: "button",
                        args: { children: "Log in", styleType: "secondary" },
                    },
                ],
            }}
            resources={{
                primary: { brandName: "MyService", logoSrc: "/logo.svg" },
            }}
        />
    );
};
```

Key points:

-   Omit `itemType` (or set `itemType: "link"`) for standard anchor items.
-   `subMenu` accepts the same `NavItemCommonProps` shape as top-level items.
-   `itemType: "component"` items take `children: JSX.Element`; they do not accept `id`, `href`, or `subMenu`.
-   `selectedId` matches against the `id` field of link items to highlight the active page.

## Props

### Navbar

| Prop                        | Type                                        | Default                    | Description                                       |
| --------------------------- | ------------------------------------------- | -------------------------- | ------------------------------------------------- |
| `items`                     | `NavItemsProps<T>`                          | —                          | Navigation link items — **required**              |
| `resources`                 | `NavbarResourcesProps`                      | —                          | Brand logos (primary and optional secondary)      |
| `actionButtons`             | `NavbarActionButtonsProps`                  | —                          | Action buttons for desktop and optional mobile    |
| `selectedId`                | `string`                                    | —                          | ID of the currently active navigation item        |
| `compress`                  | `boolean`                                   | `false`                    | Display navbar in compressed height               |
| `fixed`                     | `boolean`                                   | `true`                     | Fix navbar position to the top of the viewport    |
| `drawerDismissalExclusions` | `DrawerDismissalMethod[]`                   | `[]`                       | Methods that should not dismiss the mobile drawer |
| `hideNavBranding`           | `boolean`                                   | `false`                    | Hide brand logos                                  |
| `hideNavElements`           | `boolean`                                   | `false`                    | Hide links and action buttons                     |
| `hideLinkIndicator`         | `boolean`                                   | `false`                    | Hide the selected link indicator                  |
| `masthead`                  | `boolean`                                   | `true`                     | Render the government masthead above the navbar   |
| `layout`                    | `"default" \| "stretch"`                    | `"default"`                | Layout type for navbar content                    |
| `headerLabel`               | `string`                                    | `"Main navigation menu"`   | Accessible label for the navigation header        |
| `drawerLabel`               | `string`                                    | `"Mobile navigation menu"` | Accessible label for the mobile drawer            |
| `onBrandClick`              | `(type: BrandType) => void`                 | —                          | Called when a brand icon is clicked               |
| `onItemClick`               | `(item: NavItemProps<T>) => void`           | —                          | Called when a navigation item is clicked          |
| `onActionButtonClick`       | `(actionButton: NavbarButtonProps) => void` | —                          | Called when an action button is clicked           |
| `id`                        | `string`                                    | —                          | Unique identifier                                 |
| `data-testid`               | `string`                                    | —                          | Test identifier                                   |

### NavItemsProps

| Prop      | Type                | Default | Description                                              |
| --------- | ------------------- | ------- | -------------------------------------------------------- |
| `desktop` | `NavItemProps<T>[]` | —       | Nav items for desktop — **required**                     |
| `mobile`  | `NavItemProps<T>[]` | —       | Nav items for mobile; falls back to `desktop` if omitted |

### NavItemProps

Union of `NavItemLinkProps<T>` and `NavItemComponentProps`.

**NavItemLinkProps**

| Prop       | Type                      | Description        |
| ---------- | ------------------------- | ------------------ |
| `itemType` | `"link"`                  | Link-type nav item |
| `subMenu`  | `NavItemCommonProps<T>[]` | Sub-menu items     |

**NavItemComponentProps**

| Prop       | Type          | Description                              |
| ---------- | ------------- | ---------------------------------------- |
| `itemType` | `"component"` | Custom component nav item — **required** |
| `children` | `JSX.Element` | Custom component to render               |

### NavItemCommonProps

Inherits `TypographyLinkProps`, plus:

| Prop          | Type     | Description                             |
| ------------- | -------- | --------------------------------------- |
| `id`          | `string` | Unique identifier; used by `selectedId` |
| `options`     | `T`      | Additional props passed to the nav item |
| `data-testid` | `string` | Test identifier                         |

### NavbarActionButtonsProps

| Prop      | Type                  | Default | Description                                                   |
| --------- | --------------------- | ------- | ------------------------------------------------------------- |
| `desktop` | `NavbarButtonProps[]` | —       | Action buttons for desktop — **required**                     |
| `mobile`  | `NavbarButtonProps[]` | —       | Action buttons for mobile; falls back to `desktop` if omitted |

### NavbarButtonProps

| Prop            | Type                                        | Default | Description                                                  |
| --------------- | ------------------------------------------- | ------- | ------------------------------------------------------------ |
| `type`          | `"download" \| "button" \| "component"`     | —       | Button type — **required**                                   |
| `args`          | `ButtonProps \| NavbarButtonComponentProps` | —       | Props for the button                                         |
| `uncollapsible` | `boolean`                                   | —       | Keep visible on mobile instead of collapsing into the drawer |

### NavbarResourcesProps

| Prop        | Type                  | Default       | Description                                                       |
| ----------- | --------------------- | ------------- | ----------------------------------------------------------------- |
| `primary`   | `NavbarBrandingProps` | theme default | Primary branding — omit entirely to use the theme's built-in logo |
| `secondary` | `NavbarBrandingProps` | —             | Secondary branding                                                |

### NavbarBrandingProps

| Prop        | Type     | Description                    |
| ----------- | -------- | ------------------------------ |
| `brandName` | `string` | Brand name of the website      |
| `logoSrc`   | `string` | Image source of the brand logo |

## Rules

-   Always set `masthead` — all government services must display the masthead.
-   Always provide a meaningful `id` on each `NavItemCommonProps` item — used by `selectedId` to highlight the active page.
-   `items.desktop` is required; the component crashes without it.
-   `items.mobile` is optional — falls back to `desktop` if omitted.
-   `layout` must match the `Footer` `layout` prop; do not mix `"default"` and `"stretch"`.
-   Limit action buttons to 2–3 maximum.
-   Use SVG format for brand logos.
-   When using `fixed`, add corresponding top padding to page content to prevent overlap.
-   Set `uncollapsible: true` on action buttons that must remain visible on mobile (e.g. avatar).
-   Use `itemType: "component"` for custom nav elements such as an avatar with a `Menu` dropdown.
-   Pass `type: "component"` with `args: { render: <Element /> }` for custom action button elements.
-   `BrandType` is `"primary" | "secondary"` — passed to `onBrandClick`.
-   The `"download"` button type is pre-programmed for LifeSG purposes.
-   `NavbarButtonComponentProps` accepts a `render: JSX.Element` field for custom components.

## Anti-patterns

-   Do not omit `masthead` — it is required for government compliance.
-   Do not supply a custom `resources.primary.logoSrc` unless the service has its own brand logo — omit `resources` to let the theme render its built-in logo.
-   Do not use `hideNavElements` as a default state — it is for special page states only (e.g. maintenance).
-   Do not use `fixed: false` unless the layout explicitly requires a non-fixed header.
-   Do not add more than 3 action buttons — the navbar becomes visually cluttered.
