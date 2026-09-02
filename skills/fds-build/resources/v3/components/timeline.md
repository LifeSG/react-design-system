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

## Props — `TimelineItemProps`

| Prop         | Type                    | Default                                                                      | Description                                                                                                                    |
| ------------ | ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `title` \*   | `string \| JSX.Element` | —                                                                            | Title of the step.                                                                                                             |
| `content` \* | `string \| JSX.Element` | —                                                                            | Body content of the step.                                                                                                      |
| `statuses`   | `PillProps[]`           | —                                                                            | Up to two status `Pill` descriptors rendered below the title. Only the first two entries are displayed when more are provided. |
| `variant`    | `Variant`               | "current" for the first item and "upcoming-active" for all subsequent items. | Visual state of this step.                                                                                                     |

## Props — `TimelineProps`

| Prop                         | Type                  | Default | Description                                                                                         |
| ---------------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `items` \*                   | `TimelineItemProps[]` | —       | Ordered list of steps to render.                                                                    |
| `title`                      | `string`              | —       | Heading text displayed above the step list.                                                         |
| `startCol`                   | `number`              | —       | CSS grid column the timeline wrapper starts on. Useful if component is wrapped in a css grid div.   |
| `colSpan`                    | `number`              | —       | Number of grid columns the timeline wrapper spans. Useful if component is wrapped in a css grid div |
| `headingLevel`               | `number`              | 2       | Heading level assigned to the `title` element. Item titles are rendered at `headingLevel + 1`.      |
| `counterOffset`              | `number`              | 0       | Value added to each step's displayed counter when `variant` is `"numeric"`.                         |
| `className`                  | `string`              | —       | —                                                                                                   |
| `id`                         | `string`              | —       | —                                                                                                   |
| `data-base-indicator-testid` | `string`              | —       | —                                                                                                   |

## Props — `TimelineItemProps`

| Prop         | Type                    | Default                                                                      | Description                                                                                                                    |
| ------------ | ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `title` \*   | `string \| JSX.Element` | —                                                                            | Title of the step.                                                                                                             |
| `content` \* | `string \| JSX.Element` | —                                                                            | Body content of the step.                                                                                                      |
| `statuses`   | `PillProps[]`           | —                                                                            | Up to two status `Pill` descriptors rendered below the title. Only the first two entries are displayed when more are provided. |
| `variant`    | `Variant`               | "current" for the first item and "upcoming-active" for all subsequent items. | Visual state of this step.                                                                                                     |

## Props — `TimelineProps`

| Prop                         | Type                  | Default | Description                                                                                         |
| ---------------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `items` \*                   | `TimelineItemProps[]` | —       | Ordered list of steps to render.                                                                    |
| `title`                      | `string`              | —       | Heading text displayed above the step list.                                                         |
| `startCol`                   | `number`              | —       | CSS grid column the timeline wrapper starts on. Useful if component is wrapped in a css grid div.   |
| `colSpan`                    | `number`              | —       | Number of grid columns the timeline wrapper spans. Useful if component is wrapped in a css grid div |
| `headingLevel`               | `number`              | 2       | Heading level assigned to the `title` element. Item titles are rendered at `headingLevel + 1`.      |
| `counterOffset`              | `number`              | 0       | Value added to each step's displayed counter when `variant` is `"numeric"`.                         |
| `className`                  | `string`              | —       | —                                                                                                   |
| `id`                         | `string`              | —       | —                                                                                                   |
| `data-base-indicator-testid` | `string`              | —       | —                                                                                                   |

## Props — `TimelineItemProps`

| Prop         | Type                    | Default                                                                      | Description                                                                                                                    |
| ------------ | ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `title` \*   | `string \| JSX.Element` | —                                                                            | Title of the step.                                                                                                             |
| `content` \* | `string \| JSX.Element` | —                                                                            | Body content of the step.                                                                                                      |
| `statuses`   | `PillProps[]`           | —                                                                            | Up to two status `Pill` descriptors rendered below the title. Only the first two entries are displayed when more are provided. |
| `variant`    | `Variant`               | "current" for the first item and "upcoming-active" for all subsequent items. | Visual state of this step.                                                                                                     |

## Props — `TimelineProps`

| Prop                         | Type                  | Default | Description                                                                                         |
| ---------------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `items` \*                   | `TimelineItemProps[]` | —       | Ordered list of steps to render.                                                                    |
| `title`                      | `string`              | —       | Heading text displayed above the step list.                                                         |
| `startCol`                   | `number`              | —       | CSS grid column the timeline wrapper starts on. Useful if component is wrapped in a css grid div.   |
| `colSpan`                    | `number`              | —       | Number of grid columns the timeline wrapper spans. Useful if component is wrapped in a css grid div |
| `headingLevel`               | `number`              | 2       | Heading level assigned to the `title` element. Item titles are rendered at `headingLevel + 1`.      |
| `counterOffset`              | `number`              | 0       | Value added to each step's displayed counter when `variant` is `"numeric"`.                         |
| `className`                  | `string`              | —       | —                                                                                                   |
| `id`                         | `string`              | —       | —                                                                                                   |
| `data-base-indicator-testid` | `string`              | —       | —                                                                                                   |

