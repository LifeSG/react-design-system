import { Dayjs } from "dayjs";
import { FocusType } from "../types";
interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    startDate: string;
    endDate: string;
    hoverDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    isNewSelection?: boolean | undefined;
    currentFocus?: FocusType | undefined;
    showActiveMonthDaysOnly?: boolean | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
}
export declare const StandardCell: ({ date, calendarDate, startDate, endDate, currentFocus, hoverDate, minDate, maxDate, disabledDates, allowDisabledSelection, isNewSelection, showActiveMonthDaysOnly, onSelect, onHover, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
