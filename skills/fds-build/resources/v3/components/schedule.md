# Schedule

Import: `import { Schedule } from "@lifesg/react-design-system/schedule"`

## Sub-components

-   `ScheduleEntityProps` — a service/resource row with its time slots
-   `ScheduleSlotProps` — a single bookable timeslot cell
-   `SchedulePopoverProps` — popover config for a slot

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

## Props — `ScheduleEntityProps`

| Prop       | Type                  | Default | Description                                                |
| ---------- | --------------------- | ------- | ---------------------------------------------------------- |
| `id` \*    | `string`              | —       | Unique identifier.                                         |
| `name` \*  | `string`              | —       | Display name shown in the column header.                   |
| `slots` \* | `ScheduleSlotProps[]` | —       | All time slots belonging to this service across all dates. |

## Props — `SchedulePopoverProps`

| Prop         | Type                                               | Default | Description                                                  |
| ------------ | -------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction type that opens the popover.                     |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | The popover body.                                            |
| `delay`      | `{ open?: number; close?: number }`                | —       | Open and close delay in milliseconds.                        |
| `offset`     | `number`                                           | —       | Distance in pixels between the slot element and the popover. |

## Props — `ScheduleProps`

| Prop                      | Type                                                          | Default | Description                                                                                                                |
| ------------------------- | ------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                                      | —       | —                                                                                                                          |
| `className`               | `string`                                                      | —       | —                                                                                                                          |
| `view`                    | `ScheduleView`                                                | "day"   | The layout view.                                                                                                           |
| `date` \*                 | `string`                                                      | —       | The currently displayed date in `YYYY-MM-DD` format. Slots are filtered to match this date in the day view.                |
| `emptyContentMessage`     | `string`                                                      | —       | Message shown inside the empty-state illustration when `serviceData` is empty.                                             |
| `serviceData` \*          | `ScheduleEntityProps[]`                                       | —       | Array of service entities to render. Each entity maps to a column in the week view, or to a carousel item in the day view. |
| `loading`                 | `boolean`                                                     | false   | When `true` the schedule renders a loading animation in place of slot content.                                             |
| `minTime`                 | `string`                                                      | "00:00" | Earliest time shown on the time axis, in `HH:mm` format.                                                                   |
| `maxTime`                 | `string`                                                      | "23:59" | Latest time shown on the time axis, in `HH:mm` format.                                                                     |
| `initialScrollTime`       | `string`                                                      | —       | Time the schedule scrolls to on first render, in `HH:mm` format.                                                           |
| `minDate`                 | `string`                                                      | —       | Earliest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                   |
| `maxDate`                 | `string`                                                      | —       | Latest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                     |
| `onPreviousDayClick` \*   | `(currentDate: string) => void`                               | —       | Called when the user navigates to the previous day.                                                                        |
| `onNextDayClick` \*       | `(currentDate: string) => void`                               | —       | Called when the user navigates to the next day.                                                                            |
| `onCalendarDateSelect` \* | `(currentDate: string) => void`                               | —       | Called when the user picks a date from the calendar popover.                                                               |
| `onTodayClick` \*         | `() => void`                                                  | —       | Called when the user clicks the "Today" button in the header.                                                              |
| `onEmptySlotClick`        | `((slot: ScheduleEmptySlotProps) => void)`                    | —       | Called when the user clicks a cell without any time slots in the day view.                                                 |
| `emptySlotPopover`        | `\| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)` | —       | When provided, a popover is attached to each empty slot in the day view instead of calling `onEmptySlotClick` directly.    |
| `blockedMessage`          | `string`                                                      | —       | Message displayed inside blocked slots.                                                                                    |
| `onClickHiddenSlots`      | `((hiddenServices: string[]) => void)`                        | —       | Called in the week view when the user clicks a cell that contains hidden overflow slots.                                   |

## Props — `ScheduleSlotProps`

