import React from "react";

export interface CountryValue {
    name: string;
    regions: string[];
    iso2: string;
    countryCode: string;
    format: string;
}
export interface PhoneNumberInputValue {
    countryCode?: string | undefined;
    number?: string | undefined;
}

export interface PhoneNumberInputProps extends React.AriaAttributes {
    value?: PhoneNumberInputValue | undefined;
    onChange?: ((value: PhoneNumberInputValue) => void) | undefined;
    error?: boolean | undefined;
    allowClear?: boolean | undefined;
    onClear?: () => void | undefined;
    "data-testid"?: string | undefined;

    // Dropdown option props
    optionSearchPlaceholder?: string | undefined;
    enableSearch?: boolean | undefined;
    onHideOptions?: (() => void) | undefined;
    onShowOptions?: (() => void) | undefined;

    // Input props
    disabled?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    id?: string | undefined;
}
