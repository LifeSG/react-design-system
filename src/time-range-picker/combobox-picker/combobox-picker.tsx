import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ClearIcon } from "../../input/input.style";
import { ClearIconContainer } from "../../input-range-select/input-range-select.style";
import { DropdownList } from "../../shared/dropdown-list-v2/dropdown-list";
import { DropdownListState } from "../../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../../shared/dropdown-wrapper";
import { ErrorMessage } from "../../form/form-label.style";
import { RangeInputInnerContainer } from "../../shared/range-input-inner-container";
import { SelectorInput, TimeContainer, Wrapper } from "../common.styles";
import { TimeHelper } from "../../util/time-helper";
import { TimeRangePickerProps, TimeRangePickerValue } from "../types";

type TimeRangeInputType = "start" | "end";
interface TimeChangeOptions {
    goToNextInput?: boolean | undefined;
    skipRangeCheck?: boolean | undefined;
    triggerOnBlur?: boolean | undefined;
}

export const ComboboxPicker = ({
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
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [validationError, setValidationError] = useState<string>("");

    const [startTimeVal, setStartTimeVal] = useState<string>("");
    const [endTimeVal, setEndTimeVal] = useState<string>("");
    const [initialStartTimeVal, setInitialStartTimeVal] = useState<string>("");
    const [initialEndTimeVal, setInitialEndTimeVal] = useState<string>("");

    const nodeRef = useRef<HTMLDivElement>();
    const startInputRef = useRef<HTMLInputElement>();
    const endInputRef = useRef<HTMLInputElement>();

    const startOptions = useMemo(
        () =>
            TimeHelper.generateTimings(interval, format, startLimit, endLimit),
        [interval, format, startLimit, endLimit]
    );
    const endOptions = useMemo(() => {
        if (initialStartTimeVal === "") return startOptions;

        const flooredStartVal = TimeHelper.findClosestFlooredTime(
            initialStartTimeVal,
            startOptions
        );
        return startOptions.slice(startOptions.indexOf(flooredStartVal));
    }, [startOptions, initialStartTimeVal]);

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

    // Validation for keyboard input
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
            // Re-open dropdown if error was corrected
            if (
                document.activeElement === startInputRef.current ||
                document.activeElement === endInputRef.current
            ) {
                setDropdownOpen(true);
            }
            return;
        }

        // Hide dropdown so error message is visible
        setDropdownOpen(false);
    }, [startTimeVal, endTimeVal, parseInput]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleInputFocus = (selector: TimeRangeInputType) => {
        if (disabled || readOnly) return;

        // If input is already focused (start or end), no need to onFocus again
        if (!activeTimeSelector) {
            setActiveTimeSelector(selector);
            setDropdownOpen(true);
            onFocus && onFocus();
        }
    };

    const handleInputClick = (selector: TimeRangeInputType) => {
        if (disabled || readOnly) return;

        setActiveTimeSelector(selector);
        setDropdownOpen(true);
        (selector === "start" ? startInputRef : endInputRef).current.select();
    };

    function handleKeyDownEvent(event: React.KeyboardEvent<HTMLInputElement>) {
        switch (event.code) {
            case "Enter":
            case "Tab":
                event.preventDefault();
                if (activeTimeSelector === "start") {
                    handleStartTime(startTimeVal);
                } else if (activeTimeSelector === "end") {
                    handleEndTime(endTimeVal);
                    endInputRef.current.blur();
                }
                break;
            default:
                break;
        }
    }

    const handleStartTime = (input: string) => {
        handleTimeChange(input, endTimeVal, { goToNextInput: true });
    };

    const handleEndTime = (input: string) => {
        handleTimeChange(startTimeVal, input, {
            skipRangeCheck: true,
            triggerOnBlur: true,
        });
    };

    const handleOnBlur = () => {
        handleTimeChange(startTimeVal, endTimeVal, { triggerOnBlur: true });
    };

    const handleTimeChange = (
        startInput: string,
        endInput: string,
        {
            goToNextInput, // Used by handleStart to move to end input automatically
            skipRangeCheck, // Used by handleEnd to preserve invalid end value
            triggerOnBlur, // Used by handleEnd/handleClear to trigger onBlur
        }: TimeChangeOptions
    ) => {
        const start = parseInput(startInput) ?? initialStartTimeVal;
        const end = parseInput(endInput) ?? initialEndTimeVal;

        // If start time is after end time, clear end time
        const isInvalidRange =
            !skipRangeCheck &&
            TimeHelper.timeToMinutes(start) > TimeHelper.timeToMinutes(end);
        setEndTimeVal(isInvalidRange ? "" : end);
        setStartTimeVal(start);

        const timeValue: TimeRangePickerValue = {
            start,
            end: isInvalidRange ? "" : end,
        };

        // Trigger onChange if values have changed
        if (start !== initialStartTimeVal || end !== initialEndTimeVal) {
            onChange?.(timeValue);
        }

        if (goToNextInput) {
            setActiveTimeSelector("end");
            endInputRef.current.select();
        }

        if (triggerOnBlur) {
            setActiveTimeSelector(null);
            onBlur?.();
        }

        setInitialStartTimeVal(start);
        setInitialEndTimeVal(end);
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

        onChange?.(timeValue);
        setActiveTimeSelector(null);
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
        if (!dropdownOpen) return;

        if (activeTimeSelector === "start") {
            return (
                <DropdownList
                    listItems={startOptions}
                    onSelectItem={handleStartTime}
                    selectedItems={[startTimeVal]}
                    disableItemFocus={true}
                    topScrollItem={TimeHelper.findClosestFlooredTime(
                        parseInput(startTimeVal),
                        startOptions
                    )}
                />
            );
        } else {
            return (
                <DropdownList
                    listItems={endOptions}
                    onSelectItem={handleEndTime}
                    selectedItems={[endTimeVal]}
                    disableItemFocus={true}
                    topScrollItem={TimeHelper.findClosestFlooredTime(
                        parseInput(endTimeVal),
                        endOptions
                    )}
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
