# Timeline

Import: `import { Timeline } from "@lifesg/react-design-system/timeline"`

## When to use

Use to communicate a process, application history, or sequence of steps. Use the `numeric` variant for numbered step-by-step instructions.

## Sub-components

### TimelineItemProps

| Prop       | Type                                                                                                         | Default | Description                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------ |
| `title`    | `string`                                                                                                     | —       | Item title — required                                  |
| `content`  | `JSX.Element`                                                                                                | —       | Item content — required                                |
| `variant`  | `"completed" \| "current" \| "upcoming-active" \| "upcoming-inactive" \| "numeric" \| "error" \| "disabled"` | —       | Visual state of the item indicator                     |
| `statuses` | `PillProps[]`                                                                                                | —       | Status pills shown alongside the item (max 2 rendered) |

## Variants

| `variant`             | Usage                                |
| --------------------- | ------------------------------------ |
| `"completed"`         | Step or event is done                |
| `"current"`           | Step currently in progress           |
| `"upcoming-active"`   | Next actionable step                 |
| `"upcoming-inactive"` | Future step, not yet actionable      |
| `"error"`             | Step has an error                    |
| `"disabled"`          | Step is not available                |
| `"numeric"`           | Numbered step — use for instructions |

## Props

| Prop                         | Type                  | Default | Description                                              |
| ---------------------------- | --------------------- | ------- | -------------------------------------------------------- |
| `items`                      | `TimelineItemProps[]` | —       | Array of timeline items — required                       |
| `title`                      | `string`              | —       | Section title shown above the timeline                   |
| `className`                  | `string`              | —       | Class selector                                           |
| `startCol`                   | `number`              | —       | CSS grid column start (when wrapped in a grid container) |
| `colSpan`                    | `number`              | —       | CSS grid column span (when wrapped in a grid container)  |
| `counterOffset`              | `number`              | `0`     | Starting offset for `numeric` variant indicators         |
| `data-testid`                | `string`              | —       | Test identifier                                          |
| `data-base-indicator-testid` | `string`              | —       | Test identifier for item indicators                      |

## Rules

-   The first item defaults to `variant="current"` and subsequent items default to `variant="upcoming-active"` when `variant` is not specified.
-   Only a maximum of 2 `statuses` pills will render per item regardless of how many are provided.
-   `counterOffset` shifts the numeric counter: if `offset=2`, the first item shows `3`.
-   Always set `headingLevel` when `title` is provided — ensures correct heading hierarchy.
-   Use `counterOffset` when showing a partial sequence (e.g. steps 3–5 of a larger flow).
-   Use `statuses` with `PillProps` — follow Pill color semantics (see `pill.md`).
-   Use `"numeric"` variant consistently across all items in an instruction list — do not mix with status variants.

## Anti-patterns

-   Mixing `"numeric"` and status variants in the same timeline — choose one paradigm per use case.
-   Providing more than 2 status pills per item — only 2 will render.
-   Using Timeline for non-sequential content — use a list or table instead.
