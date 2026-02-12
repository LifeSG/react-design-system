import React, { useEffect, useMemo, useRef, useState } from "react";
import { DropdownList, DropdownListState } from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import {
    LabelContainer,
    PlaceholderLabel,
    ValueLabel,
    Wrapper,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { RangeInputInnerContainer } from "../shared/range-input-inner-container";
import { StringHelper } from "../util/string-helper";
import { InputRangeSelectProps } from "./types";
import { ClearIcon } from "../input/input.style";
import {
    ClearIconContainer,
    StyledInputWrapper,
} from "./input-range-select.style";
import { SimpleIdGenerator } from "../util";

type RangeType = "from" | "to";

export const InputRangeSelect = <T, V>({
    selectedOptions,
    placeholders = { from: "Select", to: "Select" },
    options,
    disabled,
    className,
    readOnly,
    error,
    "data-testid": testId,
    id,
    enableSearch = false,
    searchFunction,
    searchPlaceholder,
    valueExtractor,
    valueToStringFunction,
    listExtractor,
    displayValueExtractor,
    onSelectOption,
    onShowOptions,
    onHideOptions,
    onRetry,
    optionsLoadState = { from: "success", to: "success" },
    optionTruncationType = "middle",
    renderCustomSelectedOption,
    renderListItem,
    renderCustomCallToAction,
    alignment,
    dropdownZIndex,
    dropdownRootNode,
    dropdownWidth,

    ...otherProps
}: InputRangeSelectProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selectedFromValue, setSelectedFromValue] = useState<T | undefined>();
    const [selectedToValue, setSelectedToValue] = useState<T | undefined>();

    const [focusedInput, setFocusedInput] = useState<RangeType | "none">(
        "none"
    );
    const isOpen = focusedInput !== "none";

    const [isFocused, setIsFocused] = useState(false);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const selectorRef = useRef<HTMLButtonElement>(null);

    const labelContainerRef = {
        from: useRef<HTMLDivElement>(null),
        to: useRef<HTMLDivElement>(null),
    };

    const [internalId] = useState<string>(
        () => id ?? SimpleIdGenerator.generate()
    );
    const listboxId = `${internalId}-range-listbox`;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelectedFromValue(selectedOptions?.from);
        setSelectedToValue(selectedOptions?.to);
    }, [selectedOptions]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const triggerOptionDisplayCallback = (show: boolean) => {
        if (!show) onHideOptions?.();
        if (show) onShowOptions?.();
    };

    const getDisplayValue = (rangeType: RangeType): string => {
        const selected =
            rangeType === "from" ? selectedFromValue : selectedToValue;
        if (!selected) return "";

        if (displayValueExtractor) return displayValueExtractor(selected);

        if (valueExtractor) {
            const value = valueExtractor(selected);
            return valueToStringFunction
                ? valueToStringFunction(value)
                : value?.toString?.() ?? "";
        }

        return selected.toString();
    };

    const truncateValue = (type: RangeType, value: string) => {
        if (optionTruncationType === "middle") {
            let widthOfElement = 0;
            if (labelContainerRef[type]?.current) {
                widthOfElement =
                    labelContainerRef[type].current.getBoundingClientRect()
                        .width;
            }
            return StringHelper.truncateOneLine(value, widthOfElement, 120, 8);
        }
        return value;
    };

    const getCurrentFocused = (): "none" | "start" | "end" => {
        switch (focusedInput) {
            case "from":
                return "start";
            case "to":
                return "end";
            case "none":
                return focusedInput;
        }
    };

    const currentOptions = useMemo(() => {
        if (focusedInput === "none") return [];
        return options?.[focusedInput] ?? [];
    }, [focusedInput, options]);

    const currentSelectedItems = useMemo(() => {
        if (focusedInput === "none") return [];
        const selected =
            focusedInput === "from" ? selectedFromValue : selectedToValue;
        return selected ? [selected] : [];
    }, [focusedInput, selectedFromValue, selectedToValue]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectorClick =
        (rangeType?: RangeType) => (event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();

            if (disabled || readOnly) return;

            if (rangeType === "from") {
                setFocusedInput("from");
                triggerOptionDisplayCallback(true);
                return;
            }

            if (rangeType === "to") {
                const next = selectedFromValue ? "to" : "from";
                setFocusedInput(next);
                triggerOptionDisplayCallback(true);
                return;
            }

            setFocusedInput("from");
            triggerOptionDisplayCallback(true);
        };

    const handleListItemClick = (item: T, extractedValue: V) => {
        if (focusedInput === "none") return;

        if (focusedInput === "from") {
            setSelectedFromValue(item);
            onSelectOption?.({ from: item }, extractedValue);

            setSelectedToValue(undefined);
            setFocusedInput("to");
            triggerOptionDisplayCallback(true);
            return;
        }

        setSelectedToValue(item);
        onSelectOption?.({ to: item }, extractedValue);

        setFocusedInput("none");
        triggerOptionDisplayCallback(false);
        selectorRef.current?.focus();
        setIsFocused(true);
    };

    const handleDismiss = (setSelectorFocus?: boolean) => {
        setFocusedInput("none");
        triggerOptionDisplayCallback(false);

        if (setSelectorFocus === true) {
            selectorRef.current?.focus();
            setIsFocused(true);
        } else {
            selectorRef.current?.blur();
            setIsFocused(false);
        }
        if (!selectedFromValue || !selectedToValue) {
            setSelectedFromValue(undefined);
            setSelectedToValue(undefined);
        }
    };

    const handleClose = () => {
        setFocusedInput("none");
        triggerOptionDisplayCallback(false);

        if (!selectedFromValue || !selectedToValue) {
            setSelectedFromValue(undefined);
            setSelectedToValue(undefined);
        }

        setIsFocused(false);
        selectorRef.current?.blur();
    };

    const handleOpen = () => {
        if (disabled || readOnly) return;
        if (focusedInput === "none") {
            setFocusedInput("from");
            triggerOptionDisplayCallback(true);
        }
    };

    const handleClear = (event: React.MouseEvent) => {
        event.stopPropagation();
        setSelectedFromValue(undefined);
        setSelectedToValue(undefined);
        onSelectOption?.({ from: undefined, to: undefined }, undefined);
        selectorRef.current?.blur();
        setIsFocused(false);
    };

    const handleNodeFocus = () => setIsFocused(true);

    const handleNodeBlur = (e: React.FocusEvent) => {
        if (isOpen) return;

        const next = e.relatedTarget as Node | null;

        if (!next) {
            setIsFocused(false);
            return;
        }

        if (nodeRef.current && !nodeRef.current.contains(next)) {
            setIsFocused(false);
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderLabel = (rangeType: RangeType) => {
        const selected =
            rangeType === "from" ? selectedFromValue : selectedToValue;

        if (!selected) {
            return (
                <PlaceholderLabel $truncateType={optionTruncationType}>
                    {truncateValue(rangeType, placeholders?.[rangeType] || "")}
                </PlaceholderLabel>
            );
        }

        if (renderCustomSelectedOption) {
            return renderCustomSelectedOption(selected);
        }

        return (
            <ValueLabel $truncateType={optionTruncationType}>
                {truncateValue(rangeType, getDisplayValue(rangeType))}
            </ValueLabel>
        );
    };

    const renderSelectorContent = (rangeType: RangeType) => (
        <LabelContainer
            onClick={handleSelectorClick(rangeType)}
            ref={labelContainerRef[rangeType]}
            $disabled={disabled}
        >
            {renderLabel(rangeType)}
        </LabelContainer>
    );

    const renderElement = () => {
        return (
            <StyledInputWrapper
                className={className}
                data-testid={testId}
                ref={nodeRef}
                tabIndex={-1}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
                $focused={isFocused || isOpen}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
            >
                <RangeInputInnerContainer
                    currentActive={getCurrentFocused()}
                    error={error}
                >
                    {renderSelectorContent("from")}
                    {renderSelectorContent("to")}
                </RangeInputInnerContainer>

                {!isOpen &&
                    selectedFromValue &&
                    selectedToValue &&
                    !readOnly &&
                    !disabled && (
                        <ClearIconContainer
                            onClick={handleClear}
                            type="button"
                            aria-label="Clear"
                        >
                            <ClearIcon aria-hidden />
                        </ClearIconContainer>
                    )}
            </StyledInputWrapper>
        );
    };

    const renderDropdown = () => {
        if (!isOpen) return null;

        return (
            <DropdownList
                data-testid={`${testId}-dropdown`}
                listboxId={listboxId}
                listItems={currentOptions}
                onSelectItem={handleListItemClick}
                onDismiss={handleDismiss}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                selectedItems={currentSelectedItems}
                itemsLoadState={optionsLoadState[focusedInput]}
                itemTruncationType={optionTruncationType}
                labelDisplayType={"inline"}
                disableItemFocus={false}
                onRetry={onRetry}
                width={dropdownWidth}
                matchElementWidth={!dropdownWidth}
                enableSearch={enableSearch}
                searchFunction={searchFunction}
                searchPlaceholder={searchPlaceholder}
                renderListItem={renderListItem}
                renderCustomCallToAction={renderCustomCallToAction}
            />
        );
    };

    return (
        <Wrapper id={id} {...otherProps}>
            <DropdownListState>
                <ElementWithDropdown
                    enabled={!readOnly && !disabled}
                    isOpen={isOpen}
                    renderElement={renderElement}
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
        </Wrapper>
    );
};
