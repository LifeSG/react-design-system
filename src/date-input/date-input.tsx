import { useEffect, useReducer, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
    CalendarAction,
    CalendarRef,
    FocusType,
    InternalCalendar,
    View,
} from "../shared/internal-calendar";
import { MediaWidths } from "../spec/media-spec";
import { DateInputHelper } from "../util/date-input-helper";
import { useEventListener } from "../util/use-event-listener";
import {
    ActionType,
    INITIAL_INPUT_VALUES,
    ReducerState,
    dateInputReducer,
} from "./date-input-reducer";
import {
    ArrowRangeIcon,
    ArrowRight,
    Container,
    IndicateBar,
} from "./date-input.style";
import { FieldType, INVALID_VALUE, StandAloneInput } from "./stand-alone-input";
import { ChangeValueTypes, DateInputProps } from "./types";

interface CurrentFocusTypes {
    field: FieldType;
    type: FocusType;
    count: number;
}

export type ActionComponent = "calendar" | "input";

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
    withButton: _withButton = true,
    readOnly,
    id,
    variant = "single",
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [actionComponent, setActionComponent] =
        useState<ActionComponent>("calendar");
    const [calendarView, setCalendarView] = useState<View>("default");
    const [currentElement, setCurrentElement] = useState<CurrentFocusTypes>({
        field: "none",
        type: "none",
        count: 0,
    });
    const [isError, setIsError] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<CalendarRef>();
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // show button if it is mobile view
    const withButton = _withButton || isMobile;

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
     * Allows effect below to always get latest state value
     * Reference:
     * https://stackoverflow.com/questions/65125665/new-event-doesnt-have-latest-state-value-updated-by-previous-event
     */

    useEventListener("keydown", handleKeyDown, nodeRef.current);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        // inital mounted value
        dispatchStart({ type: "confirmed", value: value });

        if (variant === "range")
            dispatchEnd({ type: "confirmed", value: endValue });
    }, []);

    useEffect(() => {
        dispatchStart({ type: "selected", value: value });

        if (variant === "range") {
            dispatchEnd({ type: "selected", value: endValue });
        }
    }, [value, endValue]);

    useEffect(() => {
        const controller = new AbortController();

        // reset back 'default' action from unhover
        if ([startDate.currentType, endDate.currentType].includes("unhover")) {
            const handleDefaultReducer = async () => {
                await DateInputHelper.sleep(250, controller);
                handleReducer("default");
            };

            handleDefaultReducer();
        }

        return () => {
            controller.abort();
        };
    }, [startDate.currentType, endDate.currentType]);

    useEffect(() => {
        if (variant === "single") return;
        if (currentElement.type === "none") return;

        // update count via manual input
        setCurrentElement((prev) => ({
            ...currentElement,
            count: prev.count + 1,
        }));
    }, [currentElement.type]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    function handleKeyDown(event: KeyboardEvent) {
        if (event.code === "Escape") {
            handleCalendarAction("reset");
        }

        if (event.code === "Enter" && variant === "range" && !withButton) {
            const hasValue = [startDate.selected, endDate.selected].every(
                Boolean
            );

            if (!hasValue) {
                handleCalendarAction("reset");
            } else {
                handleCalendarAction("confirmed");
            }
        }
    }

    const handleChange = (value: string, from: ActionComponent) => {
        if (value === INVALID_VALUE || value === "") {
            // update state/calendar
            if (value === "") {
                handleReducer("selected", value);
            }

            return;
        }
        const isValid = handleValidation(value);

        handleReducer("selected", value);

        setIsError(!isValid);
        setActionComponent(from);
        handleFocusElement(isValid, from, value);
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

    const handleCalendarAction = (buttonAction: CalendarAction) => {
        if (["month-options", "year-options"].includes(calendarView)) {
            // handle button in month/year calendar view
            handleMonthYearCalendarAction();

            return;
        }

        // handle button in day calendar view
        switch (buttonAction) {
            case "reset":
                handleReducer("reset");
                break;
            case "confirmed":
                if (isError) {
                    handleReducer("reset");
                    break;
                }

                handleReducer("confirmed");
                performOnChangeHandler();
                break;
        }

        setCurrentElement({
            field: "none",
            type: "none",
            count: 0,
        });

        setCalendarOpen(false);
    };

    const handleMonthYearCalendarAction = () => {
        calendarRef.current.defaultView();
    };

    const handleCalendarView = (calendarView: View) => {
        setCalendarView(calendarView);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnChangeHandler = (changeValue?: string) => {
        const focusType = currentElement.type as FocusType;
        const returnValue: ChangeValueTypes = {
            start: startDate.selected,
            end: endDate.selected,
        };

        // Update the specific field value.
        // - only use in without button
        if (changeValue) {
            returnValue[focusType] = changeValue;
        }

        if (variant === "single") delete returnValue.end;

        if (onChange) {
            onChange(returnValue);
        }

        if (onChangeRaw) {
            const returnRawValue =
                DateInputHelper.getFormattedRawValue(returnValue);

            onChangeRaw(returnRawValue);
        }
    };

    const performOnBlurHandler = (
        startDate: ReducerState,
        endDate: ReducerState
    ) => {
        const returnValue = {
            start: startDate.confirmed,
            end: endDate.confirmed,
        };

        if (variant === "single") delete returnValue.end;

        if (onBlur) {
            onBlur(returnValue);
        }

        if (onBlurRaw) {
            const returnRawValue =
                DateInputHelper.getFormattedRawValue(returnValue);

            onBlurRaw(returnRawValue);
        }
    };

    const handleBlurContainer = (event: React.FocusEvent<HTMLDivElement>) => {
        if (nodeRef && !nodeRef.current.contains(event.relatedTarget)) {
            handleReducer("reset");

            setCurrentElement({
                field: "none",
                type: "none",
                count: 0,
            });

            performOnBlurHandler(startDate, endDate);
            setCalendarOpen(false);
            setIsError(false);
        }
    };

    const handleValidation = (value: string): boolean => {
        let isValid = true;

        const values = {
            start: startDate.selected,
            end: endDate.selected,
        };

        // Update the specific field value
        values[currentElement.type] = value;

        if (variant === "range") {
            switch (currentElement.type) {
                case "start":
                    isValid = DateInputHelper.validate(
                        value,
                        values.end,
                        disabledDates,
                        between
                    );
                    break;
                case "end":
                    isValid = DateInputHelper.validate(
                        values.start,
                        value,
                        disabledDates,
                        between
                    );
                    break;
            }
        } else if (variant === "single") {
            isValid = DateInputHelper.validateSingle(
                value,
                disabledDates,
                between
            );
        }

        return isValid;
    };

    const handleReducer = (type: ActionType, value?: string) => {
        let field = currentElement.type as FocusType;

        let isValid = true;

        // closed calendar action
        if (["confirmed", "reset"].includes(type)) {
            field = "none"; // set to default

            // validation
            if (withButton && variant === "range") {
                isValid = DateInputHelper.validate(
                    startDate.selected,
                    endDate.selected,
                    disabledDates,
                    between
                );
            }
        }

        // error status, reset both
        if (!isValid) {
            dispatchStart({ type: "reset" });
            dispatchEnd({ type: "reset" });
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

    const handleFocusElement = (
        isValid: boolean,
        from: ActionComponent,
        value?: string
    ) => {
        // input invalid value
        if (variant === "range" && !isValid) {
            const { field: otherField, type: otherType } = getAnotherElement();

            setCurrentElement({
                field: otherField,
                type: otherType,
                count: 1,
            });

            // blank other element input value
            handleReducer("invalid");
        }

        // stop switch if detect selected in calendar month/year view
        if (["month-options", "year-options"].includes(calendarView)) return;

        // closed calendar in without button calendar if it
        // - after selection in single value calendar
        // - both valid value in range selection
        if (
            (!withButton && variant === "single" && isValid) ||
            (!withButton &&
                variant === "range" &&
                currentElement.count >= 2 &&
                isValid)
        ) {
            setCalendarOpen(false);
            handleReducer("confirmed");
            performOnChangeHandler(value);
            setCurrentElement({
                field: "none",
                type: "none",
                count: 0,
            });
            return;
        }

        // stop to switch element in with button
        if (currentElement.count >= 2) return;

        // calendar selection swap to another element
        if (from === "calendar" && variant === "range") {
            const { field: otherField, type: otherType } = getAnotherElement();

            setCurrentElement((prev) => ({
                field: otherField,
                type: otherType,
                count: prev.count + 1,
            }));
        }
    };

    const getAnotherElement = (): Omit<CurrentFocusTypes, "count"> => {
        const currentFocus = currentElement.type as FocusType;
        const otherType = currentFocus === "start" ? "end" : "start";
        const otherField = `${otherType}-day` as FieldType;

        return {
            field: otherField,
            type: otherType,
        };
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderIndicateBar = () => {
        if (variant === "single" || disabled || readOnly) return;

        return <IndicateBar $position={currentElement.type || "none"} />;
    };

    const renderRangeInput = () => {
        if (variant === "range") {
            return (
                <>
                    <ArrowRangeIcon tabIndex={-1}>
                        <ArrowRight />
                    </ArrowRangeIcon>
                    <StandAloneInput
                        disabled={disabled}
                        onChange={(value) => handleChange(value, "input")}
                        onFocus={handleFocus}
                        readOnly={readOnly}
                        focused={currentElement.type === "end"}
                        names={["end-day", "end-month", "end-year"]}
                        value={endDate.input}
                        confirmedValue={endDate.confirmed}
                        variant={variant}
                        action={endDate.currentType}
                        focusType={currentElement.type}
                        isOpen={calendarOpen}
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
            onBlur={handleBlurContainer}
            tabIndex={-1}
            {...otherProps}
        >
            <StandAloneInput
                disabled={disabled}
                onChange={(value) => handleChange(value, "input")}
                onFocus={handleFocus}
                readOnly={readOnly}
                focused={currentElement.type === "start"}
                names={["start-day", "start-month", "start-year"]}
                value={startDate.input}
                confirmedValue={startDate.confirmed}
                variant={variant === "range" ? "start" : "single"}
                action={startDate.currentType}
                focusType={currentElement.type}
                isOpen={calendarOpen}
            />
            {renderRangeInput()}
            {renderIndicateBar()}
            <InternalCalendar
                ref={calendarRef}
                type="input"
                disabledDates={disabledDates}
                isOpen={calendarOpen}
                withButton={withButton}
                actionComponent={actionComponent}
                currentFocus={currentElement.type}
                value={startDate.calendar}
                endValue={endDate.calendar}
                between={between}
                variant={variant}
                onCalendarView={handleCalendarView}
                onHover={handleHoverDayCell}
                onSelect={(value) => handleChange(value, "calendar")}
                onDismiss={handleCalendarAction}
            />
        </Container>
    );
};
