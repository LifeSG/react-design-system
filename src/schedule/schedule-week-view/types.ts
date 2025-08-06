import {
    ScheduleEntityProps,
    ScheduleSlotProps,
    SchedulePopoverProps,
} from "../types";

export interface ScheduleWeekViewProps {
    date: string;
    serviceData: ScheduleEntityProps[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    initialScrollTime?: string | undefined;
    onSlotClick?: (
        data: ScheduleSlotProps,
        e: React.MouseEvent
    ) => void | undefined;
    emptySlotPopover?: SchedulePopoverProps | undefined;
    containerRef?: React.RefObject<HTMLElement> | undefined;
}

export type SlotWithService = ScheduleSlotProps & { serviceName: string };
export type ActiveSlot = { slot: SlotWithService; column: number };
export type ActiveSlotsMap = Map<string, ActiveSlot>;
