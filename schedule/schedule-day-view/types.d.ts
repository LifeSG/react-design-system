import type { CommonScheduleViewProps, ScheduleEmptySlotProps, ScheduleEntityProps, SchedulePopoverProps } from "../types";
export interface ScheduleDayViewProps extends CommonScheduleViewProps {
    serviceData: ScheduleEntityProps[];
    isMobile: boolean;
    onNextService?: () => void | undefined;
    onPrevService?: () => void | undefined;
    onEmptySlotClick?: (slot: ScheduleEmptySlotProps) => void | undefined;
    showPrevArrow: boolean;
    showNextArrow: boolean;
    emptySlotPopover?: ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps) | undefined;
}
