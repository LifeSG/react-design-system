import React, { useEffect, useRef, useState } from "react";
import { DateHelper } from "../util";
import { StringHelper } from "../util/string-helper";
import {
    BaseInput,
    Container,
    Divider,
    InputContainer,
    MonthInput,
    YearInput,
} from "./date-input.style";
import { DateInputProps, DateInputRangeProps } from "./types";
import { DateInputRange } from "./date-input-range";
import { FocusToTypes } from "src/date-picker";

type FieldType = "day" | "month" | "year" | "none";
type ValueFieldTypes = Exclude<FieldType, "none">;

export const DateInput = ({
    disabled,
    error,
    value,
    onChange,
    onBlur,
    onChangeRaw,
    onBlurRaw,
    readOnly,
    id,
    type,
    rangeValue,
    setIsOpenCalendar,
    setFocusTo,
    setTransitionValue,
    transitionValues,
    hoverValue,
    focusTo,
    ...otherProps
}: DateInputProps & DateInputRangeProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [dayValue, _setDayValue] = useState<string>("");
    const [monthValue, _setMonthValue] = useState<string>("");
    const [yearValue, _setYearValue] = useState<string>("");
    const [currentFocus, _setCurrentFocus] = useState<FieldType>("none");
    const [calendarManualInput, setCalendarManualInput] = useState<string>("");

    const nodeRef = useRef<HTMLDivElement>(null);
    const dayInputRef = useRef<HTMLInputElement>(null);
    const monthInputRef = useRef<HTMLInputElement>(null);
    const yearInputRef = useRef<HTMLInputElement>(null);

    // const rangeNodeRef = useRef<RangeElementRef>(null);
    const rangeNodeRef = useRef<HTMLDivElement | null>(null);
    /**
     * Have to use refs to allow the state values to be accessible
     * by the event listener callback functions
     * Reference:
     * https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
     */

    const dayValueStateRef = useRef<string>(dayValue);
    const monthValueStateRef = useRef<string>(monthValue);
    const yearValueStateRef = useRef<string>(yearValue);
    const currentFocusStateRef = useRef<FieldType>(currentFocus);

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================
    const setDayValue = (data: string) => {
        dayValueStateRef.current = data;
        _setDayValue(data);
    };

    const setMonthValue = (data: string) => {
        monthValueStateRef.current = data;
        _setMonthValue(data);
    };

    const setYearValue = (data: string) => {
        yearValueStateRef.current = data;
        _setYearValue(data);
    };

    const setCurrentFocus = (data: FieldType) => {
        currentFocusStateRef.current = data;
        _setCurrentFocus(data);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown);

        if (nodeRef.current) {
            nodeRef.current.addEventListener("keydown", handleNodeKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);

            if (nodeRef.current) {
                nodeRef.current.removeEventListener(
                    "keydown",
                    handleNodeKeyDown
                );
            }
        };
    }, [currentFocus]);

    useEffect(() => {
        // Auto focus feature
        if (
            currentFocus === "day" &&
            dayValue.length === 2 &&
            monthInputRef.current
        ) {
            monthInputRef.current.focus();
        }
    }, [dayValue]);

    useEffect(() => {
        // Auto focus feature
        if (
            currentFocus === "month" &&
            monthValue.length === 2 &&
            yearInputRef.current
        ) {
            yearInputRef.current.focus();
        }
    }, [monthValue]);

    useEffect(() => {
        formatDisplayValues(value);
    }, [value]);

    useEffect(() => {
        // sync up with manual input state
        if (transitionValues) setCalendarManualInput(transitionValues.start);
    }, [transitionValues]);

    useEffect(() => {
        if (calendarManualInput.length === 10) {
            // handle after confirm and manual input the value state
            setTransitionValue({
                ...transitionValues,
                start: calendarManualInput,
                startStatus: "pre-confirmed",
            });
        }
    }, [calendarManualInput]);

    useEffect(() => {
        // auto focus feature
        const [yyyy, mm, dd] = calendarManualInput.split("-");
        if (
            currentFocus === "day" &&
            dayInputRef.current &&
            dd &&
            dd.length === 2
        ) {
            monthInputRef.current.focus();
        }

        if (
            currentFocus === "month" &&
            yearInputRef.current &&
            mm &&
            mm.length === 2
        ) {
            yearInputRef.current.focus();
        }
    }, [calendarManualInput]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMouseDown = (event: MouseEvent) => {
        if (disabled || readOnly) {
            return;
        }

        if (nodeRef && (nodeRef.current as any).contains(event.target)) {
            // inside click
            return;
        }
        // outside click
        if (currentFocusStateRef.current !== "none") {
            setCurrentFocus("none");
            performOnBlurHandler();
        }
    };

    const handleNodeKeyDown = (event: KeyboardEvent) => {
        if (
            !setIsOpenCalendar &&
            (event.target as any).name === "year" &&
            event.code === "Tab"
        ) {
            // About to blur the entire input
            setCurrentFocus("none");
            performOnBlurHandler();
        }

        if (
            typeof setIsOpenCalendar === "function" &&
            (event.target as any).name === "year" &&
            event.code === "Tab"
        ) {
            if (rangeNodeRef.current) {
                rangeNodeRef.current.click();

                const rootCalendar = rangeNodeRef.current.parentElement
                    .parentElement as HTMLDivElement;

                const rangePlaceholder = rootCalendar.querySelector(
                    '[data-id="range"]'
                ) as HTMLDivElement;

                rangePlaceholder.click();
            }

            setCurrentFocus("none");
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setCurrentFocus(event.target.name as FieldType);
        event.target.select();
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;
        const targetValue = StringHelper.padValue(event.target.value, true);

        // skip blur in calendar (for pre-view issue)
        if (typeof setIsOpenCalendar === "function") return;

        switch (targetName) {
            case "day":
                setDayValue(targetValue);
                break;
            case "month":
                setMonthValue(targetValue);
                break;
            case "year":
            default:
                break;
        }

        const isFullyFormedDate =
            dayValue.length && monthValue.length && yearValue.length === 4;
        const isDayTarget = targetName === "day";
        const clampedMonth = DateHelper.clampMonth(monthValue);

        if (isFullyFormedDate) {
            setDayValue(
                StringHelper.padValue(
                    DateHelper.clampDay(
                        isDayTarget ? targetValue : dayValue,
                        clampedMonth,
                        yearValue
                    )
                )
            );
            setMonthValue(StringHelper.padValue(clampedMonth));
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        const value = event.target.value.replace(/[^0-9]/g, "");

        switch (targetName) {
            case "day":
                if (typeof setIsOpenCalendar === "function") {
                    onChangeManualInput(value);
                    performOnChangeHandler(value, targetName);
                    break;
                }

                /* below line code use in without calendar*/
                setDayValue(value);
                performOnChangeHandler(value, targetName);
                break;
            case "month":
                if (typeof setIsOpenCalendar === "function") {
                    onChangeManualInput(value);
                    performOnChangeHandler(value, targetName);
                    break;
                }

                setMonthValue(value);
                performOnChangeHandler(value, targetName);
                break;
            case "year":
                if (typeof setIsOpenCalendar === "function") {
                    onChangeManualInput(value);
                    performOnChangeHandler(value, targetName);
                    break;
                }

                setYearValue(value);
                performOnChangeHandler(value, targetName);
                break;
            default:
                break;
        }
    };

    const handleNodeClick = async () => {
        if (currentFocus === "none" && dayInputRef.current) {
            dayInputRef.current.focus();
        }

        if (typeof setIsOpenCalendar === "function" && type !== undefined) {
            setFocusTo((prev: FocusToTypes) => ({
                container: "start",
                countToEvenClose: prev.countToEvenClose,
            }));
            await setIsOpenCalendar(true);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * Allow going to the field before if user presses Backspace
         * on an empty field
         */
        if (event.code === "Backspace" || event.key === "Backspace") {
            if (currentFocus === "month") {
                if (
                    monthValue.length === 0 &&
                    setIsOpenCalendar === undefined
                ) {
                    // use in without calendar
                    dayInputRef.current.focus();
                }

                if (
                    typeof setIsOpenCalendar === "function" &&
                    calendarManualInput.length &&
                    calendarManualInput.split("-")[1].length === 0
                ) {
                    dayInputRef.current.focus();
                }
            }

            if (currentFocus === "year") {
                if (yearValue.length === 0 && setIsOpenCalendar === undefined) {
                    // use in without calendar
                    monthInputRef.current.focus();
                }

                if (
                    typeof setIsOpenCalendar === "function" &&
                    calendarManualInput.length &&
                    calendarManualInput.split("-")[0].length === 0
                ) {
                    monthInputRef.current.focus();
                }
            }
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const formatDisplayValues = (value: string) => {
        if (value === undefined || value === "") {
            setDayValue("");
            setMonthValue("");
            setYearValue("");
        } else {
            const date = new Date(value);

            if (!isNaN(date.getTime())) {
                // Valid value
                const month = (date.getMonth() + 1).toString(); // returns as an index
                const year = date.getFullYear().toString();
                const day = DateHelper.clampDay(
                    date.getDate().toString(),
                    month,
                    year
                );

                setDayValue(StringHelper.padValue(day));
                setMonthValue(StringHelper.padValue(month));
                setYearValue(year);
            }
        }
    };

    const onChangeManualInput = (value: string) => {
        setCalendarManualInput((prev) => {
            let [yyyy, mm, dd] = prev.split("-");

            let start = "";

            if (!yyyy) yyyy = "";
            if (!mm) mm = "";
            if (!dd) dd = "";

            if (currentFocus === "year") start = `${value}-${mm}-${dd}`;
            if (currentFocus === "month") start = `${yyyy}-${value}-${dd}`;
            if (currentFocus === "day") start = `${yyyy}-${mm}-${value}`;

            return start;
        });
    };

    const performOnChangeHandler = (changeValue: string, field: FieldType) => {
        if (onChange) {
            const values: Record<ValueFieldTypes, string> = {
                day: dayValue,
                month: monthValue,
                year: yearValue,
            };

            if (!setIsOpenCalendar) {
                // Update the specific field value in without calendar
                values[field] = changeValue;
                const returnValue = getFormattedValue(values);
                onChange(returnValue);
            }

            if (typeof setIsOpenCalendar === "function") {
                /*  
                    use calendarManualInput instead "stateValue", 
                    stateValue is a confirmed state in calendar 
                */
                const [yyyy, mm, dd] = calendarManualInput.split("-");
                const calendarManualRaw = [
                    ...(field === "day" ? [changeValue] : [dd]),
                    ...(field === "month" ? [changeValue] : [mm]),
                    ...(field === "year" ? [changeValue] : [yyyy]),
                ];

                const returnValue = calendarManualRaw.join("-");
                onChange(returnValue);
            }
        }

        if (onChangeRaw) {
            const valuesArr = [
                ...(field === "day"
                    ? [StringHelper.padValue(changeValue, true)]
                    : [dayValue]),
                ...(field === "month"
                    ? [StringHelper.padValue(changeValue)]
                    : [monthValue]),
                ...(field === "year" ? [changeValue] : [yearValue]),
            ];

            onChangeRaw(valuesArr);

            if (typeof setIsOpenCalendar === "function")
                onChangeRaw(["Calendar is not provided this method"]);
        }
    };

    const performOnBlurHandler = () => {
        if (onBlur) {
            const values: Record<ValueFieldTypes, string> = {
                day: dayValueStateRef.current,
                month: monthValueStateRef.current,
                year: yearValueStateRef.current,
            };
            const returnValue = getFormattedValue(values);
            onBlur(returnValue);
        }

        if (onBlurRaw) {
            const valuesArr = [
                StringHelper.padValue(dayValueStateRef.current.toString()),
                StringHelper.padValue(monthValueStateRef.current.toString()),
                yearValueStateRef.current,
            ];

            onBlurRaw(valuesArr);
        }
    };

    const getFormattedValue = (values: Record<ValueFieldTypes, string>) => {
        const valueArr = [values.year, values.month, values.day]; // eventual format YYYY-MM-DD

        if (
            values.day.length >= 1 &&
            values.month.length >= 1 &&
            values.year.length === 4
        ) {
            return valueArr.join("-");
        } else if (valueArr.every((value) => value === "")) {
            return "";
        } else {
            return INVALID_VALUE;
        }
    };
    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    return (
        <Container
            ref={nodeRef}
            onClick={handleNodeClick}
            disabled={disabled}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            $readOnly={readOnly}
            type={type}
        >
            <InputContainer
                $readOnly={readOnly}
                type={type}
                {...(hoverValue !== undefined && {
                    isTransition:
                        !!hoverValue.length && focusTo.container === "start",
                })}
            >
                <BaseInput
                    name="day"
                    maxLength={2}
                    value={dayValue}
                    {...(hoverValue !== undefined && {
                        value:
                            hoverValue.length && focusTo.container === "start"
                                ? hoverValue.split("-")[2]
                                : calendarManualInput.length &&
                                  currentFocus !== "none"
                                ? calendarManualInput.split("-")[2]
                                : transitionValues.startStatus ===
                                  "pre-confirmed"
                                ? transitionValues.start.split("-")[2] || ""
                                : dayValue,
                    })}
                    ref={dayInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={disabled}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{2}"
                    data-testid="day-input"
                    aria-label="day-input"
                    readOnly={readOnly}
                    autoComplete={type !== undefined ? "off" : "on"}
                    placeholder={
                        currentFocus === "day" && !readOnly ? "" : "DD"
                    }
                />
                <Divider $hide={dayValue.length === 0}>/</Divider>
                <MonthInput
                    name="month"
                    maxLength={2}
                    value={monthValue}
                    ref={monthInputRef}
                    {...(hoverValue !== undefined && {
                        value:
                            hoverValue.length && focusTo.container === "start"
                                ? hoverValue.split("-")[1]
                                : calendarManualInput.length &&
                                  currentFocus !== "none"
                                ? calendarManualInput.split("-")[1]
                                : transitionValues.startStatus ===
                                  "pre-confirmed"
                                ? transitionValues.start.split("-")[1] || ""
                                : monthValue,
                    })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{2}"
                    data-testid="month-input"
                    aria-label="month-input"
                    readOnly={readOnly}
                    autoComplete={type !== undefined ? "off" : "on"}
                    placeholder={
                        currentFocus === "month" && !readOnly ? "" : "MM"
                    }
                />
                <Divider $hide={monthValue.length === 0}>/</Divider>
                <YearInput
                    name="year"
                    maxLength={4}
                    value={yearValue}
                    {...(hoverValue !== undefined && {
                        value:
                            hoverValue.length && focusTo.container === "start"
                                ? hoverValue.split("-")[0]
                                : calendarManualInput.length &&
                                  currentFocus !== "none"
                                ? calendarManualInput.split("-")[0]
                                : transitionValues.startStatus ===
                                  "pre-confirmed"
                                ? transitionValues.start.split("-")[0] || ""
                                : yearValue,
                    })}
                    ref={yearInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{4}"
                    data-testid="year-input"
                    aria-label="year-input"
                    readOnly={readOnly}
                    autoComplete={type !== undefined ? "off" : "on"}
                    placeholder={
                        currentFocus === "year" && !readOnly ? "" : "YYYY"
                    }
                />
            </InputContainer>

            {type === "range" && (
                <DateInputRange
                    setIsOpenCalendar={setIsOpenCalendar}
                    setFocusTo={setFocusTo}
                    ref={rangeNodeRef}
                    onChange={onChange}
                    type={type}
                    rangeValue={rangeValue}
                    setTransitionValue={setTransitionValue}
                    transitionValues={transitionValues}
                    hoverValue={hoverValue}
                    focusTo={focusTo}
                />
            )}
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid date";
