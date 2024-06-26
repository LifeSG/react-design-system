import findIndex from "lodash/findIndex";
import React, { useEffect, useRef, useState } from "react";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";
import { DropdownWrapper } from "../shared/dropdown-wrapper";
import {
    Divider,
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    StyledChevronIcon,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { InputMultiSelectProps } from "./types";

export const InputMultiSelect = <T, V>({
    selectedOptions,
    placeholder = "Select",
    options,
    className,
    disabled,
    error,
    "data-testid": testId,
    enableSearch = false,
    searchFunction,
    searchPlaceholder,
    valueExtractor,
    listExtractor,
    onSelectOptions,
    listStyleWidth,
    onShowOptions,
    onHideOptions,
    onRetry,
    onBlur,
    optionsLoadState = "success",
    optionTruncationType = "end",
    variant = "default",
    ...otherProps
}: InputMultiSelectProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selected, setSelected] = useState<T[]>(selectedOptions || []);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(selectedOptions || []);
    }, [selectedOptions]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectorClick = (event: React.MouseEvent) => {
        event.preventDefault();

        if (!disabled) {
            setShowOptions(!showOptions);
            triggerOptionDisplayCallback(!showOptions);

            // This is needed for Safari as it does not fire onBlur when dropdown wrapper is closed
            if (showOptions) {
                onBlur?.();
            }
        }
    };

    const handleListItemClick = (item: T, extractedValue: T | V) => {
        const selectedCopy = [...selected];

        // Check if it is a selection or deselection
        const itemIndex = findIndex(selected, (item) => {
            const valueToCompare = valueExtractor ? valueExtractor(item) : item;
            return valueToCompare === extractedValue;
        });

        if (itemIndex > -1) {
            // Item exists in selected. This indicates a deselection
            selectedCopy.splice(itemIndex, 1);
        } else {
            // Item does not exist in selected. This indicates a selection
            selectedCopy.push(item);
        }

        setSelected(selectedCopy);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }

        performOnSelectOptions(selectedCopy);
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

    const handleSelectAllClick = () => {
        if (selected && selected.length > 0) {
            setSelected([]);
            performOnSelectOptions([]);
        } else {
            setSelected(options);
            performOnSelectOptions(options);
        }
    };

    const handleWrapperBlur = () => {
        onBlur?.();
        setShowOptions(false);
        triggerOptionDisplayCallback(false);
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = () => {
        if (!selected || selected.length == 0) {
            return placeholder;
        }

        if (options && selected.length === options.length) {
            return "All selected";
        }

        return `${selected.length} selected`;
    };

    const triggerOptionDisplayCallback = (show: boolean) => {
        if (!show && onHideOptions) {
            onHideOptions();
        }

        if (show && onShowOptions) {
            onShowOptions();
        }
    };

    const performOnSelectOptions = (options: T[]) => {
        if (onSelectOptions) {
            onSelectOptions(options);
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderLabel = () => {
        if (!selected || selected.length === 0) {
            return (
                <PlaceholderLabel
                    truncateType={optionTruncationType}
                    $variant={variant}
                >
                    {placeholder}
                </PlaceholderLabel>
            );
        } else {
            return (
                <ValueLabel $variant={variant}>{getDisplayValue()}</ValueLabel>
            );
        }
    };

    const renderSelectorContent = () => (
        <>
            <LabelContainer>{renderLabel()}</LabelContainer>
            <IconContainer expanded={showOptions}>
                <StyledChevronIcon $variant={variant} />
            </IconContainer>
        </>
    );

    const renderOptionList = () => {
        // Cater for sync and async load
        if ((options && options.length > 0) || onRetry) {
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
                    searchFunction={searchFunction}
                    searchPlaceholder={searchPlaceholder}
                    data-testid="dropdown-list"
                    multiSelect={true}
                    selectedItems={selected}
                    onSelectAll={handleSelectAllClick}
                    onRetry={onRetry}
                    itemsLoadState={optionsLoadState}
                    itemTruncationType={optionTruncationType}
                    variant={variant}
                />
            );
        }

        return null;
    };

    return (
        <DropdownWrapper
            show={showOptions}
            error={error && !showOptions}
            disabled={disabled}
            testId={testId}
            className={className}
            onBlur={handleWrapperBlur}
            variant={variant}
        >
            <Selector
                ref={selectorRef}
                type="button"
                data-testid="selector"
                onClick={handleSelectorClick}
                onBlur={() => {
                    if (!showOptions) {
                        onBlur?.();
                    }
                }}
                $variant={variant}
                {...otherProps}
            >
                {renderSelectorContent()}
            </Selector>
            {showOptions && <Divider />}
            {renderOptionList()}
        </DropdownWrapper>
    );
};
