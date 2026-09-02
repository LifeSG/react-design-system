# BoxContainer

Import: `import { BoxContainer } from "@lifesg/react-design-system/box-container"`

## When to use

Use for a single collapsible panel displaying form data or structured content — typically a named section within a form or detail view. Supports an optional header action and a status indicator to flag section-level errors or warnings.

## Sub-components

### BoxContainerSubComponentTestIds

| Prop               | Type     | Description                            |
| ------------------ | -------- | -------------------------------------- |
| `title`            | `string` | Test id for the header title           |
| `displayStateIcon` | `string` | Test id for the display state icon     |
| `handle`           | `string` | Test id for the expand/collapse handle |

## Variants

| `displayState` | When to use                                |
| -------------- | ------------------------------------------ |
| `"default"`    | Normal state — no icon                     |
| `"error"`      | Section has validation errors              |
| `"warning"`    | Section has a warning that needs attention |

## Props — `BoxContainerSubComponentTestIds`

| Prop               | Type     | Default | Description |
| ------------------ | -------- | ------- | ----------- |
| `title`            | `string` | —       | —           |
| `handle`           | `string` | —       | —           |
| `displayStateIcon` | `string` | —       | —           |

## Props — `BoxContainerProps`

| Prop                    | Type                              | Default   | Description                                                                                                                                             |
| ----------------------- | --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*           | `JSX.Element \| JSX.Element[]`    | —         | —                                                                                                                                                       |
| `title` \*              | `string \| JSX.Element`           | —         | —                                                                                                                                                       |
| `collapsible`           | `boolean`                         | true      | When `false`, the container is always expanded and the collapse handle is hidden.                                                                       |
| `expanded`              | `boolean`                         | false     | Initial expanded state when `collapsible` is `true`.                                                                                                    |
| `callToActionComponent` | `JSX.Element`                     | —         | Optional element rendered in the header alongside the title, e.g. a link or button.                                                                     |
| `displayState`          | `BoxContainerDisplayState`        | "default" | Renders an inline alert icon next to the title and announces the state to screen readers. Has no effect when set to `"default"`.                        |
| `className`             | `string`                          | —         | —                                                                                                                                                       |
| `subComponentTestIds`   | `BoxContainerSubComponentTestIds` | —         | —                                                                                                                                                       |
| `id`                    | `string`                          | —         | —                                                                                                                                                       |
| `clickableHeader`       | `boolean`                         | —         | When `true` (and `collapsible` is also `true`), the entire header row becomes a click target for toggling expand/collapse, not just the chevron button. |

## Props — `BoxContainerSubComponentTestIds`

| Prop               | Type     | Default | Description |
| ------------------ | -------- | ------- | ----------- |
| `title`            | `string` | —       | —           |
| `handle`           | `string` | —       | —           |
| `displayStateIcon` | `string` | —       | —           |

## Props — `BoxContainerProps`

| Prop                    | Type                              | Default   | Description                                                                                                                                             |
| ----------------------- | --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*           | `JSX.Element \| JSX.Element[]`    | —         | —                                                                                                                                                       |
| `title` \*              | `string \| JSX.Element`           | —         | —                                                                                                                                                       |
| `collapsible`           | `boolean`                         | true      | When `false`, the container is always expanded and the collapse handle is hidden.                                                                       |
| `expanded`              | `boolean`                         | false     | Initial expanded state when `collapsible` is `true`.                                                                                                    |
| `callToActionComponent` | `JSX.Element`                     | —         | Optional element rendered in the header alongside the title, e.g. a link or button.                                                                     |
| `displayState`          | `BoxContainerDisplayState`        | "default" | Renders an inline alert icon next to the title and announces the state to screen readers. Has no effect when set to `"default"`.                        |
| `className`             | `string`                          | —         | —                                                                                                                                                       |
| `subComponentTestIds`   | `BoxContainerSubComponentTestIds` | —         | —                                                                                                                                                       |
| `id`                    | `string`                          | —         | —                                                                                                                                                       |
| `clickableHeader`       | `boolean`                         | —         | When `true` (and `collapsible` is also `true`), the entire header row becomes a click target for toggling expand/collapse, not just the chevron button. |

## Props — `BoxContainerSubComponentTestIds`

| Prop               | Type     | Default | Description |
| ------------------ | -------- | ------- | ----------- |
| `title`            | `string` | —       | —           |
| `handle`           | `string` | —       | —           |
| `displayStateIcon` | `string` | —       | —           |

## Props — `BoxContainerProps`

| Prop                    | Type                              | Default   | Description                                                                                                                                             |
| ----------------------- | --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*           | `JSX.Element \| JSX.Element[]`    | —         | —                                                                                                                                                       |
| `title` \*              | `string \| JSX.Element`           | —         | —                                                                                                                                                       |
| `collapsible`           | `boolean`                         | true      | When `false`, the container is always expanded and the collapse handle is hidden.                                                                       |
| `expanded`              | `boolean`                         | false     | Initial expanded state when `collapsible` is `true`.                                                                                                    |
| `callToActionComponent` | `JSX.Element`                     | —         | Optional element rendered in the header alongside the title, e.g. a link or button.                                                                     |
| `displayState`          | `BoxContainerDisplayState`        | "default" | Renders an inline alert icon next to the title and announces the state to screen readers. Has no effect when set to `"default"`.                        |
| `className`             | `string`                          | —         | —                                                                                                                                                       |
| `subComponentTestIds`   | `BoxContainerSubComponentTestIds` | —         | —                                                                                                                                                       |
| `id`                    | `string`                          | —         | —                                                                                                                                                       |
| `clickableHeader`       | `boolean`                         | —         | When `true` (and `collapsible` is also `true`), the entire header row becomes a click target for toggling expand/collapse, not just the chevron button. |

