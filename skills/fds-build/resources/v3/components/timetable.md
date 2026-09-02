# Timetable

Import: `import { Timetable } from "@lifesg/react-design-system/timetable"`

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

## Props — `TimeTableCellStyleAttributes`

| Prop                      | Type                     | Default   | Description                                                                |
| ------------------------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| `backgroundColor`         | `string`                 | —         | Main background color for the cell.                                        |
| `altBackgroundColor`      | `string`                 | —         | Alternate background color used for the second stripe in striped patterns. |
| `hoverBackgroundColor`    | `string`                 | —         | Background color applied on hover.                                         |
| `altHoverBackgroundColor` | `string`                 | —         | Alternate background color applied on hover for striped patterns.          |
| `styleType`               | `TimeTableCellStyleType` | "default" | Cell background pattern.                                                   |

## Props — `TimeTableRef`

| Prop             | Type         | Default | Description                                                                                   |
| ---------------- | ------------ | ------- | --------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the timetable back to `initialScrollTime`. No-op when `initialScrollTime` is not set. |

## Props — `TimeTableRowData`

| Prop                    | Type                                                            | Default | Description                                                                                                     |
| ----------------------- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                                        | —       | Unique identifier for the row.                                                                                  |
| `name` \*               | `string`                                                        | —       | Display name shown in the row header.                                                                           |
| `rowCells` \*           | `TimeTableRowCellData[]`                                        | —       | Cells occupying time slots within this row.                                                                     |
| `subtitle`              | `string \| JSX.Element`                                         | —       | Secondary text or element rendered beneath the row name in the header.                                          |
| `rowHeaderPopover`      | `TimeTablePopoverProps`                                         | —       | Popover attached to the row header label.                                                                       |
| `outOfRangeCellPopover` | `TimeTablePopoverProps`                                         | —       | Popover shown when the user interacts with cells outside the active time range.                                 |
| `rowMinTime`            | `string`                                                        | —       | Earliest time this row is active, in `HH:mm` format. Time slots before this value are rendered as out-of-range. |
| `rowMaxTime`            | `string`                                                        | —       | Latest time this row is active, in `HH:mm` format. Time slots after this value are rendered as out-of-range.    |
| `onRowNameClick`        | `\| ((rowData: TimeTableRowData, e: React.MouseEvent) => void)` | —       | Called when the row header name is clicked.                                                                     |

## Props — `TimeTablePopoverProps`

| Prop         | Type                                               | Default | Description                                                                                                    |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction that opens the popover                                                                             |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Content rendered inside the popover.                                                                           |
| `delay`      | `\| { open?: number; close?: number }`             | —       | Open and close delays in milliseconds. Useful for hover popovers to avoid flickering on quick mouse movements. |
| `offset`     | `number`                                           | —       | Distance in pixels between the popover and its trigger element.                                                |

## Props — `TimeTableProps`

| Prop                     | Type                              | Default | Description                                                                                                                             |
| ------------------------ | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                          | —       | —                                                                                                                                       |
| `className`              | `string`                          | —       | —                                                                                                                                       |
| `date` \*                | `string`                          | —       | The date currently displayed.                                                                                                           |
| `emptyContentMessage`    | `string`                          | —       | Text shown in the empty state when `rowData` is empty or `totalRecords` is `0`.                                                         |
| `rowData` \*             | `TimeTableRowData[]`              | —       | Rows to render in the timetable grid.                                                                                                   |
| `loading`                | `boolean`                         | —       | When `true`, replaces row content with a loading spinner.                                                                               |
| `minTime`                | `string`                          | "00:00" | Earliest hour column displayed, in `HH:mm` format. Rounded to the nearest full hour internally.                                         |
| `maxTime`                | `string`                          | "23:00" | Latest hour column displayed, in `HH:mm` format. Rounded up to the nearest full hour internally.                                        |
| `initialScrollTime`      | `string`                          | —       | Time to scroll to on mount in `HH:mm` format (e.g. `"09:00"`).                                                                          |
| `minDate`                | `string`                          | —       | Earliest date the user can navigate to in the date picker.                                                                              |
| `maxDate`                | `string`                          | —       | Latest date the user can navigate to in the date picker                                                                                 |
| `totalRecords`           | `number`                          | —       | Total number of records across all pages. When `0`, the empty state is shown regardless of `rowData`.                                   |
| `showCurrentDateAsToday` | `boolean`                         | —       | When `true`, the date header displays `"Today"` instead of the formatted date string when `date` matches the current calendar day.      |
| `showDateAsShortForm`    | `boolean`                         | —       | When `true`, the date header uses an abbreviated date format.                                                                           |
| `roundInitialScrollTime` | `boolean`                         | true    | When `true`, `initialScrollTime` is snapped to the nearest time interval (e.g. `"06:30"` snaps to `"06:00"` with a 60-minute interval). |
| `onRefresh`              | `(() => void)`                    | —       | Called when the user clicks the refresh button in the header.                                                                           |
| `onPage`                 | `(() => void)`                    | —       | Called when the timetable needs to load the next page of rows.                                                                          |
| `onPreviousDayClick` \*  | `(currentDate: string) => void`   | —       | Called when the user navigates to the previous day.                                                                                     |
| `onNextDayClick` \*      | `(currentDate: string) => void`   | —       | Called when the user navigates to the next day.                                                                                         |
| `onCalendarDateSelect`   | `((currentDate: string) => void)` | —       | Called when the user selects a date from the calendar picker.                                                                           |

