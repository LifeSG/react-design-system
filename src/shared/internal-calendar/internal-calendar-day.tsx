import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useMemo, useState } from "react";
import { Text } from "../../text/text";
import { CalendarHelper } from "../../util/calendar-helper";
import { DayMonthCell } from "./day-of-month/day-of-month-cell";
import { HeaderCell, RowDayCell, Wrapper } from "./internal-calendar-day.style";
import { CommonCalendarProps, FocusType } from "./types";

dayjs.extend(isBetween);

export type DayVariant = "default" | "other-month" | "today";
export type HoverDirection =
    | "hover-start"
    | "hover-end"
    | "overlap-start"
    | "overlap-end"
    | "full-overlap-start"
    | "full-overlap-end"
    | "reset-start"
    | "reset-end";

interface CalendarDayProps extends CommonCalendarProps {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}

export const InternalCalendarDay = ({
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
}: CalendarDayProps) => {
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
                <Text.H6 weight="semibold">{dayjs(day).format("ddd")}</Text.H6>
            </HeaderCell>
        ));
    };

    const renderDayCells = () => {
        return weeksOfTheMonth.map((week, weekIndex) => {
            return (
                <RowDayCell key={weekIndex} onMouseLeave={handleMouseLeaveCell}>
                    {week.map((day, dayIndex) => {
                        return (
                            <DayMonthCell
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
