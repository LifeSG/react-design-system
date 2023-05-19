import { useEffect, useRef, useState } from "react";
import { TimepickerDropdown } from "../shared/timepicker-dropdown/timepicker-dropdown";
import { TimeHelper } from "../util/time-helper";
import { useEventListener } from "../util/use-event-listener";
import {
    ArrowRight,
    Indicator,
    SelectorInput,
    TimeContainer,
    Wrapper,
} from "./time-range-picker.styles";
import { TimeRangePickerProps, TimeRangePickerValue } from "./types";

export const TimeRangePicker = ({
    id,
    disabled = false,
    error,
    value,
    format = "24hr",
    readOnly,
    onChange,
    onBlur,
    ...otherProps
}: TimeRangePickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showStartTimeSelector, setShowStartTimeSelector] =
        useState<boolean>(false);
    const [showEndTimeSelector, setShowEndTimeSelector] =
        useState<boolean>(false);
    const [startTimeVal, setStartTimeVal] = useState<string>("");
    const [endTimeVal, setEndTimeVal] = useState<string>("");

    const nodeRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (value) {
            setStartTimeVal(value.start);
            setEndTimeVal(value.end);
        }
    }, []);

    useEventListener("mousedown", handleMouseDownEvent, document);
    useEventListener("keyup", handleKeyUpEvent, document);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleStartTimeFocus = () => {
        if (!disabled && !readOnly && !showStartTimeSelector) {
            setShowEndTimeSelector(false);
            setShowStartTimeSelector(true);
        }
    };

    const handleEndTimeFocus = () => {
        if (!disabled && !readOnly && !showEndTimeSelector) {
            setShowStartTimeSelector(false);
            setShowEndTimeSelector(true);
        }
    };

    function handleMouseDownEvent(event: MouseEvent) {
        if (!disabled) {
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

    const handleStartTime = (value: string) => {
        setShowStartTimeSelector(false);
        setShowEndTimeSelector(true);
        setStartTimeVal(value);

        const timeValue: TimeRangePickerValue = {
            start: value,
            end: endTimeVal,
        };

        onChange && onChange(timeValue);
    };

    const handleEndTime = (value: string) => {
        setShowEndTimeSelector(false);
        setEndTimeVal(value);

        if (startTimeVal == "") {
            setShowStartTimeSelector(true);
        }

        const timeValue: TimeRangePickerValue = {
            start: startTimeVal,
            end: value,
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
            if (showEndTimeSelector || showStartTimeSelector) {
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
                <SelectorInput
                    onFocus={handleStartTimeFocus}
                    readOnly
                    placeholder="From"
                    value={TimeHelper.formatValue(startTimeVal, format)}
                    disabled={disabled}
                    data-testid={
                        otherProps["data-testid"]
                            ? `${otherProps["data-testid"]}-timepicker-selector`
                            : "timepicker-selector"
                    }
                />
                <TimepickerDropdown
                    id={id}
                    show={showStartTimeSelector}
                    value={startTimeVal}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleStartTime}
                />
                <ArrowRight />
                <SelectorInput
                    onFocus={handleEndTimeFocus}
                    readOnly
                    placeholder="To"
                    value={TimeHelper.formatValue(endTimeVal, format)}
                    disabled={disabled}
                    data-testid={
                        otherProps["data-testid"]
                            ? `${otherProps["data-testid"]}-timepicker-selector`
                            : "timepicker-selector"
                    }
                />
                <TimepickerDropdown
                    id={id}
                    show={showEndTimeSelector}
                    value={endTimeVal}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleEndTime}
                />
                <Indicator
                    $position={
                        showStartTimeSelector
                            ? "start"
                            : showEndTimeSelector
                            ? "end"
                            : "none"
                    }
                    $error={error}
                />
            </TimeContainer>
        </Wrapper>
    );
};