| Prop            | Type                                                          | Default | Description                                                |
| --------------- | ------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| `id` \*         | `string`                                                      | —       | Unique identifier for the slot.                            |
| `startTime` \*  | `string`                                                      | —       | Slot start time in `HH:mm` format.                         |
| `endTime` \*    | `string`                                                      | —       | Slot end time in `HH:mm` format.                           |
| `status` \*     | `ScheduleCellType`                                            | —       | Visual state of the slot.                                  |
| `capacity`      | `number`                                                      | —       | Total number of bookable places in this slot.              |
| `date` \*       | `string`                                                      | —       | Date this slot belongs to in `YYYY-MM-DD` format.          |
| `booked`        | `number`                                                      | —       | Number of confirmed bookings already made for this slot.   |
| `customPopover` | `SchedulePopoverProps`                                        | —       | Attaches a popover to this slot with custom configuration. |
| `onClick`       | `\| ((data: ScheduleSlotProps, e: React.MouseEvent) => void)` | —       | Called when the user clicks this slot.                     |

## Props — `ScheduleEmptySlotProps`

| Prop           | Type     | Default | Description                                     |
| -------------- | -------- | ------- | ----------------------------------------------- |
| `startTime` \* | `string` | —       | Slot start time in `HH:mm` format.              |
| `endTime` \*   | `string` | —       | Slot end time in `HH:mm` format.                |
| `name` \*      | `string` | —       | Name of the service this empty slot belongs to. |

## Props — `ScheduleEntityProps`

| Prop       | Type                  | Default | Description                                                |
| ---------- | --------------------- | ------- | ---------------------------------------------------------- |
| `id` \*    | `string`              | —       | Unique identifier.                                         |
| `name` \*  | `string`              | —       | Display name shown in the column header.                   |
| `slots` \* | `ScheduleSlotProps[]` | —       | All time slots belonging to this service across all dates. |

## Props — `SchedulePopoverProps`

| Prop         | Type                                               | Default | Description                                                  |
| ------------ | -------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction type that opens the popover.                     |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | The popover body.                                            |
| `delay`      | `{ open?: number; close?: number }`                | —       | Open and close delay in milliseconds.                        |
| `offset`     | `number`                                           | —       | Distance in pixels between the slot element and the popover. |

## Props — `ScheduleProps`

| Prop                      | Type                                                          | Default | Description                                                                                                                |
| ------------------------- | ------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                                      | —       | —                                                                                                                          |
| `className`               | `string`                                                      | —       | —                                                                                                                          |
| `view`                    | `ScheduleView`                                                | "day"   | The layout view.                                                                                                           |
| `date` \*                 | `string`                                                      | —       | The currently displayed date in `YYYY-MM-DD` format. Slots are filtered to match this date in the day view.                |
| `emptyContentMessage`     | `string`                                                      | —       | Message shown inside the empty-state illustration when `serviceData` is empty.                                             |
| `serviceData` \*          | `ScheduleEntityProps[]`                                       | —       | Array of service entities to render. Each entity maps to a column in the week view, or to a carousel item in the day view. |
| `loading`                 | `boolean`                                                     | false   | When `true` the schedule renders a loading animation in place of slot content.                                             |
| `minTime`                 | `string`                                                      | "00:00" | Earliest time shown on the time axis, in `HH:mm` format.                                                                   |
| `maxTime`                 | `string`                                                      | "23:59" | Latest time shown on the time axis, in `HH:mm` format.                                                                     |
| `initialScrollTime`       | `string`                                                      | —       | Time the schedule scrolls to on first render, in `HH:mm` format.                                                           |
| `minDate`                 | `string`                                                      | —       | Earliest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                   |
| `maxDate`                 | `string`                                                      | —       | Latest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                     |
| `onPreviousDayClick` \*   | `(currentDate: string) => void`                               | —       | Called when the user navigates to the previous day.                                                                        |
| `onNextDayClick` \*       | `(currentDate: string) => void`                               | —       | Called when the user navigates to the next day.                                                                            |
| `onCalendarDateSelect` \* | `(currentDate: string) => void`                               | —       | Called when the user picks a date from the calendar popover.                                                               |
| `onTodayClick` \*         | `() => void`                                                  | —       | Called when the user clicks the "Today" button in the header.                                                              |
| `onEmptySlotClick`        | `((slot: ScheduleEmptySlotProps) => void)`                    | —       | Called when the user clicks a cell without any time slots in the day view.                                                 |
| `emptySlotPopover`        | `\| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)` | —       | When provided, a popover is attached to each empty slot in the day view instead of calling `onEmptySlotClick` directly.    |
| `blockedMessage`          | `string`                                                      | —       | Message displayed inside blocked slots.                                                                                    |
| `onClickHiddenSlots`      | `((hiddenServices: string[]) => void)`                        | —       | Called in the week view when the user clicks a cell that contains hidden overflow slots.                                   |

