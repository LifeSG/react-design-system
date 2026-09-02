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

## Props — `NavItemLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `itemType`       | `"link"`                   | —           | —                                                                                                             |
| `subMenu`        | `NavItemCommonProps<T>[]`  | —           | —                                                                                                             |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemComponentProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavItemCommonProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemsProps`

| Prop         | Type                | Default | Description                                                                |
| ------------ | ------------------- | ------- | -------------------------------------------------------------------------- |
| `desktop` \* | `NavItemProps<T>[]` | —       | Items rendered in the desktop navbar.                                      |
| `mobile`     | `NavItemProps<T>[]` | —       | Items rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarActionButtonDownloadProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonCtaProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"button"`    | —       | —                                                                                                      |
| `args` \*       | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonComponentProps`

| Prop            | Type                         | Default | Description                                                                                            |
| --------------- | ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"component"`                | —       | —                                                                                                      |
| `args`          | `NavbarButtonComponentProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`                    | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonsProps`

| Prop         | Type                  | Default | Description                                                                         |
| ------------ | --------------------- | ------- | ----------------------------------------------------------------------------------- |
| `desktop` \* | `NavbarButtonProps[]` | —       | Action buttons rendered in the desktop navbar.                                      |
| `mobile`     | `NavbarButtonProps[]` | —       | Action buttons rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarBrandingProps`

| Prop           | Type     | Default | Description                                                 |
| -------------- | -------- | ------- | ----------------------------------------------------------- |
| `brandName` \* | `string` | —       | The name of the brand, used for accessibility and alt text. |
| `logoSrc` \*   | `string` | —       | The source URL for the brand logo image.                    |

## Props — `NavbarResourcesProps`

| Prop        | Type                  | Default | Description                                                         |
| ----------- | --------------------- | ------- | ------------------------------------------------------------------- |
| `primary`   | `NavbarBrandingProps` | —       | When omitted, a default logo derived from the active theme is used. |
| `secondary` | `NavbarBrandingProps` | —       | When omitted, the secondary brand slot is hidden.                   |

## Props — `NavbarSharedProps`

| Prop                | Type                       | Default | Description                                                                |
| ------------------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `resources`         | `NavbarResourcesProps`     | —       | Branding and logo resources for the navbar.                                |
| `actionButtons`     | `NavbarActionButtonsProps` | —       | Action buttons rendered in the navbar and mobile drawer.                   |
| `hideNavBranding`   | `boolean`                  | false   | Hides all brand logos from the navbar and drawer.                          |
| `hideLinkIndicator` | `boolean`                  | false   | Hides the active-item underline indicator across desktop and drawer views. |

## Props — `NavbarDrawerProps`

| Prop                | Type                                                                           | Default | Description                                                                         |
| ------------------- | ------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `show` \*           | `boolean`                                                                      | —       | Controls whether the drawer is visible.                                             |
| `children` \*       | `JSX.Element \| JSX.Element[]`                                                 | —       | —                                                                                   |
| `onClose`           | `(() => void)`                                                                 | —       | Called when the drawer requests to be closed via the close button or overlay click. |
| `onBrandClick`      | `\| (( event: React.MouseEvent<HTMLAnchorElement>, type: BrandType ) => void)` | —       | Called when a brand logo inside the drawer is clicked.                              |
| `drawerLabel`       | `string`                                                                       | —       | Accessible label announced for the mobile navigation drawer.                        |
| `mobileMenuRef`     | `React.RefObject<HTMLButtonElement>`                                           | —       | Ref to the mobile menu button used to return focus when the drawer closes.          |
| `resources`         | `NavbarResourcesProps`                                                         | —       | Branding and logo resources for the navbar.                                         |
| `actionButtons`     | `NavbarActionButtonsProps`                                                     | —       | Action buttons rendered in the navbar and mobile drawer.                            |
| `hideNavBranding`   | `boolean`                                                                      | false   | Hides all brand logos from the navbar and drawer.                                   |
| `hideLinkIndicator` | `boolean`                                                                      | false   | Hides the active-item underline indicator across desktop and drawer views.          |

## Props — `NavbarProps`

