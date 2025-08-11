import { PopoverV2TriggerType } from "../popover-v2";

export type ScheduleCellType = "booked" | "available" | "blocked" | "pending";

export type ScheduleView = "day" | "week";

export interface ScheduleEntityProps {
    id: string;
    name: string;
    slots: ScheduleSlotProps[];
}

export interface SchedulePopoverProps {
    trigger: PopoverV2TriggerType;
    content: string | JSX.Element | (() => React.ReactNode);
    delay?: { open?: number; close?: number } | undefined;
    offset?: number | undefined;
}

export interface ScheduleProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    view?: ScheduleView | undefined;
    date: string;
    emptyContentMessage?: string | undefined;
    serviceData: ScheduleEntityProps[];
    loading?: boolean;
    // HH:mm format
    minTime?: string | undefined;
    // HH:mm format
    maxTime?: string | undefined;
    // HH:mm format - initial scroll position, defaults to minTime if not provided
    initialScrollTime?: string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    onPreviousDayClick: (currentDate: string) => void;
    onNextDayClick: (currentDate: string) => void;
    onCalendarDateSelect: (currentDate: string) => void;
    onTodayClick: () => void;
    onEmptySlotClick?: (slot: ScheduleEmptySlotProps) => void | undefined;
    emptySlotPopover?: SchedulePopoverProps | undefined;
    blockedMessage?: string | undefined;
    onClickHiddenSlots?: (hiddenServices: string[]) => void | undefined;
}

export interface ScheduleSlotProps {
    id: string;
    startTime: string; // HH:mm format
    endTime: string; // HH:mm format
    status: ScheduleCellType;
    capacity?: number | undefined;
    date: string | undefined;
    booked?: number | undefined;
    customPopover?: SchedulePopoverProps | undefined;
    onClick?: (
        data: ScheduleSlotProps,
        e: React.MouseEvent
    ) => void | undefined;
}

export interface ScheduleEmptySlotProps {
    startTime: string;
    endTime: string;
    name: string;
}
