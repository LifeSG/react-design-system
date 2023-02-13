import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { CalendarHelper } from "../util/calendar-helper";
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
import { CalendarDayProps, GenerateDayClass, VariantDay } from "./types";

export const CalendarDay = ({
    calendarDate,
    disabledDates,
    selectedStartDate,
    onSelect,
}: CalendarDayProps) => {
    const generateDayClass = (day: Dayjs): GenerateDayClass => {
        const dateStartWithYear = day.format("YYYY-MM-DD");
        const classProps = {};

        if (selectedStartDate === dateStartWithYear) {
            classProps["$selected"] = true;
        }

        return classProps;
    };

    const generateDayStatus = (day: Dayjs) => {
        const dateStartWithYear = day.format("YYYY-MM-DD");
        let isDisabled = false;

        if (disabledDates && disabledDates.length) {
            isDisabled = disabledDates.includes(dateStartWithYear);
        }
        const variant: VariantDay =
            calendarDate.month() !== day.month()
                ? "otherMonth"
                : dayjs().isSame(day, "day")
                ? "today"
                : "default";

        return {
            isDisabled,
            variant,
        };
    };

    const handleDayClick = (value: Dayjs) => {
        onSelect(value);
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
                        const { isDisabled, variant } = generateDayStatus(day);

                        const classProps = generateDayClass(day);

                        return (
                            <GrowDayCell
                                key={`day-${dayIndex}`}
                                {...classProps}
                            >
                                <LeftCell>
                                    <Circle
                                        $position="left"
                                        $variant={variant}
                                    />
                                </LeftCell>
                                <RightCell>
                                    <Circle
                                        $position="right"
                                        $variant={variant}
                                    />
                                </RightCell>
                                <DayNumber
                                    $variant={variant}
                                    $disabled={isDisabled}
                                >
                                    {day.format("DD")}
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
