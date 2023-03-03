import { useEffect, useRef, useState } from "react";
import { useEventListener } from "../hook/useEventListener";
import { Calendar, CalendarAction } from "../calendar";
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
export type ComponentTypes = "input" | "calendar";
type Action = "hover" | "selected" | "confirmed" | undefined;
type CurrentType = "start" | "end" | "none";

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

interface CurrentFocusTypes {
    field?: FieldType;
    type?: CurrentType;
}

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
    const [inputValues, setInputValues] =
        useState<InputValueTypes>(INITIAL_INPUT_VALUES);
    const [showValues, setShowValues] = useState<ShowValuesTypes>({});

    const [currentElement, setCurrentElement] = useState<CurrentFocusTypes>({});
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    /**
     * Add handler function as dependencies of useEffect
     * Allows our effect below to always get latest state value
     * Reference:
     * https://stackoverflow.com/questions/65125665/new-event-doesnt-have-latest-state-value-updated-by-previous-event
     */
    useEventListener("mousedown", handleInitEventListener);

    useEffect(() => {
        const data = { start: value, end: endValue };
        const returnShowValue = {
            ...INITIAL_SHOW_VALUES,
            input: data,
            calendar: data,
        };
        const returnInputValue = {
            ...INITIAL_INPUT_VALUES,
            confirmed: data,
            selected: data,
        };

        setInputValues(returnInputValue);
        setShowValues(returnShowValue);
    }, [value, endValue]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMouseDown = (event: MouseEvent) => {
        if (disabled || readOnly) return;

        const target = event.target as Element;
        if (nodeRef.current && !nodeRef.current.contains(target)) {
            // outside click
            handleCalendarAction("cancel");
            handleBlur();
        }
    };

    function handleInitEventListener() {
        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }

    const handleChange = (value: string) => {
        const selectedValues = {
            ...inputValues.selected,
            [currentElement.type]: value,
        };

        setShowValues({
            ...INITIAL_SHOW_VALUES,
            input: selectedValues,
            calendar: selectedValues,
        });

        setInputValues({ ...inputValues, selected: selectedValues });

        performOnChangeHandler(selectedValues);

        console.log("called handleChange", selectedValues);

        // handleFocusElement();
    };

    // console.log("input :>> ", inputValues);
    // console.log("show :>> ", showValues);

    const handleBlur = () => {
        performOnBlurHandler();
        console.log("handleBlur container");
    };

    const handleFocus = (value: FieldType) => {
        const type = value.split("-")[0] as CurrentType;

        setCurrentElement({ field: value, type });

        handleIsOpenCalendar(true);
    };

    const handleHoverDayCell = (value: string) => {
        setInputValues({
            ...inputValues,
            hover: {
                ...inputValues.hover,
                [currentElement.type]: value,
            },
        });

        updateShowValue(value);
    };

    const handleCalendarAction = (action: CalendarAction) => {
        setCalendarOpen(false);

        const { confirmed, selected } = inputValues;

        switch (action) {
            case "cancel":
                // restore confirmed value
                setShowValues({
                    ...INITIAL_SHOW_VALUES,
                    input: confirmed,
                    calendar: confirmed,
                });

                setInputValues({
                    ...INITIAL_INPUT_VALUES,
                    confirmed: confirmed,
                    selected: confirmed,
                });

                // update the indicate bar
                setCurrentElement({ field: "none", type: "none" });

                break;
            case "done":
                setInputValues({
                    ...inputValues,
                    confirmed: selected,
                });
                break;
        }
    };

    const handleIsOpenCalendar = (value: boolean) => {
        setCalendarOpen(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnChangeHandler = (values: ChangeValueTypes) => {
        if (onChange) {
            onChange(values);
        }

        if (onChangeRaw) {
            const rawInputValues = getFormattedRawValue(values);

            onChangeRaw(rawInputValues);
        }
    };

    const performOnBlurHandler = () => {
        // buggy in getFormattedValue fn return invalid
        if (onBlur) {
            // onBlur(returnValue);
        }

        if (onBlurRaw) {
            // const rawInputValues = getFormattedRawValue();
            // onBlurRaw(rawInputValues);
        }
    };

    const handleFocusElement = () => {
        if (variant !== "range") return;

        const currentType = currentElement.type;

        if (currentType === "start") {
            setCurrentElement({ field: "end-day", type: "end" });

            // reset action value
            setShowValues({
                ...showValues,
                action: {
                    start: undefined,
                },
            });
        } else if (currentType === "end" && !inputValues.selected?.start) {
            setCurrentElement({ field: "end-day", type: "end" });

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
        // const result = Object.keys(values).reduce((_, cur) => {
        //     const valueArr = Object.values(values[cur]) as any;
        //     if (
        //         valueArr[0].length === 4 &&
        //         valueArr[1].length >= 1 &&
        //         valueArr[2].length >= 1
        //     ) {
        //         const clampedMonth = DateHelper.clampMonth(valueArr[1]);
        //         const day = StringHelper.padValue(
        //             DateHelper.clampDay(valueArr[2], clampedMonth, valueArr[0])
        //         );
        //         const month = StringHelper.padValue(clampedMonth);
        //         const value = `${valueArr[0]}-${month}-${day}`;
        //         return { [cur]: value };
        //     } else if (valueArr.every((value) => value === "")) {
        //         return { [cur]: "" };
        //     } else {
        //         return { [cur]: INVALID_VALUE };
        //     }
        // }, {});
        // return result;
    };

    const getFormattedRawValue = (values: ChangeValueTypes): RawInputValues => {
        const keys = Object.keys(values);

        const result = keys.reduce((acc, key) => {
            if (acc[key] == null) acc[key] = {};

            if (!values[key]) {
                acc[key] = { year: "", month: "", day: "" };

                return acc;
            }

            const [year, month, day] = values[key].split("-");

            acc[key] = {
                year,
                month,
                day,
            };

            return acc;
        }, {});

        return result;
    };

    const updateShowValue = (value: string) => {
        const currentField = currentElement.type;
        const otherField = currentField === "start" ? "end" : "start";

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
         *  highest to lowest order in the date input value
         *  1. hover
         *  2. selected value
         *  3. confirmed value if selected value null
         */
        const currentFieldValue = selected[currentField]?.length
            ? selected[currentField]
            : confirmed[currentField];

        const otherFieldValue = selected[otherField]?.length
            ? selected[otherField]
            : confirmed[otherField];

        if (value.length) {
            // on hover
            result[currentField] = value;
            action[currentField] = "hover";
        } else if (value === "" || !value) {
            // hover out container
            result[currentField] = currentFieldValue;
            action[currentField] = undefined;
        }

        result[otherField] = otherFieldValue;

        setShowValues({
            ...showValues,
            input: result,
            action,
        });
    };

    // console.log("show ", showValues);
    // console.log("input ", inputValues);

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const RenderIndicatedBar = () => {
        if (variant === "single" || disabled || readOnly) return;

        return <IndicateBar $position={currentElement.type || "none"} />;
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
                        isActive={calendarOpen}
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
                isActive={calendarOpen}
            />
            {RenderRangeInput()}
            {RenderIndicatedBar()}
            <Calendar
                type="input"
                isOpen={calendarOpen}
                withButton={withButton}
                currentFocus={currentElement.type}
                value={showValues.calendar?.start}
                endValue={showValues.calendar?.end}
                onSelect={handleChange}
                onHover={handleHoverDayCell}
                onWithButton={handleCalendarAction}
            />
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid Date";
const BASE_VALUES = { start: "", end: "" };

const INITIAL_INPUT_VALUES: InputValueTypes = {
    selected: BASE_VALUES,
    hover: BASE_VALUES,
    confirmed: BASE_VALUES,
};

const INITIAL_SHOW_VALUES: ShowValuesTypes = {
    input: BASE_VALUES,
    calendar: BASE_VALUES,
    action: { start: undefined, end: undefined },
};
