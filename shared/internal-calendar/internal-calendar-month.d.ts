import { Dayjs } from "dayjs";
import { FocusType, InternalCalendarProps } from "./types";
export type MonthVariant = "default" | "current-month" | "selected-month";
interface Props extends Pick<InternalCalendarProps, "type" | "minDate" | "maxDate" | "allowDisabledSelection"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onMonthSelect: (value: Dayjs) => void;
}
export declare const InternalCalendarMonth: ({ calendarDate, currentFocus, selectedStartDate, selectedEndDate, viewCalendarDate, type, isNewSelection, minDate, maxDate, allowDisabledSelection, onMonthSelect, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