## Props — `ScheduleSlotProps`

| Prop            | Type                                                          | Default | Description                                                |
| --------------- | ------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| `id` \*         | `string`                                                      | —       | Unique identifier for the slot.                            |
| `startTime` \*  | `string`                                                      | —       | Slot start time in `HH:mm` format.                         |
| `endTime` \*    | `string`                                                      | —       | Slot end time in `HH:mm` format.                           |
| `status` \*     | `ScheduleCellType`                                            | —       | Visual state of the slot.                                  |
| `capacity`      | `number`                                                      | —       | Total number of bookable places in this slot.              |
| `date` \*       | `string`                                                      | —       | Date this slot belongs to in `YYYY-MM-DD` format.          |
| `booked`        | `number`                                                      | —       | Number of confirmed bookings already made for this slot.   |
| `customPopover` | `SchedulePopoverProps`                                        | —       | Attaches a popover to this slot with custom configuration. |
| `onClick`       | `\| ((data: ScheduleSlotProps, e: React.MouseEvent) => void)` | —       | Called when the user clicks this slot.                     |

## Props — `ScheduleEmptySlotProps`

| Prop           | Type     | Default | Description                                     |
| -------------- | -------- | ------- | ----------------------------------------------- |
| `startTime` \* | `string` | —       | Slot start time in `HH:mm` format.              |
| `endTime` \*   | `string` | —       | Slot end time in `HH:mm` format.                |
| `name` \*      | `string` | —       | Name of the service this empty slot belongs to. |

## Props — `ScheduleEntityProps`

| Prop       | Type                  | Default | Description                                                |
| ---------- | --------------------- | ------- | ---------------------------------------------------------- |
| `id` \*    | `string`              | —       | Unique identifier.                                         |
| `name` \*  | `string`              | —       | Display name shown in the column header.                   |
| `slots` \* | `ScheduleSlotProps[]` | —       | All time slots belonging to this service across all dates. |

## Props — `SchedulePopoverProps`

| Prop         | Type                                               | Default | Description                                                  |
| ------------ | -------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction type that opens the popover.                     |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | The popover body.                                            |
| `delay`      | `{ open?: number; close?: number }`                | —       | Open and close delay in milliseconds.                        |
| `offset`     | `number`                                           | —       | Distance in pixels between the slot element and the popover. |

## Props — `ScheduleProps`

| Prop                      | Type                                                          | Default | Description                                                                                                                |
| ------------------------- | ------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                                      | —       | —                                                                                                                          |
| `className`               | `string`                                                      | —       | —                                                                                                                          |
| `view`                    | `ScheduleView`                                                | "day"   | The layout view.                                                                                                           |
| `date` \*                 | `string`                                                      | —       | The currently displayed date in `YYYY-MM-DD` format. Slots are filtered to match this date in the day view.                |
| `emptyContentMessage`     | `string`                                                      | —       | Message shown inside the empty-state illustration when `serviceData` is empty.                                             |
| `serviceData` \*          | `ScheduleEntityProps[]`                                       | —       | Array of service entities to render. Each entity maps to a column in the week view, or to a carousel item in the day view. |
| `loading`                 | `boolean`                                                     | false   | When `true` the schedule renders a loading animation in place of slot content.                                             |
| `minTime`                 | `string`                                                      | "00:00" | Earliest time shown on the time axis, in `HH:mm` format.                                                                   |
| `maxTime`                 | `string`                                                      | "23:59" | Latest time shown on the time axis, in `HH:mm` format.                                                                     |
| `initialScrollTime`       | `string`                                                      | —       | Time the schedule scrolls to on first render, in `HH:mm` format.                                                           |
| `minDate`                 | `string`                                                      | —       | Earliest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                   |
| `maxDate`                 | `string`                                                      | —       | Latest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                     |
| `onPreviousDayClick` \*   | `(currentDate: string) => void`                               | —       | Called when the user navigates to the previous day.                                                                        |
| `onNextDayClick` \*       | `(currentDate: string) => void`                               | —       | Called when the user navigates to the next day.                                                                            |
| `onCalendarDateSelect` \* | `(currentDate: string) => void`                               | —       | Called when the user picks a date from the calendar popover.                                                               |
| `onTodayClick` \*         | `() => void`                                                  | —       | Called when the user clicks the "Today" button in the header.                                                              |
| `onEmptySlotClick`        | `((slot: ScheduleEmptySlotProps) => void)`                    | —       | Called when the user clicks a cell without any time slots in the day view.                                                 |
| `emptySlotPopover`        | `\| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)` | —       | When provided, a popover is attached to each empty slot in the day view instead of calling `onEmptySlotClick` directly.    |
| `blockedMessage`          | `string`                                                      | —       | Message displayed inside blocked slots.                                                                                    |
| `onClickHiddenSlots`      | `((hiddenServices: string[]) => void)`                        | —       | Called in the week view when the user clicks a cell that contains hidden overflow slots.                                   |

