import { Dayjs } from "dayjs";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import { CalendarManager } from "./calendar-manager";
import { InternalCalendarDay } from "./internal-calendar-day";
import { Container } from "./internal-calendar.style";
import {
    CalendarManagerRef,
    InternalCalendarProps,
    InternalCalendarRef,
} from "./types";

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
        type = "standalone",
        selectWithinRange = true,
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
            defaultView() {
                calendarManagerRef.current.defaultView();
            },
        };
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        /**
         * Update calendar value in month/year
         * Once focus value is changed
         */
        const calendarValue =
            currentFocus === "end" ? selectedEndDate : selectedStartDate;

        calendarManagerRef.current.setCalendarDate(calendarValue);
    }, [currentFocus]);

    useEffect(() => {
        if (selectedStartDate) {
            calendarManagerRef.current.setCalendarDate(selectedStartDate);
        }
    }, [selectedStartDate]);

    useEffect(() => {
        if (selectedEndDate) {
            calendarManagerRef.current.setCalendarDate(selectedEndDate);
        }
    }, [selectedEndDate]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");
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
                // ensure both are empty or complete at the same time
                isDisabled = !!selectedStartDate !== !!selectedEndDate;
                break;
        }

        return isDisabled;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
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
                onCalendarDateChange={handleCalendarDateChange}
            >
                {({ calendarDate }) => (
                    <InternalCalendarDay
                        calendarDate={calendarDate}
                        currentFocus={currentFocus}
                        disabledDates={disabledDates}
                        selectedStartDate={selectedStartDate}
                        selectedEndDate={selectedEndDate}
                        variant={variant}
                        minDate={minDate}
                        maxDate={maxDate}
                        isNewSelection={selectWithinRange}
                        onSelect={handleDateSelect}
                        onHover={handleDateHover}
                    />
                )}
            </CalendarManager>
        </Container>
    );
};

export const InternalCalendar = React.forwardRef(Component);
