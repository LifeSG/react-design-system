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
}: CalendarDayViewProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const weeksOfTheMonth = useMemo(
        (): Dayjs[][] => CalendarHelper.generateDays(calendarDate),
        [calendarDate]
    );
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
