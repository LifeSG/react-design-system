import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ClearIcon } from "../input/input.style";
import {
    ClearIconContainer,
    SelectorInput,
    TimeContainer,
    Wrapper,
} from "./time-range-picker.styles";
import { DropdownList } from "../shared/dropdown-list-v2/dropdown-list";
import { DropdownListState } from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { ErrorMessage } from "../form/form-label.style";
import { RangeInputInnerContainer } from "../shared/range-input-inner-container";
import { TimeHelper } from "../util/time-helper";
import {
    TimeRangePickerProps,
    TimeRangePickerValue,
} from "../time-range-picker/types";

type TimeRangeInputType = "start" | "end";

export const TimeRangePickerAlt = ({
    id,
    disabled = false,
    error,
    value,
    format = "12hr",
    readOnly,
    onChange,
    onFocus,
    onBlur,
    alignment = "left",
    dropdownZIndex,
    startLimit,
    endLimit,
    interval = 15,
    ...otherProps
}: TimeRangePickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [activeTimeSelector, setActiveTimeSelector] =
        useState<TimeRangeInputType>(null);
    const [startTimeVal, setStartTimeVal] = useState<string>("");
    const [endTimeVal, setEndTimeVal] = useState<string>("");
    const [initialStartTimeVal, setInitialStartTimeVal] = useState<string>("");
    const [initialEndTimeVal, setInitialEndTimeVal] = useState<string>("");
    const [validationError, setValidationError] = useState<string>("");

    const nodeRef = useRef<HTMLDivElement>();
    const startInputRef = useRef<HTMLInputElement>();
    const endInputRef = useRef<HTMLInputElement>();

    const startOptions = useMemo(
        () =>
            TimeHelper.generateTimings(interval, format, startLimit, endLimit),
        [interval, format, startLimit, endLimit]
    );
    const endOptions = useMemo(
        () =>
            TimeHelper.generateTimings(
                interval,
                format,
                initialStartTimeVal || startLimit,
                endLimit
            ),
        [initialStartTimeVal, interval, format, startLimit, endLimit]
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    const parseInput = useCallback(
        (input: string): string | undefined => {
            return TimeHelper.parseInput(input, format);
        },
        [format]
    );

    useEffect(() => {
        if (value) {
            const start = parseInput(value.start);
            const end = parseInput(value.end);

            setStartTimeVal(start);
            setEndTimeVal(end);
            setInitialStartTimeVal(start);
            setInitialEndTimeVal(end);
        }
    }, [value, parseInput]);

    // Validation
    useEffect(() => {
        const start = parseInput(startTimeVal);
        const end = parseInput(endTimeVal);

        if (start === undefined) {
            setValidationError("Invalid start time");
        } else if (end === undefined) {
            setValidationError("Invalid end time");
        } else if (
            start !== "" &&
            end !== "" &&
            TimeHelper.to24Hour(end) < TimeHelper.to24Hour(start)
        ) {
            setValidationError("End time must be after start time");
        } else {
            setValidationError("");
        }
    }, [startTimeVal, endTimeVal, parseInput]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleInputFocus = (selector: TimeRangeInputType) => {
        if (!disabled && !readOnly && !activeTimeSelector) {
            setActiveTimeSelector(selector);
            onFocus && onFocus();
        }
    };

    const handleInputClick = (selector: TimeRangeInputType) => {
        if (!disabled && !readOnly) {
            setActiveTimeSelector(selector);
            (selector === "start"
                ? startInputRef
                : endInputRef
            ).current.select();
        }
    };

    function handleKeyDownEvent(event: React.KeyboardEvent<HTMLInputElement>) {
        switch (event.code) {
            case "Enter":
                if (activeTimeSelector === "start") {
                    handleStartTime(parseInput(startTimeVal));
                } else if (activeTimeSelector === "end") {
                    handleEndTime(parseInput(endTimeVal));
                    endInputRef.current.blur();
                }
                break;
            default:
                break;
        }
    }

    const handleStartTime = (input: string, goToNextInput = true) => {
        const value = input == undefined ? initialStartTimeVal : input;

        setStartTimeVal(value);

        // If start time is after end time, clear end time
        const isInvalidRange = value > endTimeVal;
        if (isInvalidRange && goToNextInput) setEndTimeVal("");

        const timeValue: TimeRangePickerValue = {
            start: value,
            end: isInvalidRange ? "" : endTimeVal,
        };

        if (value !== initialStartTimeVal) onChange && onChange(timeValue);

        if (goToNextInput) {
            setActiveTimeSelector("end");
            endInputRef.current.select();
        } else {
            setActiveTimeSelector(null);
            onBlur && onBlur();
        }

        setInitialStartTimeVal(value);
    };

    const handleEndTime = (input: string) => {
        const value = input == undefined ? initialEndTimeVal : input;

        setEndTimeVal(value);

        const timeValue: TimeRangePickerValue = {
            start: startTimeVal,
            end: value,
        };

        if (value !== initialEndTimeVal) onChange && onChange(timeValue);

        setActiveTimeSelector(null);
        onBlur && onBlur();

        setInitialEndTimeVal(value);
    };

    const handleClear = (event: React.MouseEvent) => {
        event.stopPropagation();
        setStartTimeVal("");
        setEndTimeVal("");
        setInitialStartTimeVal("");
        setInitialEndTimeVal("");

        const timeValue: TimeRangePickerValue = {
            start: "",
            end: "",
        };

        onChange && onChange(timeValue);
        setActiveTimeSelector(null);
    };

    const handleOnBlur = () => {
        if (activeTimeSelector === "start") {
            handleStartTime(parseInput(startTimeVal), false);
        } else if (activeTimeSelector === "end") {
            handleEndTime(parseInput(endTimeVal));
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderClearButton = () => {
        if (
            !readOnly &&
            !disabled &&
            (startTimeVal?.length > 0 || endTimeVal?.length > 0)
        ) {
            return (
                <ClearIconContainer
                    onClick={handleClear}
                    type="button"
                    aria-label="Clear"
                >
                    <ClearIcon aria-hidden />
                </ClearIconContainer>
            );
        }
    };

    const renderDropdown = () => {
        if (activeTimeSelector === "start") {
            return (
                <DropdownList
                    listItems={startOptions}
                    onSelectItem={handleStartTime}
                    selectedItems={[startTimeVal]}
                    disableItemFocus={true}
                    topScrollItem={parseInput(startTimeVal)}
                />
            );
        } else if (activeTimeSelector === "end") {
            return (
                <DropdownList
                    listItems={endOptions}
                    onSelectItem={handleEndTime}
                    selectedItems={[endTimeVal]}
                    disableItemFocus={true}
                    topScrollItem={parseInput(endTimeVal)}
                />
            );
        }
    };

    const renderElement = () => (
        <TimeContainer
            ref={nodeRef}
            $disabled={disabled}
            $error={error || !!validationError}
            $readOnly={readOnly}
        >
            <RangeInputInnerContainer
                error={error || !!validationError}
                currentActive={
                    activeTimeSelector === null ? "none" : activeTimeSelector
                }
            >
                {/* From */}
                <SelectorInput
                    ref={startInputRef}
                    onFocus={() => handleInputFocus("start")}
                    placeholder={
                        activeTimeSelector === "start" ? "hh:mm" : "From"
                    }
                    onChange={(e) => setStartTimeVal(e.target.value)}
                    value={startTimeVal}
                    disabled={disabled}
                    readOnly={readOnly}
                    data-testid={
                        otherProps["data-testid"]
                            ? `${otherProps["data-testid"]}-timepicker-selector`
                            : "timepicker-selector"
                    }
                    onClick={() => handleInputClick("start")}
                    onKeyDown={handleKeyDownEvent}
                    autoComplete="off"
                />
                {/* To */}
                <SelectorInput
                    ref={endInputRef}
                    onFocus={() => handleInputFocus("end")}
                    placeholder={activeTimeSelector === "end" ? "hh:mm" : "To"}
                    onChange={(e) => setEndTimeVal(e.target.value)}
                    value={endTimeVal}
                    disabled={disabled}
                    readOnly={readOnly}
                    data-testid={
                        otherProps["data-testid"]
                            ? `${otherProps["data-testid"]}-timepicker-selector`
                            : "timepicker-selector"
                    }
                    onClick={() => handleInputClick("end")}
                    onKeyDown={handleKeyDownEvent}
                    autoComplete="off"
                />
            </RangeInputInnerContainer>
            {renderClearButton()}
        </TimeContainer>
    );

    const renderError = () =>
        // Only display internal error message if user does not provide one
        !error &&
        validationError && (
            <ErrorMessage
                id={id ? `${id}-error-message` : "error-message"}
                weight={"semibold"}
                tabIndex={0}
                data-testid={id ? `${id}-error-message` : "error-message"}
            >
                {validationError}
            </ErrorMessage>
        );

    return (
        <Wrapper ref={nodeRef} id={id} {...otherProps}>
            <DropdownListState>
                <ElementWithDropdown
                    enabled={!readOnly && !disabled}
                    isOpen={!!activeTimeSelector}
                    renderElement={renderElement}
                    renderDropdown={renderDropdown}
                    onClose={handleOnBlur}
                    offset={8}
                    alignment={alignment}
                    fitAvailableHeight
                    zIndex={dropdownZIndex}
                />
            </DropdownListState>
            {renderError()}
        </Wrapper>
    );
};
