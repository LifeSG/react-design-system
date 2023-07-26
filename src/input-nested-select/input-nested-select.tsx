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
import {
    InputNestedSelectProps,
    L1OptionProps,
    L2OptionProps,
    L3OptionProps,
} from "./types";
import { StringHelper } from "../util";

export type CombinedOptionProps<V1, V2, V3> =
    | L1OptionProps<V1, V2, V3>
    | L2OptionProps<V2, V3>
    | L3OptionProps<V3>;

interface SelectedItemType<V1, V2, V3> {
    label: string;
    value: V1 | V2 | V3;
}

export const InputNestedSelect = <V1, V2, V3>({
    placeholder = "Select",
    options,
    disabled,
    error,
    className,
    "data-testid": testId,
    id,
    selectedKeyPath: _selectedKeyPath,
    mode,
    valueToStringFunction,
    onSelectOption,
    listStyleWidth,
    readOnly,
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
    const [selectedKeyPath, setSelectedKeyPath] =
        useState<string[]>(_selectedKeyPath);
    const [selectedItem, setSelectedItem] =
        useState<SelectedItemType<V1, V2, V3>>();

    const [showOptions, setShowOptions] = useState<boolean>(false);

    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        // update the label
        updateSelectedItemFromKey(options, _selectedKeyPath || []);
    }, [_selectedKeyPath, options]);

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
        const { keyPath, value, label } = item;

        setSelectedKeyPath(keyPath);
        setSelectedItem({ label, value });
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        if (selectorRef.current) {
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
        const { label, value } = selectedItem;

        if (valueToStringFunction) {
            return valueToStringFunction(value) || value.toString();
        } else {
            return label;
        }
    };

    const updateSelectedItemFromKey = (
        options: CombinedOptionProps<V1, V2, V3>[],
        keyPaths: string[]
    ) => {
        const findSelectedItem = (
            items: CombinedOptionProps<V1, V2, V3>[],
            keyPaths: string[]
        ): CombinedOptionProps<V1, V2, V3> | undefined => {
            const [currentKey, ...nextKeyPath] = keyPaths;

            if (isEmpty(items) || !currentKey) {
                return undefined;
            }

            const item = items.find((item) => item.key === currentKey);

            if (!item || !nextKeyPath.length) {
                return item;
            }

            return findSelectedItem(item.subItems, nextKeyPath);
        };

        const selectedItem = findSelectedItem(options, keyPaths);

        if (selectedItem) {
            const { label, value } = selectedItem;
            setSelectedItem({ label, value });
        } else {
            setSelectedItem(undefined);
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderLabel = () => {
        if (isEmpty(selectedItem)) {
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
                    listItems={options}
                    listStyleWidth={listStyleWidth}
                    visible={showOptions}
                    mode={mode}
                    selectedKeyPath={selectedKeyPath ? selectedKeyPath : []}
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
