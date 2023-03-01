import React from "react";

export interface CountryValue {
    name: string;
    regions: string[];
    iso2: string;
    countryCode: string;
    format: string;
}
export interface PhoneNumberInputValue {
    /**
     * You may choose to specify with or without the +. The return value
     * will always contain the +
     */
    countryCode?: string | undefined;
    number?: string | undefined;
}

export interface PhoneNumberInputProps extends React.AriaAttributes {
    /** The value of the input */
    value?: PhoneNumberInputValue | undefined;
    error?: boolean | undefined;
    /** Specifies if the clear button should be present in the input */
    allowClear?: boolean | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /**
     * Specifies if the country code is a fixed value and the user
     * cannot select another option
     */
    fixedCountry?: boolean | undefined;
    onChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    /** Called when the clear button in the input field is clicked */
    onClear?: () => void | undefined;

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
}
