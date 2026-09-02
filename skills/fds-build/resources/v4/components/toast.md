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

## Props — `ToastActionButtonProps`

| Prop         | Type         | Default | Description                              |
| ------------ | ------------ | ------- | ---------------------------------------- |
| `label` \*   | `string`     | —       | The label of the action button           |
| `onClick` \* | `() => void` | —       | Called when the action button is clicked |

## Props — `ToastProps`

| Prop              | Type                        | Default   | Description                                                                                                                           |
| ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*         | `ToastType`                 | "success" | Visual variant controlling the icon and color treatment.                                                                              |
| `label` \*        | `string \| React.ReactNode` | —         | Main text content of the toast. When `title` is also provided, rendered as a supporting description using a smaller typography style. |
| `title`           | `string \| React.ReactNode` | —         | Optional heading displayed above `label`.                                                                                             |
| `autoDismiss`     | `boolean`                   | —         | When `true`, the toast dismisses itself automatically after `autoDismissTime` milliseconds.                                           |
| `autoDismissTime` | `number`                    | 4000      | Duration in milliseconds before the toast auto-dismisses. Only takes effect when `autoDismiss` is `true`.                             |
| `onDismiss`       | `(() => void)`              | —         | Called after the dismissal animation completes.                                                                                       |
| `fixed`           | `boolean`                   | true      | Pins the toast in a fixed position at the top of the viewport.                                                                        |
| `actionButton`    | `ToastActionButtonProps`    | —         | Optional action button rendered alongside the toast content.                                                                          |

## Props — `ToastActionButtonProps`

| Prop         | Type         | Default | Description                              |
| ------------ | ------------ | ------- | ---------------------------------------- |
| `label` \*   | `string`     | —       | The label of the action button           |
| `onClick` \* | `() => void` | —       | Called when the action button is clicked |

## Props — `ToastProps`

| Prop              | Type                        | Default   | Description                                                                                                                           |
| ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*         | `ToastType`                 | "success" | Visual variant controlling the icon and color treatment.                                                                              |
| `label` \*        | `string \| React.ReactNode` | —         | Main text content of the toast. When `title` is also provided, rendered as a supporting description using a smaller typography style. |
| `title`           | `string \| React.ReactNode` | —         | Optional heading displayed above `label`.                                                                                             |
| `autoDismiss`     | `boolean`                   | —         | When `true`, the toast dismisses itself automatically after `autoDismissTime` milliseconds.                                           |
| `autoDismissTime` | `number`                    | 4000      | Duration in milliseconds before the toast auto-dismisses. Only takes effect when `autoDismiss` is `true`.                             |
| `onDismiss`       | `(() => void)`              | —         | Called after the dismissal animation completes.                                                                                       |
| `fixed`           | `boolean`                   | true      | Pins the toast in a fixed position at the top of the viewport.                                                                        |
| `actionButton`    | `ToastActionButtonProps`    | —         | Optional action button rendered alongside the toast content.                                                                          |

## Props — `ToastActionButtonProps`

| Prop         | Type         | Default | Description                              |
| ------------ | ------------ | ------- | ---------------------------------------- |
| `label` \*   | `string`     | —       | The label of the action button           |
| `onClick` \* | `() => void` | —       | Called when the action button is clicked |

## Props — `ToastProps`

| Prop              | Type                        | Default   | Description                                                                                                                           |
| ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*         | `ToastType`                 | "success" | Visual variant controlling the icon and color treatment.                                                                              |
| `label` \*        | `string \| React.ReactNode` | —         | Main text content of the toast. When `title` is also provided, rendered as a supporting description using a smaller typography style. |
| `title`           | `string \| React.ReactNode` | —         | Optional heading displayed above `label`.                                                                                             |
| `autoDismiss`     | `boolean`                   | —         | When `true`, the toast dismisses itself automatically after `autoDismissTime` milliseconds.                                           |
| `autoDismissTime` | `number`                    | 4000      | Duration in milliseconds before the toast auto-dismisses. Only takes effect when `autoDismiss` is `true`.                             |
| `onDismiss`       | `(() => void)`              | —         | Called after the dismissal animation completes.                                                                                       |
| `fixed`           | `boolean`                   | true      | Pins the toast in a fixed position at the top of the viewport.                                                                        |
| `actionButton`    | `ToastActionButtonProps`    | —         | Optional action button rendered alongside the toast content.                                                                          |

