# IconButton

> **Not available in v4.** If you are building for v4, do not use this component.

Import: `import { IconButton } from "@lifesg/react-design-system/icon-button"`

## Props

| Prop                    | Type                                      | Default     | Description                          |
| ----------------------- | ----------------------------------------- | ----------- | ------------------------------------ |
| `data-testid`           | `string`                                  | —           | Test identifier of the component     |
| `styleType`             | `"primary"` \| `"secondary"` \| `"light"` | `"primary"` | Visual style of the button           |
| `sizeType`              | `"large"` \| `"default"` \| `"small"`     | `"default"` | Size of the button                   |
| `focusableWhenDisabled` | `boolean`                                 | `false`     | Keeps button focusable when disabled |

Also inherits all props from `HTMLButtonElement` (e.g. `disabled`, `onClick`, `aria-label`, `children`).

## Rules

-   `aria-label` is required on every `IconButton` — icon-only buttons have no visible text for screen readers.
-   Pass the icon component as `children`.

## Anti-patterns

-   Omitting `aria-label` — icon-only buttons are inaccessible without it.
