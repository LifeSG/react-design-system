# Form.Textarea

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

Use for freeform long-text entry — descriptions, comments, reasons, or any field where users need more than one line. Use `Form.Input` for single-line text.

## Usage

### 1. Basic controlled textarea

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";

const [value, setValue] = useState("");

<Form.Textarea
    label="Description"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Enter a description..."
    rows={4}
/>;
```

### 2. With `maxLength` — auto-renders a character counter

```tsx
<Form.Textarea
    label="Comments"
    maxLength={200}
    value={value}
    onChange={(e) => setValue(e.target.value)}
/>;
{
    /* A counter "0 / 200" appears below automatically — no extra code needed */
}
```

### 3. With `renderCustomCounter`

The prop signature is `(maxLength: number, currentValueLength: number) => JSX.Element`. Note the argument order: `maxLength` first, then `currentValueLength`.

```tsx
<Form.Textarea
    label="Comments"
    maxLength={200}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    renderCustomCounter={(maxLength, currentValueLength) => (
        <span
            style={{
                color: currentValueLength > maxLength * 0.9 ? "red" : "inherit",
            }}
        >
            {currentValueLength} of {maxLength} characters used
        </span>
    )}
/>
```

### 4. With `transformValue`

`transformValue` runs on every input event and replaces the raw value before it is applied. Do not duplicate this logic in `onChange`.

```tsx
<Form.Textarea
    label="Reference code"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    transformValue={(raw) => raw.toUpperCase()}
    maxLength={50}
/>;
{
    /* User types "abc" → stored value becomes "ABC" */
}
```

## Props

### Textarea specific props

| Prop                  | Type                                                             | Default | Description                                              |
| --------------------- | ---------------------------------------------------------------- | ------- | -------------------------------------------------------- |
| `error`               | `boolean`                                                        | —       | Show error styling — not needed if `errorMessage` is set |
| `renderCustomCounter` | `(maxLength: number, currentValueLength: number) => JSX.Element` | —       | Render a custom character counter label                  |
| `transformValue`      | `(value: string) => string`                                      | —       | Transform the value on change before it is applied       |
| `prefix`              | `string`                                                         | —       | Prefix string displayed inside the textarea              |
| `data-testid`         | `string`                                                         | —       | Test identifier for the component                        |

Also inherits all props from `HTMLTextareaElement` — including `rows`, `maxLength`, `placeholder`, `disabled`, `readOnly`, `value`, `onChange`, `resize`.

### Form specific props

| Prop                | Type                          | Default | Description                            |
| ------------------- | ----------------------------- | ------- | -------------------------------------- |
| `label`             | `string` \| `FormLabelProps`  | —       | Field label                            |
| `errorMessage`      | `string` \| `React.ReactNode` | —       | Validation error shown below the field |
| `data-error-testid` | `string`                      | —       | Test identifier for the error message  |

See [Form.Input props](./form-input.md) for `FormLabelProps` and `FormLabelAddonProps` structure.

## Rules

-   Set `rows` to match the expected content length — a short reason field needs fewer rows than a free-text description.
-   Set `resize="none"` when the textarea height is fixed by design to prevent layout disruption.
-   Provide `maxLength` when a character limit must be enforced — the built-in counter appears automatically.
-   Use `renderCustomCounter` only when the default counter format does not meet content requirements.
-   Use `transformValue` for on-the-fly normalisation (e.g. forced capitalisation) — do not replicate this in `onChange`.
-   Provide `errorMessage` rather than `error` alone.
-   Setting native `maxLength` renders a character counter below the textarea automatically.
-   `renderCustomCounter` overrides the default counter UI when `maxLength` is set.
-   `error` is redundant when `errorMessage` is provided.
-   `transformValue` runs on every input event — use for normalisation (e.g. uppercase conversion).

## Anti-patterns

-   Do not use `Form.Textarea` for single-line inputs — use `Form.Input`.
-   Do not implement a manual character counter in consumer code when `maxLength` is set — the built-in counter handles it.
-   Do not set both `error` and `errorMessage`.
