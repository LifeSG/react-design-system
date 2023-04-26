import { useEffect, useReducer, useRef, useState } from "react";
import { Calendar, CalendarAction, FocusType, View } from "../calendar";
import {
    ArrowRangeIcon,
    ArrowRight,
    Container,
    IndicateBar,
} from "./date-input.style";
import { FieldType, INVALID_VALUE, StandAloneInput } from "./stand-alone-input";
import { ChangeValueTypes, DateInputProps } from "./types";
import {
    ActionType,
    INITIAL_INPUT_VALUES,
    ReducerState,
    dateInputReducer,
} from "./date-input-reducer";
import { DateInputHelper } from "../util/date-input-helper";
import { useEventListener } from "../util/use-event-listener";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../spec/media-spec";

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
    const calendarRef = useRef(null);
    const isMouted = useRef(false);
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
    useEventListener("mousedown", handleMouseDown, document);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        // avoid to run in first mounted
        if (!isMouted.current) {
            isMouted.current = true;
            return;
        }

        if (!calendarOpen) {
            handleBlur(startDate, endDate);
            setIsError(false);
        }
    }, [calendarOpen]);

    useEffect(() => {
        dispatchStart({ type: "confirmed", value: value });

        if (variant === "range")
            dispatchEnd({ type: "confirmed", value: endValue });
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

    function handleMouseDown(event: MouseEvent) {
        if (disabled || readOnly) return;

        const target = event.target as Element;
        if (nodeRef.current && !nodeRef.current.contains(target)) {
            // outside click
            handleBlurContainer();
        }
    }

    const handleChange = (value: string, from: ActionComponent) => {
        if (value === INVALID_VALUE || value === "") {
            performOnChangeHandler(value, true);

            if (value === "") {
                // update state/calendar
                handleReducer("selected", value);
            }

            return;
        }
        const isValid = handleValidation(value);

        if (["month-options", "year-options"].includes(calendarView)) {
            handleReducer("transition", value);
        } else {
            // day calendar view
            handleReducer("selected", value);
        }

        setIsError(!isValid);
        setActionComponent(from);
        handleFocusElement(isValid, from);
        performOnChangeHandler(value, isValid);
    };

    const handleBlur = (startDate: ReducerState, endDate: ReducerState) => {
        performOnBlurHandler(startDate, endDate);
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
            handleMonthYearCalendarAction(buttonAction);

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
                break;
        }

        setCurrentElement({
            field: "none",
            type: "none",
            count: 0,
        });

        setCalendarOpen(false);
    };

    const handleMonthYearCalendarAction = (action: CalendarAction) => {
        const { field: otherField, type: otherType } = getAnotherElement();

        switch (action) {
            case "reset":
                handleReducer("restore");
                calendarRef.current.defaultView();
                break;
            case "confirmed":
                calendarRef.current.defaultView();

                setCurrentElement((prev) => {
                    return {
                        field: otherField,
                        type: otherType,
                        count: prev.count + 1,
                    };
                });
                break;
        }
    };

    const handleCalendarView = (calendarView: View) => {
        setCalendarView(calendarView);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnChangeHandler = (
        value: string,
        isOtherValueValid: boolean
    ) => {
        const returnValue = getFormattedValue(value, isOtherValueValid);

        if (onChange) {
            onChange(returnValue);
        }
    };

    const performOnChangeRawHandler = (value: string) => {
        if (onChangeRaw) {
            const returnValue = getFormattedValue(value, true);

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

    const handleBlurContainer = () => {
        handleReducer("reset");

        setCurrentElement({
            field: "none",
            type: "none",
            count: 0,
        });

        setCalendarOpen(false);
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
            return;
        }

        if (type === "restore") {
            // restore both value
            dispatchStart({ type });
            dispatchEnd({ type });

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

    const handleFocusElement = (isValid: boolean, from: ActionComponent) => {
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

    /**
     * Transform the output value for the user
     * @param isValid is to indicate another value status in range varaint
     * As example: both value been selected and selected a new startDate after endDate,
     * endDate will become INVALID
     */
    const getFormattedValue = (value: string, isValid: boolean) => {
        const focusType = currentElement.type as FocusType;

        let values: ChangeValueTypes = {};

        if (variant === "range") {
            switch (focusType) {
                case "start":
                    values = {
                        start: value,
                        end: isValid ? endDate.selected : INVALID_VALUE,
                    };

                    break;
                case "end":
                    values = {
                        start: isValid ? startDate.selected : INVALID_VALUE,
                        end: value,
                    };
                    break;
            }
        } else if (variant === "single") {
            values = {
                start: isValid ? value : INVALID_VALUE,
            };
        }

        return values;
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
                        onChangeRaw={(value) =>
                            performOnChangeRawHandler(value)
                        }
                        onFocus={handleFocus}
                        onTabBlur={handleBlurContainer}
                        readOnly={readOnly}
                        names={["end-day", "end-month", "end-year"]}
                        value={endDate.input}
                        confirmedValue={endDate.confirmed}
                        variant={variant}
                        action={endDate.currentType}
                        focusType={currentElement.type}
                        isOpen={calendarOpen}
                        isError={isError}
                        withButton={withButton}
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
                onChange={(value) => handleChange(value, "input")}
                onChangeRaw={(value) => performOnChangeRawHandler(value)}
                onFocus={handleFocus}
                onTabBlur={handleBlurContainer}
                readOnly={readOnly}
                names={["start-day", "start-month", "start-year"]}
                value={startDate.input}
                confirmedValue={startDate.confirmed}
                variant={variant === "range" ? "start" : "single"}
                action={startDate.currentType}
                focusType={currentElement.type}
                isOpen={calendarOpen}
                isError={isError}
                withButton={withButton}
            />
            {renderRangeInput()}
            {renderIndicateBar()}
            <Calendar
                ref={calendarRef}
                type="input"
                disabledDates={disabledDates}
                isOpen={calendarOpen}
                withButton={withButton}
                actionComponent={actionComponent}
                currentFocus={currentElement.type}
                currentType={
                    currentElement.type === "start"
                        ? startDate.currentType
                        : endDate.currentType
                }
                value={startDate.calendar}
                endValue={endDate.calendar}
                between={between}
                variant={variant}
                onCalendarView={handleCalendarView}
                onHover={handleHoverDayCell}
                onSelect={(value) => handleChange(value, "calendar")}
                onWithButton={handleCalendarAction}
            />
        </Container>
    );
};
