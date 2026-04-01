import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { ClearIcon } from "../input/input.style";
import { concatIds, VisuallyHidden } from "../shared/accessibility";
import type { DropdownListApi } from "../shared/dropdown-list-v2";
import { DropdownList, DropdownListState } from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import {
    PlaceholderLabel,
    ValueLabel,
    Wrapper,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { RangeInputInnerContainer } from "../shared/range-input-inner-container";
import { SimpleIdGenerator } from "../util";
import { StringHelper } from "../util/string-helper";
import {
    ClearIconContainer,
    RangeSelectorButton,
    StyledInputWrapper,
} from "./input-range-select.style";
import type { InputRangeSelectProps } from "./types";

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
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
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

    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());
    const listboxId = `${internalId}-range-listbox`;
    const fromLabelId = `${internalId}-from-label`;
    const toLabelId = `${internalId}-to-label`;

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

        const nextFocusedInput =
            rangeType === "to" && !selectedFromValue ? "from" : rangeType;

        setFocusedInput(nextFocusedInput);
        triggerOptionDisplayCallback(true);
    };

    const focusButton = (type: RangeType) => {
        labelButtonRef[type].current?.focus();
    };

    const getButtonLabelledBy = (rangeType: RangeType) => {
        const rangeLabelId = rangeType === "from" ? fromLabelId : toLabelId;
        return concatIds(rangeLabelId, ariaLabelledBy);
    };

    const getDropdownAriaLabel = () => {
        if (focusedInput === "from") {
            return `Selecting for: ${placeholders?.from}`;
        }

        if (focusedInput === "to") {
            return `Selecting for: ${placeholders?.to}`;
        }

        return undefined;
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
            aria-labelledby={getButtonLabelledBy(rangeType)}
            aria-describedby={ariaDescribedBy}
            aria-expanded={isOpen && focusedInput === rangeType}
            aria-controls={listboxId}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            onClick={handleSelectorClick(rangeType)}
            onKeyDown={handleSelectorKeyDown(rangeType)}
            ref={labelButtonRef[rangeType]}
            tabIndex={0}
        >
            {renderLabel(rangeType)}
        </RangeSelectorButton>
    );

    const renderElement = () => {
        return (
            <StyledInputWrapper
                className={className}
                data-testid={testId}
                disabled={disabled}
                readOnly={readOnly}
                error={error}
                focused={isOpen}
            >
                <VisuallyHidden id={fromLabelId}>
                    {placeholders?.from || "Select From"}
                </VisuallyHidden>
                <VisuallyHidden id={toLabelId}>
                    {placeholders?.to || "Select To"}
                </VisuallyHidden>

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
                ariaLabel={getDropdownAriaLabel()}
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
