# TimeSlotBar

Import: `import { TimeSlotBar } from "@lifesg/react-design-system/time-slot-bar"`

## Props

| Prop                     | Type                           | Default     | Description                                                                 |
| ------------------------ | ------------------------------ | ----------- | --------------------------------------------------------------------------- |
| `slots` \*               | `TimeSlot[]`                   | —           | Time slots for the bar                                                      |
| `startTime` \*           | `string`                       | —           | Start time of the bar in `HH:mm` (minutes in 15-min blocks: 00, 15, 30, 45) |
| `endTime` \*             | `string`                       | —           | End time of the bar in `HH:mm` (minutes in 15-min blocks)                   |
| `onSlotClick` \*         | `(timeSlot: TimeSlot) => void` | —           | Called when a time slot is selected                                         |
| `variant`                | `"default" \| "minified"`      | `"default"` | Display variant                                                             |
| `styleAttributes`        | `TimeSlotBarStyleAttributes`   | —           | Default style when no slot is specified for a time period                   |
| `initialScrollTime`      | `string`                       | —           | Initial scroll offset time in `HH:mm`                                       |
| `roundInitialScrollTime` | `boolean`                      | `true`      | Rounds `initialScrollTime` to the nearest 30-min interval                   |
| `onClick`                | `() => void`                   | —           | Called when the bar is selected (useful when no slots specified)            |
| `className`              | `string`                       | —           | Class selector of the component                                             |
| `data-testid`            | `string`                       | —           | Test identifier of the component                                            |

`*` = required

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