## Props — `TimeTableRowCellData`

| Prop                  | Type                                                             | Default | Description                                             |
| --------------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `id`                  | `string`                                                         | —       | Unique identifier for the cell.                         |
| `startTime` \*        | `string`                                                         | —       | Start time of the cell in `HH:mm` format.               |
| `endTime` \*          | `string`                                                         | —       | End time of the cell in `HH:mm` format.                 |
| `status` \*           | `TimeTableCellType`                                              | —       | Visual and interaction state of the cell.               |
| `title`               | `string`                                                         | —       | Primary label rendered inside the cell.                 |
| `subtitle`            | `string`                                                         | —       | Secondary label rendered below `title` inside the cell. |
| `customPopover`       | `TimeTablePopoverProps`                                          | —       | Popover shown when the user interacts with this cell.   |
| `cellStyleAttributes` | `TimeTableCellStyleAttributes`                                   | —       | Color and pattern overrides for this cell.              |
| `onClick`             | `\| ((data: TimeTableRowCellData, e: React.MouseEvent) => void)` | —       | Called when the user clicks this cell.                  |

## Props — `TimeTableCellStyleAttributes`

| Prop                      | Type                     | Default   | Description                                                                |
| ------------------------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| `backgroundColor`         | `string`                 | —         | Main background color for the cell.                                        |
| `altBackgroundColor`      | `string`                 | —         | Alternate background color used for the second stripe in striped patterns. |
| `hoverBackgroundColor`    | `string`                 | —         | Background color applied on hover.                                         |
| `altHoverBackgroundColor` | `string`                 | —         | Alternate background color applied on hover for striped patterns.          |
| `styleType`               | `TimeTableCellStyleType` | "default" | Cell background pattern.                                                   |

## Props — `TimeTableRef`

| Prop             | Type         | Default | Description                                                                                   |
| ---------------- | ------------ | ------- | --------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the timetable back to `initialScrollTime`. No-op when `initialScrollTime` is not set. |

## Props — `TimeTableRowData`

| Prop                    | Type                                                            | Default | Description                                                                                                     |
| ----------------------- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                                        | —       | Unique identifier for the row.                                                                                  |
| `name` \*               | `string`                                                        | —       | Display name shown in the row header.                                                                           |
| `rowCells` \*           | `TimeTableRowCellData[]`                                        | —       | Cells occupying time slots within this row.                                                                     |
| `subtitle`              | `string \| JSX.Element`                                         | —       | Secondary text or element rendered beneath the row name in the header.                                          |
| `rowHeaderPopover`      | `TimeTablePopoverProps`                                         | —       | Popover attached to the row header label.                                                                       |
| `outOfRangeCellPopover` | `TimeTablePopoverProps`                                         | —       | Popover shown when the user interacts with cells outside the active time range.                                 |
| `rowMinTime`            | `string`                                                        | —       | Earliest time this row is active, in `HH:mm` format. Time slots before this value are rendered as out-of-range. |
| `rowMaxTime`            | `string`                                                        | —       | Latest time this row is active, in `HH:mm` format. Time slots after this value are rendered as out-of-range.    |
| `onRowNameClick`        | `\| ((rowData: TimeTableRowData, e: React.MouseEvent) => void)` | —       | Called when the row header name is clicked.                                                                     |

## Props — `TimeTablePopoverProps`

| Prop         | Type                                               | Default | Description                                                                                                    |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction that opens the popover                                                                             |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Content rendered inside the popover.                                                                           |
| `delay`      | `\| { open?: number; close?: number }`             | —       | Open and close delays in milliseconds. Useful for hover popovers to avoid flickering on quick mouse movements. |
| `offset`     | `number`                                           | —       | Distance in pixels between the popover and its trigger element.                                                |

## Props — `TimeTableProps`

