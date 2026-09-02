# TimeSlotBar

Import: `import { TimeSlotBar } from "@lifesg/react-design-system/time-slot-bar"`

## TimeSlot

| Prop              | Type                         | Default | Description                                |
| ----------------- | ---------------------------- | ------- | ------------------------------------------ |
| `id` \*           | `string`                     | —       | Unique identifier of the slot              |
| `startTime` \*    | `string`                     | —       | Slot start time in `HH:mm` (15-min blocks) |
| `endTime` \*      | `string`                     | —       | Slot end time in `HH:mm` (15-min blocks)   |
| `styleAttributes` | `TimeSlotBarStyleAttributes` | —       | Styling for this slot                      |
| `label`           | `string`                     | —       | Text content within the slot cell          |
| `clickable`       | `boolean`                    | —       | Whether the slot cell is clickable         |

## TimeSlotBarStyleAttributes

| Prop                    | Type                     | Default     | Description                                                            |
| ----------------------- | ------------------------ | ----------- | ---------------------------------------------------------------------- |
| `backgroundColor` \*    | `string`                 | —           | Slot color                                                             |
| `styleType`             | `"default" \| "stripes"` | `"default"` | Style type of the slot                                                 |
| `backgroundColor2`      | `string`                 | —           | Secondary color; used with `styleType="stripes"`                       |
| `hoverBackgroundColor`  | `string`                 | —           | Background on hover; only when `clickable`                             |
| `hoverBackgroundColor2` | `string`                 | —           | Secondary hover color for `styleType="stripes"`; only when `clickable` |

## Props — `TimeSlotBarRef`

| Prop             | Type         | Default | Description                                                                                     |
| ---------------- | ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the bar back to `initialScrollTime`, or to the start if `initialScrollTime` is not set. |

## Props — `TimeSlotBarProps`

| Prop                     | Type                           | Default   | Description                                                                                                                                                                          |
| ------------------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                       | —         | —                                                                                                                                                                                    |
| `variant`                | `TimeSlotBarVariant`           | "default" | Visual density of the bar.                                                                                                                                                           |
| `startTime` \*           | `string`                       | —         | Start of the visible time range in `HH:mm` format.                                                                                                                                   |
| `endTime` \*             | `string`                       | —         | End of the visible time range in `HH:mm` format.                                                                                                                                     |
| `initialScrollTime`      | `string`                       | —         | Time position the bar scrolls to on mount, in `HH:mm` format. When `roundInitialScrollTime` is `true`, the value is rounded down to the nearest 30-minute interval before scrolling. |
| `slots` \*               | `TimeSlot[]`                   | —         | The individual time slots shown within the configured time range.                                                                                                                    |
| `onSlotClick` \*         | `(timeSlot: TimeSlot) => void` | —         | Called when the user clicks a slot cell.                                                                                                                                             |
| `onClick`                | `() => void`                   | —         | Called when the user clicks an empty slot.                                                                                                                                           |
| `styleAttributes`        | `TimeSlotBarStyleAttributes`   | —         | Styling applied to the bar background region not covered by any slot. Required to make the background region visible or interactive.                                                 |
| `roundInitialScrollTime` | `boolean`                      | true      | When `true`, `initialScrollTime` is rounded down to the nearest 30-minute interval before the bar scrolls to it.                                                                     |

## Props — `TimeSlot`

| Prop                 | Type                         | Default | Description                                                                                                      |
| -------------------- | ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `id` \*              | `string`                     | —       | Unique identifier for this slot.                                                                                 |
| `startTime` \*       | `string`                     | —       | Start boundary of the slot in `HH:mm` format.                                                                    |
| `endTime` \*         | `string`                     | —       | End boundary of the slot in `HH:mm` format.                                                                      |
| `label`              | `string`                     | —       | Text rendered inside the slot cell. Replaced with `"..."` when the cell is too narrow to display the full label. |
| `clickable`          | `boolean`                    | true    | Whether the slot responds to clicks.                                                                             |
| `styleAttributes` \* | `TimeSlotBarStyleAttributes` | —       | Visual styling for the slot.                                                                                     |
| `ariaLabel`          | `string`                     | —       | Accessible label for this slot.                                                                                  |

## Props — `TimeSlotBarRef`

| Prop             | Type         | Default | Description                                                                                     |
| ---------------- | ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the bar back to `initialScrollTime`, or to the start if `initialScrollTime` is not set. |

