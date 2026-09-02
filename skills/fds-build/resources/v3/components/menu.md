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

## Props — `MenuProps`

| Prop               | Type                                         | Default            | Description                                                                                                                                                                     |
| ------------------ | -------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `menuContent` \*   | `FunctionComponentElement<MenuContentProps>` | —                  | The `Menu.Content` element to display inside the popover panel.                                                                                                                 |
| `position`         | `PopoverPosition`                            | "bottom-start"     | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `children` \*      | `React.ReactNode`                            | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `trigger`          | `PopoverTriggerType`                         | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `id`               | `string`                                     | —                  | —                                                                                                                                                                               |
| `zIndex`           | `number`                                     | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`        | `string`                                     | —                  | —                                                                                                                                                                               |
| `rootNode`         | `RefObject<HTMLElement>`                     | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`     | `number`                                     | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`            | `\| { open?: number; close?: number }`       | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`       | `boolean`                                    | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`     | `boolean`                                    | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`         | `PopoverOverflowType`                        | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel` | `string`                                     | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`   | `boolean`                                    | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`          | `boolean`                                    | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`  | `(() => void)`                               | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss` | `(() => void)`                               | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `MenuContentProps`

| Prop          | Type                                                                        | Default | Description                                                      |
| ------------- | --------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `children` \* | `\| ReactElement<typeof MenuSection> \| ReactElement<typeof MenuSection>[]` | —       | One or more `Menu.Section` elements that make up the panel body. |
| `overflow`    | `PopoverOverflowType`                                                       | —       | CSS `overflow` value applied to the popover card body.           |
| `maxHeight`   | `number`                                                                    | —       | Maximum height of the popover card in pixels.                    |

## Props — `MenuSectionProps`

| Prop          | Type                                   | Default | Description                                                                 |
| ------------- | -------------------------------------- | ------- | --------------------------------------------------------------------------- |
| `children` \* | `MenuSectionItem \| MenuSectionItem[]` | —       | One or more `Menu.Item` or `Menu.Link` elements within this section.        |
| `showDivider` | `boolean`                              | true    | Whether to render a top divider separating this section from the one above. |
| `label`       | `string`                               | —       | Accessible group label rendered above the section items.                    |

## Props — `MenuItemProps`

| Prop       | Type     | Default | Description                                        |
| ---------- | -------- | ------- | -------------------------------------------------- |
| `label`    | `string` | —       | Primary text label.                                |
| `subLabel` | `string` | —       | Secondary descriptive text rendered below `label`. |

## Props — `MenuProps`

| Prop               | Type                                         | Default            | Description                                                                                                                                                                     |
| ------------------ | -------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `menuContent` \*   | `FunctionComponentElement<MenuContentProps>` | —                  | The `Menu.Content` element to display inside the popover panel.                                                                                                                 |
| `position`         | `PopoverPosition`                            | "bottom-start"     | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `children` \*      | `React.ReactNode`                            | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `trigger`          | `PopoverTriggerType`                         | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `id`               | `string`                                     | —                  | —                                                                                                                                                                               |
| `zIndex`           | `number`                                     | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`        | `string`                                     | —                  | —                                                                                                                                                                               |
| `rootNode`         | `RefObject<HTMLElement>`                     | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`     | `number`                                     | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`            | `\| { open?: number; close?: number }`       | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`       | `boolean`                                    | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`     | `boolean`                                    | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`         | `PopoverOverflowType`                        | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel` | `string`                                     | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`   | `boolean`                                    | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`          | `boolean`                                    | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`  | `(() => void)`                               | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss` | `(() => void)`                               | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `MenuContentProps`

| Prop          | Type                                                                        | Default | Description                                                      |
| ------------- | --------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `children` \* | `\| ReactElement<typeof MenuSection> \| ReactElement<typeof MenuSection>[]` | —       | One or more `Menu.Section` elements that make up the panel body. |
| `overflow`    | `PopoverOverflowType`                                                       | —       | CSS `overflow` value applied to the popover card body.           |
| `maxHeight`   | `number`                                                                    | —       | Maximum height of the popover card in pixels.                    |

## Props — `MenuSectionProps`

| Prop          | Type                                   | Default | Description                                                                 |
| ------------- | -------------------------------------- | ------- | --------------------------------------------------------------------------- |
| `children` \* | `MenuSectionItem \| MenuSectionItem[]` | —       | One or more `Menu.Item` or `Menu.Link` elements within this section.        |
| `showDivider` | `boolean`                              | true    | Whether to render a top divider separating this section from the one above. |
| `label`       | `string`                               | —       | Accessible group label rendered above the section items.                    |

## Props — `MenuItemProps`

| Prop       | Type     | Default | Description                                        |
| ---------- | -------- | ------- | -------------------------------------------------- |
| `label`    | `string` | —       | Primary text label.                                |
| `subLabel` | `string` | —       | Secondary descriptive text rendered below `label`. |

