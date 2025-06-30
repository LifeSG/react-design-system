import dayjs, { Dayjs } from "dayjs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CalendarHelper } from "../../../util/calendar-helper";
import { HeaderCell, RowDayCell, Wrapper } from "../standard";
import { CommonCalendarProps } from "../types";
import { FixedRangeDayCell } from "./fixed-range-cell";

interface FixedRangeCalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string | undefined;
    numberOfDays: number | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    setCalendarDate?: ((date: string | undefined) => void) | undefined;
}

export const FixedRangeCalendarDayView = ({
    calendarDate,
    disabledDates,
    selectedStartDate,
    onSelect,
    onHover,
    minDate,
    maxDate,
    allowDisabledSelection,
    numberOfDays,
    setCalendarDate,
}: FixedRangeCalendarDayViewProps) => {
    // =============================================================================
    // REFS, EFFECTS
    // =============================================================================
    const pendingFocusRef = useRef<string | null>(null);

    useEffect(() => {
        if (pendingFocusRef.current) {
            const next = pendingFocusRef.current;
            pendingFocusRef.current = null;
            setFocusValue(next);
        }
    }, [calendarDate]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getDateToFocus = useCallback(() => {
        // As specified in the Grid Pattern, only one element in the calendar grid is in the Tab sequence.
        // This function determines which date should be focused based on the state of the calendar.

        // Selected date is in the current month
        if (
            selectedStartDate &&
            dayjs(selectedStartDate).isSame(calendarDate, "month")
        ) {
            return dayjs(selectedStartDate);
        }

        // Today is in the current month
        if (dayjs().isSame(calendarDate, "month")) {
            return dayjs();
        }

        // Choose min date if it is in the current month
        if (minDate && calendarDate.isSame(dayjs(minDate), "month")) {
            return dayjs(minDate);
        }

        // Otherwise, return the first day of the month
        return dayjs(calendarDate).startOf("month");
    }, [selectedStartDate, calendarDate, minDate]);

    const setFocusCell = (value: string) => {
        const valueDayjs = dayjs(value);

        if (
            CalendarHelper.isWithinRange(
                valueDayjs,
                minDate ? dayjs(minDate) : undefined,
                maxDate ? dayjs(maxDate) : undefined
            )
        ) {
            if (!valueDayjs.isSame(calendarDate, "month")) {
                setCalendarDate?.(value);
                pendingFocusRef.current = value;
                return;
            }
            setFocusValue(value);
        }
    };

    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const weeksOfTheMonth = useMemo(
        (): Dayjs[][] => CalendarHelper.generateDays(calendarDate),
        [calendarDate]
    );
    const dateToFocus = useMemo(
        (): Dayjs => getDateToFocus(),
        [getDateToFocus]
    );

    const [focusValue, setFocusValue] = useState<string>("");
    const [hoverValue, setHoverValue] = useState<string>("");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDayClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled && !allowDisabledSelection) return;

        onSelect(value);

        if (!!value && !dayjs(value).isSame(value, "month")) {
            setHoverValue("");
        }
    };

    const handleHoverCell = (value: string, isDisabled: boolean) => {
        if (isDisabled && !allowDisabledSelection) return;
        setHoverValue(value);
        onHover(value);
    };

    const handleFocusCell = (value: string) => {
        // Always hover the cell when it is focused
        setHoverValue(value);
        onHover(value);
    };

    const handleMouseLeaveCell = () => {
        setHoverValue("");
        onHover("");
    };

    const handleOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (e.currentTarget.contains(e.relatedTarget as Node)) {
            return;
        }

        // Reset focus date when the component loses focus
        setFocusValue("");
        setHoverValue("");
        onHover("");
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHeader = () => {
        return weeksOfTheMonth[0].map((day, index) => (
            <HeaderCell key={`week-day-${index}`} aria-hidden>
                {dayjs(day).format("ddd")}
            </HeaderCell>
        ));
    };

    const renderDayCells = () => {
        return weeksOfTheMonth.map((week, weekIndex) => {
            return (
                <RowDayCell
                    role="row"
                    key={weekIndex}
                    onMouseLeave={handleMouseLeaveCell}
                >
                    {week.map((day, dayIndex) => {
                        return (
                            <FixedRangeDayCell
                                key={`day-${dayIndex}`}
                                date={day}
                                calendarDate={calendarDate}
                                selectedDate={selectedStartDate}
                                hoverDate={hoverValue}
                                focusDate={focusValue}
                                minDate={minDate}
                                maxDate={maxDate}
                                disabledDates={disabledDates}
                                allowDisabledSelection={allowDisabledSelection}
                                onSelect={handleDayClick}
                                onHover={handleHoverCell}
                                numberOfDays={numberOfDays}
                                onFocus={handleFocusCell}
                                setFocusCell={setFocusCell}
                                tabIndex={
                                    dayjs(day).isSame(dateToFocus, "day")
                                        ? 0
                                        : -1
                                }
                            />
                        );
                    })}
                </RowDayCell>
            );
        });
    };

    return (
        <Wrapper
            role="grid"
            onBlur={handleOnBlur}
            data-testid="calendar-content"
            aria-label="Date grid"
        >
            {renderHeader()}
            {renderDayCells()}
        </Wrapper>
    );
};
