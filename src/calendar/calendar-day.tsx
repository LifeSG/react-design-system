import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { CalendarHelper } from "src/util/calendar-helper";
import {
    CalendarDaySection,
    Circle,
    DayNumber,
    GrowDayCell,
    InteractiveCircle,
    LeftCell,
    RightCell,
    WeekCell,
    WeekDaysContainer,
} from "./calendar-day.style";
import { CalendarDayProps, VariantDay } from "./types";

export const CalendarDay = ({
    calendarDate,
    disabledDates,
    handleDayClick,
    selectedStartDate,
}: CalendarDayProps) => {
    const generateDayClass = (date: string): string => {
        const classes: string[] = [];

        if (selectedStartDate === date) {
            classes.push("selected-start");
        }

        return classes.join(" ");
    };

    const generateDayStatus = (day: Dayjs) => {
        const dateStartWithYear = dayjs(day).format("YYYY-MM-DD");
        let isDisabled = false;

        if (disabledDates && disabledDates.length) {
            isDisabled = disabledDates.includes(dateStartWithYear);
        }
        const variant: VariantDay =
            calendarDate.month() !== day.month()
                ? "nextMonth"
                : dayjs().isSame(day, "day")
                ? "today"
                : "default";

        return {
            dateStartWithYear,
            isDisabled,
            variant,
        };
    };

    // =============================================================================
    // Calendar Generate
    // =============================================================================

    const generateWeeksOfTheMonth = useMemo(
        (): Dayjs[][] => CalendarHelper.generateDay(calendarDate),
        [calendarDate]
    );

    return (
        <>
            <WeekDaysContainer>
                {generateWeeksOfTheMonth[0].map((day, index) => (
                    <WeekCell key={`week-day-${index}`}>
                        {dayjs(day).format("ddd")}
                    </WeekCell>
                ))}
            </WeekDaysContainer>
            {generateWeeksOfTheMonth.map((week, weekIndex) => (
                <CalendarDaySection key={`week-${weekIndex}`}>
                    {week.map((day, dayIndex) => {
                        const { dateStartWithYear, isDisabled, variant } =
                            generateDayStatus(day);

                        const classNames = generateDayClass(dateStartWithYear);

                        return (
                            <GrowDayCell
                                key={`day-${dayIndex}`}
                                className={classNames}
                            >
                                <LeftCell data-cell="left">
                                    <Circle
                                        data-circle="left"
                                        position="left"
                                        variant={variant}
                                    />
                                </LeftCell>
                                <RightCell data-cell="right">
                                    <Circle
                                        data-circle="right"
                                        position="right"
                                        variant={variant}
                                    />
                                </RightCell>
                                <DayNumber
                                    variant={variant}
                                    disabled={isDisabled}
                                >
                                    {dayjs(day).format("DD")}
                                </DayNumber>
                                <InteractiveCircle
                                    data-day={dateStartWithYear}
                                    disabled={isDisabled}
                                    onClick={() =>
                                        handleDayClick(dateStartWithYear)
                                    }
                                />
                            </GrowDayCell>
                        );
                    })}
                </CalendarDaySection>
            ))}
        </>
    );
};
