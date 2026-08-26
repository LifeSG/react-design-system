# Form.ESignature

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Forms that legally require a handwritten signature from the user (e.g. consent forms, declarations, agreements).
-   Use `description` to guide the user on how to sign (e.g. "Sign within the box using your mouse or touchscreen").

## Props

| Prop              | Type                              | Default          | Description                                                                            |
| ----------------- | --------------------------------- | ---------------- | -------------------------------------------------------------------------------------- |
| `value`           | `string`                          | —                | Pre-filled signature as a base64-encoded PNG data URL                                  |
| `description`     | `string`                          | —                | Helper text displayed below the signature canvas                                       |
| `disabled`        | `boolean`                         | —                | Disables the signature canvas                                                          |
| `loadingProgress` | `number`                          | —                | Upload progress between 0 and 1; shows a progress indicator                            |
| `loadingLabel`    | `string`                          | `"Uploading..."` | Text above the progress indicator (requires `loadingProgress`)                         |
| `id`              | `string`                          | —                | Unique identifier of the component                                                     |
| `className`       | `string`                          | —                | Class selector of the component                                                        |
| `data-testid`     | `string`                          | —                | Test identifier of the component                                                       |
| `onChange`        | `(value: string \| null) => void` | —                | Called when the signature changes; returns base64 PNG data URL, or `null` when cleared |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

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
