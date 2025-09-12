import { Dayjs } from "dayjs";
import { InternalCalendarProps } from "../shared/internal-calendar";
import { TimeSlot } from "../time-slot-bar/types";
import { TimeSlotCellsVariant } from "./types";
export type DayVariant = "default" | "other-month" | "today";
interface TimeSlotWeekDaysProps extends Pick<InternalCalendarProps, "disabledDates" | "minDate" | "maxDate"> {
    selectedDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    slots: {
        [date: string]: TimeSlot[];
    };
    startTime?: string | undefined;
    endTime?: string | undefined;
    maxVisibleCellHeight?: number | undefined;
    interval?: number | undefined;
    variant?: TimeSlotCellsVariant | undefined;
    enableSelection?: boolean | undefined;
    onSlotClick?: ((date: string, timeSlot: TimeSlot) => void) | undefined;
}
export declare const TimeSlotBarWeekDays: ({ calendarDate, disabledDates, selectedDate, onSelect, minDate, maxDate, startTime, endTime, maxVisibleCellHeight, slots: daySlots, interval, variant, enableSelection, onSlotClick, }: TimeSlotWeekDaysProps) => import("react/jsx-runtime").JSX.Element;
export {};
