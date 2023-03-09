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
    between,
    disabled,
    disabledDates,
    error,
    value,
    endValue,
    onChange,
    onBlur,
    onChangeRaw,
    onBlurRaw,
    withButton = true,
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
        // reset back 'default' action from unhover
        if ([startDate.currentType, endDate.currentType].includes("unhover")) {
            handleDefaultReducer();
        }
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
        let isValid = true;

        if (variant === "range") {
            switch (currentElement.type) {
                case "start":
                    isValid = DateInputHelper.validate(value, endDate.selected);
                    break;
                case "end":
                    isValid = DateInputHelper.validate(
                        startDate.selected,
                        value
                    );
                    break;
                default:
                    isValid = false;
            }
        }

        // call another reducer to reset other selected value
        if (!isValid) {
            setCurrentElement({ ...currentElement, count: 0 });
            handleReducer("invalid");
        }

        setChangeAction(from);
        handleReducer("selected", value);

        handleFocusElement();
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
            handleReducer("unhover");
            return;
        }

        handleReducer("hover", value);
    };

    const handleCalendarAction = (action: CalendarAction) => {
        if (["month-options", "year-options"].includes(calendarView)) {
            switch (action) {
                case "reset":
                    handleReducer("transition");
                    calendarRef.current.defaultView();
                    break;
                case "confirmed":
                    calendarRef.current.defaultView();

                    setCurrentElement((prev): CurrentFocusTypes => {
                        const otherType =
                            currentElement.type === "start" ? "end" : "start";
                        const otherField = `${otherType}-day` as FieldType;

                        return {
                            ...prev,
                            field: otherField,
                            type: otherType,
                            count: 1,
                        };
                    });

                    break;
            }
            return;
        }

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

        setCurrentElement({
            field: "none",
            type: "none",
            count: 0,
        });
    };

    const handleContainerBlur = async (event: KeyboardEvent | any) => {
        if (withButton) return;

        const name = (event.target as any).name as Omit<FieldType, "none">;

        if (variant === "single" && name === "start-year") {
            handleReducer("confirmed");
        }

        if (variant === "range" && name === "end-year") {
            handleReducer("confirmed");
        }
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

        // 'type' for closed calendar
        if (["confirmed", "reset"].includes(type)) {
            field = "none";

            if (variant === "range" && withButton) {
                isValid = DateInputHelper.validate(
                    startDate.selected,
                    endDate.selected
                );
            }
        }

        // error status, reset both
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
        // stop switch if detect manual input
        if (changeAction === "input") return;

        // stop switch if detech selected in month/year view
        if (["month-options", "year-options"].includes(calendarView)) return;

        // closed calendar in without buttons mode for single selection
        if (!withButton && variant === "single") {
            setCalendarOpen(false);
            handleReducer("confirmed");
            setCurrentElement({
                field: "none",
                type: "none",
                count: 0,
            });

            return;
        }

        if (!withButton && currentElement.count >= 1) {
            setCalendarOpen(false);
            handleReducer("confirmed");
            setCurrentElement({
                field: "none",
                type: "none",
                count: 0,
            });

            return;
        }

        // handle single calendar
        if (variant === "single" && withButton) return;

        // stop to switch element
        if (currentElement.count >= 1) return;

        const currentFocus = currentElement.type as FocusType;
        const otherType = currentFocus === "start" ? "end" : "start";
        const otherField = `${otherType}-day` as FieldType;

        setCurrentElement((prev) => ({
            ...prev,
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

    const handleDefaultReducer = async () => {
        await DateInputHelper.sleep(100);
        handleReducer("default");
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
            onBlur={handleContainerBlur}
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
                disabledDates={disabledDates}
                isOpen={calendarOpen}
                withButton={withButton}
                currentFocus={currentElement.type}
                currentType={
                    currentElement.type === "start"
                        ? startDate.currentType
                        : endDate.currentType
                }
                value={startDate.calendar}
                endValue={endDate.calendar}
                variant={variant}
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
