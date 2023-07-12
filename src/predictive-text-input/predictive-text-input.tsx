import debounce from "lodash/debounce";
import React, { useCallback, useEffect, useState } from "react";
import { Input } from "../input";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";
import { DropdownWrapper } from "../shared/dropdown-wrapper";
import {
    Divider,
    SelectorDiv,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { PredictiveTextInputProps } from "./types";

export const PredictiveTextInput = <T, V>({
    className,
    "data-testid": testId,
    selectedOption,
    minimumCharacters = 3,
    fetchOptions,
    placeholder = "Enter here...",
    readOnly = false,
    disabled = false,
    error,
    valueExtractor,
    listExtractor,
    displayValueExtractor,
    onSelectOption,
}: PredictiveTextInputProps<T, V>) => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const inputValue = selectedOption && displayValueExtractor(selectedOption);
    const [input, setInput] = useState<string>(inputValue);
    const [searchedInput, setSearchedInput] = useState<string>(inputValue);
    const [options, setOptions] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [prevOptionSelected, setPrevOptionSelected] =
        useState<T>(selectedOption);

    // =============================================================================
    // DEBOUNCE FUNCTIONS
    // =============================================================================

    const handleFetchOptions = async (input: string) => {
        setIsLoading(true);
        const fetchedOptions = await fetchOptions(input);
        setSearchedInput(input);
        setOptions(fetchedOptions);
        setIsLoading(false);
    };

    const fetchOptionsDebounced = useCallback(
        debounce((input) => handleFetchOptions(input), 500, {
            leading: false,
            trailing: true,
        }),
        []
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        if (
            input &&
            input.length >= minimumCharacters &&
            input !== searchedInput
        ) {
            fetchOptionsDebounced(input);
        }

        if (input === "") {
            setPrevOptionSelected(undefined);
        }
    }, [input]);

    useEffect(() => {
        if (!selectedOption) return;

        if (input !== displayValueExtractor(selectedOption)) {
            if (onSelectOption) {
                onSelectOption(undefined, undefined);
            }
        }
    }, [input, selectedOption]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSelectItem = (item: T, extractedValue: V) => {
        setInput(displayValueExtractor(item));
        handleDropdownDismiss(item);
        if (onSelectOption) {
            onSelectOption(item, extractedValue);
        }
        setPrevOptionSelected(item);
    };

    const handleDropdownDismiss = (item?: T) => {
        setSearchedInput(item ? displayValueExtractor(item) : "");
        setOptions([]);
        setIsLoading(true);
    };

    const handleOnClear = () => {
        setInput("");
        handleDropdownDismiss();
    };

    const handleWrapperBlur = () => {
        if (!selectedOption && !prevOptionSelected) {
            handleOnClear();
        } else {
            handleDropdownDismiss(prevOptionSelected);
            setInput(displayValueExtractor(prevOptionSelected));
            if (onSelectOption) {
                onSelectOption(
                    prevOptionSelected,
                    getValue(prevOptionSelected)
                );
            }
            setPrevOptionSelected(prevOptionSelected);
        }
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================

    const showDropDown = () => {
        return input && input.length >= minimumCharacters && !selectedOption;
    };

    const getValue = (item: T): V => {
        return valueExtractor ? valueExtractor(item) : (item as unknown as V);
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderDropDown = () => {
        return (
            <DropdownList
                listItems={options}
                onSelectItem={handleSelectItem}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                itemsLoadState={isLoading ? "loading" : "success"}
                visible={showDropDown()}
                disableItemFocus={true}
                onRetry={() => handleFetchOptions(input)}
                itemTruncationType={"end"}
                itemFlexDirection={"column"}
            />
        );
    };

    const renderInputField = () => {
        return (
            <Input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                allowClear={true}
                onClear={handleOnClear}
                noWrapper={true}
            />
        );
    };

    return (
        <DropdownWrapper
            className={className}
            show={showDropDown()}
            error={error && !showDropDown()}
            disabled={disabled}
            readOnly={readOnly}
            testId={testId}
            onBlur={handleWrapperBlur}
        >
            <SelectorDiv>{renderInputField()}</SelectorDiv>
            {showDropDown() && <Divider />}
            {renderDropDown()}
        </DropdownWrapper>
    );
};
