import { Dayjs } from "dayjs";
import { CommonCalendarProps } from "../types";
export type DayVariant = "default" | "other-month" | "today";
interface CalendarDayViewProps extends CommonCalendarProps {
    selectedDate: string | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const SingleCalendarDayView: ({ calendarDate, disabledDates, selectedDate, onSelect, onHover, minDate, maxDate, allowDisabledSelection, showActiveMonthDaysOnly, }: CalendarDayViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
