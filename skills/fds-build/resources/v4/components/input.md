# Input

Import: `import { Input } from "@lifesg/react-design-system/input"`

## When to use

Use `Input` for standalone inputs that do not need a label or error message — search bars, inline editing, filter fields, or composition contexts where the form layout is provided externally. For all labelled form fields with validation messages, use `Form.Input` instead.

## Variants

| `styleType`            | When to use                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `"bordered"` (default) | Standard standalone input — provides clear affordance                                                            |
| `"no-border"`          | Inline editing or search bars embedded in headers/toolbars where a border would conflict with the surrounding UI |

## Props

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `error`      | `boolean`        | —          | Marks the input wrapper in an error state.                                                                    |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `error`      | `boolean`        | —          | Marks the input wrapper in an error state.                                                                    |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `error`      | `boolean`        | —          | Marks the input wrapper in an error state.                                                                    |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputPartialProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `error`      | `boolean`        | —          | Marks the input wrapper in an error state.                                                                    |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputPartialProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `error`      | `boolean`        | —          | Marks the input wrapper in an error state.                                                                    |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputPartialProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `error`      | `boolean`        | —          | Marks the input wrapper in an error state.                                                                    |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Props — `InputPartialProps`

| Prop         | Type             | Default    | Description                                                                                                   |
| ------------ | ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `onClear`    | `() => void`     | —          | Called when the user activates the clear button. Use this to clear the controlled value.                      |
| `spacing`    | `number`         | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`. |
| `allowClear` | `boolean`        | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                        |
| `styleType`  | `InputStyleType` | "bordered" | Visual style variant.                                                                                         |

## Rules

-   Use `type="email"` for email fields and `type="tel"` for phone fields — triggers the correct mobile keyboard.
-   Use `spacing` for formatted `tel` inputs (e.g. `spacing={4}` for `9123 4567`) — do not implement custom character splitting.
-   Use `allowClear` for search inputs and optional fields; pair with `onClear` to reset the controlled value.
-   Set `error={true}` to communicate an invalid state visually — provide a separate error message element in the surrounding layout.
-   Use `styleType="no-border"` only when the surrounding container or background provides sufficient visual separation.
-   `Input` is the bare input field with no label or error message wrapper. Use `Form.Input` when a label or validation message is needed.
-   `spacing` only has effect when `type="tel"`.
-   `styleType="no-border"` removes the visible border — use only when the surrounding context provides sufficient visual distinction.
-   `error` drives error-state styling only; there is no built-in error message — pair with external error text if needed.

## Anti-patterns

-   Do not use `Input` inside a form that needs labels or validation messages — use `Form.Input`.
-   Do not use `spacing` with input types other than `"tel"`.
-   Do not rely on `Input` alone to surface error messages — it has no built-in error text slot.
