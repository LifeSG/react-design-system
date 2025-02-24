import { OpenChangeReason } from "@floating-ui/react";
import findIndex from "lodash/findIndex";
import React, { useEffect, useRef, useState } from "react";
import {
    DropdownList,
    DropdownListState,
    ExpandableElement,
} from "../shared/dropdown-list-v2";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../shared/dropdown-wrapper";
import {
    LabelContainer,
    PlaceholderLabel,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { InputBox } from "../shared/input-wrapper/input-wrapper";
import { SimpleIdGenerator } from "../util";
import { InputMultiSelectProps } from "./types";

export const InputMultiSelect = <T, V>({
    selectedOptions,
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
    listExtractor,
    onSelectOptions,
    onShowOptions,
    onHideOptions,
    onRetry,
    optionsLoadState = "success",
    optionTruncationType = "end",
    renderListItem,
    hideNoResultsDisplay,
    renderCustomCallToAction,
    onBlur,
    variant = "default",
    readOnly,
    alignment,
    dropdownZIndex,
}: InputMultiSelectProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selected, setSelected] = useState<T[]>(selectedOptions || []);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);
    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());

    const nodeRef = useRef<HTMLDivElement>(null);
    const selectorRef = useRef<HTMLButtonElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(selectedOptions || []);
    }, [selectedOptions]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectAllClick = () => {
        if (selected && selected.length > 0) {
            setSelected([]);
            performOnSelectOptions([]);
        } else {
            setSelected(options);
            performOnSelectOptions(options);
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
        performOnSelectOptions(selectedCopy);
    };

    const handleListDismiss = () => {
        if (showOptions) {
            setShowOptions(false);
            triggerOptionDisplayCallback(false);
        }
    };

    const handleNodeFocus = () => {
        if (!focused && !showOptions) {
            setFocused(true);
        }
    };

    const handleNodeBlur = (e: React.FocusEvent) => {
        if (
            focused &&
            !showOptions &&
            !nodeRef.current.contains(e.relatedTarget as Node)
        ) {
            setFocused(false);
            onBlur?.();
        }
    };

    const handleOpen = () => {
        setShowOptions(true);
        triggerOptionDisplayCallback(true);
        setFocused(true);
    };

    const handleClose = (reason: OpenChangeReason) => {
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        // click to toggle should not blur the input
        if (reason !== "click") {
            setFocused(false);
            onBlur?.();
        }
    };

    const handleDismiss = () => {
        selectorRef.current.focus();
        setShowOptions(false);
        triggerOptionDisplayCallback(false);
    };

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const getDisplayValue = () => {
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
    // RENDER FUNCTIONS
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
        <LabelContainer $disabled={disabled}>{renderLabel()}</LabelContainer>
    );

    const renderElement = () => {
        return (
            <InputBox
                className={className}
                data-testid={testId}
                id={id}
                ref={nodeRef}
                tabIndex={-1}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
                $focused={focused}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
            >
                <ExpandableElement
                    ref={selectorRef}
                    disabled={disabled}
                    expanded={showOptions}
                    listboxId={internalId}
                    popupRole="listbox"
                    readOnly={readOnly}
                    variant={variant}
                >
                    {renderSelectorContent()}
                </ExpandableElement>
            </InputBox>
        );
    };

    const renderDropdown = ({ elementWidth }: DropdownRenderProps) => {
        return (
            <DropdownList
                listboxId={internalId}
                listItems={options}
                onSelectItem={handleListItemClick}
                onDismiss={handleListDismiss}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                enableSearch={enableSearch}
                searchFunction={searchFunction}
                searchPlaceholder={searchPlaceholder}
                multiSelect
                selectedItems={selected}
                onSelectAll={handleSelectAllClick}
                onRetry={onRetry}
                itemsLoadState={optionsLoadState}
                itemTruncationType={optionTruncationType}
                renderListItem={renderListItem}
                hideNoResultsDisplay={hideNoResultsDisplay}
                renderCustomCallToAction={renderCustomCallToAction}
                variant={variant}
                width={elementWidth}
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
                onDismiss={handleDismiss}
                clickToToggle
                offset={8}
                alignment={alignment}
                fitAvailableHeight
                customZIndex={dropdownZIndex}
            />
        </DropdownListState>
    );
};
