# Calendar

Import: `import { Calendar } from "@lifesg/react-design-system/calendar"`

## When to use

-   Displaying an inline date picker when a full-page or panel calendar is preferable over a dropdown.
-   Use `variant="single"` for standard single-date selection.
-   Use `variant="multi"` when the user must pick multiple non-contiguous dates (e.g. recurring appointments).

## Usage

### variant="single" — single date selection

```tsx
import { useState } from "react";
import { Calendar } from "@lifesg/react-design-system/calendar";

const AppointmentCalendar = () => {
    const [date, setDate] = useState("2024-06-15");

    return (
        <Calendar
            variant="single"
            value={date}
            minDate="2024-01-01"
            maxDate="2024-12-31"
            onChange={(selected) => setDate(selected)}
        />
    );
};
```

### variant="multi" — multiple date selection

Note `values` (plural) and `onChange` receives the full updated array.

```tsx
import { useState } from "react";
import { Calendar } from "@lifesg/react-design-system/calendar";

const MultiDateCalendar = () => {
    const [dates, setDates] = useState<string[]>([]);

    return (
        <Calendar
            variant="multi"
            values={dates}
            minDate="2024-01-01"
            maxDate="2024-12-31"
            maxSelectable={5}
            onChange={(selected) => setDates(selected)}
        />
    );
};
```

## Props — shared

| Prop                       | Type                                | Default      | Description                                                          |
| -------------------------- | ----------------------------------- | ------------ | -------------------------------------------------------------------- |
| `variant`                  | `"single" \| "multi"`               | `"single"`   | Calendar selection mode                                              |
| `styleType`                | `"bordered" \| "no-border"`         | `"bordered"` | Whether a border is rendered                                         |
| `disabledDates`            | `string[]`                          | —            | Dates to disable, in `YYYY-MM-DD` format                             |
| `minDate`                  | `string`                            | —            | Minimum selectable date in `YYYY-MM-DD` format (inclusive)           |
| `maxDate`                  | `string`                            | —            | Maximum selectable date in `YYYY-MM-DD` format (inclusive)           |
| `showActiveMonthDaysOnly`  | `boolean`                           | `false`      | Show only the selected month's dates                                 |
| `onHover`                  | `(value: string) => void`           | —            | Called with hovered date (`YYYY-MM-DD`) or empty string when leaving |
| `onYearMonthDisplayChange` | `(value: YearMonthDisplay) => void` | —            | Called when visible month/year changes                               |
| `id`                       | `string`                            | —            | Unique identifier of the component                                   |
| `className`                | `string`                            | —            | Class selector of the component                                      |
| `data-testid`              | `string`                            | —            | Test identifier of the component                                     |

## Props — variant="single"

| Prop       | Type                      | Default | Description                           |
| ---------- | ------------------------- | ------- | ------------------------------------- |
| `value`    | `string`                  | —       | Selected date in `YYYY-MM-DD` format  |
| `onChange` | `(value: string) => void` | —       | Called when the selected date changes |

## Props — variant="multi"

| Prop            | Type                         | Default | Description                                            |
| --------------- | ---------------------------- | ------- | ------------------------------------------------------ |
| `values`        | `string[]`                   | —       | Array of selected dates in `YYYY-MM-DD` format         |
| `minSelectable` | `number`                     | —       | Minimum number of dates required for a valid selection |
| `maxSelectable` | `number`                     | —       | Maximum number of dates that can be selected           |
| `onChange`      | `(values: string[]) => void` | —       | Called when the selection changes                      |

## YearMonthDisplay

| Prop    | Type     | Description                           |
| ------- | -------- | ------------------------------------- |
| `year`  | `number` | Current visible year in `YYYY` format |
| `month` | `number` | Current visible month, 1–12           |

## Rules

-   `variant="single"` uses `value: string` and `onChange: (date: string) => void`.
-   `variant="multi"` uses `values: string[]` and `onChange: (dates: string[]) => void` — note the plural prop names.
-   All dates must be in `YYYY-MM-DD` format.
-   Use `minDate`/`maxDate` to constrain selectable range.
-   Use `disabledDates` for specific non-selectable dates within the allowed range.

## Anti-patterns

-   Do not pass `value` to `variant="multi"` — the prop is `values` (plural).
-   Do not pass `values` to `variant="single"` — the prop is `value` (singular).
-   Do not use Calendar inside a form for simple date entry — prefer `Form.DateInput` for that pattern.
