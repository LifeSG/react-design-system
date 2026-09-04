# TimeSlotWeekView

Import: `import { TimeSlotWeekView } from "@lifesg/react-design-system/time-slot-week-view"`

## Sub-components

-   `YearMonthWeekDisplay` — returned by `onWeekDisplayChange`
-   `TimeSlot` — shape of each slot in the `slots` map
-   `TimeSlotBarStyleAttributes` — visual styling for a slot

## YearMonthWeekDisplay

| Prop    | Type                                                | Description                                            |
| ------- | --------------------------------------------------- | ------------------------------------------------------ |
| `week`  | `{ firstDayOfWeek: string; lastDayOfWeek: string }` | First and last days of the visible week (`YYYY-MM-DD`) |
| `year`  | `number`                                            | Visible year                                           |
| `month` | `number`                                            | Visible month (1–12)                                   |

## TimeSlot

| Prop              | Type                         | Description                                                       |
| ----------------- | ---------------------------- | ----------------------------------------------------------------- |
| `id` \*           | `string`                     | Unique identifier of the slot                                     |
| `startTime` \*    | `string`                     | Start time (`HH:mm`; minutes in 15-minute blocks: 00, 15, 30, 45) |
| `endTime` \*      | `string`                     | End time (`HH:mm`; minutes in 15-minute blocks: 00, 15, 30, 45)   |
| `styleAttributes` | `TimeSlotBarStyleAttributes` | Visual styling                                                    |
| `label`           | `string`                     | Text content within the slot cell                                 |
| `clickable`       | `boolean`                    | Whether the slot cell is clickable                                |

## TimeSlotBarStyleAttributes

| Prop             | Type                     | Default     | Description                                       |
| ---------------- | ------------------------ | ----------- | ------------------------------------------------- |
| `color` \*       | `string`                 | —           | The color of the slot                             |
| `styleType`      | `"default" \| "stripes"` | `"default"` | The style type of the slot                        |
| `secondaryColor` | `string`                 | —           | Secondary color; used with `styleType: "stripes"` |

## Props — `TimeSlotWeekViewProps`

| Prop                      | Type                                           | Default | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —       | —                                                                                                     |
| `id`                      | `string`                                       | —       | —                                                                                                     |
| `value`                   | `string`                                       | —       | The currently selected date in `YYYY-MM-DD` format. Controls the highlighted day in the week view.    |
| `slots`                   | `{ [date: string]: TimeSlot[] }`               | —       | Map of date strings (YYYY-MM-DD) to an array of `TimeSlot` entries displayed in that day's column.    |
| `showNavigationHeader`    | `boolean`                                      | true    | Whether to show the month/year picker and the prev/next week navigation arrows above the week grid.   |
| `enableSelection`         | `boolean`                                      | true    | When `true`, the user can click a day column to select that date, triggering `onChange`               |
| `currentCalendarDate`     | `string`                                       | —       | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —       | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —       | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —       | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —       | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —       | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —       | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —       | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —       | Specifies if the calendar should display only dates for the selected month                            |

## Props — `YearMonthWeekDisplay`

| Prop       | Type                                                | Default | Description                                                               |
| ---------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| `week` \*  | `{ firstDayOfWeek: string; lastDayOfWeek: string }` | —       | The first and last days of the newly displayed week in YYYY-MM-DD format. |
| `year` \*  | `number`                                            | —       | —                                                                         |
| `month` \* | `number`                                            | —       | `month` is 1-indexed                                                      |

## Props — `TimeSlotWeekViewProps`

| Prop                      | Type                                           | Default | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —       | —                                                                                                     |
| `id`                      | `string`                                       | —       | —                                                                                                     |
| `value`                   | `string`                                       | —       | The currently selected date in `YYYY-MM-DD` format. Controls the highlighted day in the week view.    |
| `slots`                   | `{ [date: string]: TimeSlot[] }`               | —       | Map of date strings (YYYY-MM-DD) to an array of `TimeSlot` entries displayed in that day's column.    |
| `showNavigationHeader`    | `boolean`                                      | true    | Whether to show the month/year picker and the prev/next week navigation arrows above the week grid.   |
| `enableSelection`         | `boolean`                                      | true    | When `true`, the user can click a day column to select that date, triggering `onChange`               |
| `currentCalendarDate`     | `string`                                       | —       | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —       | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —       | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —       | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —       | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —       | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —       | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —       | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —       | Specifies if the calendar should display only dates for the selected month                            |

## Props — `YearMonthWeekDisplay`

| Prop       | Type                                                | Default | Description                                                               |
| ---------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| `week` \*  | `{ firstDayOfWeek: string; lastDayOfWeek: string }` | —       | The first and last days of the newly displayed week in YYYY-MM-DD format. |
| `year` \*  | `number`                                            | —       | —                                                                         |
| `month` \* | `number`                                            | —       | `month` is 1-indexed                                                      |

## Props — `TimeSlotWeekViewProps`

| Prop                      | Type                                           | Default | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —       | —                                                                                                     |
| `id`                      | `string`                                       | —       | —                                                                                                     |
| `value`                   | `string`                                       | —       | The currently selected date in `YYYY-MM-DD` format. Controls the highlighted day in the week view.    |
| `slots`                   | `{ [date: string]: TimeSlot[] }`               | —       | Map of date strings (YYYY-MM-DD) to an array of `TimeSlot` entries displayed in that day's column.    |
| `showNavigationHeader`    | `boolean`                                      | true    | Whether to show the month/year picker and the prev/next week navigation arrows above the week grid.   |
| `enableSelection`         | `boolean`                                      | true    | When `true`, the user can click a day column to select that date, triggering `onChange`               |
| `currentCalendarDate`     | `string`                                       | —       | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —       | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —       | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —       | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —       | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —       | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —       | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —       | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —       | Specifies if the calendar should display only dates for the selected month                            |

