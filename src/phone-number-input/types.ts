import React from "react";

/**
 * A country entry used to populate the country-code dropdown.
 */
export interface CountryValue {
    /** Full country name (e.g., `"Singapore"`). */
    name: string;
    /** Geographic regions this country belongs to (e.g., `["asia"]`). */
    regions: string[];
    /** ISO 3166-1 alpha-2 code (e.g., `"sg"`). */
    iso2: string;
    /** International dialling prefix including `+` (e.g., `"+65"`). */
    countryCode: string;
    /** Digit-group format string for the local number. */
    format: string;
}

/**
 * The controlled value shape for PhoneNumberInput.
 */
export interface PhoneNumberInputValue {
    /**
     * The country dialling code.
     *
     * May be provided with or without the leading `+`; the returned value
     * always includes the `+` (e.g., `"+65"`).
     */
    countryCode?: string | undefined;
    /** The local phone number without the country code. */
    number?: string | undefined;
}

/**
 * Props for the PhoneNumberInput component - international phone number field.
 *
 * Combines a country-code dropdown with a formatted telephone number input.
 * Handles country selection, local number entry, and emits a structured value
 * object with both `countryCode` and `number` fields.
 *
 * @example
 * ```tsx
 * <PhoneNumberInput
 *     value={{ countryCode: "+65", number: "91234567" }}
 *     onChange={(val) => setPhone(val)}
 *     enableSearch
 * />
 * ```
 * @keywords telephone field, mobile number, country code input, international phone, dialling code
 */
export interface PhoneNumberInputProps extends React.AriaAttributes {
    /** The controlled value containing `countryCode` and `number`. */
    value?: PhoneNumberInputValue | undefined;
    /**
     * Applies error styling to indicate an invalid phone number.
     *
     * @default false
     */
    error?: boolean | undefined;
    /**
     * Shows a clear (×) button inside the number input when it has a value.
     *
     * @default false
     */
    allowClear?: boolean | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the element in automated tests.
     */
    "data-testid"?: string | undefined;
    /** Additional CSS class name. */
    className?: string | undefined;
    noBorder?: boolean | undefined;
    /**
     * Locks the country code selector, preventing the user from changing the country.
     *
     * Use when the application only supports one country (e.g., Singapore-only service).
     *
     * @default false
     */
    fixedCountry?: boolean | undefined;
    /**
     * Called when the user changes the country code or the local number.
     *
     * @param value - The updated `{ countryCode, number }` object.
     */
    onChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    /** Called when the user clicks the clear button in the number input. */
    onClear?: () => void | undefined;
    /** Called when the input loses focus. */
    onBlur?: (() => void) | undefined;

    // Dropdown option props
    /** The placeholder value for the dropdown selector */
    optionPlaceholder?: string | undefined;
    /** The placeholder value for the dropdown search */
    optionSearchPlaceholder?: string | undefined;
    /** Specifies if search is enabled in the dropdown */
    enableSearch?: boolean | undefined;
    /** Called when the dropdown is dismissed */
    onHideOptions?: (() => void) | undefined;
    /** Called when the dropdown is visible */
    onShowOptions?: (() => void) | undefined;

    // Input props
    disabled?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    id?: string | undefined;
    autoComplete?: string | undefined;
}
