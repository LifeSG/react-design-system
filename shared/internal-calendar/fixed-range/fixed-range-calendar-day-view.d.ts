/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CommonCalendarProps } from "../types";
interface FixedRangeCalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    numberOfDays: number;
}
export declare const FixedRangeCalendarDayView: ({ calendarDate, disabledDates, selectedStartDate, onSelect, onHover, minDate, maxDate, allowDisabledSelection, numberOfDays, }: FixedRangeCalendarDayViewProps) => JSX.Element;
export {};
