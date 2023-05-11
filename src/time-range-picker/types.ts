export type TimeRangePickerFormat = "12hr" | "24hr";

export interface TimeRangePickerProps {
    startTime: string;
    endTime: string;
}

export interface TimeRangePickerProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    readOnly?: boolean | undefined;
    "data-testid"?: string | undefined;

    // Input-specific attributes

    value?: TimeRangePickerProps | undefined;
    placeholder?: string | undefined;
    defaultValue?: string | undefined;
    format?: TimeRangePickerFormat | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    onChange?: ((value: TimeRangePickerProps) => void) | undefined;
    onBlur?: (() => void) | undefined;
    onSelectionCancel?: (() => void) | undefined;
}
