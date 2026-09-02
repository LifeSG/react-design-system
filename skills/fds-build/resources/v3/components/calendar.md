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

## Props — `CalendarSingleProps`

| Prop       | Type                        | Default  | Description                            |
| ---------- | --------------------------- | -------- | -------------------------------------- |
| `variant`  | `"single"`                  | "single" | —                                      |
| `value`    | `string`                    | —        | Selected date in `YYYY-MM-DD` format   |
| `onChange` | `((value: string) => void)` | —        | Called when the selected date changes. |
| `onSelect` | `((value: string) => void)` | —        | Called when a date is selected.        |

## Props — `CalendarMultiProps`

| Prop            | Type                           | Default | Description                                   |
| --------------- | ------------------------------ | ------- | --------------------------------------------- |
| `variant` \*    | `"multi"`                      | —       | —                                             |
| `values`        | `string[]`                     | —       | Selected dates in `YYYY-MM-DD` format         |
| `minSelectable` | `number`                       | —       | Minimum number of dates that must be selected |
| `maxSelectable` | `number`                       | —       | Maximum number of dates that can be selected  |
| `onChange`      | `((values: string[]) => void)` | —       | Called when the selection changes.            |

## YearMonthDisplay

| Prop    | Type     | Description                           |
| ------- | -------- | ------------------------------------- |
| `year`  | `number` | Current visible year in `YYYY` format |
| `month` | `number` | Current visible month, 1–12           |

## Props — `CalendarSingleProps`

| Prop       | Type                        | Default  | Description                            |
| ---------- | --------------------------- | -------- | -------------------------------------- |
| `variant`  | `"single"`                  | "single" | —                                      |
| `value`    | `string`                    | —        | Selected date in `YYYY-MM-DD` format   |
| `onChange` | `((value: string) => void)` | —        | Called when the selected date changes. |
| `onSelect` | `((value: string) => void)` | —        | Called when a date is selected.        |

## Props — `CalendarMultiProps`

| Prop            | Type                           | Default | Description                                   |
| --------------- | ------------------------------ | ------- | --------------------------------------------- |
| `variant` \*    | `"multi"`                      | —       | —                                             |
| `values`        | `string[]`                     | —       | Selected dates in `YYYY-MM-DD` format         |
| `minSelectable` | `number`                       | —       | Minimum number of dates that must be selected |
| `maxSelectable` | `number`                       | —       | Maximum number of dates that can be selected  |
| `onChange`      | `((values: string[]) => void)` | —       | Called when the selection changes.            |

## Props — `CalendarSingleProps`

| Prop       | Type                        | Default  | Description                            |
| ---------- | --------------------------- | -------- | -------------------------------------- |
| `variant`  | `"single"`                  | "single" | —                                      |
| `value`    | `string`                    | —        | Selected date in `YYYY-MM-DD` format   |
| `onChange` | `((value: string) => void)` | —        | Called when the selected date changes. |
| `onSelect` | `((value: string) => void)` | —        | Called when a date is selected.        |

## Props — `CalendarMultiProps`

| Prop            | Type                           | Default | Description                                   |
| --------------- | ------------------------------ | ------- | --------------------------------------------- |
| `variant` \*    | `"multi"`                      | —       | —                                             |
| `values`        | `string[]`                     | —       | Selected dates in `YYYY-MM-DD` format         |
| `minSelectable` | `number`                       | —       | Minimum number of dates that must be selected |
| `maxSelectable` | `number`                       | —       | Maximum number of dates that can be selected  |
| `onChange`      | `((values: string[]) => void)` | —       | Called when the selection changes.            |

## Props — `CalendarProps`

| Prop                       | Type                                  | Default    | Description                                                                                           |
| -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —          | —                                                                                                     |
| `id`                       | `string`                              | —          | —                                                                                                     |
| `styleType`                | `"no-border" \| "bordered"`           | "bordered" | Border style of the calendar container.                                                               |
| `onHover`                  | `((value: string) => void)`           | —          | Called when a day cell is hovered.                                                                    |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —          | Called when the visible month or year changes.                                                        |
| `minDate`                  | `string`                              | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                  | `string`                              | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`            | `string[]`                            | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`   | `boolean`                             | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly`  | `boolean`                             | —          | Specifies if the calendar should display only dates for the selected month                            |
| `variant`                  | `"single"`                            | "single"   | —                                                                                                     |
| `onChange`                 | `((value: string) => void)`           | —          | Called when the selected date changes.                                                                |

## Props — `CalendarSingleProps`

| Prop       | Type                        | Default  | Description                            |
| ---------- | --------------------------- | -------- | -------------------------------------- |
| `variant`  | `"single"`                  | "single" | —                                      |
| `value`    | `string`                    | —        | Selected date in `YYYY-MM-DD` format   |
| `onChange` | `((value: string) => void)` | —        | Called when the selected date changes. |
| `onSelect` | `((value: string) => void)` | —        | Called when a date is selected.        |

## Props — `CalendarMultiProps`

| Prop            | Type                           | Default | Description                                   |
| --------------- | ------------------------------ | ------- | --------------------------------------------- |
| `variant` \*    | `"multi"`                      | —       | —                                             |
| `values`        | `string[]`                     | —       | Selected dates in `YYYY-MM-DD` format         |
| `minSelectable` | `number`                       | —       | Minimum number of dates that must be selected |
| `maxSelectable` | `number`                       | —       | Maximum number of dates that can be selected  |
| `onChange`      | `((values: string[]) => void)` | —       | Called when the selection changes.            |

## Props — `CalendarProps`

| Prop                       | Type                                  | Default    | Description                                                                                           |
| -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —          | —                                                                                                     |
| `id`                       | `string`                              | —          | —                                                                                                     |
| `styleType`                | `"no-border" \| "bordered"`           | "bordered" | Border style of the calendar container.                                                               |
| `onHover`                  | `((value: string) => void)`           | —          | Called when a day cell is hovered.                                                                    |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —          | Called when the visible month or year changes.                                                        |
| `minDate`                  | `string`                              | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                  | `string`                              | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`            | `string[]`                            | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`   | `boolean`                             | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly`  | `boolean`                             | —          | Specifies if the calendar should display only dates for the selected month                            |
| `variant`                  | `"single"`                            | "single"   | —                                                                                                     |
| `onChange`                 | `((value: string) => void)`           | —          | Called when the selected date changes.                                                                |

