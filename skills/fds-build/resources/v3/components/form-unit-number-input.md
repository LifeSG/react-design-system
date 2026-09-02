# Form.UnitNumberInput

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

Width: defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a styled wrapper:

```tsx
const StyledUnitNumberInput = styled(Form.UnitNumberInput)`
    ${MediaQuery.MinWidth.lg} {
        max-width: 24rem;
    }
`;
```

## Props

| Prop           | Type                          | Default   | Description                                                                                                                                      |
| -------------- | ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`    | `string`                      | —         | —                                                                                                                                                |
| `id`           | `string`                      | —         | —                                                                                                                                                |
| `style`        | `React.CSSProperties`         | —         | —                                                                                                                                                |
| `tabIndex`     | `number`                      | —         | —                                                                                                                                                |
| `readOnly`     | `boolean`                     | —         | —                                                                                                                                                |
| `placeholder`  | `string`                      | "00-8888" | Placeholder text in `"floor-unit"` format.                                                                                                       |
| `role`         | `React.AriaRole`              | —         | —                                                                                                                                                |
| `value`        | `string`                      | —         | The combined unit number value in `"floor-unit"` format (e.g. `"01-234"`).                                                                       |
| `name`         | `string`                      | —         | —                                                                                                                                                |
| `error`        | `boolean`                     | —         | Renders the input in an error state.                                                                                                             |
| `disabled`     | `boolean`                     | —         | —                                                                                                                                                |
| `autoComplete` | `string`                      | —         | —                                                                                                                                                |
| `onChange`     | `((value: string) => void)`   | —         | Called when the value of either sub-input changes.                                                                                               |
| `onChangeRaw`  | `((value: string[]) => void)` | —         | Called when either sub-input changes.                                                                                                            |
| `onBlur`       | `((value: string) => void)`   | —         | Called when focus leaves the component entirely.                                                                                                 |
| `onBlurRaw`    | `((value: string[]) => void)` | —         | Called when focus leaves the component.                                                                                                          |
| `label`        | `FormLabelProps \| string`    | —         | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode`   | —         | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`       | —         | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                     | —         | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                     | —         | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                     | —         | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                     | —         | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                     | —         | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                     | —         | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                     | —         | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                          | Default   | Description                                                                                                                                      |
| -------------- | ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`    | `string`                      | —         | —                                                                                                                                                |
| `id`           | `string`                      | —         | —                                                                                                                                                |
| `style`        | `React.CSSProperties`         | —         | —                                                                                                                                                |
| `tabIndex`     | `number`                      | —         | —                                                                                                                                                |
| `readOnly`     | `boolean`                     | —         | —                                                                                                                                                |
| `placeholder`  | `string`                      | "00-8888" | Placeholder text in `"floor-unit"` format.                                                                                                       |
| `role`         | `React.AriaRole`              | —         | —                                                                                                                                                |
| `value`        | `string`                      | —         | The combined unit number value in `"floor-unit"` format (e.g. `"01-234"`).                                                                       |
| `name`         | `string`                      | —         | —                                                                                                                                                |
| `error`        | `boolean`                     | —         | Renders the input in an error state.                                                                                                             |
| `disabled`     | `boolean`                     | —         | —                                                                                                                                                |
| `autoComplete` | `string`                      | —         | —                                                                                                                                                |
| `onChange`     | `((value: string) => void)`   | —         | Called when the value of either sub-input changes.                                                                                               |
| `onChangeRaw`  | `((value: string[]) => void)` | —         | Called when either sub-input changes.                                                                                                            |
| `onBlur`       | `((value: string) => void)`   | —         | Called when focus leaves the component entirely.                                                                                                 |
| `onBlurRaw`    | `((value: string[]) => void)` | —         | Called when focus leaves the component.                                                                                                          |
| `label`        | `FormLabelProps \| string`    | —         | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode`   | —         | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`       | —         | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                     | —         | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                     | —         | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                     | —         | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                     | —         | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                     | —         | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                     | —         | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                     | —         | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                          | Default   | Description                                                                                                                                      |
| -------------- | ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`    | `string`                      | —         | —                                                                                                                                                |
| `id`           | `string`                      | —         | —                                                                                                                                                |
| `style`        | `React.CSSProperties`         | —         | —                                                                                                                                                |
| `tabIndex`     | `number`                      | —         | —                                                                                                                                                |
| `readOnly`     | `boolean`                     | —         | —                                                                                                                                                |
| `placeholder`  | `string`                      | "00-8888" | Placeholder text in `"floor-unit"` format.                                                                                                       |
| `role`         | `React.AriaRole`              | —         | —                                                                                                                                                |
| `value`        | `string`                      | —         | The combined unit number value in `"floor-unit"` format (e.g. `"01-234"`).                                                                       |
| `name`         | `string`                      | —         | —                                                                                                                                                |
| `error`        | `boolean`                     | —         | Renders the input in an error state.                                                                                                             |
| `disabled`     | `boolean`                     | —         | —                                                                                                                                                |
| `autoComplete` | `string`                      | —         | —                                                                                                                                                |
| `onChange`     | `((value: string) => void)`   | —         | Called when the value of either sub-input changes.                                                                                               |
| `onChangeRaw`  | `((value: string[]) => void)` | —         | Called when either sub-input changes.                                                                                                            |
| `onBlur`       | `((value: string) => void)`   | —         | Called when focus leaves the component entirely.                                                                                                 |
| `onBlurRaw`    | `((value: string[]) => void)` | —         | Called when focus leaves the component.                                                                                                          |
| `label`        | `FormLabelProps \| string`    | —         | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode`   | —         | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`       | —         | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                     | —         | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                     | —         | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                     | —         | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                     | —         | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                     | —         | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                     | —         | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                     | —         | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                          | Default   | Description                                                                                                                                      |
| -------------- | ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`    | `string`                      | —         | —                                                                                                                                                |
| `id`           | `string`                      | —         | —                                                                                                                                                |
| `style`        | `React.CSSProperties`         | —         | —                                                                                                                                                |
| `tabIndex`     | `number`                      | —         | —                                                                                                                                                |
| `readOnly`     | `boolean`                     | —         | —                                                                                                                                                |
| `placeholder`  | `string`                      | "00-8888" | Placeholder text in `"floor-unit"` format.                                                                                                       |
| `role`         | `React.AriaRole`              | —         | —                                                                                                                                                |
| `value`        | `string`                      | —         | The combined unit number value in `"floor-unit"` format (e.g. `"01-234"`).                                                                       |
| `name`         | `string`                      | —         | —                                                                                                                                                |
| `error`        | `boolean`                     | —         | Renders the input in an error state.                                                                                                             |
| `disabled`     | `boolean`                     | —         | —                                                                                                                                                |
| `autoComplete` | `string`                      | —         | —                                                                                                                                                |
| `onChange`     | `((value: string) => void)`   | —         | Called when the value of either sub-input changes.                                                                                               |
| `onChangeRaw`  | `((value: string[]) => void)` | —         | Called when either sub-input changes.                                                                                                            |
| `onBlur`       | `((value: string) => void)`   | —         | Called when focus leaves the component entirely.                                                                                                 |
| `onBlurRaw`    | `((value: string[]) => void)` | —         | Called when focus leaves the component.                                                                                                          |
| `label`        | `FormLabelProps \| string`    | —         | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode`   | —         | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`       | —         | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                     | —         | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                     | —         | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                     | —         | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                     | —         | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                     | —         | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                     | —         | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                     | —         | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                          | Default   | Description                                                                                                                                      |
| -------------- | ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`    | `string`                      | —         | —                                                                                                                                                |
| `id`           | `string`                      | —         | —                                                                                                                                                |
| `style`        | `React.CSSProperties`         | —         | —                                                                                                                                                |
| `tabIndex`     | `number`                      | —         | —                                                                                                                                                |
| `readOnly`     | `boolean`                     | —         | —                                                                                                                                                |
| `placeholder`  | `string`                      | "00-8888" | Placeholder text in `"floor-unit"` format.                                                                                                       |
| `role`         | `React.AriaRole`              | —         | —                                                                                                                                                |
| `value`        | `string`                      | —         | The combined unit number value in `"floor-unit"` format (e.g. `"01-234"`).                                                                       |
| `name`         | `string`                      | —         | —                                                                                                                                                |
| `error`        | `boolean`                     | —         | Renders the input in an error state.                                                                                                             |
| `disabled`     | `boolean`                     | —         | —                                                                                                                                                |
| `autoComplete` | `string`                      | —         | —                                                                                                                                                |
| `onChange`     | `((value: string) => void)`   | —         | Called when the value of either sub-input changes.                                                                                               |
| `onChangeRaw`  | `((value: string[]) => void)` | —         | Called when either sub-input changes.                                                                                                            |
| `onBlur`       | `((value: string) => void)`   | —         | Called when focus leaves the component entirely.                                                                                                 |
| `onBlurRaw`    | `((value: string[]) => void)` | —         | Called when focus leaves the component.                                                                                                          |
| `label`        | `FormLabelProps \| string`    | —         | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode`   | —         | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`       | —         | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                     | —         | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                     | —         | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                     | —         | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                     | —         | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                     | —         | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                     | —         | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                     | —         | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

## Props

| Prop           | Type                          | Default   | Description                                                                                                                                      |
| -------------- | ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`    | `string`                      | —         | —                                                                                                                                                |
| `id`           | `string`                      | —         | —                                                                                                                                                |
| `style`        | `React.CSSProperties`         | —         | —                                                                                                                                                |
| `tabIndex`     | `number`                      | —         | —                                                                                                                                                |
| `readOnly`     | `boolean`                     | —         | —                                                                                                                                                |
| `placeholder`  | `string`                      | "00-8888" | Placeholder text in `"floor-unit"` format.                                                                                                       |
| `role`         | `React.AriaRole`              | —         | —                                                                                                                                                |
| `value`        | `string`                      | —         | The combined unit number value in `"floor-unit"` format (e.g. `"01-234"`).                                                                       |
| `name`         | `string`                      | —         | —                                                                                                                                                |
| `error`        | `boolean`                     | —         | Renders the input in an error state.                                                                                                             |
| `disabled`     | `boolean`                     | —         | —                                                                                                                                                |
| `autoComplete` | `string`                      | —         | —                                                                                                                                                |
| `onChange`     | `((value: string) => void)`   | —         | Called when the value of either sub-input changes.                                                                                               |
| `onChangeRaw`  | `((value: string[]) => void)` | —         | Called when either sub-input changes.                                                                                                            |
| `onBlur`       | `((value: string) => void)`   | —         | Called when focus leaves the component entirely.                                                                                                 |
| `onBlurRaw`    | `((value: string[]) => void)` | —         | Called when focus leaves the component.                                                                                                          |
| `label`        | `FormLabelProps \| string`    | —         | Label rendered above the input. Accepts a plain string or a `FormLabelProps` object to provide additional configuration.                         |
| `errorMessage` | `string \| React.ReactNode`   | —         | Inline error text rendered below the input.                                                                                                      |
| `layoutType`   | `FormElementLayoutType`       | —         | Controls whether the container uses flex layout or a responsive column grid.                                                                     |
| `xxlCols`      | `ColSpan`                     | —         | Column span at the `xxl` breakpoint.                                                                                                             |
| `xlCols`       | `ColSpan`                     | —         | Column span at the `xl` breakpoint.                                                                                                              |
| `lgCols`       | `ColSpan`                     | —         | Column span at the `lg` breakpoint.                                                                                                              |
| `mdCols`       | `ColSpan`                     | —         | Column span at the `md` breakpoint.                                                                                                              |
| `smCols`       | `ColSpan`                     | —         | Column span at the `sm` breakpoint.                                                                                                              |
| `xsCols`       | `ColSpan`                     | —         | Column span at the `xs` breakpoint.                                                                                                              |
| `xxsCols`      | `ColSpan`                     | —         | Column span at the `xxs` (smallest) breakpoint. Acts as the base value. All larger breakpoints fall back to this when their own prop is not set. |

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
