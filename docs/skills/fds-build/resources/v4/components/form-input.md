# Form.Input

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

Use for any single-line text entry inside a form. Always prefer `Form.Input` over the bare `Input` component when a label or error message is required.

## Variants

| `styleType`            | When to use                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `"bordered"` (default) | Standard form fields — provides clear affordance                                            |
| `"no-border"`          | Inline editing or contexts where a surrounding container already provides visual separation |

## Usage

```tsx
import { Form } from "@lifesg/react-design-system/form";

<Form.Input
    label="Full name"
    placeholder="Enter your name"
    value={value}
    onChange={(e) => {}}
/>;
```

## Props

### Input specific props

| Prop          | Type                          | Default      | Description                                                         |
| ------------- | ----------------------------- | ------------ | ------------------------------------------------------------------- |
| `spacing`     | `number`                      | —            | Number of characters before a space is inserted — `type="tel"` only |
| `error`       | `boolean`                     | —            | Show error styling — not needed if `errorMessage` is set            |
| `allowClear`  | `boolean`                     | `false`      | Show clear icon button inside the field                             |
| `onClear`     | `() => void`                  | —            | Called when clear icon is clicked                                   |
| `styleType`   | `"no-border"` \| `"bordered"` | `"bordered"` | Border style variant                                                |
| `data-testid` | `string`                      | —            | Test identifier for the component                                   |

Also inherits all props from `HTMLInputElement`.

### Form specific props

| Prop                | Type                          | Default | Description                            |
| ------------------- | ----------------------------- | ------- | -------------------------------------- |
| `label`             | `string` \| `FormLabelProps`  | —       | Field label                            |
| `errorMessage`      | `string` \| `React.ReactNode` | —       | Validation error shown below the field |
| `data-error-testid` | `string`                      | —       | Test identifier for the error message  |

### FormLabelProps

| Prop       | Type                      | Default | Description                              |
| ---------- | ------------------------- | ------- | ---------------------------------------- |
| `addon`    | `FormLabelAddonProps`     | —       | Tooltip or popover attached to the label |
| `disabled` | `string`                  | —       | Greyed-out label state                   |
| `subtitle` | `string` \| `JSX.Element` | —       | Secondary text beneath the main label    |

### FormLabelAddonProps

| Prop          | Type                       | Default               | Description                                               |
| ------------- | -------------------------- | --------------------- | --------------------------------------------------------- |
| `content`     | `string` \| `JSX.Element`  | —                     | **Required.** Content shown in the tooltip/popover bubble |
| `type`        | `"tooltip"` \| `"popover"` | `"popover"`           | Addon display type                                        |
| `icon`        | `JSX.Element`              | `<ICircleFillIcon />` | Icon used for the addon trigger                           |
| `id`          | `string`                   | —                     | Unique identifier for the addon                           |
| `zIndex`      | `number`                   | —                     | Custom z-index for the popover                            |
| `data-testid` | `string`                   | —                     | Test identifier for the addon                             |

## Rules

-   Set `type="email"` for email fields and `type="tel"` for phone fields — triggers the correct mobile keyboard.
-   Use `readOnly` on review or summary screens — not `disabled`. Disabled implies interaction is unavailable; read-only implies the field is intentionally non-editable in context.
-   Use `allowClear` for optional fields and search-like inputs; pair with `onClear` to reset controlled value.
-   Use `spacing` for formatted `tel` inputs (e.g. `spacing={4}` for `9123 4567`) — do not implement custom character splitting.
-   Provide `errorMessage` rather than `error` alone — the string drives both the visual state and the accessible error text.
-   Use `label` as a plain string for simple labels; use `FormLabelProps` (with `subtitle` or `addon`) only when additional context is needed.
-   `error` is redundant when `errorMessage` is provided — `errorMessage` implies the error state automatically.
-   `spacing` only has effect when `type="tel"`.
-   `styleType="no-border"` removes the visible border — use only in contexts with a background that provides visual separation.

## Anti-patterns

-   Do not use `disabled` on review screens — use `readOnly`.
-   Do not set both `error` and `errorMessage` — `errorMessage` is sufficient.
-   Do not use `spacing` with input types other than `"tel"`.
-   Do not use `styleType="no-border"` in a form context without a containing element that visually distinguishes the field.
