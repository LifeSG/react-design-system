import { PopoverV2TriggerType } from "../popover-v2";

export type ScheduleCellType = "booked" | "available" | "blocked" | "pending";

export interface ScheduleRowData {
    id?: string;
    name: string;
    rowCells: ScheduleRowCellData[];
    onRowNameClick?: (rowData: ScheduleRowData, e: React.MouseEvent) => void;
}

export interface SchedulePopoverProps {
    trigger: PopoverV2TriggerType;
    content: string | JSX.Element | (() => React.ReactNode);
    delay?: { open?: number; close?: number };
    offset?: number;
}

export interface ScheduleProps {
    id?: string;
    className?: string;
    "data-testid"?: string;
    view?: "day" | "week";
    date: string;
    emptyContentMessage?: string;
    rowData: ScheduleRowData[];
    loading?: boolean;
    // HH:mm format
    minTime?: string;
    // HH:mm format
    maxTime?: string;
    // HH:mm format - initial scroll position, defaults to minTime if not provided
    initialScrollTime?: string;
    minDate?: string;
    maxDate?: string;
    onPreviousDayClick: (currentDate: string) => void;
    onNextDayClick: (currentDate: string) => void;
    onCalendarDateSelect?: (currentDate: string) => void;
    onTodayClick?: () => void;
    onEmptySlotClick?: () => void;
    emptySlotPopover?: SchedulePopoverProps;
}

export interface ScheduleRowCellData {
    id?: string;
    startTime: string; // HH:mm format
    endTime: string; // HH:mm format
    status: ScheduleCellType;
    capacity?: number;
    date: string;
    booked?: number;
    customPopover?: SchedulePopoverProps;
    onClick?: (data: ScheduleRowCellData, e: React.MouseEvent) => void;
}
