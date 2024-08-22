export interface TimeTableProps {
    // YYYY-MM-DD format?
    date: string;
    // hh:mm format?
    timetableMinTime: string;
    // hh:mm format?
    timetableMaxTime: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    rows: RowData[];
    // Boolean to determine if should have pagination, defaults to false
    paginate?: boolean | undefined;
    // What to show when no results
    emptyContent?: string | JSX.Element | undefined;
    isLoading: boolean;
    totalRecords?: number | undefined;
    // defaults to all
    headerVariant?: TimeTableHeaderVariants;
    // Callback to invoke on refresh click
    onRefresh?: () => void;
    // Callback to invoke on pagination, will invoke when reach end of listing
    onPage?: () => void;
    // Override date navigate left/right function to custom function (eg: to have callbacks etc.)
    onLeftArrowClick?: () => void;
    // Override date navigate left/right function to custom function (eg: to have callbacks etc.)
    onRightArrowClick?: () => void;
    onNameClick?: (rowId: string) => void;
}

export type TimeTableHeaderVariants =
    | "all"
    | "date-navigator-only"
    | "records-only"
    | "none";

export interface RowData {
    id: string;
    name: string | JSX.Element;
    subtitle?: string | JSX.Element | undefined;
    rowBlocks: RowBlock[];
    rowMinTime: string;
    rowMaxTime: string;
}

export interface RowBlock {
    // hh:mm format?
    startTime: string;
    // hh:mm format?
    endTime: string;
    title?: string | undefined;
    subtitle?: string | undefined;
    status: string;
    // Redirect user to url (resource booking page)
    onEmptyBlockClick?: (() => void) | undefined;
    // Show popover for booking details
    onFilledBlockClick?: (() => void) | undefined;
    // Show popover with text
    onDisabledHover?: (() => void) | undefined;
    onHover?: (() => void) | undefined;
}
