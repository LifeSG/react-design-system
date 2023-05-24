import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CalendarAction, CalendarRef, View } from "../shared/internal-calendar";
import { AnimatedInternalCalendar } from "../shared/internal-calendar/animated-internal-calendar";
import { StandaloneDateInput } from "../shared/standalone-date-input/standalone-date-input";
import { MediaWidths } from "../spec/media-spec";
import { useEventListener } from "../util/use-event-listener";
import { Container } from "./date-input.style";
import { DateInputProps } from "./types";

export type ActionComponent = "calendar" | "input";

export const DateInput = ({
    between,
    disabled,
    disabledDates,
    error,
    value,
    onChange,
    onBlur,
    withButton: _withButton = true,
    readOnly,
    id,
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [initialDate, setInitialDate] = useState<string>(value);
    const [selectedDate, setSelectedDate] = useState<string>(value);
    const [hoveredDate, setHoveredDate] = useState<string>(undefined);
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [calendarView, setCalendarView] = useState<View>("default");

    const nodeRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<CalendarRef>();
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // show button if it is mobile view
    const withButton = _withButton || isMobile;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setInitialDate(value);
        setSelectedDate(value);
    }, [value]);

    /**
     * Allows effect below to always get latest state value
     * Reference:
     * https://stackoverflow.com/questions/65125665/new-event-doesnt-have-latest-state-value-updated-by-previous-event
     */

    useEventListener("keydown", handleKeyDown, nodeRef.current);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    function handleKeyDown(event: KeyboardEvent) {
        if (event.code === "Escape") {
            setSelectedDate(initialDate);
            setCalendarOpen(false);
        }

        if (event.code === "Enter" && !withButton) {
            setInitialDate(selectedDate);
            performOnChangeHandler(selectedDate);
            setCalendarOpen(false);
        }
    }

    const handleChange = (value: string) => {
        setSelectedDate(value);
        handleFocusElement(value);
    };

    const handleFocus = () => {
        setCalendarOpen(true);

        if (!calendarOpen) {
            calendarRef.current.resetView();
        }
    };

    const handleBlur = () => {
        // probably should be optional
    };

    const handleHoverDayCell = (value: string) => {
        setHoveredDate(value);
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
                break;
            case "confirmed":
                performOnChangeHandler();
                break;
        }

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
        if (onChange) {
            onChange(changeValue);
        }
    };

    const performOnBlurHandler = () => {
        if (onBlur) {
            onBlur();
        }
    };

    const handleBlurContainer = (event: React.FocusEvent<HTMLDivElement>) => {
        if (nodeRef && !nodeRef.current.contains(event.relatedTarget)) {
            performOnBlurHandler();
            setCalendarOpen(false);
        }
    };

    const handleFocusElement = (value?: string) => {
        const isValid = !!value;

        // closed calendar in without button calendar if it
        // - after selection in single value calendar
        // - both valid value in range selection
        if (!withButton && isValid) {
            setCalendarOpen(false);
            performOnChangeHandler(value);
            return;
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Container
            ref={nodeRef}
            $disabled={disabled}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            $readOnly={readOnly}
            onBlur={handleBlurContainer}
            tabIndex={-1}
            {...otherProps}
        >
            <StandaloneDateInput
                disabled={disabled}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                readOnly={readOnly}
                focused={calendarOpen}
                names={["start-day", "start-month", "start-year"]}
                value={selectedDate}
                hoverValue={hoveredDate}
            />
            <AnimatedInternalCalendar
                ref={calendarRef}
                type="input"
                disabledDates={disabledDates}
                isOpen={calendarOpen}
                withButton={withButton}
                value={selectedDate}
                minDate={between && between[0]} // FIXME: Handle refactoring of between prop to minDate and maxDate
                maxDate={between && between[1]} // FIXME: Same as above
                variant="single"
                onCalendarView={handleCalendarView}
                onHover={handleHoverDayCell}
                onSelect={handleChange}
                onDismiss={handleCalendarAction}
            />
        </Container>
    );
};
