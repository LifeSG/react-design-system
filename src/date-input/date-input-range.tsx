import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { FocusToTypes } from "src/date-picker";
import { StringHelper } from "src/util/string-helper";
import {
    InputRangeArrow,
    InputRangeContainer,
    InputRangeWrapper,
} from "./date-input-range.style";
import { BaseInput, Divider, MonthInput, YearInput } from "./date-input.style";
import { DateInputRangeProps, RangeElementRef } from "./types";

export type RangeFieldType =
    | "range-day"
    | "range-month"
    | "range-year"
    | "none";

export const Component = (
    {
        onChange,
        rangeValue,
        type,
        setIsOpenCalendar,
        setFocusTo,
        setTransitionValue,
        transitionValues,
        focusTo,
        hoverValue,
    }: DateInputRangeProps,
    ref: RangeElementRef
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const [rangeDayValue, _setRangeDayValue] = useState<string>("");
    const [rangeMonthValue, _setRangeMonthValue] = useState<string>("");
    const [rangeYearValue, _setRangeYearValue] = useState<string>("");
    const [rangeCurrentFocus, _setRangeCurrentFocus] =
        useState<RangeFieldType>("none");
    const [calendarManualRangeInput, setCalendarManualRangeInput] =
        useState<string>("");

    const rangeDayInputRef = useRef<HTMLInputElement>(null);
    const rangeMonthInputRef = useRef<HTMLInputElement>(null);
    const rangeYearInputRef = useRef<HTMLInputElement>(null);

    const rangeDayValueStateRef = useRef<string>(rangeDayValue);
    const rangeMonthValueStateRef = useRef<string>(rangeMonthValue);
    const rangeYearValueStateRef = useRef<string>(rangeYearValue);
    const rangeCurrentFocusStateRef = useRef<RangeFieldType>(rangeCurrentFocus);

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================
    const setRangeDayValue = (data: string) => {
        rangeDayValueStateRef.current = data;
        _setRangeDayValue(data);
    };

    const setRangeMonthValue = (data: string) => {
        rangeMonthValueStateRef.current = data;
        _setRangeMonthValue(data);
    };

    const setRangeYearValue = (data: string) => {
        rangeYearValueStateRef.current = data;
        _setRangeYearValue(data);
    };

    const setRangeCurrentFocus = (data: RangeFieldType) => {
        rangeCurrentFocusStateRef.current = data;
        _setRangeCurrentFocus(data);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown);

        const nodeRef = ref as React.RefObject<HTMLDivElement>;

        if (nodeRef && nodeRef.current) {
            nodeRef.current.addEventListener("keydown", handleRangeNodeKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);

            if (nodeRef && nodeRef.current) {
                nodeRef.current.removeEventListener(
                    "keydown",
                    handleRangeNodeKeyDown
                );
            }
        };
    }, [rangeCurrentFocus]);

    useEffect(() => {
        formatDisplayValues(rangeValue);
    }, [rangeValue]);

    useEffect(() => {
        // sync up with manual input state
        if (transitionValues)
            setCalendarManualRangeInput(transitionValues.range);
    }, [transitionValues]);

    useEffect(() => {
        if (calendarManualRangeInput.length === 10) {
            // handle after confirm and manual input the value state
            setTransitionValue({
                ...transitionValues,
                range: calendarManualRangeInput,
                rangeStatus: "pre-confirmed",
            });
        }
    }, [calendarManualRangeInput]);

    useEffect(() => {
        // auto focus feature
        const [yyyy, mm, dd] = calendarManualRangeInput.split("-");
        if (
            rangeCurrentFocus === "range-day" &&
            rangeDayInputRef.current &&
            dd &&
            dd.length === 2
        ) {
            rangeMonthInputRef.current.focus();
        }

        if (
            rangeCurrentFocus === "range-month" &&
            rangeYearInputRef.current &&
            mm &&
            mm.length === 2
        ) {
            rangeYearInputRef.current.focus();
        }
    }, [calendarManualRangeInput]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setRangeCurrentFocus(event.target.name as RangeFieldType);
        event.target.select();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name as RangeFieldType;

        const value = event.target.value.replace(/[^0-9]/g, "");

        switch (targetName) {
            case "range-day":
                onChangeManualRangeInput(value);
                performOnChangeHandler(value, targetName);
                break;
            case "range-month":
                onChangeManualRangeInput(value);
                performOnChangeHandler(value, targetName);
                break;
            case "range-year":
                onChangeManualRangeInput(value);
                performOnChangeHandler(value, targetName);
                break;
            default:
                break;
        }
    };

    const handleRangeNodeKeyDown = (event: KeyboardEvent) => {
        if (
            rangeDayInputRef &&
            (event.target as any).name === "range-year" &&
            event.code === "Tab"
        ) {
            const startInputContainer = rangeDayInputRef.current.parentElement
                .parentElement.previousSibling
                .previousSibling as HTMLDivElement;

            if (startInputContainer) {
                startInputContainer.click();

                const startPlaceholder =
                    startInputContainer.parentElement.parentElement.querySelector(
                        '[data-id="start"]'
                    ) as HTMLDivElement;

                startPlaceholder.click();
            }

            setRangeCurrentFocus("none");
        }
    };

    const handleRangeNodeClick = async (
        event: React.MouseEvent<HTMLDivElement>
    ): Promise<void> => {
        event.stopPropagation();

        await setIsOpenCalendar(true);
        setFocusTo((prev: FocusToTypes) => ({
            container: "range",
            countToEvenClose: prev.countToEvenClose,
        }));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        /**
         * Allow going to the field before if user presses Backspace
         * on an empty field
         */
        if (event.code === "Backspace" || event.key === "Backspace") {
            if (
                rangeCurrentFocus === "range-month" &&
                calendarManualRangeInput.length &&
                calendarManualRangeInput.split("-")[1].length === 0
            ) {
                rangeDayInputRef.current.focus();
            }

            if (
                rangeCurrentFocus === "range-year" &&
                calendarManualRangeInput.length &&
                calendarManualRangeInput.split("-")[0].length === 0
            ) {
                rangeMonthInputRef.current.focus();
            }
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const handleMouseDown = (event: MouseEvent) => {
        if (
            ref &&
            (ref as MutableRefObject<HTMLDivElement>).current.contains(
                event.target as Element
            )
        ) {
            // inside click
            return;
        }
        // outside click
        if (rangeCurrentFocusStateRef.current !== "none") {
            setRangeCurrentFocus("none");
        }
    };

    const onChangeManualRangeInput = (value: string) => {
        setCalendarManualRangeInput((prev) => {
            let [yyyy, mm, dd] = prev.split("-");
            let range = "";

            if (!yyyy) yyyy = "";
            if (!mm) mm = "";
            if (!dd) dd = "";

            if (rangeCurrentFocus === "range-year")
                range = `${value}-${mm}-${dd}`;
            if (rangeCurrentFocus === "range-month")
                range = `${yyyy}-${value}-${dd}`;
            if (rangeCurrentFocus === "range-day")
                range = `${yyyy}-${mm}-${value}`;

            return range;
        });
    };

    const formatDisplayValues = (value: string) => {
        if (value === undefined || value === "") {
            setRangeDayValue("");
            setRangeMonthValue("");
            setRangeYearValue("");
        } else {
            const date = new Date(value);
            if (!isNaN(date.getTime())) {
                // Valid value
                const day = date.getDate();
                const month = date.getMonth() + 1; // returns as an index
                const year = date.getFullYear();

                setRangeDayValue(StringHelper.padValue(day.toString()));
                setRangeMonthValue(StringHelper.padValue(month.toString()));
                setRangeYearValue(year.toString());
            }
        }
    };

    const performOnChangeHandler = (
        changeValue: string,
        field: RangeFieldType
    ) => {
        if (onChange) {
            /*  
                use calendarManualRangeInput instead "stateValue", 
                stateValue is a confirmed state in calendar 
            */
            const [yyyy, mm, dd] = calendarManualRangeInput.split("-");
            const calendarManualRaw = [
                ...(field === "range-day" ? [changeValue] : [dd]),
                ...(field === "range-month" ? [changeValue] : [mm]),
                ...(field === "range-year" ? [changeValue] : [yyyy]),
            ];

            const returnValue = calendarManualRaw.join("-");
            onChange(returnValue);
        }
    };

    return (
        <>
            <InputRangeArrow type="arrow-right" />
            <InputRangeWrapper ref={ref} onClick={handleRangeNodeClick}>
                <InputRangeContainer
                    type={type}
                    isTransition={
                        !!hoverValue.length && focusTo.container === "range"
                    }
                >
                    <BaseInput
                        name="range-day"
                        maxLength={2}
                        value={
                            hoverValue.length && focusTo.container === "range"
                                ? hoverValue.split("-")[2]
                                : calendarManualRangeInput.length &&
                                  rangeCurrentFocus !== "none"
                                ? calendarManualRangeInput.split("-")[2]
                                : transitionValues.rangeStatus ===
                                  "pre-confirmed"
                                ? transitionValues.range.split("-")[2] || ""
                                : rangeDayValue
                        }
                        ref={rangeDayInputRef}
                        onFocus={handleFocus}
                        onChange={handleChange}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{2}"
                        data-testid="range-day-input"
                        aria-label="range-day-input"
                        autoComplete={"off"}
                        placeholder={
                            rangeCurrentFocus === "range-day" ? "" : "DD"
                        }
                    />
                    <Divider $hide={rangeDayValue.length === 0}>/</Divider>
                    <MonthInput
                        name="range-month"
                        maxLength={2}
                        value={
                            hoverValue.length && focusTo.container === "range"
                                ? hoverValue.split("-")[1]
                                : calendarManualRangeInput.length &&
                                  rangeCurrentFocus !== "none"
                                ? calendarManualRangeInput.split("-")[1]
                                : transitionValues.rangeStatus ===
                                  "pre-confirmed"
                                ? transitionValues.range.split("-")[1] || ""
                                : rangeMonthValue
                        }
                        ref={rangeMonthInputRef}
                        onFocus={handleFocus}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{2}"
                        data-testid="month-input"
                        aria-label="month-input"
                        autoComplete={"off"}
                        placeholder={
                            rangeCurrentFocus === "range-month" ? "" : "MM"
                        }
                    />
                    <Divider $hide={rangeMonthValue.length === 0}>/</Divider>
                    <YearInput
                        name="range-year"
                        maxLength={4}
                        value={
                            hoverValue.length && focusTo.container === "range"
                                ? hoverValue.split("-")[0]
                                : calendarManualRangeInput.length &&
                                  rangeCurrentFocus !== "none"
                                ? calendarManualRangeInput.split("-")[0]
                                : transitionValues.rangeStatus ===
                                  "pre-confirmed"
                                ? transitionValues.range.split("-")[0] || ""
                                : rangeYearValue
                        }
                        ref={rangeYearInputRef}
                        onFocus={handleFocus}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{4}"
                        data-testid="year-input"
                        aria-label="year-input"
                        autoComplete={"off"}
                        placeholder={
                            rangeCurrentFocus === "range-year" ? "" : "YYYY"
                        }
                    />
                </InputRangeContainer>
            </InputRangeWrapper>
        </>
    );
};

export const DateInputRange = React.forwardRef(Component);
