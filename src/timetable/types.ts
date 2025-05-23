import { PopoverV2TriggerType } from "../popover-v2";

export type TimeTableCellType =
    | "filled"
    | "blocked"
    | "default"
    | "disabled"
    | "pending";

export interface TimeTableRowData {
    id?: string | undefined;
    name: string;
    rowCells: TimeTableRowCellData[];
    subtitle?: string | JSX.Element | undefined;
    rowHeaderPopover?: TimeTablePopoverProps | undefined;
    outOfRangeCellPopover?: TimeTablePopoverProps | undefined;
    // HH:mm format, defaults to minTime
    rowMinTime?: string | undefined;
    // HH:mm format, defaults to maxTime
    rowMaxTime?: string | undefined;
    onRowNameClick?:
        | ((rowData: TimeTableRowData, e: React.MouseEvent) => void)
        | undefined;
}

export interface TimeTablePopoverProps {
    trigger: PopoverV2TriggerType;
    content: string | JSX.Element | (() => React.ReactNode);
    delay?:
        | { open?: number | undefined; close?: number | undefined }
        | undefined;
    offset?: number | undefined;
}

export interface TimeTableProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    date: string;
    emptyContentMessage?: string;
    rowData: TimeTableRowData[];
    loading?: boolean | undefined;
    // HH:mm format
    minTime?: string | undefined;
    // HH:mm format
    maxTime?: string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    showCurrentDateAsToday?: boolean | undefined;
    showDateAsShortForm?: boolean | undefined;
    onRefresh?: (() => void) | undefined;
    onPage?: (() => void) | undefined;
    onPreviousDayClick: (currentDate: string) => void;
    onNextDayClick: (currentDate: string) => void;
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
}

export interface TimeTableRowCellData {
    id?: string | undefined;
    // HH:mm format
    startTime: string;
    // HH:mm format
    endTime: string;
    status: TimeTableCellType;
    title?: string | undefined;
    subtitle?: string | undefined;
    customPopover?: TimeTablePopoverProps | undefined;
    onClick?:
        | ((data: TimeTableRowCellData, e: React.MouseEvent) => void)
        | undefined;
}
