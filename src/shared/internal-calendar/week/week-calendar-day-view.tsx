import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import { CalendarHelper } from "../../../util/calendar-helper";
import { HeaderCell, RowDayCell, Wrapper } from "../standard";
import { CommonCalendarProps } from "../types";
import { WeekDayCell } from "./week-day-cell";

interface WeekCalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}

export const WeekCalendarDayView = ({
    calendarDate,
    disabledDates,
    selectedStartDate,
    onSelect,
    onHover,
    minDate,
    maxDate,
    allowDisabledSelection,
}: WeekCalendarDayViewProps) => {
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
        const firstDayOfWeek = value.startOf("week");

        onSelect(firstDayOfWeek);

        if (!!value && !dayjs(value).isSame(firstDayOfWeek, "month")) {
            setHoverValue("");
        }
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
                            <WeekDayCell
                                key={`day-${dayIndex}`}
                                date={day}
                                calendarDate={calendarDate}
                                selectedDate={selectedStartDate}
                                hoverDate={hoverValue}
                                minDate={minDate}
                                maxDate={maxDate}
                                disabledDates={disabledDates}
                                allowDisabledSelection={allowDisabledSelection}
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