## Props — `MenuProps`

| Prop               | Type                                         | Default            | Description                                                                                                                                                                     |
| ------------------ | -------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `menuContent` \*   | `FunctionComponentElement<MenuContentProps>` | —                  | The `Menu.Content` element to display inside the popover panel.                                                                                                                 |
| `position`         | `PopoverPosition`                            | "bottom-start"     | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `children` \*      | `React.ReactNode`                            | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `trigger`          | `PopoverTriggerType`                         | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `id`               | `string`                                     | —                  | —                                                                                                                                                                               |
| `zIndex`           | `number`                                     | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`        | `string`                                     | —                  | —                                                                                                                                                                               |
| `rootNode`         | `RefObject<HTMLElement>`                     | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`     | `number`                                     | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`            | `\| { open?: number; close?: number }`       | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`       | `boolean`                                    | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`     | `boolean`                                    | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`         | `PopoverOverflowType`                        | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel` | `string`                                     | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`   | `boolean`                                    | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`          | `boolean`                                    | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`  | `(() => void)`                               | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss` | `(() => void)`                               | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `MenuContentProps`

| Prop          | Type                                                                        | Default | Description                                                      |
| ------------- | --------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `children` \* | `\| ReactElement<typeof MenuSection> \| ReactElement<typeof MenuSection>[]` | —       | One or more `Menu.Section` elements that make up the panel body. |
| `overflow`    | `PopoverOverflowType`                                                       | —       | CSS `overflow` value applied to the popover card body.           |
| `maxHeight`   | `number`                                                                    | —       | Maximum height of the popover card in pixels.                    |

## Props — `MenuSectionProps`

| Prop          | Type                                   | Default | Description                                                                 |
| ------------- | -------------------------------------- | ------- | --------------------------------------------------------------------------- |
| `children` \* | `MenuSectionItem \| MenuSectionItem[]` | —       | One or more `Menu.Item` or `Menu.Link` elements within this section.        |
| `showDivider` | `boolean`                              | true    | Whether to render a top divider separating this section from the one above. |
| `label`       | `string`                               | —       | Accessible group label rendered above the section items.                    |

## Props — `MenuItemProps`

| Prop       | Type     | Default | Description                                        |
| ---------- | -------- | ------- | -------------------------------------------------- |
| `label`    | `string` | —       | Primary text label.                                |
| `subLabel` | `string` | —       | Secondary descriptive text rendered below `label`. |

## Props — `MenuProps`

| Prop               | Type                                         | Default            | Description                                                                                                                                                                     |
| ------------------ | -------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `menuContent` \*   | `FunctionComponentElement<MenuContentProps>` | —                  | The `Menu.Content` element to display inside the popover panel.                                                                                                                 |
| `position`         | `PopoverPosition`                            | "bottom-start"     | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `children` \*      | `React.ReactNode`                            | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `trigger`          | `PopoverTriggerType`                         | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `id`               | `string`                                     | —                  | —                                                                                                                                                                               |
| `zIndex`           | `number`                                     | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`        | `string`                                     | —                  | —                                                                                                                                                                               |
| `rootNode`         | `RefObject<HTMLElement>`                     | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`     | `number`                                     | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`            | `\| { open?: number; close?: number }`       | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`       | `boolean`                                    | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`     | `boolean`                                    | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`         | `PopoverOverflowType`                        | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel` | `string`                                     | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`   | `boolean`                                    | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`          | `boolean`                                    | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`  | `(() => void)`                               | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss` | `(() => void)`                               | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `MenuContentProps`

| Prop          | Type                                                                        | Default | Description                                                      |
| ------------- | --------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `children` \* | `\| ReactElement<typeof MenuSection> \| ReactElement<typeof MenuSection>[]` | —       | One or more `Menu.Section` elements that make up the panel body. |
| `overflow`    | `PopoverOverflowType`                                                       | —       | CSS `overflow` value applied to the popover card body.           |
| `maxHeight`   | `number`                                                                    | —       | Maximum height of the popover card in pixels.                    |

## Props — `MenuSectionProps`

| Prop          | Type                                   | Default | Description                                                                 |
| ------------- | -------------------------------------- | ------- | --------------------------------------------------------------------------- |
| `children` \* | `MenuSectionItem \| MenuSectionItem[]` | —       | One or more `Menu.Item` or `Menu.Link` elements within this section.        |
| `showDivider` | `boolean`                              | true    | Whether to render a top divider separating this section from the one above. |
| `label`       | `string`                               | —       | Accessible group label rendered above the section items.                    |

## Props — `MenuItemProps`

| Prop       | Type     | Default | Description                                        |
| ---------- | -------- | ------- | -------------------------------------------------- |
| `label`    | `string` | —       | Primary text label.                                |
| `subLabel` | `string` | —       | Secondary descriptive text rendered below `label`. |

