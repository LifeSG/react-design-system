/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CalendarType } from "./types";
export declare type MonthVariant = "default" | "current-month" | "selected-month";
interface Props {
    calendarDate: Dayjs;
    selectedStartDate: string;
    type: CalendarType;
    onSelect: (value: Dayjs) => void;
}
export declare const CalendarMonth: ({ calendarDate, selectedStartDate, type, onSelect, }: Props) => JSX.Element;
export {};
