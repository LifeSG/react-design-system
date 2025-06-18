import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../shared/dropdown-wrapper";
import {
    CalendarAction,
    CalendarDropdown,
    InternalCalendarRef,
} from "../shared/internal-calendar";
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
    zIndex,
    dropdownRootNode,
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
    const [hoveredDate, setHoveredDate] = useState<string | undefined>(
        undefined
    );
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);

    const nodeRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<StandaloneDateInputRef>(null);
    const calendarRef = useRef<InternalCalendarRef>(null);
    const blurFired = useRef<boolean>(false); // To guard against multiple blur events from handleClose and handleBlur

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
        inputRef.current?.resetInput();
        setSelectedDate(initialDate);
        setCalendarOpen(false);
        setFocused(false);

        performOnBlurHandler();
    };

    const handleDismiss = () => {
        inputRef.current?.resetInput();
        nodeRef.current?.focus();
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
                inputRef.current?.focusYearRef();
                setCalendarOpen(false);
            }

            // clear hover value for mobile when onMouseLeave={handleMouseLeaveCell} is not triggered due to touch input
            if (hoveredDate) {
                setHoveredDate(undefined);
            }
        }
    };

    const handleFocus = () => {
        if (readOnly || disabled) return;

        blurFired.current = false;
        setCalendarOpen(true);

        if (focused) return;

        setFocused(true);

        if (onFocus) {
            onFocus();
        }
    };

    const handleBlur = (e: React.FocusEvent) => {
        const target = e.relatedTarget as Node;

        const isInsideCalendar = calendarRef.current?.contains(target);
        const isInsideNode = nodeRef.current?.contains(target);
        // focus guard exists in the tab order between the input and the calendar
        const isFocusGuard = (e.relatedTarget as HTMLElement)?.matches?.(
            "[data-floating-ui-focus-guard]"
        );

        // If focus moves into the calendar itself, don't blur
        if (isInsideCalendar) return;

        if (focused && !calendarOpen && !isInsideNode) {
            inputRef.current?.resetInput();
            setSelectedDate(initialDate);
            setFocused(false);
            performOnBlurHandler();
            return;
        }

        if (!isInsideNode && !isFocusGuard) {
            setCalendarOpen(false);
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

        const isValid = dayjs(selectedDate, "YYYY-MM-DD", true).isValid();

        // Focus on year input if the selected date is valid to avoid restarting entire tab order
        isValid ? inputRef.current?.focusYearRef() : nodeRef.current?.focus();
        setCalendarOpen(false);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnChangeHandler = (changeValue: string) => {
        if (onChange) {
            onChange(changeValue);
        }
    };

    const performOnBlurHandler = () => {
        if (onBlur && !blurFired.current) {
            blurFired.current = true;
            onBlur();
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderInput = () => {
        return (
            <Container
                tabIndex={0}
                ref={nodeRef}
                onBlur={handleBlur}
                onFocus={handleFocus}
                $disabled={disabled}
                $readOnly={readOnly}
                $focused={focused}
                $error={error}
                id={id}
                data-testid={otherProps["data-testid"]}
                aria-disabled={disabled}
                aria-readonly={readOnly}
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

    const renderCalendar = ({ elementWidth }: DropdownRenderProps) => {
        return (
            <CalendarDropdown
                variant="single"
                ref={calendarRef}
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
                width={elementWidth}
                isFocusable={!readOnly && !disabled}
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
            customZIndex={zIndex}
            offset={16}
            rootNode={dropdownRootNode}
        />
    );
};