| Prop                        | Type                                                            | Default                | Description                                                                                                                                        |
| --------------------------- | --------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` \*                  | `NavItemsProps<T>`                                              | —                      | —                                                                                                                                                  |
| `className`                 | `string`                                                        | —                      | —                                                                                                                                                  |
| `id`                        | `string`                                                        | —                      | —                                                                                                                                                  |
| `selectedId`                | `string`                                                        | —                      | The currently selected navigation item identifier. Must match the `id` of one of the rendered items.                                               |
| `compress`                  | `boolean`                                                       | false                  | Reduces the height and logo size of the navbar.                                                                                                    |
| `fixed`                     | `boolean`                                                       | true                   | Pins the navbar to the top of the viewport while the page scrolls.                                                                                 |
| `drawerDismissalExclusions` | `DrawerDismissalMethod[]`                                       | —                      | Drawer dismissal methods that should be suppressed. The drawer will not close when the user performs any of the listed actions.                    |
| `hideNavElements`           | `boolean`                                                       | false                  | Hides nav items and action buttons, leaving only the brand area visible.                                                                           |
| `onBrandClick`              | `((type: BrandType) => void)`                                   | —                      | Called when a brand logo is clicked. `type` identifies which brand slot was activated.                                                             |
| `onItemClick`               | `\| ((item: NavItemProps<T> \| NavItemCommonProps<T>) => void)` | —                      | Called when a navigation item is activated from the desktop bar or the mobile drawer. The item's full props object is passed as the argument.      |
| `onActionButtonClick`       | `\| ((actionButton: NavbarButtonProps) => void)`                | —                      | Called when an action button without its own `onClick` handler is activated. The button's full props object is passed as the argument.             |
| `masthead`                  | `boolean`                                                       | true                   | Renders the `Masthead` (SGDS official government banner) above the navbar.                                                                         |
| `layout`                    | `"default" \| "stretch"`                                        | "default"              | Controls how the navbar content fills its container. `"stretch"` expands to the full container width; `"default"` uses the standard content width. |
| `headerLabel`               | `string`                                                        | "Main navigation menu" | Accessible label announced for the main navigation header.                                                                                         |
| `drawerLabel`               | `string`                                                        | —                      | Accessible label announced for the mobile navigation drawer.                                                                                       |
| `resources`                 | `NavbarResourcesProps`                                          | —                      | Branding and logo resources for the navbar.                                                                                                        |
| `actionButtons`             | `NavbarActionButtonsProps`                                      | —                      | Action buttons rendered in the navbar and mobile drawer.                                                                                           |
| `hideNavBranding`           | `boolean`                                                       | false                  | Hides all brand logos from the navbar and drawer.                                                                                                  |
| `hideLinkIndicator`         | `boolean`                                                       | false                  | Hides the active-item underline indicator across desktop and drawer views.                                                                         |

## Props — `NavItemLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `itemType`       | `"link"`                   | —           | —                                                                                                             |
| `subMenu`        | `NavItemCommonProps<T>[]`  | —           | —                                                                                                             |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemComponentProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavItemCommonProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemsProps`

| Prop         | Type                | Default | Description                                                                |
| ------------ | ------------------- | ------- | -------------------------------------------------------------------------- |
| `desktop` \* | `NavItemProps<T>[]` | —       | Items rendered in the desktop navbar.                                      |
| `mobile`     | `NavItemProps<T>[]` | —       | Items rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarActionButtonDownloadProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonCtaProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"button"`    | —       | —                                                                                                      |
| `args` \*       | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonComponentProps`

| Prop            | Type                         | Default | Description                                                                                            |
| --------------- | ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"component"`                | —       | —                                                                                                      |
| `args`          | `NavbarButtonComponentProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`                    | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonsProps`

| Prop         | Type                  | Default | Description                                                                         |
| ------------ | --------------------- | ------- | ----------------------------------------------------------------------------------- |
| `desktop` \* | `NavbarButtonProps[]` | —       | Action buttons rendered in the desktop navbar.                                      |
| `mobile`     | `NavbarButtonProps[]` | —       | Action buttons rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarBrandingProps`

| Prop           | Type     | Default | Description                                                 |
| -------------- | -------- | ------- | ----------------------------------------------------------- |
| `brandName` \* | `string` | —       | The name of the brand, used for accessibility and alt text. |
| `logoSrc` \*   | `string` | —       | The source URL for the brand logo image.                    |

## Props — `NavbarResourcesProps`

| Prop        | Type                  | Default | Description                                                         |
| ----------- | --------------------- | ------- | ------------------------------------------------------------------- |
| `primary`   | `NavbarBrandingProps` | —       | When omitted, a default logo derived from the active theme is used. |
| `secondary` | `NavbarBrandingProps` | —       | When omitted, the secondary brand slot is hidden.                   |

## Props — `NavbarSharedProps`

| Prop                | Type                       | Default | Description                                                                |
| ------------------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `resources`         | `NavbarResourcesProps`     | —       | Branding and logo resources for the navbar.                                |
| `actionButtons`     | `NavbarActionButtonsProps` | —       | Action buttons rendered in the navbar and mobile drawer.                   |
| `hideNavBranding`   | `boolean`                  | false   | Hides all brand logos from the navbar and drawer.                          |
| `hideLinkIndicator` | `boolean`                  | false   | Hides the active-item underline indicator across desktop and drawer views. |

## Props — `NavbarDrawerProps`

| Prop                | Type                                                                           | Default | Description                                                                         |
| ------------------- | ------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `show` \*           | `boolean`                                                                      | —       | Controls whether the drawer is visible.                                             |
| `children` \*       | `JSX.Element \| JSX.Element[]`                                                 | —       | —                                                                                   |
| `onClose`           | `(() => void)`                                                                 | —       | Called when the drawer requests to be closed via the close button or overlay click. |
| `onBrandClick`      | `\| (( event: React.MouseEvent<HTMLAnchorElement>, type: BrandType ) => void)` | —       | Called when a brand logo inside the drawer is clicked.                              |
| `drawerLabel`       | `string`                                                                       | —       | Accessible label announced for the mobile navigation drawer.                        |
| `mobileMenuRef`     | `React.RefObject<HTMLButtonElement>`                                           | —       | Ref to the mobile menu button used to return focus when the drawer closes.          |
| `resources`         | `NavbarResourcesProps`                                                         | —       | Branding and logo resources for the navbar.                                         |
| `actionButtons`     | `NavbarActionButtonsProps`                                                     | —       | Action buttons rendered in the navbar and mobile drawer.                            |
| `hideNavBranding`   | `boolean`                                                                      | false   | Hides all brand logos from the navbar and drawer.                                   |
| `hideLinkIndicator` | `boolean`                                                                      | false   | Hides the active-item underline indicator across desktop and drawer views.          |

