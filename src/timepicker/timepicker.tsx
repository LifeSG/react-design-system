import { useCallback, useRef, useState } from "react";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";
import { TimepickerDropdown } from "../shared/timepicker-dropdown/timepicker-dropdown";
import { TimeHelper } from "../util/time-helper";
import { useEventListener } from "../util/use-event-listener";
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
    ...otherProps
}: TimepickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showSelector, setShowSelector] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEventListener("mousedown", handleMouseDownEvent, "document");
    useEventListener("keyup", handleKeyUpEvent, "document");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleInputFocus = () => {
        if (!disabled && !readOnly && !showSelector) {
            setShowSelector(true);
            onFocus && onFocus();
        }
    };

    function handleMouseDownEvent(event: MouseEvent) {
        if (!disabled && !readOnly) {
            runOutsideFocusHandler(event);
        }
    }

    function handleKeyUpEvent(event: KeyboardEvent) {
        switch (event.code) {
            case "Tab":
                runOutsideFocusHandler(event);
                break;
            default:
                break;
        }
    }

    const handleSelectionDropdownCancel = () => {
        runOnBlurHandler();
    };

    const handleChange = (value: string) => {
        onChange && onChange(value);
        runOnBlurHandler();
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const runOnBlurHandler = () => {
        setShowSelector(false);
        onBlur && onBlur();
    };

    const runOutsideFocusHandler = (event: MouseEvent | KeyboardEvent) => {
        if (nodeRef.current && !nodeRef.current.contains(event.target as any)) {
            showSelector && runOnBlurHandler();
        }
    };

    const getPlaceholderValue = useCallback((): string => {
        switch (format) {
            case "12hr":
                return "HH:MMam";
            case "24hr":
            default:
                return "HH:MM";
        }
    }, [format, placeholder]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSelector = () => (
        <InputSelectorElement
            onFocus={handleInputFocus}
            focused={showSelector}
            readOnly
            placeholder={placeholder || getPlaceholderValue()}
            value={TimeHelper.formatDisplayValue(value, format)}
            disabled={disabled}
            data-testid={
                id ? `${id}-timepicker-selector` : "timepicker-selector"
            }
        />
    );

    return (
        <InputWrapper
            ref={nodeRef}
            id={id}
            $readOnly={readOnly}
            $disabled={disabled}
            $error={error}
            {...otherProps}
        >
            {renderSelector()}
            <TimepickerDropdown
                id={id}
                show={showSelector}
                value={value}
                format={format}
                onCancel={handleSelectionDropdownCancel}
                onChange={handleChange}
            />
        </InputWrapper>
    );
};
