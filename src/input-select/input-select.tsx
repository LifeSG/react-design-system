import { OpenChangeReason } from "@floating-ui/react";
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
    alignment,
    dropdownZIndex,
}: InputSelectProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selected, setSelected] = useState<T>(selectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);
    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());

    const nodeRef = useRef<HTMLDivElement>();
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
    const handleListItemClick = (item: T, extractedValue: V) => {
        selectorRef.current.focus();
        setSelected(item);
        setShowOptions(false);
        triggerOptionDisplayCallback(false);

        onSelectOption?.(item, extractedValue);
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
        if (show) {
            onShowOptions?.();
        } else {
            onHideOptions?.();
        }
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
        <LabelContainer ref={labelContainerRef}>{renderLabel()}</LabelContainer>
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
                searchPlaceholder={searchPlaceholder}
                searchFunction={searchFunction}
                selectedItems={selected ? [selected] : []}
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
