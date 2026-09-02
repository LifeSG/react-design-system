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

| Prop           | Type                        | Default    | Description                                                                                                                                      |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onClear`      | `() => void`                | —          | Called when the user activates the clear button. Use this to clear the controlled value.                                                         |
| `spacing`      | `number`                    | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                    |
| `allowClear`   | `boolean`                   | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                           |
| `styleType`    | `InputStyleType`            | "bordered" | Visual style variant.                                                                                                                            |
| `label`        | `FormLabelProps \| string`  | —          | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode` | —          | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`     | —          | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                   | —          | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                   | —          | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                   | —          | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                   | —          | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                   | —          | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                   | —          | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                   | —          | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                        | Default    | Description                                                                                                                                      |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onClear`      | `() => void`                | —          | Called when the user activates the clear button. Use this to clear the controlled value.                                                         |
| `spacing`      | `number`                    | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                    |
| `allowClear`   | `boolean`                   | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                           |
| `styleType`    | `InputStyleType`            | "bordered" | Visual style variant.                                                                                                                            |
| `label`        | `FormLabelProps \| string`  | —          | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode` | —          | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`     | —          | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                   | —          | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                   | —          | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                   | —          | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                   | —          | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                   | —          | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                   | —          | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                   | —          | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                        | Default    | Description                                                                                                                                      |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onClear`      | `() => void`                | —          | Called when the user activates the clear button. Use this to clear the controlled value.                                                         |
| `spacing`      | `number`                    | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                    |
| `allowClear`   | `boolean`                   | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                           |
| `styleType`    | `InputStyleType`            | "bordered" | Visual style variant.                                                                                                                            |
| `label`        | `FormLabelProps \| string`  | —          | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode` | —          | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`     | —          | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                   | —          | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                   | —          | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                   | —          | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                   | —          | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                   | —          | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                   | —          | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                   | —          | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                        | Default    | Description                                                                                                                                      |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onClear`      | `() => void`                | —          | Called when the user activates the clear button. Use this to clear the controlled value.                                                         |
| `spacing`      | `number`                    | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                    |
| `allowClear`   | `boolean`                   | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                           |
| `styleType`    | `InputStyleType`            | "bordered" | Visual style variant.                                                                                                                            |
| `label`        | `FormLabelProps \| string`  | —          | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode` | —          | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`     | —          | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                   | —          | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                   | —          | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                   | —          | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                   | —          | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                   | —          | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                   | —          | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                   | —          | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                        | Default    | Description                                                                                                                                      |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onClear`      | `() => void`                | —          | Called when the user activates the clear button. Use this to clear the controlled value.                                                         |
| `spacing`      | `number`                    | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                    |
| `allowClear`   | `boolean`                   | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                           |
| `styleType`    | `InputStyleType`            | "bordered" | Visual style variant.                                                                                                                            |
| `label`        | `FormLabelProps \| string`  | —          | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode` | —          | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`     | —          | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                   | —          | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                   | —          | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                   | —          | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                   | —          | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                   | —          | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                   | —          | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                   | —          | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                        | Default    | Description                                                                                                                                      |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onClear`      | `() => void`                | —          | Called when the user activates the clear button. Use this to clear the controlled value.                                                         |
| `spacing`      | `number`                    | —          | Inserts a space after every `spacing` characters in the displayed value. Only applies when `type` is `"tel"`.                                    |
| `allowClear`   | `boolean`                   | false      | Shows a clear button when the field has a value and is neither disabled nor read-only.                                                           |
| `styleType`    | `InputStyleType`            | "bordered" | Visual style variant.                                                                                                                            |
| `label`        | `FormLabelProps \| string`  | —          | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode` | —          | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`     | —          | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                   | —          | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                   | —          | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                   | —          | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                   | —          | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                   | —          | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                   | —          | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                   | —          | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

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
