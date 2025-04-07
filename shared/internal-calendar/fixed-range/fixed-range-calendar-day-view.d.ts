import { Dayjs } from "dayjs";
import { CommonCalendarProps } from "../types";
interface FixedRangeCalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string | undefined;
    numberOfDays: number | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const FixedRangeCalendarDayView: ({ calendarDate, disabledDates, selectedStartDate, onSelect, onHover, minDate, maxDate, allowDisabledSelection, numberOfDays, }: FixedRangeCalendarDayViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
