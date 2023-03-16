/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CalendarProps } from "./types";
export declare type DayVariant = "default" | "other-month" | "today";
interface CalendarDayProps extends Pick<CalendarProps, "disabledDates"> {
    selectedStartDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
}
export declare const CalendarDay: ({ calendarDate, disabledDates, selectedStartDate, onSelect, }: CalendarDayProps) => JSX.Element;
export {};
