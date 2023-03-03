import { useEffect, useReducer, useRef, useState } from "react";
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
import {
    ActionType,
    INITIAL_INPUT_VALUES,
    dateInputReducer,
} from "./dateInputReducer";

export type InputType = keyof ChangeValueTypes;
export type ComponentTypes = "input" | "calendar";
type CurrentType = "start" | "end" | "none";

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
    const [currentElement, setCurrentElement] = useState<CurrentFocusTypes>({});
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // HOOKS
    // =============================================================================
    const [valueStart, dispatchStart] = useReducer(
        dateInputReducer,
        INITIAL_INPUT_VALUES
    );

    const [valueEnd, dispatchEnd] = useReducer(
        dateInputReducer,
        INITIAL_INPUT_VALUES
    );

    /**
     * Add handler function as dependencies of useEffect
     * Allows our effect below to always get latest state value
     * Reference:
     * https://stackoverflow.com/questions/65125665/new-event-doesnt-have-latest-state-value-updated-by-previous-event
     */
    useEventListener("mousedown", handleInitEventListener);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        dispatchStart({ type: "confirmed", value: value });
        dispatchEnd({ type: "confirmed", value: endValue });
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
        // const selectedValues = {
        //     ...inputValues.selected,
        //     [currentElement.type]: value,
        // };

        handleReducer(currentElement.type, "selected", value);

        // performOnChangeHandler(selectedValues);

        // handleFocusElement();
    };

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
        if (!value) {
            handleReducer(currentElement.type, "unhover");
            return;
        }

        handleReducer(currentElement.type, "hover", value);
    };

    const handleCalendarAction = (action: CalendarAction) => {
        setCalendarOpen(false);

        switch (action) {
            case "cancel":
                handleReducer("none", "reset");

                // update the indicate bar
                setCurrentElement({ field: "none", type: "none" });

                break;
            case "done":
                handleReducer("none", "confirmed");

                if (variant === "range") handleReducer("none", "confirmed");

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

    const handleReducer = (
        field: CurrentType,
        type: ActionType,
        value?: string
    ) => {
        switch (field) {
            case "start":
                dispatchStart({ type, value });
                break;
            case "end":
                dispatchEnd({ type, value });
                break;
            case "none":
                dispatchStart({ type, value });

                if (variant === "range") dispatchEnd({ type, value });
                break;
            default:
                dispatchStart({ type, value });

                if (variant === "range") dispatchEnd({ type, value });
                break;
        }
    };

    const handleFocusElement = () => {
        if (variant !== "range") return;

        const currentType = currentElement.type;

        // if (currentType === "start") {
        //     setCurrentElement({ field: "end-day", type: "end" });

        //     // reset action value
        //     setShowValues({
        //         ...showValues,
        //         action: {
        //             start: undefined,
        //         },
        //     });
        // } else if (currentType === "end" && !inputValues.selected?.start) {
        //     setCurrentElement({ field: "end-day", type: "end" });

        //     // reset action value
        //     setShowValues({
        //         ...showValues,
        //         action: {
        //             end: undefined,
        //         },
        //     });
        // }
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
                        value={valueEnd.input}
                        variant={variant}
                        action={valueEnd.currentType}
                        isActive={calendarOpen}
                    />
                </>
            );
        }
    };

    return (
        <>
            <button onClick={() => handleReducer("none", "reset")}>
                reset
            </button>
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
                    value={valueStart.input}
                    variant={variant === "range" ? "start" : "single"}
                    action={valueStart.currentType}
                    isActive={calendarOpen}
                />
                {RenderRangeInput()}
                {RenderIndicatedBar()}
                <Calendar
                    type="input"
                    isOpen={calendarOpen}
                    withButton={withButton}
                    currentFocus={currentElement.type}
                    value={valueStart.calendar}
                    endValue={valueEnd.calendar}
                    onSelect={handleChange}
                    onHover={handleHoverDayCell}
                    onWithButton={handleCalendarAction}
                />
            </Container>
        </>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid Date";
