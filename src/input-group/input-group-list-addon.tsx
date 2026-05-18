import type { OpenChangeReason } from "@floating-ui/react";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { Input } from "../input";
import { concatIds, VisuallyHidden } from "../shared/accessibility";
import {
    DropdownList,
    DropdownListState,
    ExpandableElement,
} from "../shared/dropdown-list";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import {
    LabelContainer,
    PlaceholderLabel,
    ValueLabel,
} from "../shared/dropdown-wrapper/dropdown-wrapper";
import { InputBox } from "../shared/input-wrapper";
import { useId } from "../util";
import * as styles from "./input-group-list-addon.styles";
import type { InputGroupProps, ListAddon } from "./types";

export const Component = <T, V>(
    {
        addon,
        error,
        onChange,
        readOnly,
        disabled,
        className,
        onBlur,
        noBorder,
        "data-testid": testId,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        "aria-invalid": ariaInvalid,
        "aria-label": textboxAriaLabel,
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
        "aria-label": comboboxAriaLabel,
    } = addon!.attributes as ListAddon<T, V>;

    const { position = "left" } = addon!;

    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState<T | undefined>(selectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);
    const internalId = useId();
    const listboxId = `${internalId}-listbox`;
    const instructionId = `${internalId}-instruction`;
    const comboboxLabelId = `${internalId}-combobox-label`;
    const textboxLabelId = `${internalId}-textbox-label`;

    const nodeRef = useRef<HTMLDivElement>(null);
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
        if (selected) {
            return <ValueLabel>{getDisplayValue()}</ValueLabel>;
        }

        return <PlaceholderLabel>{placeholder}</PlaceholderLabel>;
    };

    const renderSelectorContent = () => (
        <LabelContainer disabled={disabled}>{renderLabel()}</LabelContainer>
    );

    const renderElement = () => {
        return (
            <div>
                <ExpandableElement
                    ref={selectorRef}
                    disabled={disabled}
                    expanded={showOptions}
                    listboxId={listboxId}
                    popupRole="listbox"
                    readOnly={readOnly}
                    aria-labelledby={concatIds(ariaLabelledBy, comboboxLabelId)}
                    aria-describedby={concatIds(ariaDescribedBy, instructionId)}
                    aria-invalid={ariaInvalid}
                    data-position={position}
                    className={clsx(
                        noBorder && styles.expandableElementNoBorder
                    )}
                >
                    {renderSelectorContent()}
                </ExpandableElement>
                <VisuallyHidden id={instructionId}>
                    Press space to open options
                </VisuallyHidden>
            </div>
        );
    };

    const renderDropdown = () => {
        return (
            <DropdownList
                listboxId={listboxId}
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
                <div
                    data-testid="selector-label"
                    tabIndex={0}
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-readonly
                    aria-expanded={false}
                    aria-labelledby={ariaLabelledBy}
                    aria-describedby={ariaDescribedBy}
                    aria-invalid={ariaInvalid}
                    className={styles.selectorReadOnly}
                >
                    <ValueLabel>{getDisplayValue()}</ValueLabel>
                </div>
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
                    positionRef={nodeRef}
                />
            );
        }
    };

    return (
        <DropdownListState>
            <InputBox
                focused={focused}
                disabled={disabled}
                readOnly={readOnly}
                error={error}
                ref={nodeRef}
                noBorder={noBorder}
                data-testid={testId}
                tabIndex={-1}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
                data-position={position}
                className={clsx(styles.fieldWrapper, className)}
            >
                <VisuallyHidden aria-hidden id={comboboxLabelId}>
                    {comboboxAriaLabel}
                </VisuallyHidden>
                <div
                    data-testid={selectorTestId}
                    className={styles.fieldSelector}
                >
                    {renderSelector()}
                </div>
                <div
                    data-position={position}
                    className={clsx(
                        styles.divider,
                        readOnly && styles.dividerReadOnly
                    )}
                />
                <VisuallyHidden aria-hidden id={textboxLabelId}>
                    {textboxAriaLabel}
                </VisuallyHidden>
                <div
                    data-position={position}
                    className={clsx(
                        styles.fieldInput,
                        noBorder && styles.fieldInputNoBorder,
                        readOnly && styles.fieldInputReadOnly
                    )}
                >
                    <Input
                        ref={ref}
                        {...otherProps}
                        readOnly={readOnly}
                        disabled={disabled}
                        error={error}
                        onChange={handleInputChange}
                        data-testid="input"
                        styleType="no-border"
                        aria-labelledby={concatIds(
                            ariaLabelledBy,
                            textboxLabelId
                        )}
                        aria-describedby={ariaDescribedBy}
                        aria-invalid={ariaInvalid}
                    />
                </div>
            </InputBox>
        </DropdownListState>
    );
};

export const InputGroupListAddon = React.forwardRef(Component);