## Props — `NavbarProps`

| Prop                        | Type                                                            | Default                | Description                                                                                                                                        |
| --------------------------- | --------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` \*                  | `NavItemsProps<T>`                                              | —                      | —                                                                                                                                                  |
| `className`                 | `string`                                                        | —                      | —                                                                                                                                                  |
| `id`                        | `string`                                                        | —                      | —                                                                                                                                                  |
| `selectedId`                | `string`                                                        | —                      | The currently selected navigation item identifier. Must match the `id` of one of the rendered items.                                               |
| `compress`                  | `boolean`                                                       | false                  | Reduces the height and logo size of the navbar.                                                                                                    |
| `fixed`                     | `boolean`                                                       | true                   | Pins the navbar to the top of the viewport while the page scrolls.                                                                                 |
| `drawerDismissalExclusions` | `DrawerDismissalMethod[]`                                       | —                      | Drawer dismissal methods that should be suppressed. The drawer will not close when the user performs any of the listed actions.                    |
| `hideNavElements`           | `boolean`                                                       | false                  | Hides nav items and action buttons, leaving only the brand area visible.                                                                           |
| `onBrandClick`              | `((type: BrandType) => void)`                                   | —                      | Called when a brand logo is clicked. `type` identifies which brand slot was activated.                                                             |
| `onItemClick`               | `\| ((item: NavItemProps<T> \| NavItemCommonProps<T>) => void)` | —                      | Called when a navigation item is activated from the desktop bar or the mobile drawer. The item's full props object is passed as the argument.      |
| `onActionButtonClick`       | `\| ((actionButton: NavbarButtonProps) => void)`                | —                      | Called when an action button without its own `onClick` handler is activated. The button's full props object is passed as the argument.             |
| `masthead`                  | `boolean`                                                       | true                   | Renders the `Masthead` (SGDS official government banner) above the navbar.                                                                         |
| `layout`                    | `"default" \| "stretch"`                                        | "default"              | Controls how the navbar content fills its container. `"stretch"` expands to the full container width; `"default"` uses the standard content width. |
| `headerLabel`               | `string`                                                        | "Main navigation menu" | Accessible label announced for the main navigation header.                                                                                         |
| `drawerLabel`               | `string`                                                        | —                      | Accessible label announced for the mobile navigation drawer.                                                                                       |
| `resources`                 | `NavbarResourcesProps`                                          | —                      | Branding and logo resources for the navbar.                                                                                                        |
| `actionButtons`             | `NavbarActionButtonsProps`                                      | —                      | Action buttons rendered in the navbar and mobile drawer.                                                                                           |
| `hideNavBranding`           | `boolean`                                                       | false                  | Hides all brand logos from the navbar and drawer.                                                                                                  |
| `hideLinkIndicator`         | `boolean`                                                       | false                  | Hides the active-item underline indicator across desktop and drawer views.                                                                         |

## Props — `NavItemLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `itemType`       | `"link"`                   | —           | —                                                                                                             |
| `subMenu`        | `NavItemCommonProps<T>[]`  | —           | —                                                                                                             |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemComponentProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavItemCommonProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemsProps`

| Prop         | Type                | Default | Description                                                                |
| ------------ | ------------------- | ------- | -------------------------------------------------------------------------- |
| `desktop` \* | `NavItemProps<T>[]` | —       | Items rendered in the desktop navbar.                                      |
| `mobile`     | `NavItemProps<T>[]` | —       | Items rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarActionButtonDownloadProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonCtaProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"button"`    | —       | —                                                                                                      |
| `args` \*       | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonComponentProps`

| Prop            | Type                         | Default | Description                                                                                            |
| --------------- | ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"component"`                | —       | —                                                                                                      |
| `args`          | `NavbarButtonComponentProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`                    | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonsProps`

| Prop         | Type                  | Default | Description                                                                         |
| ------------ | --------------------- | ------- | ----------------------------------------------------------------------------------- |
| `desktop` \* | `NavbarButtonProps[]` | —       | Action buttons rendered in the desktop navbar.                                      |
| `mobile`     | `NavbarButtonProps[]` | —       | Action buttons rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarBrandingProps`

| Prop           | Type     | Default | Description                                                 |
| -------------- | -------- | ------- | ----------------------------------------------------------- |
| `brandName` \* | `string` | —       | The name of the brand, used for accessibility and alt text. |
| `logoSrc` \*   | `string` | —       | The source URL for the brand logo image.                    |

## Props — `NavbarResourcesProps`

| Prop        | Type                  | Default | Description                                                         |
| ----------- | --------------------- | ------- | ------------------------------------------------------------------- |
| `primary`   | `NavbarBrandingProps` | —       | When omitted, a default logo derived from the active theme is used. |
| `secondary` | `NavbarBrandingProps` | —       | When omitted, the secondary brand slot is hidden.                   |

## Props — `NavbarSharedProps`