| Prop                     | Type                              | Default | Description                                                                                                                             |
| ------------------------ | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                          | —       | —                                                                                                                                       |
| `className`              | `string`                          | —       | —                                                                                                                                       |
| `date` \*                | `string`                          | —       | The date currently displayed.                                                                                                           |
| `emptyContentMessage`    | `string`                          | —       | Text shown in the empty state when `rowData` is empty or `totalRecords` is `0`.                                                         |
| `rowData` \*             | `TimeTableRowData[]`              | —       | Rows to render in the timetable grid.                                                                                                   |
| `loading`                | `boolean`                         | —       | When `true`, replaces row content with a loading spinner.                                                                               |
| `minTime`                | `string`                          | "00:00" | Earliest hour column displayed, in `HH:mm` format. Rounded to the nearest full hour internally.                                         |
| `maxTime`                | `string`                          | "23:00" | Latest hour column displayed, in `HH:mm` format. Rounded up to the nearest full hour internally.                                        |
| `initialScrollTime`      | `string`                          | —       | Time to scroll to on mount in `HH:mm` format (e.g. `"09:00"`).                                                                          |
| `minDate`                | `string`                          | —       | Earliest date the user can navigate to in the date picker.                                                                              |
| `maxDate`                | `string`                          | —       | Latest date the user can navigate to in the date picker                                                                                 |
| `totalRecords`           | `number`                          | —       | Total number of records across all pages. When `0`, the empty state is shown regardless of `rowData`.                                   |
| `showCurrentDateAsToday` | `boolean`                         | —       | When `true`, the date header displays `"Today"` instead of the formatted date string when `date` matches the current calendar day.      |
| `showDateAsShortForm`    | `boolean`                         | —       | When `true`, the date header uses an abbreviated date format.                                                                           |
| `roundInitialScrollTime` | `boolean`                         | true    | When `true`, `initialScrollTime` is snapped to the nearest time interval (e.g. `"06:30"` snaps to `"06:00"` with a 60-minute interval). |
| `onRefresh`              | `(() => void)`                    | —       | Called when the user clicks the refresh button in the header.                                                                           |
| `onPage`                 | `(() => void)`                    | —       | Called when the timetable needs to load the next page of rows.                                                                          |
| `onPreviousDayClick` \*  | `(currentDate: string) => void`   | —       | Called when the user navigates to the previous day.                                                                                     |
| `onNextDayClick` \*      | `(currentDate: string) => void`   | —       | Called when the user navigates to the next day.                                                                                         |
| `onCalendarDateSelect`   | `((currentDate: string) => void)` | —       | Called when the user selects a date from the calendar picker.                                                                           |

## Props — `TimeTableRowCellData`

| Prop                  | Type                                                             | Default | Description                                             |
| --------------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `id`                  | `string`                                                         | —       | Unique identifier for the cell.                         |
| `startTime` \*        | `string`                                                         | —       | Start time of the cell in `HH:mm` format.               |
| `endTime` \*          | `string`                                                         | —       | End time of the cell in `HH:mm` format.                 |
| `status` \*           | `TimeTableCellType`                                              | —       | Visual and interaction state of the cell.               |
| `title`               | `string`                                                         | —       | Primary label rendered inside the cell.                 |
| `subtitle`            | `string`                                                         | —       | Secondary label rendered below `title` inside the cell. |
| `customPopover`       | `TimeTablePopoverProps`                                          | —       | Popover shown when the user interacts with this cell.   |
| `cellStyleAttributes` | `TimeTableCellStyleAttributes`                                   | —       | Color and pattern overrides for this cell.              |
| `onClick`             | `\| ((data: TimeTableRowCellData, e: React.MouseEvent) => void)` | —       | Called when the user clicks this cell.                  |

## Props — `TimeTableCellStyleAttributes`

| Prop                      | Type                     | Default   | Description                                                                |
| ------------------------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| `backgroundColor`         | `string`                 | —         | Main background color for the cell.                                        |
| `altBackgroundColor`      | `string`                 | —         | Alternate background color used for the second stripe in striped patterns. |
| `hoverBackgroundColor`    | `string`                 | —         | Background color applied on hover.                                         |
| `altHoverBackgroundColor` | `string`                 | —         | Alternate background color applied on hover for striped patterns.          |
| `styleType`               | `TimeTableCellStyleType` | "default" | Cell background pattern.                                                   |

## Props — `TimeTableRef`

| Prop             | Type         | Default | Description                                                                                   |
| ---------------- | ------------ | ------- | --------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the timetable back to `initialScrollTime`. No-op when `initialScrollTime` is not set. |

## Props — `TimeTableRowData`

| Prop                    | Type                                                            | Default | Description                                                                                                     |
| ----------------------- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                                        | —       | Unique identifier for the row.                                                                                  |
| `name` \*               | `string`                                                        | —       | Display name shown in the row header.                                                                           |
| `rowCells` \*           | `TimeTableRowCellData[]`                                        | —       | Cells occupying time slots within this row.                                                                     |
| `subtitle`              | `string \| JSX.Element`                                         | —       | Secondary text or element rendered beneath the row name in the header.                                          |
| `rowHeaderPopover`      | `TimeTablePopoverProps`                                         | —       | Popover attached to the row header label.                                                                       |
| `outOfRangeCellPopover` | `TimeTablePopoverProps`                                         | —       | Popover shown when the user interacts with cells outside the active time range.                                 |
| `rowMinTime`            | `string`                                                        | —       | Earliest time this row is active, in `HH:mm` format. Time slots before this value are rendered as out-of-range. |
| `rowMaxTime`            | `string`                                                        | —       | Latest time this row is active, in `HH:mm` format. Time slots after this value are rendered as out-of-range.    |
| `onRowNameClick`        | `\| ((rowData: TimeTableRowData, e: React.MouseEvent) => void)` | —       | Called when the row header name is clicked.                                                                     |