## Props — `ScheduleSlotProps`

| Prop            | Type                                                          | Default | Description                                                |
| --------------- | ------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| `id` \*         | `string`                                                      | —       | Unique identifier for the slot.                            |
| `startTime` \*  | `string`                                                      | —       | Slot start time in `HH:mm` format.                         |
| `endTime` \*    | `string`                                                      | —       | Slot end time in `HH:mm` format.                           |
| `status` \*     | `ScheduleCellType`                                            | —       | Visual state of the slot.                                  |
| `capacity`      | `number`                                                      | —       | Total number of bookable places in this slot.              |
| `date` \*       | `string`                                                      | —       | Date this slot belongs to in `YYYY-MM-DD` format.          |
| `booked`        | `number`                                                      | —       | Number of confirmed bookings already made for this slot.   |
| `customPopover` | `SchedulePopoverProps`                                        | —       | Attaches a popover to this slot with custom configuration. |
| `onClick`       | `\| ((data: ScheduleSlotProps, e: React.MouseEvent) => void)` | —       | Called when the user clicks this slot.                     |

## Props — `ScheduleEmptySlotProps`

| Prop           | Type     | Default | Description                                     |
| -------------- | -------- | ------- | ----------------------------------------------- |
| `startTime` \* | `string` | —       | Slot start time in `HH:mm` format.              |
| `endTime` \*   | `string` | —       | Slot end time in `HH:mm` format.                |
| `name` \*      | `string` | —       | Name of the service this empty slot belongs to. |

## Props — `ScheduleEntityProps`

| Prop       | Type                  | Default | Description                                                |
| ---------- | --------------------- | ------- | ---------------------------------------------------------- |
| `id` \*    | `string`              | —       | Unique identifier.                                         |
| `name` \*  | `string`              | —       | Display name shown in the column header.                   |
| `slots` \* | `ScheduleSlotProps[]` | —       | All time slots belonging to this service across all dates. |

## Props — `SchedulePopoverProps`

| Prop         | Type                                               | Default | Description                                                  |
| ------------ | -------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction type that opens the popover.                     |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | The popover body.                                            |
| `delay`      | `{ open?: number; close?: number }`                | —       | Open and close delay in milliseconds.                        |
| `offset`     | `number`                                           | —       | Distance in pixels between the slot element and the popover. |

## Props — `ScheduleProps`

