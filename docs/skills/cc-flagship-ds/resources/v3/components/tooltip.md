# Tooltip

> **Not available in v4.** If you are building for v4, use `Popover` with `trigger="hover"` instead.

Import: `import { Tooltip, withTooltip } from "@lifesg/react-design-system/tooltip"`

## When to use

Use to show brief supplementary information when a user hovers over or focuses an element. For interactive contextual information, use Popover instead.

## Variants

Two usage patterns are available:

-   **`withTooltip` HOC** — wraps an existing element to add tooltip behaviour automatically.
-   **`Tooltip` component** — a standalone tooltip that you control manually.

## Usage

```tsx
import { withTooltip } from "@lifesg/react-design-system/tooltip";
import { Button } from "@lifesg/react-design-system/button";

{
    /* Preferred: HOC wraps an existing element */
}
{
    withTooltip(<Button.Default styleType="default">Save</Button.Default>, {
        content: "Save your changes",
    });
}
```

## Props

### withTooltip

```ts
withTooltip(component: JSX.Element, options: TooltipHOCOptionsProps): JSX.Element
```

**TooltipHOCOptionsProps**

| Prop      | Type                    | Description                    |
| --------- | ----------------------- | ------------------------------ |
| `content` | `JSX.Element \| string` | Tooltip content — **required** |

### Tooltip

| Prop          | Type                                     | Default | Description                      |
| ------------- | ---------------------------------------- | ------- | -------------------------------- |
| `children`    | `JSX.Element \| string`                  | —       | Tooltip content — **required**   |
| `visible`     | `boolean`                                | `false` | Controls visibility              |
| `position`    | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Position relative to the trigger |
| `id`          | `string`                                 | —       | Unique identifier                |
| `className`   | `string`                                 | —       | Class selector                   |
| `data-testid` | `string`                                 | —       | Test identifier                  |

## Rules

-   Use `withTooltip` for most cases — it handles hover trigger logic automatically.
-   Use the `Tooltip` component directly when you need full manual control over visibility.
