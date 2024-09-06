import { MutableRefObject } from "react";
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

interface EmptyContentProps {
    description: string;
    illustrationScheme: ResourceScheme;
}

export interface RowData {
    id: string;
    name: string;
    rowCells: RowCellData[];
    subtitle?: string | JSX.Element | undefined;
    rowHeaderHoverContent?: string | JSX.Element | undefined;
    // HH:mm format, defaults to timetableMinTime
    rowMinTime?: string;
    // HH:mm format, defaults to timetableMaxTime
    rowMaxTime?: string;
}

export interface OverwritePopoverCustomSizeProps {
    width?: string | undefined;
    padding?: string | undefined;
}

export interface TimeTableProps {
    date: string;
    emptyContent: EmptyContentProps;
    rowData: RowData[];
    isLoading: boolean;
    // HH:mm format, defaults to 06:00
    minTime?: string;
    // HH:mm format, defaults to 22:00
    maxTime?: string;
    // YYYY-MM-DD format
    minDate?: string | undefined;
    // YYYY-MM-DD format
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    width?: string | undefined;
    height?: string | undefined;
    disabledCellHoverContent?: string | JSX.Element | undefined;
    filledCellPopoverSize?: OverwritePopoverCustomSizeProps;
    disabledCellPopoverSize?: OverwritePopoverCustomSizeProps;
    // Callback to invoke on refresh click
    onRefresh?: () => void;
    // Callback to invoke on pagination, will invoke when reach end of listing
    onPage?: () => void;
    // Override date navigate left/right function to custom function (eg: to have callbacks etc.)
    onLeftArrowClick?: (currentDate: string) => void;
    // Override date navigate left/right function to custom function (eg: to have callbacks etc.)
    onRightArrowClick?: (currentDate: string) => void;
    onNameClick?: (rowData: RowData, e: React.MouseEvent) => void;
    // Redirect user to url (resource booking page)
    onEmptyCellClick?: (
        id: string,
        intervalStart: string,
        intervalEnd: string,
        e: React.MouseEvent
    ) => void;
}

export interface RowCellData {
    id: string;
    // HH:mm format
    startTime: string;
    // HH:mm format
    endTime: string;
    status: string; // REVIEW - Maybe can have a type for this
    title?: string | undefined;
    subtitle?: string | undefined;
    filledBlockClickContent?: string | JSX.Element | undefined;
    // Redirect user to url (resource booking page)
    onEmptyCellClick?: (
        id: string,
        intervalStart: string,
        intervalEnd: string,
        e: React.MouseEvent
    ) => void;
    // Show popover for booking details
    onFilledBlockClick?: () => void;
    // Show popover with text
    onDisabledHover?: () => void;
    onHover?: () => void;
}
