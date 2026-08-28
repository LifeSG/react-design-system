# Menu

Import: `import { Menu } from "@lifesg/react-design-system/menu"`

## When to use

Use when a trigger element (button, avatar, nav link) should open a floating dropdown with a list of actions or links.

Common use cases:

-   Avatar / user account menu in authenticated dashboards
-   Navbar link dropdown for sub-navigation

## Sub-components

`Menu`, `Menu.Content`, `Menu.Section`, `Menu.Item`, `Menu.Link`

## Variants

| Use case          | Structure                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| User account menu | First section: name + email as `Menu.Item`. Subsequent sections: `Menu.Link` for profile/settings, `Menu.Item` for sign out |
| Nav link dropdown | Single `Menu.Section` with `Menu.Link` items                                                                                |
| Action menu       | `Menu.Section` with `Menu.Item` elements and optional `label`                                                               |

## Usage

```tsx
import { Menu } from "@lifesg/react-design-system/menu";
import { Button } from "@lifesg/react-design-system/button";

<Menu
    menuContent={
        <Menu.Content>
            <Menu.Section showDivider={false}>
                <Menu.Link href="/profile">Profile</Menu.Link>
                <Menu.Link href="/settings">Settings</Menu.Link>
            </Menu.Section>
            <Menu.Section>
                <Menu.Item label="Sign out" onClick={() => {}} />
            </Menu.Section>
        </Menu.Content>
    }
>
    <Button.Default styleType="secondary">Account</Button.Default>
</Menu>;
```

## Props

### Menu

Inherits `PopoverV2TriggerProps` (except `popoverContent`), plus:

| Prop          | Type                                                                                                                                                                 | Default          | Description                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------- |
| `menuContent` | `Menu.Content`                                                                                                                                                       | —                | The popover panel — **required**                    |
| `position`    | `"top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end" \| "left" \| "left-start" \| "left-end" \| "right" \| "right-start" \| "right-end"` | `"bottom-start"` | Visual position of the menu relative to its trigger |
| `data-testid` | `string`                                                                                                                                                             | `"menu"`         | Test identifier                                     |

### Menu.Content

Inherits `HTMLAttributes<HTMLDivElement>`, plus:

| Prop          | Type                                                    | Default          | Description                                                   |
| ------------- | ------------------------------------------------------- | ---------------- | ------------------------------------------------------------- |
| `children`    | `Menu.Section \| Menu.Section[]`                        | —                | One or more `Menu.Section` elements — **required**            |
| `overflow`    | `"visible" \| "hidden" \| "clip" \| "scroll" \| "auto"` | —                | Controls content overflow                                     |
| `maxHeight`   | `number`                                                | —                | Max height in pixels; overflow behavior applies when exceeded |
| `data-testid` | `string`                                                | `"menu-content"` | Test identifier                                               |

### Menu.Section

Inherits `HTMLAttributes<HTMLDivElement>`, plus:

| Prop          | Type                                                   | Default          | Description                        |
| ------------- | ------------------------------------------------------ | ---------------- | ---------------------------------- |
| `children`    | `Menu.Item \| Menu.Link \| (Menu.Item \| Menu.Link)[]` | —                | Menu items or links — **required** |
| `label`       | `string`                                               | —                | Optional section heading           |
| `showDivider` | `boolean`                                              | `true`           | Show a divider above the section   |
| `data-testid` | `string`                                               | `"menu-section"` | Test identifier                    |

### Menu.Item

Inherits `HTMLAttributes<HTMLLIElement>`, plus:

| Prop          | Type                                           | Default       | Description                                                                      |
| ------------- | ---------------------------------------------- | ------------- | -------------------------------------------------------------------------------- |
| `label`       | `string`                                       | —             | Primary text for the menu item                                                   |
| `subLabel`    | `string`                                       | —             | Secondary text shown below the label                                             |
| `data-testid` | `string`                                       | `"menu-item"` | Test identifier                                                                  |
| `onClick`     | `(e: React.MouseEvent<HTMLLIElement>) => void` | —             | Called when the item is clicked — inherited from `HTMLAttributes<HTMLLIElement>` |

### Menu.Link

Inherits `HTMLAttributes<HTMLAnchorElement>`, plus:

| Prop          | Type     | Default       | Description     |
| ------------- | -------- | ------------- | --------------- |
| `data-testid` | `string` | `"menu-link"` | Test identifier |

## Rules

-   `Menu` wraps a trigger element as its child — the trigger can be any element (e.g. `Avatar`, `Button`, `NavbarLink`).
-   Pass `Menu.Content` as the `menuContent` prop — not as a child of `Menu`.
-   Use `Menu.Link` for navigation (href-based); use `Menu.Item` for in-page actions (onClick-based).
-   Use `Menu.Section` with `showDivider` to visually separate unrelated groups of actions.
-   For user account menus, always show the user's name and email as the first section.
-   Use `position` to control which side of the trigger the menu appears on; default `"bottom-start"` suits most cases.

## Anti-patterns

-   Do not pass `Menu.Content` as a child of `Menu` — it must be passed as `menuContent`.
-   Do not mix navigation links and action items in the same `Menu.Section` without a divider.
-   Do not use `Menu.Item` for links that navigate to a new page — use `Menu.Link` instead.
