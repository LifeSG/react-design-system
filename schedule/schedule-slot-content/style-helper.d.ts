import type { SlotStyle } from "../../shared/time-slot";
import type { ScheduleSlotProps } from "../types";
export interface TimeSlotStyleProps {
    styleType: SlotStyle;
    bgColor: string;
    bgColor2?: string;
}
export declare const getTimeSlotStyleProps: (status: ScheduleSlotProps["status"]) => TimeSlotStyleProps;
