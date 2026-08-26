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

| Prop          | Type                          | Default      | Description                                                         |
| ------------- | ----------------------------- | ------------ | ------------------------------------------------------------------- |
| `spacing`     | `number`                      | —            | Number of characters before a space is inserted — `type="tel"` only |
| `error`       | `boolean`                     | —            | Show error state styling                                            |
| `allowClear`  | `boolean`                     | `false`      | Show clear icon button inside the field                             |
| `onClear`     | `() => void`                  | —            | Called when clear icon is clicked                                   |
| `styleType`   | `"no-border"` \| `"bordered"` | `"bordered"` | Border style variant                                                |
| `data-testid` | `string`                      | —            | Test identifier for the component                                   |

Also inherits all props from `HTMLInputElement` — including `type`, `value`, `onChange`, `placeholder`, `disabled`, `readOnly`, `maxLength`, etc.

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
