# Timetable

Import: `import { Timetable } from "@lifesg/react-design-system/timetable"`

## Props

| Prop                      | Type                            | Default   | Description                                                               |
| ------------------------- | ------------------------------- | --------- | ------------------------------------------------------------------------- |
| `date` \*                 | `string`                        | —         | Current displayed date in `YYYY-MM-DD` format                             |
| `rowData` \*              | `TimeTableRowData[]`            | —         | Data used to render each unique row                                       |
| `loading` \*              | `boolean`                       | —         | Shows loading animation while true                                        |
| `onPreviousDayClick` \*   | `(currentDate: string) => void` | —         | Called when left arrow is clicked on the date navigator                   |
| `onNextDayClick` \*       | `(currentDate: string) => void` | —         | Called when right arrow is clicked on the date navigator                  |
| `onCalendarDateSelect` \* | `(currentDate: string) => void` | —         | Called when a calendar date is picked in the dropdown                     |
| `minTime`                 | `string`                        | `"00:00"` | Start time of the timetable in `HH:mm` format                             |
| `maxTime`                 | `string`                        | `"23:00"` | End time of the timetable in `HH:mm` format                               |
| `minDate`                 | `string`                        | —         | Minimum navigation date in `YYYY-MM-DD` format (inclusive)                |
| `maxDate`                 | `string`                        | —         | Maximum navigation date in `YYYY-MM-DD` format (inclusive)                |
| `initialScrollTime`       | `string`                        | —         | Initial scroll offset time in `HH:mm`                                     |
| `roundInitialScrollTime`  | `boolean`                       | `true`    | Rounds `initialScrollTime` to the nearest 15-min grid interval            |
| `totalRecords`            | `number`                        | —         | Total record count; if omitted, the total records section is not rendered |
| `emptyContentMessage`     | `string`                        | —         | Message shown when `totalRecords=0` or `rowData=[]`                       |
| `showCurrentDateAsToday`  | `boolean`                       | —         | Shows today's date as "Today"                                             |
| `showDateAsShortForm`     | `boolean`                       | —         | Shows the date text in short form                                         |
| `onRefresh`               | `() => void`                    | —         | Called when refresh button is clicked; if omitted, button is not rendered |
| `onPage`                  | `() => void`                    | —         | Called when pagination occurs                                             |
| `id`                      | `string`                        | —         | Identifier of the component                                               |
| `className`               | `string`                        | —         | Class selector of the component                                           |
| `data-testid`             | `string`                        | —         | Test identifier of the component                                          |

`*` = required

## TimeTableRowData

| Prop                    | Type                                                       | Default   | Description                                               |
| ----------------------- | ---------------------------------------------------------- | --------- | --------------------------------------------------------- |
| `name` \*               | `string`                                                   | —         | Row header name                                           |
| `rowCells` \*           | `TimeTableRowCellData[]`                                   | —         | Array of row cells; sorted by start time automatically    |
| `id`                    | `string`                                                   | —         | Row identifier; passed to `onRowNameClick`                |
| `subtitle`              | `string \| JSX.Element`                                    | —         | Row header subtitle                                       |
| `rowHeaderPopover`      | `TimeTablePopoverProps`                                    | —         | Custom popover for the row header                         |
| `outOfRangeCellPopover` | `TimeTablePopoverProps`                                    | —         | Custom popover for auto-filled blocked cells              |
| `rowMinTime`            | `string`                                                   | `minTime` | Row start time; blocked cells are auto-filled before this |
| `rowMaxTime`            | `string`                                                   | `maxTime` | Row end time; blocked cells are auto-filled after this    |
| `onRowNameClick`        | `(rowData: TimeTableRowData, e: React.MouseEvent) => void` | —         | Called when the row header name is clicked                |

## TimeTableRowCellData

| Prop                  | Type                                                            | Default | Description                                                        |
| --------------------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------------------ |
| `startTime` \*        | `string`                                                        | —       | Cell start time in `HH:mm` (duration must be a multiple of 15 min) |
| `endTime` \*          | `string`                                                        | —       | Cell end time in `HH:mm` (duration must be a multiple of 15 min)   |
| `id`                  | `string`                                                        | —       | Cell identifier; passed to `onClick`                               |
| `status`              | `"filled" \| "blocked" \| "default" \| "pending" \| "disabled"` | —       | Cell status, determines rendering style                            |
| `title`               | `string`                                                        | —       | Title shown for this cell                                          |
| `subtitle`            | `string`                                                        | —       | Subtitle shown for this cell                                       |
| `customPopover`       | `TimeTablePopoverProps`                                         | —       | Custom popover for the cell                                        |
| `cellStyleAttributes` | `TimeTableCellStyleAttributes`                                  | —       | Custom style attributes; falls back to default row bar colors      |
| `onClick`             | `(data: TimeTableRowCellData, e: React.MouseEvent) => void`     | —       | Called when the cell is clicked                                    |

## TimeTablePopoverProps

| Prop         | Type                                               | Default | Description                            |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------- |
| `trigger` \* | `"click" \| "hover"`                               | —       | Interaction that triggers the popover  |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Popover content                        |
| `delay`      | `{ open: number, close: number }`                  | —       | Hover delay in ms (hover trigger only) |
| `offset`     | `number`                                           | —       | Offset in px for the popover           |

## TimeTableCellStyleAttributes

| Prop                      | Type                                           | Description                                                                      |
| ------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| `backgroundColor`         | `string \| (props: ThemeStyleProps) => string` | Main background color                                                            |
| `altBackgroundColor`      | `string \| (props: ThemeStyleProps) => string` | Alternate background color for striped displays                                  |
| `hoverBackgroundColor`    | `string \| (props: ThemeStyleProps) => string` | Background on hover                                                              |
| `altHoverBackgroundColor` | `string \| (props: ThemeStyleProps) => string` | Alternate background on hover                                                    |
| `styleType`               | `"default" \| "solid" \| "stripes"`            | Display style; defaults to cell type (blocked/pending = striped, others = solid) |

## Rules

-   Do not combine `onClick` on a cell with a `trigger="click"` popover on the same cell — they conflict.
