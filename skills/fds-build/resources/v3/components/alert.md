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

| Prop                 | Type                                            | Default            | Description                                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `AlertType`                                     | —                  | Visual severity or purpose of the alert banner.                                                                                                                                                                                             |
| `actionLink`         | `React.AnchorHTMLAttributes<HTMLAnchorElement>` | —                  | Anchor attributes for an optional call-to-action link rendered below the alert content. The link is styled with a trailing arrow icon by default; supply `actionLinkIcon` to replace that icon.                                             |
| `showIcon`           | `boolean`                                       | false              | Renders the type-specific icon to the left of the content.                                                                                                                                                                                  |
| `actionLinkIcon`     | `JSX.Element`                                   | <ArrowRightIcon /> | Replaces the default trailing arrow on the action link. Only visible when `actionLink` is also provided.                                                                                                                                    |
| `sizeType`           | `AlertSizeType`                                 | —                  | Controls the overall size of the alert, affecting typography and icon dimensions.                                                                                                                                                           |
| `customIcon`         | `JSX.Element`                                   | —                  | Replaces the default type-specific icon. Only visible when `showIcon` is `true`.                                                                                                                                                            |
| `maxCollapsedHeight` | `number`                                        | —                  | Maximum height in pixels before the content area is collapsed. When the rendered content exceeds this value a "Show more / Show less" toggle is displayed. The content container is marked as inert whenever the collapsed state is active. |

## Props

| Prop                 | Type                                            | Default            | Description                                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `AlertType`                                     | —                  | Visual severity or purpose of the alert banner.                                                                                                                                                                                             |
| `actionLink`         | `React.AnchorHTMLAttributes<HTMLAnchorElement>` | —                  | Anchor attributes for an optional call-to-action link rendered below the alert content. The link is styled with a trailing arrow icon by default; supply `actionLinkIcon` to replace that icon.                                             |
| `showIcon`           | `boolean`                                       | false              | Renders the type-specific icon to the left of the content.                                                                                                                                                                                  |
| `actionLinkIcon`     | `JSX.Element`                                   | <ArrowRightIcon /> | Replaces the default trailing arrow on the action link. Only visible when `actionLink` is also provided.                                                                                                                                    |
| `sizeType`           | `AlertSizeType`                                 | —                  | Controls the overall size of the alert, affecting typography and icon dimensions.                                                                                                                                                           |
| `customIcon`         | `JSX.Element`                                   | —                  | Replaces the default type-specific icon. Only visible when `showIcon` is `true`.                                                                                                                                                            |
| `maxCollapsedHeight` | `number`                                        | —                  | Maximum height in pixels before the content area is collapsed. When the rendered content exceeds this value a "Show more / Show less" toggle is displayed. The content container is marked as inert whenever the collapsed state is active. |

## Props — `AlertProps`

| Prop                 | Type                                            | Default            | Description                                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `AlertType`                                     | —                  | Visual severity or purpose of the alert banner.                                                                                                                                                                                             |
| `actionLink`         | `React.AnchorHTMLAttributes<HTMLAnchorElement>` | —                  | Anchor attributes for an optional call-to-action link rendered below the alert content. The link is styled with a trailing arrow icon by default; supply `actionLinkIcon` to replace that icon.                                             |
| `showIcon`           | `boolean`                                       | false              | Renders the type-specific icon to the left of the content.                                                                                                                                                                                  |
| `actionLinkIcon`     | `JSX.Element`                                   | <ArrowRightIcon /> | Replaces the default trailing arrow on the action link. Only visible when `actionLink` is also provided.                                                                                                                                    |
| `sizeType`           | `AlertSizeType`                                 | —                  | Controls the overall size of the alert, affecting typography and icon dimensions.                                                                                                                                                           |
| `customIcon`         | `JSX.Element`                                   | —                  | Replaces the default type-specific icon. Only visible when `showIcon` is `true`.                                                                                                                                                            |
| `maxCollapsedHeight` | `number`                                        | —                  | Maximum height in pixels before the content area is collapsed. When the rendered content exceeds this value a "Show more / Show less" toggle is displayed. The content container is marked as inert whenever the collapsed state is active. |

