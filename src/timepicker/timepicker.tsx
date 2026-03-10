import { useCallback, useRef, useState } from "react";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../shared/dropdown-wrapper";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";
import { TimepickerDropdown } from "../shared/timepicker-dropdown/timepicker-dropdown";
import { TimeHelper } from "../util/time-helper";
import { InputSelectorElement } from "./timepicker.styles";
import { TimepickerProps } from "./types";

export const Timepicker = ({
    id,
    disabled = false,
    readOnly = false,
    error,
    value,
    placeholder,
    format = "24hr",
    onChange,
    onFocus,
    onBlur,
    alignment,
    dropdownZIndex,
    dropdownRootNode,
    ariaLabelledBy,
    ...otherProps
}: TimepickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selectorRef = useRef<HTMLInputElement>(null);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getPlaceholderValue = useCallback(() => {
        switch (format) {
            case "12hr":
                return "HH:MMam";
            case "24hr":
            default:
                return "HH:MM";
        }
    }, [format]);

    const restoreFocusToSelector = () => {
        selectorRef.current?.focus({ preventScroll: true });
    };

    // =============================================================================
    // EVENT LISTENERS
    // =============================================================================
    const handleOpen = () => {
        if (disabled || readOnly) return;
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        onBlur?.();
    };

    const handleDismiss = () => {
        setIsOpen(false);
        restoreFocusToSelector();
    };

    const handleChange = (v: string) => {
        onChange?.(v);
        setIsOpen(false);
        restoreFocusToSelector();
    };

    const handleFocus = () => {
        onFocus?.();
    };

    const handleSelectorBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (isOpen) return;

        const next = e.relatedTarget as Node | null;
        if (next && wrapperRef.current?.contains(next)) return;

        onBlur?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (disabled || readOnly) {
            return;
        }

        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
            e.preventDefault();
            handleOpen();
        }
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    const renderElement = () => (
        <InputWrapper
            ref={wrapperRef}
            role="group"
            $readOnly={readOnly}
            $disabled={disabled}
            $focused={isOpen}
            $error={error}
            {...otherProps}
        >
            <InputSelectorElement
                ref={selectorRef}
                readOnly
                placeholder={placeholder || getPlaceholderValue()}
                value={TimeHelper.formatDisplayValue(value, format)}
                role="combobox"
                aria-invalid={error || undefined}
                aria-disabled={disabled || undefined}
                aria-readonly={readOnly || undefined}
                aria-labelledby={ariaLabelledBy}
                aria-expanded={!disabled && !readOnly ? isOpen : false}
                data-testid={
                    id ? `${id}-timepicker-selector` : "timepicker-selector"
                }
                onFocus={handleFocus}
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                onBlur={handleSelectorBlur}
            />
        </InputWrapper>
    );

    const renderDropdown = ({
        styles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => (
        <div
            ref={setFloatingRef}
            style={styles}
            role="dialog"
            aria-modal="false"
            {...getFloatingProps()}
        >
            <TimepickerDropdown
                id={id}
                show={isOpen}
                value={value}
                format={format}
                onCancel={handleDismiss}
                onChange={handleChange}
            />
        </div>
    );

    return (
        <ElementWithDropdown
            enabled={!readOnly && !disabled}
            isOpen={isOpen}
            renderElement={renderElement}
            renderDropdown={renderDropdown}
            onOpen={handleOpen}
            onClose={handleClose}
            onDismiss={handleDismiss}
            offset={8}
            alignment={alignment}
            customZIndex={dropdownZIndex}
            rootNode={dropdownRootNode}
        />
    );
};
