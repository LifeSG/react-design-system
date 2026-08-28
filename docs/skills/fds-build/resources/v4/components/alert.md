# Alert

Import: `import { Alert } from "@lifesg/react-design-system/alert"`

## When to use

Use to call out important information within page sections — warnings before a user starts a task, informational notes relevant to a specific section, or non-transient status messages. Not for form validation errors (use form error patterns instead).

## Variants

| `type`          | When to use                                |
| --------------- | ------------------------------------------ |
| `"success"`     | Action completed successfully              |
| `"error"`       | Action failed or system error              |
| `"warning"`     | User should proceed with caution           |
| `"info"`        | Neutral informational message              |
| `"description"` | Descriptive content with no status meaning |

## Usage

```tsx
import { Alert } from "@lifesg/react-design-system/alert";

<Alert type="warning" showIcon role="alert">
    Your session will expire in 5 minutes. Save your work to avoid losing
    progress.
</Alert>;
```

## Props

| Prop                 | Type                                                                   | Default              | Description                                                                |
| -------------------- | ---------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------- |
| `type`               | `"warning"` \| `"error"` \| `"success"` \| `"info"` \| `"description"` | —                    | Style type of the alert — required                                         |
| `sizeType`           | `"default"` \| `"small"`                                               | `"default"`          | Size of the component                                                      |
| `showIcon`           | `boolean`                                                              | `false`              | Show icon matching the alert type                                          |
| `actionLink`         | `HTMLAnchorAttributes`                                                 | —                    | Action link rendered inside the alert                                      |
| `actionLinkIcon`     | `JSX.Element`                                                          | `<ArrowRightIcon />` | Custom icon for the action link                                            |
| `customIcon`         | `JSX.Element`                                                          | —                    | Custom replacement icon for the alert                                      |
| `maxCollapsedHeight` | `number`                                                               | —                    | Maximum visible height of content in px; shows expand toggle when exceeded |

Inherits all `HTMLDivElement` attributes.

## Rules

-   Always use `showIcon` — icons provide immediate visual recognition of alert severity.
-   Use `actionLink` for recoverable errors (retry, undo, view details).
-   Set `role` based on how the alert appears: `"alert"` for dynamic alerts triggered by user action, `"status"` for background status updates, omit for static content visible on page load.
-   Use `maxCollapsedHeight` to avoid long content overwhelming the layout.
-   `role` is not set automatically — set `role="alert"` for dynamic alerts, `role="status"` for background updates, and omit for static content.

## Anti-patterns

-   Using Alert for form field validation errors — use inline form error patterns instead.
-   Omitting `role` on dynamically injected alerts — screen readers will not announce them.
-   Using `type="description"` with `showIcon` — description has no semantic status meaning.
