import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { Text } from "../text/text";
import { CalendarHelper } from "../util/calendar-helper";
import {
    DayLabel,
    GrowDayCell,
    HeaderCell,
    InteractiveCircle,
    OverflowDisplay,
    Wrapper,
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

                return (
                    <GrowDayCell
                        key={`day-${dayIndex}`}
                        $disabled={selectedStartDate === formattedDay}
                    >
                        <OverflowDisplay $position="left" />
                        <OverflowDisplay $position="right" />
                        <InteractiveCircle
                            $disabled={isDisabled}
                            onClick={() => handleDayClick(day)}
                        >
                            <DayLabel
                                weight="regular"
                                $variant={variant}
                                $disabled={isDisabled}
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
        <>
            <Wrapper>
                {renderHeader()}
                {renderDayCells()}
            </Wrapper>
            {/* <WeekDaysContainer>
                {weeksOfTheMonth[0].map((day, index) => (
                    <WeekCell key={`week-day-${index}`}>
                        {dayjs(day).format("ddd")}
                    </WeekCell>
                ))}
            </WeekDaysContainer>
            {daysOfAWeek.map((week, weekIndex) => (
                <CalendarDaySection key={`week-${weekIndex}`}>
                    {week.map((day, dayIndex) => {
                        const { isDisabled, variant } = generateDayStatus(day);

                        const styleProps = generateDayClass(day);

                        return (
                            <GrowDayCell
                                key={`day-${dayIndex}`}
                                {...styleProps}
                            >
                                <OverflowCell>
                                    <LeftCircle />
                                </OverflowCell>
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
            ))} */}
        </>
    );
};