## Props — `TimeTablePopoverProps`

| Prop         | Type                                               | Default | Description                                                                                                    |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction that opens the popover                                                                             |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Content rendered inside the popover.                                                                           |
| `delay`      | `\| { open?: number; close?: number }`             | —       | Open and close delays in milliseconds. Useful for hover popovers to avoid flickering on quick mouse movements. |
| `offset`     | `number`                                           | —       | Distance in pixels between the popover and its trigger element.                                                |

## Props — `TimeTableProps`

| Prop                     | Type                              | Default | Description                                                                                                                             |
| ------------------------ | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                          | —       | —                                                                                                                                       |
| `className`              | `string`                          | —       | —                                                                                                                                       |
| `date` \*                | `string`                          | —       | The date currently displayed.                                                                                                           |
| `emptyContentMessage`    | `string`                          | —       | Text shown in the empty state when `rowData` is empty or `totalRecords` is `0`.                                                         |
| `rowData` \*             | `TimeTableRowData[]`              | —       | Rows to render in the timetable grid.                                                                                                   |
| `loading`                | `boolean`                         | —       | When `true`, replaces row content with a loading spinner.                                                                               |
| `minTime`                | `string`                          | "00:00" | Earliest hour column displayed, in `HH:mm` format. Rounded to the nearest full hour internally.                                         |
| `maxTime`                | `string`                          | "23:00" | Latest hour column displayed, in `HH:mm` format. Rounded up to the nearest full hour internally.                                        |
| `initialScrollTime`      | `string`                          | —       | Time to scroll to on mount in `HH:mm` format (e.g. `"09:00"`).                                                                          |
| `minDate`                | `string`                          | —       | Earliest date the user can navigate to in the date picker.                                                                              |
| `maxDate`                | `string`                          | —       | Latest date the user can navigate to in the date picker                                                                                 |
| `totalRecords`           | `number`                          | —       | Total number of records across all pages. When `0`, the empty state is shown regardless of `rowData`.                                   |
| `showCurrentDateAsToday` | `boolean`                         | —       | When `true`, the date header displays `"Today"` instead of the formatted date string when `date` matches the current calendar day.      |
| `showDateAsShortForm`    | `boolean`                         | —       | When `true`, the date header uses an abbreviated date format.                                                                           |
| `roundInitialScrollTime` | `boolean`                         | true    | When `true`, `initialScrollTime` is snapped to the nearest time interval (e.g. `"06:30"` snaps to `"06:00"` with a 60-minute interval). |
| `onRefresh`              | `(() => void)`                    | —       | Called when the user clicks the refresh button in the header.                                                                           |
| `onPage`                 | `(() => void)`                    | —       | Called when the timetable needs to load the next page of rows.                                                                          |
| `onPreviousDayClick` \*  | `(currentDate: string) => void`   | —       | Called when the user navigates to the previous day.                                                                                     |
| `onNextDayClick` \*      | `(currentDate: string) => void`   | —       | Called when the user navigates to the next day.                                                                                         |
| `onCalendarDateSelect`   | `((currentDate: string) => void)` | —       | Called when the user selects a date from the calendar picker.                                                                           |

## Props — `TimeTableRowCellData`

| Prop                  | Type                                                             | Default | Description                                             |
| --------------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `id`                  | `string`                                                         | —       | Unique identifier for the cell.                         |
| `startTime` \*        | `string`                                                         | —       | Start time of the cell in `HH:mm` format.               |
| `endTime` \*          | `string`                                                         | —       | End time of the cell in `HH:mm` format.                 |
| `status` \*           | `TimeTableCellType`                                              | —       | Visual and interaction state of the cell.               |
| `title`               | `string`                                                         | —       | Primary label rendered inside the cell.                 |
| `subtitle`            | `string`                                                         | —       | Secondary label rendered below `title` inside the cell. |
| `customPopover`       | `TimeTablePopoverProps`                                          | —       | Popover shown when the user interacts with this cell.   |
| `cellStyleAttributes` | `TimeTableCellStyleAttributes`                                   | —       | Color and pattern overrides for this cell.              |
| `onClick`             | `\| ((data: TimeTableRowCellData, e: React.MouseEvent) => void)` | —       | Called when the user clicks this cell.                  |

## Props — `TimeTableCellStyleAttributes`

