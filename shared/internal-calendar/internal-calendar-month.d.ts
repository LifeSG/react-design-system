/// <reference types="react" />
import { Dayjs } from "dayjs";
import { FocusType, InternalCalendarProps } from "./types";
export type MonthVariant = "default" | "current-month" | "selected-month";
interface Props extends Pick<InternalCalendarProps, "type" | "between"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onMonthSelect: (value: Dayjs) => void;
}
export declare const InternalCalendarMonth: ({ calendarDate, currentFocus, selectedStartDate, selectedEndDate, viewCalendarDate, type, isNewSelection, between, onMonthSelect, }: Props) => JSX.Element;
export {};
