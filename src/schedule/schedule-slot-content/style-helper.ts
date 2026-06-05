import type { SlotStyle } from "../../shared/time-slot";
import { Colour } from "../../theme";
import type { ScheduleSlotProps } from "../types";

export interface TimeSlotStyleProps {
    styleType: SlotStyle;
    bgColor: string;
    bgColor2?: string;
}

export const getTimeSlotStyleProps = (
    status: ScheduleSlotProps["status"]
): TimeSlotStyleProps => {
    switch (status) {
        case "pending":
            return {
                styleType: "stripes",
                bgColor: Colour["bg-warning"],
                bgColor2: Colour["bg-warning-hover"],
            };
        case "blocked":
            return {
                styleType: "default",
                bgColor: Colour["bg-inverse-subtle"],
            };
        case "available":
            return {
                styleType: "default",
                bgColor: Colour["bg-success-hover"],
            };
        case "booked":
            return {
                styleType: "default",
                bgColor: Colour["bg-primary-subtler"],
            };
        default:
            return {
                styleType: "default",
                bgColor: Colour["bg"],
            };
    }
};
