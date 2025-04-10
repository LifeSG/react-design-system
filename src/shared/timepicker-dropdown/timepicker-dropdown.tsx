import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { StringHelper } from "../../util/string-helper";
import { EPeriod, TimeFormat, TimeHelper } from "../../util/time-helper";
import {
    AnimatedDiv,
    Container,
    ControlButton,
    ControlSection,
    DividerLabel,
    HourMinuteSection,
    InputContainer,
    InputSection,
    SwitchButton,
    TimeInput,
    TimePeriodSection,
    TimePeriodToggle,
} from "./timepicker-dropdown.styles";

enum EInputButtonName {
    HOUR_UP = "hour-up",
    HOUR_DOWN = "hour-down",
    MINUTE_UP = "minute-up",
    MINUTE_DOWN = "minute-down",
}

enum EInputName {
    HOUR = "hour",
    MINUTE = "minute",
}

enum ETimePeriodToggleName {
    AM = "am",
    PM = "pm",
}

interface TimepickerDropdownProps {
    id?: string;
    value: string;
    show: boolean;
    format: TimeFormat;
    onChange: (value: string) => void;
    onCancel: () => void;
}

export const TimepickerDropdown = ({
    id,
    value,
    show,
    format,
    onChange,
    onCancel,
}: TimepickerDropdownProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const timeValues = TimeHelper.getTimeValues(format, value);

    const [hourValue, setHourValue] = useState<string>(timeValues.hour);
    const [minuteValue, setMinuteValue] = useState<string>(timeValues.minute);
    const [timePeriod, setTimePeriod] = useState<EPeriod>(timeValues.period);

    const hourInputRef = useRef<HTMLInputElement>();
    const minuteInputRef = useRef<HTMLInputElement>();
    const resizeDetector = useResizeDetector();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        // Focus hour input on display of dropdown
        if (show && hourInputRef.current) {
            hourInputRef.current?.focus();
        }

        if (show) {
            // reset time values especially when a Cancel or blur event happened
            const { hour, minute, period } = TimeHelper.getTimeValues(
                format,
                value
            );
            setHourValue(hour);
            setMinuteValue(minute);
            setTimePeriod(period);
        }
    }, [show, value, format]);

    useEffect(() => {
        const hourInput = hourInputRef.current;
        const minuteInput = minuteInputRef.current;

        if (hourInput) hourInput.addEventListener("keydown", handleKeyDown);
        if (minuteInput) minuteInput.addEventListener("keydown", handleKeyDown);

        return () => {
            if (hourInput)
                hourInput.removeEventListener("keydown", handleKeyDown);
            if (minuteInput)
                minuteInput.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleKeyDown = (event: KeyboardEvent) => {
        /**
         * NOTE: This is the most deterministic way in handling
         * incorrect characters from being entered. The pattern
         * added in the input still allows some special characters
         * to slip through.
         */

        const permittableEventCodes = [
            "Digit0",
            "Digit1",
            "Digit2",
            "Digit3",
            "Digit4",
            "Digit5",
            "Digit6",
            "Digit7",
            "Digit8",
            "Digit9",
            "Tab",
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
        ];

        const permittableEventKeys = [
            "Backspace",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
        ];

        if (
            !permittableEventCodes.includes(event.code) &&
            !permittableEventKeys.includes(event.key) // mobile devices
        ) {
            event.preventDefault();
        }
    };

    const handleInputButtonClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            switch (event.currentTarget.name) {
                case EInputButtonName.MINUTE_UP:
                    setMinuteValue(
                        TimeHelper.updateMinutes(minuteValue, "add")
                    );
                    break;
                case EInputButtonName.MINUTE_DOWN:
                    setMinuteValue(
                        TimeHelper.updateMinutes(minuteValue, "minus")
                    );
                    break;
                case EInputButtonName.HOUR_UP:
                    setHourValue(TimeHelper.updateHours(hourValue, "add"));
                    break;
                case EInputButtonName.HOUR_DOWN:
                    setHourValue(TimeHelper.updateHours(hourValue, "minus"));
                    break;
                default:
                    break;
            }
        },
        [hourValue, minuteValue]
    );

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.select();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        switch (event.target.name) {
            case EInputName.HOUR:
                if (value.length <= 2) setHourValue(value);
                break;
            case EInputName.MINUTE:
                if (value.length <= 2) setMinuteValue(value);
                break;
            default:
                break;
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);

        if (isNaN(value)) return;

        switch (event.target.name) {
            case EInputName.HOUR: {
                const valueToSet =
                    value > 23 || value < 0
                        ? timeValues.hour
                        : TimeHelper.convertHourTo12HourFormat(
                              event.target.value
                          );

                setHourValue(valueToSet);
                break;
            }
            case EInputName.MINUTE: {
                const valueToSet =
                    value > 59 || value < 0
                        ? timeValues.minute
                        : event.target.value;

                setMinuteValue(StringHelper.padValue(valueToSet));
                break;
            }
            default:
                break;
        }
    };

    const handleTimePeriodChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        switch (event.target.name) {
            case ETimePeriodToggleName.AM:
                setTimePeriod(EPeriod.AM);
                break;
            case ETimePeriodToggleName.PM:
                setTimePeriod(EPeriod.PM);
                break;
            default:
                break;
        }
    };

    const handleConfirm = () => {
        let formattedValue: string;

        if (format === "24hr") {
            formattedValue = TimeHelper.convertTo24HourFormat({
                hour: hourValue,
                minute: minuteValue,
                period: timePeriod,
            });
        } else {
            formattedValue = `${hourValue}:${minuteValue}${timePeriod}`;
        }

        onChange(formattedValue);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getTestId = (baseTestId: string): string => {
        return id ? `${id}-${baseTestId}` : baseTestId;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHourInput = () => (
        <InputContainer>
            <SwitchButton
                aria-label="increase hour"
                name={EInputButtonName.HOUR_UP}
                tabIndex={-1} /* Prevent tab, use arrow keys to change */
                onClick={handleInputButtonClick}
                data-testid={getTestId("hour-increment-button")}
            >
                <ChevronUpIcon />
            </SwitchButton>
            <TimeInput
                aria-label="hour"
                type="number"
                name={EInputName.HOUR}
                id="hour"
                maxLength={2}
                pattern="[0-9]{2}"
                ref={hourInputRef}
                value={hourValue}
                onFocus={handleFocus}
                onChange={handleChange}
                onBlur={handleBlur}
                min={1}
                max={12}
                placeholder="HH"
                data-testid={getTestId("hour-input")}
            />
            <SwitchButton
                aria-label="decrease hour"
                name={EInputButtonName.HOUR_DOWN}
                tabIndex={-1} /* Prevent tab, use arrow keys to change */
                onClick={handleInputButtonClick}
                data-testid={getTestId("hour-decrement-button")}
            >
                <ChevronDownIcon />
            </SwitchButton>
        </InputContainer>
    );

    const renderMinuteInput = () => (
        <InputContainer>
            <SwitchButton
                aria-label="increase minute"
                name={EInputButtonName.MINUTE_UP}
                tabIndex={-1} /* Prevent tab, use arrow keys to change */
                onClick={handleInputButtonClick}
                data-testid={getTestId("minute-increment-button")}
            >
                <ChevronUpIcon />
            </SwitchButton>
            <TimeInput
                aria-label="minute"
                type="number"
                name={EInputName.MINUTE}
                id="minute"
                maxLength={2}
                pattern="[0-9]{2}"
                ref={minuteInputRef}
                value={minuteValue}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                min={0}
                max={59}
                placeholder="MM"
                data-testid={getTestId("minute-input")}
            />
            <SwitchButton
                aria-label="decrease minute"
                name={EInputButtonName.MINUTE_DOWN}
                tabIndex={-1} /* Prevent tab, use arrow keys to change */
                onClick={handleInputButtonClick}
                data-testid={getTestId("minute-decrement-button")}
            >
                <ChevronDownIcon />
            </SwitchButton>
        </InputContainer>
    );

    const renderTimePeriodControl = () => (
        <TimePeriodSection>
            <TimePeriodToggle
                checked={timePeriod === EPeriod.AM}
                name={ETimePeriodToggleName.AM}
                type="radio"
                onChange={handleTimePeriodChange}
                data-testid={getTestId("am-toggle")}
                aria-label="AM"
            >
                AM
            </TimePeriodToggle>
            <TimePeriodToggle
                checked={timePeriod === EPeriod.PM}
                name={ETimePeriodToggleName.PM}
                type="radio"
                onChange={handleTimePeriodChange}
                data-testid={getTestId("pm-toggle")}
                aria-label="PM"
            >
                PM
            </TimePeriodToggle>
        </TimePeriodSection>
    );

    // React spring animation configuration
    const styles = useSpring({
        height: show
            ? resizeDetector.height + 32 // include vertical padding
            : 0,
    });

    return (
        <AnimatedDiv data-testid="animated-dropdown-wrapper" style={styles}>
            <Container
                ref={resizeDetector.ref}
                data-testid={getTestId("timepicker-dropdown")}
                inert={show ? undefined : ""}
            >
                <InputSection>
                    <HourMinuteSection>
                        {renderHourInput()}
                        <DividerLabel>:</DividerLabel>
                        {renderMinuteInput()}
                    </HourMinuteSection>
                    {renderTimePeriodControl()}
                </InputSection>
                <ControlSection>
                    <ControlButton
                        aria-label="close selector"
                        type="button"
                        styleType="secondary"
                        onClick={onCancel}
                        data-testid={getTestId("cancel-button")}
                    >
                        Cancel
                    </ControlButton>
                    <ControlButton
                        aria-label="confirm selection"
                        type="button"
                        onClick={handleConfirm}
                        disabled={hourValue === "" || minuteValue === ""}
                        data-testid={getTestId("confirm-button")}
                    >
                        Done
                    </ControlButton>
                </ControlSection>
            </Container>
        </AnimatedDiv>
    );
};
