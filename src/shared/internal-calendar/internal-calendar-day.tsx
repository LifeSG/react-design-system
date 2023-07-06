import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useMemo, useState } from "react";
import { Text } from "../../text/text";
import { CalendarHelper } from "../../util/calendar-helper";
import { CommonCalendarProps, FocusType, InternalCalendarProps } from "./types";
import { CalendarDayCell } from "./calendar-day-cell";
import { CalendarDayStyleHelper } from "./calendar-day-style-helper";
import { HeaderCell, RowDayCell, Wrapper } from "./internal-calendar-day.style";

dayjs.extend(isBetween);

export type DayVariant = "default" | "other-month" | "today";
export type HoverDirection =
    | "hover-start"
    | "hover-end"
    | "overlap-start"
    | "overlap-end"
    | "full-overlap-start"
    | "full-overlap-end"
    | "reset-start"
    | "reset-end";

interface CalendarDayProps
    extends CommonCalendarProps,
        Pick<InternalCalendarProps, "variant"> {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}

export const InternalCalendarDay = ({
    calendarDate,
    currentFocus,
    disabledDates,
    selectedStartDate,
    selectedEndDate,
    onSelect,
    onHover,
    isNewSelection,
    minDate,
    maxDate,
    variant,
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

        onSelect(value);
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

    const getHoverDirection = (): HoverDirection => {
        if (!hoverValue || variant === "single") {
            return null;
        }

        const hoverDay = dayjs(hoverValue);

        if (selectedStartDate && selectedEndDate) {
            if (hoverDay.isBefore(selectedStartDate)) {
                if (currentFocus === "start") {
                    return "full-overlap-start";
                } else if (currentFocus === "end") {
                    return "reset-end";
                }
            } else if (hoverDay.isAfter(selectedEndDate)) {
                if (currentFocus === "end") {
                    return "full-overlap-end";
                } else if (currentFocus === "start") {
                    return "reset-start";
                }
            } else if (
                hoverDay.isBetween(
                    selectedStartDate,
                    selectedEndDate,
                    "day",
                    "[]"
                ) &&
                ![selectedStartDate, selectedEndDate].includes(hoverValue)
            ) {
                if (currentFocus === "start") {
                    return "overlap-start";
                } else if (currentFocus === "end") {
                    return "overlap-end";
                }
            }
        }

        // handle hovering to start/end if didn't exist another selected value
        if (selectedStartDate && !selectedEndDate) {
            if (hoverDay.isAfter(selectedStartDate)) {
                if (currentFocus === "end") {
                    return "hover-end";
                }
            }
        } else if (!selectedStartDate && selectedEndDate) {
            if (hoverDay.isBefore(selectedEndDate)) {
                if (currentFocus === "start") {
                    return "hover-start";
                }
            }
        }

        return null;
    };

    const hoverDirection: HoverDirection = getHoverDirection();

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
                        } = CalendarDayStyleHelper.generateStyleProps(
                            day,
                            selectedStartDate,
                            selectedEndDate,
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
                            <CalendarDayCell
                                key={`day-${dayIndex}`}
                                type="regular"
                                dayDate={day}
                                variant={variant}
                                styleLeftProps={styleLeftProps}
                                styleRightProps={styleRightProps}
                                styleCircleProps={styleCircleProps}
                                styleLabelProps={styleLabelProps}
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