| Prop                      | Type                     | Default   | Description                                                                |
| ------------------------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| `backgroundColor`         | `string`                 | —         | Main background color for the cell.                                        |
| `altBackgroundColor`      | `string`                 | —         | Alternate background color used for the second stripe in striped patterns. |
| `hoverBackgroundColor`    | `string`                 | —         | Background color applied on hover.                                         |
| `altHoverBackgroundColor` | `string`                 | —         | Alternate background color applied on hover for striped patterns.          |
| `styleType`               | `TimeTableCellStyleType` | "default" | Cell background pattern.                                                   |

## Props — `TimeTableRef`

| Prop             | Type         | Default | Description                                                                                   |
| ---------------- | ------------ | ------- | --------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the timetable back to `initialScrollTime`. No-op when `initialScrollTime` is not set. |

## Props — `TimeTableRowData`

| Prop                    | Type                                                            | Default | Description                                                                                                     |
| ----------------------- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                                        | —       | Unique identifier for the row.                                                                                  |
| `name` \*               | `string`                                                        | —       | Display name shown in the row header.                                                                           |
| `rowCells` \*           | `TimeTableRowCellData[]`                                        | —       | Cells occupying time slots within this row.                                                                     |
| `subtitle`              | `string \| JSX.Element`                                         | —       | Secondary text or element rendered beneath the row name in the header.                                          |
| `rowHeaderPopover`      | `TimeTablePopoverProps`                                         | —       | Popover attached to the row header label.                                                                       |
| `outOfRangeCellPopover` | `TimeTablePopoverProps`                                         | —       | Popover shown when the user interacts with cells outside the active time range.                                 |
| `rowMinTime`            | `string`                                                        | —       | Earliest time this row is active, in `HH:mm` format. Time slots before this value are rendered as out-of-range. |
| `rowMaxTime`            | `string`                                                        | —       | Latest time this row is active, in `HH:mm` format. Time slots after this value are rendered as out-of-range.    |
| `onRowNameClick`        | `\| ((rowData: TimeTableRowData, e: React.MouseEvent) => void)` | —       | Called when the row header name is clicked.                                                                     |

## Props — `TimeTablePopoverProps`

| Prop         | Type                                               | Default | Description                                                                                                    |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction that opens the popover                                                                             |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Content rendered inside the popover.                                                                           |
| `delay`      | `\| { open?: number; close?: number }`             | —       | Open and close delays in milliseconds. Useful for hover popovers to avoid flickering on quick mouse movements. |
| `offset`     | `number`                                           | —       | Distance in pixels between the popover and its trigger element.                                                |

## Props — `TimeTableProps`

| Prop                     | Type                              | Default | Description                                                                                                                             |
| ------------------------ | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                          | —       | —                                                                                                                                       |
| `className`              | `string`                          | —       | —                                                                                                                                       |
| `date` \*                | `string`                          | —       | The date currently displayed.                                                                                                           |
| `emptyContentMessage`    | `string`                          | —       | Text shown in the empty state when `rowData` is empty or `totalRecords` is `0`.                                                         |
| `rowData` \*             | `TimeTableRowData[]`              | —       | Rows to render in the timetable grid.                                                                                                   |
| `loading`                | `boolean`                         | —       | When `true`, replaces row content with a loading spinner.                                                                               |
| `minTime`                | `string`                          | "00:00" | Earliest hour column displayed, in `HH:mm` format. Rounded to the nearest full hour internally.                                         |
| `maxTime`                | `string`                          | "23:00" | Latest hour column displayed, in `HH:mm` format. Rounded up to the nearest full hour internally.                                        |
| `initialScrollTime`      | `string`                          | —       | Time to scroll to on mount in `HH:mm` format (e.g. `"09:00"`).                                                                          |
| `minDate`                | `string`                          | —       | Earliest date the user can navigate to in the date picker.                                                                              |
| `maxDate`                | `string`                          | —       | Latest date the user can navigate to in the date picker                                                                                 |
| `totalRecords`           | `number`                          | —       | Total number of records across all pages. When `0`, the empty state is shown regardless of `rowData`.                                   |
| `showCurrentDateAsToday` | `boolean`                         | —       | When `true`, the date header displays `"Today"` instead of the formatted date string when `date` matches the current calendar day.      |
| `showDateAsShortForm`    | `boolean`                         | —       | When `true`, the date header uses an abbreviated date format.                                                                           |
| `roundInitialScrollTime` | `boolean`                         | true    | When `true`, `initialScrollTime` is snapped to the nearest time interval (e.g. `"06:30"` snaps to `"06:00"` with a 60-minute interval). |
| `onRefresh`              | `(() => void)`                    | —       | Called when the user clicks the refresh button in the header.                                                                           |
| `onPage`                 | `(() => void)`                    | —       | Called when the timetable needs to load the next page of rows.                                                                          |
| `onPreviousDayClick` \*  | `(currentDate: string) => void`   | —       | Called when the user navigates to the previous day.                                                                                     |
| `onNextDayClick` \*      | `(currentDate: string) => void`   | —       | Called when the user navigates to the next day.                                                                                         |
| `onCalendarDateSelect`   | `((currentDate: string) => void)` | —       | Called when the user selects a date from the calendar picker.                                                                           |

