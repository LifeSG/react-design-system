/**
 * Props for the UnitNumberInput component - Singapore-style unit number entry.
 *
 * A specialised input pair for entering a floor-unit combination in the format
 * commonly used in Singapore addresses (e.g., `#12-345`). Emits the combined
 * string value and optionally the raw `[floor, unit]` array.
 *
 * @example
 * ```tsx
 * <UnitNumberInput
 *     value={unitNumber}
 *     onChange={(value) => setUnitNumber(value)}
 *     placeholder="Floor / Unit"
 * />
 * ```
 * @keywords floor unit, Singapore address, apartment number, flat number, unit field
 */
export interface UnitNumberInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    /** Additional CSS class name. */
    className?: string | undefined;
    /** The HTML `id` attribute for the root element. */
    id?: string | undefined;
    /** Inline styles applied to the root element. */
    style?: React.CSSProperties | undefined;
    /** The `tabIndex` for keyboard navigation. */
    tabIndex?: number | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the element in automated tests.
     */
    "data-testid"?: string | undefined;
    /**
     * Makes the input read-only, displaying the value without allowing edits.
     *
     * @default false
     */
    readOnly?: boolean | undefined;
    /** Placeholder text shown in the input fields when empty. */
    placeholder?: string | undefined;

    // WAI-ARIA
    /** The ARIA `role` attribute for the root element. */
    role?: React.AriaRole | undefined;

    // Input-specific Attributes
    /**
     * The formatted unit number string value (e.g., `"12-345"`).
     *
     * @default undefined
     */
    value?: string | undefined;
    /** The HTML `name` attribute forwarded to the underlying inputs. */
    name?: string | undefined;
    /**
     * Applies error styling to indicate an invalid value.
     *
     * @default false
     */
    error?: boolean | undefined;
    /**
     * Disables the input and prevents interaction.
     *
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Called when the formatted unit number string changes.
     *
     * @param value - The new formatted unit number string (e.g., `"12-345"`).
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when the value changes, returning the raw `[floor, unit]` array.
     *
     * @param value - A two-element array `[floor, unit]`.
     */
    onChangeRaw?: ((value: string[]) => void) | undefined;
    /**
     * Called when the input loses focus, with the formatted string value.
     *
     * @param value - The formatted unit number string at blur time.
     */
    onBlur?: ((value: string) => void) | undefined;
    /**
     * Called when the input loses focus, returning the raw `[floor, unit]` array.
     *
     * @param value - A two-element array `[floor, unit]`.
     */
    onBlurRaw?: ((value: string[]) => void) | undefined;
}
