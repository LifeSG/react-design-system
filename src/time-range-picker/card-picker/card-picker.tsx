import { useEffect, useRef, useState } from "react";
import { useEventListener } from "../../util/use-event-listener";
import { RangeInputInnerContainer } from "../../shared/range-input-inner-container";
import { SelectorInput, TimeContainer, Wrapper } from "../common.styles";
import { TimeHelper } from "../../util/time-helper";
import { TimeRangePickerProps, TimeRangePickerValue } from "../types";
import { TimepickerDropdown } from "../../shared/timepicker-dropdown/timepicker-dropdown";

export const CardPicker = ({
    id,
    disabled = false,
    error,
    value,
    format = "24hr",
    readOnly,
    onChange,
    onFocus,
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

    useEventListener("mousedown", handleMouseDownEvent, "document");
    useEventListener("keyup", handleKeyUpEvent, "document");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleStartTimeFocus = () => {
        if (!disabled && !readOnly && !showStartTimeSelector) {
            setShowEndTimeSelector(false);
            setShowStartTimeSelector(true);
            runOnFocusHandler();
        }
    };

    const handleEndTimeFocus = () => {
        if (!disabled && !readOnly && !showEndTimeSelector) {
            setShowStartTimeSelector(false);
            setShowEndTimeSelector(true);
            runOnFocusHandler();
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

        const timeValue: TimeRangePickerValue = {
            start: startTimeVal,
            end: value,
        };

        onChange && onChange(timeValue);

        if (startTimeVal == "") {
            setShowStartTimeSelector(true);
        } else {
            onBlur && onBlur();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const runOnFocusHandler = () => {
        if (!showStartTimeSelector && !showEndTimeSelector) {
            onFocus && onFocus();
        }
    };

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
                <RangeInputInnerContainer
                    error={error}
                    currentActive={
                        showStartTimeSelector
                            ? "start"
                            : showEndTimeSelector
                            ? "end"
                            : "none"
                    }
                >
                    {/* From */}
                    <SelectorInput
                        onFocus={handleStartTimeFocus}
                        readOnly
                        placeholder="From"
                        value={TimeHelper.formatDisplayValue(
                            startTimeVal,
                            format
                        )}
                        disabled={disabled}
                        data-testid={
                            otherProps["data-testid"]
                                ? `${otherProps["data-testid"]}-timepicker-selector`
                                : "timepicker-selector"
                        }
                    />
                    {/* To */}
                    <SelectorInput
                        onFocus={handleEndTimeFocus}
                        readOnly
                        placeholder="To"
                        value={TimeHelper.formatDisplayValue(
                            endTimeVal,
                            format
                        )}
                        disabled={disabled}
                        data-testid={
                            otherProps["data-testid"]
                                ? `${otherProps["data-testid"]}-timepicker-selector`
                                : "timepicker-selector"
                        }
                    />
                </RangeInputInnerContainer>
                <TimepickerDropdown
                    id={id}
                    show={showStartTimeSelector}
                    value={startTimeVal}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleStartTime}
                />
                <TimepickerDropdown
                    id={id}
                    show={showEndTimeSelector}
                    value={endTimeVal}
                    format={format}
                    onCancel={handleSelectionDropdownCancel}
                    onChange={handleEndTime}
                />
            </TimeContainer>
        </Wrapper>
    );
};
