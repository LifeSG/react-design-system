import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { CommonCalendarProps, View } from "./types";
import { CalendarDayStyleHelper } from "./calendar-day-style-helper";
import { DayVariant } from "./internal-calendar-day";
import { GrowDayCell, RowDayCell } from "./internal-calendar-day.style";
import {
    OverflowCircle,
    WeekDayLabel,
    WeekInteractiveCircle,
    WeekOverflowDisplay,
} from "./internal-week-selection-calendar-day.style";

type Variant = "regular" | "week";

interface CalendarDayCellProps extends CommonCalendarProps {
    weeksOfTheMonth: Dayjs[][];
    calendarDate: Dayjs;
    selectedStart: string;
    selectedEnd: string;
    hoverValue: string;
    currentView: View;
    variant: Variant;
    onMouseLeave: () => void;
    onDayClick: (value: Dayjs, isDisabled: boolean) => void;
    onHoverCell: (value: string, isDisabled: boolean) => void;
}

export const CalendarDayCell = ({
    weeksOfTheMonth,
    calendarDate,
    selectedStart,
    selectedEnd,
    hoverValue,
    disabledDates,
    minDate,
    maxDate,
    currentView,
    allowDisabledSelection,
    variant,
    onMouseLeave,
    onDayClick,
    onHoverCell,
}: CalendarDayCellProps): JSX.Element => {
    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const generateDayStatus = (day: Dayjs) => {
        const variant: DayVariant =
            calendarDate.month() !== day.month()
                ? "other-month"
                : dayjs().isSame(day, "day")
                ? "today"
                : "default";

        return {
            variant,
        };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderDayCells = () => {
        switch (variant) {
            case "regular":
                break;
            case "week":
                return weeksOfTheMonth.map((week, weekIndex) => {
                    return (
                        <RowDayCell key={weekIndex} onMouseLeave={onMouseLeave}>
                            {week.map((day, dayIndex) => {
                                const formattedDay = day.format("YYYY-MM-DD");
                                const { variant } = generateDayStatus(day);

                                const {
                                    styleLeftProps,
                                    styleRightProps,
                                    styleCircleProps,
                                    styleLabelProps,
                                    styleOverflowCirleProps,
                                } =
                                    CalendarDayStyleHelper.getStylePropsForWeekSelection(
                                        day,
                                        selectedStart,
                                        selectedEnd,
                                        hoverValue,
                                        minDate,
                                        maxDate,
                                        disabledDates,
                                        allowDisabledSelection
                                    );

                                return (
                                    <GrowDayCell key={`day-${dayIndex}`}>
                                        <WeekOverflowDisplay
                                            $position="left"
                                            {...styleLeftProps}
                                        />
                                        <WeekOverflowDisplay
                                            $position="right"
                                            {...styleRightProps}
                                        />
                                        <WeekInteractiveCircle
                                            $variant={variant}
                                            onClick={() =>
                                                onDayClick(
                                                    day,
                                                    !styleCircleProps.$interactive
                                                )
                                            }
                                            onMouseEnter={() =>
                                                onHoverCell(
                                                    formattedDay,
                                                    !styleCircleProps.$interactive
                                                )
                                            }
                                            {...styleCircleProps}
                                            {...styleOverflowCirleProps}
                                        >
                                            <WeekDayLabel
                                                weight={
                                                    styleLabelProps["$selected"]
                                                        ? "semibold"
                                                        : "regular"
                                                }
                                                $variant={variant}
                                                $view={currentView}
                                                {...styleLabelProps}
                                            >
                                                {day.format("D")}
                                            </WeekDayLabel>
                                        </WeekInteractiveCircle>
                                        <OverflowCircle
                                            {...styleCircleProps}
                                            {...styleOverflowCirleProps}
                                        />
                                    </GrowDayCell>
                                );
                            })}
                        </RowDayCell>
                    );
                });
        }
    };

    return <>{renderDayCells()}</>;
};
