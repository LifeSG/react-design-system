import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import { Text } from "../../text/text";
import { CommonCalendarProps, View } from "./types";
import { CalendarDayCell } from "./calendar-day-cell";
import { CalendarHelper } from "../../util/calendar-helper";
import { DayVariant } from "./internal-calendar-day";
import { CalendarDayStyleHelper } from "./calendar-day-style-helper";
import { HeaderCell, RowDayCell, Wrapper } from "./internal-calendar-day.style";

interface CalendarWeekSelectProps extends CommonCalendarProps {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentView: View;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}

export const InternalFixedRangeSelectionCalendarDay = ({
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
}: CalendarWeekSelectProps) => {
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

        if (!!value && !dayjs(value).isSame(value, "month")) {
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
                        const { variant } = generateDayStatus(day);
                        const {
                            styleLeftProps,
                            styleRightProps,
                            styleCircleProps,
                            styleLabelProps,
                            styleOverflowCirleProps,
                        } =
                            CalendarDayStyleHelper.getStylePropsForFixedRangeSelection(
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
                            <CalendarDayCell
                                key={`day-${dayIndex}`}
                                type="week"
                                dayDate={day}
                                variant={variant}
                                currentView={currentView}
                                styleLeftProps={styleLeftProps}
                                styleRightProps={styleRightProps}
                                styleCircleProps={styleCircleProps}
                                styleLabelProps={styleLabelProps}
                                styleOverflowCirleProps={
                                    styleOverflowCirleProps
                                }
                                onDayClick={handleDayClick}
                                onHoverCell={handleHoverCell}
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