## Props — `BoxContainerSubComponentTestIds`

| Prop               | Type     | Default | Description |
| ------------------ | -------- | ------- | ----------- |
| `title`            | `string` | —       | —           |
| `handle`           | `string` | —       | —           |
| `displayStateIcon` | `string` | —       | —           |

## Props — `BoxContainerProps`

| Prop                    | Type                              | Default   | Description                                                                                                                                             |
| ----------------------- | --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*           | `JSX.Element \| JSX.Element[]`    | —         | —                                                                                                                                                       |
| `title` \*              | `string \| JSX.Element`           | —         | —                                                                                                                                                       |
| `collapsible`           | `boolean`                         | true      | When `false`, the container is always expanded and the collapse handle is hidden.                                                                       |
| `expanded`              | `boolean`                         | false     | Initial expanded state when `collapsible` is `true`.                                                                                                    |
| `callToActionComponent` | `JSX.Element`                     | —         | Optional element rendered in the header alongside the title, e.g. a link or button.                                                                     |
| `displayState`          | `BoxContainerDisplayState`        | "default" | Renders an inline alert icon next to the title and announces the state to screen readers. Has no effect when set to `"default"`.                        |
| `className`             | `string`                          | —         | —                                                                                                                                                       |
| `subComponentTestIds`   | `BoxContainerSubComponentTestIds` | —         | —                                                                                                                                                       |
| `id`                    | `string`                          | —         | —                                                                                                                                                       |
| `clickableHeader`       | `boolean`                         | —         | When `true` (and `collapsible` is also `true`), the entire header row becomes a click target for toggling expand/collapse, not just the chevron button. |

## Props — `BoxContainerSubComponentTestIds`

| Prop               | Type     | Default | Description |
| ------------------ | -------- | ------- | ----------- |
| `title`            | `string` | —       | —           |
| `handle`           | `string` | —       | —           |
| `displayStateIcon` | `string` | —       | —           |

## Props — `BoxContainerProps`

| Prop                    | Type                              | Default   | Description                                                                                                                                             |
| ----------------------- | --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*           | `JSX.Element \| JSX.Element[]`    | —         | —                                                                                                                                                       |
| `title` \*              | `string \| JSX.Element`           | —         | —                                                                                                                                                       |
| `collapsible`           | `boolean`                         | true      | When `false`, the container is always expanded and the collapse handle is hidden.                                                                       |
| `expanded`              | `boolean`                         | false     | Initial expanded state when `collapsible` is `true`.                                                                                                    |
| `callToActionComponent` | `JSX.Element`                     | —         | Optional element rendered in the header alongside the title, e.g. a link or button.                                                                     |
| `displayState`          | `BoxContainerDisplayState`        | "default" | Renders an inline alert icon next to the title and announces the state to screen readers. Has no effect when set to `"default"`.                        |
| `className`             | `string`                          | —         | —                                                                                                                                                       |
| `subComponentTestIds`   | `BoxContainerSubComponentTestIds` | —         | —                                                                                                                                                       |
| `id`                    | `string`                          | —         | —                                                                                                                                                       |
| `clickableHeader`       | `boolean`                         | —         | When `true` (and `collapsible` is also `true`), the entire header row becomes a click target for toggling expand/collapse, not just the chevron button. |

## Props — `BoxContainerSubComponentTestIds`

| Prop               | Type     | Default | Description |
| ------------------ | -------- | ------- | ----------- |
| `title`            | `string` | —       | —           |
| `handle`           | `string` | —       | —           |
| `displayStateIcon` | `string` | —       | —           |

## Props — `BoxContainerProps`

| Prop                    | Type                              | Default   | Description                                                                                                                                             |
| ----------------------- | --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*           | `JSX.Element \| JSX.Element[]`    | —         | —                                                                                                                                                       |
| `title` \*              | `string \| JSX.Element`           | —         | —                                                                                                                                                       |
| `collapsible`           | `boolean`                         | true      | When `false`, the container is always expanded and the collapse handle is hidden.                                                                       |
| `expanded`              | `boolean`                         | false     | Initial expanded state when `collapsible` is `true`.                                                                                                    |
| `callToActionComponent` | `JSX.Element`                     | —         | Optional element rendered in the header alongside the title, e.g. a link or button.                                                                     |
| `displayState`          | `BoxContainerDisplayState`        | "default" | Renders an inline alert icon next to the title and announces the state to screen readers. Has no effect when set to `"default"`.                        |
| `className`             | `string`                          | —         | —                                                                                                                                                       |
| `subComponentTestIds`   | `BoxContainerSubComponentTestIds` | —         | —                                                                                                                                                       |
| `id`                    | `string`                          | —         | —                                                                                                                                                       |
| `clickableHeader`       | `boolean`                         | —         | When `true` (and `collapsible` is also `true`), the entire header row becomes a click target for toggling expand/collapse, not just the chevron button. |

## Rules

-   Use `displayState` to indicate section-level status — not as a substitute for inline field errors.
-   Use `callToActionComponent` for section-level actions only — not for form submission buttons.
-   Use `collapsible={false}` when the content must always be visible.
-   Use `clickableHeader` to make the full header row the expand/collapse trigger — improves usability for dense layouts.

## Anti-patterns

-   Using `displayState="error"` instead of inline form field errors — `displayState` signals section-level status only.
-   Using `callToActionComponent` for form submission — use a dedicated submit button outside the container.
-   Nesting BoxContainer inside another BoxContainer.
