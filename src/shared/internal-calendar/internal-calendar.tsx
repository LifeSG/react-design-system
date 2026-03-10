import { Dayjs } from "dayjs";
import React, { useImperativeHandle, useRef } from "react";
import { CalendarManager } from "./calendar-manager";
import { FixedRangeCalendarDayView } from "./fixed-range";
import { Container } from "./internal-calendar.style";
import { SingleCalendarDayView } from "./single";
import { StandardCalendarDayView } from "./standard";
import {
    CalendarManagerRef,
    InternalCalendarProps,
    InternalCalendarRef,
} from "./types";
import { WeekCalendarDayView } from "./week";
import { MultiCalendarDayView } from "./multi";

export const Component = (
    {
        disabledDates,
        onYearMonthDisplayChange,
        onSelect,
        onHover,
        onDismiss,
        value: selectedStartDate,
        endValue: selectedEndDate,
        values: selectedDates = [],
        minSelectable,
        maxSelectable,
        currentFocus,
        withButton,
        variant,
        minDate,
        maxDate,
        allowDisabledSelection,
        selectWithinRange = true,
        initialCalendarDate,
        numberOfDays,
        onChange,
        showActiveMonthDaysOnly = false,
        isFocusable = false,
    }: InternalCalendarProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const calendarManagerRef = useRef<CalendarManagerRef>(null);
    const previousCalendarDate = useRef<Dayjs | undefined>(undefined);
    const containerRef = useRef<HTMLDivElement>(null);

    // =============================================================================
    // HOOKS
    // =============================================================================
    useImperativeHandle(ref, () => {
        return {
            reset() {
                calendarManagerRef.current?.resetView();
            },
            setCalendarDate(value?: string) {
                calendarManagerRef.current?.setCalendarDate(value);
            },
            contains(node: Node) {
                return containerRef.current?.contains(node) || false;
            },
        };
    });

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDateSelect = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");
        calendarManagerRef.current?.setCalendarDate(stringValue);
        onSelect?.(stringValue);
    };

    const handleDateHover = (value: string) => {
        onHover?.(value);
    };

    const handleMultiDateSelect = (value: Dayjs) => {
        const stringValue = value.format("YYYY-MM-DD");
        if (selectedDates.includes(stringValue)) {
            const updatedValues = selectedDates.filter(
                (date) => date !== stringValue
            );
            // Intentionally omit setCalendarDate — toggling a date should not
            // navigate the calendar view, unlike single/range selection.
            onChange?.(updatedValues);
        } else {
            if (
                maxSelectable !== undefined &&
                selectedDates.length >= maxSelectable
            ) {
                return;
            }
            onChange?.([...selectedDates, stringValue]);
        }
    };

    const handleCalendarDateChange = (value: Dayjs) => {
        if (
            !previousCalendarDate.current ||
            !previousCalendarDate.current.isSame(value, "month")
        ) {
            calendarManagerRef.current?.setCalendarDate(
                value.format("YYYY-MM-DD")
            );
            onYearMonthDisplayChange?.({
                month: value.month() + 1,
                year: value.year(),
            });
        }
        previousCalendarDate.current = value;
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
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
            case "multi":
                isDisabled =
                    selectedDates.length === 0 ||
                    (minSelectable !== undefined &&
                        selectedDates.length < minSelectable);
                break;
        }

        return isDisabled;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderCalendarDay = (calendarDate: Dayjs) => {
        const setCalendarDate = calendarManagerRef.current?.setCalendarDate;
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
                        setCalendarDate={setCalendarDate}
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
                        setCalendarDate={setCalendarDate}
                    />
                );
            case "single":
                return (
                    <SingleCalendarDayView
                        calendarDate={calendarDate}
                        disabledDates={disabledDates}
                        selectedDate={selectedStartDate}
                        minDate={minDate}
                        maxDate={maxDate}
                        allowDisabledSelection={allowDisabledSelection}
                        showActiveMonthDaysOnly={showActiveMonthDaysOnly}
                        onSelect={handleDateSelect}
                        onHover={handleDateHover}
                        setCalendarDate={setCalendarDate}
                    />
                );
            case "multi":
                return (
                    <MultiCalendarDayView
                        calendarDate={calendarDate}
                        disabledDates={disabledDates}
                        selectedDates={selectedDates}
                        minDate={minDate}
                        maxDate={maxDate}
                        allowDisabledSelection={allowDisabledSelection}
                        showActiveMonthDaysOnly={showActiveMonthDaysOnly}
                        onSelect={handleMultiDateSelect}
                        onHover={handleDateHover}
                        setCalendarDate={setCalendarDate}
                    />
                );
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
                        showActiveMonthDaysOnly={showActiveMonthDaysOnly}
                        onSelect={handleDateSelect}
                        onHover={handleDateHover}
                        setCalendarDate={setCalendarDate}
                    />
                );
        }
    };

    return (
        <Container ref={containerRef}>
            <CalendarManager
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
                isFocusable={isFocusable}
            >
                {({ calendarDate }) => renderCalendarDay(calendarDate)}
            </CalendarManager>
        </Container>
    );
};

export const InternalCalendar = React.forwardRef(Component);
