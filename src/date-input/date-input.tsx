import { useEffect, useReducer, useRef, useState } from "react";
import { useEventListener } from "../hook/useEventListener";
import { Calendar, CalendarAction, FocusType } from "../calendar";
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

interface CurrentFocusTypes {
    field: FieldType;
    type: FocusType;
    count: number;
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
    const [calendarOpen, _setCalendarOpen] = useState<boolean>(false);
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
    const setCalendarOpen = async (boolean: boolean) => {
        if (!boolean) await sleep(350);

        _setCalendarOpen(boolean);
    };

    const handleMouseDown = (event: MouseEvent) => {
        if (disabled || readOnly) return;

        const target = event.target as Element;
        if (nodeRef.current && !nodeRef.current.contains(target)) {
            // outside click
            handleCalendarAction("reset");
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
        // standAloneInput on blur then trigger this
        handleReducer("selected", value);
    };

    const handleBlur = () => {
        performOnBlurHandler();
    };

    const handleFocus = (value: FieldType) => {
        const type = value.split("-")[0] as FocusType;

        handleIsOpenCalendar(true);

        setCurrentElement({ ...currentElement, field: value, type });
    };

    const handleHoverDayCell = (value: string) => {
        if (!value) {
            handleReducer("default");
            return;
        }

        handleReducer("hover", value);
    };

    const handleCalendarAction = (action: CalendarAction) => {
        setCalendarOpen(false);

        switch (action) {
            case "reset":
                handleReducer("reset");
                break;
            case "confirmed":
                handleReducer("confirmed");
                break;
        }

        // update the indicate bar
        setTimeout(() => {
            // buggy side effect in mousedown, trigger useEffect startDate && endDate
            setCurrentElement({ field: "none", type: "none", count: 0 });
        }, 1);
    };

    const handleIsOpenCalendar = (value: boolean) => {
        setCalendarOpen(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

        // closed calendar
        if (["confirmed", "reset"].includes(type)) {
            field = "none";
        }

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

    const handleFocusElementWithButton = () => {
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
    };

    const handleFocusElement = () => {
        // stop switching the element if action was "hover" || "default"
        if (["hover", "default"].includes(startDate.currentType)) {
            return;
        }

        // stop switching the element if action was "hover" || "default"
        if (["hover", "default"].includes(endDate.currentType)) {
            return;
        }

        handleFocusElementWithButton();

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
                        onChange={handleChange}
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
                onChange={handleChange}
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
                type="input"
                isOpen={calendarOpen}
                withButton={withButton}
                currentFocus={currentElement.type}
                value={startDate.calendar}
                endValue={endDate.calendar}
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