## Props — `TimeTableRowCellData`

| Prop                  | Type                                                             | Default | Description                                             |
| --------------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `id`                  | `string`                                                         | —       | Unique identifier for the cell.                         |
| `startTime` \*        | `string`                                                         | —       | Start time of the cell in `HH:mm` format.               |
| `endTime` \*          | `string`                                                         | —       | End time of the cell in `HH:mm` format.                 |
| `status` \*           | `TimeTableCellType`                                              | —       | Visual and interaction state of the cell.               |
| `title`               | `string`                                                         | —       | Primary label rendered inside the cell.                 |
| `subtitle`            | `string`                                                         | —       | Secondary label rendered below `title` inside the cell. |
| `customPopover`       | `TimeTablePopoverProps`                                          | —       | Popover shown when the user interacts with this cell.   |
| `cellStyleAttributes` | `TimeTableCellStyleAttributes`                                   | —       | Color and pattern overrides for this cell.              |
| `onClick`             | `\| ((data: TimeTableRowCellData, e: React.MouseEvent) => void)` | —       | Called when the user clicks this cell.                  |

## Props — `TimeTableCellStyleAttributes`

| Prop                      | Type                     | Default   | Description                                                                |
| ------------------------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| `backgroundColor`         | `string`                 | —         | Main background color for the cell.                                        |
| `altBackgroundColor`      | `string`                 | —         | Alternate background color used for the second stripe in striped patterns. |
| `hoverBackgroundColor`    | `string`                 | —         | Background color applied on hover.                                         |
| `altHoverBackgroundColor` | `string`                 | —         | Alternate background color applied on hover for striped patterns.          |
| `styleType`               | `TimeTableCellStyleType` | "default" | Cell background pattern.                                                   |

## Props — `TimeTableRef`

| Prop             | Type         | Default | Description                                                                                   |
| ---------------- | ------------ | ------- | --------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the timetable back to `initialScrollTime`. No-op when `initialScrollTime` is not set. |

## Props — `TimeTableRowData`

| Prop                    | Type                                                            | Default | Description                                                                                                     |
| ----------------------- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                                        | —       | Unique identifier for the row.                                                                                  |
| `name` \*               | `string`                                                        | —       | Display name shown in the row header.                                                                           |
| `rowCells` \*           | `TimeTableRowCellData[]`                                        | —       | Cells occupying time slots within this row.                                                                     |
| `subtitle`              | `string \| JSX.Element`                                         | —       | Secondary text or element rendered beneath the row name in the header.                                          |
| `rowHeaderPopover`      | `TimeTablePopoverProps`                                         | —       | Popover attached to the row header label.                                                                       |
| `outOfRangeCellPopover` | `TimeTablePopoverProps`                                         | —       | Popover shown when the user interacts with cells outside the active time range.                                 |
| `rowMinTime`            | `string`                                                        | —       | Earliest time this row is active, in `HH:mm` format. Time slots before this value are rendered as out-of-range. |
| `rowMaxTime`            | `string`                                                        | —       | Latest time this row is active, in `HH:mm` format. Time slots after this value are rendered as out-of-range.    |
| `onRowNameClick`        | `\| ((rowData: TimeTableRowData, e: React.MouseEvent) => void)` | —       | Called when the row header name is clicked.                                                                     |

## Props — `TimeTablePopoverProps`

| Prop         | Type                                               | Default | Description                                                                                                    |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction that opens the popover                                                                             |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Content rendered inside the popover.                                                                           |
| `delay`      | `\| { open?: number; close?: number }`             | —       | Open and close delays in milliseconds. Useful for hover popovers to avoid flickering on quick mouse movements. |
| `offset`     | `number`                                           | —       | Distance in pixels between the popover and its trigger element.                                                |

## Props — `TimeTableProps`

