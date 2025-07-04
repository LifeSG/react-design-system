import { OpenChangeReason } from "@floating-ui/react";
import isEmpty from "lodash/isEmpty";
import React, { useEffect, useRef, useState } from "react";
import {
    ExpandableElement,
    NestedDropdownList,
    NestedDropdownListItemProps,
    NestedDropdownListLocalItem,
    buildKeyPathToSet,
    findItemByKeyPath,
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
import {
    InputNestedSelectProps,
    L1OptionProps,
    L2OptionProps,
    L3OptionProps,
} from "./types";

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
    options: _options,
    disabled,
    error,
    className,
    "data-testid": testId,
    id,
    selectedKeyPath: _selectedKeyPath,
    mode,
    valueToStringFunction,
    enableSearch,
    searchPlaceholder,
    selectableCategory,
    hideNoResultsDisplay,
    noResultsDescription,
    readOnly,
    onBlur,
    onSearch,
    onSelectOption,
    onShowOptions,
    onHideOptions,
    onRetry,
    optionsLoadState = "success",
    optionTruncationType = "end",
    variant = "default",
    alignment,
    dropdownZIndex,
    dropdownRootNode,
}: InputNestedSelectProps<V1, V2, V3>): JSX.Element => {
    // =========================================================================
    // CONST, STATE
    // =========================================================================
    const options = _options as NestedDropdownListItemProps<V1 | V2 | V3>[];
    const [selectedKeyPaths, setSelectedKeyPaths] = useState<Set<string>>(
        _selectedKeyPath
            ? buildKeyPathToSet([_selectedKeyPath])
            : new Set<string>()
    );
    const [selectedItem, setSelectedItem] =
        useState<SelectedItemType<V1, V2, V3>>();

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
        setSelectedKeyPaths(
            _selectedKeyPath
                ? buildKeyPathToSet([_selectedKeyPath])
                : new Set<string>()
        );
        const selectedItem = findItemByKeyPath(options, _selectedKeyPath || []);
        setSelectedItem(selectedItem ?? undefined);
    }, [_selectedKeyPath, options]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleListItemClick = (
        listItem: NestedDropdownListLocalItem<V1 | V2 | V3>
    ) => {
        const {
            keyPath,
            item: { label, value },
        } = listItem;
        setSelectedKeyPaths(buildKeyPathToSet([keyPath]));
        setSelectedItem({ label, value });
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        selectorRef.current?.focus();
        onSelectOption?.(keyPath, value);
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
        if (!selectedItem) return "";
        const { label, value } = selectedItem;

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

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
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
                selectedKeyPaths={selectedKeyPaths}
                selectableCategory={selectableCategory}
                itemsLoadState={optionsLoadState}
                itemTruncationType={optionTruncationType}
                enableSearch={enableSearch}
                searchPlaceholder={searchPlaceholder}
                hideNoResultsDisplay={hideNoResultsDisplay}
                noResultsDescription={noResultsDescription}
                onSelectItem={handleListItemClick}
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
            rootNode={dropdownRootNode}
        />
    );
};
