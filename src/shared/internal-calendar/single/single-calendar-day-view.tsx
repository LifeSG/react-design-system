import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CalendarHelper } from "../../../util/calendar-helper";
import { HeaderCell, RowDayCell, Wrapper } from "../standard";
import { CommonCalendarProps } from "../types";
import { SingleCell } from "./single-cell";

dayjs.extend(isBetween);

// TODO: to remove after all references have been cleaned up
export type DayVariant = "default" | "other-month" | "today";

interface CalendarDayViewProps extends CommonCalendarProps {
    selectedDate: string | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    setCalendarDate?: (date: string | undefined) => void | undefined;
}

export const SingleCalendarDayView = ({
    calendarDate,
    disabledDates,
    selectedDate,
    onSelect,
    onHover,
    minDate,
    maxDate,
    allowDisabledSelection,
    showActiveMonthDaysOnly,
    setCalendarDate,
}: CalendarDayViewProps) => {
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
        if (selectedDate && dayjs(selectedDate).isSame(calendarDate, "month")) {
            return dayjs(selectedDate);
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
    }, [selectedDate, calendarDate, minDate]);

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
            <HeaderCell key={`week-day-${index}`}>
                {dayjs(day).format("ddd")}
            </HeaderCell>
        ));
    };

    const renderDayCells = () => {
        return weeksOfTheMonth.map((week, weekIndex) => {
            return (
                <RowDayCell
                    role="row"
                    aria-label={`Week ${weekIndex + 1}`}
                    key={weekIndex}
                    onMouseLeave={handleMouseLeaveCell}
                >
                    {week.map((day, dayIndex) => {
                        return (
                            <SingleCell
                                key={`day-${dayIndex}`}
                                date={day}
                                calendarDate={calendarDate}
                                selectedDate={selectedDate}
                                hoverDate={hoverValue}
                                focusDate={focusValue}
                                minDate={minDate}
                                maxDate={maxDate}
                                disabledDates={disabledDates}
                                allowDisabledSelection={allowDisabledSelection}
                                showActiveMonthDaysOnly={
                                    showActiveMonthDaysOnly
                                }
                                onSelect={handleDayClick}
                                onHover={handleHoverCell}
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
            data-testid="calendar-content"
            role="grid"
            onBlur={handleOnBlur}
            aria-label="Date grid"
        >
            {renderHeader()}
            {renderDayCells()}
        </Wrapper>
    );
};