## Props — `ToastActionButtonProps`

| Prop         | Type         | Default | Description                              |
| ------------ | ------------ | ------- | ---------------------------------------- |
| `label` \*   | `string`     | —       | The label of the action button           |
| `onClick` \* | `() => void` | —       | Called when the action button is clicked |

## Props — `ToastProps`

| Prop              | Type                        | Default   | Description                                                                                                                           |
| ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*         | `ToastType`                 | "success" | Visual variant controlling the icon and color treatment.                                                                              |
| `label` \*        | `string \| React.ReactNode` | —         | Main text content of the toast. When `title` is also provided, rendered as a supporting description using a smaller typography style. |
| `title`           | `string \| React.ReactNode` | —         | Optional heading displayed above `label`.                                                                                             |
| `autoDismiss`     | `boolean`                   | —         | When `true`, the toast dismisses itself automatically after `autoDismissTime` milliseconds.                                           |
| `autoDismissTime` | `number`                    | 4000      | Duration in milliseconds before the toast auto-dismisses. Only takes effect when `autoDismiss` is `true`.                             |
| `onDismiss`       | `(() => void)`              | —         | Called after the dismissal animation completes.                                                                                       |
| `fixed`           | `boolean`                   | true      | Pins the toast in a fixed position at the top of the viewport.                                                                        |
| `actionButton`    | `ToastActionButtonProps`    | —         | Optional action button rendered alongside the toast content.                                                                          |

## Props — `ToastActionButtonProps`

| Prop         | Type         | Default | Description                              |
| ------------ | ------------ | ------- | ---------------------------------------- |
| `label` \*   | `string`     | —       | The label of the action button           |
| `onClick` \* | `() => void` | —       | Called when the action button is clicked |

## Props — `ToastProps`

| Prop              | Type                        | Default   | Description                                                                                                                           |
| ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*         | `ToastType`                 | "success" | Visual variant controlling the icon and color treatment.                                                                              |
| `label` \*        | `string \| React.ReactNode` | —         | Main text content of the toast. When `title` is also provided, rendered as a supporting description using a smaller typography style. |
| `title`           | `string \| React.ReactNode` | —         | Optional heading displayed above `label`.                                                                                             |
| `autoDismiss`     | `boolean`                   | —         | When `true`, the toast dismisses itself automatically after `autoDismissTime` milliseconds.                                           |
| `autoDismissTime` | `number`                    | 4000      | Duration in milliseconds before the toast auto-dismisses. Only takes effect when `autoDismiss` is `true`.                             |
| `onDismiss`       | `(() => void)`              | —         | Called after the dismissal animation completes.                                                                                       |
| `fixed`           | `boolean`                   | true      | Pins the toast in a fixed position at the top of the viewport.                                                                        |
| `actionButton`    | `ToastActionButtonProps`    | —         | Optional action button rendered alongside the toast content.                                                                          |

## Props — `ToastActionButtonProps`

| Prop         | Type         | Default | Description                              |
| ------------ | ------------ | ------- | ---------------------------------------- |
| `label` \*   | `string`     | —       | The label of the action button           |
| `onClick` \* | `() => void` | —       | Called when the action button is clicked |

## Props — `ToastProps`

| Prop              | Type                        | Default   | Description                                                                                                                           |
| ----------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*         | `ToastType`                 | "success" | Visual variant controlling the icon and color treatment.                                                                              |
| `label` \*        | `string \| React.ReactNode` | —         | Main text content of the toast. When `title` is also provided, rendered as a supporting description using a smaller typography style. |
| `title`           | `string \| React.ReactNode` | —         | Optional heading displayed above `label`.                                                                                             |
| `autoDismiss`     | `boolean`                   | —         | When `true`, the toast dismisses itself automatically after `autoDismissTime` milliseconds.                                           |
| `autoDismissTime` | `number`                    | 4000      | Duration in milliseconds before the toast auto-dismisses. Only takes effect when `autoDismiss` is `true`.                             |
| `onDismiss`       | `(() => void)`              | —         | Called after the dismissal animation completes.                                                                                       |
| `fixed`           | `boolean`                   | true      | Pins the toast in a fixed position at the top of the viewport.                                                                        |
| `actionButton`    | `ToastActionButtonProps`    | —         | Optional action button rendered alongside the toast content.                                                                          |

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
