import { Dayjs } from "dayjs";

export type DatePickerType = "start" | "range";

export type InputContainerType = DatePickerType | "none";

export type YearMonthTransition = TransitionValue | object;

export type VariantDay =
    | "default"
    | "nextMonth"
    | "rangeSelected"
    | "startSelected"
    | "today";

export type VariantMonth =
    | "default"
    | "currentMonth"
    | "nextMonth"
    | "selectedMonth";

export type VariantYear =
    | "default"
    | "currentYear"
    | "nextDecaded"
    | "selectedYear";

export type View = "Day" | "Month" | "Year";

export type FocusToTypes = {
    container: InputContainerType;
    countToEvenClose: number;
};

export interface DatePickerProps extends React.HTMLAttributes<HTMLElement> {
    "data-testid"?: string;
    disabled?: boolean;

    // Input-specific Attributes
    error?: boolean;
    readOnly?: boolean;
    disabledDate?: string[]; // [YYYY-MM-DD]
    hasButton?: boolean;
    value?: string; // YYYY-MM-DD
    rangeValue?: string; // YYYY-MM-DD
    type: DatePickerType;
}

export interface GenerateDayStatusValue {
    variant: VariantDay;
    dateStartWithYear: string;
    isDisabled: boolean;
    disabledBefore: boolean;
    disabledAfter: boolean;
}

export type TransitionValue = {
    start: string;
    range: string;
    startStatus: "pre-confirmed" | "confirmed";
    rangeStatus: "pre-confirmed" | "confirmed";
    tmpStateValue?: string; // only use in month or year to store the pre-confirmed value from selected Range or start
    tmpStateType?: "start" | "range" | "none";
};

interface YearMonthBase {
    calendarDate: Dayjs;
    focusTo: FocusToTypes;
    showView: View;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    controlTransitionValue: () => TransitionValue;
}

export interface MonthPickerProps extends YearMonthBase {}

export interface YearPickerProps extends YearMonthBase {}
