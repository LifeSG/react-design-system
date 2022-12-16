import React, { useRef, useState } from "react";
import { PhoneNumberInputProps } from "./types";
import { ListAddon } from "../input-group";
import { PhoneNumberInputHelper } from "./phone-number-input-helper";
import { InputGroup } from "../input-group";
import { Wrapper } from "./phone-number-input.styles";

export const PhoneNumberInput = <T, V>({
    onChange,
    countrySelector,
    allowClear,
    onClear,
    error,
    ...otherProps
}: PhoneNumberInputProps<T, V>) => {
    const {
        value,
        placeholder = "Select",
        options = PhoneNumberInputHelper.getCountries,
        enableSearch,
        searchFunction,
        searchPlaceholder,
        valueExtractor,
        listExtractor,
        displayValueExtractor,
        selectedOption,
        onSelectOption,
        onHideOptions,
        onShowOptions,
    } = countrySelector as ListAddon<T, V>;
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [inputNumber, setInputNumber] = useState(otherProps.value || "");

    const nodeRef = useRef();

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const isNumberInput = (event: React.KeyboardEvent) => {
        const re = /^[0-9\b]+$/;
        if (!re.test(event.key) && event.key !== "Backspace") {
            event.preventDefault();
        }
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        selectedCountry: T
    ) => {
        const element = event.target;
        const currentValue = element.value;

        // Send to handler unspaced value
        const valueWithoutSpace = currentValue.replace(/[\s()]+/g, "");
        element.value = valueWithoutSpace;

        const formattedNumber = PhoneNumberInputHelper.formatNumber(
            valueWithoutSpace,
            selectedCountry
        );
        setInputNumber(formattedNumber);
        if (onChange) onChange(event);
    };

    const handleSelectOption = (item: T, extractedValue: V) => {
        if (inputNumber && typeof inputNumber === "string") {
            const valueWithoutSpace = inputNumber.replace(/[\s()]+/g, "");
            const formattedNumber = PhoneNumberInputHelper.formatNumber(
                valueWithoutSpace,
                item
            );
            setInputNumber(formattedNumber);
        }

        if (onSelectOption) onSelectOption(item, extractedValue);
    };

    const handleOnClear = () => {
        setInputNumber("");
        if (onClear) onClear;
    };

    return (
        <Wrapper>
            <InputGroup
                ref={nodeRef}
                onKeyDown={isNumberInput}
                value={inputNumber}
                onInputChange={handleInputChange}
                allowClear={allowClear && !!inputNumber}
                onClear={handleOnClear}
                error={error}
                addon={{
                    type: "list",
                    attributes: {
                        value: value,
                        placeholder: placeholder,
                        options: options,
                        selectedOption: selectedOption,
                        enableSearch: enableSearch,
                        searchPlaceholder: searchPlaceholder,
                        valueExtractor: valueExtractor,
                        listExtractor: listExtractor,
                        displayValueExtractor: displayValueExtractor,
                        onSelectOption: handleSelectOption,
                        onHideOptions: onHideOptions,
                        onShowOptions: onShowOptions,
                        searchFunction: searchFunction,
                    },
                }}
                {...otherProps}
            />
        </Wrapper>
    );
};