## Props — `AlertProps`

| Prop                 | Type                                            | Default            | Description                                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `AlertType`                                     | —                  | Visual severity or purpose of the alert banner.                                                                                                                                                                                             |
| `actionLink`         | `React.AnchorHTMLAttributes<HTMLAnchorElement>` | —                  | Anchor attributes for an optional call-to-action link rendered below the alert content. The link is styled with a trailing arrow icon by default; supply `actionLinkIcon` to replace that icon.                                             |
| `showIcon`           | `boolean`                                       | false              | Renders the type-specific icon to the left of the content.                                                                                                                                                                                  |
| `actionLinkIcon`     | `JSX.Element`                                   | <ArrowRightIcon /> | Replaces the default trailing arrow on the action link. Only visible when `actionLink` is also provided.                                                                                                                                    |
| `sizeType`           | `AlertSizeType`                                 | —                  | Controls the overall size of the alert, affecting typography and icon dimensions.                                                                                                                                                           |
| `customIcon`         | `JSX.Element`                                   | —                  | Replaces the default type-specific icon. Only visible when `showIcon` is `true`.                                                                                                                                                            |
| `maxCollapsedHeight` | `number`                                        | —                  | Maximum height in pixels before the content area is collapsed. When the rendered content exceeds this value a "Show more / Show less" toggle is displayed. The content container is marked as inert whenever the collapsed state is active. |

## Props — `AlertProps`

| Prop                 | Type                                            | Default            | Description                                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `AlertType`                                     | —                  | Visual severity or purpose of the alert banner.                                                                                                                                                                                             |
| `actionLink`         | `React.AnchorHTMLAttributes<HTMLAnchorElement>` | —                  | Anchor attributes for an optional call-to-action link rendered below the alert content. The link is styled with a trailing arrow icon by default; supply `actionLinkIcon` to replace that icon.                                             |
| `showIcon`           | `boolean`                                       | false              | Renders the type-specific icon to the left of the content.                                                                                                                                                                                  |
| `actionLinkIcon`     | `JSX.Element`                                   | <ArrowRightIcon /> | Replaces the default trailing arrow on the action link. Only visible when `actionLink` is also provided.                                                                                                                                    |
| `sizeType`           | `AlertSizeType`                                 | —                  | Controls the overall size of the alert, affecting typography and icon dimensions.                                                                                                                                                           |
| `customIcon`         | `JSX.Element`                                   | —                  | Replaces the default type-specific icon. Only visible when `showIcon` is `true`.                                                                                                                                                            |
| `maxCollapsedHeight` | `number`                                        | —                  | Maximum height in pixels before the content area is collapsed. When the rendered content exceeds this value a "Show more / Show less" toggle is displayed. The content container is marked as inert whenever the collapsed state is active. |

## Props — `AlertProps`

| Prop                 | Type                                            | Default            | Description                                                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `AlertType`                                     | —                  | Visual severity or purpose of the alert banner.                                                                                                                                                                                             |
| `actionLink`         | `React.AnchorHTMLAttributes<HTMLAnchorElement>` | —                  | Anchor attributes for an optional call-to-action link rendered below the alert content. The link is styled with a trailing arrow icon by default; supply `actionLinkIcon` to replace that icon.                                             |
| `showIcon`           | `boolean`                                       | false              | Renders the type-specific icon to the left of the content.                                                                                                                                                                                  |
| `actionLinkIcon`     | `JSX.Element`                                   | <ArrowRightIcon /> | Replaces the default trailing arrow on the action link. Only visible when `actionLink` is also provided.                                                                                                                                    |
| `sizeType`           | `AlertSizeType`                                 | —                  | Controls the overall size of the alert, affecting typography and icon dimensions.                                                                                                                                                           |
| `customIcon`         | `JSX.Element`                                   | —                  | Replaces the default type-specific icon. Only visible when `showIcon` is `true`.                                                                                                                                                            |
| `maxCollapsedHeight` | `number`                                        | —                  | Maximum height in pixels before the content area is collapsed. When the rendered content exceeds this value a "Show more / Show less" toggle is displayed. The content container is marked as inert whenever the collapsed state is active. |

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
