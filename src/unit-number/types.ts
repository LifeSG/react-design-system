export interface UnitNumberInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    "data-testid"?: string | undefined;
    readOnly?: boolean;
    placeholder?: string;

    // WAI-ARIA
    role?: string;

    // Input-specific Attributes
    value?: string | undefined;
    name?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: (value: string) => void | undefined;
    /**
     * Function that returns the raw values in the UnitNumberInput on change in an array format
     * as such [floor, unit]
     */
    onChangeRaw?: (value: string[]) => void | undefined;
    onBlur?: (value: string) => void | undefined;
    /**
     * Function that returns the raw values in the UnitNumberInput on blur in an array format
     * as such [floor, unit]
     */
    onBlurRaw?: (value: string[]) => void | undefined;
}
