import { PopoverV2TriggerType } from "../popover-v2";

export type TimeSlotCellType = "booked" | "available" | "blocked" | "pending";

export interface TimeSlotRowData {
    id?: string;
    name: string;
    rowCells: TimeSlotRowCellData[];
    onRowNameClick?: (rowData: TimeSlotRowData, e: React.MouseEvent) => void;
}

export interface TimeSlotPopoverProps {
    trigger: PopoverV2TriggerType;
    content: string | JSX.Element | (() => React.ReactNode);
    delay?: { open?: number; close?: number };
    offset?: number;
}

export interface TimeSlotProps {
    id?: string;
    className?: string;
    "data-testid"?: string;
    view?: "day" | "week";
    date: string;
    emptyContentMessage?: string;
    rowData: TimeSlotRowData[];
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
    onSlotClick?: (data: TimeSlotRowCellData, e: React.MouseEvent) => void;
}

export interface TimeSlotRowCellData {
    id?: string;
    // HH:mm format
    startTime: string;
    // HH:mm format
    endTime: string;
    status: TimeSlotCellType;
    capacity?: number;
    date: string;
    booked?: number;
    customPopover?: TimeSlotPopoverProps;
    onClick?: (data: TimeSlotRowCellData, e: React.MouseEvent) => void;
}
