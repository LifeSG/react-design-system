import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
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
}: FixedRangeCalendarDayViewProps) => {
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

        if (!!value && !dayjs(value).isSame(value, "month")) {
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
                            <FixedRangeDayCell
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
                                numberOfDays={numberOfDays}
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
