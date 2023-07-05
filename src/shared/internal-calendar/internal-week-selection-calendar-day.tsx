import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import { Text } from "../../text/text";
import { CommonCalendarProps, View } from "./types";
import { CalendarDayCell } from "./calendar-day-cell";
import { CalendarHelper } from "../../util/calendar-helper";
import { HeaderCell, Wrapper } from "./internal-calendar-day.style";

export type DayVariant = "default" | "other-month" | "today";

interface CalendarDayProps extends CommonCalendarProps {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentView: View;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}

export const InternalWeekSelectionCalendarDay = ({
    calendarDate,
    disabledDates,
    selectedStartDate,
    selectedEndDate,
    onSelect,
    onHover,
    minDate,
    maxDate,
    currentView,
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
    // HELPER FUNCTIONS
    // =============================================================================

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

    return (
        <Wrapper data-testid="calendar-content">
            {renderHeader()}
            <CalendarDayCell
                variant="week"
                weeksOfTheMonth={weeksOfTheMonth}
                calendarDate={calendarDate}
                selectedStart={selectedStartDate}
                selectedEnd={selectedEndDate}
                hoverValue={hoverValue}
                disabledDates={disabledDates}
                minDate={minDate}
                maxDate={maxDate}
                currentView={currentView}
                allowDisabledSelection={allowDisabledSelection}
                onMouseLeave={handleMouseLeaveCell}
                onDayClick={handleDayClick}
                onHoverCell={handleHoverCell}
            />
        </Wrapper>
    );
};
