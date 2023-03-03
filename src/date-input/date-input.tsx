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
    field?: FieldType | undefined;
    type?: FocusType | undefined;
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

        if (variant === "range")
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
        handleReducer(currentElement.type, "selected", value);
    };

    const handleBlur = () => {
        performOnBlurHandler();
    };

    const handleFocus = (value: FieldType) => {
        const type = value.split("-")[0] as FocusType;

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
            case "reset":
                handleReducer("none", "reset");

                // update the indicate bar
                setCurrentElement({ field: "none", type: "none" });

                break;
            case "confirmed":
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
        }

        if (onBlurRaw) {
        }
    };

    const handleReducer = (
        field: FocusType,
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
    );
};

// =============================================================================
// CONSTANTS
// =============================================================================
const INVALID_VALUE = "Invalid Date";
