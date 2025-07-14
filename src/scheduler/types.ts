import { PopoverV2TriggerType } from "../popover-v2";

export type SchedulerCellType =
    | "filled"
    | "blocked"
    | "default"
    | "disabled"
    | "pending"
    | "unavailable";

export interface SchedulerRowData {
    id?: string | undefined;
    name: string;
    rowCells: SchedulerRowCellData[];
    subtitle?: string | JSX.Element | undefined;
    rowHeaderPopover?: SchedulerPopoverProps | undefined;
    outOfRangeCellPopover?: SchedulerPopoverProps | undefined;
    // HH:mm format, defaults to minTime
    rowMinTime?: string | undefined;
    // HH:mm format, defaults to maxTime
    rowMaxTime?: string | undefined;
    onRowNameClick?:
        | ((rowData: SchedulerRowData, e: React.MouseEvent) => void)
        | undefined;
}

export interface SchedulerPopoverProps {
    trigger: PopoverV2TriggerType;
    content: string | JSX.Element | (() => React.ReactNode);
    delay?:
        | { open?: number | undefined; close?: number | undefined }
        | undefined;
    offset?: number | undefined;
}

export interface SchedulerProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    view?: "day" | "week";
    date: string;
    emptyContentMessage?: string;
    rowData: SchedulerRowData[];
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
    onViewChange?: ((view: "day" | "week") => void) | undefined;
    onTodayClick?: (() => void) | undefined;
    onSlotClick?:
        | ((data: SchedulerRowCellData, e: React.MouseEvent) => void)
        | undefined;
}

export interface SchedulerRowCellData {
    id?: string | undefined;
    // HH:mm format
    startTime: string;
    // HH:mm format
    endTime: string;
    status: SchedulerCellType;
    title?: string | undefined;
    subtitle?: string | undefined;
    customPopover?: SchedulerPopoverProps | undefined;
    onClick?:
        | ((data: SchedulerRowCellData, e: React.MouseEvent) => void)
        | undefined;
}