| Prop                | Type                       | Default | Description                                                                |
| ------------------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `resources`         | `NavbarResourcesProps`     | —       | Branding and logo resources for the navbar.                                |
| `actionButtons`     | `NavbarActionButtonsProps` | —       | Action buttons rendered in the navbar and mobile drawer.                   |
| `hideNavBranding`   | `boolean`                  | false   | Hides all brand logos from the navbar and drawer.                          |
| `hideLinkIndicator` | `boolean`                  | false   | Hides the active-item underline indicator across desktop and drawer views. |

## Props — `NavbarDrawerProps`

| Prop                | Type                                                                           | Default | Description                                                                         |
| ------------------- | ------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `show` \*           | `boolean`                                                                      | —       | Controls whether the drawer is visible.                                             |
| `children` \*       | `JSX.Element \| JSX.Element[]`                                                 | —       | —                                                                                   |
| `onClose`           | `(() => void)`                                                                 | —       | Called when the drawer requests to be closed via the close button or overlay click. |
| `onBrandClick`      | `\| (( event: React.MouseEvent<HTMLAnchorElement>, type: BrandType ) => void)` | —       | Called when a brand logo inside the drawer is clicked.                              |
| `drawerLabel`       | `string`                                                                       | —       | Accessible label announced for the mobile navigation drawer.                        |
| `mobileMenuRef`     | `React.RefObject<HTMLButtonElement>`                                           | —       | Ref to the mobile menu button used to return focus when the drawer closes.          |
| `resources`         | `NavbarResourcesProps`                                                         | —       | Branding and logo resources for the navbar.                                         |
| `actionButtons`     | `NavbarActionButtonsProps`                                                     | —       | Action buttons rendered in the navbar and mobile drawer.                            |
| `hideNavBranding`   | `boolean`                                                                      | false   | Hides all brand logos from the navbar and drawer.                                   |
| `hideLinkIndicator` | `boolean`                                                                      | false   | Hides the active-item underline indicator across desktop and drawer views.          |

## Props — `NavbarProps`

| Prop                        | Type                                                            | Default                | Description                                                                                                                                        |
| --------------------------- | --------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` \*                  | `NavItemsProps<T>`                                              | —                      | —                                                                                                                                                  |
| `className`                 | `string`                                                        | —                      | —                                                                                                                                                  |
| `id`                        | `string`                                                        | —                      | —                                                                                                                                                  |
| `selectedId`                | `string`                                                        | —                      | The currently selected navigation item identifier. Must match the `id` of one of the rendered items.                                               |
| `compress`                  | `boolean`                                                       | false                  | Reduces the height and logo size of the navbar.                                                                                                    |
| `fixed`                     | `boolean`                                                       | true                   | Pins the navbar to the top of the viewport while the page scrolls.                                                                                 |
| `drawerDismissalExclusions` | `DrawerDismissalMethod[]`                                       | —                      | Drawer dismissal methods that should be suppressed. The drawer will not close when the user performs any of the listed actions.                    |
| `hideNavElements`           | `boolean`                                                       | false                  | Hides nav items and action buttons, leaving only the brand area visible.                                                                           |
| `onBrandClick`              | `((type: BrandType) => void)`                                   | —                      | Called when a brand logo is clicked. `type` identifies which brand slot was activated.                                                             |
| `onItemClick`               | `\| ((item: NavItemProps<T> \| NavItemCommonProps<T>) => void)` | —                      | Called when a navigation item is activated from the desktop bar or the mobile drawer. The item's full props object is passed as the argument.      |
| `onActionButtonClick`       | `\| ((actionButton: NavbarButtonProps) => void)`                | —                      | Called when an action button without its own `onClick` handler is activated. The button's full props object is passed as the argument.             |
| `masthead`                  | `boolean`                                                       | true                   | Renders the `Masthead` (SGDS official government banner) above the navbar.                                                                         |
| `layout`                    | `"default" \| "stretch"`                                        | "default"              | Controls how the navbar content fills its container. `"stretch"` expands to the full container width; `"default"` uses the standard content width. |
| `headerLabel`               | `string`                                                        | "Main navigation menu" | Accessible label announced for the main navigation header.                                                                                         |
| `drawerLabel`               | `string`                                                        | —                      | Accessible label announced for the mobile navigation drawer.                                                                                       |
| `resources`                 | `NavbarResourcesProps`                                          | —                      | Branding and logo resources for the navbar.                                                                                                        |
| `actionButtons`             | `NavbarActionButtonsProps`                                      | —                      | Action buttons rendered in the navbar and mobile drawer.                                                                                           |
| `hideNavBranding`           | `boolean`                                                       | false                  | Hides all brand logos from the navbar and drawer.                                                                                                  |
| `hideLinkIndicator`         | `boolean`                                                       | false                  | Hides the active-item underline indicator across desktop and drawer views.                                                                         |

## Props — `NavItemProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavbarButtonProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarDrawerApi`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

## Props — `NavbarDrawerHandle`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

## Props — `NavItemLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `itemType`       | `"link"`                   | —           | —                                                                                                             |
| `subMenu`        | `NavItemCommonProps<T>[]`  | —           | —                                                                                                             |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemComponentProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavItemCommonProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemsProps`

| Prop         | Type                | Default | Description                                                                |
| ------------ | ------------------- | ------- | -------------------------------------------------------------------------- |
| `desktop` \* | `NavItemProps<T>[]` | —       | Items rendered in the desktop navbar.                                      |
| `mobile`     | `NavItemProps<T>[]` | —       | Items rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarActionButtonDownloadProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonCtaProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"button"`    | —       | —                                                                                                      |
| `args` \*       | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonComponentProps`

| Prop            | Type                         | Default | Description                                                                                            |
| --------------- | ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"component"`                | —       | —                                                                                                      |
| `args`          | `NavbarButtonComponentProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`                    | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonsProps`

| Prop         | Type                  | Default | Description                                                                         |
| ------------ | --------------------- | ------- | ----------------------------------------------------------------------------------- |
| `desktop` \* | `NavbarButtonProps[]` | —       | Action buttons rendered in the desktop navbar.                                      |
| `mobile`     | `NavbarButtonProps[]` | —       | Action buttons rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarBrandingProps`

