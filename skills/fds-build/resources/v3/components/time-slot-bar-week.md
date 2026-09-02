# TimeSlotBarWeek

Import: `import { TimeSlotBarWeek } from "@lifesg/react-design-system/time-slot-bar-week"`

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

| Prop              | Type                         | Description                        |
| ----------------- | ---------------------------- | ---------------------------------- |
| `id` \*           | `string`                     | Unique identifier of the slot      |
| `startTime` \*    | `string`                     | Start time (`HH:mm`)               |
| `endTime` \*      | `string`                     | End time (`HH:mm`)                 |
| `styleAttributes` | `TimeSlotBarStyleAttributes` | Visual styling                     |
| `label`           | `string`                     | Text content within the slot cell  |
| `clickable`       | `boolean`                    | Whether the slot cell is clickable |

## TimeSlotBarStyleAttributes

| Prop                 | Type                     | Default     | Description                                       |
| -------------------- | ------------------------ | ----------- | ------------------------------------------------- |
| `backgroundColor` \* | `string`                 | —           | The color of the slot                             |
| `styleType`          | `"default" \| "stripes"` | `"default"` | The style type of the slot                        |
| `backgroundColor2`   | `string`                 | —           | Secondary color; used with `styleType: "stripes"` |

## Props

| Prop                      | Type                                           | Default    | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —          | —                                                                                                     |
| `id`                      | `string`                                       | —          | —                                                                                                     |
| `slots` \*                | `{ [date: string]: TimeSlot[] }`               | —          | Map of date strings (YYYY-MM-DD) to the time slot arrays to render for that date.                     |
| `startTime`               | `string`                                       | —          | The start boundary of the visible time range, in HH:mm format.                                        |
| `endTime`                 | `string`                                       | —          | The end boundary of the visible time range, in HH:mm format.                                          |
| `value`                   | `string`                                       | —          | The currently selected date in YYYY-MM-DD format. Controls the highlighted day column.                |
| `interval`                | `number`                                       | 30         | Duration in minutes that each time slot cell represents.                                              |
| `variant`                 | `TimeSlotCellsVariant`                         | "flexible" | Controls how time slot cells are sized within each day column.                                        |
| `maxVisibleCellHeight`    | `number`                                       | —          | Maximum height in pixels for the time slot area before it becomes truncated.                          |
| `showNavigationHeader`    | `boolean`                                      | true       | Whether to show the month/year pickers and the prev/next week navigation arrows above the week grid.  |
| `enableSelection`         | `boolean`                                      | true       | When `true`, the user can click a day column to select that date, triggering `onChange`.              |
| `currentCalendarDate`     | `string`                                       | —          | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —          | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —          | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —          | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —          | Specifies if the calendar should display only dates for the selected month                            |

## Props

| Prop                      | Type                                           | Default    | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —          | —                                                                                                     |
| `id`                      | `string`                                       | —          | —                                                                                                     |
| `slots` \*                | `{ [date: string]: TimeSlot[] }`               | —          | Map of date strings (YYYY-MM-DD) to the time slot arrays to render for that date.                     |
| `startTime`               | `string`                                       | —          | The start boundary of the visible time range, in HH:mm format.                                        |
| `endTime`                 | `string`                                       | —          | The end boundary of the visible time range, in HH:mm format.                                          |
| `value`                   | `string`                                       | —          | The currently selected date in YYYY-MM-DD format. Controls the highlighted day column.                |
| `interval`                | `number`                                       | 30         | Duration in minutes that each time slot cell represents.                                              |
| `variant`                 | `TimeSlotCellsVariant`                         | "flexible" | Controls how time slot cells are sized within each day column.                                        |
| `maxVisibleCellHeight`    | `number`                                       | —          | Maximum height in pixels for the time slot area before it becomes truncated.                          |
| `showNavigationHeader`    | `boolean`                                      | true       | Whether to show the month/year pickers and the prev/next week navigation arrows above the week grid.  |
| `enableSelection`         | `boolean`                                      | true       | When `true`, the user can click a day column to select that date, triggering `onChange`.              |
| `currentCalendarDate`     | `string`                                       | —          | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —          | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —          | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —          | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —          | Specifies if the calendar should display only dates for the selected month                            |

## Props — `TimeSlotBarWeekProps`

| Prop                      | Type                                           | Default    | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —          | —                                                                                                     |
| `id`                      | `string`                                       | —          | —                                                                                                     |
| `slots` \*                | `{ [date: string]: TimeSlot[] }`               | —          | Map of date strings (YYYY-MM-DD) to the time slot arrays to render for that date.                     |
| `startTime`               | `string`                                       | —          | The start boundary of the visible time range, in HH:mm format.                                        |
| `endTime`                 | `string`                                       | —          | The end boundary of the visible time range, in HH:mm format.                                          |
| `value`                   | `string`                                       | —          | The currently selected date in YYYY-MM-DD format. Controls the highlighted day column.                |
| `interval`                | `number`                                       | 30         | Duration in minutes that each time slot cell represents.                                              |
| `variant`                 | `TimeSlotCellsVariant`                         | "flexible" | Controls how time slot cells are sized within each day column.                                        |
| `maxVisibleCellHeight`    | `number`                                       | —          | Maximum height in pixels for the time slot area before it becomes truncated.                          |
| `showNavigationHeader`    | `boolean`                                      | true       | Whether to show the month/year pickers and the prev/next week navigation arrows above the week grid.  |
| `enableSelection`         | `boolean`                                      | true       | When `true`, the user can click a day column to select that date, triggering `onChange`.              |
| `currentCalendarDate`     | `string`                                       | —          | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —          | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —          | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —          | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —          | Specifies if the calendar should display only dates for the selected month                            |

