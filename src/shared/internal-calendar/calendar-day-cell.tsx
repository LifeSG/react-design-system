import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { CommonCalendarProps, FocusType, View } from "./types";
import { CalendarDayStyleHelper } from "./calendar-day-style-helper";
import { DayVariant, HoverDirection } from "./internal-calendar-day";
import {
    DayLabel,
    GrowDayCell,
    InteractiveCircle,
    OverflowDisplay,
    RowDayCell,
} from "./internal-calendar-day.style";
import {
    OverflowCircle,
    WeekDayLabel,
    WeekInteractiveCircle,
    WeekOverflowDisplay,
} from "./internal-week-selection-calendar-day.style";

type Variant = "regular" | "week";

interface CalendarDayCellProps extends CommonCalendarProps {
    // Common props
    weeksOfTheMonth: Dayjs[][];
    calendarDate: Dayjs;
    selectedStart: string;
    selectedEnd: string;
    hoverValue: string;
    variant: Variant;
    onDayClick: (value: Dayjs, isDisabled: boolean) => void;
    onHoverCell: (value: string, isDisabled: boolean) => void;
    onMouseLeave: () => void;
    // Only for regular
    currentFocus?: FocusType | undefined;
    hoverDirection?: HoverDirection | undefined;
    isNewSelection?: boolean | undefined;
    // Only for week
    currentView?: View | undefined;
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
    onDayClick,
    onHoverCell,
    onMouseLeave,
    currentFocus,
    hoverDirection,
    isNewSelection,
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
                                } = CalendarDayStyleHelper.generateStyleProps(
                                    day,
                                    selectedStart,
                                    selectedEnd,
                                    hoverValue,
                                    hoverDirection,
                                    currentFocus,
                                    minDate,
                                    maxDate,
                                    disabledDates,
                                    allowDisabledSelection,
                                    isNewSelection
                                );

                                return (
                                    <GrowDayCell key={`day-${dayIndex}`}>
                                        <OverflowDisplay
                                            $position="left"
                                            {...styleLeftProps}
                                        />
                                        <OverflowDisplay
                                            $position="right"
                                            {...styleRightProps}
                                        />
                                        <InteractiveCircle
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
                                        >
                                            <DayLabel
                                                weight={
                                                    styleLabelProps["$selected"]
                                                        ? "semibold"
                                                        : "regular"
                                                }
                                                $variant={variant}
                                                {...styleLabelProps}
                                            >
                                                {day.format("D")}
                                            </DayLabel>
                                        </InteractiveCircle>
                                    </GrowDayCell>
                                );
                            })}
                        </RowDayCell>
                    );
                });
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
