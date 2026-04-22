import { ScheduleEntityProps, ScheduleSlotProps } from "../types";
import { RefObject } from "react";
/** Internal props for the week-view layout of the Schedule component. */
export interface ScheduleWeekViewProps {
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
    /** Called when a timeslot cell is clicked. */
    onSlotClick?: (
        data: ScheduleSlotProps,
        e: React.MouseEvent
    ) => void | undefined;
    /** Ref attached to the outer scroll container element. */
    containerRef: RefObject<HTMLDivElement>;
    /** Custom message shown for blocked slots instead of the default "Unavailable" text. */
    blockedMessage?: string | undefined;
    /** Called when the hidden slots button is clicked in week view. */
    onClickHiddenSlots?: (hiddenServices: string[]) => void | undefined;
}

/**
 * Extended slot type that includes service information
 * Useful for week view where we need to track which service a slot belongs to
 */
export interface SlotWithService extends ScheduleSlotProps {
    serviceName: string;
}

/** A slot with its computed column and vertical offset for layout rendering. */
export interface PositionedSlot {
    /** The slot with its associated service information. */
    slot: SlotWithService;
    /** The column index this slot occupies within its time interval. */
    column: number;
    /** The vertical pixel offset from the top of the schedule grid. */
    offsetTop: number;
}
interface SlotLayoutInfo {
    date: string;
    serviceName: string;
    startTime: string;
    endTime: string;
    visible: boolean; // Whether this slot is visible or hidden
    width: number; // width percentage as number
}
// Global slot layout map - key is slotKey, value stores layout info
export type SlotLayoutMap = Record<string, SlotLayoutInfo>;
