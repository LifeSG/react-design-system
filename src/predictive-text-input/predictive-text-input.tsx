import { OpenChangeReason } from "@floating-ui/react";
import debounce from "lodash/debounce";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    DropdownList,
    DropdownListState,
    ExpandableElement,
} from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { InputBox } from "../shared/input-wrapper/input-wrapper";
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
}: PredictiveTextInputProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [input, setInput] = useState<string>("");
    const [searchedInput, setSearchedInput] = useState<string>("");
    const [options, setOptions] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(
        !!selectedOption
    );
    const [prevOptionSelected, setPrevOptionSelected] = useState<T | undefined>(
        selectedOption
    );
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());

    const nodeRef = useRef<HTMLDivElement | null>(null);
    const selectorRef = useRef<HTMLButtonElement | null>(null);

    const fetchOptionsRef = useRef(fetchOptions);

    // =============================================================================
    // DEBOUNCE FUNCTIONS
    // =============================================================================
    const handleFetchOptions = useCallback(async (q: string) => {
        if (!fetchOptionsRef.current) return;
        setIsError(false);
        setIsLoading(true);
        try {
            const fetched = await fetchOptionsRef.current(q);
            setSearchedInput(q);
            setOptions(fetched ?? []);
            setIsLoading(false);
        } catch (err) {
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

    const handleDropdownDismiss = (item?: T) => {
        setSearchedInput(item ? getDisplayValue(item) : "");
        setIsOptionSelected(!!item);
        setOptions([]);
        setIsLoading(true);
    };

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
        if (
            input &&
            input.length >= minimumCharacters &&
            input !== searchedInput
        ) {
            fetchOptionsDebounced(input);
        } else {
            fetchOptionsDebounced.cancel();
            if (input === "" && prevOptionSelected) {
                onSelectOption?.(undefined, undefined);
                handleDropdownDismiss();
                setPrevOptionSelected(undefined);
            }
        }
    }, [
        input,
        minimumCharacters,
        searchedInput,
        fetchOptionsDebounced,
        prevOptionSelected,
        onSelectOption,
    ]);

    useEffect(() => {
        if (!isOptionSelected && input && input.length >= minimumCharacters) {
            setIsOpen(true);
            fetchOptionsDebounced(input);
        }
    }, [input, minimumCharacters, fetchOptionsDebounced]);

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
        setIsOptionSelected(true);
        setPrevOptionSelected(item);
        setIsOpen(false);
        onSelectOption?.(item, extractedValue);
    };

    const handleOpen = () => {
        if (!isOptionSelected && input.length >= minimumCharacters) {
            setIsOpen(true);
            setIsFocused(true);
        }
    };

    const handleClose = (reason?: OpenChangeReason) => {
        setIsOpen(false);
        setIsFocused(false);

        if (reason !== "click") triggerRef.current?.blur();
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
        }
    };

    const handleListDismiss = () => {
        setIsOpen(false);
        setIsFocused(false);
    };

    const handleDismiss = () => {
        selectorRef.current?.focus();
    };

    const handleOnClear = () => {
        setInput("");
        setOptions([]);
        setIsOptionSelected(false);
        onSelectOption?.(undefined, undefined);
    };

    const handleOnBlur = () => {
        if (!isOptionSelected && !prevOptionSelected) {
            handleOnClear();
        } else {
            setInput(getDisplayValue(prevOptionSelected));
            onSelectOption?.(prevOptionSelected, getValue(prevOptionSelected));
        }
    };

    const handleTyping = (value: string) => {
        setInput(value);
        setIsOptionSelected(false);
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = (item: T | undefined): string => {
        if (!item) return "";
        return displayValueExtractor
            ? displayValueExtractor(item)
            : item.toString();
    };

    const getValue = (item: T | undefined): V | undefined => {
        if (!item) return undefined;
        return valueExtractor ? valueExtractor(item) : (item as unknown as V);
    };

    const getItemsLoadState = (): ItemsLoadStateType => {
        if (isError) return "fail";
        return isLoading ? "loading" : "success";
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderInputElement = () => {
        return (
            <InputBox
                className={className}
                data-testid={testId}
                ref={nodeRef as any}
                tabIndex={-1}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
                $focused={isFocused}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
            >
                <ExpandableElement
                    ref={selectorRef as any}
                    disabled={disabled}
                    expanded={
                        !!(
                            input &&
                            input.length >= minimumCharacters &&
                            !isOptionSelected
                        )
                    }
                    listboxId={internalId}
                    popupRole="listbox"
                    readOnly={readOnly}
                >
                    <Input
                        type="text"
                        value={input}
                        onChange={(e) => handleTyping(e.target.value)}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        disabled={disabled}
                        allowClear
                        onClear={handleOnClear}
                        styleType="no-border"
                        onBlur={
                            input.length < minimumCharacters
                                ? handleOnBlur
                                : undefined
                        }
                    />
                </ExpandableElement>
            </InputBox>
        );
    };

    const renderDropdown = () => {
        return (
            <DropdownList
                listboxId={internalId}
                listItems={options}
                onSelectItem={(item: T, val: V) =>
                    handleListItemClick(item, val)
                }
                onDismiss={() => handleListDismiss()}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                itemsLoadState={getItemsLoadState()}
                itemTruncationType={"end"}
                itemMaxLines={1}
                labelDisplayType={"next-line"}
                disableItemFocus={true}
                onRetry={() => handleFetchOptions(input)}
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
                fitAvailableHeight
            />
        </DropdownListState>
    );
};
