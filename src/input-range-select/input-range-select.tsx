import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    DropdownList,
    DropdownListApi,
    DropdownListState,
} from "../shared/dropdown-list-v2";
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
    // CONST, STATE, REF
    // =============================================================================
    const [selectedFromValue, setSelectedFromValue] = useState<T | undefined>();
    const [selectedToValue, setSelectedToValue] = useState<T | undefined>();
    const [focusedInput, setFocusedInput] = useState<RangeType | "none">(
        "none"
    );
    const isOpen = focusedInput !== "none";

    const [isFocused, setIsFocused] = useState(false);
    const nodeRef = useRef<HTMLDivElement | null>(null);

    const labelContainerRef = {
        from: useRef<HTMLDivElement>(null),
        to: useRef<HTMLDivElement>(null),
    };

    // forwardRef API from DropdownList (optional for future usage)
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

            if (rangeType === "to" && selectedFromValue) {
                setFocusedInput("to");
            } else {
                setFocusedInput("from");
            }

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
        nodeRef.current?.focus();
        setIsFocused(true);
    };

    const handleDismiss = () => {
        setFocusedInput("none");
        triggerOptionDisplayCallback(false);

        nodeRef.current?.focus();
        setIsFocused(true);

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

        nodeRef.current?.focus();
        setIsFocused(true);
    };

    const handleNodeFocus = () => setIsFocused(true);

    const handleNodeBlur = (e: React.FocusEvent) => {
        if (
            isFocused &&
            !isOpen &&
            nodeRef.current &&
            !nodeRef.current.contains(e.relatedTarget as Node)
        ) {
            setIsFocused(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled || readOnly) return;
        if (isOpen) return;
        if (event.currentTarget !== event.target) return;

        switch (event.key) {
            case "Enter":
            case " ":
            case "ArrowDown":
                event.preventDefault();
                setFocusedInput("from");
                triggerOptionDisplayCallback(true);
                break;
            default:
                break;
        }
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
                tabIndex={0}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
                $focused={isFocused || isOpen}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
                onKeyDown={handleKeyDown}
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
