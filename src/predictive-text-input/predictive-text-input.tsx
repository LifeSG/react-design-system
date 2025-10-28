import debounce from "lodash/debounce";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { DropdownList, DropdownListState } from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";
import { Input } from "../input";
import { SimpleIdGenerator } from "../util";
import { PredictiveTextInputProps } from "./types";
import { ItemsLoadStateType } from "../shared/dropdown-list/types";

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
    alignment,
    dropdownZIndex,
    dropdownRootNode,
    dropdownWidth,
}: PredictiveTextInputProps<T, V>): JSX.Element => {
    const getDisplayValue = (item: T | undefined): string => {
        if (!item) return "";
        return displayValueExtractor
            ? displayValueExtractor(item)
            : item.toString();
    };

    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [input, setInput] = useState<string>(() =>
        selectedOption ? getDisplayValue(selectedOption) : ""
    );
    const [searchedInput, setSearchedInput] = useState<string>(() =>
        selectedOption ? getDisplayValue(selectedOption) : ""
    );
    const [options, setOptions] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(
        !!selectedOption
    );
    const [prevOptionSelected, setPrevOptionSelected] = useState<T | undefined>(
        selectedOption
    );
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());

    const nodeRef = useRef<HTMLDivElement | null>(null);
    const selectorRef = useRef<HTMLInputElement | null>(null);

    const fetchOptionsRef = useRef(fetchOptions);

    // =============================================================================
    // DEBOUNCE FUNCTIONS
    // =============================================================================
    const handleFetchOptions = useCallback(async (input: string) => {
        if (!fetchOptionsRef.current) return;
        setIsError(false);
        setIsLoading(true);
        try {
            const fetchedOptions = await fetchOptionsRef.current(input);
            setSearchedInput(input);
            setOptions(fetchedOptions ?? []);
            setIsLoading(false);
        } catch (err) {
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

    const fetchOptionsDebounced = useCallback(
        debounce((input: string) => {
            handleFetchOptions(input);
        }, 500),
        [handleFetchOptions]
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        fetchOptionsRef.current = fetchOptions;
    }, [fetchOptions]);

    useEffect(() => {
        /***
         * Should not fetch options for the following the scenario :
         * 1. When input < minimumCharacters
         * 2. When user selected option from dropdown becomes input
         * 3. Initial selectedOption passed in as input
         */
        if (input && input.length >= minimumCharacters) {
            if (!isOptionSelected) {
                setIsOpen(true);
                fetchOptionsDebounced(input);
            } else if (input !== searchedInput) {
                fetchOptionsDebounced(input);
            }
        } else {
            fetchOptionsDebounced.cancel();
        }

        if (input === "" && prevOptionSelected) {
            onSelectOption?.(undefined, undefined);
            handleDropdownDismiss();
            setPrevOptionSelected(undefined);
        }

        if (selectedOption && input !== getDisplayValue(selectedOption)) {
            setIsOptionSelected(false);
        }
    }, [input, selectedOption]);

    useEffect(() => {
        setInput(selectedOption ? getDisplayValue(selectedOption) : "");
        setSearchedInput(selectedOption ? getDisplayValue(selectedOption) : "");
        setPrevOptionSelected(selectedOption);
        setOptions([]);
        setIsOptionSelected(!!selectedOption);
    }, [selectedOption]);

    // =============================================================================
    // Cleanup: cancel debounce on unmount
    // =============================================================================
    useEffect(() => {
        return () => {
            fetchOptionsDebounced.cancel();
        };
    }, [fetchOptionsDebounced]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleListItemClick = (item: T, extractedValue: V) => {
        selectorRef.current?.focus();
        setInput(getDisplayValue(item));
        setSearchedInput(item ? getDisplayValue(item) : "");
        setIsOptionSelected(true);
        setPrevOptionSelected(item);
        setIsOpen(false);
        onSelectOption?.(item, extractedValue);
    };

    const handleOpen = () => {
        if (!isOptionSelected && input.length >= minimumCharacters) {
            setIsFocused(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsFocused(false);
        handleOnBlur();
    };

    const handleNodeFocus = () => {
        setIsFocused(true);
    };

    const handleNodeBlur = (e: React.FocusEvent) => {
        if (
            !isOpen &&
            nodeRef.current &&
            !nodeRef.current.contains(e.relatedTarget as Node)
        ) {
            setIsFocused(false);
            handleOnBlur();
        }
    };

    const handleListDismiss = () => {
        setIsOpen(false);
        setIsFocused(false);
    };

    const handleDismiss = () => {
        setIsOpen(false);
        setIsFocused(false);
        handleOnBlur();
        selectorRef.current?.focus();
    };

    const handleOnClear = () => {
        setInput("");
        setIsOpen(false);
        setOptions([]);
        setIsOptionSelected(false);
        onSelectOption?.(undefined, undefined);
    };

    const handleOnBlur = () => {
        if (!isOptionSelected) {
            if (prevOptionSelected) {
                const prevValue = getDisplayValue(prevOptionSelected);
                setInput(prevValue);
                setIsOpen(false);
            } else {
                handleOnClear();
            }
        }
    };

    const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setIsOptionSelected(false);
    };

    const handleDropdownDismiss = (item?: T) => {
        setSearchedInput(item ? getDisplayValue(item) : "");
        setIsOptionSelected(!!item);
        setOptions([]);
        setIsLoading(true);
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getItemsLoadState = (): ItemsLoadStateType => {
        if (isError) return "fail";
        return isLoading ? "loading" : "success";
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderInputElement = () => {
        return (
            <InputWrapper
                className={className}
                data-testid={testId}
                ref={nodeRef}
                tabIndex={-1}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
                $focused={isFocused}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
            >
                <Input
                    ref={selectorRef}
                    id={internalId}
                    type="text"
                    value={input}
                    onChange={handleTyping}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    allowClear
                    onClear={handleOnClear}
                    aria-expanded={isOpen}
                    aria-controls={internalId}
                    aria-autocomplete="list"
                    aria-haspopup="listbox"
                    onBlur={
                        input.length < minimumCharacters
                            ? handleOnBlur
                            : undefined
                    }
                    styleType="no-border"
                />
            </InputWrapper>
        );
    };

    const renderDropdown = () => {
        return (
            <DropdownList
                listboxId={internalId}
                listItems={options}
                onSelectItem={handleListItemClick}
                onDismiss={handleListDismiss}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                itemsLoadState={getItemsLoadState()}
                itemTruncationType={"end"}
                itemMaxLines={1}
                labelDisplayType={"next-line"}
                disableItemFocus
                onRetry={() => handleFetchOptions(input)}
                width={dropdownWidth}
                matchElementWidth
            />
        );
    };

    return (
        <DropdownListState>
            <ElementWithDropdown
                enabled={!readOnly && !disabled}
                isOpen={isOpen}
                renderElement={renderInputElement}
                renderDropdown={renderDropdown}
                onOpen={handleOpen}
                onClose={handleClose}
                onDismiss={handleDismiss}
                clickToToggle={false}
                offset={8}
                alignment={alignment}
                fitAvailableHeight
                customZIndex={dropdownZIndex}
                rootNode={dropdownRootNode}
            />
        </DropdownListState>
    );
};
