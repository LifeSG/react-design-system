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

## Props

### withPopover

```ts
withPopover(component: JSX.Element, options: PopoverHOCOptionsProps): JSX.Element
```

**PopoverHOCOptionsProps**

| Prop          | Type                    | Default   | Description                    |
| ------------- | ----------------------- | --------- | ------------------------------ |
| `content`     | `string \| JSX.Element` | —         | Popover content — **required** |
| `trigger`     | `"click" \| "hover"`    | `"click"` | How the popover is triggered   |
| `id`          | `string`                | —         | Unique identifier              |
| `data-testid` | `string`                | —         | Test identifier                |

**PopoverHOCProps (on the wrapped component)**

| Prop               | Type         | Description                       |
| ------------------ | ------------ | --------------------------------- |
| `onPopoverAppear`  | `() => void` | Called when the popover appears   |
| `onPopoverDismiss` | `() => void` | Called when the popover dismisses |

### Popover

| Prop            | Type                    | Default | Description                                                       |
| --------------- | ----------------------- | ------- | ----------------------------------------------------------------- |
| `children`      | `string \| JSX.Element` | —       | Popover content — **required**                                    |
| `visible`       | `boolean`               | `false` | Controls visibility                                               |
| `onMobileClose` | `() => void`            | —       | Called when the user dismisses the popover (modal form) on mobile |
| `id`            | `string`                | —       | Unique identifier                                                 |
| `className`     | `string`                | —       | Class selector                                                    |
| `data-testid`   | `string`                | —       | Test identifier                                                   |

## Rules

-   Use `withPopover` for most cases — it handles trigger logic automatically.
-   Use the `Popover` component directly when you need full manual control over visibility.
-   On mobile viewports the Popover renders as a bottom modal sheet — provide `onMobileClose` to handle dismissal.
