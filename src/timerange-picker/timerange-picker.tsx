import { useCallback, useEffect, useRef, useState } from "react";
import { TimerangepickerHelper } from "./helper";
import { TimerangePickerDropdown } from "./timerange-picker-dropdown";
import { Container, InputContainer } from "./timerange-picker-dropdown.styles";
import {
    InputSelectorElement,
    TimeContainer,
    UnitNumberDivider,
} from "./timerange-picker.styles";
import { TimerangePickerProps } from "./types";

export const TimeRangepicker = ({
    id1,
    id2,
    disabled = false,
    error,
    startTime,
    endTime,
    defaultValue,
    placeholder,
    format = "24hr",
    onChange,
    onBlur,
    onSelectionCancel,
    ...otherProps
}: TimerangePickerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    //  const [showSelector, setShowSelector] = useState<boolean>(false);

    const [startTimeVal, setStartTimeVal] = useState<boolean>(false);
    const [endTimeVal, setEndTimeVal] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    // useEffect(() => {
    //     document.addEventListener("mousedown", handleMouseDownEvent);
    //     document.addEventListener("keyup", handleKeyUpEvent);

    //     return () => {
    //         document.removeEventListener("mousedown", handleMouseDownEvent);
    //         document.removeEventListener("keyup", handleKeyUpEvent);
    //     };
    // }, [showSelector]);

    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDownEvent);
        document.addEventListener("keyup", handleKeyUpEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
            document.removeEventListener("keyup", handleKeyUpEvent);
        };
    }, [startTimeVal]);

    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDownEvent);
        document.addEventListener("keyup", handleKeyUpEvent);

        return () => {
            document.removeEventListener("mousedown", handleMouseDownEvent);
            document.removeEventListener("keyup", handleKeyUpEvent);
        };
    }, [endTimeVal]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleInputFocus = useCallback(() => {
        if (!disabled && !startTime && !endTime) {
            // setShowSelector(true);
            setStartTimeVal(true);
            setEndTimeVal(false);
        }
        if (!disabled && !endTime && startTime) {
            setStartTimeVal(false);
            setEndTimeVal(true);
        }
    }, [startTime, endTime]);

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
        setStartTimeVal(false);
        setEndTimeVal(false);
        onSelectionCancel && onSelectionCancel();
    };

    // const handleChange = (value: string) => {
    //     setShowSelector(false);
    //     onChange && onChange(value);
    // };

    const handleStartTime = (value: string) => {
        setStartTimeVal(false);
        setEndTimeVal(true);
        onChange && onChange(1, value);
        startTime = value;
        console.log(startTime);
    };

    const handleEndTime = (value: string) => {
        setEndTimeVal(false);
        onChange && onChange(2, value);
        endTime = value;
        console.log(endTime);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const runOnBlurHandler = () => {
        setStartTimeVal(false);
        setEndTimeVal(false);
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

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    // const renderSelector = () => (
    //     <TimeContainer>
    //         <InputSelectorElement
    //             onFocus={handleInputFocus}
    //             focused={startTime}
    //             readOnly={true}
    //             placeholder={placeholder || getPlaceholderValue()}
    //             value={TimerangepickerHelper.formatValue(value, format)}
    //             defaultValue={defaultValue}
    //             disabled={disabled}
    //             error={error}
    //             data-testid={
    //                 id
    //                     ? `${id}-timerangepicker-selector-starttime`
    //                     : "timerangepicker-selector-endtime"
    //             }
    //         />
    //         <UnitNumberDivider>-</UnitNumberDivider>
    //         <InputSelectorElement
    //             onFocus={handleInputFocus}
    //             focused={endTime}
    //             readOnly={true}
    //             placeholder={placeholder || getPlaceholderValue()}
    //             value={TimerangepickerHelper.formatValue(value, format)}
    //             defaultValue={defaultValue}
    //             disabled={disabled}
    //             error={error}
    //             data-testid={
    //                 id
    //                     ? `${id}-timerangepicker-selector-starttime`
    //                     : "timerangepicker-selector-endtime"
    //             }
    //         />
    //     </TimeContainer>
    // );

    return (
        <TimeContainer>
            <InputSelectorElement
                onFocus={handleInputFocus}
                focused={startTimeVal}
                readOnly={true}
                placeholder={placeholder || getPlaceholderValue()}
                value={TimerangepickerHelper.formatValue(startTime, format)}
                defaultValue={defaultValue}
                disabled={disabled}
                error={error}
                data-testid={
                    id1
                        ? `${id1}-timepicker-selector-starttime`
                        : "timepicker-selector-starttime"
                }
            />
            <TimerangePickerDropdown
                id={id1}
                show={startTimeVal}
                value={startTime || defaultValue}
                format={format}
                onCancel={handleSelectionDropdownCancel}
                onChange={handleStartTime}
            />
            <UnitNumberDivider>-</UnitNumberDivider>
            <InputSelectorElement
                onFocus={handleInputFocus}
                focused={endTimeVal}
                readOnly={true}
                placeholder={placeholder || getPlaceholderValue()}
                value={TimerangepickerHelper.formatValue(endTime, format)}
                defaultValue={defaultValue}
                disabled={disabled}
                error={error}
                data-testid={
                    id2
                        ? `${id2}-timepicker-selector-endtime`
                        : "timepicker-selector-endtime"
                }
            />
            <TimerangePickerDropdown
                id={id2}
                show={endTimeVal}
                value={endTime || defaultValue}
                format={format}
                onCancel={handleSelectionDropdownCancel}
                onChange={handleEndTime}
            />
        </TimeContainer>
    );
};