## Props — `TimeSlotBarWeekProps`

| Prop                      | Type                                           | Default    | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —          | —                                                                                                     |
| `id`                      | `string`                                       | —          | —                                                                                                     |
| `slots` \*                | `{ [date: string]: TimeSlot[] }`               | —          | Map of date strings (YYYY-MM-DD) to the time slot arrays to render for that date.                     |
| `startTime`               | `string`                                       | —          | The start boundary of the visible time range, in HH:mm format.                                        |
| `endTime`                 | `string`                                       | —          | The end boundary of the visible time range, in HH:mm format.                                          |
| `value`                   | `string`                                       | —          | The currently selected date in YYYY-MM-DD format. Controls the highlighted day column.                |
| `interval`                | `number`                                       | 30         | Duration in minutes that each time slot cell represents.                                              |
| `variant`                 | `TimeSlotCellsVariant`                         | "flexible" | Controls how time slot cells are sized within each day column.                                        |
| `maxVisibleCellHeight`    | `number`                                       | —          | Maximum height in pixels for the time slot area before it becomes truncated.                          |
| `showNavigationHeader`    | `boolean`                                      | true       | Whether to show the month/year pickers and the prev/next week navigation arrows above the week grid.  |
| `enableSelection`         | `boolean`                                      | true       | When `true`, the user can click a day column to select that date, triggering `onChange`.              |
| `currentCalendarDate`     | `string`                                       | —          | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —          | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —          | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —          | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —          | Specifies if the calendar should display only dates for the selected month                            |

## Props — `TimeSlotBarWeekProps`

| Prop                      | Type                                           | Default    | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —          | —                                                                                                     |
| `id`                      | `string`                                       | —          | —                                                                                                     |
| `slots` \*                | `{ [date: string]: TimeSlot[] }`               | —          | Map of date strings (YYYY-MM-DD) to the time slot arrays to render for that date.                     |
| `startTime`               | `string`                                       | —          | The start boundary of the visible time range, in HH:mm format.                                        |
| `endTime`                 | `string`                                       | —          | The end boundary of the visible time range, in HH:mm format.                                          |
| `value`                   | `string`                                       | —          | The currently selected date in YYYY-MM-DD format. Controls the highlighted day column.                |
| `interval`                | `number`                                       | 30         | Duration in minutes that each time slot cell represents.                                              |
| `variant`                 | `TimeSlotCellsVariant`                         | "flexible" | Controls how time slot cells are sized within each day column.                                        |
| `maxVisibleCellHeight`    | `number`                                       | —          | Maximum height in pixels for the time slot area before it becomes truncated.                          |
| `showNavigationHeader`    | `boolean`                                      | true       | Whether to show the month/year pickers and the prev/next week navigation arrows above the week grid.  |
| `enableSelection`         | `boolean`                                      | true       | When `true`, the user can click a day column to select that date, triggering `onChange`.              |
| `currentCalendarDate`     | `string`                                       | —          | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —          | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —          | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —          | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —          | Specifies if the calendar should display only dates for the selected month                            |

## Props — `TimeSlotBarWeekProps`

| Prop                      | Type                                           | Default    | Description                                                                                           |
| ------------------------- | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `className`               | `string`                                       | —          | —                                                                                                     |
| `id`                      | `string`                                       | —          | —                                                                                                     |
| `slots` \*                | `{ [date: string]: TimeSlot[] }`               | —          | Map of date strings (YYYY-MM-DD) to the time slot arrays to render for that date.                     |
| `startTime`               | `string`                                       | —          | The start boundary of the visible time range, in HH:mm format.                                        |
| `endTime`                 | `string`                                       | —          | The end boundary of the visible time range, in HH:mm format.                                          |
| `value`                   | `string`                                       | —          | The currently selected date in YYYY-MM-DD format. Controls the highlighted day column.                |
| `interval`                | `number`                                       | 30         | Duration in minutes that each time slot cell represents.                                              |
| `variant`                 | `TimeSlotCellsVariant`                         | "flexible" | Controls how time slot cells are sized within each day column.                                        |
| `maxVisibleCellHeight`    | `number`                                       | —          | Maximum height in pixels for the time slot area before it becomes truncated.                          |
| `showNavigationHeader`    | `boolean`                                      | true       | Whether to show the month/year pickers and the prev/next week navigation arrows above the week grid.  |
| `enableSelection`         | `boolean`                                      | true       | When `true`, the user can click a day column to select that date, triggering `onChange`.              |
| `currentCalendarDate`     | `string`                                       | —          | The date used to determine which week is shown on first render, in YYYY-MM-DD format.                 |
| `onSlotClick`             | `((date: string, timeSlot: TimeSlot) => void)` | —          | Called when the user clicks a time slot cell.                                                         |
| `onChange`                | `((value: string) => void)`                    | —          | Called when the user selects a date. Requires `enableSelection` to be `true`.                         |
| `onWeekDisplayChange`     | `((value: YearMonthWeekDisplay) => void)`      | —          | Called when the visible week changes due to navigation.                                               |
| `minDate`                 | `string`                                       | —          | The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `maxDate`                 | `string`                                       | —          | The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.                             |
| `disabledDates`           | `string[]`                                     | —          | Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`                                    |
| `allowDisabledSelection`  | `boolean`                                      | —          | Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable |
| `showActiveMonthDaysOnly` | `boolean`                                      | —          | Specifies if the calendar should display only dates for the selected month                            |

## Rules

-   `slots` is mandatory.
-   `startTime`/`endTime` on the component must be full hours (e.g. `"08:00"`, `"13:00"`).
