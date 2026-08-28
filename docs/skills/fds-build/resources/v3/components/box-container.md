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

## Props

| Prop                    | Type                                    | Default     | Description                                                       |
| ----------------------- | --------------------------------------- | ----------- | ----------------------------------------------------------------- |
| `title`                 | `string` \| `JSX.Element`               | —           | Header title — required                                           |
| `children`              | `JSX.Element` \| `JSX.Element[]`        | —           | Panel content — required                                          |
| `collapsible`           | `boolean`                               | `true`      | Allow the panel to be collapsed                                   |
| `expanded`              | `boolean`                               | `false`     | Controlled expand state (only valid when `collapsible` is `true`) |
| `displayState`          | `"default"` \| `"error"` \| `"warning"` | `"default"` | Icon shown alongside title to indicate status                     |
| `callToActionComponent` | `JSX.Element`                           | —           | Custom action rendered in the header                              |
| `clickableHeader`       | `boolean`                               | —           | Make the entire header clickable to toggle expand/collapse        |
| `subComponentTestIds`   | `BoxContainerSubComponentTestIds`       | —           | Test ids for sub-elements                                         |
| `id`                    | `string`                                | —           | Unique id of the component                                        |
| `className`             | `string`                                | —           | Class selector                                                    |
| `data-testid`           | `string`                                | —           | Test identifier                                                   |

## Rules

-   Use `displayState` to indicate section-level status — not as a substitute for inline field errors.
-   Use `callToActionComponent` for section-level actions only — not for form submission buttons.
-   Use `collapsible={false}` when the content must always be visible.
-   Use `clickableHeader` to make the full header row the expand/collapse trigger — improves usability for dense layouts.

## Anti-patterns

-   Using `displayState="error"` instead of inline form field errors — `displayState` signals section-level status only.
-   Using `callToActionComponent` for form submission — use a dedicated submit button outside the container.
-   Nesting BoxContainer inside another BoxContainer.
