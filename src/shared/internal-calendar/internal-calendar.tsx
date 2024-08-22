import { Dayjs } from "dayjs";
import React, { useImperativeHandle, useRef } from "react";
import { CalendarManager } from "./calendar-manager";
import { FixedRangeCalendarDayView } from "./fixed-range/fixed-range-calendar-day-view";
import { Container } from "./internal-calendar.style";
import { StandardCalendarDayView } from "./standard";
import {
    CalendarManagerRef,
    InternalCalendarProps,
    InternalCalendarRef,
} from "./types";
import { WeekCalendarDayView } from "./week";

export const Component = (
    {
        disabledDates,
        onYearMonthDisplayChange,
        onSelect,
        onHover,
        onDismiss,
        value: selectedStartDate,
        endValue: selectedEndDate,
        currentFocus,
        withButton,
        variant,
        minDate,
        maxDate,
        allowDisabledSelection,
        type = "standalone",
        selectWithinRange = true,
        initialCalendarDate,
        numberOfDays,
        showCurrentMonthOnly = false,
    }: InternalCalendarProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const calendarManagerRef = useRef<CalendarManagerRef>();
    const previousCalendarDate = useRef<Dayjs>(undefined);

    // =============================================================================
    // HOOKS
    // =============================================================================
    useImperativeHandle(ref, () => {
        return {
            reset() {
                calendarManagerRef.current.resetView();
            },
            setCalendarDate(value?: string) {
                calendarManagerRef.current.setCalendarDate(value);
            },
        };
    });

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");

        calendarManagerRef.current.setCalendarDate(stringValue);
        performOnSelectHandler(stringValue);
    };

    const handleDateHover = (value: string) => {
        performOnHoverHandler(value);
    };

    const handleCalendarDateChange = (value: Dayjs) => {
        if (
            !previousCalendarDate.current ||
            !previousCalendarDate.current.isSame(value, "month")
        ) {
            performDisplayChangeHandler(value);
        }
        previousCalendarDate.current = value;
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnSelectHandler = (changeValue: string) => {
        if (onSelect) {
            onSelect(changeValue);
        }
    };

    const performOnHoverHandler = (value: string) => {
        if (onHover) {
            onHover(value);
        }
    };

    const performDisplayChangeHandler = (value: Dayjs) => {
        if (onYearMonthDisplayChange) {
            const returnValue = {
                month: value.month() + 1,
                year: value.year(),
            };

            onYearMonthDisplayChange(returnValue);
        }
    };

    const isDoneButtonDisabled = () => {
        if (!withButton) return;

        let isDisabled = true;

        switch (variant) {
            case "single":
                isDisabled = false;
                break;
            case "range":
            case "fixed-range":
                // ensure both are empty or complete at the same time
                isDisabled = !!selectedStartDate !== !!selectedEndDate;
                break;
            case "week":
                isDisabled = !selectedStartDate && !selectedEndDate;
                break;
        }

        return isDisabled;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderCalendarDay = (calendarDate: Dayjs) => {
        switch (variant) {
            case "week":
                return (
                    <WeekCalendarDayView
                        calendarDate={calendarDate}
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        minDate={minDate}
                        maxDate={maxDate}
                        allowDisabledSelection={allowDisabledSelection}
                        onSelect={handleDateSelect}
                        onHover={handleDateHover}
                    />
                );
            case "fixed-range":
                return (
                    <FixedRangeCalendarDayView
                        calendarDate={calendarDate}
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        minDate={minDate}
                        maxDate={maxDate}
                        allowDisabledSelection={allowDisabledSelection}
                        onSelect={handleDateSelect}
                        onHover={handleDateHover}
                        numberOfDays={numberOfDays}
                    />
                );
            case "single":
            case "range":
            default: // standalone type
                return (
                    <StandardCalendarDayView
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        minDate={minDate}
                        maxDate={maxDate}
                        isNewSelection={selectWithinRange}
                        allowDisabledSelection={allowDisabledSelection}
                        showCurrentMonthOnly={showCurrentMonthOnly}
                        onSelect={handleDateSelect}
                        onHover={handleDateHover}
                    />
                );
        }
    };

    return (
        <Container $type={type}>
            <CalendarManager
                type={type}
                ref={calendarManagerRef}
                withButton={withButton}
                doneButtonDisabled={isDoneButtonDisabled()}
                onDismiss={onDismiss}
                minDate={minDate}
                maxDate={maxDate}
                selectWithinRange={selectWithinRange}
                currentFocus={currentFocus}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                allowDisabledSelection={allowDisabledSelection}
                onCalendarDateChange={handleCalendarDateChange}
                initialCalendarDate={initialCalendarDate}
            >
                {({ calendarDate }) => renderCalendarDay(calendarDate)}
            </CalendarManager>
        </Container>
    );
};

export const InternalCalendar = React.forwardRef(Component);
