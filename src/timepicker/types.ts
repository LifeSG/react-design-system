export type TimepickerFormat = "12hr" | "24hr";

export interface TimepickerProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    "data-testid"?: string | undefined;

    // Input-specific attributes
    value?: string | undefined;
    placeholder?: string | undefined;
    defaultValue?: string | undefined;
    format?: TimepickerFormat | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    error?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    onBlur?: (() => void) | undefined;
    onSelectionCancel?: (() => void) | undefined;
}