## Props — `TimeSlotBarProps`

| Prop                     | Type                           | Default   | Description                                                                                                                                                                          |
| ------------------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                       | —         | —                                                                                                                                                                                    |
| `variant`                | `TimeSlotBarVariant`           | "default" | Visual density of the bar.                                                                                                                                                           |
| `startTime` \*           | `string`                       | —         | Start of the visible time range in `HH:mm` format.                                                                                                                                   |
| `endTime` \*             | `string`                       | —         | End of the visible time range in `HH:mm` format.                                                                                                                                     |
| `initialScrollTime`      | `string`                       | —         | Time position the bar scrolls to on mount, in `HH:mm` format. When `roundInitialScrollTime` is `true`, the value is rounded down to the nearest 30-minute interval before scrolling. |
| `slots` \*               | `TimeSlot[]`                   | —         | The individual time slots shown within the configured time range.                                                                                                                    |
| `onSlotClick` \*         | `(timeSlot: TimeSlot) => void` | —         | Called when the user clicks a slot cell.                                                                                                                                             |
| `onClick`                | `() => void`                   | —         | Called when the user clicks an empty slot.                                                                                                                                           |
| `styleAttributes`        | `TimeSlotBarStyleAttributes`   | —         | Styling applied to the bar background region not covered by any slot. Required to make the background region visible or interactive.                                                 |
| `roundInitialScrollTime` | `boolean`                      | true      | When `true`, `initialScrollTime` is rounded down to the nearest 30-minute interval before the bar scrolls to it.                                                                     |

## Props — `TimeSlot`

| Prop                 | Type                         | Default | Description                                                                                                      |
| -------------------- | ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `id` \*              | `string`                     | —       | Unique identifier for this slot.                                                                                 |
| `startTime` \*       | `string`                     | —       | Start boundary of the slot in `HH:mm` format.                                                                    |
| `endTime` \*         | `string`                     | —       | End boundary of the slot in `HH:mm` format.                                                                      |
| `label`              | `string`                     | —       | Text rendered inside the slot cell. Replaced with `"..."` when the cell is too narrow to display the full label. |
| `clickable`          | `boolean`                    | true    | Whether the slot responds to clicks.                                                                             |
| `styleAttributes` \* | `TimeSlotBarStyleAttributes` | —       | Visual styling for the slot.                                                                                     |
| `ariaLabel`          | `string`                     | —       | Accessible label for this slot.                                                                                  |

## Props — `TimeSlotBarRef`

| Prop             | Type         | Default | Description                                                                                     |
| ---------------- | ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the bar back to `initialScrollTime`, or to the start if `initialScrollTime` is not set. |

## Props — `TimeSlotBarProps`

| Prop                     | Type                           | Default   | Description                                                                                                                                                                          |
| ------------------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                       | —         | —                                                                                                                                                                                    |
| `variant`                | `TimeSlotBarVariant`           | "default" | Visual density of the bar.                                                                                                                                                           |
| `startTime` \*           | `string`                       | —         | Start of the visible time range in `HH:mm` format.                                                                                                                                   |
| `endTime` \*             | `string`                       | —         | End of the visible time range in `HH:mm` format.                                                                                                                                     |
| `initialScrollTime`      | `string`                       | —         | Time position the bar scrolls to on mount, in `HH:mm` format. When `roundInitialScrollTime` is `true`, the value is rounded down to the nearest 30-minute interval before scrolling. |
| `slots` \*               | `TimeSlot[]`                   | —         | The individual time slots shown within the configured time range.                                                                                                                    |
| `onSlotClick` \*         | `(timeSlot: TimeSlot) => void` | —         | Called when the user clicks a slot cell.                                                                                                                                             |
| `onClick`                | `() => void`                   | —         | Called when the user clicks an empty slot.                                                                                                                                           |
| `styleAttributes`        | `TimeSlotBarStyleAttributes`   | —         | Styling applied to the bar background region not covered by any slot. Required to make the background region visible or interactive.                                                 |
| `roundInitialScrollTime` | `boolean`                      | true      | When `true`, `initialScrollTime` is rounded down to the nearest 30-minute interval before the bar scrolls to it.                                                                     |

## Props — `TimeSlot`

