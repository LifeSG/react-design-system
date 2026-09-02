# IconButton

> **Not available in v4.** If you are building for v4, do not use this component.

Import: `import { IconButton } from "@lifesg/react-design-system/icon-button"`

## Rules

-   `aria-label` is required on every `IconButton` — icon-only buttons have no visible text for screen readers.
-   Pass the icon component as `children`.

## Anti-patterns

-   Omitting `aria-label` — icon-only buttons are inaccessible without it.