| Prop                      | Type                                                          | Default | Description                                                                                                                |
| ------------------------- | ------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                                      | —       | —                                                                                                                          |
| `className`               | `string`                                                      | —       | —                                                                                                                          |
| `view`                    | `ScheduleView`                                                | "day"   | The layout view.                                                                                                           |
| `date` \*                 | `string`                                                      | —       | The currently displayed date in `YYYY-MM-DD` format. Slots are filtered to match this date in the day view.                |
| `emptyContentMessage`     | `string`                                                      | —       | Message shown inside the empty-state illustration when `serviceData` is empty.                                             |
| `serviceData` \*          | `ScheduleEntityProps[]`                                       | —       | Array of service entities to render. Each entity maps to a column in the week view, or to a carousel item in the day view. |
| `loading`                 | `boolean`                                                     | false   | When `true` the schedule renders a loading animation in place of slot content.                                             |
| `minTime`                 | `string`                                                      | "00:00" | Earliest time shown on the time axis, in `HH:mm` format.                                                                   |
| `maxTime`                 | `string`                                                      | "23:59" | Latest time shown on the time axis, in `HH:mm` format.                                                                     |
| `initialScrollTime`       | `string`                                                      | —       | Time the schedule scrolls to on first render, in `HH:mm` format.                                                           |
| `minDate`                 | `string`                                                      | —       | Earliest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                   |
| `maxDate`                 | `string`                                                      | —       | Latest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                     |
| `onPreviousDayClick` \*   | `(currentDate: string) => void`                               | —       | Called when the user navigates to the previous day.                                                                        |
| `onNextDayClick` \*       | `(currentDate: string) => void`                               | —       | Called when the user navigates to the next day.                                                                            |
| `onCalendarDateSelect` \* | `(currentDate: string) => void`                               | —       | Called when the user picks a date from the calendar popover.                                                               |
| `onTodayClick` \*         | `() => void`                                                  | —       | Called when the user clicks the "Today" button in the header.                                                              |
| `onEmptySlotClick`        | `((slot: ScheduleEmptySlotProps) => void)`                    | —       | Called when the user clicks a cell without any time slots in the day view.                                                 |
| `emptySlotPopover`        | `\| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)` | —       | When provided, a popover is attached to each empty slot in the day view instead of calling `onEmptySlotClick` directly.    |
| `blockedMessage`          | `string`                                                      | —       | Message displayed inside blocked slots.                                                                                    |
| `onClickHiddenSlots`      | `((hiddenServices: string[]) => void)`                        | —       | Called in the week view when the user clicks a cell that contains hidden overflow slots.                                   |

## Props — `ScheduleSlotProps`

| Prop            | Type                                                          | Default | Description                                                |
| --------------- | ------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| `id` \*         | `string`                                                      | —       | Unique identifier for the slot.                            |
| `startTime` \*  | `string`                                                      | —       | Slot start time in `HH:mm` format.                         |
| `endTime` \*    | `string`                                                      | —       | Slot end time in `HH:mm` format.                           |
| `status` \*     | `ScheduleCellType`                                            | —       | Visual state of the slot.                                  |
| `capacity`      | `number`                                                      | —       | Total number of bookable places in this slot.              |
| `date` \*       | `string`                                                      | —       | Date this slot belongs to in `YYYY-MM-DD` format.          |
| `booked`        | `number`                                                      | —       | Number of confirmed bookings already made for this slot.   |
| `customPopover` | `SchedulePopoverProps`                                        | —       | Attaches a popover to this slot with custom configuration. |
| `onClick`       | `\| ((data: ScheduleSlotProps, e: React.MouseEvent) => void)` | —       | Called when the user clicks this slot.                     |

## Props — `ScheduleEmptySlotProps`

| Prop           | Type     | Default | Description                                     |
| -------------- | -------- | ------- | ----------------------------------------------- |
| `startTime` \* | `string` | —       | Slot start time in `HH:mm` format.              |
| `endTime` \*   | `string` | —       | Slot end time in `HH:mm` format.                |
| `name` \*      | `string` | —       | Name of the service this empty slot belongs to. |

## Props — `ScheduleEntityProps`

| Prop       | Type                  | Default | Description                                                |
| ---------- | --------------------- | ------- | ---------------------------------------------------------- |
| `id` \*    | `string`              | —       | Unique identifier.                                         |
| `name` \*  | `string`              | —       | Display name shown in the column header.                   |
| `slots` \* | `ScheduleSlotProps[]` | —       | All time slots belonging to this service across all dates. |

## Props — `SchedulePopoverProps`

| Prop         | Type                                               | Default | Description                                                  |
| ------------ | -------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction type that opens the popover.                     |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | The popover body.                                            |
| `delay`      | `{ open?: number; close?: number }`                | —       | Open and close delay in milliseconds.                        |
| `offset`     | `number`                                           | —       | Distance in pixels between the slot element and the popover. |

## Props — `ScheduleProps`

