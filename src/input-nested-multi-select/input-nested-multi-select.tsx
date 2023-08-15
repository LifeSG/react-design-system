import React, { useEffect, useRef, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { NestedDropdownList } from "../shared/nested-dropdown-list/nested-dropdown-list";
import { DropdownWrapper } from "../shared/dropdown-wrapper";
import {
    CombinedFormattedOptionProps,
    SelectedItem,
} from "../shared/nested-dropdown-list/types";
import {
    Divider,
    IconContainer,
    LabelContainer,
    PlaceholderLabel,
    Selector,
    StyledChevronIcon,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { StringHelper } from "../util";
import { InputNestedMultiSelectProps } from "./types";
import { CombinedOptionProps } from "../input-nested-select";

export const InputNestedMultiSelect = <V1, V2, V3>({
    placeholder = "Select",
    options,
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
    listStyleWidth,
    readOnly,
    onSearch,
    onSelectOptions,
    onShowOptions,
    onHideOptions,
    onRetry,
    optionsLoadState = "success",
    optionTruncationType = "end",
    ...otherProps
}: InputNestedMultiSelectProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selectedKeyPaths, setSelectedKeyPaths] = useState<string[][]>(
        _selectedKeyPaths || [[]]
    );
    const [selectedItems, setSelectedItems] = useState<
        SelectedItem<V1, V2, V3>[]
    >([]);

    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const newKeyPath = _selectedKeyPaths || [[]];
        setSelectedKeyPaths(newKeyPath);

        updateSelectedItemFromKey(options, newKeyPath);
    }, [_selectedKeyPaths, options]);

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
    };

    const handleSelectItem = (
        item: CombinedFormattedOptionProps<V1, V2, V3>
    ) => {
        const { value, label, keyPath } = item;
        const isRemove = selectedKeyPaths.some(
            (key) => JSON.stringify(key) === JSON.stringify(keyPath)
        );
        let resultSelectedKeyPaths: string[][] = [];
        let resultSelectedItems: SelectedItem<V1, V2, V3>[] = [];

        if (!isRemove) {
            resultSelectedKeyPaths = [...selectedKeyPaths, keyPath];
            resultSelectedItems = [...selectedItems, { label, keyPath, value }];
        } else {
            resultSelectedKeyPaths = selectedKeyPaths.filter(
                (key) => JSON.stringify(key) !== JSON.stringify(keyPath)
            );
            resultSelectedItems = selectedItems
                .map(({ keyPath: key, label, value }) => {
                    if (JSON.stringify(key) !== JSON.stringify(keyPath)) {
                        return {
                            value,
                            label,
                            keyPath: key,
                        };
                    }
                })
                .filter(Boolean);
        }

        setSelectedKeyPaths(resultSelectedKeyPaths);
        setSelectedItems(resultSelectedItems);

        triggerOptionDisplayCallback(false);
        if (selectorRef.current) {
            selectorRef.current.focus();
        }

        performOnSelectOptions(resultSelectedKeyPaths, resultSelectedItems);
    };

    const handleSelectItems = (
        items: SelectedItem<V1, V2, V3>[],
        keyPaths: string[][]
    ) => {
        const isRemove = keyPaths.every((keyPath) =>
            selectedKeyPaths.some(
                (key) => JSON.stringify(keyPath) === JSON.stringify(key)
            )
        );

        let resultSelectedKeyPaths: string[][] = [];
        let resultSelectedItems: SelectedItem<V1, V2, V3>[] = [];

        if (!isRemove) {
            resultSelectedKeyPaths = [
                ...new Map(
                    [...selectedKeyPaths, ...keyPaths].map((k) => [
                        k.join("-"),
                        k,
                    ])
                ).values(),
            ];
            resultSelectedItems = [
                ...new Map(
                    [...selectedItems, ...items].map((i) => [
                        i.keyPath.join("-"),
                        i,
                    ])
                ).values(),
            ];
        } else {
            resultSelectedKeyPaths = selectedKeyPaths.filter((selectedKey) =>
                keyPaths.every(
                    (key) => JSON.stringify(selectedKey) !== JSON.stringify(key)
                )
            );
            resultSelectedItems = selectedItems.filter((selectedItem) =>
                items.every(
                    (item) =>
                        JSON.stringify(selectedItem.keyPath) !==
                        JSON.stringify(item.keyPath)
                )
            );
        }

        setSelectedItems(resultSelectedItems);
        setSelectedKeyPaths(resultSelectedKeyPaths);

        performOnSelectOptions(resultSelectedKeyPaths, resultSelectedItems);
    };

    const handleSelectAll = (
        keyPaths: string[][],
        items: SelectedItem<V1, V2, V3>[]
    ) => {
        if (keyPaths && keyPaths.length > 0) {
            setSelectedKeyPaths(keyPaths);
            setSelectedItems(items);
            performOnSelectOptions(keyPaths, items);
        } else {
            setSelectedKeyPaths([[]]);
            setSelectedItems([]);
            performOnSelectOptions();
        }
    };

    const handleListDismiss = (setSelectorFocus?: boolean | undefined) => {
        if (showOptions) {
            setShowOptions(false);
            triggerOptionDisplayCallback(false);
        }

        if (setSelectorFocus && selectorRef.current) {
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
    const performOnSelectOptions = (
        keyPaths: string[][] = [[]],
        items: SelectedItem<V1, V2, V3>[] = []
    ) => {
        if (onSelectOptions) {
            const returnValue = items.map((item) => item.value);
            onSelectOptions(keyPaths, returnValue);
        }
    };

    const getDisplayValue = (): string => {
        const { label, value } = selectedItems[0];

        if (selectedItems.length > 1) {
            return `${selectedItems.length} selected`;
        } else if (valueToStringFunction) {
            return valueToStringFunction(value) || value.toString();
        } else {
            return label;
        }
    };

    const updateSelectedItemFromKey = (
        options: CombinedOptionProps<V1, V2, V3>[],
        keyPaths: string[][]
    ) => {
        let count = 0;

        const findSelectedItem = (
            items: CombinedOptionProps<V1, V2, V3>[],
            keyPaths: string[]
        ): SelectedItem<V1, V2, V3> | undefined => {
            const [currentKey, ...nextKeyPath] = keyPaths;

            if (isEmpty(items) || !currentKey) {
                return undefined;
            }

            const item = items.find((item) => item.key === currentKey);
            const { label, value, subItems } = item;

            if (!item || !nextKeyPath.length) {
                const result = {
                    label,
                    value,
                    keyPath: selectedKeyPaths[count],
                };
                count = count + 1;
                return result;
            }

            return findSelectedItem(subItems, nextKeyPath);
        };

        const selectedItems = [];

        for (let i = 0; i < selectedKeyPaths.length; i++) {
            const item = findSelectedItem(options, keyPaths[i]);
            if (!item) break;

            selectedItems.push({
                value: item.value,
                label: item.label,
                keyPath: item.keyPath,
            });
        }

        setSelectedItems(selectedItems);
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
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
        <>
            <LabelContainer ref={labelContainerRef}>
                {renderLabel()}
            </LabelContainer>
            {!readOnly && (
                <IconContainer expanded={showOptions}>
                    <StyledChevronIcon />
                </IconContainer>
            )}
        </>
    );

    const renderOptionList = () => {
        if ((options && options.length > 0) || onRetry) {
            return (
                <NestedDropdownList
                    data-testid="dropdown-list"
                    multiSelect={true}
                    listItems={options}
                    listStyleWidth={listStyleWidth}
                    visible={showOptions}
                    mode={mode}
                    selectedKeyPaths={selectedKeyPaths}
                    itemsLoadState={optionsLoadState}
                    itemTruncationType={optionTruncationType}
                    enableSearch={enableSearch}
                    searchPlaceholder={searchPlaceholder}
                    hideNoResultsDisplay={hideNoResultsDisplay}
                    onDismiss={handleListDismiss}
                    onSelectAll={handleSelectAll}
                    onSelectItem={handleSelectItem}
                    onSelectItems={handleSelectItems}
                    onSearch={onSearch}
                    onRetry={onRetry}
                />
            );
        }

        return null;
    };

    return (
        <DropdownWrapper
            className={className}
            show={showOptions}
            error={error && !showOptions}
            disabled={disabled}
            readOnly={readOnly}
            testId={testId}
            onBlur={handleWrapperBlur}
        >
            <Selector
                ref={selectorRef}
                type="button"
                data-testid={id || "selector"}
                disabled={disabled}
                onClick={handleSelectorClick}
                {...otherProps}
            >
                {renderSelectorContent()}
            </Selector>
            {showOptions && <Divider />}
            {renderOptionList()}
        </DropdownWrapper>
    );
};