| Prop                     | Type                              | Default | Description                                                                                                                             |
| ------------------------ | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                          | —       | —                                                                                                                                       |
| `className`              | `string`                          | —       | —                                                                                                                                       |
| `date` \*                | `string`                          | —       | The date currently displayed.                                                                                                           |
| `emptyContentMessage`    | `string`                          | —       | Text shown in the empty state when `rowData` is empty or `totalRecords` is `0`.                                                         |
| `rowData` \*             | `TimeTableRowData[]`              | —       | Rows to render in the timetable grid.                                                                                                   |
| `loading`                | `boolean`                         | —       | When `true`, replaces row content with a loading spinner.                                                                               |
| `minTime`                | `string`                          | "00:00" | Earliest hour column displayed, in `HH:mm` format. Rounded to the nearest full hour internally.                                         |
| `maxTime`                | `string`                          | "23:00" | Latest hour column displayed, in `HH:mm` format. Rounded up to the nearest full hour internally.                                        |
| `initialScrollTime`      | `string`                          | —       | Time to scroll to on mount in `HH:mm` format (e.g. `"09:00"`).                                                                          |
| `minDate`                | `string`                          | —       | Earliest date the user can navigate to in the date picker.                                                                              |
| `maxDate`                | `string`                          | —       | Latest date the user can navigate to in the date picker                                                                                 |
| `totalRecords`           | `number`                          | —       | Total number of records across all pages. When `0`, the empty state is shown regardless of `rowData`.                                   |
| `showCurrentDateAsToday` | `boolean`                         | —       | When `true`, the date header displays `"Today"` instead of the formatted date string when `date` matches the current calendar day.      |
| `showDateAsShortForm`    | `boolean`                         | —       | When `true`, the date header uses an abbreviated date format.                                                                           |
| `roundInitialScrollTime` | `boolean`                         | true    | When `true`, `initialScrollTime` is snapped to the nearest time interval (e.g. `"06:30"` snaps to `"06:00"` with a 60-minute interval). |
| `onRefresh`              | `(() => void)`                    | —       | Called when the user clicks the refresh button in the header.                                                                           |
| `onPage`                 | `(() => void)`                    | —       | Called when the timetable needs to load the next page of rows.                                                                          |
| `onPreviousDayClick` \*  | `(currentDate: string) => void`   | —       | Called when the user navigates to the previous day.                                                                                     |
| `onNextDayClick` \*      | `(currentDate: string) => void`   | —       | Called when the user navigates to the next day.                                                                                         |
| `onCalendarDateSelect`   | `((currentDate: string) => void)` | —       | Called when the user selects a date from the calendar picker.                                                                           |

## Props — `TimeTableRowCellData`

| Prop                  | Type                                                             | Default | Description                                             |
| --------------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `id`                  | `string`                                                         | —       | Unique identifier for the cell.                         |
| `startTime` \*        | `string`                                                         | —       | Start time of the cell in `HH:mm` format.               |
| `endTime` \*          | `string`                                                         | —       | End time of the cell in `HH:mm` format.                 |
| `status` \*           | `TimeTableCellType`                                              | —       | Visual and interaction state of the cell.               |
| `title`               | `string`                                                         | —       | Primary label rendered inside the cell.                 |
| `subtitle`            | `string`                                                         | —       | Secondary label rendered below `title` inside the cell. |
| `customPopover`       | `TimeTablePopoverProps`                                          | —       | Popover shown when the user interacts with this cell.   |
| `cellStyleAttributes` | `TimeTableCellStyleAttributes`                                   | —       | Color and pattern overrides for this cell.              |
| `onClick`             | `\| ((data: TimeTableRowCellData, e: React.MouseEvent) => void)` | —       | Called when the user clicks this cell.                  |

## Props — `TimeTableCellStyleAttributes`

| Prop                      | Type                     | Default   | Description                                                                |
| ------------------------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| `backgroundColor`         | `string`                 | —         | Main background color for the cell.                                        |
| `altBackgroundColor`      | `string`                 | —         | Alternate background color used for the second stripe in striped patterns. |
| `hoverBackgroundColor`    | `string`                 | —         | Background color applied on hover.                                         |
| `altHoverBackgroundColor` | `string`                 | —         | Alternate background color applied on hover for striped patterns.          |
| `styleType`               | `TimeTableCellStyleType` | "default" | Cell background pattern.                                                   |

## Props — `TimeTableRef`

| Prop             | Type         | Default | Description                                                                                   |
| ---------------- | ------------ | ------- | --------------------------------------------------------------------------------------------- |
| `resetScroll` \* | `() => void` | —       | Scrolls the timetable back to `initialScrollTime`. No-op when `initialScrollTime` is not set. |

## Props — `TimeTableRowData`

| Prop                    | Type                                                            | Default | Description                                                                                                     |
| ----------------------- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                    | `string`                                                        | —       | Unique identifier for the row.                                                                                  |
| `name` \*               | `string`                                                        | —       | Display name shown in the row header.                                                                           |
| `rowCells` \*           | `TimeTableRowCellData[]`                                        | —       | Cells occupying time slots within this row.                                                                     |
| `subtitle`              | `string \| JSX.Element`                                         | —       | Secondary text or element rendered beneath the row name in the header.                                          |
| `rowHeaderPopover`      | `TimeTablePopoverProps`                                         | —       | Popover attached to the row header label.                                                                       |
| `outOfRangeCellPopover` | `TimeTablePopoverProps`                                         | —       | Popover shown when the user interacts with cells outside the active time range.                                 |
| `rowMinTime`            | `string`                                                        | —       | Earliest time this row is active, in `HH:mm` format. Time slots before this value are rendered as out-of-range. |
| `rowMaxTime`            | `string`                                                        | —       | Latest time this row is active, in `HH:mm` format. Time slots after this value are rendered as out-of-range.    |
| `onRowNameClick`        | `\| ((rowData: TimeTableRowData, e: React.MouseEvent) => void)` | —       | Called when the row header name is clicked.                                                                     |

