import { useEffect, useRef, useState } from "react";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { CalendarAction, CalendarDropdown } from "../shared/internal-calendar";
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
    zIndex = 50,
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
    const [focused, setFocused] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<StandaloneDateInputRef>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const newValue = DateInputHelper.sanitizeInput(value);
        setInitialDate(newValue);
        setSelectedDate(newValue);
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClose = () => {
        inputRef.current.resetInput();
        setSelectedDate(initialDate);
        setCalendarOpen(false);
        setFocused(false);
        performOnBlurHandler();
    };

    const handleDismiss = () => {
        inputRef.current.resetInput();
        nodeRef.current.focus();
        setSelectedDate(initialDate);
        setCalendarOpen(false);
    };

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

    const handleSelect = (val: string) => {
        setSelectedDate(val);

        if (!withButton) {
            performOnChangeHandler(val);
            setInitialDate(val);
            if (val) {
                nodeRef.current.focus();
                setCalendarOpen(false);
            }
        }
    };

    const handleFocus = () => {
        if (readOnly || disabled) return;

        setCalendarOpen(true);

        if (focused) return;

        setFocused(true);

        if (onFocus) {
            onFocus();
        }
    };

    const handleBlur = (e: React.FocusEvent) => {
        if (
            focused &&
            !calendarOpen &&
            !nodeRef.current.contains(e.relatedTarget as Node)
        ) {
            inputRef.current.resetInput();
            setSelectedDate(initialDate);
            setFocused(false);
            performOnBlurHandler();
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

        nodeRef.current.focus();
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
                tabIndex={-1}
                ref={nodeRef}
                onBlur={handleBlur}
                onFocus={handleFocus}
                $disabled={disabled}
                $readOnly={readOnly}
                $focused={focused}
                $error={error}
                id={id}
                data-testid={otherProps["data-testid"]}
                {...otherProps}
            >
                <StandaloneDateInput
                    ref={inputRef}
                    disabled={disabled}
                    onChange={handleChange}
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
            <CalendarDropdown
                type="input"
                variant="single"
                initialCalendarDate={selectedDate}
                withButton={withButton}
                value={selectedDate}
                disabledDates={disabledDates}
                minDate={minDate}
                maxDate={maxDate}
                allowDisabledSelection={allowDisabledSelection}
                onHover={handleHoverDayCell}
                onSelect={handleSelect}
                onDismiss={handleCalendarAction}
                onYearMonthDisplayChange={onYearMonthDisplayChange}
            />
        );
    };

    return (
        <ElementWithDropdown
            enabled={!readOnly && !disabled}
            isOpen={calendarOpen}
            renderElement={renderInput}
            renderDropdown={renderCalendar}
            onClose={handleClose}
            onDismiss={handleDismiss}
            zIndex={zIndex}
        />
    );
};