| Prop                      | Type                                                          | Default | Description                                                                                                                |
| ------------------------- | ------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                                      | —       | —                                                                                                                          |
| `className`               | `string`                                                      | —       | —                                                                                                                          |
| `view`                    | `ScheduleView`                                                | "day"   | The layout view.                                                                                                           |
| `date` \*                 | `string`                                                      | —       | The currently displayed date in `YYYY-MM-DD` format. Slots are filtered to match this date in the day view.                |
| `emptyContentMessage`     | `string`                                                      | —       | Message shown inside the empty-state illustration when `serviceData` is empty.                                             |
| `serviceData` \*          | `ScheduleEntityProps[]`                                       | —       | Array of service entities to render. Each entity maps to a column in the week view, or to a carousel item in the day view. |
| `loading`                 | `boolean`                                                     | false   | When `true` the schedule renders a loading animation in place of slot content.                                             |
| `minTime`                 | `string`                                                      | "00:00" | Earliest time shown on the time axis, in `HH:mm` format.                                                                   |
| `maxTime`                 | `string`                                                      | "23:59" | Latest time shown on the time axis, in `HH:mm` format.                                                                     |
| `initialScrollTime`       | `string`                                                      | —       | Time the schedule scrolls to on first render, in `HH:mm` format.                                                           |
| `minDate`                 | `string`                                                      | —       | Earliest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                   |
| `maxDate`                 | `string`                                                      | —       | Latest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                     |
| `onPreviousDayClick` \*   | `(currentDate: string) => void`                               | —       | Called when the user navigates to the previous day.                                                                        |
| `onNextDayClick` \*       | `(currentDate: string) => void`                               | —       | Called when the user navigates to the next day.                                                                            |
| `onCalendarDateSelect` \* | `(currentDate: string) => void`                               | —       | Called when the user picks a date from the calendar popover.                                                               |
| `onTodayClick` \*         | `() => void`                                                  | —       | Called when the user clicks the "Today" button in the header.                                                              |
| `onEmptySlotClick`        | `((slot: ScheduleEmptySlotProps) => void)`                    | —       | Called when the user clicks a cell without any time slots in the day view.                                                 |
| `emptySlotPopover`        | `\| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)` | —       | When provided, a popover is attached to each empty slot in the day view instead of calling `onEmptySlotClick` directly.    |
| `blockedMessage`          | `string`                                                      | —       | Message displayed inside blocked slots.                                                                                    |
| `onClickHiddenSlots`      | `((hiddenServices: string[]) => void)`                        | —       | Called in the week view when the user clicks a cell that contains hidden overflow slots.                                   |

## Props — `ScheduleSlotProps`

| Prop            | Type                                                          | Default | Description                                                |
| --------------- | ------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| `id` \*         | `string`                                                      | —       | Unique identifier for the slot.                            |
| `startTime` \*  | `string`                                                      | —       | Slot start time in `HH:mm` format.                         |
| `endTime` \*    | `string`                                                      | —       | Slot end time in `HH:mm` format.                           |
| `status` \*     | `ScheduleCellType`                                            | —       | Visual state of the slot.                                  |
| `capacity`      | `number`                                                      | —       | Total number of bookable places in this slot.              |
| `date` \*       | `string`                                                      | —       | Date this slot belongs to in `YYYY-MM-DD` format.          |
| `booked`        | `number`                                                      | —       | Number of confirmed bookings already made for this slot.   |
| `customPopover` | `SchedulePopoverProps`                                        | —       | Attaches a popover to this slot with custom configuration. |
| `onClick`       | `\| ((data: ScheduleSlotProps, e: React.MouseEvent) => void)` | —       | Called when the user clicks this slot.                     |

## Props — `ScheduleEmptySlotProps`

| Prop           | Type     | Default | Description                                     |
| -------------- | -------- | ------- | ----------------------------------------------- |
| `startTime` \* | `string` | —       | Slot start time in `HH:mm` format.              |
| `endTime` \*   | `string` | —       | Slot end time in `HH:mm` format.                |
| `name` \*      | `string` | —       | Name of the service this empty slot belongs to. |

## Props — `ScheduleEntityProps`

| Prop       | Type                  | Default | Description                                                |
| ---------- | --------------------- | ------- | ---------------------------------------------------------- |
| `id` \*    | `string`              | —       | Unique identifier.                                         |
| `name` \*  | `string`              | —       | Display name shown in the column header.                   |
| `slots` \* | `ScheduleSlotProps[]` | —       | All time slots belonging to this service across all dates. |

## Props — `SchedulePopoverProps`

| Prop         | Type                                               | Default | Description                                                  |
| ------------ | -------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction type that opens the popover.                     |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | The popover body.                                            |
| `delay`      | `{ open?: number; close?: number }`                | —       | Open and close delay in milliseconds.                        |
| `offset`     | `number`                                           | —       | Distance in pixels between the slot element and the popover. |

## Props — `ScheduleProps`

