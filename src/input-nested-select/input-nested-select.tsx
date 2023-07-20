import React, { useEffect, useRef, useState } from "react";
import { NestedDropdownList } from "../shared/nested-dropdown-list/nested-dropdown-list";
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
import { InputNestedSelectProps, ItemOption } from "./types";
import { StringHelper } from "../util";
import { FItemOption } from "../shared/nested-dropdown-list/types";

type SelectedItemTypes<V1, V2, V3> =
    | ItemOption<V1, V2, V3>
    | FItemOption<V1, V2, V3>;

export const InputNestedSelect = <V1, V2, V3>({
    placeholder = "Select",
    options,
    disabled,
    error,
    className,
    "data-testid": testId,
    id,
    selectedKeyPath,
    mode,
    valueToStringFunction,
    onSelectOption,
    listStyleWidth,
    onShowOptions,
    onHideOptions,
    onRetry,
    optionsLoadState = "success",
    optionTruncationType = "end",
    ...otherProps
}: InputNestedSelectProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================

    // how to get the label if user provided selectedKeys?

    const [selectedKeys, setSelectedKeys] =
        useState<string[][]>(selectedKeyPath);
    const [selectedItem, setSelectedItem] =
        useState<SelectedItemTypes<V1, V2, V3>[]>();

    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!selectedKeys || !selectedKeys.flat().length) return;

        updateSelectedItemFromKeys(options, selectedKeys);
    }, [selectedKeys]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelectorClick = (event: React.MouseEvent) => {
        event.preventDefault();

        if (disabled || otherProps.readOnly) {
            return;
        }

        setShowOptions(!showOptions);
        triggerOptionDisplayCallback(!showOptions);
    };

    const handleListItemClick = (item: FItemOption<V1, V2, V3>) => {
        const { keyPath, value } = item;

        setSelectedKeys([keyPath]);
        setSelectedItem([item]);

        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef) {
            selectorRef.current.focus();
        }

        if (onSelectOption) {
            onSelectOption(keyPath, value);
        }
    };

    const handleListDismiss = (setSelectorFocus?: boolean | undefined) => {
        if (showOptions) {
            setShowOptions(false);
            triggerOptionDisplayCallback(false);
        }

        if (setSelectorFocus && selectorRef) {
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
        if (selectedItem.length === 1) {
            return selectedItem[0].label;
        } else if (selectedItem.length > 1) {
            return `${selectedItem.length} selected`;
        }
    };

    const updateSelectedItemFromKeys = (
        options: ItemOption<V1, V2, V3>[],
        keyPaths: string[][],
        items: ItemOption<V1, V2, V3>[] = []
    ) => {
        if (!options || !options.length) return;

        const [currentKeys, ...remainingKeys] = keyPaths;

        let selectedItem = null;

        for (const key of currentKeys) {
            if (!selectedItem) {
                selectedItem = options.find(
                    (item) => item.key.toString() === key.toString()
                );
            } else {
                selectedItem = selectedItem.subItems.find(
                    (item) => item.key.toString() === key.toString()
                );
            }

            if (!selectedItem) return null;
        }

        items = [...items, selectedItem];

        if (remainingKeys.length) {
            updateSelectedItemFromKeys(options, remainingKeys, items);
        } else {
            setSelectedItem(items);
        }
    };

    const convertValueToString = (value: string | V1 | V2 | V3): string => {
        if (typeof value === "string") {
            return value;
        } else {
            return valueToStringFunction(value) || value.toString();
        }
    };

    const truncateValue = (value: string | V1 | V2 | V3) => {
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
        if (!selectedItem) {
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
            <IconContainer expanded={showOptions}>
                <StyledChevronIcon />
            </IconContainer>
        </>
    );

    const renderOptionList = () => {
        if ((options && options.length > 0) || onRetry) {
            return (
                <NestedDropdownList
                    data-testid="dropdown-list"
                    listItems={options}
                    listStyleWidth={listStyleWidth}
                    visible={showOptions}
                    mode={mode}
                    selectedKeys={selectedKeys ? selectedKeys : []}
                    itemsLoadState={optionsLoadState}
                    itemTruncationType={optionTruncationType}
                    onDismiss={handleListDismiss}
                    onSelectItem={handleListItemClick}
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
            readOnly={otherProps.readOnly}
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
