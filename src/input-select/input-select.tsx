import React, { useEffect, useRef, useState } from "react";
import { DropdownList, DropdownListState } from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import {
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    StyledChevronIcon,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { InputFieldBox } from "../shared/input-wrapper/input-field-box";
import { StringHelper } from "../util/string-helper";
import { InputSelectProps } from "./types";

export const InputSelect = <T, V>({
    selectedOption,
    placeholder = "Select",
    options,
    disabled,
    error,
    className,
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
    hideNoResultsDisplay,
    renderCustomCallToAction,
    onBlur,
    variant = "default",
    readOnly,
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

        if (disabled || readOnly) {
            return;
        }
        setShowOptions(!showOptions);
        triggerOptionDisplayCallback(!showOptions);

        // This is needed for Safari as it does not fire onBlur when dropdown wrapper is closed
        if (showOptions) {
            onBlur?.();
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

    const handleListDismiss = (setSelectorFocus?: boolean | undefined) => {
        if (showOptions) {
            setShowOptions(false);
            triggerOptionDisplayCallback(false);
        }
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

    const handleOpen = () => {
        setShowOptions(true);
    };

    const handleClose = () => {
        setShowOptions(false);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderLabel = () => {
        if (!selected) {
            return (
                <PlaceholderLabel
                    truncateType={optionTruncationType}
                    $variant={variant}
                >
                    {placeholder}
                </PlaceholderLabel>
            );
        } else if (renderCustomSelectedOption) {
            return renderCustomSelectedOption(selected);
        } else {
            return (
                <ValueLabel
                    truncateType={optionTruncationType}
                    $variant={variant}
                >
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
            {!readOnly && (
                <IconContainer expanded={showOptions}>
                    <StyledChevronIcon $variant={variant} />
                </IconContainer>
            )}
        </>
    );

    const renderElement = () => {
        return (
            <InputFieldBox
                $focused={showOptions}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
            >
                <Selector
                    ref={selectorRef}
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={showOptions}
                    data-testid={id || "selector"}
                    disabled={disabled}
                    $variant={variant}
                    {...otherProps}
                >
                    {renderSelectorContent()}
                </Selector>
            </InputFieldBox>
        );
    };

    const renderDropdown = () => {
        if (!options || options.length < 1) {
            return null;
        }

        return (
            <DropdownList
                listItems={options}
                onSelectItem={handleListItemClick}
                onDismiss={handleListDismiss}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                listStyleWidth={listStyleWidth}
                enableSearch={enableSearch}
                searchPlaceholder={searchPlaceholder}
                searchFunction={searchFunction}
                data-testid="dropdown-list"
                selectedItems={selected ? [selected] : []}
                onRetry={onRetry}
                itemsLoadState={optionsLoadState}
                itemTruncationType={optionTruncationType}
                renderListItem={renderListItem}
                hideNoResultsDisplay={hideNoResultsDisplay}
                renderCustomCallToAction={renderCustomCallToAction}
                variant={variant}
            />
        );
    };

    return (
        <DropdownListState>
            <ElementWithDropdown
                enabled={!readOnly && !disabled}
                isOpen={showOptions}
                renderElement={renderElement}
                renderDropdown={renderDropdown}
                onOpen={handleOpen}
                onClose={handleClose}
                clickToToggle
            />
        </DropdownListState>
    );
};
