import type React from "react";

/**
 * Represents a selectable country entry in the phone number country code dropdown.
 */
export interface CountryValue {
    /** The country name. */
    name: string;
    /** The country region. */
    regions: string[];
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    iso2: string;
    /**
     * Calling code for the country, without the leading `+`.
     */
    countryCode: string;
    /**
     * Phone number format mask applied to the phone number field.
     */
    format: string;
}
/**
 * Value shape for `PhoneNumberInput`, representing the selected country code
 * and the phone number separately.
 */
export interface PhoneNumberInputValue {
    /**
     * Country calling code. May be supplied with or without a leading `+`;
     */
    countryCode?: string | undefined;
    /**
     * The phone number number, without the country code prefix.
     */
    number?: string | undefined;
}

/**
 * Props for the `PhoneNumberInput` component.
 */
export interface PhoneNumberInputProps extends React.AriaAttributes {
    /**
     * Controlled value containing the selected country code and phone number.
     */
    value?: PhoneNumberInputValue | undefined;
    /**
     * Renders the input in an error state when `true`.
     */
    error?: boolean | undefined;
    /**
     * Shows a clear button inside the input when `true` and the field has a value.
     */
    allowClear?: boolean | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /**
     * Removes the visible border from the input group when `true`.
     *
     * @default false
     */
    noBorder?: boolean | undefined;
    /**
     * When `true`, the country code is displayed as a static label and the
     * user cannot change it. When `false`, a searchable dropdown is rendered.
     *
     * @default false
     */
    fixedCountry?: boolean | undefined;
    /**
     * Called whenever the country or phone number changes.
     *
     * @param value Updated phone number value including the leading `+`.
     */
    onChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    /**
     * Called when the clear button is activated.
     */
    onClear?: () => void | undefined;
    /**
     * Called when the input loses focus.
     */
    onBlur?: (() => void) | undefined;

    // Dropdown option props
    /**
     * Placeholder text shown in the country code dropdown when no country is
     * selected.
     *
     * @default "Select"
     */
    optionPlaceholder?: string | undefined;
    /**
     * Placeholder text shown inside the search field of the country code
     * dropdown. Only relevant when `enableSearch` is `true`.
     */
    optionSearchPlaceholder?: string | undefined;
    /**
     * Enables a search field inside the country code dropdown.
     */
    enableSearch?: boolean | undefined;
    /**
     * Called when the country code dropdown closes.
     */
    onHideOptions?: (() => void) | undefined;
    /**
     * Called when the country code dropdown opens.
     */
    onShowOptions?: (() => void) | undefined;

    // Input props
    disabled?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    id?: string | undefined;
    autoComplete?: string | undefined;
    /**
     * Returns the accessible label for the phone number input.
     *
     * @param country Currently selected country, or `undefined`.
     */
    getAriaLabel?: ((country?: CountryValue) => string) | undefined;
}