| Prop                      | Type                                                          | Default | Description                                                                                                                |
| ------------------------- | ------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                      | `string`                                                      | —       | —                                                                                                                          |
| `className`               | `string`                                                      | —       | —                                                                                                                          |
| `view`                    | `ScheduleView`                                                | "day"   | The layout view.                                                                                                           |
| `date` \*                 | `string`                                                      | —       | The currently displayed date in `YYYY-MM-DD` format. Slots are filtered to match this date in the day view.                |
| `emptyContentMessage`     | `string`                                                      | —       | Message shown inside the empty-state illustration when `serviceData` is empty.                                             |
| `serviceData` \*          | `ScheduleEntityProps[]`                                       | —       | Array of service entities to render. Each entity maps to a column in the week view, or to a carousel item in the day view. |
| `loading`                 | `boolean`                                                     | false   | When `true` the schedule renders a loading animation in place of slot content.                                             |
| `minTime`                 | `string`                                                      | "00:00" | Earliest time shown on the time axis, in `HH:mm` format.                                                                   |
| `maxTime`                 | `string`                                                      | "23:59" | Latest time shown on the time axis, in `HH:mm` format.                                                                     |
| `initialScrollTime`       | `string`                                                      | —       | Time the schedule scrolls to on first render, in `HH:mm` format.                                                           |
| `minDate`                 | `string`                                                      | —       | Earliest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                   |
| `maxDate`                 | `string`                                                      | —       | Latest selectable date in the calendar picker, in `YYYY-MM-DD` format.                                                     |
| `onPreviousDayClick` \*   | `(currentDate: string) => void`                               | —       | Called when the user navigates to the previous day.                                                                        |
| `onNextDayClick` \*       | `(currentDate: string) => void`                               | —       | Called when the user navigates to the next day.                                                                            |
| `onCalendarDateSelect` \* | `(currentDate: string) => void`                               | —       | Called when the user picks a date from the calendar popover.                                                               |
| `onTodayClick` \*         | `() => void`                                                  | —       | Called when the user clicks the "Today" button in the header.                                                              |
| `onEmptySlotClick`        | `((slot: ScheduleEmptySlotProps) => void)`                    | —       | Called when the user clicks a cell without any time slots in the day view.                                                 |
| `emptySlotPopover`        | `\| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)` | —       | When provided, a popover is attached to each empty slot in the day view instead of calling `onEmptySlotClick` directly.    |
| `blockedMessage`          | `string`                                                      | —       | Message displayed inside blocked slots.                                                                                    |
| `onClickHiddenSlots`      | `((hiddenServices: string[]) => void)`                        | —       | Called in the week view when the user clicks a cell that contains hidden overflow slots.                                   |

## Props — `ScheduleSlotProps`

| Prop            | Type                                                          | Default | Description                                                |
| --------------- | ------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| `id` \*         | `string`                                                      | —       | Unique identifier for the slot.                            |
| `startTime` \*  | `string`                                                      | —       | Slot start time in `HH:mm` format.                         |
| `endTime` \*    | `string`                                                      | —       | Slot end time in `HH:mm` format.                           |
| `status` \*     | `ScheduleCellType`                                            | —       | Visual state of the slot.                                  |
| `capacity`      | `number`                                                      | —       | Total number of bookable places in this slot.              |
| `date` \*       | `string`                                                      | —       | Date this slot belongs to in `YYYY-MM-DD` format.          |
| `booked`        | `number`                                                      | —       | Number of confirmed bookings already made for this slot.   |
| `customPopover` | `SchedulePopoverProps`                                        | —       | Attaches a popover to this slot with custom configuration. |
| `onClick`       | `\| ((data: ScheduleSlotProps, e: React.MouseEvent) => void)` | —       | Called when the user clicks this slot.                     |

## Props — `ScheduleEmptySlotProps`

| Prop           | Type     | Default | Description                                     |
| -------------- | -------- | ------- | ----------------------------------------------- |
| `startTime` \* | `string` | —       | Slot start time in `HH:mm` format.              |
| `endTime` \*   | `string` | —       | Slot end time in `HH:mm` format.                |
| `name` \*      | `string` | —       | Name of the service this empty slot belongs to. |

## Rules

-   `date`, `serviceData`, `onPreviousDayClick`, and `onNextDayClick` are mandatory.
-   Avoid combining a per-slot `onClick` with `customPopover` using `trigger: "click"` on the same slot — they conflict.
