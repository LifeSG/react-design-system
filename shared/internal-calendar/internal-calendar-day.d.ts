/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CommonCalendarProps, FocusType, InternalCalendarProps } from "./types";
export type DayVariant = "default" | "other-month" | "today";
interface CalendarDayProps extends CommonCalendarProps, Pick<InternalCalendarProps, "variant"> {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const InternalCalendarDay: ({ calendarDate, currentFocus, disabledDates, selectedStartDate, selectedEndDate, onSelect, onHover, isNewSelection, minDate, maxDate, variant, allowDisabledSelection, }: CalendarDayProps) => JSX.Element;
export {};
