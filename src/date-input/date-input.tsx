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

export type InputType = keyof ChangeValueTypes;
type Action = "hover" | "selected" | "confirmed" | undefined;
export type ComponentTypes = "input" | "calendar";

interface DisplayActionTypes {
    start?: Action;
    end?: Action;
}

interface ShowValuesTypes {
    input?: ChangeValueTypes;
    calendar?: ChangeValueTypes;
    action?: DisplayActionTypes;
}

interface InputValueTypes {
    selected?: ChangeValueTypes;
    hover?: ChangeValueTypes;
    confirmed?: ChangeValueTypes;
}

type CurrentFocusElement = "start" | "end" | "none";

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
    const [inputValues, setInputValues] = useState<InputValueTypes>({});
    const [showValues, setShowValues] = useState<ShowValuesTypes>({});
    const [currentElement, setCurrentElement] =
        useState<CurrentFocusElement>("none");
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);

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
        const data = { start: value, end: endValue };
        const returnValues = { input: data };
        const result = {
            confirmed: data,
            selected: data,
        };

        setInputValues(result);
        setShowValues(returnValues);
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
        }
    };

    const handleChange = (value: string, from: ComponentTypes = "calendar") => {
        const type = currentElement.split("-")[0] as InputType;

        const selectedValues = { ...inputValues.selected, [type]: value };

        setInputValues({ ...inputValues, selected: selectedValues });

        /**
         *  hover value won't update calendar selected value
         */
        switch (from) {
            case "input":
                setShowValues({ ...showValues, input: selectedValues });
                break;
            case "calendar":
                setShowValues({
                    ...showValues,
                    input: selectedValues,
                    calendar: selectedValues,
                });
                break;
            default:
                setShowValues({
                    ...showValues,
                    input: selectedValues,
                    calendar: selectedValues,
                });
        }

        performOnChangeHandler(selectedValues);

        handleFocusElement();
    };

    const handleBlur = () => {
        // buggy here, if selected date from calendar, need to think how to set to "none" after blur;
        performOnBlurHandler();
        console.log("handleBlur container");
    };

    const handleFocus = (value: FieldType) => {
        const currentElement = value.split("-")[0] as InputType | "none";

        setCurrentElement(currentElement);

        handleIsOpenCalendar(true);
    };

    const handleHoverDayCell = (value: string) => {
        setInputValues({
            ...inputValues,
            hover: {
                ...inputValues.hover,
                [currentElement]: value,
            },
        });

        updateShowValue(value);
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
            const returnValue = getFormattedValue(inputValues.confirmed);

            onBlur(returnValue);
        }

        if (onBlurRaw) {
            const rawInputValues = getFormattedRawValue();

            onBlurRaw(rawInputValues);
        }
    };

    const handleFocusElement = () => {
        if (variant !== "range") return;

        if (currentElement === "start") {
            setCurrentElement("end");

            // reset action value
            setShowValues({
                ...showValues,
                action: {
                    start: undefined,
                },
            });
        } else if (currentElement === "end" && !inputValues.selected?.start) {
            setCurrentElement("start");

            // reset action value
            setShowValues({
                ...showValues,
                action: {
                    end: undefined,
                },
            });
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
        const arrayValues = Object.entries(inputValues.selected);

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

    const updateShowValue = (value: string) => {
        const otherField = currentElement === "start" ? "end" : "start";

        const result = {
            start: "",
            end: "",
        };

        const action = {
            start: undefined,
            end: undefined,
        };

        const { selected, confirmed } = inputValues;

        /**
         *  highest to lowest order in display value
         *  1. hover
         *  2. selected value
         *  3. confirmed value if selected value null
         */
        const currentFieldValue = selected[currentElement]?.length
            ? selected[currentElement]
            : confirmed[currentElement];

        const otherFieldValue = selected[otherField]?.length
            ? selected[otherField]
            : confirmed[otherField];

        if (value.length) {
            // on hover
            result[currentElement] = value;
            action[currentElement] = "hover";
        } else if (value === "" || !value) {
            // hover out container
            result[currentElement] = currentFieldValue;
            action[currentElement] = "selected";
        }

        result[otherField] = otherFieldValue;

        setShowValues({
            ...showValues,
            input: result,
            action,
        });
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const RenderIndicatedBar = () => {
        if (variant === "single" || disabled || readOnly) return;

        return <IndicateBar $position={currentElement} />;
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
                        value={showValues.input?.end}
                        variant={variant}
                        action={showValues?.action?.end}
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
                value={showValues.input?.start}
                variant={variant === "range" ? "start" : "single"}
                action={showValues?.action?.start}
            />
            {RenderRangeInput()}
            {RenderIndicatedBar()}
            <Calendar
                type="input"
                isOpen={calendarOpen}
                withButton={withButton}
                currentFocus={currentElement}
                value={showValues.calendar?.start}
                endValue={showValues.calendar?.end}
                onSelect={handleChange}
                onHover={handleHoverDayCell}
            />
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid Date";
