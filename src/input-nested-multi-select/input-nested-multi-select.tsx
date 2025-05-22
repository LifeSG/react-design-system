import { OpenChangeReason } from "@floating-ui/react";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import React, { useEffect, useRef, useState } from "react";
import {
    ExpandableElement,
    NestedDropdownList,
    NestedDropdownListItemProps,
    NestedDropdownListLocalItem,
    buildKeyPathToSet,
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
import { SimpleIdGenerator, StringHelper } from "../util";
import { SelectedItem, getSelectedItems, getSelectedSubItems } from "./helpers";
import { InputNestedMultiSelectProps } from "./types";

export const InputNestedMultiSelect = <V1, V2, V3>({
    placeholder = "Select",
    options: _options,
    disabled,
    error,
    className,
    "data-testid": testId,
    id,
    selectedKeyPaths: _selectedKeyPaths,
    mode,
    valueToStringFunction,
    enableSearch,
    searchPlaceholder,
    hideNoResultsDisplay,
    noResultsDesc,
    readOnly,
    onSearch,
    onSelectOptions,
    onShowOptions,
    onHideOptions,
    onRetry,
    onBlur,
    optionsLoadState = "success",
    optionTruncationType = "end",
    variant = "default",
    alignment,
    dropdownZIndex,
}: InputNestedMultiSelectProps<V1, V2, V3>): JSX.Element => {
    // =========================================================================
    // CONST, STATE
    // =========================================================================
    const options = _options as NestedDropdownListItemProps<V1 | V2 | V3>[];
    const [selectedKeyPaths, setSelectedKeyPaths] = useState<Set<string>>(
        _selectedKeyPaths
            ? buildKeyPathToSet(_selectedKeyPaths)
            : new Set<string>()
    );
    const [selectedItems, setSelectedItems] = useState<
        SelectedItem<V1 | V2 | V3>[]
    >([]);

    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);
    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());

    const nodeRef = useRef<HTMLDivElement>(null);
    const selectorRef = useRef<HTMLButtonElement>(null);
    const labelContainerRef = useRef<HTMLDivElement>(null);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        const newKeyPath = _selectedKeyPaths || [];
        const selectedItems = getSelectedItems(options, newKeyPath);

        setSelectedKeyPaths(buildKeyPathToSet(newKeyPath));
        setSelectedItems(selectedItems);
    }, [_selectedKeyPaths, options]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSelectAll = (
        keyPaths: string[][],
        items: NestedDropdownListLocalItem<V1 | V2 | V3>[]
    ) => {
        const selectedItems = items.map((item) => ({
            keyPath: item.keyPath,
            label: item.item.label,
            value: item.item.value,
        }));
        setSelectedKeyPaths(buildKeyPathToSet(keyPaths));
        setSelectedItems(selectedItems);
        performOnSelectOptions(keyPaths, selectedItems);
    };

    const handleListItemClick = (
        listItem: NestedDropdownListLocalItem<V1 | V2 | V3>
    ) => {
        const newSelectedItems: SelectedItem<V1 | V2 | V3>[] =
            getNewSelection(listItem);
        const newKeyPaths = newSelectedItems.map((item) => item.keyPath);
        setSelectedItems(newSelectedItems);
        setSelectedKeyPaths(buildKeyPathToSet(newKeyPaths));
        performOnSelectOptions(newKeyPaths, newSelectedItems);
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
            nodeRef.current &&
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

    const handleClose = (reason: OpenChangeReason | undefined) => {
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        // click to toggle should not blur the input
        if (reason !== "click") {
            setFocused(false);
            onBlur?.();
        }
    };

    const handleDismiss = () => {
        selectorRef.current?.focus();
        setShowOptions(false);
        triggerOptionDisplayCallback(false);
    };

    // =========================================================================
    // HELPER FUNCTION
    // =========================================================================
    const getDisplayValue = (): string => {
        if (selectedItems.length > 1) {
            return `${selectedItems.length} selected`;
        }

        const { label, value } = selectedItems[0];
        if (valueToStringFunction) {
            return valueToStringFunction(value);
        } else {
            return label;
        }
    };

    const truncateValue = (value: string) => {
        if (optionTruncationType === "middle") {
            let widthOfElement = 0;
            if (labelContainerRef && labelContainerRef.current) {
                widthOfElement =
                    labelContainerRef.current.getBoundingClientRect().width;
            }
            return StringHelper.truncateOneLine(value, widthOfElement, 120, 6);
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

    const performOnSelectOptions = (
        keyPaths: string[][],
        items: SelectedItem<V1 | V2 | V3>[]
    ) => {
        if (onSelectOptions) {
            const returnValue = items.map((item) => item.value);
            onSelectOptions(keyPaths, returnValue);
        }
    };

    const getNewSelection = (
        item: NestedDropdownListLocalItem<V1 | V2 | V3>
    ): SelectedItem<V1 | V2 | V3>[] => {
        if (item.checked === true) {
            // remove item or subitems
            return selectedItems.filter((selectedItem) => {
                const ancestorKeyPath = selectedItem.keyPath.slice(
                    0,
                    item.keyPath.length
                );
                return !isEqual(item.keyPath, ancestorKeyPath);
            });
        } else {
            // select item or all subitems
            const nextSelection = [...selectedItems];
            const newItemsToAdd = item.hasSubItems
                ? getSelectedSubItems(options, item.keyPath)
                : [
                      {
                          value: item.item.value,
                          label: item.item.label,
                          keyPath: item.keyPath,
                      },
                  ];
            newItemsToAdd.forEach((addedItem) => {
                if (
                    !selectedItems.find((selectedItem) =>
                        isEqual(selectedItem.keyPath, addedItem.keyPath)
                    )
                ) {
                    nextSelection.push(addedItem);
                }
            });
            return nextSelection;
        }
    };

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    const renderLabel = () => {
        if (isEmpty(selectedItems)) {
            return (
                <PlaceholderLabel truncateType={optionTruncationType}>
                    {placeholder}
                </PlaceholderLabel>
            );
        } else {
            return (
                <ValueLabel truncateType={optionTruncationType}>
                    {truncateValue(getDisplayValue())}
                </ValueLabel>
            );
        }
    };

    const renderSelectorContent = () => (
        <LabelContainer ref={labelContainerRef} $disabled={disabled}>
            {renderLabel()}
        </LabelContainer>
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
                    popupRole="tree"
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
            <NestedDropdownList
                listboxId={internalId}
                listItems={options}
                multiSelect
                selectedKeyPaths={selectedKeyPaths}
                itemsLoadState={optionsLoadState}
                itemTruncationType={optionTruncationType}
                enableSearch={enableSearch}
                searchPlaceholder={searchPlaceholder}
                hideNoResultsDisplay={hideNoResultsDisplay}
                noResultsDesc={noResultsDesc}
                onSelectItem={handleListItemClick}
                onSelectAll={handleSelectAll}
                onRetry={onRetry}
                onSearch={onSearch}
                variant={variant}
                mode={mode}
                width={elementWidth}
            />
        );
    };

    return (
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
    );
};
