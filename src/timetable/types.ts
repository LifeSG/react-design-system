import type { PopoverTriggerType } from "../popover";

/**
 * Visual and interaction state of a timetable cell.
 *
 * - `"filled"` — cell represents an occupied or confirmed entry
 * - `"blocked"` — cell is unavailable and cannot be selected
 * - `"default"` — cell is available with no special state
 * - `"disabled"` — cell is inactive and non-interactive
 * - `"pending"` — cell represents a provisional or in-progress entry
 */
export type TimeTableCellType =
    | "filled"
    | "blocked"
    | "default"
    | "disabled"
    | "pending";

/**
 * Custom visual styling overrides for an individual timetable cell.
 */
export interface TimeTableCellStyleAttributes {
    /** Main background color for the cell. */
    backgroundColor?: string | undefined;
    /**
     * Alternate background color used for the second stripe in striped patterns.
     */
    altBackgroundColor?: string | undefined;
    /** Background color applied on hover. */
    hoverBackgroundColor?: string | undefined;
    /** Alternate background color applied on hover for striped patterns. */
    altHoverBackgroundColor?: string | undefined;
    /**
     * Cell background pattern.
     * - `"solid"` — flat fill
     * - `"stripes"` — diagonal stripe pattern
     * - `"default"` — uses `"stripes"` for `"blocked"`/`"pending"` statuses,
     *   `"solid"` for all others
     *
     * @default "default"
     */
    styleType?: "default" | "solid" | "stripes" | undefined;
}

/**
 * Imperative handle returned by `TimeTable` via `ref`.
 */
export interface TimeTableRef {
    /**
     * Scrolls the timetable back to `initialScrollTime`.
     * No-op when `initialScrollTime` is not set.
     */
    resetScroll: () => void;
}

/**
 * Represents a single row in the timetable.
 */
export interface TimeTableRowData {
    /** Unique identifier for the row. */
    id?: string | undefined;
    /** Display name shown in the row header. */
    name: string;
    /** Cells occupying time slots within this row. */
    rowCells: TimeTableRowCellData[];
    /** Secondary text or element rendered beneath the row name in the header. */
    subtitle?: string | JSX.Element | undefined;
    /** Popover attached to the row header label. */
    rowHeaderPopover?: TimeTablePopoverProps | undefined;
    /**
     * Popover shown when the user interacts with cells outside the active time range.
     */
    outOfRangeCellPopover?: TimeTablePopoverProps | undefined;
    /**
     * Earliest time this row is active, in `HH:mm` format.
     * Time slots before this value are rendered as out-of-range.
     *
     * @remarks Falls back to the timetable-level `minTime` when omitted.
     */
    rowMinTime?: string | undefined;
    /**
     * Latest time this row is active, in `HH:mm` format.
     * Time slots after this value are rendered as out-of-range.
     *
     * @remarks Falls back to the timetable-level `maxTime` when omitted.
     */
    rowMaxTime?: string | undefined;
    /**
     * Called when the row header name is clicked.
     *
     * @param rowData The full row data object for this row.
     * @param e The originating mouse event.
     */
    onRowNameClick?:
        | ((rowData: TimeTableRowData, e: React.MouseEvent) => void)
        | undefined;
}

/**
 * Configuration for a popover attached to a timetable row header or cell.
 */
export interface TimeTablePopoverProps {
    /** Interaction that opens the popover */
    trigger: PopoverTriggerType;
    /** Content rendered inside the popover. */
    content: string | JSX.Element | (() => React.ReactNode);
    /**
     * Open and close delays in milliseconds.
     * Useful for hover popovers to avoid flickering on quick mouse movements.
     */
    delay?:
        | { open?: number | undefined; close?: number | undefined }
        | undefined;
    /** Distance in pixels between the popover and its trigger element. */
    offset?: number | undefined;
}

/**
 * Props for the `TimeTable` component.
 */
export interface TimeTableProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The date currently displayed.
     */
    date: string;
    /**
     * Text shown in the empty state when `rowData` is empty or
     * `totalRecords` is `0`.
     */
    emptyContentMessage?: string;
    /** Rows to render in the timetable grid. */
    rowData: TimeTableRowData[];
    /**
     * When `true`, replaces row content with a loading spinner.
     */
    loading?: boolean | undefined;
    /**
     * Earliest hour column displayed, in `HH:mm` format.
     * Rounded to the nearest full hour internally.
     *
     * @default "00:00"
     */
    minTime?: string | undefined;
    /**
     * Latest hour column displayed, in `HH:mm` format.
     * Rounded up to the nearest full hour internally.
     *
     * @default "23:00"
     */
    maxTime?: string | undefined;
    /**
     * Time to scroll to on mount in `HH:mm` format (e.g. `"09:00"`).
     */
    initialScrollTime?: string | undefined;
    /**
     * Earliest date the user can navigate to in the date picker.
     */
    minDate?: string | undefined;
    /**
     * Latest date the user can navigate to in the date picker
     */
    maxDate?: string | undefined;
    /**
     * Total number of records across all pages.
     *
     * When `0`, the empty state is shown regardless of `rowData`.
     */
    totalRecords?: number | undefined;
    /**
     * When `true`, the date header displays `"Today"` instead of the
     * formatted date string when `date` matches the current calendar day.
     */
    showCurrentDateAsToday?: boolean | undefined;
    /** When `true`, the date header uses an abbreviated date format. */
    showDateAsShortForm?: boolean | undefined;
    /**
     * When `true`, `initialScrollTime` is snapped to the nearest time
     * interval (e.g. `"06:30"` snaps to `"06:00"` with a 60-minute
     * interval).
     *
     * @default true
     */
    roundInitialScrollTime?: boolean | undefined;
    /** Called when the user clicks the refresh button in the header. */
    onRefresh?: (() => void) | undefined;
    /**
     * Called when the timetable needs to load the next page of rows.
     *
     * @remarks Triggered automatically when the user scrolls to the bottom
     * and `rowData.length` is less than `totalRecords`. Providing this
     * prop enables lazy loading.
     */
    onPage?: (() => void) | undefined;
    /**
     * Called when the user navigates to the previous day.
     *
     * @param currentDate The date currently displayed before navigation.
     */
    onPreviousDayClick: (currentDate: string) => void;
    /**
     * Called when the user navigates to the next day.
     *
     * @param currentDate The date currently displayed before navigation.
     */
    onNextDayClick: (currentDate: string) => void;
    /**
     * Called when the user selects a date from the calendar picker.
     *
     * @param currentDate The date the user selected.
     */
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
}

/**
 * Represents a single time-slot cell within a timetable row.
 */
export interface TimeTableRowCellData {
    /** Unique identifier for the cell. */
    id?: string | undefined;
    /** Start time of the cell in `HH:mm` format. */
    startTime: string;
    /** End time of the cell in `HH:mm` format. */
    endTime: string;
    /**
     * Visual and interaction state of the cell.
     */
    status: TimeTableCellType;
    /** Primary label rendered inside the cell. */
    title?: string | undefined;
    /** Secondary label rendered below `title` inside the cell. */
    subtitle?: string | undefined;
    /** Popover shown when the user interacts with this cell. */
    customPopover?: TimeTablePopoverProps | undefined;
    /**
     * Color and pattern overrides for this cell.
     */
    cellStyleAttributes?: TimeTableCellStyleAttributes | undefined;
    /**
     * Called when the user clicks this cell.
     *
     * @param data The cell data for this cell.
     * @param e The originating mouse event.
     */
    onClick?:
        | ((data: TimeTableRowCellData, e: React.MouseEvent) => void)
        | undefined;
}
