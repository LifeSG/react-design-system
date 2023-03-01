import React, { useEffect, useRef, useState } from "react";
import { DateHelper, StringHelper } from "../util";
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

type StartInputNames = "start-day" | "start-month" | "start-year";
type EndInputNames = "end-day" | "end-month" | "end-year";
type FieldName = "day" | "month" | "year";

export type FieldType = StartInputNames | EndInputNames | "none";
interface StandAloneInputProps {
    disabled?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    onFocus?: ((value: FieldType) => void) | undefined;
    readOnly?: boolean | undefined;
    names:
        | ["start-day", "start-month", "start-year"]
        | ["end-day", "end-month", "end-year"];
    value?: string | undefined;
    variant?: VariantStyleProps | undefined;
    action?: "hover" | "selected" | "confirmed" | undefined;
}

export const StandAloneInput = ({
    action,
    disabled,
    onChange,
    onFocus,
    readOnly,
    names,
    value,
    variant,
}: StandAloneInputProps) => {
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
        formatDisplayValues(value);
    }, [value]);

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
        if (name === "start-day" || name === "end-day") setIsDirty(true);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (action === "hover") {
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

        // const values = { year: yearValue, month: monthValue, day: dayValue };
        // const { month, day, isFullyFormedDate } = clampDate(values);

        // if (isFullyFormedDate) {
        //     setDayValue(day);
        //     setMonthValue(month);
        // }

        const isFullyFormedDate =
            dayValue.length && monthValue.length && yearValue.length === 4;
        const isDayTarget = targetName === names[0];
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
            case names[0]:
                setDayValue(value);
                break;
            case names[1]:
                setMonthValue(value);
                break;
            case names[2]:
                setYearValue(value);
                break;
            default:
                break;
        }

        performOnChangeHandler(value, targetName);
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
            console.log("set to null string");
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

    const clampDate = ({ year, month, day }) => {
        const isFullyFormedDate =
            day.length && month.length && year.length === 4;
        const isDayTarget = currentFocus === names[0];
        const clampedMonth = DateHelper.clampMonth(monthValue);

        let formattedDay = null,
            formattedMonth = null;

        if (isFullyFormedDate) {
            formattedDay = StringHelper.padValue(
                DateHelper.clampDay(
                    isDayTarget ? day : dayValue,
                    clampedMonth,
                    yearValue
                )
            );

            formattedMonth = StringHelper.padValue(clampedMonth);
        }

        return {
            month: formattedMonth,
            day: formattedDay,
            isFullyFormedDate,
        };
    };

    const performOnChangeHandler = (
        changeValue: string,
        name: Omit<FieldType, "none">
    ) => {
        const field = name.split("-")[1] as FieldName;
        const values: Record<FieldName, string> = {
            year: yearValue,
            month: monthValue,
            day: dayValue,
        };

        // Update the specific field value
        values[field] = changeValue;

        if (
            values["year"].length === 4 &&
            values["month"].length >= 1 &&
            values["day"].length >= 1
        ) {
            const { month, day } = clampDate(values);

            const returnValue = `${values.year}-${month}-${day}`;

            onChange(returnValue);
        }
    };

    const performOnFocusHandler = (field: FieldType) => {
        onFocus(field);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const RenderPlaceholder = () => {
        if (value || readOnly) return;

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
