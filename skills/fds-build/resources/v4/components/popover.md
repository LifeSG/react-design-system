# Popover

Import: `import { Popover, withPopover } from "@lifesg/react-design-system/popover"`

## When to use

Use to show supplementary information when a user interacts with (clicks or hovers over) an element. On mobile, the popover renders as a bottom modal sheet.

## Variants

Two usage patterns are available:

-   **`withPopover` HOC** — wraps an existing element to add popover behaviour.
-   **`Popover` component** — a standalone popover that you control manually.

## Usage

```tsx
import { withPopover } from "@lifesg/react-design-system/popover";
import { Button } from "@lifesg/react-design-system/button";

{
    /* Preferred: HOC wraps an existing element */
}
{
    withPopover(
        <Button.Default styleType="link">What is this?</Button.Default>,
        { content: "This field requires your NRIC number.", trigger: "click" }
    );
}
```

## Props — `PopoverProps`

| Prop            | Type                    | Default            | Description                                                                                                         |
| --------------- | ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `children` \*   | `string \| JSX.Element` | —                  | Content displayed inside the popover. A plain string is automatically wrapped in a `Typography.BodyMD` element.     |
| `visible`       | `boolean`               | false              | Controls whether the popover is visible.                                                                            |
| `id`            | `string`                | —                  | —                                                                                                                   |
| `className`     | `string`                | —                  | —                                                                                                                   |
| `onMobileClose` | `(() => void)`          | —                  | Called when the user dismisses the popover on a mobile viewport, either by tapping the overlay or the close button. |
| `ariaLabel`     | `string`                | "More information" | Accessible label for the `role="dialog"` element.                                                                   |
| `overflow`      | `PopoverOverflowType`   | —                  | CSS `overflow` value applied to the popover card body.                                                              |
| `maxHeight`     | `number`                | —                  | Maximum height of the popover card in pixels.                                                                       |

## Props — `PopoverRenderProps`

| Prop        | Type                  | Default | Description                                            |
| ----------- | --------------------- | ------- | ------------------------------------------------------ |
| `overflow`  | `PopoverOverflowType` | —       | CSS `overflow` value applied to the popover card body. |
| `maxHeight` | `number`              | —       | Maximum height of the popover card in pixels.          |

## Props — `PopoverTriggerProps`

| Prop                | Type                                                                                 | Default            | Description                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `React.ReactNode`                                                                    | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `popoverContent` \* | `\| string \| JSX.Element \| ((renderProps: PopoverRenderProps) => React.ReactNode)` | —                  | Content shown inside the popover panel. A string or JSX element is rendered inside the default `Popover`; a render function bypasses it for completely custom rendering.        |
| `trigger`           | `PopoverTriggerType`                                                                 | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `position`          | `PopoverPosition`                                                                    | "top"              | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `id`                | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `zIndex`            | `number`                                                                             | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`         | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `rootNode`          | `RefObject<HTMLElement>`                                                             | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`      | `number`                                                                             | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`             | `\| { open?: number; close?: number }`                                               | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`        | `boolean`                                                                            | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`      | `boolean`                                                                            | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`          | `PopoverOverflowType`                                                                | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel`  | `string`                                                                             | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`    | `boolean`                                                                            | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`           | `boolean`                                                                            | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`   | `(() => void)`                                                                       | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss`  | `(() => void)`                                                                       | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `PopoverProps`

| Prop            | Type                    | Default            | Description                                                                                                         |
| --------------- | ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `children` \*   | `string \| JSX.Element` | —                  | Content displayed inside the popover. A plain string is automatically wrapped in a `Typography.BodyMD` element.     |
| `visible`       | `boolean`               | false              | Controls whether the popover is visible.                                                                            |
| `id`            | `string`                | —                  | —                                                                                                                   |
| `className`     | `string`                | —                  | —                                                                                                                   |
| `onMobileClose` | `(() => void)`          | —                  | Called when the user dismisses the popover on a mobile viewport, either by tapping the overlay or the close button. |
| `ariaLabel`     | `string`                | "More information" | Accessible label for the `role="dialog"` element.                                                                   |
| `overflow`      | `PopoverOverflowType`   | —                  | CSS `overflow` value applied to the popover card body.                                                              |
| `maxHeight`     | `number`                | —                  | Maximum height of the popover card in pixels.                                                                       |

## Props — `PopoverRenderProps`

| Prop        | Type                  | Default | Description                                            |
| ----------- | --------------------- | ------- | ------------------------------------------------------ |
| `overflow`  | `PopoverOverflowType` | —       | CSS `overflow` value applied to the popover card body. |
| `maxHeight` | `number`              | —       | Maximum height of the popover card in pixels.          |

## Props — `PopoverTriggerProps`

| Prop                | Type                                                                                 | Default            | Description                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `React.ReactNode`                                                                    | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `popoverContent` \* | `\| string \| JSX.Element \| ((renderProps: PopoverRenderProps) => React.ReactNode)` | —                  | Content shown inside the popover panel. A string or JSX element is rendered inside the default `Popover`; a render function bypasses it for completely custom rendering.        |
| `trigger`           | `PopoverTriggerType`                                                                 | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `position`          | `PopoverPosition`                                                                    | "top"              | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `id`                | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `zIndex`            | `number`                                                                             | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`         | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `rootNode`          | `RefObject<HTMLElement>`                                                             | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`      | `number`                                                                             | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`             | `\| { open?: number; close?: number }`                                               | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`        | `boolean`                                                                            | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`      | `boolean`                                                                            | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`          | `PopoverOverflowType`                                                                | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel`  | `string`                                                                             | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`    | `boolean`                                                                            | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`           | `boolean`                                                                            | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`   | `(() => void)`                                                                       | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss`  | `(() => void)`                                                                       | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `PopoverProps`

