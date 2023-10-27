/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CommonCalendarProps } from "./types";
interface CalendarWeekSelectProps extends CommonCalendarProps {
    selectedStartDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const InternalWeekSelectionCalendarDay: ({ calendarDate, disabledDates, selectedStartDate, onSelect, onHover, minDate, maxDate, allowDisabledSelection, }: CalendarWeekSelectProps) => JSX.Element;
export {};
