/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CalendarType } from "./types";
export type YearVariant = "default" | "current-year" | "other-decade" | "selected-year";
interface Props {
    calendarDate: Dayjs;
    selectedStartDate: string;
    type: CalendarType;
    onSelect: (value: Dayjs) => void;
}
export declare const CalendarYear: ({ calendarDate, selectedStartDate, type, onSelect, }: Props) => JSX.Element;
export {};
