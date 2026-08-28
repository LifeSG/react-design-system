# Schedule

Import: `import { Schedule } from "@lifesg/react-design-system/schedule"`

## Sub-components

-   `ScheduleEntityProps` — a service/resource row with its time slots
-   `ScheduleSlotProps` — a single bookable timeslot cell
-   `SchedulePopoverProps` — popover config for a slot

## Props

| Prop                    | Type                                                     | Default         | Description                                                                                |
| ----------------------- | -------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------ |
| `date` \*               | `string`                                                 | —               | Current displayed date (`YYYY-MM-DD`)                                                      |
| `serviceData` \*        | `ScheduleEntityProps[]`                                  | —               | Data for each service row and its time slots                                               |
| `onPreviousDayClick` \* | `(currentDate: string) => void`                          | —               | Called when the left arrow on the date navigator is clicked                                |
| `onNextDayClick` \*     | `(currentDate: string) => void`                          | —               | Called when the right arrow on the date navigator is clicked                               |
| `id`                    | `string`                                                 | —               | The identifier of the component                                                            |
| `className`             | `string`                                                 | —               | The class selector of the component                                                        |
| `data-testid`           | `string`                                                 | —               | The test identifier of the component                                                       |
| `view`                  | `"day" \| "week"`                                        | `"day"`         | The view mode for the schedule component                                                   |
| `emptyContentMessage`   | `string`                                                 | —               | Message shown when `serviceData` has no rows                                               |
| `loading`               | `boolean`                                                | `false`         | Shows a loading animation when true                                                        |
| `minTime`               | `string`                                                 | `"00:00"`       | Start time of the schedule (`HH:mm`)                                                       |
| `maxTime`               | `string`                                                 | `"23:59"`       | End time of the schedule (`HH:mm`)                                                         |
| `initialScrollTime`     | `string`                                                 | —               | Initial scroll position time (`HH:mm`); defaults to `minTime`                              |
| `minDate`               | `string`                                                 | —               | Minimum navigable date (`YYYY-MM-DD`, inclusive)                                           |
| `maxDate`               | `string`                                                 | —               | Maximum navigable date (`YYYY-MM-DD`, inclusive)                                           |
| `blockedMessage`        | `string`                                                 | `"Unavailable"` | Custom text for blocked slots; truncated with ellipsis if slot is too narrow               |
| `onCalendarDateSelect`  | `(currentDate: string) => void`                          | —               | Called when a date is picked from the dropdown calendar                                    |
| `onTodayClick`          | `() => void`                                             | —               | Called when the Today button is clicked                                                    |
| `onSlotClick`           | `(data: ScheduleSlotProps, e: React.MouseEvent) => void` | —               | Called when a timeslot cell is clicked                                                     |
| `onClickHiddenSlots`    | `(hiddenServices: string[]) => void`                     | —               | Called in week view when the hidden-slots button is clicked; provides hidden service names |

`*` = required

## ScheduleEntityProps

| Prop       | Type                  | Description                          |
| ---------- | --------------------- | ------------------------------------ |
| `name` \*  | `string`              | The name of the service or resource  |
| `slots` \* | `ScheduleSlotProps[]` | Array of time slots for this service |
| `id`       | `string`              | Identifier for the service entity    |

## ScheduleSlotProps

| Prop            | Type                                                     | Description                                                 |
| --------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| `startTime` \*  | `string`                                                 | Start time (`HH:mm`)                                        |
| `endTime` \*    | `string`                                                 | End time (`HH:mm`)                                          |
| `status` \*     | `"booked" \| "available" \| "blocked" \| "pending"`      | Determines slot visual style                                |
| `date` \*       | `string`                                                 | Date for this timeslot (`YYYY-MM-DD`)                       |
| `id`            | `string`                                                 | Identifier; passed to `onClick` and `onSlotClick` callbacks |
| `capacity`      | `number`                                                 | Maximum capacity for this timeslot                          |
| `booked`        | `number`                                                 | Number of current bookings                                  |
| `customPopover` | `SchedulePopoverProps`                                   | Popover config for the slot                                 |
| `onClick`       | `(data: ScheduleSlotProps, e: React.MouseEvent) => void` | Per-slot click callback                                     |

## SchedulePopoverProps

| Prop         | Type                                               | Default | Description                                        |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------- |
| `trigger` \* | `"click" \| "hover"`                               | —       | Interaction that triggers the popover              |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Content rendered in the popover                    |
| `delay`      | `{ open?: number; close?: number }`                | —       | Hover delay in milliseconds (`hover` trigger only) |
| `offset`     | `number`                                           | —       | Offset in px applied to the popover                |

## Rules

-   `date`, `serviceData`, `onPreviousDayClick`, and `onNextDayClick` are mandatory.
-   Avoid combining a per-slot `onClick` with `customPopover` using `trigger: "click"` on the same slot — they conflict.
