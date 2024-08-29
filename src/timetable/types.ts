import { ResourceScheme } from "../theme";

export const ROW_BAR_COLOR_SEQUENCE = [
    "#FFE6BB",
    "#D8EFEB",
    "#E6EAFE",
    "#FAE4E5",
    "#D3EEFC",
] as const; // Assert to be a readonly tuple
export const ROW_CELL_GAP = 2;
export const ROW_INTERVAL = 15;
export type RowBarColors = (typeof ROW_BAR_COLOR_SEQUENCE)[number];

export interface TimeTableProps {
    // YYYY-MM-DD format
    date: string;
    // HH:mm format, defaults to 06:00
    minTime?: string;
    // HH:mm format, defaults to 22:00
    maxTime?: string;
    // YYYY-MM-DD format
    minDate?: string | undefined;
    // YYYY-MM-DD format
    maxDate?: string | undefined;
    rowBars: RowBarData[];
    emptyContent: EmptyContentProps;
    isLoading: boolean;
    totalRecords?: number | undefined;
    // Callback to invoke on refresh click
    onRefresh?: () => void;
    // Callback to invoke on pagination, will invoke when reach end of listing
    onPage?: () => void;
    // Override date navigate left/right function to custom function (eg: to have callbacks etc.)
    onLeftArrowClick?: (currentDate: string) => void;
    // Override date navigate left/right function to custom function (eg: to have callbacks etc.)
    onRightArrowClick?: (currentDate: string) => void;
    onNameClick?: (rowId: string) => void;
}

interface EmptyContentProps {
    description: string;
    illustrationScheme: ResourceScheme;
}

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

export interface RowBarProps extends RowBarData {
    timetableMinTime: string;
    timetableMaxTime: string;
    rowBarColor: RowBarColors;
    intervalWidth: number;
    onNameClick?: () => void | undefined;
}

export interface RowCellData {
    // HH:mm format
    startTime: string;
    // HH:mm format
    endTime: string;
    title?: string | undefined;
    subtitle?: string | undefined;
    status: string;
    // Redirect user to url (resource booking page)
    onEmptyBlockClick?: () => void | undefined;
    // Show popover for booking details
    onFilledBlockClick?: () => void | undefined;
    // Show popover with text
    onDisabledHover?: () => void | undefined;
    onHover?: () => void | undefined;
}
