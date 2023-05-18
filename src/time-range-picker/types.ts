export type TimeRangePickerFormat = "12hr";

export interface TimeRangeInputValue {
    startTime: string;
    endTime: string;
}

export interface TimeRangePickerProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    readOnly?: boolean | undefined;
    "data-testid"?: string | undefined;

    // Input-specific attributes

    value?: TimeRangeInputValue | undefined;
    format?: TimeRangePickerFormat | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    onChange?: ((value: TimeRangeInputValue) => void) | undefined;
    onBlur?: (() => void) | undefined;
}
