export type TimerangePickerFormat = "12hr" | "24hr";

export interface TimerangePickerProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id1?: string | undefined;
    id2?: string | undefined;
    name?: string | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    "data-testid"?: string | undefined;

    // Input-specific attributes
    startTime?: string | undefined;
    endTime?: string | undefined;
    placeholder?: string | undefined;
    defaultValue?: string | undefined;
    format?: TimerangePickerFormat | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    onChange?: (id: number, value: string) => void | undefined;
    onBlur?: () => void | undefined;
    onSelectionCancel?: () => void | undefined;
}
