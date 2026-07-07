import type { CommonScheduleViewProps, ScheduleEntityProps, ScheduleSlotProps } from "../types";
export interface ScheduleWeekViewProps extends CommonScheduleViewProps {
    serviceData: ScheduleEntityProps[];
    onSlotClick?: (data: ScheduleSlotProps, e: React.MouseEvent) => void | undefined;
    onClickHiddenSlots?: (hiddenServices: string[]) => void | undefined;
}
/**
 * Extended slot type that includes service information
 * Useful for week view where we need to track which service a slot belongs to
 */
export interface SlotWithService extends ScheduleSlotProps {
    serviceName: string;
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
