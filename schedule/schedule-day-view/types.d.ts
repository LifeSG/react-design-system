import type { RefObject } from "react";
import type { ScheduleEmptySlotProps, ScheduleEntityProps, SchedulePopoverProps } from "../types";
export interface ScheduleDayViewProps {
    date: string;
    serviceData: ScheduleEntityProps[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    initialScrollTime?: string | undefined;
    isMobile: boolean;
    containerRef: RefObject<HTMLDivElement>;
    onNextService?: () => void | undefined;
    onPrevService?: () => void | undefined;
    onEmptySlotClick?: (slot: ScheduleEmptySlotProps) => void | undefined;
    showPrevArrow: boolean;
    showNextArrow: boolean;
    emptySlotPopover?: ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps) | undefined;
    blockedMessage?: string | undefined;
}
