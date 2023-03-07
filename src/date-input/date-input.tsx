import { useEffect, useReducer, useRef, useState } from "react";
import { useEventListener } from "../hook/useEventListener";
import { Calendar, CalendarAction, FocusType, View } from "../calendar";
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
import { DateInputHelper } from "../util/date-input-helper";

interface CurrentFocusTypes {
    field: FieldType;
    type: FocusType;
    count: number;
}

type ChangeAction = "calendar" | "input";

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
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [changeAction, setChangeAction] = useState<ChangeAction>("calendar");
    const [calendarView, setCalendarView] = useState<View>("default");
    const [currentElement, setCurrentElement] = useState<CurrentFocusTypes>({
        field: "none",
        type: "none",
        count: 0,
    });

    const nodeRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // HOOKS
    // =============================================================================
    const [startDate, dispatchStart] = useReducer(
        dateInputReducer,
        INITIAL_INPUT_VALUES
    );

    const [endDate, dispatchEnd] = useReducer(
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
    // REF FUNCTIONS
    // =============================================================================
    const calendarRef = useRef(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        dispatchStart({ type: "confirmed", value: value });

        if (variant === "range")
            dispatchEnd({ type: "confirmed", value: endValue });
    }, [value, endValue]);

    useEffect(() => {
        if (!calendarOpen) return;

        handleFocusElement();
    }, [startDate, endDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleMouseDown = (event: MouseEvent) => {
        if (disabled || readOnly) return;

        const target = event.target as Element;
        if (nodeRef.current && !nodeRef.current.contains(target)) {
            // outside click
            handleCalendarAction("reset");
            handleBlur();
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === "Escape") {
            handleCalendarAction("reset");
            handleBlur();
        }
    };

    function handleInitEventListener() {
        document.addEventListener("mousedown", handleMouseDown);

        if (nodeRef.current) {
            nodeRef.current.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);

            if (nodeRef.current) {
                nodeRef.current.removeEventListener("keydown", handleKeyDown);
            }
        };
    }

    const handleChange = (value: string, from: ChangeAction) => {
        let isValid = false;

        switch (currentElement.type) {
            case "start":
                isValid = DateInputHelper.validate(value, endDate.selected);
                break;
            case "end":
                isValid = DateInputHelper.validate(startDate.selected, value);
                break;
            default:
                isValid = false;
        }

        // call another reducer to reset the selected value
        if (!isValid) {
            setCurrentElement({ ...currentElement, count: 0 });
            handleReducer("invalid");
        }

        setChangeAction(from);
        handleReducer("selected", value);
    };

    const handleBlur = () => {
        performOnBlurHandler();
    };

    const handleFocus = (value: FieldType) => {
        const type = value.split("-")[0] as FocusType;

        setCalendarOpen(true);

        setCurrentElement({ ...currentElement, field: value, type });
    };

    const handleHoverDayCell = (value: string) => {
        if (!value) {
            handleReducer("default");

            return;
        }

        handleReducer("hover", value);
    };

    const handleCalendarMonthYear = (action: CalendarAction) => {
        if (["month-options", "year-options"].includes(calendarView)) {
            switch (action) {
                case "reset":
                    handleReducer("transition");
                    calendarRef.current.defaultView();
                    // handleFocusElement();
                    // need to refresh calendar view
                    break;
                case "confirmed":
                    calendarRef.current.defaultView();
                    break;
            }
        }
    };

    const handleCalendarAction = (action: CalendarAction) => {
        // month/year view (month/year calendar)
        handleCalendarMonthYear(action);

        if (["month-options", "year-options"].includes(calendarView)) return;

        // default view (day calendar)
        setCalendarOpen(false);

        switch (action) {
            case "reset":
                handleReducer("reset");
                break;
            case "confirmed":
                handleReducer("confirmed");
                break;
        }

        // buggy in mousedown side effect
        // another field value updated after confirmed both value
        // click outside component
        setTimeout(() => {
            setCurrentElement({ field: "none", type: "none", count: 0 });
        }, 1);
    };

    const handleCalendarView = (calendarView: View) => {
        setCalendarView(calendarView);
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
        }

        if (onBlurRaw) {
        }
    };

    const handleReducer = (type: ActionType, value?: string) => {
        let field = currentElement.type as FocusType;

        let isValid = true;

        // closed calendar
        if (["confirmed", "reset"].includes(type)) {
            field = "none";

            isValid = DateInputHelper.validate(
                startDate.selected,
                endDate.selected
            );
        }

        // error, reset both
        if (!isValid) {
            dispatchStart({ type: "invalid" });
            dispatchEnd({ type: "invalid" });

            return;
        }

        // handle month/year view cancel button
        if (type === "transition") {
            dispatchStart({ type: "transition" });
            dispatchEnd({ type: "transition" });

            return;
        }

        switch (field) {
            case "start":
                if (type === "invalid") {
                    dispatchEnd({ type });

                    return;
                }

                dispatchStart({ type, value });

                break;
            case "end":
                if (type === "invalid") {
                    dispatchStart({ type });

                    return;
                }

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
        // stop switching the element if action was "hover" || "default"
        if (
            ["hover", "default"].includes(startDate.currentType) ||
            ["hover", "default"].includes(endDate.currentType)
        )
            return;

        // transtion set for both
        // updated another one element, not skip below logics
        if (
            [startDate.currentType, endDate.currentType].every(
                (name) => name === "transition"
            )
        ) {
            return;
        }

        // stop switching if detect manual input
        if (changeAction === "input") return;

        // stop switching in month/year calendar view
        if (["month-options", "year-options"].includes(calendarView)) return;

        // closed calendar in without buttons mode for single selection
        if (!withButton && variant === "single") {
            setCalendarOpen(false);
            handleReducer("confirmed");
            setCurrentElement({ field: "none", type: "none", count: 0 });

            return;
        }

        // closed calendar in without Buttons mode for range selection
        if (!withButton && currentElement.count >= 1) {
            setCalendarOpen(false);
            handleReducer("confirmed");
            setCurrentElement({ field: "none", type: "none", count: 0 });

            return;
        }

        // stop to switch element
        if (currentElement.count >= 1) return;

        const currentFocus = currentElement.type as FocusType;
        const otherType = currentFocus === "start" ? "end" : "start";
        const otherField = `${otherType}-day` as FieldType;

        setCurrentElement((prev) => ({
            field: otherField,
            type: otherType,
            count: prev.count + 1,
        }));
    };

    // const getFormattedValue = (values: ChangeValueTypes) => {};

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
                        onChange={(event) => handleChange(event, "input")}
                        onFocus={handleFocus}
                        readOnly={readOnly}
                        names={["end-day", "end-month", "end-year"]}
                        value={endDate.input}
                        variant={variant}
                        action={endDate.currentType}
                        isActive={calendarOpen}
                    />
                </>
            );
        }
    };

    return (
        <Container
            ref={nodeRef}
            $disabled={disabled}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            $readOnly={readOnly}
            $variant={variant}
            {...otherProps}
        >
            <StandAloneInput
                disabled={disabled}
                onChange={(event) => handleChange(event, "input")}
                onFocus={handleFocus}
                readOnly={readOnly}
                names={["start-day", "start-month", "start-year"]}
                value={startDate.input}
                variant={variant === "range" ? "start" : "single"}
                action={startDate.currentType}
                isActive={calendarOpen}
            />
            {RenderRangeInput()}
            {RenderIndicatedBar()}
            <Calendar
                ref={calendarRef}
                type="input"
                isOpen={calendarOpen}
                withButton={withButton}
                currentFocus={currentElement.type}
                value={startDate.calendar}
                endValue={endDate.calendar}
                onCalendarView={handleCalendarView}
                onHover={handleHoverDayCell}
                onSelect={(event) => handleChange(event, "calendar")}
                onWithButton={handleCalendarAction}
            />
        </Container>
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid Date";
