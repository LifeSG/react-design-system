import React, { useEffect, useRef, useState } from "react";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";
import { StringHelper } from "../util/string-helper";
import { InputSelectWrapper } from "./input-select-wrapper";
import {
    Divider,
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    StyledIcon,
    ValueLabel,
} from "./input-select.styles";
import { InputSelectProps } from "./types";

export const InputSelect = <T, V>({
    selectedOption,
    placeholder = "Select",
    options,
    disabled,
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
    optionsLoadState = "success",
    optionTruncationType = "end",
    renderCustomSelectedOption,
    renderListItem,
    ...otherProps
}: InputSelectProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selected, setSelected] = useState<T>(selectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(selectedOption);
    }, [selectedOption]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectorClick = (event: React.MouseEvent) => {
        event.preventDefault();

        if (!disabled && !otherProps.readOnly) {
            setShowOptions(!showOptions);
            triggerOptionDisplayCallback(!showOptions);
        }
    };

    const handleListItemClick = (item: T, extractedValue: V) => {
        setSelected(item);
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }

        if (onSelectOption) {
            onSelectOption(item, extractedValue);
        }
    };

    const handleListDismiss = () => {
        if (showOptions) {
            setShowOptions(false);
            triggerOptionDisplayCallback(false);
        }

        if (selectorRef) {
            selectorRef.current.focus();
        }
    };

    const handleWrapperBlur = () => {
        setShowOptions(false);
        triggerOptionDisplayCallback(false);
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = (): string | V => {
        if (displayValueExtractor) {
            return displayValueExtractor(selected);
        }

        if (valueExtractor) {
            return valueExtractor(selected);
        }

        return selected.toString();
    };

    const convertValueToString = (value: V | string): string => {
        if (typeof value === "string") {
            return value;
        } else {
            return valueToStringFunction(value) || value.toString();
        }
    };

    const truncateValue = (value: string | V) => {
        if (optionTruncationType === "middle") {
            let widthOfElement = 0;
            if (labelContainerRef && labelContainerRef.current) {
                widthOfElement =
                    labelContainerRef.current.getBoundingClientRect().width;
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
    const renderLabel = () => {
        if (!selected) {
            return (
                <PlaceholderLabel truncateType={optionTruncationType}>
                    {placeholder}
                </PlaceholderLabel>
            );
        } else if (renderCustomSelectedOption) {
            return renderCustomSelectedOption(selected);
        } else {
            return (
                <ValueLabel truncateType={optionTruncationType}>
                    {truncateValue(getDisplayValue())}
                </ValueLabel>
            );
        }
    };

    const renderSelectorContent = () => (
        <>
            <LabelContainer ref={labelContainerRef}>
                {renderLabel()}
            </LabelContainer>
            {!otherProps.readOnly && (
                <IconContainer expanded={showOptions}>
                    <StyledIcon type="chevron-down" />
                </IconContainer>
            )}
        </>
    );

    const renderOptionList = () => {
        if (options && options.length > 0) {
            return (
                <DropdownList
                    listItems={options}
                    onSelectItem={handleListItemClick}
                    onDismiss={handleListDismiss}
                    valueExtractor={valueExtractor}
                    listExtractor={listExtractor}
                    listStyleWidth={listStyleWidth}
                    visible={showOptions}
                    enableSearch={enableSearch}
                    searchPlaceholder={searchPlaceholder}
                    searchFunction={searchFunction}
                    data-testid="dropdown-list"
                    selectedItems={selected ? [selected] : []}
                    onRetry={onRetry}
                    itemsLoadState={optionsLoadState}
                    itemTruncationType={optionTruncationType}
                    renderListItem={renderListItem}
                />
            );
        }

        return null;
    };

    return (
        <InputSelectWrapper
            show={showOptions}
            error={error && !showOptions}
            disabled={disabled}
            readOnly={otherProps.readOnly}
            testId={testId}
            onBlur={handleWrapperBlur}
        >
            <Selector
                ref={selectorRef}
                type="button"
                data-testid={id || "selector"}
                onClick={handleSelectorClick}
                {...otherProps}
            >
                {renderSelectorContent()}
            </Selector>
            {showOptions && <Divider />}
            {renderOptionList()}
        </InputSelectWrapper>
    );
};
