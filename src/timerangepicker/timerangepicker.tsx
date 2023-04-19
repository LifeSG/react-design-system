import { useCallback, useEffect, useRef, useState } from "react";
import { TimeRangePickerHelper } from "./helper";
import { TimeRangePickerDropdown } from "./timerangepicker-dropdown";
import {
    ArrowRangeIcon,
    ArrowRight,
    BottomHighlightEndTime,
    BottomHighlightStartTime,
    InputSelectorElement,
    InputSelectorRightElement,
    TimeContainer,
    Wrapper,
} from "./timerangepicker.styles";
import { TimeRangePickerProps, Value } from "./types";

export const TimeRangePicker = ({
    id,
    disabled = false,
    error,
    value,
    defaultValue,
    placeholder,
    format = "24hr",
    readOnly,
    onChange,
    onBlur,
    onSelectionCancel,
    ...otherProps
}: TimeRangePickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showStartTimeSelector, setShowStartTimeSelector] =
        useState<boolean>(false);
    const [showEndTimeSelector, setShowEndTimeSelector] =
        useState<boolean>(false);
    const [startTimeVal, setStartTimeVal] = useState("");
    const [endTimeVal, setEndTimeVal] = useState("");

    const nodeRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        if (value) {
            setStartTimeVal(value.startValue);
            setEndTimeVal(value.endValue);
        }
    }, []);
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDownEvent);
        document.addEventListener("keyup", handleKeyUpEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
            document.removeEventListener("keyup", handleKeyUpEvent);
        };
    }, [showEndTimeSelector]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleStartTimeFocus = useCallback(() => {
        if (!disabled && !readOnly && !showStartTimeSelector) {
            setShowEndTimeSelector(false);
            setShowStartTimeSelector(true);
        }
    }, [showStartTimeSelector]);

    const handleEndTimeFocus = useCallback(() => {
        if (!disabled && !readOnly && !showEndTimeSelector) {
            setShowStartTimeSelector(false);
            setShowEndTimeSelector(true);
        }
    }, [showEndTimeSelector]);

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
        setShowEndTimeSelector(false);
        setShowStartTimeSelector(false);
        onSelectionCancel && onSelectionCancel();
    };

    const handleStartTime = (value: string) => {
        setShowStartTimeSelector(false);
        if (endTimeVal == "") {
            setShowEndTimeSelector(true);
            setStartTimeVal(value);
        } else if (value > endTimeVal) {
            setStartTimeVal(endTimeVal);
            setEndTimeVal(value);
        }
        const timeValue: Value = {
            startValue: startTimeVal,
            endValue: endTimeVal,
        };

        onChange && onChange(timeValue);
    };

    const handleEndTime = (value: string) => {
        setEndTimeVal(value);
        if (startTimeVal == "") {
            setShowStartTimeSelector(true);
        }
        if (startTimeVal > value) {
            setEndTimeVal(startTimeVal);
            handleStartTime(value);
        }
        setShowEndTimeSelector(false);

        const timeValue: Value = {
            startValue: startTimeVal,
            endValue: endTimeVal,
        };

        onChange && onChange(timeValue);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const runOnBlurHandler = () => {
        setShowStartTimeSelector(false);
        setShowEndTimeSelector(false);
        onBlur && onBlur();
    };

    const runOutsideFocusHandler = (event: MouseEvent | KeyboardEvent) => {
        if (nodeRef && !nodeRef.current.contains(event.target as any)) {
            if (!showEndTimeSelector) {
                runOnBlurHandler();
            }
            if (!showStartTimeSelector) {
                runOnBlurHandler();
            }
        }
    };

    return (
        <Wrapper ref={nodeRef} id={id} {...otherProps}>
            <TimeContainer
                $disabled={disabled}
                $error={error}
                $readOnly={readOnly}
            >
                <InputSelectorElement
                    onFocus={handleStartTimeFocus}
                    $focused={showStartTimeSelector}
                    readOnly={readOnly}
                    placeholder={"From"}
                    value={TimeRangePickerHelper.formatValue(
                        startTimeVal,
                        format
                    )}
                    defaultValue={defaultValue}
                    $disabled={disabled}
                    $error={error}
                    data-testid={
                        id ? `${id}-timepicker-selector` : "timepicker-selector"
                    }
                />
                {showStartTimeSelector && <BottomHighlightStartTime />}

                <TimeRangePickerDropdown
                    id={id}
                    show={showStartTimeSelector}
                    value={startTimeVal || defaultValue}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleStartTime}
                />

                <ArrowRangeIcon>
                    <ArrowRight />
                </ArrowRangeIcon>

                {showEndTimeSelector && <BottomHighlightEndTime />}

                <InputSelectorRightElement
                    onFocus={handleEndTimeFocus}
                    $focused={showEndTimeSelector}
                    readOnly={readOnly}
                    placeholder={"To"}
                    value={TimeRangePickerHelper.formatValue(
                        endTimeVal,
                        format
                    )}
                    defaultValue={defaultValue}
                    $disabled={disabled}
                    $error={error}
                    data-testid={
                        id ? `${id}-timepicker-selector` : "timepicker-selector"
                    }
                />
                <TimeRangePickerDropdown
                    id={id}
                    show={showEndTimeSelector}
                    value={endTimeVal || defaultValue}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleEndTime}
                />
            </TimeContainer>
        </Wrapper>
    );
};
