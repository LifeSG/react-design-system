/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CommonCalendarProps } from "../types";
interface WeekCalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const WeekCalendarDayView: ({ calendarDate, disabledDates, selectedStartDate, onSelect, onHover, minDate, maxDate, allowDisabledSelection, }: WeekCalendarDayViewProps) => JSX.Element;
export {};
