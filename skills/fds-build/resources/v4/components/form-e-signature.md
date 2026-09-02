# Form.ESignature

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Forms that legally require a handwritten signature from the user (e.g. consent forms, declarations, agreements).
-   Use `description` to guide the user on how to sign (e.g. "Sign within the box using your mouse or touchscreen").

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

## Props

| Prop              | Type                                | Default        | Description                                                                                                                                      |
| ----------------- | ----------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`       | `string`                            | —              | —                                                                                                                                                |
| `id`              | `string`                            | —              | —                                                                                                                                                |
| `disabled`        | `boolean`                           | —              | —                                                                                                                                                |
| `description`     | `string`                            | —              | Text rendered below the signature area.                                                                                                          |
| `loadingLabel`    | `string`                            | "Uploading..." | Label displayed alongside the upload progress bar.                                                                                               |
| `loadingProgress` | `number`                            | —              | When set to a number, replaces the signature area with an upload progress indicator. Remove or set to `undefined` to restore the signature area. |
| `value`           | `string`                            | —              | The current signature as a base64 image dataURL. Pass `undefined` or omit to render the empty "Add signature" state.                             |
| `onChange`        | `((value: string \| null) => void)` | —              | Called when the user saves a signature.                                                                                                          |
| `label`           | `FormLabelProps \| string`          | —              | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`    | `string \| React.ReactNode`         | —              | Inline error text rendered below the input.                                                                                                      |
| `layoutType`      | `FormElementLayoutType`             | —              | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`         | `ColSpan`                           | —              | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`          | `ColSpan`                           | —              | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`          | `ColSpan`                           | —              | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`          | `ColSpan`                           | —              | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`          | `ColSpan`                           | —              | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`          | `ColSpan`                           | —              | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`         | `ColSpan`                           | —              | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop              | Type                                | Default        | Description                                                                                                                                      |
| ----------------- | ----------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`       | `string`                            | —              | —                                                                                                                                                |
| `id`              | `string`                            | —              | —                                                                                                                                                |
| `disabled`        | `boolean`                           | —              | —                                                                                                                                                |
| `description`     | `string`                            | —              | Text rendered below the signature area.                                                                                                          |
| `loadingLabel`    | `string`                            | "Uploading..." | Label displayed alongside the upload progress bar.                                                                                               |
| `loadingProgress` | `number`                            | —              | When set to a number, replaces the signature area with an upload progress indicator. Remove or set to `undefined` to restore the signature area. |
| `value`           | `string`                            | —              | The current signature as a base64 image dataURL. Pass `undefined` or omit to render the empty "Add signature" state.                             |
| `onChange`        | `((value: string \| null) => void)` | —              | Called when the user saves a signature.                                                                                                          |
| `label`           | `FormLabelProps \| string`          | —              | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`    | `string \| React.ReactNode`         | —              | Inline error text rendered below the input.                                                                                                      |
| `layoutType`      | `FormElementLayoutType`             | —              | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`         | `ColSpan`                           | —              | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`          | `ColSpan`                           | —              | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`          | `ColSpan`                           | —              | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`          | `ColSpan`                           | —              | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`          | `ColSpan`                           | —              | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`          | `ColSpan`                           | —              | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`         | `ColSpan`                           | —              | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop              | Type                                | Default        | Description                                                                                                                                      |
| ----------------- | ----------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`       | `string`                            | —              | —                                                                                                                                                |
| `id`              | `string`                            | —              | —                                                                                                                                                |
| `disabled`        | `boolean`                           | —              | —                                                                                                                                                |
| `description`     | `string`                            | —              | Text rendered below the signature area.                                                                                                          |
| `loadingLabel`    | `string`                            | "Uploading..." | Label displayed alongside the upload progress bar.                                                                                               |
| `loadingProgress` | `number`                            | —              | When set to a number, replaces the signature area with an upload progress indicator. Remove or set to `undefined` to restore the signature area. |
| `value`           | `string`                            | —              | The current signature as a base64 image dataURL. Pass `undefined` or omit to render the empty "Add signature" state.                             |
| `onChange`        | `((value: string \| null) => void)` | —              | Called when the user saves a signature.                                                                                                          |
| `label`           | `FormLabelProps \| string`          | —              | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`    | `string \| React.ReactNode`         | —              | Inline error text rendered below the input.                                                                                                      |
| `layoutType`      | `FormElementLayoutType`             | —              | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`         | `ColSpan`                           | —              | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`          | `ColSpan`                           | —              | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`          | `ColSpan`                           | —              | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`          | `ColSpan`                           | —              | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`          | `ColSpan`                           | —              | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`          | `ColSpan`                           | —              | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`         | `ColSpan`                           | —              | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop              | Type                                | Default        | Description                                                                                                                                      |
| ----------------- | ----------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`       | `string`                            | —              | —                                                                                                                                                |
| `id`              | `string`                            | —              | —                                                                                                                                                |
| `disabled`        | `boolean`                           | —              | —                                                                                                                                                |
| `description`     | `string`                            | —              | Text rendered below the signature area.                                                                                                          |
| `loadingLabel`    | `string`                            | "Uploading..." | Label displayed alongside the upload progress bar.                                                                                               |
| `loadingProgress` | `number`                            | —              | When set to a number, replaces the signature area with an upload progress indicator. Remove or set to `undefined` to restore the signature area. |
| `value`           | `string`                            | —              | The current signature as a base64 image dataURL. Pass `undefined` or omit to render the empty "Add signature" state.                             |
| `onChange`        | `((value: string \| null) => void)` | —              | Called when the user saves a signature.                                                                                                          |
| `label`           | `FormLabelProps \| string`          | —              | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`    | `string \| React.ReactNode`         | —              | Inline error text rendered below the input.                                                                                                      |
| `layoutType`      | `FormElementLayoutType`             | —              | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`         | `ColSpan`                           | —              | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`          | `ColSpan`                           | —              | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`          | `ColSpan`                           | —              | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`          | `ColSpan`                           | —              | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`          | `ColSpan`                           | —              | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`          | `ColSpan`                           | —              | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`         | `ColSpan`                           | —              | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop              | Type                                | Default        | Description                                                                                                                                      |
| ----------------- | ----------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`       | `string`                            | —              | —                                                                                                                                                |
| `id`              | `string`                            | —              | —                                                                                                                                                |
| `disabled`        | `boolean`                           | —              | —                                                                                                                                                |
| `description`     | `string`                            | —              | Text rendered below the signature area.                                                                                                          |
| `loadingLabel`    | `string`                            | "Uploading..." | Label displayed alongside the upload progress bar.                                                                                               |
| `loadingProgress` | `number`                            | —              | When set to a number, replaces the signature area with an upload progress indicator. Remove or set to `undefined` to restore the signature area. |
| `value`           | `string`                            | —              | The current signature as a base64 image dataURL. Pass `undefined` or omit to render the empty "Add signature" state.                             |
| `onChange`        | `((value: string \| null) => void)` | —              | Called when the user saves a signature.                                                                                                          |
| `label`           | `FormLabelProps \| string`          | —              | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`    | `string \| React.ReactNode`         | —              | Inline error text rendered below the input.                                                                                                      |
| `layoutType`      | `FormElementLayoutType`             | —              | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`         | `ColSpan`                           | —              | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`          | `ColSpan`                           | —              | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`          | `ColSpan`                           | —              | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`          | `ColSpan`                           | —              | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`          | `ColSpan`                           | —              | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`          | `ColSpan`                           | —              | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`         | `ColSpan`                           | —              | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop              | Type                                | Default        | Description                                                                                                                                      |
| ----------------- | ----------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`       | `string`                            | —              | —                                                                                                                                                |
| `id`              | `string`                            | —              | —                                                                                                                                                |
| `disabled`        | `boolean`                           | —              | —                                                                                                                                                |
| `description`     | `string`                            | —              | Text rendered below the signature area.                                                                                                          |
| `loadingLabel`    | `string`                            | "Uploading..." | Label displayed alongside the upload progress bar.                                                                                               |
| `loadingProgress` | `number`                            | —              | When set to a number, replaces the signature area with an upload progress indicator. Remove or set to `undefined` to restore the signature area. |
| `value`           | `string`                            | —              | The current signature as a base64 image dataURL. Pass `undefined` or omit to render the empty "Add signature" state.                             |
| `onChange`        | `((value: string \| null) => void)` | —              | Called when the user saves a signature.                                                                                                          |
| `label`           | `FormLabelProps \| string`          | —              | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage`    | `string \| React.ReactNode`         | —              | Inline error text rendered below the input.                                                                                                      |
| `layoutType`      | `FormElementLayoutType`             | —              | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`         | `ColSpan`                           | —              | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`          | `ColSpan`                           | —              | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`          | `ColSpan`                           | —              | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`          | `ColSpan`                           | —              | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`          | `ColSpan`                           | —              | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`          | `ColSpan`                           | —              | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`         | `ColSpan`                           | —              | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage; the value is a base64-encoded PNG string.
-   Use `loadingProgress` and `loadingLabel` to indicate server upload progress after the signature is submitted.
-   Set `errorMessage` when signature validation fails (e.g. canvas is empty on submit).
-   Use `disabled` when the signature field should be locked (e.g. after submission or in a locked step).
-   `value` and the `onChange` return value are both base64-encoded PNG strings.
-   `loadingProgress` and `loadingLabel` are used to show upload progress after the signature is captured.

## Anti-patterns

-   Do not use for typed signatures or checkbox confirmations — this component is for handwritten drawing input only.
-   Do not store the raw base64 string in a URL parameter or cookie — it is large; use server-side storage.
-   Do not omit `description` — users need guidance on where and how to draw their signature.
