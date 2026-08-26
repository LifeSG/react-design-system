# Form.DateInput

> v4 — CSS Modules replace styled-components. See SKILL-v4.md for setup.

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Collecting a single date from the user (e.g. date of birth, appointment date, submission deadline).
-   Any form field that requires calendar-based date selection.

## Usage

```tsx
import styles from "./MyForm.module.css";

<Form.DateInput className={styles.dateInput} ... />
```

```css
/* MyForm.module.css */
:where(body.fds-breakpoint-lg-min) .dateInput {
    max-width: 24rem;
}
```

Defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a CSS Module class — `max-width` constrains the component without conflicting with its internal `width: 100%`.

## Props

| Prop                       | Type                                | Default         | Description                                                                      |
| -------------------------- | ----------------------------------- | --------------- | -------------------------------------------------------------------------------- |
| `value`                    | `string`                            | —               | Selected date in `YYYY-MM-DD` format                                             |
| `disabled`                 | `boolean`                           | —               | Disables the component; entry not allowed                                        |
| `readOnly`                 | `boolean`                           | —               | Read-only state; selection not allowed                                           |
| `error`                    | `boolean`                           | —               | Sets error display (not needed if `errorMessage` is set)                         |
| `id`                       | `string`                            | —               | Unique identifier of the component                                               |
| `className`                | `string`                            | —               | Class selector of the component                                                  |
| `data-testid`              | `string`                            | —               | Test identifier of the component                                                 |
| `minDate`                  | `string`                            | —               | Minimum selectable date in `YYYY-MM-DD` format (inclusive)                       |
| `maxDate`                  | `string`                            | —               | Maximum selectable date in `YYYY-MM-DD` format (inclusive)                       |
| `disabledDates`            | `string[]`                          | —               | Specific dates to disable, each in `YYYY-MM-DD` format                           |
| `allowDisabledSelection`   | `boolean`                           | —               | If true, dates disabled by `minDate`/`maxDate`/`disabledDates` remain selectable |
| `hideInputKeyboard`        | `boolean`                           | —               | Hides the input keyboard when the field is focused                               |
| `withButton`               | `boolean`                           | `true`          | Renders Done/Cancel action buttons                                               |
| `zIndex`                   | `number`                            | `50`            | z-index of the calendar dropdown                                                 |
| `dropdownRootNode`         | `RefObject<HTMLElement>`            | `document.body` | Root element hosting the calendar dropdown                                       |
| `onChange`                 | `(date: string) => void`            | —               | Called when a date is selected; returns `YYYY-MM-DD`                             |
| `onBlur`                   | `() => void`                        | —               | Called on field defocus                                                          |
| `onFocus`                  | `() => void`                        | —               | Called when field is focused                                                     |
| `onYearMonthDisplayChange` | `(value: YearMonthDisplay) => void` | —               | Called when the displayed month/year changes                                     |

## YearMonthDisplay

| Prop    | Type     | Description                       |
| ------- | -------- | --------------------------------- |
| `year`  | `number` | Currently displayed year (`YYYY`) |
| `month` | `number` | Currently displayed month (1–12)  |

## Form-wrapper props

| Prop                | Type                        | Description                             |
| ------------------- | --------------------------- | --------------------------------------- |
| `label`             | `string \| FormLabelProps`  | Field label                             |
| `errorMessage`      | `string \| React.ReactNode` | Error message displayed below the field |
| `data-error-testid` | `string`                    | Test identifier for the error message   |

## FormLabelProps

| Prop       | Type                    | Default | Description                           |
| ---------- | ----------------------- | ------- | ------------------------------------- |
| `addon`    | `FormLabelAddonProps`   | —       | Tooltip or popover addon on the label |
| `subtitle` | `string \| JSX.Element` | —       | Subtitle text for the label           |

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` and `onChange` together for controlled usage; `onChange` receives a `YYYY-MM-DD` string.
-   Use `minDate`/`maxDate` to constrain selectable dates to valid business ranges.
-   Use `disabledDates` for known blackout dates (e.g. public holidays).
-   Set `errorMessage` rather than `error` alone so users understand what is wrong.
-   Use `withButton` (default `true`) to require explicit confirmation before the value is committed.
-   Use `readOnly` on review or summary screens where the value should be visible but not editable.
-   Specify `dropdownRootNode` if the component is inside a scrollable container to prevent the calendar from clipping.
-   Date strings use `YYYY-MM-DD` format throughout (value, minDate, maxDate, disabledDates, onChange return).

## Anti-patterns

-   Do not use a plain text input for date collection — the picker enforces valid date formats automatically.
-   Do not set `allowDisabledSelection` unless there is a specific UX reason to allow out-of-range dates.
-   Do not rely on `error` prop alone without an `errorMessage`; users need descriptive feedback.
-   Do not use for date-range selection — use `Form.DateRangeInput` instead.
