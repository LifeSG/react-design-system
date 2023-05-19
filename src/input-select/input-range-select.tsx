import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, IndicateBar } from "src/date-input/date-input.style";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";
import { StringHelper } from "../util/string-helper";
import { InputSelectWrapper } from "./input-select-wrapper";
import {
    Divider,
    LabelContainer,
    PlaceholderLabel,
    RangeIcon,
    Selector,
    ValueLabel,
} from "./input-select.styles";
import { InputRangeSelectProps } from "./types";

type RangeType = "from" | "to";

export const InputRangeSelect = <T, V>({
    selectedOptions,
    placeholders = { from: "Select", to: "Select" },
    options,
    disabled,
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
    const handleSelectorClick = (
        event: React.MouseEvent,
        rangeType?: RangeType
    ) => {
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

    const handleListDismiss = (rangeType: RangeType) => {
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderIndicateBar = () => {
        return (
            <IndicateBar
                $stickTo="top"
                $position={
                    focusedInput === "from"
                        ? "start"
                        : focusedInput === "to"
                        ? "end"
                        : "none"
                }
                $disableMobile={false}
                $error={error}
            />
        );
    };

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
        const readOnlyStyle =
            rangeType === "to" && readOnly ? { marginLeft: "1rem" } : {};
        return (
            <LabelContainer
                onClick={(e) => handleSelectorClick(e, rangeType)}
                style={readOnlyStyle}
                ref={labelContainerRef[rangeType]}
            >
                {renderLabel(rangeType)}
            </LabelContainer>
        );
    };

    const renderOptionList = (optionsArr: T[], rangeType: RangeType) => {
        if (optionsArr && optionsArr.length > 0) {
            const selected =
                rangeType === "from" ? selectedFromValue : selectedToValue;
            return (
                <DropdownList
                    listItems={optionsArr}
                    onSelectItem={(i, v) =>
                        handleListItemClick(i, v, rangeType)
                    }
                    onDismiss={() => handleListDismiss(rangeType)}
                    valueExtractor={valueExtractor}
                    listExtractor={listExtractor}
                    listStyleWidth={listStyleWidth}
                    visible={focusedInput !== "none"}
                    enableSearch={enableSearch}
                    searchPlaceholder={searchPlaceholder}
                    searchFunction={searchFunction}
                    data-testid={`${rangeType}-dropdown-list`}
                    selectedItems={selected ? [selected] : []}
                    onRetry={onRetry}
                    itemsLoadState={optionsLoadState[rangeType]}
                    itemTruncationType={optionTruncationType}
                    renderListItem={renderListItem}
                    renderCustomCallToAction={renderCustomCallToAction}
                />
            );
        }

        return null;
    };
    return (
        <InputSelectWrapper
            show={focusedInput !== "none"}
            data-testid={otherProps["data-testid"]}
            error={error && !(focusedInput !== "none")}
            disabled={disabled}
            readOnly={readOnly}
            testId={testId}
            onBlur={handleWrapperBlur}
        >
            <Selector
                type="button"
                data-testid={id || "selector"}
                disabled={disabled}
                ref={selectorRef}
                style={{ gap: "1.8rem" }}
                onClick={(e) => handleSelectorClick(e)}
                {...otherProps}
            >
                {renderSelectorContent("from")}
                <RangeIcon tabIndex={-1}>
                    <ArrowRight />
                </RangeIcon>
                {renderSelectorContent("to")}
            </Selector>
            {focusedInput !== "none" && <Divider />}
            {focusedInput === "from" ? (
                renderOptionList(options.from, "from")
            ) : focusedInput === "to" ? (
                renderOptionList(options.to, "to")
            ) : (
                <></>
            )}
            {renderIndicateBar()}
        </InputSelectWrapper>
    );
};
