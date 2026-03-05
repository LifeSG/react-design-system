import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    DropdownList,
    DropdownListApi,
    DropdownListState,
} from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import {
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
    RangeSelectorButton,
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
    // CONST, STATE, REF
    // =============================================================================
    const [selectedFromValue, setSelectedFromValue] = useState<T | undefined>();
    const [selectedToValue, setSelectedToValue] = useState<T | undefined>();
    const [focusedInput, setFocusedInput] = useState<RangeType | "none">(
        "none"
    );
    const isOpen = focusedInput !== "none";
    const labelButtonRef = {
        from: useRef<HTMLButtonElement>(null),
        to: useRef<HTMLButtonElement>(null),
    };
    const dropdownRef = useRef<DropdownListApi>(null);

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

    useEffect(() => {
        if (!isOpen) return;

        if (focusedInput === "to") {
            dropdownRef.current?.refocus({ index: 0 });
        }
    }, [isOpen, focusedInput]);

    // =============================================================================
    // HELPERS
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
            if (labelButtonRef[type]?.current) {
                widthOfElement =
                    labelButtonRef[type].current.getBoundingClientRect().width;
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

    const openDropdownFor = (rangeType: RangeType) => {
        if (disabled || readOnly) return;

        if (rangeType === "to" && !selectedFromValue) {
            setFocusedInput("from");
        } else {
            setFocusedInput(rangeType);
        }

        triggerOptionDisplayCallback(true);
    };

    const focusButton = (type: RangeType) => {
        labelButtonRef[type].current?.focus();
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectorClick =
        (rangeType: RangeType) => (event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            openDropdownFor(rangeType);
        };

    const handleSelectorKeyDown =
        (rangeType: RangeType) =>
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (disabled || readOnly) return;

            switch (event.key) {
                case "Enter":
                case " ":
                case "ArrowDown":
                    event.preventDefault();
                    openDropdownFor(rangeType);
                    break;
                default:
                    break;
            }
        };

    const handleListItemClick = (item: T, extractedValue: V) => {
        if (focusedInput === "none") return;

        if (focusedInput === "from") {
            setSelectedFromValue(item);
            onSelectOption?.({ from: item }, extractedValue);

            setSelectedToValue(undefined);
            setFocusedInput("to");
            triggerOptionDisplayCallback(true);
            focusButton("to");
            return;
        }

        setSelectedToValue(item);
        onSelectOption?.({ to: item }, extractedValue);

        setFocusedInput("none");
        triggerOptionDisplayCallback(false);
        focusButton("to");
    };

    const handleDismiss = () => {
        const last = focusedInput;

        setFocusedInput("none");
        triggerOptionDisplayCallback(false);

        if (last === "to") focusButton("to");
        else focusButton("from");

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
        event.preventDefault();
        setSelectedFromValue(undefined);
        setSelectedToValue(undefined);
        onSelectOption?.({ from: undefined, to: undefined }, undefined);

        focusButton("from");
    };

    // =============================================================================
    // RENDER
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
        <RangeSelectorButton
            type="button"
            role="combobox"
            aria-autocomplete={enableSearch ? "list" : "none"}
            onClick={handleSelectorClick(rangeType)}
            onKeyDown={handleSelectorKeyDown(rangeType)}
            ref={labelButtonRef[rangeType]}
            disabled={disabled || readOnly}
            tabIndex={disabled || readOnly ? -1 : 0}
            aria-controls={listboxId}
        >
            {renderLabel(rangeType)}
        </RangeSelectorButton>
    );

    const renderElement = () => {
        return (
            <StyledInputWrapper
                className={className}
                data-testid={testId}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
                $focused={isOpen}
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
        return (
            <DropdownList
                ref={dropdownRef}
                data-testid={`${testId}-dropdown`}
                listboxId={listboxId}
                listItems={currentOptions}
                onSelectItem={handleListItemClick}
                onDismiss={handleDismiss}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                selectedItems={currentSelectedItems}
                itemsLoadState={optionsLoadState[focusedInput as RangeType]}
                itemTruncationType={optionTruncationType}
                onRetry={onRetry}
                width={dropdownWidth}
                matchElementWidth={!dropdownWidth}
                enableSearch={enableSearch}
                searchFunction={searchFunction}
                searchPlaceholder={searchPlaceholder}
                renderListItem={renderListItem}
                renderCustomCallToAction={renderCustomCallToAction}
                accessibilityLabel={
                    focusedInput === "from"
                        ? `Selecting for: ${placeholders.from}`
                        : focusedInput === "to"
                        ? `Selecting for: ${placeholders.to}`
                        : undefined
                }
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
