/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CommonCalendarProps, FocusType } from "../types";
export type DayVariant = "default" | "other-month" | "today";
interface CalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const StandardCalendarDayView: ({ calendarDate, currentFocus, disabledDates, selectedStartDate, selectedEndDate, onSelect, onHover, isNewSelection, minDate, maxDate, allowDisabledSelection, }: CalendarDayViewProps) => JSX.Element;
export {};
