export type TimepickerFormat = "12hr" | "24hr";

export interface TimepickerProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string;
    id?: string;
    name?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    "data-testid"?: string;

    // Input-specific attributes
    value?: string;
    placeholder?: string;
    defaultValue?: string;
    format?: TimepickerFormat;
    disabled?: boolean;
    error?: boolean;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onSelectionCancel?: () => void;
}