| Prop                 | Type                         | Default | Description                                                                                                      |
| -------------------- | ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `id` \*              | `string`                     | —       | Unique identifier for this slot.                                                                                 |
| `startTime` \*       | `string`                     | —       | Start boundary of the slot in `HH:mm` format.                                                                    |
| `endTime` \*         | `string`                     | —       | End boundary of the slot in `HH:mm` format.                                                                      |
| `label`              | `string`                     | —       | Text rendered inside the slot cell. Replaced with `"..."` when the cell is too narrow to display the full label. |
| `clickable`          | `boolean`                    | true    | Whether the slot responds to clicks.                                                                             |
| `styleAttributes` \* | `TimeSlotBarStyleAttributes` | —       | Visual styling for the slot.                                                                                     |
| `ariaLabel`          | `string`                     | —       | Accessible label for this slot.                                                                                  |

## Props — `TimeSlotBarRef`

| Prop             | Type         | Default | Description                                                                                     |
| ---------------- | ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the bar back to `initialScrollTime`, or to the start if `initialScrollTime` is not set. |

## Props — `TimeSlotBarProps`

| Prop                     | Type                           | Default   | Description                                                                                                                                                                          |
| ------------------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                       | —         | —                                                                                                                                                                                    |
| `variant`                | `TimeSlotBarVariant`           | "default" | Visual density of the bar.                                                                                                                                                           |
| `startTime` \*           | `string`                       | —         | Start of the visible time range in `HH:mm` format.                                                                                                                                   |
| `endTime` \*             | `string`                       | —         | End of the visible time range in `HH:mm` format.                                                                                                                                     |
| `initialScrollTime`      | `string`                       | —         | Time position the bar scrolls to on mount, in `HH:mm` format. When `roundInitialScrollTime` is `true`, the value is rounded down to the nearest 30-minute interval before scrolling. |
| `slots` \*               | `TimeSlot[]`                   | —         | The individual time slots shown within the configured time range.                                                                                                                    |
| `onSlotClick` \*         | `(timeSlot: TimeSlot) => void` | —         | Called when the user clicks a slot cell.                                                                                                                                             |
| `onClick`                | `() => void`                   | —         | Called when the user clicks an empty slot.                                                                                                                                           |
| `styleAttributes`        | `TimeSlotBarStyleAttributes`   | —         | Styling applied to the bar background region not covered by any slot. Required to make the background region visible or interactive.                                                 |
| `roundInitialScrollTime` | `boolean`                      | true      | When `true`, `initialScrollTime` is rounded down to the nearest 30-minute interval before the bar scrolls to it.                                                                     |

## Props — `TimeSlot`

| Prop                 | Type                         | Default | Description                                                                                                      |
| -------------------- | ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `id` \*              | `string`                     | —       | Unique identifier for this slot.                                                                                 |
| `startTime` \*       | `string`                     | —       | Start boundary of the slot in `HH:mm` format.                                                                    |
| `endTime` \*         | `string`                     | —       | End boundary of the slot in `HH:mm` format.                                                                      |
| `label`              | `string`                     | —       | Text rendered inside the slot cell. Replaced with `"..."` when the cell is too narrow to display the full label. |
| `clickable`          | `boolean`                    | true    | Whether the slot responds to clicks.                                                                             |
| `styleAttributes` \* | `TimeSlotBarStyleAttributes` | —       | Visual styling for the slot.                                                                                     |
| `ariaLabel`          | `string`                     | —       | Accessible label for this slot.                                                                                  |

## Props — `TimeSlotBarRef`

| Prop             | Type         | Default | Description                                                                                     |
| ---------------- | ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the bar back to `initialScrollTime`, or to the start if `initialScrollTime` is not set. |

## Props — `TimeSlotBarProps`

