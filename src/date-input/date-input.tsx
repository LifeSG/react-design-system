import {
    FloatingPortal,
    autoUpdate,
    flip,
    limitShift,
    offset,
    shift,
    size,
    useFloating,
} from "@floating-ui/react";
import { useEffect, useRef, useState } from "react";
import {
    CalendarAction,
    InternalCalendarRef,
} from "../shared/internal-calendar";
import { AnimatedInternalCalendar } from "../shared/internal-calendar/animated-internal-calendar";
import {
    StandaloneDateInput,
    StandaloneDateInputRef,
} from "../shared/standalone-date-input/standalone-date-input";
import { DateInputHelper } from "../util";
import { Container } from "./date-input.style";
import { DateInputProps } from "./types";

export const DateInput = ({
    minDate,
    maxDate,
    disabled,
    disabledDates,
    error,
    hideInputKeyboard,
    value,
    onChange,
    onFocus,
    onBlur,
    onYearMonthDisplayChange,
    withButton = true,
    readOnly,
    id,
    allowDisabledSelection,
    ...otherProps
}: DateInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [initialDate, setInitialDate] = useState<string>(
        DateInputHelper.sanitizeInput(value)
    );
    const [selectedDate, setSelectedDate] = useState<string>(
        DateInputHelper.sanitizeInput(value)
    );
    const [hoveredDate, setHoveredDate] = useState<string>(undefined);
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<InternalCalendarRef>();
    const inputRef = useRef<StandaloneDateInputRef>();

    const { refs, floatingStyles, elements, update } = useFloating({
        open: calendarOpen,
        placement: "bottom-start",
        middleware: [
            offset(16),
            flip(),
            shift({
                limiter: limitShift(),
            }),
            size({
                // match calendar width to input
                apply({ rects, elements }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                    });
                },
            }),
        ],
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const newValue = DateInputHelper.sanitizeInput(value);
        setInitialDate(newValue);
        setSelectedDate(newValue);
    }, [value]);

    // ensure calendar remains anchored to its reference element when scrolling
    // ref: https://floating-ui.com/docs/autoUpdate#usage
    useEffect(() => {
        if (calendarOpen && elements.reference && elements.floating) {
            const cleanup = autoUpdate(
                elements.reference,
                elements.floating,
                update
            );
            return cleanup;
        }
    }, [calendarOpen, elements, update]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleContainerBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (
            !nodeRef.current?.contains(event.relatedTarget) &&
            !calendarRef.current?.rootElementRef.current?.contains(
                event.relatedTarget
            )
        ) {
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
        if (readOnly) return;

        setCalendarOpen(true);

        if (onFocus) {
            onFocus();
        }
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
    // RENDER FUNCTIONS
    // =============================================================================
    const renderInput = () => {
        return (
            <Container
                ref={(node) => {
                    nodeRef.current = node;
                    refs.setReference(node);
                }}
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
                    hideInputKeyboard={hideInputKeyboard}
                />
            </Container>
        );
    };

    const renderCalendar = () => {
        return (
            <FloatingPortal>
                <div ref={refs.setFloating} style={{ ...floatingStyles }}>
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
                </div>
            </FloatingPortal>
        );
    };

    return (
        <>
            {renderInput()}
            {renderCalendar()}
        </>
    );
};
