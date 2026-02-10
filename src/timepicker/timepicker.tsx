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
    ...otherProps
}: TimepickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    const open = () => {
        if (disabled || readOnly) return;
        setIsOpen(true);
        onFocus?.();
    };

    const close = () => {
        setIsOpen(false);
        onBlur?.();
    };

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

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderElement = () => (
        <InputWrapper
            ref={nodeRef}
            id={id}
            $readOnly={readOnly}
            $disabled={disabled}
            $focused={isOpen}
            $error={error}
            {...otherProps}
        >
            <InputSelectorElement
                onFocus={open}
                readOnly
                placeholder={placeholder || getPlaceholderValue()}
                value={TimeHelper.formatDisplayValue(value, format)}
                disabled={disabled}
                data-testid={
                    id ? `${id}-timepicker-selector` : "timepicker-selector"
                }
            />
        </InputWrapper>
    );

    const renderDropdown = ({
        styles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => {
        if (!isOpen) return null;

        return (
            <div ref={setFloatingRef} style={styles} {...getFloatingProps()}>
                <TimepickerDropdown
                    id={id}
                    show={isOpen}
                    value={value}
                    format={format}
                    onCancel={close}
                    onChange={(v) => {
                        onChange?.(v);
                        close();
                    }}
                />
            </div>
        );
    };

    return (
        <ElementWithDropdown
            enabled={!readOnly && !disabled}
            isOpen={isOpen}
            renderElement={renderElement}
            renderDropdown={renderDropdown}
            onOpen={open}
            onClose={() => close()}
            onDismiss={() => close()}
            clickToToggle={false}
            offset={8}
            alignment={alignment}
            fitAvailableHeight
            customZIndex={dropdownZIndex}
            rootNode={dropdownRootNode}
        />
    );
};
