# TimeSlotWeekView

Import: `import { TimeSlotWeekView } from "@lifesg/react-design-system/time-slot-week-view"`

## Sub-components

-   `YearMonthWeekDisplay` — returned by `onWeekDisplayChange`
-   `TimeSlot` — shape of each slot in the `slots` map
-   `TimeSlotBarStyleAttributes` — visual styling for a slot

## Props

| Prop                   | Type                                         | Default | Description                                                                                        |
| ---------------------- | -------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| `slots` \*             | `{ [date: string]: TimeSlot[] }`             | —       | Time slots keyed by date (`YYYY-MM-DD`); falls back to disabled pattern if not provided for a date |
| `className`            | `string`                                     | —       | Class selector for the component                                                                   |
| `data-testid`          | `string`                                     | —       | The test identifier for the component                                                              |
| `id`                   | `string`                                     | —       | The unique identifier for the component                                                            |
| `minDate`              | `string`                                     | —       | Minimum selectable date (`YYYY-MM-DD`, inclusive)                                                  |
| `maxDate`              | `string`                                     | —       | Maximum selectable date (`YYYY-MM-DD`, inclusive)                                                  |
| `disabledDates`        | `string[]`                                   | —       | Dates to disable (`YYYY-MM-DD`)                                                                    |
| `value`                | `string`                                     | —       | Currently selected date (`YYYY-MM-DD`)                                                             |
| `currentCalendarDate`  | `string`                                     | —       | Initial date visible in the week view (`YYYY-MM-DD`)                                               |
| `showNavigationHeader` | `boolean`                                    | `true`  | Shows month/year dropdown and navigation arrows                                                    |
| `enableSelection`      | `boolean`                                    | `true`  | Specifies if a date can be selected                                                                |
| `onChange`             | `(value: string) => void`                    | —       | Called when the user selects a day; returns `YYYY-MM-DD`                                           |
| `onWeekDisplayChange`  | `(value: YearMonthWeekDisplay) => void`      | —       | Called when the visible week changes                                                               |
| `onSlotClick`          | `(date: string, timeSlot: TimeSlot) => void` | —       | Called when a timeslot is clicked                                                                  |

`*` = required

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

## Rules

-   `slots` is mandatory.
-   `TimeSlot` minutes must be in 15-minute blocks (00, 15, 30, 45).
-   `TimeSlotBarStyleAttributes` uses `color`/`secondaryColor` — not `backgroundColor`/`backgroundColor2` as in `TimeSlotBarWeek`.
