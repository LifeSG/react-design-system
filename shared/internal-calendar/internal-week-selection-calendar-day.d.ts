/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CommonCalendarProps, View } from "./types";
interface CalendarWeekSelectProps extends CommonCalendarProps {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentView: View;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const InternalWeekSelectionCalendarDay: ({ calendarDate, disabledDates, selectedStartDate, selectedEndDate, onSelect, onHover, minDate, maxDate, currentView, allowDisabledSelection, }: CalendarWeekSelectProps) => JSX.Element;
export {};
