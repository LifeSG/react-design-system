import React, { useEffect, useRef, useState } from "react";
import { InputGroup } from "../input-group/input-group";
import { AddonProps, LabelAddon, ListAddon } from "../input-group/types";
import { PhoneNumberInputHelper } from "./phone-number-input-helper";
import { CountryValue, PhoneNumberInputProps } from "./types";

export const PhoneNumberInput = ({
    onChange,
    value,
    allowClear,
    onClear,
    onBlur,
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
    const [options] = useState<CountryValue[]>(
        PhoneNumberInputHelper.getCountries()
    );

    const [selectedCountry, setSelectedCountry] = useState<
        CountryValue | undefined
    >(undefined);
    const [inputValue, setInputValue] = useState<string>("");

    const nodeRef = useRef();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const selectedOption = options.filter(
            (country) =>
                country.countryCode === normaliseCountryCode(value?.countryCode)
        )[0];

        setSelectedCountry(selectedOption);
        setInputValue(
            PhoneNumberInputHelper.formatNumber(value?.number, selectedOption)
        );
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

    const handleClear = () => {
        if (onClear) {
            onClear();
        } else {
            setInputValue("");
        }
    };

    const handleBlur = () => {
        if (onBlur) {
            onBlur();
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = event.target.value;

        if (onChange) {
            performOnChangeHandler(currentValue, selectedCountry);
        } else {
            performLocalChangeHandler(currentValue, selectedCountry);
        }
    };

    const handleSelectOption = (country: CountryValue) => {
        if (onChange) {
            performOnChangeHandler(inputValue, country);
        } else {
            performLocalChangeHandler(inputValue, country);
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnChangeHandler = (
        inputValue: string,
        selectedCountry: CountryValue | undefined
    ) => {
        const formatedInputValue = PhoneNumberInputHelper.formatNumber(
            inputValue,
            selectedCountry
        );
        onChange({
            number: formatedInputValue.replace(/[\s()]+/g, ""), // strip formatted spaces
            countryCode:
                selectedCountry && addPlusPrefix(selectedCountry.countryCode),
        });
    };

    const performLocalChangeHandler = (
        inputValue: string,
        selectedCountry: CountryValue | undefined
    ) => {
        setInputValue(
            PhoneNumberInputHelper.formatNumber(inputValue, selectedCountry)
        );

        setSelectedCountry(selectedCountry);
    };

    const getAddonProps = (): AddonProps<CountryValue, string> => {
        if (fixedCountry) {
            return {
                type: "label",
                attributes: {
                    value: addPlusPrefix(selectedCountry?.countryCode),
                } as LabelAddon,
            };
        } else {
            return {
                type: "list",
                attributes: {
                    placeholder: optionPlaceholder,
                    options,
                    selectedOption: selectedCountry,
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
        <InputGroup
            ref={nodeRef}
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={handleInputChange}
            allowClear={allowClear && !!inputValue}
            onClear={handleClear}
            onBlur={handleBlur}
            error={error}
            placeholder={placeholder}
            addon={getAddonProps()}
            {...otherProps}
        />
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

const addPlusPrefix = (countryCode?: string): string => {
    if (!countryCode) return "";
    return countryCode.includes("+") ? countryCode : `+${countryCode}`;
};
