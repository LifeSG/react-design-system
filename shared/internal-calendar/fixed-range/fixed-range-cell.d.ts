import { Dayjs } from "dayjs";
interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDate: string | undefined;
    focusDate: string;
    hoverDate: string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    numberOfDays?: number | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
    onFocus: (value: string) => void;
    setFocusCell: (value: string) => void;
    tabIndex: number;
}
export declare const FixedRangeDayCell: ({ date, calendarDate, selectedDate, hoverDate, focusDate, minDate, maxDate, disabledDates, allowDisabledSelection, numberOfDays, onSelect, onHover, onFocus, setFocusCell, tabIndex, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
