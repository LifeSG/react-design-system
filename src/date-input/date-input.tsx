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
import { DateInputProps } from "./types";

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
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [dayValue, _setDayValue] = useState<string>("");
    const [monthValue, _setMonthValue] = useState<string>("");
    const [yearValue, _setYearValue] = useState<string>("");
    const [currentFocus, _setCurrentFocus] = useState<FieldType>("none");

    const nodeRef = useRef<HTMLDivElement>(null);
    const dayInputRef = useRef<HTMLInputElement>(null);
    const monthInputRef = useRef<HTMLInputElement>(null);
    const yearInputRef = useRef<HTMLInputElement>(null);

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
        if (dayValue && monthValue && yearValue.length === 4) {
            handleChange({
                target: {
                    name: "day",
                    value: StringHelper.padValue(
                        DateHelper.clampDay(dayValue, monthValue, yearValue)
                    ),
                },
            } as React.ChangeEvent<HTMLInputElement>);
            handleChange({
                target: {
                    name: "month",
                    value: StringHelper.padValue(
                        DateHelper.clampMonth(monthValue)
                    ),
                },
            } as React.ChangeEvent<HTMLInputElement>);
        }
    }, [dayValue, monthValue, yearValue]);

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
        if ((event.target as any).name === "year" && event.code === "Tab") {
            // About to blur the entire input
            setCurrentFocus("none");
            performOnBlurHandler();
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setCurrentFocus(event.target.name as FieldType);
        event.target.select();
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        switch (targetName) {
            case "day":
                setDayValue(StringHelper.padValue(event.target.value, true));
                break;
            case "month":
                setMonthValue(StringHelper.padValue(event.target.value, true));
                break;
            case "year":
            default:
                break;
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        const value = event.target.value.replace(/[^0-9]/g, "");

        switch (targetName) {
            case "day":
                setDayValue(value);
                performOnChangeHandler(value, targetName);
                break;
            case "month":
                setMonthValue(value);
                performOnChangeHandler(value, targetName);
                break;
            case "year":
                setYearValue(value);
                performOnChangeHandler(value, targetName);
                break;
            default:
                break;
        }
    };

    const handleNodeClick = () => {
        if (currentFocus === "none" && dayInputRef.current) {
            dayInputRef.current.focus();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * Allow going to the field before if user presses Backspace
         * on an empty field
         */
        if (event.code === "Backspace" || event.key === "Backspace") {
            if (currentFocus === "month" && monthValue.length === 0) {
                dayInputRef.current.focus();
            }

            if (currentFocus === "year" && yearValue.length === 0) {
                monthInputRef.current.focus();
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

    const performOnChangeHandler = (changeValue: string, field: FieldType) => {
        if (onChange) {
            const values: Record<ValueFieldTypes, string> = {
                day: dayValue,
                month: monthValue,
                year: yearValue,
            };

            // Update the specific field value
            values[field] = changeValue;

            const returnValue = getFormattedValue(values);
            onChange(returnValue);
        }

        if (onChangeRaw) {
            const valuesArr = [
                ...(field === "day"
                    ? [StringHelper.padValue(changeValue)]
                    : [dayValue]),
                ...(field === "month"
                    ? [StringHelper.padValue(changeValue)]
                    : [monthValue]),
                ...(field === "year" ? [changeValue] : [yearValue]),
            ];

            onChangeRaw(valuesArr);
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
            data-testid={otherProps["data-testid"]}
            $readOnly={readOnly}
        >
            <InputContainer $readOnly={readOnly}>
                <BaseInput
                    name="day"
                    maxLength={2}
                    value={dayValue}
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
                    placeholder={
                        currentFocus === "month" && !readOnly ? "" : "MM"
                    }
                />
                <Divider $hide={monthValue.length === 0}>/</Divider>
                <YearInput
                    name="year"
                    maxLength={4}
                    value={yearValue}
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
                    placeholder={
                        currentFocus === "year" && !readOnly ? "" : "YYYY"
                    }
                />
            </InputContainer>
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid date";
