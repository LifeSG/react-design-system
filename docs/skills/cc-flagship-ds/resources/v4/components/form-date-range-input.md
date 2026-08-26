# Form.DateRangeInput

> v4 — CSS Modules replace styled-components. See SKILL-v4.md for setup.

Import: `import { Form } from "@lifesg/react-design-system/form"`

## When to use

-   Collecting a start and end date from the user (e.g. leave period, booking period, date range filter).
-   Use `variant="week"` when the selection must always be a full calendar week.
-   Use `variant="fixed-range"` when the duration is predetermined (e.g. always 7 days).

## Usage

`onChange` always receives both start and end as `YYYY-MM-DD` strings, even for week and fixed-range variants.

```tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";

const LeavePeriodField = () => {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    return (
        <Form.DateRangeInput
            label="Leave period"
            value={start}
            valueEnd={end}
            minDate="2024-01-01"
            maxDate="2024-12-31"
            onChange={(s, e) => {
                setStart(s);
                setEnd(e);
            }}
        />
    );
};
```

```tsx
{
    /* variant="week" — whole-week selection */
}
<Form.DateRangeInput
    label="Select week"
    variant="week"
    value={start}
    valueEnd={end}
    onChange={(s, e) => {
        setStart(s);
        setEnd(e);
    }}
/>;

{
    /* variant="fixed-range" — valueEnd derived automatically; only store start */
}
<Form.DateRangeInput
    label="14-day quarantine period"
    variant="fixed-range"
    numberOfDays={14}
    value={start}
    valueEnd={end}
    onChange={(s, e) => {
        setStart(s);
        setEnd(e);
    }}
/>;
```

Width: defaults to 4 columns wide at `lg` and above; full-width on mobile. Use `max-width` via a CSS Module class:

```tsx
import styles from "./MyForm.module.css";

<Form.DateRangeInput className={styles.dateRangeInput} ... />
```

```css
/* MyForm.module.css */
:where(body.fds-breakpoint-lg-min) .dateRangeInput {
    max-width: 24rem;
}
```

## Props

| Prop                       | Type                                           | Default         | Description                                                                      |
| -------------------------- | ---------------------------------------------- | --------------- | -------------------------------------------------------------------------------- |
| `value`                    | `string`                                       | —               | Start date in `YYYY-MM-DD` format                                                |
| `valueEnd`                 | `string`                                       | —               | End date in `YYYY-MM-DD` format (range/fixed-range only)                         |
| `variant`                  | `"range" \| "week" \| "fixed-range"`           | `"range"`       | Selection type                                                                   |
| `numberOfDays`             | `number`                                       | `7`             | Days to select when `variant="fixed-range"`                                      |
| `disabled`                 | `boolean`                                      | —               | Disables the component; entry not allowed                                        |
| `readOnly`                 | `boolean`                                      | —               | Read-only state; selection not allowed                                           |
| `error`                    | `boolean`                                      | —               | Sets error display (not needed if `errorMessage` is set)                         |
| `id`                       | `string`                                       | —               | Unique identifier of the component                                               |
| `className`                | `string`                                       | —               | Class selector of the component                                                  |
| `data-testid`              | `string`                                       | —               | Test identifier of the component                                                 |
| `minDate`                  | `string`                                       | —               | Minimum selectable date in `YYYY-MM-DD` format (inclusive)                       |
| `maxDate`                  | `string`                                       | —               | Maximum selectable date in `YYYY-MM-DD` format (inclusive)                       |
| `disabledDates`            | `string[]`                                     | —               | Specific dates to disable, each in `YYYY-MM-DD` format                           |
| `allowDisabledSelection`   | `boolean`                                      | —               | If true, dates disabled by `minDate`/`maxDate`/`disabledDates` remain selectable |
| `hideInputKeyboard`        | `boolean`                                      | —               | Hides the input keyboard when the field is focused                               |
| `withButton`               | `boolean`                                      | `true`          | Renders Done/Cancel action buttons                                               |
| `zIndex`                   | `number`                                       | `50`            | z-index of the calendar dropdown                                                 |
| `dropdownRootNode`         | `RefObject<HTMLElement>`                       | `document.body` | Root element hosting the calendar dropdown                                       |
| `onChange`                 | `(startDate: string, endDate: string) => void` | —               | Called when a selection is made; returns start and end dates in `YYYY-MM-DD`     |
| `onBlur`                   | `() => void`                                   | —               | Called on field defocus                                                          |
| `onFocus`                  | `() => void`                                   | —               | Called when field is focused                                                     |
| `onYearMonthDisplayChange` | `(value: YearMonthDisplay) => void`            | —               | Called when displayed month/year changes                                         |

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

## Rules

-   Always supply a `label` so the field is accessible.
-   Pass `value` (start) and `valueEnd` (end) for controlled usage; `onChange` receives both as `YYYY-MM-DD` strings.
-   Use `minDate`/`maxDate` to restrict selection to valid business date ranges.
-   Set `errorMessage` rather than `error` alone so users understand what is wrong.
-   Use `withButton` (default `true`) to require explicit confirmation before the value is committed.
-   Use `readOnly` on review screens where the range should be visible but not editable.
-   Specify `dropdownRootNode` if the component is inside a scrollable container.
-   `valueEnd` is only relevant for `variant="range"` and `variant="fixed-range"`.
-   `numberOfDays` only applies when `variant="fixed-range"`.

## Anti-patterns

-   Do not use for single-date selection — use `Form.DateInput` instead.
-   Do not set `numberOfDays` unless `variant="fixed-range"` is also set.
-   Do not rely on `error` alone without an `errorMessage`.
-   Do not allow end date before start date — validate in `onChange` before updating state.
