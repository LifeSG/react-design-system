# Form.Timepicker

> v4 — CSS Modules replace styled-components. See SKILL-v4.md for setup.

Import: `import { Form } from "@lifesg/react-design-system/form"`

> **Casing:** the export is `Form.Timepicker` (lowercase `p`), not `Form.TimePicker`.

## When to use

-   Collecting a single time value from the user (e.g. appointment time, start time, notification time).
-   Use `format="12hr"` for consumer-facing forms where AM/PM is more intuitive.
-   Use `format="24hr"` (default) for operational or technical contexts.

## Usage

```tsx
import styles from "./MyForm.module.css";

<Form.Timepicker className={styles.timepicker} ... />
```

```css
/* MyForm.module.css */
:where(body.fds-breakpoint-lg-min) .timepicker {
    max-width: 24rem;
}
```

Defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a CSS Module class.

## Props

| Prop               | Type                           | Default         | Description                                                                          |
| ------------------ | ------------------------------ | --------------- | ------------------------------------------------------------------------------------ |
| `value`            | `string`                       | —               | Selected time. 24hr: `"HH:mm"` (e.g. `"13:00"`); 12hr: `"hh:mmA"` (e.g. `"01:00PM"`) |
| `format`           | `"12hr" \| "24hr"`             | `"24hr"`        | Time input format                                                                    |
| `placeholder`      | `string`                       | —               | Placeholder text in the field                                                        |
| `alignment`        | `"left" \| "right"`            | `"left"`        | Alignment of the dropdown relative to the field                                      |
| `disabled`         | `boolean`                      | —               | Disables the component; entry not allowed                                            |
| `error`            | `boolean`                      | —               | Sets error display (not needed if `errorMessage` is set)                             |
| `id`               | `string`                       | —               | Unique identifier of the component                                                   |
| `className`        | `string`                       | —               | Class selector of the component                                                      |
| `style`            | `React.CSSProperties`          | —               | Inline styles for the component                                                      |
| `data-testid`      | `string`                       | —               | Test identifier of the component                                                     |
| `dropdownZIndex`   | `number`                       | —               | z-index of the dropdown popover                                                      |
| `dropdownRootNode` | `React.RefObject<HTMLElement>` | `document.body` | Root element containing the dropdown popover                                         |
| `onChange`         | `(value: string) => void`      | —               | Called when user confirms a time selection                                           |
| `onBlur`           | `() => void`                   | —               | Called on defocus; pending changes are not applied                                   |
| `onFocus`          | `() => void`                   | —               | Called when field is focused                                                         |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage.
-   Match `format` to the expected string format: `"HH:mm"` for 24hr, `"hh:mmA"` for 12hr.
-   Set `errorMessage` rather than `error` alone so users understand what is wrong.
-   Use `dropdownRootNode` when the picker is inside a modal or fixed container to avoid z-index issues.
-   Use `alignment="right"` when the picker is near the right edge of the viewport.
-   `onChange` fires only after the user clicks the Confirm button, not on every dial interaction.
-   `onBlur` does not apply any in-progress selection — use `onChange` for committed values.

## Anti-patterns

-   Do not use for time-range selection — use `Form.TimeRangePicker` instead.
-   Do not mix 12hr format strings with `format="24hr"` or vice versa.
-   Do not rely on `onBlur` to capture the selected value — it does not commit the selection.