| Prop           | Type     | Default | Description                                                 |
| -------------- | -------- | ------- | ----------------------------------------------------------- |
| `brandName` \* | `string` | —       | The name of the brand, used for accessibility and alt text. |
| `logoSrc` \*   | `string` | —       | The source URL for the brand logo image.                    |

## Props — `NavbarResourcesProps`

| Prop        | Type                  | Default | Description                                                         |
| ----------- | --------------------- | ------- | ------------------------------------------------------------------- |
| `primary`   | `NavbarBrandingProps` | —       | When omitted, a default logo derived from the active theme is used. |
| `secondary` | `NavbarBrandingProps` | —       | When omitted, the secondary brand slot is hidden.                   |

## Props — `NavbarSharedProps`

| Prop                | Type                       | Default | Description                                                                |
| ------------------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `resources`         | `NavbarResourcesProps`     | —       | Branding and logo resources for the navbar.                                |
| `actionButtons`     | `NavbarActionButtonsProps` | —       | Action buttons rendered in the navbar and mobile drawer.                   |
| `hideNavBranding`   | `boolean`                  | false   | Hides all brand logos from the navbar and drawer.                          |
| `hideLinkIndicator` | `boolean`                  | false   | Hides the active-item underline indicator across desktop and drawer views. |

## Props — `NavbarDrawerProps`

| Prop                | Type                                                                           | Default | Description                                                                         |
| ------------------- | ------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `show` \*           | `boolean`                                                                      | —       | Controls whether the drawer is visible.                                             |
| `children` \*       | `JSX.Element \| JSX.Element[]`                                                 | —       | —                                                                                   |
| `onClose`           | `(() => void)`                                                                 | —       | Called when the drawer requests to be closed via the close button or overlay click. |
| `onBrandClick`      | `\| (( event: React.MouseEvent<HTMLAnchorElement>, type: BrandType ) => void)` | —       | Called when a brand logo inside the drawer is clicked.                              |
| `drawerLabel`       | `string`                                                                       | —       | Accessible label announced for the mobile navigation drawer.                        |
| `mobileMenuRef`     | `React.RefObject<HTMLButtonElement>`                                           | —       | Ref to the mobile menu button used to return focus when the drawer closes.          |
| `resources`         | `NavbarResourcesProps`                                                         | —       | Branding and logo resources for the navbar.                                         |
| `actionButtons`     | `NavbarActionButtonsProps`                                                     | —       | Action buttons rendered in the navbar and mobile drawer.                            |
| `hideNavBranding`   | `boolean`                                                                      | false   | Hides all brand logos from the navbar and drawer.                                   |
| `hideLinkIndicator` | `boolean`                                                                      | false   | Hides the active-item underline indicator across desktop and drawer views.          |

## Props — `NavbarProps`

