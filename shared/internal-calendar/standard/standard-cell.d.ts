import { Dayjs } from "dayjs";
import { FocusType } from "../types";
interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    startDate: string | undefined;
    endDate: string | undefined;
    hoverDate: string;
    focusDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    isNewSelection?: boolean | undefined;
    currentFocus?: FocusType | undefined;
    showActiveMonthDaysOnly?: boolean | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
    onFocus: (value: string) => void;
    setFocusCell: (value: string) => void;
    tabIndex?: number;
}
export declare const StandardCell: ({ date, calendarDate, startDate, endDate, currentFocus, hoverDate, focusDate, minDate, maxDate, disabledDates, allowDisabledSelection, isNewSelection, showActiveMonthDaysOnly, onSelect, onHover, onFocus, setFocusCell, tabIndex, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
