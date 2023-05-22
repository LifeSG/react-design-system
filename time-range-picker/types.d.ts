/// <reference types="react" />
export type TimeRangePickerFormat = "12hr";
export interface TimeRangeInputValue {
    startTime: string;
    endTime: string;
}
export interface TimeRangePickerProps {
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    readOnly?: boolean | undefined;
    "data-testid"?: string | undefined;
    value?: TimeRangeInputValue | undefined;
    format?: TimeRangePickerFormat | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    onChange?: ((value: TimeRangeInputValue) => void) | undefined;
    onBlur?: (() => void) | undefined;
}
