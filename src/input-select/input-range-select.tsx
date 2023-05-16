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
import { InputRangeProp, InputRangeSelectProps } from "./types";

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
    const [selected, setSelected] = useState<InputRangeProp<T>>({
        from: selectedOptions?.from,
        to: selectedOptions?.to,
    });
    const [showOptions, setShowOptions] = useState<InputRangeProp<boolean>>({
        from: false,
        to: false,
    });

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = {
        from: useRef<HTMLDivElement>(),
        to: useRef<HTMLDivElement>(),
    };
    const [currentElementType, setCurrentElementType] = useState<
        "start" | "end" | "none"
    >("none");
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected({ from: selectedOptions?.from, to: selectedOptions?.to });
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
            showDropDown("from");
        } else if (rangeType === "to" && selected.from) {
            showDropDown("to");
        } else if (rangeType === "to" && !selected.from) {
            showDropDown("from");
        } else {
            showDropDown("from");
        }
    };

    const showDropDown = (rangeType: RangeType) => {
        const otherRangeType = rangeType === "from" ? "to" : "from";
        showOptions[rangeType] = true;
        showOptions[otherRangeType] = false;
        setShowOptions({ ...showOptions });
        setCurrentElementType(rangeType === "from" ? "start" : "end");
    };

    const handleListItemClick = (
        item: T,
        extractedValue: V,
        rangeType?: RangeType
    ) => {
        selected[rangeType] = item;
        setSelected({ ...selected });
        triggerOptionDisplayCallback(false);
        if (selectorRef) {
            selectorRef.current.focus();
        }
        if (onSelectOption) {
            onSelectOption({ [rangeType]: item }, extractedValue);
        }
        if (rangeType === "from") {
            showOptions[rangeType] = false;
            selected.to = undefined;
            setSelected({ ...selected });
            setTimeout(() => {
                showOptions.to = true;
                setShowOptions({ ...showOptions });
                setCurrentElementType("end");
            }, 250); // Allow dropdown animations to complete
            triggerOptionDisplayCallback(showOptions[rangeType]);
        } else {
            showOptions[rangeType] = false;
            setShowOptions({ ...showOptions });
            setCurrentElementType("none");
        }
    };

    const handleListDismiss = (rangeType: RangeType) => {
        if (showOptions) {
            showOptions[rangeType] = false;
            setShowOptions({ ...showOptions });
            triggerOptionDisplayCallback(false);
        }
        if (selectorRef) {
            selectorRef.current.focus();
        }
    };

    const handleWrapperBlur = () => {
        triggerOptionDisplayCallback(false);
        setCurrentElementType("none");
        showOptions.from = false;
        showOptions.to = false;
        setShowOptions({ ...showOptions });
        if (!selected.from || !selected.to) {
            setSelected({ from: undefined, to: undefined });
        }
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = (rangeType: RangeType): string | V => {
        if (displayValueExtractor) {
            return displayValueExtractor(selected[rangeType]);
        }

        if (valueExtractor) {
            return valueExtractor(selected[rangeType]);
        }
        return selected[rangeType]?.toString();
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
                $position={currentElementType}
                $disableMobile={false}
            />
        );
    };

    const renderLabel = (rangeType: RangeType) => {
        if (!selected[rangeType]) {
            return (
                <PlaceholderLabel truncateType={optionTruncationType}>
                    {truncateValue(rangeType, placeholders[rangeType])}
                </PlaceholderLabel>
            );
        } else if (renderCustomSelectedOption) {
            return renderCustomSelectedOption(selected[rangeType]);
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
                    visible={showOptions[rangeType]}
                    enableSearch={enableSearch}
                    searchPlaceholder={searchPlaceholder}
                    searchFunction={searchFunction}
                    data-testid={`${rangeType}-dropdown-list`}
                    selectedItems={
                        selected && selected[rangeType]
                            ? [selected[rangeType]]
                            : []
                    }
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
            show={showOptions.from || showOptions.to}
            data-testid={otherProps["data-testid"]}
            error={error && !(showOptions.from || showOptions.to)}
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
            {(showOptions?.from || showOptions?.to) && <Divider />}
            {renderOptionList(options.from, "from")}
            {renderOptionList(options.to, "to")}
            {renderIndicateBar()}
        </InputSelectWrapper>
    );
};
