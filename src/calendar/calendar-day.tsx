import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import { DateInputVariant } from "../date-input";
import { Text } from "../text/text";
import { CalendarHelper } from "../util/calendar-helper";
import {
    DayLabel,
    GrowDayCell,
    HeaderCell,
    InteractiveCircle,
    OverflowDisplay,
    RowDayCell,
    StyleCircleProps,
    StyleLabelProps,
    StyleLeftProps,
    StyleRightProps,
    Wrapper,
} from "./calendar-day.style";
import { CalendarProps, CalendarType, FocusType } from "./types";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export type DayVariant = "default" | "other-month" | "today";
type HoverDirection =
    | "hover-start"
    | "hover-end"
    | "start-overlap"
    | "end-overlap"
    | "full-start-overlap"
    | "full-end-overlap";

interface CalendarDayProps
    extends Pick<CalendarProps, "disabledDates" | "variant"> {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    type: CalendarType;
}

export const CalendarDay = ({
    calendarDate,
    currentFocus,
    disabledDates,
    selectedStartDate,
    selectedEndDate,
    onSelect,
    onHover,
    type,
    variant,
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
    const handleDayClick = (value: Dayjs) => {
        onSelect(value);
    };

    const handleHoverCell = (value: string) => {
        if (type !== "input") return;

        setHoverValue(value);
        onHover(value);
    };

    const handleMouseLeaveCell = () => {
        if (type !== "input") return;

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

    const getHoverDirection = (day: Dayjs): HoverDirection => {
        if (!hoverValue || variant === "single") {
            return null;
        }

        if (selectedStartDate && selectedEndDate) {
            if (
                day.isBetween(
                    selectedStartDate,
                    selectedEndDate,
                    "day",
                    "[]"
                ) &&
                (dayjs(hoverValue).isAfter(selectedEndDate) ||
                    dayjs(hoverValue).isBefore(selectedStartDate))
            ) {
                if (
                    currentFocus === "start" &&
                    dayjs(hoverValue).isBefore(selectedStartDate)
                ) {
                    return "full-start-overlap";
                } else if (
                    currentFocus === "end" &&
                    dayjs(hoverValue).isAfter(selectedEndDate)
                ) {
                    return "full-end-overlap";
                }
            } else if (
                dayjs(hoverValue).isBefore(selectedStartDate) &&
                day.isBetween(selectedStartDate, hoverValue, "day", "[]")
            ) {
                if (currentFocus === "start") {
                    return "hover-start";
                }
            } else if (
                dayjs(hoverValue).isAfter(selectedEndDate) &&
                day.isBetween(selectedEndDate, hoverValue, "day", "[]")
            ) {
                if (currentFocus === "end") {
                    return "hover-end";
                }
            } else if (
                dayjs(hoverValue).isBetween(
                    selectedStartDate,
                    selectedEndDate,
                    "day",
                    "()"
                )
            ) {
                if (
                    currentFocus === "start" &&
                    day.isBetween(selectedEndDate, hoverValue, "day", "[]")
                ) {
                    return "start-overlap";
                } else if (
                    currentFocus === "end" &&
                    day.isBetween(selectedStartDate, hoverValue, "day", "[]")
                ) {
                    return "end-overlap";
                }
            }
        }

        // handle hovering to start/end if didn't exist other selected value
        if (selectedStartDate && !selectedEndDate) {
            if (
                dayjs(hoverValue).isAfter(selectedStartDate) &&
                day.isBetween(selectedStartDate, hoverValue, "day", "[]")
            ) {
                return "hover-end";
            }
        } else if (!selectedStartDate && selectedEndDate) {
            if (
                dayjs(hoverValue).isBefore(selectedEndDate) &&
                day.isBetween(selectedEndDate, hoverValue, "day", "[]")
            ) {
                return "hover-start";
            }
        }

        return null;
    };

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format("YYYY-MM-DD");
        const hoverDirection = getHoverDirection(day);

        const styleLeftProps: StyleLeftProps = {},
            styleRightProps: StyleRightProps = {},
            styleCircleProps: StyleCircleProps = {},
            styleLabelProps: StyleLabelProps = {};

        if (disabledDates && disabledDates.length) {
            const isDisabled = disabledDates.includes(dateStartWithYear);
            styleCircleProps.$disabled = isDisabled;
            styleLabelProps.$disabled = isDisabled;
        }

        if ([selectedStartDate, selectedEndDate].includes(dateStartWithYear)) {
            styleCircleProps.$selected = true;
            styleLabelProps.$selected = true;
        }

        // get between
        if (
            selectedStartDate &&
            selectedEndDate &&
            day.isBetween(selectedStartDate, selectedEndDate, "day", "[]")
        ) {
            styleLabelProps.$selected = true;

            if (
                ![selectedStartDate, selectedEndDate].includes(
                    day.format("YYYY-MM-DD")
                )
            ) {
                styleLeftProps.$selected = true;
                styleRightProps.$selected = true;
            }

            if (day.isSame(selectedStartDate)) {
                styleRightProps.$selected = true;
            } else if (day.isSame(selectedEndDate)) {
                styleLeftProps.$selected = true;
            }
        }

        if (hoverDirection === "hover-start") {
            styleLabelProps.$hovered = true;

            if (![selectedEndDate, hoverValue].includes(dateStartWithYear)) {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
            } else if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$hovered = true;
            } else if (hoverValue === dateStartWithYear) {
                styleRightProps.$hovered = true;
            }
        }

        if (hoverDirection === "hover-end") {
            styleLabelProps.$hovered = true;

            if (![selectedStartDate, hoverValue].includes(dateStartWithYear)) {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
            } else if (selectedStartDate === dateStartWithYear) {
                styleRightProps.$hovered = true;
            } else if (hoverValue === dateStartWithYear) {
                styleLeftProps.$hovered = true;
            }
        }

        if (hoverDirection === "start-overlap") {
            styleLabelProps.$hovered = true;

            if (![hoverValue, selectedEndDate].includes(dateStartWithYear)) {
                styleLeftProps.$selected = true;
                styleLeftProps.$overlap = true;
                styleRightProps.$selected = true;
                styleRightProps.$overlap = true;
            } else if (hoverValue === dateStartWithYear) {
                styleRightProps.$overlap = true;

                styleCircleProps.$overlap = true;
                styleLabelProps.$selected = true;
            } else if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleCircleProps.$overlap = true;
            }
        }

        if (hoverDirection === "end-overlap") {
            if (![hoverValue, selectedStartDate].includes(dateStartWithYear)) {
                styleLeftProps.$selected = true;
                styleLeftProps.$overlap = true;
                styleRightProps.$selected = true;
                styleRightProps.$overlap = true;
            } else if (hoverValue === dateStartWithYear) {
                styleLeftProps.$overlap = true;

                styleCircleProps.$overlap = true;
                styleLabelProps.$selected = true;
            } else if (selectedStartDate === dateStartWithYear) {
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            }
        }

        if (hoverDirection === "full-start-overlap") {
            if (
                ![selectedStartDate, selectedEndDate].includes(
                    dateStartWithYear
                )
            ) {
                styleLeftProps.$selected = true;
                styleLeftProps.$overlap = true;
                styleRightProps.$selected = true;
                styleRightProps.$overlap = true;
            } else if (selectedStartDate === dateStartWithYear) {
                styleLeftProps.$hovered = true;
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleCircleProps.$overlap = true;
            }
        }

        if (hoverDirection === "full-end-overlap") {
            if (
                ![selectedStartDate, selectedEndDate].includes(
                    dateStartWithYear
                )
            ) {
                styleLeftProps.$selected = true;
                styleLeftProps.$overlap = true;
                styleRightProps.$selected = true;
                styleRightProps.$overlap = true;
            } else if (selectedStartDate === dateStartWithYear) {
                styleRightProps.$overlap = true;

                styleLabelProps.$selected = true;
                styleCircleProps.$overlap = true;
            } else if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleRightProps.$hovered = true;
                styleCircleProps.$overlap = true;
            }
        }

        // disabled date
        if (
            currentFocus === "start" &&
            selectedEndDate &&
            day.isAfter(selectedEndDate)
        ) {
            styleCircleProps.$disabled = true;
            styleLabelProps.$disabled = true;
        } else if (
            currentFocus === "end" &&
            selectedStartDate &&
            day.isBefore(selectedStartDate)
        ) {
            styleCircleProps.$disabled = true;
            styleLabelProps.$disabled = true;
        }

        return {
            styleLeftProps,
            styleRightProps,
            styleCircleProps,
            styleLabelProps,
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
                        } = generateStyleProps(day);

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
                                    onClick={() => handleDayClick(day)}
                                    onMouseEnter={() =>
                                        handleHoverCell(formattedDay)
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
    };

    return (
        <Wrapper $type={type}>
            {renderHeader()}
            {renderDayCells()}
        </Wrapper>
    );
};
