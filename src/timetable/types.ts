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
export type CellType = "filled" | "blocked" | "default";

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
    // HH:mm format
    minTime?: string;
    // HH:mm format
    maxTime?: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    width?: string | undefined;
    height?: string | undefined;
    blockedCellHoverContent?: string | JSX.Element | undefined;
    filledCellPopoverSize?: OverwritePopoverCustomSizeProps;
    blockedCellPopoverSize?: OverwritePopoverCustomSizeProps;
    onRefresh?: () => void;
    onPage?: () => void;
    onLeftArrowClick?: (currentDate: string) => void;
    onRightArrowClick?: (currentDate: string) => void;
    onNameClick?: (rowData: RowData, e: React.MouseEvent) => void;
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
    status: CellType;
    title?: string | undefined;
    subtitle?: string | undefined;
    filledBlockClickContent?: string | JSX.Element | undefined;
}
