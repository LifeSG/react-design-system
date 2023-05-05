import React, { useEffect, useRef, useState } from "react";
import { DateHelper, StringHelper } from "../util";
import { ActionType } from "./date-input-reducer";
import { FocusType } from "../shared/internal-calendar";
import {
    DayInput,
    Divider,
    InputContainer,
    InputSection,
    MonthInput,
    Placeholder,
    VariantStyleProps,
    YearInput,
} from "./stand-alone-input.style";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

type StartInputNames = "start-day" | "start-month" | "start-year";
type EndInputNames = "end-day" | "end-month" | "end-year";
type FieldName = "day" | "month" | "year";

export type FieldType = StartInputNames | EndInputNames | "none";
interface Props {
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    names:
        | ["start-day", "start-month", "start-year"]
        | ["end-day", "end-month", "end-year"];
    value: string | undefined;
    confirmedValue: string | undefined;
    variant: VariantStyleProps;
    action: ActionType;
    focusType: FocusType;
    isOpen: boolean;
    isError: boolean;
    onChange: (value: string) => void;
    onChangeRaw: (value: string) => void;
    onFocus: (value: FieldType) => void;
}

export const StandAloneInput = ({
    action,
    disabled,
    confirmedValue,
    onChange,
    onChangeRaw,
    onFocus,
    readOnly,
    names,
    value,
    variant,
    focusType,
    isOpen,
    isError,
}: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [dayValue, _setDayValue] = useState<string>("");
    const [monthValue, _setMonthValue] = useState<string>("");
    const [yearValue, _setYearValue] = useState<string>("");
    const [currentFocus, _setCurrentFocus] = useState<FieldType>("none");

    const [isDirty, setIsDirty] = useState<boolean>(false);

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
            currentFocus === names[0] &&
            dayValue.length === 2 &&
            monthInputRef.current
        ) {
            monthInputRef.current.focus();
        }
    }, [dayValue]);

    useEffect(() => {
        // Auto focus feature
        if (
            currentFocus === names[1] &&
            monthValue.length === 2 &&
            yearInputRef.current
        ) {
            yearInputRef.current.focus();
        }
    }, [monthValue]);

    useEffect(() => {
        if (!value && !isOpen) {
            // reset once cancel or blur called
            setIsDirty(false);
        }

        formatDisplayValues(value);
    }, [value, isOpen]);

    useEffect(() => {
        // remove the cursor if it
        // - field is 'none'
        // - error happened from range value check
        if (focusType === "none" || isError) {
            dayInputRef.current.blur();
            monthInputRef.current.blur();
            yearInputRef.current.blur();
        }
    }, [focusType, isError]);

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
        }
    };

    const handleNodeClick = () => {
        if (currentFocus === "none" && dayInputRef.current) {
            dayInputRef.current.focus();
        }
    };

    const handleNodeKeyDown = (event: KeyboardEvent) => {
        if ((event.target as any).name === names[2] && event.code === "Tab") {
            // About to blur the entire input
            setCurrentFocus("none");
        }
    };

    const handleNodeFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        const name = event.target.name as FieldType;

        // Remove overlay placeholder once 'Tab' into this element
        if (["start-day", "end-day"].includes(name)) {
            setIsDirty(true);
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        // remove target.select during 'hover' and unhover action
        // side effect triggered from auto focus feature useEffect above
        if (["hover", "unhover"].includes(action)) {
            setCurrentFocus(names[0]);
            dayInputRef.current.focus();

            return;
        }

        const name = event.target.name as FieldType;
        setCurrentFocus(name);
        event.target.select();

        performOnFocusHandler(name);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;
        const targetValue = StringHelper.padValue(event.target.value, true);

        switch (targetName) {
            case names[0]:
                setDayValue(targetValue);
                break;
            case names[1]:
                setMonthValue(targetValue);
                break;
            case names[2]:
            default:
                break;
        }

        const isFullyFormedDate =
            dayValue.length && monthValue.length && yearValue.length === 4;
        const isDayTarget = targetName === names[0];

        if (isFullyFormedDate) {
            const value = `${yearValue}-${monthValue}-${dayValue}`;
            const isValid = dayjs(value, "YYYY-MM-DD", true).isValid();

            const dayTargetValue = isDayTarget ? targetValue : dayValue;

            const { year, month, day } = dateValidation(
                yearValue,
                monthValue,
                dayTargetValue,
                isValid
            );

            setDayValue(day);
            setMonthValue(month);
            if (!isValid) setYearValue(year);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as FieldType;

        const value = event.target.value.replace(/[^0-9]/g, "");

        switch (targetName) {
            case names[0]:
                setDayValue(value);
                performOnChangeHandler(value, targetName);
                break;
            case names[1]:
                setMonthValue(value);
                performOnChangeHandler(value, targetName);
                break;
            case names[2]:
                setYearValue(value);
                performOnChangeHandler(value, targetName);
                break;
            default:
                break;
        }
    };

    const handleClickPlaceholder = () => {
        setIsDirty(true);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * Allow going to the field before if user presses Backspace
         * on an empty field
         */
        if (event.code === "Backspace" || event.key === "Backspace") {
            if (currentFocus === names[1] && monthValue.length === 0) {
                dayInputRef.current.focus();
            }

            if (currentFocus === names[2] && yearValue.length === 0) {
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

    const dateValidation = (
        _year: string,
        _month: string,
        _day: string,
        isValid: boolean
    ) => {
        let year = "",
            month = "",
            day = "";

        if (isValid) {
            const clampedMonth = DateHelper.clampMonth(_month);
            month = StringHelper.padValue(clampedMonth);
            day = StringHelper.padValue(
                DateHelper.clampDay(_day, clampedMonth, _year)
            );
        } else if (!isValid && dayjs(confirmedValue).isValid()) {
            const [yyyy, mm, dd] = confirmedValue.split("-") as any;
            year = yyyy;
            month = mm;
            day = dd;
        }

        return {
            year,
            month,
            day,
        };
    };

    const performOnChangeHandler = (changeValue: string, name: FieldType) => {
        const field = name.split("-")[1] as FieldName;
        const values: Record<FieldName, string> = {
            year: yearValue,
            month: monthValue,
            day: dayValue,
        };

        // Update the specific field value
        values[field] = changeValue;

        const returnValue = getFormattedValue(values);
        const returnRawValue = Object.values(values).join("-");

        onChange(returnValue);
        onChangeRaw(returnRawValue);
    };

    const performOnFocusHandler = (field: FieldType) => {
        onFocus(field);
    };

    const getFormattedValue = (values: Record<FieldName, string>) => {
        const valueArr = [values.year, values.month, values.day]; // eventual format YYYY-MM-DD

        if (
            values["year"].length === 4 &&
            values["month"].length == 2 &&
            values["day"].length == 2
        ) {
            let returnValue = "";

            returnValue = valueArr.join("-");
            const isValid = dayjs(returnValue, "YYYY-MM-DD", true).isValid();

            /**
             * transform invalid date to previous state value
             */
            if (!isValid) {
                const date = dateValidation(
                    values.year,
                    values.month,
                    values.day,
                    isValid
                );

                returnValue = Object.values(date).join("-");
            }

            const isDateFormat = dayjs(returnValue).isValid();

            return isDateFormat ? returnValue : INVALID_VALUE;
        } else if (valueArr.every((value) => value === "")) {
            return "";
        } else {
            return INVALID_VALUE;
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const RenderPlaceholder = () => {
        if (value || readOnly) {
            return;
        }

        // remove placeholder
        if (variant === "start" && focusType === "start") return;
        if (variant === "range" && focusType === "end") return;

        switch (variant) {
            case "start":
            case "range":
                return (
                    <Placeholder
                        $isDirty={isDirty}
                        $disabled={disabled}
                        $variant={variant}
                        onClick={handleClickPlaceholder}
                    >
                        {variant === "start" ? "From" : "To"}
                    </Placeholder>
                );
            default:
                return;
        }
    };

    return (
        <InputSection
            $readOnly={readOnly}
            $variant={variant}
            onClick={handleNodeClick}
            onFocus={handleNodeFocus}
        >
            <InputContainer
                ref={nodeRef}
                $isHover={action === "hover" ? true : false}
            >
                <DayInput
                    name={names[0]}
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
                    data-testid={`${names[0]}-input`}
                    aria-label={`${names[0]}-input`}
                    readOnly={readOnly}
                    tabIndex={readOnly ? -1 : 0}
                    autoComplete={"off"}
                    placeholder={
                        currentFocus === names[0] && !readOnly ? "" : "DD"
                    }
                />
                <Divider $hide={dayValue.length === 0}>/</Divider>
                <MonthInput
                    name={names[1]}
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
                    data-testid={`${names[1]}-input`}
                    aria-label={`${names[1]}-input`}
                    readOnly={readOnly}
                    tabIndex={readOnly ? -1 : 0}
                    autoComplete={"off"}
                    placeholder={
                        currentFocus === names[1] && !readOnly ? "" : "MM"
                    }
                />
                <Divider $hide={monthValue.length === 0}>/</Divider>
                <YearInput
                    name={names[2]}
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
                    data-testid={`${names[2]}-input`}
                    aria-label={`${names[2]}-input`}
                    readOnly={readOnly}
                    tabIndex={readOnly ? -1 : 0}
                    autoComplete={"off"}
                    placeholder={
                        currentFocus === names[2] && !readOnly ? "" : "YYYY"
                    }
                />
            </InputContainer>
            {RenderPlaceholder()}
        </InputSection>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
export const INVALID_VALUE = "Invalid Date" as const;
