import { useCallback, useEffect, useRef, useState } from "react";
import { TimepickerDropdown } from "../shared/timepicker-dropdown/timepicker-dropdown";
import { TimeHelper } from "../util/time-helper";
import { InputSelectorElement, Wrapper } from "./timepicker.styles";
import { TimepickerProps } from "./types";

export const Timepicker = ({
    id,
    disabled = false,
    error,
    value,
    defaultValue,
    placeholder,
    format = "24hr",
    onChange,
    onBlur,
    onSelectionCancel,
    ...otherProps
}: TimepickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showSelector, setShowSelector] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDownEvent);
        document.addEventListener("keyup", handleKeyUpEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
            document.removeEventListener("keyup", handleKeyUpEvent);
        };
    }, [showSelector]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleInputFocus = useCallback(() => {
        if (!disabled && !showSelector) {
            setShowSelector(true);
        }
    }, [showSelector]);

    const handleMouseDownEvent = (event: MouseEvent) => {
        if (!disabled) {
            runOutsideFocusHandler(event);
        }
    };

    const handleKeyUpEvent = (event: KeyboardEvent) => {
        switch (event.code) {
            case "Tab":
                runOutsideFocusHandler(event);
                break;
            default:
                break;
        }
    };

    const handleSelectionDropdownCancel = () => {
        setShowSelector(false);
        onSelectionCancel && onSelectionCancel();
    };

    const handleChange = (value: string) => {
        setShowSelector(false);
        onChange && onChange(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const runOnBlurHandler = () => {
        setShowSelector(false);
        onBlur && onBlur();
    };

    const runOutsideFocusHandler = (event: MouseEvent | KeyboardEvent) => {
        if (nodeRef && !nodeRef.current.contains(event.target as any)) {
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
            readOnly={true}
            placeholder={placeholder || getPlaceholderValue()}
            value={TimeHelper.formatValue(value, format)}
            defaultValue={defaultValue}
            disabled={disabled}
            error={error}
            data-testid={
                id ? `${id}-timepicker-selector` : "timepicker-selector"
            }
        />
    );

    return (
        <Wrapper ref={nodeRef} id={id} {...otherProps}>
            {renderSelector()}
            <TimepickerDropdown
                id={id}
                show={showSelector}
                value={value || defaultValue}
                format={format}
                onCancel={handleSelectionDropdownCancel}
                onChange={handleChange}
            />
        </Wrapper>
    );
};