## Props — `MenuProps`

| Prop               | Type                                         | Default            | Description                                                                                                                                                                     |
| ------------------ | -------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `menuContent` \*   | `FunctionComponentElement<MenuContentProps>` | —                  | The `Menu.Content` element to display inside the popover panel.                                                                                                                 |
| `position`         | `PopoverPosition`                            | "bottom-start"     | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `children` \*      | `React.ReactNode`                            | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `trigger`          | `PopoverTriggerType`                         | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `id`               | `string`                                     | —                  | —                                                                                                                                                                               |
| `zIndex`           | `number`                                     | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`        | `string`                                     | —                  | —                                                                                                                                                                               |
| `rootNode`         | `RefObject<HTMLElement>`                     | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`     | `number`                                     | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`            | `\| { open?: number; close?: number }`       | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`       | `boolean`                                    | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`     | `boolean`                                    | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`         | `PopoverOverflowType`                        | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel` | `string`                                     | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`   | `boolean`                                    | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`          | `boolean`                                    | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`  | `(() => void)`                               | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss` | `(() => void)`                               | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `MenuContentProps`

| Prop          | Type                                                                        | Default | Description                                                      |
| ------------- | --------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `children` \* | `\| ReactElement<typeof MenuSection> \| ReactElement<typeof MenuSection>[]` | —       | One or more `Menu.Section` elements that make up the panel body. |
| `overflow`    | `PopoverOverflowType`                                                       | —       | CSS `overflow` value applied to the popover card body.           |
| `maxHeight`   | `number`                                                                    | —       | Maximum height of the popover card in pixels.                    |

## Props — `MenuSectionProps`

| Prop          | Type                                   | Default | Description                                                                 |
| ------------- | -------------------------------------- | ------- | --------------------------------------------------------------------------- |
| `children` \* | `MenuSectionItem \| MenuSectionItem[]` | —       | One or more `Menu.Item` or `Menu.Link` elements within this section.        |
| `showDivider` | `boolean`                              | true    | Whether to render a top divider separating this section from the one above. |
| `label`       | `string`                               | —       | Accessible group label rendered above the section items.                    |

## Props — `MenuItemProps`

| Prop       | Type     | Default | Description                                        |
| ---------- | -------- | ------- | -------------------------------------------------- |
| `label`    | `string` | —       | Primary text label.                                |
| `subLabel` | `string` | —       | Secondary descriptive text rendered below `label`. |

## Props — `MenuProps`

| Prop               | Type                                         | Default            | Description                                                                                                                                                                     |
| ------------------ | -------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `menuContent` \*   | `FunctionComponentElement<MenuContentProps>` | —                  | The `Menu.Content` element to display inside the popover panel.                                                                                                                 |
| `position`         | `PopoverPosition`                            | "bottom-start"     | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `children` \*      | `React.ReactNode`                            | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `trigger`          | `PopoverTriggerType`                         | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `id`               | `string`                                     | —                  | —                                                                                                                                                                               |
| `zIndex`           | `number`                                     | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`        | `string`                                     | —                  | —                                                                                                                                                                               |
| `rootNode`         | `RefObject<HTMLElement>`                     | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`     | `number`                                     | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`            | `\| { open?: number; close?: number }`       | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`       | `boolean`                                    | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`     | `boolean`                                    | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`         | `PopoverOverflowType`                        | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel` | `string`                                     | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`   | `boolean`                                    | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`          | `boolean`                                    | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`  | `(() => void)`                               | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss` | `(() => void)`                               | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `MenuContentProps`

| Prop          | Type                                                                        | Default | Description                                                      |
| ------------- | --------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `children` \* | `\| ReactElement<typeof MenuSection> \| ReactElement<typeof MenuSection>[]` | —       | One or more `Menu.Section` elements that make up the panel body. |
| `overflow`    | `PopoverOverflowType`                                                       | —       | CSS `overflow` value applied to the popover card body.           |
| `maxHeight`   | `number`                                                                    | —       | Maximum height of the popover card in pixels.                    |

## Props — `MenuSectionProps`

| Prop          | Type                                   | Default | Description                                                                 |
| ------------- | -------------------------------------- | ------- | --------------------------------------------------------------------------- |
| `children` \* | `MenuSectionItem \| MenuSectionItem[]` | —       | One or more `Menu.Item` or `Menu.Link` elements within this section.        |
| `showDivider` | `boolean`                              | true    | Whether to render a top divider separating this section from the one above. |
| `label`       | `string`                               | —       | Accessible group label rendered above the section items.                    |

## Props — `MenuItemProps`

| Prop       | Type     | Default | Description                                        |
| ---------- | -------- | ------- | -------------------------------------------------- |
| `label`    | `string` | —       | Primary text label.                                |
| `subLabel` | `string` | —       | Secondary descriptive text rendered below `label`. |

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
