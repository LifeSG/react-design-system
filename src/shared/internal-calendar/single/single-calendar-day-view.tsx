import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useMemo, useState } from "react";
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
            <HeaderCell key={`week-day-${index}`}>
                {dayjs(day).format("ddd")}
            </HeaderCell>
        ));
    };

    const renderDayCells = () => {
        return weeksOfTheMonth.map((week, weekIndex) => {
            return (
                <RowDayCell key={weekIndex} onMouseLeave={handleMouseLeaveCell}>
                    {week.map((day, dayIndex) => {
                        return (
                            <SingleCell
                                key={`day-${dayIndex}`}
                                date={day}
                                calendarDate={calendarDate}
                                selectedDate={selectedDate}
                                hoverDate={hoverValue}
                                minDate={minDate}
                                maxDate={maxDate}
                                disabledDates={disabledDates}
                                allowDisabledSelection={allowDisabledSelection}
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
        <Wrapper data-testid="calendar-content">
            {renderHeader()}
            {renderDayCells()}
        </Wrapper>
    );
};
