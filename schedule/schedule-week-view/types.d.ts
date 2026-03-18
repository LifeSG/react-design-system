import { ScheduleEntityProps, ScheduleSlotProps } from "../types";
import { RefObject } from "react";
export interface ScheduleWeekViewProps {
    date: string;
    serviceData: ScheduleEntityProps[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    initialScrollTime?: string | undefined;
    onSlotClick?: (data: ScheduleSlotProps, e: React.MouseEvent) => void | undefined;
    containerRef: RefObject<HTMLDivElement>;
    blockedMessage?: string | undefined;
    onClickHiddenSlots?: (hiddenServices: string[]) => void | undefined;
}
/**
 * Extended slot type that includes service information
 * Useful for week view where we need to track which service a slot belongs to
 */
export interface SlotWithService extends ScheduleSlotProps {
    serviceName: string;
}
export interface PositionedSlot {
    slot: SlotWithService;
    column: number;
    offsetTop: number;
}
interface SlotLayoutInfo {
    date: string;
    serviceName: string;
    startTime: string;
    endTime: string;
    visible: boolean;
    width: number;
}
export type SlotLayoutMap = Record<string, SlotLayoutInfo>;
export {};
