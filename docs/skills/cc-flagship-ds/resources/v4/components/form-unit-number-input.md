# Form.UnitNumberInput

> v4 — CSS Modules replace styled-components. See SKILL-v4.md for setup.

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Collecting a Singapore unit number in `#floor-unit` format (e.g. `#01-234`).
-   Any address form that includes a unit number field for Singapore addresses.

## Usage

### Basic controlled usage with validation guard

`onChange` returns a `floor-unit` string (e.g. `"03-12"`) or the sentinel string `"Invalid unit number"` for malformed input. Always check before persisting.

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";

const UnitField = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (val: string) => {
        if (val === "Invalid unit number") {
            setError("Please enter a valid unit number.");
            // Do not persist — keep previous valid value in state
        } else {
            setError("");
            setValue(val); // e.g. "03-12"
        }
    };

    return (
        <Form.UnitNumberInput
            label="Unit number"
            value={value}
            onChange={handleChange}
            errorMessage={error}
        />
    );
};
```

### `onBlur` zero-pads automatically

After the user tabs away, `onBlur` fires with the formatted value. The displayed value may change without any user input — update state accordingly.

```tsx
<Form.UnitNumberInput
    label="Unit number"
    value={value}
    onChange={handleChange}
    onBlur={(formatted) => {
        // e.g. user typed "3-2" → formatted is "03-02"
        setValue(formatted);
    }}
/>
```

### `onChangeRaw` — separate floor and unit

Use `onChangeRaw` when downstream code needs floor and unit as distinct values, regardless of validity.

```tsx
<Form.UnitNumberInput
    label="Unit number"
    onChangeRaw={(parts: string[]) => {
        const [floor, unit] = parts; // e.g. ["03", "12"]
        setFloor(floor);
        setUnit(unit);
    }}
/>
```

Width: defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a CSS Module class:

```tsx
import styles from "./MyForm.module.css";

<Form.UnitNumberInput className={styles.unitNumberInput} ... />
```

```css
/* MyForm.module.css */
:where(body.fds-breakpoint-lg-min) .unitNumberInput {
    max-width: 24rem;
}
```

## Props

| Prop           | Type                        | Default     | Description                                                                                              |
| -------------- | --------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `value`        | `string`                    | —           | Controlled value in `floor-unit` format (e.g. `"00-8888"`)                                               |
| `name`         | `string`                    | —           | Name attribute of the component                                                                          |
| `error`        | `boolean`                   | —           | Sets error display (not needed if `errorMessage` is set)                                                 |
| `id`           | `string`                    | —           | Unique identifier of the component                                                                       |
| `className`    | `string`                    | —           | Class selector of the component                                                                          |
| `style`        | `React.CSSProperties`       | —           | Inline styles for the component                                                                          |
| `role`         | `React.AriaRole`            | —           | ARIA role of the component                                                                               |
| `data-testid`  | `string`                    | —           | Test identifier of the component                                                                         |
| `placeholder`  | `string`                    | `"00-8888"` | Placeholder text; recommended to use `<floor>-<unit>` format                                             |
| `disabled`     | `boolean`                   | —           | Disables the component; entry not allowed                                                                |
| `readOnly`     | `boolean`                   | —           | Read-only state; entry not allowed                                                                       |
| `tabIndex`     | `number`                    | —           | Tab order of the component                                                                               |
| `autoComplete` | `string`                    | —           | `autocomplete` attribute for the input field                                                             |
| `onChange`     | `(value: string) => void`   | —           | Called on value change; returns `floor-unit` string. Returns `"Invalid unit number"` if value is invalid |
| `onChangeRaw`  | `(value: string[]) => void` | —           | Called on value change; returns `[floor, unit]` array regardless of validity                             |
| `onBlur`       | `(value: string) => void`   | —           | Called on defocus; returns formatted `floor-unit` string (e.g. `"11-2"` → `"11-02"`)                     |
| `onBlurRaw`    | `(value: string[]) => void` | —           | Called on defocus; returns `[floor, unit]` array                                                         |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage.
-   Check the return value of `onChange` for `"Invalid unit number"` and handle it before persisting the value.
-   Use `onChangeRaw` if you need floor and unit as separate values for downstream processing.
-   Use `onBlur` to get the zero-padded, formatted value after the user finishes typing.
-   Set `errorMessage` to explain validation failures.
-   `onChange` returns `"Invalid unit number"` for malformed input — check for this string before saving.
-   `onBlur` zero-pads the unit part (e.g. `"11-2"` → `"11-02"`).
-   Use `onChangeRaw` / `onBlurRaw` when you need floor and unit as separate values.

## Anti-patterns

-   Do not use a plain text input for unit numbers — the component enforces the correct format automatically.
-   Do not persist the value returned from `onChange` without first checking it is not `"Invalid unit number"`.
-   Do not use for non-Singapore address formats — the component enforces the `floor-unit` structure.
