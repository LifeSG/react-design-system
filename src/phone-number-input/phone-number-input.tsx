import React, { useEffect, useRef, useState } from "react";
import { AddonProps, LabelAddon, ListAddon } from "../input-group/types";
import { InputGroup } from "../input-group/input-group";
import { PhoneNumberInputHelper } from "./phone-number-input-helper";
import { Wrapper } from "./phone-number-input.styles";
import {
    CountryValue,
    PhoneNumberInputProps,
    PhoneNumberInputValue,
} from "./types";

export const PhoneNumberInput = ({
    onChange,
    value,
    allowClear,
    onClear,
    error,
    fixedCountry = false,
    optionPlaceholder = "Select",
    optionSearchPlaceholder,
    enableSearch,
    onHideOptions,
    onShowOptions,
    placeholder,
    ...otherProps
}: PhoneNumberInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [inputNumber, setInputNumber] = useState<string>(value?.number || "");
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>(
        normaliseCountryCode(value?.countryCode)
    );

    const selectedOption: CountryValue =
        PhoneNumberInputHelper.getCountries.filter(
            (country: CountryValue) =>
                country.countryCode === normaliseCountryCode(value?.countryCode)
        )[0];

    const nodeRef = useRef();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const formattedNumber = getFormattedNumber(value?.number);
        setInputNumber(formattedNumber);
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleKeyDown = (event: React.KeyboardEvent) => {
        const re = /^[0-9\b]+$/;
        if (!re.test(event.key) && event.key !== "Backspace") {
            event.preventDefault();
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = event.target.value;
        if (onChange) {
            performOnChangeHandler(currentValue, selectedCountryCode);
        } else {
            performLocalChangeHandler(currentValue, selectedOption);
        }
    };

    const handleSelectOption = (
        country: CountryValue,
        extractedValue: string
    ) => {
        setSelectedCountryCode(extractedValue);
        if (onChange) {
            performOnChangeHandler(inputNumber, extractedValue);
        } else {
            performLocalChangeHandler(inputNumber, country);
        }
    };

    const handleOnClear = () => {
        if (onClear) onClear();
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getFormattedNumber = (
        number: string,
        country: CountryValue = selectedOption
    ): string => {
        const formattedNumber = PhoneNumberInputHelper.formatNumber(
            number,
            country
        );
        return formattedNumber;
    };

    const performOnChangeHandler = (value: string, countryCode: string) => {
        const number = value.replace(/[\s()]+/g, ""); // strip formatted spaces
        onChange({
            number,
            countryCode: addPlusPrefix(countryCode),
        });
    };

    const performLocalChangeHandler = (
        value: string,
        country?: CountryValue
    ) => {
        const formattedNumber = PhoneNumberInputHelper.formatNumber(
            value,
            country
        );

        setInputNumber(formattedNumber);
    };

    const getAddonProps = (): AddonProps<CountryValue, string> => {
        if (fixedCountry) {
            return {
                type: "label",
                attributes: {
                    value: addPlusPrefix(selectedCountryCode),
                } as LabelAddon,
            };
        } else {
            return {
                type: "list",
                attributes: {
                    value: selectedOption,
                    placeholder: optionPlaceholder,
                    options: PhoneNumberInputHelper.getCountries,
                    selectedOption: selectedOption,
                    enableSearch: enableSearch,
                    searchPlaceholder: optionSearchPlaceholder,
                    valueExtractor: (option) => `+${option.countryCode}`,
                    listExtractor: (option) => ({
                        title: option.name,
                        secondaryLabel: addPlusPrefix(option.countryCode),
                    }),
                    onSelectOption: handleSelectOption,
                    onHideOptions: onHideOptions,
                    onShowOptions: onShowOptions,
                } as ListAddon<CountryValue, string>,
            };
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Wrapper>
            <InputGroup
                ref={nodeRef}
                onKeyDown={handleKeyDown}
                value={inputNumber}
                onChange={handleInputChange}
                allowClear={allowClear && !!inputNumber}
                onClear={handleOnClear}
                error={error}
                placeholder={placeholder}
                addon={getAddonProps()}
                {...otherProps}
            />
        </Wrapper>
    );
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
/**
 * This strips the + off the specified country code if it
 * is present.
 */
const normaliseCountryCode = (countryCode: string): string => {
    return countryCode ? countryCode.replace("+", "") : "";
};

const addPlusPrefix = (countryCode: string): string => {
    return countryCode.includes("+") ? countryCode : `+${countryCode}`;
};

const getReturnValue = (
    number = "",
    countryCode = ""
): PhoneNumberInputValue => {
    const numberWithoutSpace = number?.replace(/[\s()]+/g, "");
    return {
        number: numberWithoutSpace,
        countryCode: addPlusPrefix(countryCode),
    };
};
