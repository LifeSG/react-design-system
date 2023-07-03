import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
    CalendarAction,
    InternalCalendarRef,
} from "../shared/internal-calendar";
import { AnimatedInternalCalendar } from "../shared/internal-calendar/animated-internal-calendar";
import {
    StandaloneDateInput,
    StandaloneDateInputRef,
} from "../shared/standalone-date-input/standalone-date-input";
import { MediaWidths } from "../spec/media-spec";
import { DateInputHelper } from "../util/date-input-helper";
import { Container } from "./date-input.style";
import { DateInputProps } from "./types";

export const DateInput = ({
    minDate,
    maxDate,
    disabled,
    disabledDates,
    error,
    value,
    onChange,
    onBlur,
    onYearMonthDisplayChange,
    withButton: _withButton = true,
    readOnly,
    id,
    allowDisabledSelection,
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [initialDate, setInitialDate] = useState<string>(value);
    const [selectedDate, setSelectedDate] = useState<string>(value);
    const [hoveredDate, setHoveredDate] = useState<string>(undefined);
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<InternalCalendarRef>();
    const inputRef = useRef<StandaloneDateInputRef>();
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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleContainerBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (nodeRef && !nodeRef.current.contains(event.relatedTarget)) {
            inputRef.current.resetInput();
            setSelectedDate(initialDate);
            setCalendarOpen(false);
            performOnBlurHandler();
        }
    };

    function handleContainerKeyDown(event: React.KeyboardEvent) {
        if (event.code === "Escape") {
            inputRef.current.resetInput();
            setSelectedDate(initialDate);
            setCalendarOpen(false);
        }
    }

    const handleChange = (val: string) => {
        if (
            !allowDisabledSelection &&
            DateInputHelper.isDateDisabled(val, {
                disabledDates,
                minDate,
                maxDate,
            })
        ) {
            return;
        }

        setSelectedDate(val);

        if (!withButton) {
            performOnChangeHandler(val);
            setInitialDate(val);
            if (val) {
                setCalendarOpen(false);
            }
        }
    };

    const handleFocus = () => {
        setCalendarOpen(true);
    };

    const handleHoverDayCell = (value: string) => {
        setHoveredDate(value);
    };

    const handleCalendarAction = (buttonAction: CalendarAction) => {
        // handle button in day calendar view
        switch (buttonAction) {
            case "reset":
                setSelectedDate(initialDate);
                break;
            case "confirmed":
                setInitialDate(selectedDate);
                performOnChangeHandler(selectedDate);
                break;
        }

        setCalendarOpen(false);
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Container
            ref={nodeRef}
            $disabled={disabled}
            $readOnly={readOnly}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            tabIndex={-1}
            onBlur={handleContainerBlur}
            onKeyDown={handleContainerKeyDown}
            {...otherProps}
        >
            <StandaloneDateInput
                ref={inputRef}
                disabled={disabled}
                onChange={handleChange}
                onFocus={handleFocus}
                readOnly={readOnly}
                focused={calendarOpen}
                names={["start-day", "start-month", "start-year"]}
                value={selectedDate}
                hoverValue={hoveredDate}
            />
            <AnimatedInternalCalendar
                ref={calendarRef}
                type="input"
                variant="single"
                initialCalendarDate={selectedDate}
                isOpen={calendarOpen}
                withButton={withButton}
                value={selectedDate}
                disabledDates={disabledDates}
                minDate={minDate}
                maxDate={maxDate}
                allowDisabledSelection={allowDisabledSelection}
                onHover={handleHoverDayCell}
                onSelect={handleChange}
                onDismiss={handleCalendarAction}
                onYearMonthDisplayChange={onYearMonthDisplayChange}
            />
        </Container>
    );
};
