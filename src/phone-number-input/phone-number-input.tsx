import React, { useEffect, useRef, useState } from "react";
import { InputGroup } from "../input-group/input-group";
import { AddonProps, LabelAddon, ListAddon } from "../input-group/types";
import { useNextInputState } from "../util";
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
    autoComplete,
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

    const nodeRef = useRef<HTMLInputElement>(null);

    const getNextInputState = useNextInputState({
        ref: nodeRef,
        formatter: (value) =>
            PhoneNumberInputHelper.formatNumber(
                value.replace(/[^0-9]/g, ""),
                selectedCountry
            ),
    });

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
    const handleClear = () => {
        if (onClear) {
            onClear();
        } else {
            setInputValue("");
        }
    };

    const handleInputChange = () => {
        const nextState = getNextInputState();
        if (!nextState) return;

        const { nextValue, updateCaretPosition } = nextState;

        updateCaretPosition();
        performLocalChangeHandler(nextValue, selectedCountry);
        if (onChange) {
            performOnChangeHandler(nextValue, selectedCountry);
        }
    };

    const handleSelectOption = (country: CountryValue) => {
        performLocalChangeHandler(inputValue, country);
        if (onChange) {
            performOnChangeHandler(inputValue, country);
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
        onChange?.({
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
            value={inputValue}
            onChange={handleInputChange}
            allowClear={allowClear && !!inputValue}
            onClear={handleClear}
            onBlur={onBlur}
            error={error}
            placeholder={placeholder}
            addon={getAddonProps()}
            inputMode="numeric"
            autoComplete={autoComplete}
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
const normaliseCountryCode = (countryCode: string | undefined): string => {
    return countryCode ? countryCode.replace("+", "") : "";
};

const addPlusPrefix = (countryCode?: string): string => {
    if (!countryCode) return "";
    return countryCode.includes("+") ? countryCode : `+${countryCode}`;
};
