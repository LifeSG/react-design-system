# Toast

Import: `import { Toast } from "@lifesg/react-design-system/toast"`

## When to use

Use for brief, non-blocking feedback on system or user actions — "Changes saved", "Upload complete", "Request failed". Does not replace persistent callouts — use Alert for section-specific notices.

## Sub-components

### ActionButtonProps

| Prop      | Type         | Default | Description                                         |
| --------- | ------------ | ------- | --------------------------------------------------- |
| `label`   | `string`     | —       | Label of the action button — required               |
| `onClick` | `() => void` | —       | Called when the action button is clicked — required |

## Variants

| `type`      | When to use                   |
| ----------- | ----------------------------- |
| `"success"` | Action completed successfully |
| `"error"`   | Action failed or system error |
| `"warning"` | Completed with caution        |
| `"info"`    | Neutral status update         |

## Usage

```tsx
import { Toast } from "@lifesg/react-design-system/toast";

<Toast
    type="success"
    label="Changes saved successfully."
    autoDismiss
    onDismiss={() => {}}
/>;
```

## Props

Inherits all `HTMLDivElement` attributes.

| Prop              | Type                                          | Default     | Description                                      |
| ----------------- | --------------------------------------------- | ----------- | ------------------------------------------------ |
| `type`            | `"success" \| "warning" \| "error" \| "info"` | `"success"` | Status type — required                           |
| `label`           | `string \| JSX.Element`                       | —           | Toast content — required                         |
| `title`           | `string \| JSX.Element`                       | —           | Optional heading above the label                 |
| `autoDismiss`     | `boolean`                                     | `false`     | Auto-dismiss after `autoDismissTime`             |
| `autoDismissTime` | `number`                                      | `4000`      | Duration in ms before auto-dismiss               |
| `onDismiss`       | `() => void`                                  | —           | Called when Toast is dismissed (by user or auto) |
| `fixed`           | `boolean`                                     | `true`      | Fix to top of viewport on scroll                 |
| `actionButton`    | `ActionButtonProps`                           | —           | Optional action button rendered in the Toast     |

## Rules

-   `autoDismissTime` only takes effect when `autoDismiss` is `true`.
-   Use `autoDismiss` for non-critical updates — keep visible for errors that require user action.
-   Use `actionButton` for recoverable errors (retry, undo).
-   Use `title` + `label` together when the toast message has a heading and a description.
-   Do not use Toast for persistent notices — use Alert or NotificationBanner instead.

## Anti-patterns

-   Using Toast for errors that require user action without providing an `actionButton`.
-   Setting `autoDismiss` on error toasts — errors should remain visible until the user dismisses them.
-   Replacing Alert with Toast for section-specific inline messages.
