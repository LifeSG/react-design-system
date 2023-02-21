import { useCallback, useEffect, useRef, useState } from "react";
import { TimerangepickerHelper } from "./helper";
import { TimerangepickerDropdown } from "./timerangepicker-dropdown";
import {
    InputSelectorElement,
    RangeArrow,
    TimeContainer,
    Wrapper,
} from "./timerangepicker.styles";
import { TimerangepickerProps } from "./types";
import { Icon } from "../icon";

export const Timerangepicker = ({
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
}: TimerangepickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showStartSelector, setShowStartSelector] = useState<boolean>(false);
    const [showSelector, setShowSelector] = useState<boolean>(false);
    const [startTimeVal, setStartTimeVal] = useState("");
    const [endTimeVal, setEndTimeVal] = useState("");

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
    const handleStartTimeFocus = useCallback(() => {
        if (!disabled && !showStartSelector) {
            setShowStartSelector(true);
        }
    }, [showStartSelector]);

    const handleEndTimeFocus = useCallback(() => {
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
        // setStartTimeVal(false);
        // setEndTimeVal(false);
        onChange && onChange(value);
    };

    const handleStartTime = (value: string) => {
        setShowStartSelector(false);
        setShowSelector(true);
        setStartTimeVal(value);
        onChange && onChange(value);
    };

    const handleEndTime = (value: string) => {
        setEndTimeVal(value);
        setShowSelector(false);
        onChange && onChange(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const runOnBlurHandler = () => {
        setShowStartSelector(false);
        setShowSelector(false);
        onBlur && onBlur();
    };

    const runOutsideFocusHandler = (event: MouseEvent | KeyboardEvent) => {
        if (nodeRef && !nodeRef.current.contains(event.target as any)) {
            startTimeVal && endTimeVal && runOnBlurHandler();
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

    return (
        <Wrapper ref={nodeRef} id={id} {...otherProps}>
            <TimeContainer>
                <InputSelectorElement
                    onFocus={handleStartTimeFocus}
                    focused={showStartSelector}
                    readOnly={true}
                    placeholder={"From"}
                    value={TimerangepickerHelper.formatValue(
                        startTimeVal,
                        format
                    )}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    error={error}
                    data-testid={
                        id ? `${id}-timepicker-selector` : "timepicker-selector"
                    }
                />
                <TimerangepickerDropdown
                    id={id}
                    show={showStartSelector}
                    value={startTimeVal || defaultValue}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleStartTime}
                />

                <Icon type="arrow-right" />

                <InputSelectorElement
                    onFocus={handleEndTimeFocus}
                    focused={showSelector}
                    readOnly={true}
                    placeholder={"To"}
                    value={TimerangepickerHelper.formatValue(
                        endTimeVal,
                        format
                    )}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    error={error}
                    data-testid={
                        id ? `${id}-timepicker-selector` : "timepicker-selector"
                    }
                />
                <TimerangepickerDropdown
                    id={id}
                    show={showSelector}
                    value={endTimeVal || defaultValue}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleEndTime}
                />
            </TimeContainer>
        </Wrapper>
    );
};
