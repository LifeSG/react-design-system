export type TimeRangePickerFormat = "12hr";

export interface TimeRangeSelectorProps {
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

    value?: TimeRangeSelectorProps | undefined;
    format?: TimeRangePickerFormat | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    onChange?: ((value: TimeRangeSelectorProps) => void) | undefined;
    onBlur?: (() => void) | undefined;
}