## Props — `CalendarSingleProps`

| Prop       | Type                        | Default  | Description                            |
| ---------- | --------------------------- | -------- | -------------------------------------- |
| `variant`  | `"single"`                  | "single" | —                                      |
| `value`    | `string`                    | —        | Selected date in `YYYY-MM-DD` format   |
| `onChange` | `((value: string) => void)` | —        | Called when the selected date changes. |
| `onSelect` | `((value: string) => void)` | —        | Called when a date is selected.        |

## Props — `CalendarMultiProps`

| Prop            | Type                           | Default | Description                                   |
| --------------- | ------------------------------ | ------- | --------------------------------------------- |
| `variant` \*    | `"multi"`                      | —       | —                                             |
| `values`        | `string[]`                     | —       | Selected dates in `YYYY-MM-DD` format         |
| `minSelectable` | `number`                       | —       | Minimum number of dates that must be selected |
| `maxSelectable` | `number`                       | —       | Maximum number of dates that can be selected  |
| `onChange`      | `((values: string[]) => void)` | —       | Called when the selection changes.            |

## Props — `CalendarProps`

| Prop                       | Type                                  | Default    | Description                                                                                           |
| -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —          | —                                                                                                     |
| `id`                       | `string`                              | —          | —                                                                                                     |
| `styleType`                | `"no-border" \| "bordered"`           | "bordered" | Border style of the calendar container.                                                               |
| `onHover`                  | `((value: string) => void)`           | —          | Called when a day cell is hovered.                                                                    |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —          | Called when the visible month or year changes.                                                        |
| `minDate`                  | `string`                              | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                  | `string`                              | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`            | `string[]`                            | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`   | `boolean`                             | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly`  | `boolean`                             | —          | Specifies if the calendar should display only dates for the selected month                            |
| `variant`                  | `"single"`                            | "single"   | —                                                                                                     |
| `onChange`                 | `((value: string) => void)`           | —          | Called when the selected date changes.                                                                |

## Props — `CalendarSingleProps`

| Prop       | Type                        | Default  | Description                            |
| ---------- | --------------------------- | -------- | -------------------------------------- |
| `variant`  | `"single"`                  | "single" | —                                      |
| `value`    | `string`                    | —        | Selected date in `YYYY-MM-DD` format   |
| `onChange` | `((value: string) => void)` | —        | Called when the selected date changes. |
| `onSelect` | `((value: string) => void)` | —        | Called when a date is selected.        |

## Props — `CalendarMultiProps`

| Prop            | Type                           | Default | Description                                   |
| --------------- | ------------------------------ | ------- | --------------------------------------------- |
| `variant` \*    | `"multi"`                      | —       | —                                             |
| `values`        | `string[]`                     | —       | Selected dates in `YYYY-MM-DD` format         |
| `minSelectable` | `number`                       | —       | Minimum number of dates that must be selected |
| `maxSelectable` | `number`                       | —       | Maximum number of dates that can be selected  |
| `onChange`      | `((values: string[]) => void)` | —       | Called when the selection changes.            |

## Props — `CalendarProps`

| Prop                       | Type                                  | Default    | Description                                                                                           |
| -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`                | `string`                              | —          | —                                                                                                     |
| `id`                       | `string`                              | —          | —                                                                                                     |
| `styleType`                | `"no-border" \| "bordered"`           | "bordered" | Border style of the calendar container.                                                               |
| `onHover`                  | `((value: string) => void)`           | —          | Called when a day cell is hovered.                                                                    |
| `onYearMonthDisplayChange` | `((value: YearMonthDisplay) => void)` | —          | Called when the visible month or year changes.                                                        |
| `minDate`                  | `string`                              | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                  | `string`                              | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`            | `string[]`                            | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`   | `boolean`                             | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly`  | `boolean`                             | —          | Specifies if the calendar should display only dates for the selected month                            |
| `variant`                  | `"single"`                            | "single"   | —                                                                                                     |
| `onChange`                 | `((value: string) => void)`           | —          | Called when the selected date changes.                                                                |

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