| Prop                        | Type                                                            | Default                | Description                                                                                                                                        |
| --------------------------- | --------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` \*                  | `NavItemsProps<T>`                                              | —                      | —                                                                                                                                                  |
| `className`                 | `string`                                                        | —                      | —                                                                                                                                                  |
| `id`                        | `string`                                                        | —                      | —                                                                                                                                                  |
| `selectedId`                | `string`                                                        | —                      | The currently selected navigation item identifier. Must match the `id` of one of the rendered items.                                               |
| `compress`                  | `boolean`                                                       | false                  | Reduces the height and logo size of the navbar.                                                                                                    |
| `fixed`                     | `boolean`                                                       | true                   | Pins the navbar to the top of the viewport while the page scrolls.                                                                                 |
| `drawerDismissalExclusions` | `DrawerDismissalMethod[]`                                       | —                      | Drawer dismissal methods that should be suppressed. The drawer will not close when the user performs any of the listed actions.                    |
| `hideNavElements`           | `boolean`                                                       | false                  | Hides nav items and action buttons, leaving only the brand area visible.                                                                           |
| `onBrandClick`              | `((type: BrandType) => void)`                                   | —                      | Called when a brand logo is clicked. `type` identifies which brand slot was activated.                                                             |
| `onItemClick`               | `\| ((item: NavItemProps<T> \| NavItemCommonProps<T>) => void)` | —                      | Called when a navigation item is activated from the desktop bar or the mobile drawer. The item's full props object is passed as the argument.      |
| `onActionButtonClick`       | `\| ((actionButton: NavbarButtonProps) => void)`                | —                      | Called when an action button without its own `onClick` handler is activated. The button's full props object is passed as the argument.             |
| `masthead`                  | `boolean`                                                       | true                   | Renders the `Masthead` (SGDS official government banner) above the navbar.                                                                         |
| `layout`                    | `"default" \| "stretch"`                                        | "default"              | Controls how the navbar content fills its container. `"stretch"` expands to the full container width; `"default"` uses the standard content width. |
| `headerLabel`               | `string`                                                        | "Main navigation menu" | Accessible label announced for the main navigation header.                                                                                         |
| `drawerLabel`               | `string`                                                        | —                      | Accessible label announced for the mobile navigation drawer.                                                                                       |
| `resources`                 | `NavbarResourcesProps`                                          | —                      | Branding and logo resources for the navbar.                                                                                                        |
| `actionButtons`             | `NavbarActionButtonsProps`                                      | —                      | Action buttons rendered in the navbar and mobile drawer.                                                                                           |
| `hideNavBranding`           | `boolean`                                                       | false                  | Hides all brand logos from the navbar and drawer.                                                                                                  |
| `hideLinkIndicator`         | `boolean`                                                       | false                  | Hides the active-item underline indicator across desktop and drawer views.                                                                         |

## Props — `NavItemProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavbarButtonProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarDrawerApi`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

## Props — `NavbarDrawerHandle`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

## Props — `NavItemLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `itemType`       | `"link"`                   | —           | —                                                                                                             |
| `subMenu`        | `NavItemCommonProps<T>[]`  | —           | —                                                                                                             |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemComponentProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavItemCommonProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemsProps`

| Prop         | Type                | Default | Description                                                                |
| ------------ | ------------------- | ------- | -------------------------------------------------------------------------- |
| `desktop` \* | `NavItemProps<T>[]` | —       | Items rendered in the desktop navbar.                                      |
| `mobile`     | `NavItemProps<T>[]` | —       | Items rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarActionButtonDownloadProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonCtaProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"button"`    | —       | —                                                                                                      |
| `args` \*       | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonComponentProps`

| Prop            | Type                         | Default | Description                                                                                            |
| --------------- | ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"component"`                | —       | —                                                                                                      |
| `args`          | `NavbarButtonComponentProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`                    | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonsProps`

| Prop         | Type                  | Default | Description                                                                         |
| ------------ | --------------------- | ------- | ----------------------------------------------------------------------------------- |
| `desktop` \* | `NavbarButtonProps[]` | —       | Action buttons rendered in the desktop navbar.                                      |
| `mobile`     | `NavbarButtonProps[]` | —       | Action buttons rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarBrandingProps`

| Prop           | Type     | Default | Description                                                 |
| -------------- | -------- | ------- | ----------------------------------------------------------- |
| `brandName` \* | `string` | —       | The name of the brand, used for accessibility and alt text. |
| `logoSrc` \*   | `string` | —       | The source URL for the brand logo image.                    |

## Props — `NavbarResourcesProps`

| Prop        | Type                  | Default | Description                                                         |
| ----------- | --------------------- | ------- | ------------------------------------------------------------------- |
| `primary`   | `NavbarBrandingProps` | —       | When omitted, a default logo derived from the active theme is used. |
| `secondary` | `NavbarBrandingProps` | —       | When omitted, the secondary brand slot is hidden.                   |

## Props — `NavbarSharedProps`

| Prop                | Type                       | Default | Description                                                                |
| ------------------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `resources`         | `NavbarResourcesProps`     | —       | Branding and logo resources for the navbar.                                |
| `actionButtons`     | `NavbarActionButtonsProps` | —       | Action buttons rendered in the navbar and mobile drawer.                   |
| `hideNavBranding`   | `boolean`                  | false   | Hides all brand logos from the navbar and drawer.                          |
| `hideLinkIndicator` | `boolean`                  | false   | Hides the active-item underline indicator across desktop and drawer views. |

## Props — `NavbarDrawerProps`

| Prop                | Type                                                                           | Default | Description                                                                         |
| ------------------- | ------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `show` \*           | `boolean`                                                                      | —       | Controls whether the drawer is visible.                                             |
| `children` \*       | `JSX.Element \| JSX.Element[]`                                                 | —       | —                                                                                   |
| `onClose`           | `(() => void)`                                                                 | —       | Called when the drawer requests to be closed via the close button or overlay click. |
| `onBrandClick`      | `\| (( event: React.MouseEvent<HTMLAnchorElement>, type: BrandType ) => void)` | —       | Called when a brand logo inside the drawer is clicked.                              |
| `drawerLabel`       | `string`                                                                       | —       | Accessible label announced for the mobile navigation drawer.                        |
| `mobileMenuRef`     | `React.RefObject<HTMLButtonElement>`                                           | —       | Ref to the mobile menu button used to return focus when the drawer closes.          |
| `resources`         | `NavbarResourcesProps`                                                         | —       | Branding and logo resources for the navbar.                                         |
| `actionButtons`     | `NavbarActionButtonsProps`                                                     | —       | Action buttons rendered in the navbar and mobile drawer.                            |
| `hideNavBranding`   | `boolean`                                                                      | false   | Hides all brand logos from the navbar and drawer.                                   |
| `hideLinkIndicator` | `boolean`                                                                      | false   | Hides the active-item underline indicator across desktop and drawer views.          |

## Props — `NavbarProps`