## Props — `YearMonthWeekDisplay`

| Prop       | Type                                                | Default | Description                                                               |
| ---------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| `week` \*  | `{ firstDayOfWeek: string; lastDayOfWeek: string }` | —       | The first and last days of the newly displayed week in YYYY-MM-DD format. |
| `year` \*  | `number`                                            | —       | —                                                                         |
| `month` \* | `number`                                            | —       | `month` is 1-indexed                                                      |

## Props — `TimeSlotWeekViewProps`

| Prop                      | Type                                           | Default | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —       | —                                                                                                     |
| `id`                      | `string`                                       | —       | —                                                                                                     |
| `value`                   | `string`                                       | —       | The currently selected date in `YYYY-MM-DD` format. Controls the highlighted day in the week view.    |
| `slots`                   | `{ [date: string]: TimeSlot[] }`               | —       | Map of date strings (YYYY-MM-DD) to an array of `TimeSlot` entries displayed in that day's column.    |
| `showNavigationHeader`    | `boolean`                                      | true    | Whether to show the month/year picker and the prev/next week navigation arrows above the week grid.   |
| `enableSelection`         | `boolean`                                      | true    | When `true`, the user can click a day column to select that date, triggering `onChange`               |
| `currentCalendarDate`     | `string`                                       | —       | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —       | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —       | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —       | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —       | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —       | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —       | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —       | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —       | Specifies if the calendar should display only dates for the selected month                            |

## Props — `YearMonthWeekDisplay`

| Prop       | Type                                                | Default | Description                                                               |
| ---------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| `week` \*  | `{ firstDayOfWeek: string; lastDayOfWeek: string }` | —       | The first and last days of the newly displayed week in YYYY-MM-DD format. |
| `year` \*  | `number`                                            | —       | —                                                                         |
| `month` \* | `number`                                            | —       | `month` is 1-indexed                                                      |

## Props — `TimeSlotWeekViewProps`

| Prop                      | Type                                           | Default | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —       | —                                                                                                     |
| `id`                      | `string`                                       | —       | —                                                                                                     |
| `value`                   | `string`                                       | —       | The currently selected date in `YYYY-MM-DD` format. Controls the highlighted day in the week view.    |
| `slots`                   | `{ [date: string]: TimeSlot[] }`               | —       | Map of date strings (YYYY-MM-DD) to an array of `TimeSlot` entries displayed in that day's column.    |
| `showNavigationHeader`    | `boolean`                                      | true    | Whether to show the month/year picker and the prev/next week navigation arrows above the week grid.   |
| `enableSelection`         | `boolean`                                      | true    | When `true`, the user can click a day column to select that date, triggering `onChange`               |
| `currentCalendarDate`     | `string`                                       | —       | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —       | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —       | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —       | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —       | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —       | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —       | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —       | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —       | Specifies if the calendar should display only dates for the selected month                            |

## Props — `YearMonthWeekDisplay`

| Prop       | Type                                                | Default | Description                                                               |
| ---------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| `week` \*  | `{ firstDayOfWeek: string; lastDayOfWeek: string }` | —       | The first and last days of the newly displayed week in YYYY-MM-DD format. |
| `year` \*  | `number`                                            | —       | —                                                                         |
| `month` \* | `number`                                            | —       | `month` is 1-indexed                                                      |

## Props — `TimeSlotWeekViewProps`

| Prop                      | Type                                           | Default | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —       | —                                                                                                     |
| `id`                      | `string`                                       | —       | —                                                                                                     |
| `value`                   | `string`                                       | —       | The currently selected date in `YYYY-MM-DD` format. Controls the highlighted day in the week view.    |
| `slots`                   | `{ [date: string]: TimeSlot[] }`               | —       | Map of date strings (YYYY-MM-DD) to an array of `TimeSlot` entries displayed in that day's column.    |
| `showNavigationHeader`    | `boolean`                                      | true    | Whether to show the month/year picker and the prev/next week navigation arrows above the week grid.   |
| `enableSelection`         | `boolean`                                      | true    | When `true`, the user can click a day column to select that date, triggering `onChange`               |
| `currentCalendarDate`     | `string`                                       | —       | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —       | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —       | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —       | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —       | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —       | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —       | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —       | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —       | Specifies if the calendar should display only dates for the selected month                            |

## Props — `YearMonthWeekDisplay`

| Prop       | Type                                                | Default | Description                                                               |
| ---------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------------- |
| `week` \*  | `{ firstDayOfWeek: string; lastDayOfWeek: string }` | —       | The first and last days of the newly displayed week in YYYY-MM-DD format. |
| `year` \*  | `number`                                            | —       | —                                                                         |
| `month` \* | `number`                                            | —       | `month` is 1-indexed                                                      |

## Rules

-   `slots` is mandatory.
-   `TimeSlot` minutes must be in 15-minute blocks (00, 15, 30, 45).
-   `TimeSlotBarStyleAttributes` uses `color`/`secondaryColor` — not `backgroundColor`/`backgroundColor2` as in `TimeSlotBarWeek`.
