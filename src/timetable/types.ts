import { ResourceScheme } from "../theme";

export interface TimeTableProps {
    // YYYY-MM-DD format?
    date: string;
    // HH:mm format
    timetableMinTime: string;
    // HH:mm format
    timetableMaxTime: string;
    // HH:mm format
    minDate?: string | undefined;
    // HH:mm format
    maxDate?: string | undefined;
    rowBars: RowBarData[];
    // Boolean to determine if should have pagination, defaults to false
    paginate?: boolean | undefined;
    // What to show when no results
    emptyContent: EmptyContentProps;
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

interface EmptyContentProps {
    description: string;
    illustrationScheme: ResourceScheme;
}

export type TimeTableHeaderVariants =
    | "all"
    | "date-navigator-only"
    | "records-only"
    | "none";

export interface RowBarData {
    id: string;
    name: string | JSX.Element;
    subtitle?: string | JSX.Element | undefined;
    rowCells: RowCellData[];
    // HH:mm format
    rowMinTime: string;
    // HH:mm format
    rowMaxTime: string;
}

export interface RowCellData {
    id: string;
    // HH:mm format
    startTime: string;
    // HH:mm format
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