| Prop                        | Type                                                            | Default                | Description                                                                                                                                        |
| --------------------------- | --------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` \*                  | `NavItemsProps<T>`                                              | —                      | —                                                                                                                                                  |
| `className`                 | `string`                                                        | —                      | —                                                                                                                                                  |
| `id`                        | `string`                                                        | —                      | —                                                                                                                                                  |
| `selectedId`                | `string`                                                        | —                      | The currently selected navigation item identifier. Must match the `id` of one of the rendered items.                                               |
| `compress`                  | `boolean`                                                       | false                  | Reduces the height and logo size of the navbar.                                                                                                    |
| `fixed`                     | `boolean`                                                       | true                   | Pins the navbar to the top of the viewport while the page scrolls.                                                                                 |
| `drawerDismissalExclusions` | `DrawerDismissalMethod[]`                                       | —                      | Drawer dismissal methods that should be suppressed. The drawer will not close when the user performs any of the listed actions.                    |
| `hideNavElements`           | `boolean`                                                       | false                  | Hides nav items and action buttons, leaving only the brand area visible.                                                                           |
| `onBrandClick`              | `((type: BrandType) => void)`                                   | —                      | Called when a brand logo is clicked. `type` identifies which brand slot was activated.                                                             |
| `onItemClick`               | `\| ((item: NavItemProps<T> \| NavItemCommonProps<T>) => void)` | —                      | Called when a navigation item is activated from the desktop bar or the mobile drawer. The item's full props object is passed as the argument.      |
| `onActionButtonClick`       | `\| ((actionButton: NavbarButtonProps) => void)`                | —                      | Called when an action button without its own `onClick` handler is activated. The button's full props object is passed as the argument.             |
| `masthead`                  | `boolean`                                                       | true                   | Renders the `Masthead` (SGDS official government banner) above the navbar.                                                                         |
| `layout`                    | `"default" \| "stretch"`                                        | "default"              | Controls how the navbar content fills its container. `"stretch"` expands to the full container width; `"default"` uses the standard content width. |
| `headerLabel`               | `string`                                                        | "Main navigation menu" | Accessible label announced for the main navigation header.                                                                                         |
| `drawerLabel`               | `string`                                                        | —                      | Accessible label announced for the mobile navigation drawer.                                                                                       |
| `resources`                 | `NavbarResourcesProps`                                          | —                      | Branding and logo resources for the navbar.                                                                                                        |
| `actionButtons`             | `NavbarActionButtonsProps`                                      | —                      | Action buttons rendered in the navbar and mobile drawer.                                                                                           |
| `hideNavBranding`           | `boolean`                                                       | false                  | Hides all brand logos from the navbar and drawer.                                                                                                  |
| `hideLinkIndicator`         | `boolean`                                                       | false                  | Hides the active-item underline indicator across desktop and drawer views.                                                                         |

## Props — `NavItemProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavbarButtonProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarDrawerApi`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

## Props — `NavbarDrawerHandle`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

## Props — `NavItemLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `itemType`       | `"link"`                   | —           | —                                                                                                             |
| `subMenu`        | `NavItemCommonProps<T>[]`  | —           | —                                                                                                             |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemComponentProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavItemCommonProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `id` \*          | `string`                   | —           | —                                                                                                             |
| `options`        | `T`                        | —           | Arbitrary data passed through to callback arguments such as `onItemClick`.                                    |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `NavItemsProps`

| Prop         | Type                | Default | Description                                                                |
| ------------ | ------------------- | ------- | -------------------------------------------------------------------------- |
| `desktop` \* | `NavItemProps<T>[]` | —       | Items rendered in the desktop navbar.                                      |
| `mobile`     | `NavItemProps<T>[]` | —       | Items rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarActionButtonDownloadProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonCtaProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"button"`    | —       | —                                                                                                      |
| `args` \*       | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonComponentProps`

| Prop            | Type                         | Default | Description                                                                                            |
| --------------- | ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"component"`                | —       | —                                                                                                      |
| `args`          | `NavbarButtonComponentProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`                    | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarActionButtonsProps`

| Prop         | Type                  | Default | Description                                                                         |
| ------------ | --------------------- | ------- | ----------------------------------------------------------------------------------- |
| `desktop` \* | `NavbarButtonProps[]` | —       | Action buttons rendered in the desktop navbar.                                      |
| `mobile`     | `NavbarButtonProps[]` | —       | Action buttons rendered in the mobile drawer. Falls back to `desktop` when omitted. |

## Props — `NavbarBrandingProps`

| Prop           | Type     | Default | Description                                                 |
| -------------- | -------- | ------- | ----------------------------------------------------------- |
| `brandName` \* | `string` | —       | The name of the brand, used for accessibility and alt text. |
| `logoSrc` \*   | `string` | —       | The source URL for the brand logo image.                    |

## Props — `NavbarResourcesProps`

| Prop        | Type                  | Default | Description                                                         |
| ----------- | --------------------- | ------- | ------------------------------------------------------------------- |
| `primary`   | `NavbarBrandingProps` | —       | When omitted, a default logo derived from the active theme is used. |
| `secondary` | `NavbarBrandingProps` | —       | When omitted, the secondary brand slot is hidden.                   |

## Props — `NavbarSharedProps`

| Prop                | Type                       | Default | Description                                                                |
| ------------------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `resources`         | `NavbarResourcesProps`     | —       | Branding and logo resources for the navbar.                                |
| `actionButtons`     | `NavbarActionButtonsProps` | —       | Action buttons rendered in the navbar and mobile drawer.                   |
| `hideNavBranding`   | `boolean`                  | false   | Hides all brand logos from the navbar and drawer.                          |
| `hideLinkIndicator` | `boolean`                  | false   | Hides the active-item underline indicator across desktop and drawer views. |