| Prop                     | Type                           | Default   | Description                                                                                                                                                                          |
| ------------------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                       | —         | —                                                                                                                                                                                    |
| `variant`                | `TimeSlotBarVariant`           | "default" | Visual density of the bar.                                                                                                                                                           |
| `startTime` \*           | `string`                       | —         | Start of the visible time range in `HH:mm` format.                                                                                                                                   |
| `endTime` \*             | `string`                       | —         | End of the visible time range in `HH:mm` format.                                                                                                                                     |
| `initialScrollTime`      | `string`                       | —         | Time position the bar scrolls to on mount, in `HH:mm` format. When `roundInitialScrollTime` is `true`, the value is rounded down to the nearest 30-minute interval before scrolling. |
| `slots` \*               | `TimeSlot[]`                   | —         | The individual time slots shown within the configured time range.                                                                                                                    |
| `onSlotClick` \*         | `(timeSlot: TimeSlot) => void` | —         | Called when the user clicks a slot cell.                                                                                                                                             |
| `onClick`                | `() => void`                   | —         | Called when the user clicks an empty slot.                                                                                                                                           |
| `styleAttributes`        | `TimeSlotBarStyleAttributes`   | —         | Styling applied to the bar background region not covered by any slot. Required to make the background region visible or interactive.                                                 |
| `roundInitialScrollTime` | `boolean`                      | true      | When `true`, `initialScrollTime` is rounded down to the nearest 30-minute interval before the bar scrolls to it.                                                                     |

## Props — `TimeSlot`

| Prop                 | Type                         | Default | Description                                                                                                      |
| -------------------- | ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `id` \*              | `string`                     | —       | Unique identifier for this slot.                                                                                 |
| `startTime` \*       | `string`                     | —       | Start boundary of the slot in `HH:mm` format.                                                                    |
| `endTime` \*         | `string`                     | —       | End boundary of the slot in `HH:mm` format.                                                                      |
| `label`              | `string`                     | —       | Text rendered inside the slot cell. Replaced with `"..."` when the cell is too narrow to display the full label. |
| `clickable`          | `boolean`                    | true    | Whether the slot responds to clicks.                                                                             |
| `styleAttributes` \* | `TimeSlotBarStyleAttributes` | —       | Visual styling for the slot.                                                                                     |
| `ariaLabel`          | `string`                     | —       | Accessible label for this slot.                                                                                  |

## Props — `TimeSlotBarRef`

| Prop             | Type         | Default | Description                                                                                     |
| ---------------- | ------------ | ------- | ----------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the bar back to `initialScrollTime`, or to the start if `initialScrollTime` is not set. |

## Props — `TimeSlotBarProps`

| Prop                     | Type                           | Default   | Description                                                                                                                                                                          |
| ------------------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `className`              | `string`                       | —         | —                                                                                                                                                                                    |
| `variant`                | `TimeSlotBarVariant`           | "default" | Visual density of the bar.                                                                                                                                                           |
| `startTime` \*           | `string`                       | —         | Start of the visible time range in `HH:mm` format.                                                                                                                                   |
| `endTime` \*             | `string`                       | —         | End of the visible time range in `HH:mm` format.                                                                                                                                     |
| `initialScrollTime`      | `string`                       | —         | Time position the bar scrolls to on mount, in `HH:mm` format. When `roundInitialScrollTime` is `true`, the value is rounded down to the nearest 30-minute interval before scrolling. |
| `slots` \*               | `TimeSlot[]`                   | —         | The individual time slots shown within the configured time range.                                                                                                                    |
| `onSlotClick` \*         | `(timeSlot: TimeSlot) => void` | —         | Called when the user clicks a slot cell.                                                                                                                                             |
| `onClick`                | `() => void`                   | —         | Called when the user clicks an empty slot.                                                                                                                                           |
| `styleAttributes`        | `TimeSlotBarStyleAttributes`   | —         | Styling applied to the bar background region not covered by any slot. Required to make the background region visible or interactive.                                                 |
| `roundInitialScrollTime` | `boolean`                      | true      | When `true`, `initialScrollTime` is rounded down to the nearest 30-minute interval before the bar scrolls to it.                                                                     |

## Props — `TimeSlot`

| Prop                 | Type                         | Default | Description                                                                                                      |
| -------------------- | ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `id` \*              | `string`                     | —       | Unique identifier for this slot.                                                                                 |
| `startTime` \*       | `string`                     | —       | Start boundary of the slot in `HH:mm` format.                                                                    |
| `endTime` \*         | `string`                     | —       | End boundary of the slot in `HH:mm` format.                                                                      |
| `label`              | `string`                     | —       | Text rendered inside the slot cell. Replaced with `"..."` when the cell is too narrow to display the full label. |
| `clickable`          | `boolean`                    | true    | Whether the slot responds to clicks.                                                                             |
| `styleAttributes` \* | `TimeSlotBarStyleAttributes` | —       | Visual styling for the slot.                                                                                     |
| `ariaLabel`          | `string`                     | —       | Accessible label for this slot.                                                                                  |
