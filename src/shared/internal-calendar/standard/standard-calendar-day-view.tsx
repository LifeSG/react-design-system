import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useMemo, useState } from "react";
import { CalendarHelper } from "../../../util/calendar-helper";
import { CommonCalendarProps, FocusType } from "../types";
import {
    HeaderCell,
    RowDayCell,
    Wrapper,
} from "./standard-calendar-day-view.style";
import { StandardCell } from "./standard-cell";

dayjs.extend(isBetween);

// TODO: to remove after all references have been cleaned up
export type DayVariant = "default" | "other-month" | "today";

interface CalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string | undefined;
    selectedEndDate: string | undefined;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    setCalendarDate?: (date: string | undefined) => void;
}

export const StandardCalendarDayView = ({
    calendarDate,
    currentFocus,
    disabledDates,
    selectedStartDate,
    selectedEndDate,
    onSelect,
    onHover,
    isNewSelection,
    minDate,
    maxDate,
    allowDisabledSelection,
    showActiveMonthDaysOnly,
    setCalendarDate,
    isFocusable = false,
}: CalendarDayViewProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const weeksOfTheMonth = useMemo(
        (): Dayjs[][] => CalendarHelper.generateDays(calendarDate),
        [calendarDate]
    );
    const dateToFocus = useMemo((): Dayjs => {
        // As specified in the Grid Pattern, only one element in the calendar grid is in the Tab sequence.
        // This function determines which date should be focused based on the state of the calendar.

        // Selected start date is in the current month
        if (
            selectedStartDate &&
            dayjs(selectedStartDate).isSame(calendarDate, "month")
        ) {
            return dayjs(selectedStartDate);
        }
        // Selected end date is in the current month
        if (
            selectedEndDate &&
            dayjs(selectedEndDate).isSame(calendarDate, "month")
        ) {
            return dayjs(selectedEndDate);
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
    }, [calendarDate, selectedStartDate, selectedEndDate]);

    const [hoverValue, setHoverValue] = useState<string>("");

    const isWithinGeneratedDays = (value: Dayjs) => {
        if (showActiveMonthDaysOnly) {
            return value.isSame(calendarDate, "month");
        }
        const firstDay = weeksOfTheMonth[0][0];
        const lastDay = weeksOfTheMonth[weeksOfTheMonth.length - 1][6];

        return value.isBetween(firstDay, lastDay, null, "[]");
    };

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
        const valueDayjs = dayjs(value);

        if (
            CalendarHelper.isWithinRange(
                valueDayjs,
                minDate ? dayjs(minDate) : undefined,
                maxDate ? dayjs(maxDate) : undefined
            )
        ) {
            if (!isWithinGeneratedDays(valueDayjs)) {
                setCalendarDate?.(value);
            }
            setHoverValue(value);
            onHover(value);
        }
    };

    const handleMouseLeaveCell = () => {
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
        const firstDay =
            minDate && calendarDate.isSame(dayjs(minDate), "month")
                ? dayjs(minDate).date()
                : 1;
        return weeksOfTheMonth.map((week, weekIndex) => {
            return (
                <RowDayCell
                    role="row"
                    aria-label={`Week ${weekIndex + 1}`}
                    key={weekIndex}
                    onMouseLeave={handleMouseLeaveCell}
                    onBlur={handleMouseLeaveCell}
                >
                    {week.map((day, dayIndex) => {
                        const isDateToFocus = day.isSame(dateToFocus, "day");

                        // First day of the month, should always be in tab order
                        const isFirstDayOfMonth =
                            day.date() === firstDay &&
                            day.month() === calendarDate.month();

                        return (
                            <StandardCell
                                key={`day-${dayIndex}`}
                                date={day}
                                calendarDate={calendarDate}
                                startDate={selectedStartDate}
                                endDate={selectedEndDate}
                                hoverDate={hoverValue}
                                currentFocus={currentFocus}
                                minDate={minDate}
                                maxDate={maxDate}
                                disabledDates={disabledDates}
                                allowDisabledSelection={allowDisabledSelection}
                                isNewSelection={isNewSelection}
                                showActiveMonthDaysOnly={
                                    showActiveMonthDaysOnly
                                }
                                onSelect={handleDayClick}
                                onHover={handleHoverCell}
                                onFocus={handleFocusCell}
                                tabIndex={
                                    isFocusable
                                        ? isDateToFocus || isFirstDayOfMonth
                                            ? 0
                                            : -1
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
            aria-label="Calendar grid"
            data-testid="calendar-content"
        >
            {renderHeader()}
            {renderDayCells()}
        </Wrapper>
    );
};
