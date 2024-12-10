import React, { useEffect, useRef, useState } from "react";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";
import { DropdownWrapper } from "../shared/dropdown-wrapper";
import {
    Divider,
    LabelContainer,
    PlaceholderLabel,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { RangeInputInnerContainer } from "../shared/range-input-inner-container";
import { StringHelper } from "../util/string-helper";
import { InputRangeSelectProps } from "./types";
import { ClearIcon } from "../input/input.style";
import {
    ClearIconContainer,
    InputSelectorWrapper,
    SelectorDropdown,
} from "./input-range-select.style";

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
    listStyleWidth,
    onShowOptions,
    onHideOptions,
    onRetry,
    optionsLoadState = { from: "success", to: "success" },
    optionTruncationType = "middle",
    renderCustomSelectedOption,
    renderListItem,
    renderCustomCallToAction,
    ...otherProps
}: InputRangeSelectProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================

    const [selectedFromValue, setSelectedFromValue] = useState<T | undefined>();
    const [selectedToValue, setSelectedToValue] = useState<T | undefined>();

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = {
        from: useRef<HTMLDivElement>(),
        to: useRef<HTMLDivElement>(),
    };
    const [focusedInput, setFocusedInput] = useState<RangeType | "none">(
        "none"
    );
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelectedFromValue(selectedOptions?.from);
        setSelectedToValue(selectedOptions?.to);
    }, [selectedOptions]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectorClick =
        (rangeType?: RangeType) => (event: React.MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            if (disabled || readOnly) {
                return;
            }
            if (rangeType === "from") {
                setFocusedInput("from");
            } else if (rangeType === "to" && selectedFromValue) {
                setFocusedInput("to");
            } else if (rangeType === "to" && !selectedFromValue) {
                setFocusedInput("from");
            } else {
                setFocusedInput("from");
            }
        };

    const handleListItemClick = (
        item: T,
        extractedValue: V,
        rangeType?: RangeType
    ) => {
        rangeType === "from"
            ? setSelectedFromValue(item)
            : setSelectedToValue(item);
        triggerOptionDisplayCallback(false);
        if (selectorRef) {
            selectorRef.current.focus();
        }
        if (onSelectOption) {
            onSelectOption({ [rangeType]: item }, extractedValue);
        }
        if (rangeType === "from") {
            setSelectedToValue(undefined);
            setFocusedInput("to");
            triggerOptionDisplayCallback(true);
        } else {
            setFocusedInput("none");
        }
    };

    const handleListDismiss = () => {
        setFocusedInput("none");
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }

        if (!selectedFromValue || !selectedToValue) {
            setSelectedToValue(undefined);
            setSelectedFromValue(undefined);
        }
    };

    const handleWrapperBlur = () => {
        triggerOptionDisplayCallback(false);
        setFocusedInput("none");
        if (!selectedFromValue || !selectedToValue) {
            setSelectedToValue(undefined);
            setSelectedFromValue(undefined);
        }
    };

    const handleClear = (event: React.MouseEvent) => {
        event.stopPropagation();
        setSelectedFromValue(undefined);
        setSelectedToValue(undefined);
        if (onSelectOption) {
            onSelectOption({ from: undefined, to: undefined }, undefined);
        }
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = (rangeType: RangeType): string | V => {
        const selected =
            rangeType === "from" ? selectedFromValue : selectedToValue;
        if (displayValueExtractor) {
            return displayValueExtractor(selected);
        }

        if (valueExtractor) {
            return valueExtractor(selected);
        }
        return selected?.toString();
    };

    const convertValueToString = (value: V | string): string => {
        if (typeof value === "string") {
            return value;
        } else {
            return valueToStringFunction(value) || value.toString();
        }
    };

    const truncateValue = (type: RangeType, value: string | V) => {
        if (optionTruncationType === "middle") {
            let widthOfElement = 0;
            if (labelContainerRef[type] && labelContainerRef[type].current) {
                widthOfElement =
                    labelContainerRef[type].current.getBoundingClientRect()
                        .width;
            }
            return StringHelper.truncateOneLine(
                convertValueToString(value),
                widthOfElement,
                120,
                8
            );
        }
        return value;
    };

    const triggerOptionDisplayCallback = (show: boolean) => {
        if (!show && onHideOptions) {
            onHideOptions();
        }

        if (show && onShowOptions) {
            onShowOptions();
        }
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderLabel = (rangeType: RangeType) => {
        const selected =
            rangeType === "from" ? selectedFromValue : selectedToValue;
        if (!selected) {
            return (
                <PlaceholderLabel truncateType={optionTruncationType}>
                    {truncateValue(rangeType, placeholders[rangeType])}
                </PlaceholderLabel>
            );
        } else if (renderCustomSelectedOption) {
            return renderCustomSelectedOption(selected);
        } else {
            return (
                <ValueLabel truncateType={optionTruncationType}>
                    {truncateValue(rangeType, getDisplayValue(rangeType))}
                </ValueLabel>
            );
        }
    };

    const renderSelectorContent = (rangeType: RangeType) => {
        return (
            <LabelContainer
                onClick={handleSelectorClick(rangeType)}
                ref={labelContainerRef[rangeType]}
                $disabled={disabled}
            >
                {renderLabel(rangeType)}
            </LabelContainer>
        );
    };

    const renderOptionsList = () => {
        if (focusedInput === "none") {
            return null;
        }

        const optionsArr = options[focusedInput];

        if (optionsArr && optionsArr.length > 0) {
            const selected =
                focusedInput === "from" ? selectedFromValue : selectedToValue;
            return (
                <DropdownList
                    listItems={optionsArr}
                    onSelectItem={(i, v) =>
                        handleListItemClick(i, v, focusedInput)
                    }
                    onDismiss={() => handleListDismiss()}
                    valueExtractor={valueExtractor}
                    listExtractor={listExtractor}
                    listStyleWidth={listStyleWidth}
                    visible
                    enableSearch={enableSearch}
                    searchPlaceholder={searchPlaceholder}
                    searchFunction={searchFunction}
                    data-testid={`${focusedInput}-dropdown-list`}
                    selectedItems={selected ? [selected] : []}
                    onRetry={onRetry}
                    itemsLoadState={optionsLoadState[focusedInput]}
                    itemTruncationType={optionTruncationType}
                    renderListItem={renderListItem}
                    renderCustomCallToAction={renderCustomCallToAction}
                />
            );
        }

        return null;
    };
    return (
        <DropdownWrapper
            show={focusedInput !== "none"}
            data-testid={otherProps["data-testid"]}
            error={error && !(focusedInput !== "none")}
            disabled={disabled}
            readOnly={readOnly}
            testId={testId}
            onBlur={handleWrapperBlur}
            className={className}
        >
            <InputSelectorWrapper>
                <SelectorDropdown
                    type="button"
                    data-testid={id || "selector"}
                    disabled={disabled}
                    ref={selectorRef}
                    onClick={handleSelectorClick()}
                    {...otherProps}
                >
                    <RangeInputInnerContainer
                        currentActive={getCurrentFocused()}
                    >
                        {renderSelectorContent("from")}
                        {renderSelectorContent("to")}
                    </RangeInputInnerContainer>
                </SelectorDropdown>
                {focusedInput === "none" &&
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
            </InputSelectorWrapper>
            {focusedInput !== "none" && <Divider />}
            {renderOptionsList()}
        </DropdownWrapper>
    );
};
