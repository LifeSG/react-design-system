import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { CalendarHelper } from "../util/calendar-helper";
import {
    CalendarDaySection,
    DayCellStyleProps,
    DayNumber,
    GrowDayCell,
    InteractiveCircle,
    LeftCell,
    LeftCircle,
    RightCell,
    RightCircle,
    WeekCell,
    WeekDaysContainer,
} from "./calendar-day.style";
import { CalendarProps } from "./types";

export type DayVariant = "default" | "other-month" | "today";

interface CalendarDayProps extends Pick<CalendarProps, "disabledDates"> {
    selectedStartDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
}

export const CalendarDay = ({
    calendarDate,
    disabledDates,
    selectedStartDate,
    onSelect,
}: CalendarDayProps) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDayClick = (value: Dayjs) => {
        onSelect(value);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const generateDayClass = (day: Dayjs): DayCellStyleProps => {
        const dateStartWithYear = day.format("YYYY-MM-DD");
        const styleProps = {};

        if (selectedStartDate === dateStartWithYear) {
            styleProps["$selected"] = true;
        }

        return styleProps;
    };

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

    const weeksOfTheMonth = useMemo(
        (): Dayjs[][] => CalendarHelper.generateDays(calendarDate),
        [calendarDate]
    );

    return (
        <>
            <WeekDaysContainer>
                {weeksOfTheMonth[0].map((day, index) => (
                    <WeekCell key={`week-day-${index}`}>
                        {dayjs(day).format("ddd")}
                    </WeekCell>
                ))}
            </WeekDaysContainer>
            {weeksOfTheMonth.map((week, weekIndex) => (
                <CalendarDaySection key={`week-${weekIndex}`}>
                    {week.map((day, dayIndex) => {
                        const { isDisabled, variant } = generateDayStatus(day);

                        const styleProps = generateDayClass(day);

                        return (
                            <GrowDayCell
                                key={`day-${dayIndex}`}
                                {...styleProps}
                            >
                                <LeftCell>
                                    <LeftCircle />
                                </LeftCell>
                                <RightCell>
                                    <RightCircle />
                                </RightCell>
                                <DayNumber
                                    $variant={variant}
                                    $disabled={isDisabled}
                                >
                                    {day.format("D")}
                                </DayNumber>
                                <InteractiveCircle
                                    $disabled={isDisabled}
                                    onClick={() => handleDayClick(day)}
                                />
                            </GrowDayCell>
                        );
                    })}
                </CalendarDaySection>
            ))}
        </>
    );
};
