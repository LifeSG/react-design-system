import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import { Text } from "../../text/text";
import { CalendarHelper } from "../../util/calendar-helper";
import {
    DayLabel,
    GrowDayCell,
    HeaderCell,
    InteractiveCircle,
    OverflowCircle,
    OverflowDisplay,
    RowDayCell,
    Wrapper,
} from "./internal-week-selection-calendar-day.style";
import { CommonCalendarProps, View } from "./types";
import { CalendarDayStyleHelper } from "./calendar-day-style-helper";

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
                        const formattedDay = day.format("YYYY-MM-DD");
                        const { variant } = generateDayStatus(day);

                        const {
                            styleLeftProps,
                            styleRightProps,
                            styleCircleProps,
                            styleLabelProps,
                            styleOverflowCirleProps,
                        } = CalendarDayStyleHelper.getStylePropsForWeekSelection(
                            day,
                            selectedStartDate,
                            selectedEndDate,
                            hoverValue,
                            minDate,
                            maxDate,
                            disabledDates,
                            allowDisabledSelection
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
                                        handleDayClick(
                                            day,
                                            !styleCircleProps.$interactive
                                        )
                                    }
                                    onMouseEnter={() =>
                                        handleHoverCell(
                                            formattedDay,
                                            !styleCircleProps.$interactive
                                        )
                                    }
                                    {...styleCircleProps}
                                    {...styleOverflowCirleProps}
                                >
                                    <DayLabel
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
                                    </DayLabel>
                                </InteractiveCircle>
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
    };

    return (
        <Wrapper>
            {renderHeader()}
            {renderDayCells()}
        </Wrapper>
    );
};
