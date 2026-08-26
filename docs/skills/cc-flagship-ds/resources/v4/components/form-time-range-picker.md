# Form.TimeRangePicker

> v4 — CSS Modules replace styled-components. See SKILL-v4.md for setup.

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Collecting a start and end time from the user (e.g. operating hours, meeting slot, booking window).
-   Use `variant="combobox"` with `interval` when users should pick from fixed time slots (e.g. every 30 minutes).
-   Use `variant="dial"` (default) for freeform time selection.

## Usage

```tsx
import styles from "./MyForm.module.css";

<Form.TimeRangePicker className={styles.timeRangePicker} ... />
```

```css
/* MyForm.module.css */
:where(body.fds-breakpoint-lg-min) .timeRangePicker {
    max-width: 24rem;
}
```

Defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a CSS Module class.

## Props

| Prop               | Type                                    | Default         | Description                                              |
| ------------------ | --------------------------------------- | --------------- | -------------------------------------------------------- |
| `value`            | `TimeRangePickerValue`                  | —               | Selected time range                                      |
| `format`           | `"12hr" \| "24hr"`                      | `"24hr"`        | Time input format                                        |
| `variant`          | `"dial" \| "combobox"`                  | `"dial"`        | Picker UI variant                                        |
| `disabled`         | `boolean`                               | —               | Disables the component; entry not allowed                |
| `readOnly`         | `boolean`                               | —               | Read-only state; selection not allowed                   |
| `error`            | `boolean`                               | —               | Sets error display (not needed if `errorMessage` is set) |
| `id`               | `string`                                | —               | Unique identifier of the component                       |
| `className`        | `string`                                | —               | Class selector of the component                          |
| `style`            | `React.CSSProperties`                   | —               | Inline styles for the component                          |
| `data-testid`      | `string`                                | —               | Test identifier of the component                         |
| `alignment`        | `"left" \| "right"`                     | `"left"`        | Dropdown alignment relative to the field                 |
| `dropdownZIndex`   | `number`                                | `50`            | z-index of the dropdown                                  |
| `dropdownRootNode` | `React.RefObject<HTMLElement>`          | `document.body` | Root element containing the dropdown                     |
| `onChange`         | `(value: TimeRangePickerValue) => void` | —               | Called when user confirms the time range                 |
| `onBlur`           | `() => void`                            | —               | Called on defocus                                        |
| `onFocus`          | `() => void`                            | —               | Called when field is focused                             |

## Combobox-variant-specific props

| Prop                     | Type     | Default | Description                                                  |
| ------------------------ | -------- | ------- | ------------------------------------------------------------ |
| `interval`               | `number` | `15`    | Minutes between each dropdown option                         |
| `startLimit`             | `string` | —       | Earliest time shown in the dropdown                          |
| `endLimit`               | `string` | —       | Latest time shown in the dropdown                            |
| `initialScrollStartTime` | `string` | —       | Time the start dropdown scrolls to when start field is empty |
| `initialScrollEndTime`   | `string` | —       | Time the end dropdown scrolls to when end field is empty     |

## TimeRangePickerValue

| Prop    | Type     | Description                                                                                                 |
| ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `start` | `string` | Start time. Dial 24hr: `"HH:mm"`, dial 12hr: `"hh:mmA"`. Combobox 24hr: `"HH:mm"`, combobox 12hr: `"h:mma"` |
| `end`   | `string` | End time, same format as `start`                                                                            |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage; `onChange` receives a `TimeRangePickerValue`.
-   Match `format` to the expected string format in `TimeRangePickerValue`.
-   Use `startLimit`/`endLimit` with `combobox` variant to restrict available options to valid business hours.
-   Set `errorMessage` rather than `error` alone.
-   Use `dropdownRootNode` when inside a modal or scrollable container.
-   Time string format differs between `dial` and `combobox` variants — see `TimeRangePickerValue` above.
-   `interval`, `startLimit`, `endLimit`, and `initialScroll*` props only apply when `variant="combobox"`.

## Anti-patterns

-   Do not use for single time selection — use `Form.TimePicker` instead.
-   Do not mix dial and combobox time string formats — the format differs between variants.
-   Do not set combobox-specific props (`interval`, `startLimit`, `endLimit`, `initialScroll*`) when `variant="dial"`.
