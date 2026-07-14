/**
 * Props for `UnitNumberInput`.
 */
export interface UnitNumberInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    "data-testid"?: string | undefined;
    readOnly?: boolean | undefined;
    /**
     * Placeholder text in `"floor-unit"` format.
     *
     * @default "00-8888"
     */
    placeholder?: string | undefined;

    // WAI-ARIA
    role?: React.AriaRole | undefined;

    // Input-specific Attributes
    /**
     * The combined unit number value in `"floor-unit"` format (e.g. `"01-234"`).
     */
    value?: string | undefined;
    name?: string | undefined;
    /** Renders the input in an error state. */
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    autoComplete?: string | undefined;
    /**
     * Called when the value of either sub-input changes.
     *
     * @param value The combined value in `"floor-unit"` format, an empty string when
     * both fields are empty, or `"Invalid unit number"` when only one field is filled.
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when either sub-input changes.
     *
     * @param value The raw individual field values as `[floor, unit]`.
     */
    onChangeRaw?: ((value: string[]) => void) | undefined;
    /**
     * Called when focus leaves the component entirely.
     *
     * @param value The combined value in `"floor-unit"` format, an empty string when
     * both fields are empty, or `"Invalid unit number"` when only one field is filled.
     */
    onBlur?: ((value: string) => void) | undefined;
    /**
     * Called when focus leaves the component.
     *
     * @param value The raw individual field values as `[floor, unit]`.
     */
    onBlurRaw?: ((value: string[]) => void) | undefined;
}
