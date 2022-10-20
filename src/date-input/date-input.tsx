import React, { useEffect, useRef, useState } from "react";
import { StringHelper } from "../util/string-helper";
import {
    BaseInput,
    Container,
    Divider,
    InputContainer,
    MonthInput,
    MonthPlaceholder,
    Placeholder,
    PlaceholderContainer,
    PlaceholderDivider,
    YearInput,
    YearPlaceholder,
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

        if (dayInputRef.current) {
            dayInputRef.current.addEventListener("keydown", handleKeyDown);
        }
        if (monthInputRef.current) {
            monthInputRef.current.addEventListener("keydown", handleKeyDown);
        }
        if (yearInputRef.current) {
            yearInputRef.current.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);

            if (nodeRef.current) {
                nodeRef.current.removeEventListener(
                    "keydown",
                    handleNodeKeyDown
                );
            }

            if (dayInputRef.current) {
                dayInputRef.current.removeEventListener(
                    "keydown",
                    handleKeyDown
                );
            }
            if (monthInputRef.current) {
                monthInputRef.current.removeEventListener(
                    "keydown",
                    handleKeyDown
                );
            }
            if (yearInputRef.current) {
                yearInputRef.current.removeEventListener(
                    "keydown",
                    handleKeyDown
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

        // form validation for inputs is not supported on ios,
        // hence manual checks needed to prevent special characters input
        const isSpecialCharacter =
            event.code &&
            event.code.startsWith("Digit") &&
            !permittableEventKeys.includes(event.key);

        const isNotPermittedCharacter =
            !permittableEventCodes.includes(event.code) &&
            !permittableEventKeys.includes(event.key); // mobile devices

        if (isNotPermittedCharacter || isSpecialCharacter) {
            event.preventDefault();
        }
    };

    const handleMouseDown = (event: MouseEvent) => {
        if (disabled) {
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

        /**
         * NOTE: Unfortunately, the maxLength is not respected for
         * input type=number. Will need to add safeguards.
         * Reference: https://stackoverflow.com/a/18510925
         *
         * Ignore inputs that exceed the respective max length
         */

        switch (targetName) {
            case "day":
                if (event.target.value.length <= 2) {
                    setDayValue(event.target.value);
                    performOnChangeHandler(event.target.value, targetName);
                }
                break;
            case "month":
                if (event.target.value.length <= 2) {
                    setMonthValue(event.target.value);
                    performOnChangeHandler(event.target.value, targetName);
                }
                break;
            case "year":
                if (event.target.value.length <= 4) {
                    setYearValue(event.target.value);
                    performOnChangeHandler(event.target.value, targetName);
                }
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
                const day = date.getDate();
                const month = date.getMonth() + 1; // returns as an index
                const year = date.getFullYear();

                setDayValue(StringHelper.padValue(day.toString()));
                setMonthValue(StringHelper.padValue(month.toString()));
                setYearValue(year.toString());
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
                ...(field === "day" ? [changeValue] : [dayValue]),
                ...(field === "month" ? [changeValue] : [monthValue]),
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
                dayValueStateRef.current,
                monthValueStateRef.current,
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

    const renderPlaceholder = () => (
        <PlaceholderContainer>
            <Placeholder
                $hide={currentFocus === "day" || dayValue.length > 0}
                data-testid="day-placeholder"
            >
                DD
            </Placeholder>
            <PlaceholderDivider $hide={dayValue.length > 0}>
                /
            </PlaceholderDivider>
            <MonthPlaceholder
                $hide={currentFocus === "month" || monthValue.length > 0}
                data-testid="month-placeholder"
            >
                MM
            </MonthPlaceholder>
            <PlaceholderDivider $hide={monthValue.length > 0}>
                /
            </PlaceholderDivider>
            <YearPlaceholder
                $hide={currentFocus === "year" || yearValue.length > 0}
                data-testid="year-placeholder"
                $addGap={dayValue.length === 0 && yearValue.length === 0}
            >
                YYYY
            </YearPlaceholder>
        </PlaceholderContainer>
    );

    return (
        <Container
            ref={nodeRef}
            onClick={handleNodeClick}
            disabled={disabled}
            $error={error}
            data-testid={otherProps["data-testid"]}
        >
            {renderPlaceholder()}
            <InputContainer>
                <BaseInput
                    name="day"
                    maxLength={2}
                    value={dayValue}
                    ref={dayInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={disabled}
                    type="number"
                    pattern="[0-9]{2}"
                    data-testid="day-input"
                    aria-label="day-input"
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
                    disabled={disabled}
                    type="number"
                    pattern="[0-9]{2}"
                    data-testid="month-input"
                    aria-label="month-input"
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
                    disabled={disabled}
                    type="number"
                    pattern="[0-9]{4}"
                    data-testid="year-input"
                    aria-label="year-input"
                />
            </InputContainer>
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid date";