| Prop            | Type                    | Default            | Description                                                                                                         |
| --------------- | ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `children` \*   | `string \| JSX.Element` | —                  | Content displayed inside the popover. A plain string is automatically wrapped in a `Typography.BodyMD` element.     |
| `visible`       | `boolean`               | false              | Controls whether the popover is visible.                                                                            |
| `id`            | `string`                | —                  | —                                                                                                                   |
| `className`     | `string`                | —                  | —                                                                                                                   |
| `onMobileClose` | `(() => void)`          | —                  | Called when the user dismisses the popover on a mobile viewport, either by tapping the overlay or the close button. |
| `ariaLabel`     | `string`                | "More information" | Accessible label for the `role="dialog"` element.                                                                   |
| `overflow`      | `PopoverOverflowType`   | —                  | CSS `overflow` value applied to the popover card body.                                                              |
| `maxHeight`     | `number`                | —                  | Maximum height of the popover card in pixels.                                                                       |

## Props — `PopoverRenderProps`

| Prop        | Type                  | Default | Description                                            |
| ----------- | --------------------- | ------- | ------------------------------------------------------ |
| `overflow`  | `PopoverOverflowType` | —       | CSS `overflow` value applied to the popover card body. |
| `maxHeight` | `number`              | —       | Maximum height of the popover card in pixels.          |

## Props — `PopoverTriggerProps`