## Props — `TimeTablePopoverProps`

| Prop         | Type                                               | Default | Description                                                                                                    |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `trigger` \* | `PopoverTriggerType`                               | —       | Interaction that opens the popover                                                                             |
| `content` \* | `string \| JSX.Element \| (() => React.ReactNode)` | —       | Content rendered inside the popover.                                                                           |
| `delay`      | `\| { open?: number; close?: number }`             | —       | Open and close delays in milliseconds. Useful for hover popovers to avoid flickering on quick mouse movements. |
| `offset`     | `number`                                           | —       | Distance in pixels between the popover and its trigger element.                                                |

## Props — `TimeTableProps`

| Prop                     | Type                              | Default | Description                                                                                                                             |
| ------------------------ | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                          | —       | —                                                                                                                                       |
| `className`              | `string`                          | —       | —                                                                                                                                       |
| `date` \*                | `string`                          | —       | The date currently displayed.                                                                                                           |
| `emptyContentMessage`    | `string`                          | —       | Text shown in the empty state when `rowData` is empty or `totalRecords` is `0`.                                                         |
| `rowData` \*             | `TimeTableRowData[]`              | —       | Rows to render in the timetable grid.                                                                                                   |
| `loading`                | `boolean`                         | —       | When `true`, replaces row content with a loading spinner.                                                                               |
| `minTime`                | `string`                          | "00:00" | Earliest hour column displayed, in `HH:mm` format. Rounded to the nearest full hour internally.                                         |
| `maxTime`                | `string`                          | "23:00" | Latest hour column displayed, in `HH:mm` format. Rounded up to the nearest full hour internally.                                        |
| `initialScrollTime`      | `string`                          | —       | Time to scroll to on mount in `HH:mm` format (e.g. `"09:00"`).                                                                          |
| `minDate`                | `string`                          | —       | Earliest date the user can navigate to in the date picker.                                                                              |
| `maxDate`                | `string`                          | —       | Latest date the user can navigate to in the date picker                                                                                 |
| `totalRecords`           | `number`                          | —       | Total number of records across all pages. When `0`, the empty state is shown regardless of `rowData`.                                   |
| `showCurrentDateAsToday` | `boolean`                         | —       | When `true`, the date header displays `"Today"` instead of the formatted date string when `date` matches the current calendar day.      |
| `showDateAsShortForm`    | `boolean`                         | —       | When `true`, the date header uses an abbreviated date format.                                                                           |
| `roundInitialScrollTime` | `boolean`                         | true    | When `true`, `initialScrollTime` is snapped to the nearest time interval (e.g. `"06:30"` snaps to `"06:00"` with a 60-minute interval). |
| `onRefresh`              | `(() => void)`                    | —       | Called when the user clicks the refresh button in the header.                                                                           |
| `onPage`                 | `(() => void)`                    | —       | Called when the timetable needs to load the next page of rows.                                                                          |
| `onPreviousDayClick` \*  | `(currentDate: string) => void`   | —       | Called when the user navigates to the previous day.                                                                                     |
| `onNextDayClick` \*      | `(currentDate: string) => void`   | —       | Called when the user navigates to the next day.                                                                                         |
| `onCalendarDateSelect`   | `((currentDate: string) => void)` | —       | Called when the user selects a date from the calendar picker.                                                                           |

## Props — `TimeTableRowCellData`

| Prop                  | Type                                                             | Default | Description                                             |
| --------------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `id`                  | `string`                                                         | —       | Unique identifier for the cell.                         |
| `startTime` \*        | `string`                                                         | —       | Start time of the cell in `HH:mm` format.               |
| `endTime` \*          | `string`                                                         | —       | End time of the cell in `HH:mm` format.                 |
| `status` \*           | `TimeTableCellType`                                              | —       | Visual and interaction state of the cell.               |
| `title`               | `string`                                                         | —       | Primary label rendered inside the cell.                 |
| `subtitle`            | `string`                                                         | —       | Secondary label rendered below `title` inside the cell. |
| `customPopover`       | `TimeTablePopoverProps`                                          | —       | Popover shown when the user interacts with this cell.   |
| `cellStyleAttributes` | `TimeTableCellStyleAttributes`                                   | —       | Color and pattern overrides for this cell.              |
| `onClick`             | `\| ((data: TimeTableRowCellData, e: React.MouseEvent) => void)` | —       | Called when the user clicks this cell.                  |

## Rules

-   Do not combine `onClick` on a cell with a `trigger="click"` popover on the same cell — they conflict.
