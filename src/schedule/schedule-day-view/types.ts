import {
    ScheduleEmptySlotProps,
    ScheduleEntityProps,
    SchedulePopoverProps,
} from "../types";
import { RefObject } from "react";

/** Internal props for the day-view layout of the Schedule component. */
export interface ScheduleDayViewProps {
    /** The currently displayed date in YYYY-MM-DD format. */
    date: string;
    /** The list of service entities with their time slots to render. */
    serviceData: ScheduleEntityProps[];
    /** When `true`, renders a loading animation. */
    loading: boolean;
    /** The start boundary time of the schedule in HH:mm format. */
    minTime: string;
    /** The end boundary time of the schedule in HH:mm format. */
    maxTime: string;
    /** The initial scroll position time in HH:mm format. */
    initialScrollTime?: string | undefined;
    /** When `true`, adjusts the layout for mobile viewports. */
    isMobile: boolean;
    /** Ref attached to the outer scroll container element. */
    containerRef: RefObject<HTMLDivElement>;
    /** Called when the user navigates forward to the next service column. */
    onNextService?: () => void | undefined;
    /** Called when the user navigates back to the previous service column. */
    onPrevService?: () => void | undefined;
    /** Called when the user clicks an empty time slot. */
    onEmptySlotClick?: (slot: ScheduleEmptySlotProps) => void | undefined;
    /** When `true`, displays the previous-service navigation arrow. */
    showPrevArrow: boolean;
    /** When `true`, displays the next-service navigation arrow. */
    showNextArrow: boolean;
    /** Provides a custom popover configuration for a given empty slot. */
    emptySlotPopover?:
        | ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)
        | undefined;
    /** Custom message shown for blocked slots instead of the default "Unavailable" text. */
    blockedMessage?: string | undefined;
}
