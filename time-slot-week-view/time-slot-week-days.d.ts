/// <reference types="react" />
import { Dayjs } from "dayjs";
import { InternalCalendarProps } from "../shared/internal-calendar";
import { TimeSlot } from "../time-slot-bar/types";
export type DayVariant = "default" | "other-month" | "today";
interface TimeSlotWeekDaysProps extends Pick<InternalCalendarProps, "disabledDates" | "minDate" | "maxDate"> {
    selectedDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    slots?: {
        [date: string]: TimeSlot[];
    } | undefined;
    enableSelection?: boolean | undefined;
    onSlotClick?: (date: string, timeSlot: TimeSlot) => void | undefined;
}
export declare const TimeSlotWeekDays: ({ calendarDate, disabledDates, selectedDate, onSelect, minDate, maxDate, slots: daySlots, enableSelection, onSlotClick, }: TimeSlotWeekDaysProps) => JSX.Element;
export {};
