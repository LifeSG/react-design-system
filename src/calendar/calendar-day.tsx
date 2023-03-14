import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
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
    | "overlap-start"
    | "overlap-end"
    | "full-overlap-start"
    | "full-overlap-end";

interface CalendarDayProps
    extends Pick<CalendarProps, "disabledDates" | "variant" | "between"> {
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
    between,
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

    const getHoverDirection = (): HoverDirection => {
        if (!hoverValue || variant === "single") {
            return null;
        }

        if (selectedStartDate && selectedEndDate) {
            if (dayjs(hoverValue).isBefore(selectedStartDate)) {
                if (currentFocus === "start") {
                    return "full-overlap-start";
                }
            } else if (dayjs(hoverValue).isAfter(selectedEndDate)) {
                if (currentFocus === "end") {
                    return "full-overlap-end";
                }
            } else if (
                dayjs(hoverValue).isBetween(
                    selectedStartDate,
                    selectedEndDate,
                    "day",
                    "[]"
                )
            ) {
                if (
                    currentFocus === "start" &&
                    ![selectedStartDate, selectedEndDate].includes(hoverValue)
                ) {
                    return "overlap-start";
                } else if (currentFocus === "end") {
                    return "overlap-end";
                }
            }
        }

        // handle hovering to start/end if didn't exist another selected value
        if (selectedStartDate && !selectedEndDate) {
            if (dayjs(hoverValue).isAfter(selectedStartDate)) {
                if (currentFocus === "end") {
                    return "hover-end";
                }
            }
        } else if (!selectedStartDate && selectedEndDate) {
            if (dayjs(hoverValue).isBefore(selectedEndDate)) {
                if (currentFocus === "start") {
                    return "hover-start";
                }
            }
        }

        return null;
    };

    const hoverDirection: HoverDirection = getHoverDirection();

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format("YYYY-MM-DD");

        const styleLeftProps: StyleLeftProps = {},
            styleRightProps: StyleRightProps = {},
            styleCircleProps: StyleCircleProps = {},
            styleLabelProps: StyleLabelProps = {};

        // disabled other date than between range
        // disabled date which includes disabledDates
        // disabled after selected end date in currentFocus 'start'
        // disabled before selected start date in currentFocus 'end'
        if (
            (between && !day.isBetween(between[0], between[1], "day", "[]")) ||
            (disabledDates && disabledDates.includes(dateStartWithYear)) ||
            (currentFocus === "start" &&
                selectedEndDate &&
                day.isAfter(selectedEndDate)) ||
            (currentFocus === "end" &&
                selectedStartDate &&
                day.isBefore(selectedStartDate))
        ) {
            styleCircleProps.$disabled = true;
            styleLabelProps.$disabled = true;
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

            if (day.isSame(selectedStartDate)) {
                styleRightProps.$selected = true;
            } else if (day.isSame(selectedEndDate)) {
                styleLeftProps.$selected = true;
            } else {
                styleLeftProps.$selected = true;
                styleRightProps.$selected = true;
            }
        }

        if (
            hoverDirection === "hover-start" &&
            day.isBetween(selectedEndDate, hoverValue, "day", "[]")
        ) {
            styleLabelProps.$selected = true;

            if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$hovered = true;
            } else if (hoverValue === dateStartWithYear) {
                styleRightProps.$hovered = true;
            } else {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
            }
        }

        if (
            hoverDirection === "hover-end" &&
            day.isBetween(selectedStartDate, hoverValue, "day", "[]")
        ) {
            styleLabelProps.$selected = true;

            if (selectedStartDate === dateStartWithYear) {
                styleRightProps.$hovered = true;
            } else if (hoverValue === dateStartWithYear) {
                styleLeftProps.$hovered = true;
            } else {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
            }
        }

        if (
            hoverDirection === "overlap-start" &&
            day.isBetween(selectedEndDate, hoverValue, "day", "[]")
        ) {
            if (hoverValue === dateStartWithYear) {
                styleRightProps.$overlap = true;

                styleCircleProps.$overlap = true;
            } else if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else {
                styleLeftProps.$overlap = true;
                styleRightProps.$overlap = true;
            }
        }

        if (
            hoverDirection === "overlap-end" &&
            day.isBetween(selectedStartDate, hoverValue, "day", "[]")
        ) {
            if (hoverValue === dateStartWithYear) {
                styleLeftProps.$overlap = true;

                styleCircleProps.$overlap = true;
            } else if (selectedStartDate === dateStartWithYear) {
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else {
                styleLeftProps.$overlap = true;
                styleRightProps.$overlap = true;
            }
        }

        if (hoverDirection === "full-overlap-start") {
            if (day.isBetween(selectedEndDate, hoverValue, "day", "[]")) {
                if (selectedStartDate === dateStartWithYear) {
                    styleLeftProps.$hovered = true;
                    styleRightProps.$overlap = true;
                    styleCircleProps.$overlap = true;
                } else if (selectedEndDate === dateStartWithYear) {
                    styleLeftProps.$overlap = true;
                    styleCircleProps.$overlap = true;
                } else if (day.isSame(hoverValue)) {
                    styleRightProps.$hovered = true;
                    styleLabelProps.$selected = true;
                } else if (
                    day.isBetween(selectedStartDate, hoverValue, "day", "()")
                ) {
                    styleLeftProps.$hovered = true;
                    styleRightProps.$hovered = true;
                    styleLabelProps.$selected = true;
                }
            }
        }

        if (hoverDirection === "full-overlap-end") {
            if (day.isBetween(selectedStartDate, hoverValue, "day", "[]")) {
                if (selectedEndDate === dateStartWithYear) {
                    styleLeftProps.$overlap = true;
                    styleRightProps.$hovered = true;
                    styleCircleProps.$overlap = true;
                } else if (selectedStartDate === dateStartWithYear) {
                    styleRightProps.$overlap = true;
                    styleCircleProps.$overlap = true;
                } else if (day.isSame(hoverValue)) {
                    styleLeftProps.$hovered = true;
                    styleLabelProps.$selected = true;
                } else if (
                    day.isBetween(selectedEndDate, hoverValue, "day", "()")
                ) {
                    styleLeftProps.$hovered = true;
                    styleRightProps.$hovered = true;
                    styleLabelProps.$selected = true;
                }
            }
        }

        if (
            ["full-overlap-end", "full-overlap-start"].includes(
                hoverDirection
            ) &&
            day.isBetween(selectedStartDate, selectedEndDate, "day", "()")
        ) {
            styleLeftProps.$overlap = true;
            styleRightProps.$overlap = true;
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
