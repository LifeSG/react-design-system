import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { Text } from "../text/text";
import { CalendarHelper } from "../util/calendar-helper";
import {
    DayContainer,
    DayLabel,
    GrowDayCell,
    HeaderCell,
    InteractiveCircle,
    OverflowDisplay,
    Wrapper,
} from "./calendar-day.style";
import { CalendarProps, CalendarType } from "./types";

export type DayVariant = "default" | "other-month" | "today";

interface CalendarDayProps extends Pick<CalendarProps, "disabledDates"> {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    type: CalendarType;
}

export const CalendarDay = ({
    calendarDate,
    disabledDates,
    selectedStartDate,
    selectedEndDate,
    onSelect,
    onHover,
    type,
}: CalendarDayProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const weeksOfTheMonth = useMemo(
        (): Dayjs[][] => CalendarHelper.generateDays(calendarDate),
        [calendarDate]
    );
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDayClick = (value: Dayjs) => {
        onSelect(value);
    };

    const handleHoverCell = (value: string) => {
        if (type !== "input") return;

        onHover(value);
    };

    const handleMouseLeaveCell = () => {
        if (type !== "input") return;

        // update displayValues action
        onHover("");
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const generateDayStatus = (day: Dayjs) => {
        const dateStartWithYear = day.format("YYYY-MM-DD");
        let isDisabled = false;

        if (disabledDates && disabledDates.length) {
            isDisabled = disabledDates.includes(dateStartWithYear);
        }
        const variant: DayVariant =
            calendarDate.month() !== day.month()
                ? "other-month"
                : dayjs().isSame(day, "day")
                ? "today"
                : "default";

        return {
            isDisabled,
            variant,
        };
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
        return weeksOfTheMonth.map((week) => {
            return week.map((day, dayIndex) => {
                const { isDisabled, variant } = generateDayStatus(day);
                const formattedDay = day.format("YYYY-MM-DD");

                const isSelected = [
                    selectedStartDate,
                    selectedEndDate,
                ].includes(formattedDay);

                return (
                    <GrowDayCell key={`day-${dayIndex}`}>
                        <OverflowDisplay $position="left" />
                        <OverflowDisplay $position="right" />
                        <InteractiveCircle
                            $variant={variant}
                            $selected={isSelected}
                            $disabled={isDisabled}
                            onMouseEnter={() => handleHoverCell(formattedDay)}
                            onClick={() => handleDayClick(day)}
                        >
                            <DayLabel
                                weight={isSelected ? "semibold" : "regular"}
                                $variant={variant}
                                $disabled={isDisabled}
                                $selected={isSelected}
                            >
                                {day.format("D")}
                            </DayLabel>
                        </InteractiveCircle>
                    </GrowDayCell>
                );
            });
        });
    };

    return (
        <Wrapper $type={type}>
            {renderHeader()}
            <DayContainer $type={type} onMouseLeave={handleMouseLeaveCell}>
                {renderDayCells()}
            </DayContainer>
        </Wrapper>
    );
};
