import { Dayjs } from "dayjs";
import { FocusType, InternalCalendarProps } from "./types";
export type YearVariant = "default" | "current-year" | "other-decade" | "selected-year";
interface Props extends Pick<InternalCalendarProps, "minDate" | "maxDate" | "allowDisabledSelection"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string | undefined;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onYearSelect: (value: Dayjs) => void;
}
export declare const InternalCalendarYear: ({ calendarDate, currentFocus, selectedStartDate, selectedEndDate, viewCalendarDate, isNewSelection, minDate, maxDate, allowDisabledSelection, onYearSelect, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
