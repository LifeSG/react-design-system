import React, { useEffect, useRef, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { NestedDropdownList } from "../shared/nested-dropdown-list/nested-dropdown-list";
import { DropdownWrapper } from "../shared/dropdown-wrapper";
import { CombinedFormattedOptionProps } from "../shared/nested-dropdown-list/types";
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

interface SelectedItemType<V1, V2, V3> extends BaseSelectedItem {
    label: string;
    value: V1 | V2 | V3;
}

type BaseSelectedItem = {
    keyPath: string[];
};

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
        _selectedKeyPaths || []
    );
    const [selectedItems, setSelectedItems] =
        useState<SelectedItemType<V1, V2, V3>[]>();

    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const newKeyPath = _selectedKeyPaths || [];
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

    const handleListItemClick = (
        item: CombinedFormattedOptionProps<V1, V2, V3>
    ) => {
        const { keyPath } = item;
        const isKeyPathExists = selectedKeyPaths.some(
            (key) => JSON.stringify(key) === JSON.stringify(keyPath)
        );
        let resultSelectedKeyPaths = [];
        let resultSelectedItems = [];

        if (!isKeyPathExists) {
            // Add
            resultSelectedKeyPaths = [...selectedKeyPaths, keyPath];
            resultSelectedItems = [...selectedItems, item];

            setSelectedKeyPaths(resultSelectedKeyPaths);
            setSelectedItems([...selectedItems, item]);
        } else {
            // Remove
            resultSelectedKeyPaths = selectedKeyPaths.filter(
                (key) => JSON.stringify(key) !== JSON.stringify(keyPath)
            );
            resultSelectedItems = selectedItems
                .map(({ keyPath: key, label, value }) => {
                    if (JSON.stringify(key) !== JSON.stringify(keyPath)) {
                        return {
                            label,
                            value,
                            keyPath: key,
                        };
                    }
                })
                .filter(Boolean);

            setSelectedKeyPaths(resultSelectedKeyPaths);
            setSelectedItems(resultSelectedItems);
        }

        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef.current) {
            selectorRef.current.focus();
        }

        if (onSelectOptions) {
            const returnValue = resultSelectedItems.map((item) => item.value);
            onSelectOptions(resultSelectedKeyPaths, returnValue);
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
        ): (CombinedOptionProps<V1, V2, V3> & BaseSelectedItem) | undefined => {
            const [currentKey, ...nextKeyPath] = keyPaths;

            if (isEmpty(items) || !currentKey) {
                return undefined;
            }

            const item = items.find((item) => item.key === currentKey);

            if (!item || !nextKeyPath.length) {
                const result = {
                    ...item,
                    keyPath: selectedKeyPaths[count],
                };
                count = count + 1;
                return result;
            }

            return findSelectedItem(item.subItems, nextKeyPath);
        };

        const selectedItems = [];
        for (let i = 0; i < selectedKeyPaths.length; i++) {
            const { value, label, keyPath } = findSelectedItem(
                options,
                keyPaths[i]
            );

            selectedItems.push({ value, label, keyPath });
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
                    variant="multi"
                    listItems={options}
                    listStyleWidth={listStyleWidth}
                    visible={showOptions}
                    mode={mode}
                    selectedKeyPath={selectedKeyPaths}
                    itemsLoadState={optionsLoadState}
                    itemTruncationType={optionTruncationType}
                    enableSearch={enableSearch}
                    searchPlaceholder={searchPlaceholder}
                    hideNoResultsDisplay={hideNoResultsDisplay}
                    onDismiss={handleListDismiss}
                    onSelectItem={handleListItemClick}
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