## Props — `NavbarDrawerProps`

| Prop                | Type                                                                           | Default | Description                                                                         |
| ------------------- | ------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `show` \*           | `boolean`                                                                      | —       | Controls whether the drawer is visible.                                             |
| `children` \*       | `JSX.Element \| JSX.Element[]`                                                 | —       | —                                                                                   |
| `onClose`           | `(() => void)`                                                                 | —       | Called when the drawer requests to be closed via the close button or overlay click. |
| `onBrandClick`      | `\| (( event: React.MouseEvent<HTMLAnchorElement>, type: BrandType ) => void)` | —       | Called when a brand logo inside the drawer is clicked.                              |
| `drawerLabel`       | `string`                                                                       | —       | Accessible label announced for the mobile navigation drawer.                        |
| `mobileMenuRef`     | `React.RefObject<HTMLButtonElement>`                                           | —       | Ref to the mobile menu button used to return focus when the drawer closes.          |
| `resources`         | `NavbarResourcesProps`                                                         | —       | Branding and logo resources for the navbar.                                         |
| `actionButtons`     | `NavbarActionButtonsProps`                                                     | —       | Action buttons rendered in the navbar and mobile drawer.                            |
| `hideNavBranding`   | `boolean`                                                                      | false   | Hides all brand logos from the navbar and drawer.                                   |
| `hideLinkIndicator` | `boolean`                                                                      | false   | Hides the active-item underline indicator across desktop and drawer views.          |

## Props — `NavbarProps`

| Prop                        | Type                                                            | Default                | Description                                                                                                                                        |
| --------------------------- | --------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` \*                  | `NavItemsProps<T>`                                              | —                      | —                                                                                                                                                  |
| `className`                 | `string`                                                        | —                      | —                                                                                                                                                  |
| `id`                        | `string`                                                        | —                      | —                                                                                                                                                  |
| `selectedId`                | `string`                                                        | —                      | The currently selected navigation item identifier. Must match the `id` of one of the rendered items.                                               |
| `compress`                  | `boolean`                                                       | false                  | Reduces the height and logo size of the navbar.                                                                                                    |
| `fixed`                     | `boolean`                                                       | true                   | Pins the navbar to the top of the viewport while the page scrolls.                                                                                 |
| `drawerDismissalExclusions` | `DrawerDismissalMethod[]`                                       | —                      | Drawer dismissal methods that should be suppressed. The drawer will not close when the user performs any of the listed actions.                    |
| `hideNavElements`           | `boolean`                                                       | false                  | Hides nav items and action buttons, leaving only the brand area visible.                                                                           |
| `onBrandClick`              | `((type: BrandType) => void)`                                   | —                      | Called when a brand logo is clicked. `type` identifies which brand slot was activated.                                                             |
| `onItemClick`               | `\| ((item: NavItemProps<T> \| NavItemCommonProps<T>) => void)` | —                      | Called when a navigation item is activated from the desktop bar or the mobile drawer. The item's full props object is passed as the argument.      |
| `onActionButtonClick`       | `\| ((actionButton: NavbarButtonProps) => void)`                | —                      | Called when an action button without its own `onClick` handler is activated. The button's full props object is passed as the argument.             |
| `masthead`                  | `boolean`                                                       | true                   | Renders the `Masthead` (SGDS official government banner) above the navbar.                                                                         |
| `layout`                    | `"default" \| "stretch"`                                        | "default"              | Controls how the navbar content fills its container. `"stretch"` expands to the full container width; `"default"` uses the standard content width. |
| `headerLabel`               | `string`                                                        | "Main navigation menu" | Accessible label announced for the main navigation header.                                                                                         |
| `drawerLabel`               | `string`                                                        | —                      | Accessible label announced for the mobile navigation drawer.                                                                                       |
| `resources`                 | `NavbarResourcesProps`                                          | —                      | Branding and logo resources for the navbar.                                                                                                        |
| `actionButtons`             | `NavbarActionButtonsProps`                                      | —                      | Action buttons rendered in the navbar and mobile drawer.                                                                                           |
| `hideNavBranding`           | `boolean`                                                       | false                  | Hides all brand logos from the navbar and drawer.                                                                                                  |
| `hideLinkIndicator`         | `boolean`                                                       | false                  | Hides the active-item underline indicator across desktop and drawer views.                                                                         |

## Props — `NavItemProps`

| Prop          | Type          | Default | Description |
| ------------- | ------------- | ------- | ----------- |
| `itemType` \* | `"component"` | —       | —           |
| `children` \* | `JSX.Element` | —       | —           |

## Props — `NavbarButtonProps`

| Prop            | Type          | Default | Description                                                                                            |
| --------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `type` \*       | `"download"`  | —       | —                                                                                                      |
| `args`          | `ButtonProps` | —       | —                                                                                                      |
| `uncollapsible` | `boolean`     | false   | When `true`, the button remains visible outside the mobile drawer rather than being collapsed into it. |

## Props — `NavbarDrawerApi`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

## Props — `NavbarDrawerHandle`

| Prop               | Type         | Default | Description                                                                   |
| ------------------ | ------------ | ------- | ----------------------------------------------------------------------------- |
| `dismissDrawer` \* | `() => void` | —       | Programmatically closes the mobile navigation drawer with its exit animation. |

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
