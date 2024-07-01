import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { StringHelper, useStateRef } from "../../util";
import {
    DayInput,
    Divider,
    InputContainer,
    InputSection,
    MonthInput,
    Placeholder,
    YearInput,
} from "./standalone-date-input.style";

dayjs.extend(customParseFormat);

type StartInputNames = ["start-day", "start-month", "start-year"];
type EndInputNames = ["end-day", "end-month", "end-year"];

export type FieldType =
    | StartInputNames[number]
    | EndInputNames[number]
    | "none";

interface Props {
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    hideInputKeyboard?: boolean | undefined;
    names: StartInputNames | EndInputNames;
    value: string | undefined;
    hoverValue?: string | undefined;
    focused: boolean;
    placeholder?: string | undefined;
    label?: string | undefined;
    onChange: (value: string) => void;
    onFocus?: ((event: React.FocusEvent) => void) | undefined;
    onBlur?: ((valid: boolean) => void) | undefined;
}

export interface StandaloneDateInputRef {
    ref: React.RefObject<HTMLDivElement>;
    resetPlaceholder: () => void;
    resetInput: () => void;
}

export const Component = (
    {
        disabled,
        readOnly,
        names,
        value,
        focused,
        hoverValue,
        placeholder,
        label,
        onChange,
        onFocus,
        onBlur,
        hideInputKeyboard,
    }: Props,
    ref: React.ForwardedRef<StandaloneDateInputRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const inputMode = hideInputKeyboard ? "none" : "numeric";

    const [dayValue, setDayValue, dayValueRef] = useStateRef<string>("");
    const [monthValue, setMonthValue, monthValueRef] = useStateRef<string>("");
    const [yearValue, setYearValue, yearValueRef] = useStateRef<string>("");
    const [currentFocus, setCurrentFocus] = useState<FieldType>("none");
    const [hidePlaceholder, setHidePlaceholder] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);
    const dayInputRef = useRef<HTMLInputElement>(null);
    const monthInputRef = useRef<HTMLInputElement>(null);
    const yearInputRef = useRef<HTMLInputElement>(null);

    const [hoverDayValue, hoverMonthValue, hoverYearValue] =
        parseToInputValues(hoverValue);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const [day = "", month = "", year = ""] = parseToInputValues(value);
        setDayValue(day);
        setMonthValue(month);
        setYearValue(year);
    }, [value]);

    useEffect(() => {
        // clear internal focus state
        if (!focused) {
            setCurrentFocus("none");
        }

        // ensure at least one input is focused
        if (focused) {
            setHidePlaceholder(true);

            if (!nodeRef.current.contains(document.activeElement)) {
                dayInputRef.current.focus();
            }
        }
    }, [focused]);

    useImperativeHandle(
        ref,
        () => ({
            ref: nodeRef,
            resetPlaceholder() {
                setHidePlaceholder(false);
            },
            resetInput() {
                const [day = "", month = "", year = ""] =
                    parseToInputValues(value);
                setDayValue(day);
                setMonthValue(month);
                setYearValue(year);
            },
        }),
        [value]
    );

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSectionClick = () => {
        if (disabled || readOnly) {
            return;
        }

        setHidePlaceholder(true);

        if (!nodeRef.current.contains(document.activeElement)) {
            dayInputRef.current.focus();
        }
    };

    const handleSectionFocus = (event: React.FocusEvent) => {
        if (disabled) {
            return;
        }

        setHidePlaceholder(true);

        if (!focused) {
            onFocus?.(event);
        }
    };

    const handlePlaceholderClick = (event: React.MouseEvent) => {
        event.preventDefault();
        dayInputRef.current?.focus();
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.select();
        const targetName = event.target.name as FieldType;
        setCurrentFocus(targetName);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const [dayName, monthName, yearName] = names;
        const date = {
            [dayName]: dayValueRef.current,
            [monthName]: monthValueRef.current,
            [yearName]: yearValueRef.current,
        };

        const targetName = event.target.name as FieldType;
        const targetValue = date[targetName];

        // pad single digits for day and month inputs

        const paddedValue =
            targetName !== yearName
                ? StringHelper.padValue(targetValue, true)
                : targetValue;

        switch (targetName) {
            case dayName:
                date[dayName] = paddedValue;
                setDayValue(paddedValue);
                break;
            case monthName:
                date[monthName] = paddedValue;
                setMonthValue(paddedValue);
                break;
            case yearName:
            default:
                break;
        }

        const value = `${date[yearName]}-${date[monthName]}-${date[dayName]}`;
        const isValid = dayjs(value, "YYYY-MM-DD", true).isValid();
        const isEmpty = !date[dayName] && !date[monthName] && !date[yearName];
        const isPadded = targetValue !== paddedValue;

        if (isValid && isPadded) {
            onChange(value);
        }

        if (!nodeRef.current.contains(event.relatedTarget)) {
            // entire field was blurred
            setCurrentFocus("none");
            onBlur?.(isEmpty || isValid);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (hoverValue) {
            // do not modify inputs when selecting date from another source
            return;
        }

        const targetName = event.target.name as FieldType;
        const targetValue = event.target.value.replace(/[^0-9]/g, "");

        const date = {
            day: dayValue,
            month: monthValue,
            year: yearValue,
        };

        switch (targetName) {
            case names[0]:
                date.day = targetValue;
                setDayValue(targetValue);
                // auto focus the next input once filled in
                if (targetValue.length === 2) {
                    monthInputRef.current.focus();
                }
                break;
            case names[1]:
                date.month = targetValue;
                setMonthValue(targetValue);
                // auto focus the next input once filled in
                if (targetValue.length === 2) {
                    yearInputRef.current.focus();
                }
                break;
            case names[2]:
                date.year = targetValue;
                setYearValue(targetValue);
                break;
            default:
                break;
        }

        if (!date.day && !date.month && !date.year) {
            onChange("");
            return;
        }

        const value = `${date.year}-${date.month}-${date.day}`;
        const isValid = dayjs(value, "YYYY-MM-DD", true).isValid();

        if (isValid) {
            onChange(value);
        }
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
    // HELPERS
    // =============================================================================
    function parseToInputValues(stringVal: string) {
        if (!stringVal) {
            return [undefined, undefined, undefined];
        } else {
            const day = dayjs(new Date(stringVal));

            if (!day.isValid()) {
                return [undefined, undefined, undefined];
            }

            return [
                StringHelper.padValue(day.date().toString()),
                StringHelper.padValue((day.month() + 1).toString()),
                day.year().toString(),
            ];
        }
    }

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderPlaceholder = () => {
        if (value || readOnly || !placeholder) {
            return;
        }

        return (
            <Placeholder
                $hide={hidePlaceholder}
                $disabled={disabled}
                onMouseDown={handlePlaceholderClick}
            >
                {placeholder}
            </Placeholder>
        );
    };

    return (
        <InputSection
            role="group"
            aria-label={label}
            onClick={handleSectionClick}
            onFocus={handleSectionFocus}
        >
            <InputContainer ref={nodeRef} $hover={!!hoverValue}>
                <DayInput
                    ref={dayInputRef}
                    name={names[0]}
                    maxLength={2}
                    value={hoverDayValue ?? dayValue}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    type="text"
                    inputMode={inputMode}
                    pattern="[0-9]{2}"
                    data-testid={`${names[0]}-input`}
                    aria-label="day"
                    disabled={disabled}
                    readOnly={readOnly}
                    tabIndex={readOnly ? -1 : 0}
                    autoComplete="off"
                    placeholder={
                        currentFocus === names[0] && !readOnly ? "" : "DD"
                    }
                />
                <Divider $inactive={dayValue.length === 0}>/</Divider>
                <MonthInput
                    ref={monthInputRef}
                    name={names[1]}
                    maxLength={2}
                    value={hoverMonthValue ?? monthValue}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    type="text"
                    inputMode={inputMode}
                    pattern="[0-9]{2}"
                    data-testid={`${names[1]}-input`}
                    aria-label="month"
                    disabled={disabled}
                    readOnly={readOnly}
                    tabIndex={readOnly ? -1 : 0}
                    autoComplete="off"
                    placeholder={
                        currentFocus === names[1] && !readOnly ? "" : "MM"
                    }
                />
                <Divider $inactive={monthValue.length === 0}>/</Divider>
                <YearInput
                    ref={yearInputRef}
                    name={names[2]}
                    maxLength={4}
                    value={hoverYearValue ?? yearValue}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    type="text"
                    inputMode={inputMode}
                    pattern="[0-9]{4}"
                    data-testid={`${names[2]}-input`}
                    aria-label="year"
                    disabled={disabled}
                    readOnly={readOnly}
                    tabIndex={readOnly ? -1 : 0}
                    autoComplete="off"
                    placeholder={
                        currentFocus === names[2] && !readOnly ? "" : "YYYY"
                    }
                />
            </InputContainer>
            {renderPlaceholder()}
        </InputSection>
    );
};

export const StandaloneDateInput = React.forwardRef(Component);
