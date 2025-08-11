import {
    ScheduleEntityProps,
    SchedulePopoverProps,
    ScheduleEmptySlotProps,
} from "../types";
import { RefObject } from "react";

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
    emptySlotPopover?: SchedulePopoverProps | undefined;
    blockedMessage?: string | undefined;
}
