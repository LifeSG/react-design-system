/**
 * Props for the UnitNumberInput component, a specialised input for Singapore-style
 * floor and unit number entry (e.g. "#12-34").
 *
 * @keywords unit-number, floor, apartment, address, singapore, split-input
 */
export interface UnitNumberInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    /** Additional CSS class names applied to the root element. */
    className?: string | undefined;
    /** Unique HTML identifier for the root element. */
    id?: string | undefined;
    /** Inline styles applied to the root element. */
    style?: React.CSSProperties | undefined;
    /** Tab order of the element in sequential keyboard navigation. */
    tabIndex?: number | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** When `true`, the input is read-only and cannot be changed by the user. */
    readOnly?: boolean | undefined;
    /** Placeholder text displayed in the unit field when empty. */
    placeholder?: string | undefined;

    // WAI-ARIA
    /** ARIA role applied to the root element. */
    role?: React.AriaRole | undefined;

    // Input-specific Attributes
    /** Controlled composite value of the unit number (e.g. `"12-34"`). */
    value?: string | undefined;
    /** Name attribute used when the input is part of a form. */
    name?: string | undefined;
    /** Applies error styling to indicate an invalid value. */
    error?: boolean | undefined;
    /** When `true`, the input is disabled and cannot be interacted with. */
    disabled?: boolean | undefined;
    /** HTML autocomplete hint for the browser. */
    autoComplete?: string | undefined;
    /** Called when the composite value changes. Returns the combined value string (e.g. `"12-34"`). */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Function that returns the raw values in the UnitNumberInput on change in an array format
     * as such [floor, unit]
     */
    onChangeRaw?: ((value: string[]) => void) | undefined;
    /** Called when the field loses focus. Returns the combined value string (e.g. `"12-34"`). */
    onBlur?: ((value: string) => void) | undefined;
    /**
     * Function that returns the raw values in the UnitNumberInput on blur in an array format
     * as such [floor, unit]
     */
    onBlurRaw?: ((value: string[]) => void) | undefined;
}
