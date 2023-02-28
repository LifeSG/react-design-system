import { useEffect, useRef, useState } from "react";
import { Calendar } from "../calendar";
import { DateHelper, StringHelper } from "../util";
import {
    ArrowRangeIcon,
    ArrowRight,
    Container,
    IndicateBar,
} from "./date-input.style";
import { FieldType, StandAloneInput } from "./stand-alone-input";
import { ChangeValueTypes, DateInputProps, RawInputValues } from "./types";

export type InputType = "start" | "end";

export const DateInput = ({
    disabled,
    error,
    value,
    endValue,
    onChange,
    onBlur,
    onChangeRaw,
    onBlurRaw,
    withButton,
    readOnly,
    id,
    variant = "single",
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [inputValues, setInputValues] = useState<ChangeValueTypes>({});
    const [currentFocus, setCurrentFocus] = useState<FieldType>("none");
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);
    console.log("inputValues:", inputValues);
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    useEffect(() => {
        setInputValues({
            start: value,
            end: endValue,
        });
    }, [value, endValue]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMouseDown = (event: MouseEvent) => {
        if (disabled || readOnly) return;

        const target = event.target as Element;

        if (nodeRef.current && !nodeRef.current.contains(target)) {
            // outside click
            setCalendarOpen(false);
            // await handleCancelButton();
        }
    };

    const handleChange = (value: string) => {
        const inputType = currentFocus.split("-")[0] as InputType;

        const returnValue = { ...inputValues, [inputType]: value };

        setInputValues(returnValue);

        performOnChangeHandler(returnValue);
    };

    const handleBlur = () => {
        // buggy here, if selected date from calendar;
        performOnBlurHandler();
        console.log("handleBlur container");
    };

    const handleFocus = (value: FieldType) => {
        setCurrentFocus(value);

        handleIsOpenCalendar(true);
    };

    const handleIsOpenCalendar = (value: boolean) => {
        setCalendarOpen(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnChangeHandler = (values: ChangeValueTypes) => {
        if (onChange) {
            const returnValue = getFormattedValue(values);

            onChange(returnValue);
        }

        if (onChangeRaw) {
            const rawInputValues = getFormattedRawValue();

            onChangeRaw(rawInputValues);
        }
    };

    const performOnBlurHandler = () => {
        if (onBlur) {
            const returnValue = getFormattedValue(inputValues);

            onBlur(returnValue);
        }

        if (onBlurRaw) {
            const rawInputValues = getFormattedRawValue();

            onBlurRaw(rawInputValues);
        }
    };

    const getFormattedValue = (values: ChangeValueTypes) => {
        const result = Object.keys(values).reduce((_, cur) => {
            const valueArr = Object.values(values[cur]) as any;

            if (
                valueArr[0].length === 4 &&
                valueArr[1].length >= 1 &&
                valueArr[2].length >= 1
            ) {
                const clampedMonth = DateHelper.clampMonth(valueArr[1]);

                const day = StringHelper.padValue(
                    DateHelper.clampDay(valueArr[2], clampedMonth, valueArr[0])
                );

                const month = StringHelper.padValue(clampedMonth);

                const value = `${valueArr[0]}-${month}-${day}`;

                return { [cur]: value };
            } else if (valueArr.every((value) => value === "")) {
                return { [cur]: "" };
            } else {
                return { [cur]: INVALID_VALUE };
            }
        }, {});

        return result;
    };

    const getFormattedRawValue = (): RawInputValues => {
        const arrayValues = Object.entries(inputValues);

        const result = arrayValues.reduce((acc, cur) => {
            const key = cur[0];
            const value = cur[1];

            if (acc[key] === null) acc[key] = {};

            if (value) {
                const [year, month, day] = value.split("-");

                acc[key] = {
                    year,
                    month,
                    day,
                };
            }

            return acc;
        }, {});

        return result;
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const RenderIndicatedBar = () => {
        if (disabled || readOnly) return;

        const position = currentFocus.split("-")[0] as InputType | "none";

        return <IndicateBar $position={position} />;
    };

    const RenderRangeInput = () => {
        if (variant === "range") {
            return (
                <>
                    <ArrowRangeIcon tabIndex={-1}>
                        <ArrowRight />
                    </ArrowRangeIcon>
                    <StandAloneInput
                        disabled={disabled}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        readOnly={readOnly}
                        names={["end-day", "end-month", "end-year"]}
                        value={endValue}
                        variant={variant}
                    />
                </>
            );
        }
    };

    return (
        <Container
            ref={nodeRef}
            disabled={disabled}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            $readOnly={readOnly}
            $variant={variant}
            onBlur={handleBlur}
            {...otherProps}
        >
            <StandAloneInput
                disabled={disabled}
                onChange={handleChange}
                onFocus={handleFocus}
                readOnly={readOnly}
                names={["start-day", "start-month", "start-year"]}
                value={value}
                variant={variant === "range" ? "start" : "single"}
            />
            {RenderRangeInput()}
            {RenderIndicatedBar()}
            <Calendar
                type="input"
                isOpen={calendarOpen}
                withButton={withButton}
                onSelect={handleChange}
            />
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid Date";
