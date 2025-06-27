import { Dayjs } from "dayjs";
interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDate: string | undefined;
    hoverDate: string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    numberOfDays?: number | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
}
export declare const FixedRangeDayCell: ({ date, calendarDate, selectedDate, hoverDate, minDate, maxDate, disabledDates, allowDisabledSelection, numberOfDays, onSelect, onHover, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