## Props — `TimelineItemProps`

| Prop         | Type                    | Default                                                                      | Description                                                                                                                    |
| ------------ | ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `title` \*   | `string \| JSX.Element` | —                                                                            | Title of the step.                                                                                                             |
| `content` \* | `string \| JSX.Element` | —                                                                            | Body content of the step.                                                                                                      |
| `statuses`   | `PillProps[]`           | —                                                                            | Up to two status `Pill` descriptors rendered below the title. Only the first two entries are displayed when more are provided. |
| `variant`    | `Variant`               | "current" for the first item and "upcoming-active" for all subsequent items. | Visual state of this step.                                                                                                     |

## Props — `TimelineProps`

| Prop                         | Type                  | Default | Description                                                                                         |
| ---------------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `items` \*                   | `TimelineItemProps[]` | —       | Ordered list of steps to render.                                                                    |
| `title`                      | `string`              | —       | Heading text displayed above the step list.                                                         |
| `startCol`                   | `number`              | —       | CSS grid column the timeline wrapper starts on. Useful if component is wrapped in a css grid div.   |
| `colSpan`                    | `number`              | —       | Number of grid columns the timeline wrapper spans. Useful if component is wrapped in a css grid div |
| `headingLevel`               | `number`              | 2       | Heading level assigned to the `title` element. Item titles are rendered at `headingLevel + 1`.      |
| `counterOffset`              | `number`              | 0       | Value added to each step's displayed counter when `variant` is `"numeric"`.                         |
| `className`                  | `string`              | —       | —                                                                                                   |
| `id`                         | `string`              | —       | —                                                                                                   |
| `data-base-indicator-testid` | `string`              | —       | —                                                                                                   |

## Props — `TimelineItemProps`

| Prop         | Type                    | Default                                                                      | Description                                                                                                                    |
| ------------ | ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `title` \*   | `string \| JSX.Element` | —                                                                            | Title of the step.                                                                                                             |
| `content` \* | `string \| JSX.Element` | —                                                                            | Body content of the step.                                                                                                      |
| `statuses`   | `PillProps[]`           | —                                                                            | Up to two status `Pill` descriptors rendered below the title. Only the first two entries are displayed when more are provided. |
| `variant`    | `Variant`               | "current" for the first item and "upcoming-active" for all subsequent items. | Visual state of this step.                                                                                                     |

## Props — `TimelineProps`

| Prop                         | Type                  | Default | Description                                                                                         |
| ---------------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `items` \*                   | `TimelineItemProps[]` | —       | Ordered list of steps to render.                                                                    |
| `title`                      | `string`              | —       | Heading text displayed above the step list.                                                         |
| `startCol`                   | `number`              | —       | CSS grid column the timeline wrapper starts on. Useful if component is wrapped in a css grid div.   |
| `colSpan`                    | `number`              | —       | Number of grid columns the timeline wrapper spans. Useful if component is wrapped in a css grid div |
| `headingLevel`               | `number`              | 2       | Heading level assigned to the `title` element. Item titles are rendered at `headingLevel + 1`.      |
| `counterOffset`              | `number`              | 0       | Value added to each step's displayed counter when `variant` is `"numeric"`.                         |
| `className`                  | `string`              | —       | —                                                                                                   |
| `id`                         | `string`              | —       | —                                                                                                   |
| `data-base-indicator-testid` | `string`              | —       | —                                                                                                   |

## Props — `TimelineItemProps`

| Prop         | Type                    | Default                                                                      | Description                                                                                                                    |
| ------------ | ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `title` \*   | `string \| JSX.Element` | —                                                                            | Title of the step.                                                                                                             |
| `content` \* | `string \| JSX.Element` | —                                                                            | Body content of the step.                                                                                                      |
| `statuses`   | `PillProps[]`           | —                                                                            | Up to two status `Pill` descriptors rendered below the title. Only the first two entries are displayed when more are provided. |
| `variant`    | `Variant`               | "current" for the first item and "upcoming-active" for all subsequent items. | Visual state of this step.                                                                                                     |

## Props — `TimelineProps`

| Prop                         | Type                  | Default | Description                                                                                         |
| ---------------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `items` \*                   | `TimelineItemProps[]` | —       | Ordered list of steps to render.                                                                    |
| `title`                      | `string`              | —       | Heading text displayed above the step list.                                                         |
| `startCol`                   | `number`              | —       | CSS grid column the timeline wrapper starts on. Useful if component is wrapped in a css grid div.   |
| `colSpan`                    | `number`              | —       | Number of grid columns the timeline wrapper spans. Useful if component is wrapped in a css grid div |
| `headingLevel`               | `number`              | 2       | Heading level assigned to the `title` element. Item titles are rendered at `headingLevel + 1`.      |
| `counterOffset`              | `number`              | 0       | Value added to each step's displayed counter when `variant` is `"numeric"`.                         |
| `className`                  | `string`              | —       | —                                                                                                   |
| `id`                         | `string`              | —       | —                                                                                                   |
| `data-base-indicator-testid` | `string`              | —       | —                                                                                                   |

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