| Prop                | Type                                                                                 | Default            | Description                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `React.ReactNode`                                                                    | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `popoverContent` \* | `\| string \| JSX.Element \| ((renderProps: PopoverRenderProps) => React.ReactNode)` | —                  | Content shown inside the popover panel. A string or JSX element is rendered inside the default `Popover`; a render function bypasses it for completely custom rendering.        |
| `trigger`           | `PopoverTriggerType`                                                                 | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `position`          | `PopoverPosition`                                                                    | "top"              | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `id`                | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `zIndex`            | `number`                                                                             | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`         | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `rootNode`          | `RefObject<HTMLElement>`                                                             | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`      | `number`                                                                             | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`             | `\| { open?: number; close?: number }`                                               | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`        | `boolean`                                                                            | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`      | `boolean`                                                                            | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`          | `PopoverOverflowType`                                                                | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel`  | `string`                                                                             | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`    | `boolean`                                                                            | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`           | `boolean`                                                                            | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`   | `(() => void)`                                                                       | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss`  | `(() => void)`                                                                       | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `PopoverProps`

| Prop            | Type                    | Default            | Description                                                                                                         |
| --------------- | ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `children` \*   | `string \| JSX.Element` | —                  | Content displayed inside the popover. A plain string is automatically wrapped in a `Typography.BodyMD` element.     |
| `visible`       | `boolean`               | false              | Controls whether the popover is visible.                                                                            |
| `id`            | `string`                | —                  | —                                                                                                                   |
| `className`     | `string`                | —                  | —                                                                                                                   |
| `onMobileClose` | `(() => void)`          | —                  | Called when the user dismisses the popover on a mobile viewport, either by tapping the overlay or the close button. |
| `ariaLabel`     | `string`                | "More information" | Accessible label for the `role="dialog"` element.                                                                   |
| `overflow`      | `PopoverOverflowType`   | —                  | CSS `overflow` value applied to the popover card body.                                                              |
| `maxHeight`     | `number`                | —                  | Maximum height of the popover card in pixels.                                                                       |

## Props — `PopoverRenderProps`

| Prop        | Type                  | Default | Description                                            |
| ----------- | --------------------- | ------- | ------------------------------------------------------ |
| `overflow`  | `PopoverOverflowType` | —       | CSS `overflow` value applied to the popover card body. |
| `maxHeight` | `number`              | —       | Maximum height of the popover card in pixels.          |

## Props — `PopoverTriggerProps`

| Prop                | Type                                                                                 | Default            | Description                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `React.ReactNode`                                                                    | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `popoverContent` \* | `\| string \| JSX.Element \| ((renderProps: PopoverRenderProps) => React.ReactNode)` | —                  | Content shown inside the popover panel. A string or JSX element is rendered inside the default `Popover`; a render function bypasses it for completely custom rendering.        |
| `trigger`           | `PopoverTriggerType`                                                                 | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `position`          | `PopoverPosition`                                                                    | "top"              | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `id`                | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `zIndex`            | `number`                                                                             | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`         | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `rootNode`          | `RefObject<HTMLElement>`                                                             | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`      | `number`                                                                             | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`             | `\| { open?: number; close?: number }`                                               | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`        | `boolean`                                                                            | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`      | `boolean`                                                                            | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`          | `PopoverOverflowType`                                                                | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel`  | `string`                                                                             | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`    | `boolean`                                                                            | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`           | `boolean`                                                                            | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`   | `(() => void)`                                                                       | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss`  | `(() => void)`                                                                       | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `PopoverProps`

| Prop            | Type                    | Default            | Description                                                                                                         |
| --------------- | ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `children` \*   | `string \| JSX.Element` | —                  | Content displayed inside the popover. A plain string is automatically wrapped in a `Typography.BodyMD` element.     |
| `visible`       | `boolean`               | false              | Controls whether the popover is visible.                                                                            |
| `id`            | `string`                | —                  | —                                                                                                                   |
| `className`     | `string`                | —                  | —                                                                                                                   |
| `onMobileClose` | `(() => void)`          | —                  | Called when the user dismisses the popover on a mobile viewport, either by tapping the overlay or the close button. |
| `ariaLabel`     | `string`                | "More information" | Accessible label for the `role="dialog"` element.                                                                   |
| `overflow`      | `PopoverOverflowType`   | —                  | CSS `overflow` value applied to the popover card body.                                                              |
| `maxHeight`     | `number`                | —                  | Maximum height of the popover card in pixels.                                                                       |

## Props — `PopoverRenderProps`

| Prop        | Type                  | Default | Description                                            |
| ----------- | --------------------- | ------- | ------------------------------------------------------ |
| `overflow`  | `PopoverOverflowType` | —       | CSS `overflow` value applied to the popover card body. |
| `maxHeight` | `number`              | —       | Maximum height of the popover card in pixels.          |

## Props — `PopoverTriggerProps`

