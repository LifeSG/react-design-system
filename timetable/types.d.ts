import { PopoverV2TriggerType } from "../popover-v2";
import { ThemeStyleProps } from "../theme/types";
export type TimeTableCellType = "filled" | "blocked" | "default" | "disabled" | "pending";
export interface TimeTableCellStyleAttributes {
    /** Main background color for the cell */
    backgroundColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    /** Alternate background color (used for striped patterns in blocked/pending status) */
    altBackgroundColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    /** Hover background color for the cell */
    hoverBackgroundColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    /** Alternate hover background color for the cell */
    altHoverBackgroundColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    /** Display style for the cell. If not set, defaults based on cell type (blocked/pending = striped, others = solid) */
    styleType?: "default" | "solid" | "stripes" | undefined;
}
export interface TimeTableRef {
    /** Resets the scroll position to the initialScrollTime if provided */
    resetScroll: () => void;
}
export interface TimeTableRowData {
    /** Unique identifier for the row */
    id?: string | undefined;
    /** Display name of the row */
    name: string;
    /** Array of cell data for this row */
    rowCells: TimeTableRowCellData[];
    /** Optional subtitle text or element displayed below the row name */
    subtitle?: string | JSX.Element | undefined;
    /** Popover configuration for the row header */
    rowHeaderPopover?: TimeTablePopoverProps | undefined;
    /** Popover configuration for cells outside the time range */
    outOfRangeCellPopover?: TimeTablePopoverProps | undefined;
    /** The minimum time for this row. Format in HH:mm. Defaults to minTime */
    rowMinTime?: string | undefined;
    /** The maximum time for this row. Format in HH:mm. Defaults to maxTime */
    rowMaxTime?: string | undefined;
    /** Callback function when the row name is clicked */
    onRowNameClick?: ((rowData: TimeTableRowData, e: React.MouseEvent) => void) | undefined;
}
export interface TimeTablePopoverProps {
    /** The trigger type for showing the popover */
    trigger: PopoverV2TriggerType;
    /** The content to display in the popover */
    content: string | JSX.Element | (() => React.ReactNode);
    /** Delay in milliseconds before opening/closing the popover */
    delay?: {
        open?: number | undefined;
        close?: number | undefined;
    } | undefined;
    /** Offset distance of the popover from the trigger element */
    offset?: number | undefined;
}
export interface TimeTableProps {
    /** Unique identifier for the timetable */
    id?: string | undefined;
    /** Additional CSS class name */
    className?: string | undefined;
    /** Test identifier for testing purposes */
    "data-testid"?: string | undefined;
    /** The date to display in the timetable */
    date: string;
    /** Message to display when there is no content */
    emptyContentMessage?: string;
    /** Array of row data to display in the timetable */
    rowData: TimeTableRowData[];
    /** Whether the timetable is in a loading state */
    loading?: boolean | undefined;
    /** The minimum time of the timetable. Format in HH:mm */
    minTime?: string | undefined;
    /** The maximum time of the timetable. Format in HH:mm */
    maxTime?: string | undefined;
    /** Initial scroll position in HH:mm format (e.g., "09:00" will scroll to 9am on mount) */
    initialScrollTime?: string | undefined;
    /** The minimum selectable date */
    minDate?: string | undefined;
    /** The maximum selectable date */
    maxDate?: string | undefined;
    /** Total number of records for pagination */
    totalRecords?: number | undefined;
    /** Whether to display the current date as "Today" */
    showCurrentDateAsToday?: boolean | undefined;
    /** Whether to display the date in short form */
    showDateAsShortForm?: boolean | undefined;
    /** Rounds initial scroll time to the nearest interval, e.g 6:30 will be clamped to 6:00 when interval = 60. Default is true */
    roundInitialScrollTime?: boolean | undefined;
    /** Callback function when the refresh button is clicked */
    onRefresh?: (() => void) | undefined;
    /** Callback function for pagination */
    onPage?: (() => void) | undefined;
    /** Callback function when the previous day button is clicked */
    onPreviousDayClick: (currentDate: string) => void;
    /** Callback function when the next day button is clicked */
    onNextDayClick: (currentDate: string) => void;
    /** Callback function when a date is selected from the calendar */
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
}
export interface TimeTableRowCellData {
    /** Unique identifier for the cell */
    id?: string | undefined;
    /** The start time of the cell. Format in HH:mm */
    startTime: string;
    /** The end time of the cell. Format in HH:mm */
    endTime: string;
    /** The status/type of the cell. Values: "filled" | "blocked" | "default" | "disabled" | "pending" */
    status: TimeTableCellType;
    /** Title text displayed in the cell */
    title?: string | undefined;
    /** Subtitle text displayed in the cell */
    subtitle?: string | undefined;
    /** Custom popover configuration for this cell */
    customPopover?: TimeTablePopoverProps | undefined;
    /** Custom style attributes for the cell. If not specified, falls back to default row bar colors. */
    cellStyleAttributes?: TimeTableCellStyleAttributes | undefined;
    /** Callback function when the cell is clicked */
    onClick?: ((data: TimeTableRowCellData, e: React.MouseEvent) => void) | undefined;
}
