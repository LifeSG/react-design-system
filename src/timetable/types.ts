import { PopoverV2TriggerType } from "../popover-v2";
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
    title?: string | JSX.Element | undefined;
    subtitle?: string | JSX.Element | undefined;
    rowHeaderCustomPopover?: CustomPopoverProps;
    // HH:mm format, defaults to timetableMinTime
    rowMinTime?: string;
    // HH:mm format, defaults to timetableMaxTime
    rowMaxTime?: string;
    outsideOpHoursCellCustomPopover?: CustomPopoverProps | undefined;
}

export interface CustomPopoverProps {
    trigger: PopoverV2TriggerType;
    content: string | JSX.Element;
    width?: string | undefined;
    padding?: string | undefined;
    // in milliseconds
    delay?: number | undefined;
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
    onRefresh?: () => void;
    onPage?: () => void;
    onLeftArrowClick?: (currentDate: string) => void;
    onRightArrowClick?: (currentDate: string) => void;
    onNameClick?: (rowData: RowData, e: React.MouseEvent) => void;
    onCellClick?: (data: RowCellData, e: React.MouseEvent) => void;
    outsideOpHoursCellCustomPopover?: CustomPopoverProps | undefined;
}

export interface RowCellData {
    id: string;
    // HH:mm format
    startTime: string;
    // HH:mm format
    endTime: string;
    status?: CellType | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    // do note that if the custom popover trigger is set to click, it will override the behaviour with the onClick callback for each cell
    customPopover?: CustomPopoverProps | undefined;
}