| Prop                | Type                                                                                 | Default            | Description                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `React.ReactNode`                                                                    | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `popoverContent` \* | `\| string \| JSX.Element \| ((renderProps: PopoverRenderProps) => React.ReactNode)` | —                  | Content shown inside the popover panel. A string or JSX element is rendered inside the default `Popover`; a render function bypasses it for completely custom rendering.        |
| `trigger`           | `PopoverTriggerType`                                                                 | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `position`          | `PopoverPosition`                                                                    | "top"              | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `id`                | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `zIndex`            | `number`                                                                             | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`         | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `rootNode`          | `RefObject<HTMLElement>`                                                             | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`      | `number`                                                                             | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`             | `\| { open?: number; close?: number }`                                               | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`        | `boolean`                                                                            | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`      | `boolean`                                                                            | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`          | `PopoverOverflowType`                                                                | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel`  | `string`                                                                             | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`    | `boolean`                                                                            | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`           | `boolean`                                                                            | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`   | `(() => void)`                                                                       | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss`  | `(() => void)`                                                                       | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Props — `PopoverProps`

| Prop            | Type                    | Default            | Description                                                                                                         |
| --------------- | ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `children` \*   | `string \| JSX.Element` | —                  | Content displayed inside the popover. A plain string is automatically wrapped in a `Typography.BodyMD` element.     |
| `visible`       | `boolean`               | false              | Controls whether the popover is visible.                                                                            |
| `id`            | `string`                | —                  | —                                                                                                                   |
| `className`     | `string`                | —                  | —                                                                                                                   |
| `onMobileClose` | `(() => void)`          | —                  | Called when the user dismisses the popover on a mobile viewport, either by tapping the overlay or the close button. |
| `ariaLabel`     | `string`                | "More information" | Accessible label for the `role="dialog"` element.                                                                   |
| `overflow`      | `PopoverOverflowType`   | —                  | CSS `overflow` value applied to the popover card body.                                                              |
| `maxHeight`     | `number`                | —                  | Maximum height of the popover card in pixels.                                                                       |

## Props — `PopoverRenderProps`

| Prop        | Type                  | Default | Description                                            |
| ----------- | --------------------- | ------- | ------------------------------------------------------ |
| `overflow`  | `PopoverOverflowType` | —       | CSS `overflow` value applied to the popover card body. |
| `maxHeight` | `number`              | —       | Maximum height of the popover card in pixels.          |

## Props — `PopoverTriggerProps`

| Prop                | Type                                                                                 | Default            | Description                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*       | `React.ReactNode`                                                                    | —                  | The trigger element rendered inside a focusable wrapper div.                                                                                                                    |
| `popoverContent` \* | `\| string \| JSX.Element \| ((renderProps: PopoverRenderProps) => React.ReactNode)` | —                  | Content shown inside the popover panel. A string or JSX element is rendered inside the default `Popover`; a render function bypasses it for completely custom rendering.        |
| `trigger`           | `PopoverTriggerType`                                                                 | "click"            | Interaction that opens the popover.                                                                                                                                             |
| `position`          | `PopoverPosition`                                                                    | "top"              | Preferred placement of the popover relative to the trigger.                                                                                                                     |
| `id`                | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `zIndex`            | `number`                                                                             | —                  | Overrides the stacking context z-index for the floating popover layer. Falls back to the inherited floating context z-index when omitted.                                       |
| `className`         | `string`                                                                             | —                  | —                                                                                                                                                                               |
| `rootNode`          | `RefObject<HTMLElement>`                                                             | document.body      | The root element that contains the popover element.                                                                                                                             |
| `customOffset`      | `number`                                                                             | 16                 | Distance in pixels between the trigger element and the popover panel.                                                                                                           |
| `delay`             | `\| { open?: number; close?: number }`                                               | —                  | Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.                                                                                                |
| `enableFlip`        | `boolean`                                                                            | true               | Allows the popover to flip to the opposite side when the preferred position has insufficient viewport space.                                                                    |
| `enableResize`      | `boolean`                                                                            | false              | Resizes the popover to fit the remaining vertical space in the viewport.                                                                                                        |
| `overflow`          | `PopoverOverflowType`                                                                | "auto"             | CSS `overflow` value forwarded to the popover card when `enableResize` is active.                                                                                               |
| `popoverAriaLabel`  | `string`                                                                             | "More information" | Accessible label for the popover dialog element.                                                                                                                                |
| `triggerOnFocus`    | `boolean`                                                                            | false              | Also opens the popover when the trigger element receives focus.                                                                                                                 |
| `isModal`           | `boolean`                                                                            | true               | When `true`, focus is trapped inside the popover until dismissed. When `false`, the popover closes automatically once the user tabs away from both the trigger and the popover. |
| `onPopoverAppear`   | `(() => void)`                                                                       | —                  | Called when the popover becomes visible.                                                                                                                                        |
| `onPopoverDismiss`  | `(() => void)`                                                                       | —                  | Called when the popover is dismissed.                                                                                                                                           |

## Rules

-   Use `withPopover` for most cases — it handles trigger logic automatically.
-   Use the `Popover` component directly when you need full manual control over visibility.
-   On mobile viewports the Popover renders as a bottom modal sheet — provide `onMobileClose` to handle dismissal.
