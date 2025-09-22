import { OpenChangeReason } from "@floating-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
    DropdownList,
    DropdownListState,
    ExpandableElement,
} from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import {
    LabelContainer,
    PlaceholderLabel,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { SimpleIdGenerator } from "../util";
import {
    Divider,
    FieldInput,
    FieldSelector,
    FieldWrapper,
    SelectorReadOnly,
} from "./input-group-list-addon.style";
import { InputGroupProps, ListAddon } from "./types";

export const Component = <T, V>(
    {
        addon,
        error,
        onChange,
        readOnly,
        disabled,
        className,
        onBlur,
        "data-testid": testId,
        ...otherProps
    }: InputGroupProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    const {
        /* display props */
        valueExtractor,
        listExtractor,
        /* search props */
        enableSearch,
        hideNoResultsDisplay,
        noResultsDescription,
        searchPlaceholder,
        searchFunction,
        onSearch,
        /* list addon props */
        placeholder = "Select",
        displayValueExtractor,
        "data-selector-testid": selectorTestId,
        options,
        selectedOption,
        onSelectOption,
        optionsLoadState,
        optionTruncationType,
        onRetry,
        onHideOptions,
        onShowOptions,
        dropdownZIndex,
        dropdownRootNode,
    } = addon!.attributes as ListAddon<T, V>;

    const { position } = addon!;

    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState<T | undefined>(selectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);
    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());

    const nodeRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef<HTMLDivElement>(null);
    const selectorRef = useRef<HTMLButtonElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(selectedOption);
    }, [selectedOption]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getDisplayValue = () => {
        if (!selected) return;

        if (displayValueExtractor) {
            return displayValueExtractor(selected);
        }

        if (valueExtractor) {
            return valueExtractor(selected);
        }

        return selected.toString();
    };

    const triggerOptionDisplayCallback = (show: boolean) => {
        if (show) {
            onShowOptions?.();
        } else {
            onHideOptions?.();
        }
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleListItemClick = (item: T, extractedValue: V) => {
        selectorRef.current?.focus();
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event);
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

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderLabel = () => {
        if (!selected) {
            return <PlaceholderLabel>{placeholder}</PlaceholderLabel>;
        } else {
            return <ValueLabel>{getDisplayValue()}</ValueLabel>;
        }
    };

    const renderSelectorContent = () => (
        <LabelContainer $disabled={disabled}>{renderLabel()}</LabelContainer>
    );

    const renderElement = () => {
        return (
            <div
                ref={nodeRef}
                tabIndex={-1}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
            >
                <ExpandableElement
                    ref={selectorRef}
                    disabled={disabled}
                    expanded={showOptions}
                    listboxId={internalId}
                    popupRole="listbox"
                    readOnly={readOnly}
                >
                    {renderSelectorContent()}
                </ExpandableElement>
            </div>
        );
    };

    const renderDropdown = () => {
        return (
            <DropdownList
                listboxId={internalId}
                listItems={options}
                onSelectItem={handleListItemClick}
                onDismiss={handleListDismiss}
                valueExtractor={valueExtractor}
                listExtractor={listExtractor}
                enableSearch={enableSearch}
                hideNoResultsDisplay={hideNoResultsDisplay}
                noResultsDescription={noResultsDescription}
                searchPlaceholder={searchPlaceholder}
                searchFunction={searchFunction}
                onSearch={onSearch}
                selectedItems={selected ? [selected] : []}
                itemsLoadState={optionsLoadState}
                itemTruncationType={optionTruncationType}
                onRetry={onRetry}
                matchElementWidth
            />
        );
    };

    const renderSelector = () => {
        if (readOnly) {
            return selected ? (
                <SelectorReadOnly data-testid="selector-label">
                    <ValueLabel>{getDisplayValue()}</ValueLabel>
                </SelectorReadOnly>
            ) : null;
        } else {
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
                    alignment={position === "right" ? "right" : "left"}
                    fitAvailableHeight
                    customZIndex={dropdownZIndex}
                    rootNode={dropdownRootNode}
                    positionRef={positionRef}
                />
            );
        }
    };

    return (
        <DropdownListState>
            <FieldWrapper
                $focused={focused}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
                $position={position}
                ref={positionRef}
                className={className}
                data-testid={testId}
            >
                <FieldSelector data-testid={selectorTestId}>
                    {renderSelector()}
                </FieldSelector>
                <Divider $readOnly={readOnly} $position={position} />
                <FieldInput
                    ref={ref}
                    {...otherProps}
                    $position={position}
                    readOnly={readOnly}
                    disabled={disabled}
                    error={error}
                    onChange={handleInputChange}
                    data-testid="input"
                    styleType="no-border"
                />
            </FieldWrapper>
        </DropdownListState>
    );
};

export const InputGroupListAddon = React.forwardRef(Component);
