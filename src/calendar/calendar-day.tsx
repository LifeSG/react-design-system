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
    Wrapper,
} from "./calendar-day.style";
import { CalendarProps, CalendarType, FocusType } from "./types";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export type DayVariant = "default" | "other-month" | "today";

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

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format("YYYY-MM-DD");
        const a = day.format("YYYY-MM-DD");

        const styleLeftProps = {},
            styleRightProps = {},
            styleCircleProps = {},
            styleLabelProps = {},
            styleDayCellProps = {};

        if (disabledDates && disabledDates.length) {
            const isDisabled = disabledDates.includes(dateStartWithYear);
            styleCircleProps["$disabled"] = isDisabled;
            styleLabelProps["$disabled"] = isDisabled;
        }

        if ([selectedStartDate, selectedEndDate].includes(dateStartWithYear)) {
            styleCircleProps["$selectedDate"] = true;
            styleLabelProps["$selectedDate"] = true;
        }

        if (variant === "range" && currentFocus === "start") {
            // disabled before selected end date in current focus in 'start'
            if (day.isAfter(selectedEndDate) && selectedEndDate !== undefined) {
                styleCircleProps["$disabled"] = true;
                styleLabelProps["$disabled"] = true;
            }
        } else if (variant === "range" && currentFocus === "end") {
            // disabled before selected start date in current focus in 'end'
            if (
                day.isBefore(selectedStartDate) &&
                selectedStartDate !== undefined
            ) {
                styleCircleProps["$disabled"] = true;
                styleLabelProps["$disabled"] = true;
            }

            // exist start date and hover value
            // get 'between' cell between start value and hover value
            if (day.isBetween(selectedStartDate, hoverValue, "day", "()")) {
                styleDayCellProps["$point"] = "middle";
                styleDayCellProps["$hovered"] = true;

                styleLabelProps["$hovered"] = true;
                styleLabelProps["$point"] = "end";
                styleLabelProps["$selected"] = false;
            }

            // exist start date and hover value
            // get selected start cell during hovering
            if (
                hoverValue.length &&
                selectedStartDate &&
                day.isSame(selectedStartDate) &&
                hoverValue !== selectedStartDate
            ) {
                styleRightProps["$hovered"] = true;
                styleRightProps["$point"] = "end";
            }

            // exist selected start and hovering
            // get hover end cell
            if (
                hoverValue.length &&
                selectedStartDate &&
                day.isSame(hoverValue) &&
                hoverValue !== selectedStartDate
            ) {
                styleLeftProps["$hovered"] = true;
                styleLeftProps["$point"] = "end";

                styleLabelProps["$hovered"] = true;
                styleLabelProps["$point"] = "end";
                styleLabelProps["$selected"] = false;
            }

            // exist selected start and hovering selected start
            // get selected start
            if (
                hoverValue.length &&
                selectedStartDate &&
                day.isSame(selectedStartDate) &&
                hoverValue === selectedStartDate
            ) {
                styleCircleProps["$hovered"] = true;
                styleCircleProps["$point"] = "start";
                styleCircleProps["$selected"] = true;
            }

            // exist selected start and end cell without hover
            // get selected cell beween start & end
            if (
                selectedStartDate &&
                selectedEndDate &&
                !hoverValue.length &&
                day.isBetween(selectedStartDate, selectedEndDate, "day", "()")
            ) {
                styleDayCellProps["$point"] = "middle";
                styleDayCellProps["$selected"] = true;
            }

            // exist selected start and end
            if (selectedStartDate && selectedEndDate) {
                // get between
                if (
                    day.isBetween(
                        selectedStartDate,
                        selectedEndDate,
                        "day",
                        "()"
                    )
                ) {
                    styleDayCellProps["$hovered"] = false;
                    styleDayCellProps["$point"] = "middle";
                    styleDayCellProps["$selected"] = true;

                    styleLabelProps["$hovered"] = false;
                    styleLabelProps["$point"] = "none";
                    styleLabelProps["$selected"] = true;
                }

                if (day.isSame(selectedStartDate)) {
                    // get start
                    styleRightProps["$hovered"] = false;
                    styleRightProps["$point"] = "none";
                    styleRightProps["$selected"] = true;
                } else if (day.isSame(selectedEndDate)) {
                    // get end
                    styleLeftProps["$hovered"] = false;
                    styleLeftProps["$point"] = "none";
                    styleLeftProps["$selected"] = true;
                }
            }

            // exist selected start and end, hover after end
            // get end cell
            if (
                hoverValue.length &&
                selectedStartDate &&
                selectedEndDate &&
                dayjs(hoverValue).isAfter(selectedEndDate) &&
                day.isBetween(selectedEndDate, hoverValue, "day", "[)") &&
                day.isSame(selectedEndDate)
            ) {
                styleLeftProps["$hovered"] = false;
                styleLeftProps["$selected"] = true;
                styleLeftProps["$point"] = "after-end";

                styleRightProps["$hovered"] = true;
                styleRightProps["$selected"] = true;
                styleRightProps["$point"] = "after-end";

                styleDayCellProps["$hovered"] = true;
                styleDayCellProps["$point"] = "after-end";
                styleDayCellProps["$selected"] = false;
            }

            // exist selected start and end, hover after end
            // get selected start to end
            if (
                hoverValue.length &&
                selectedStartDate &&
                selectedEndDate &&
                dayjs(hoverValue).isAfter(selectedEndDate) &&
                day.isBetween(selectedStartDate, selectedEndDate, "day", "[]")
            ) {
                // get between
                if (
                    ![selectedStartDate, selectedEndDate].includes(
                        day.format("YYYY-MM-DD")
                    )
                ) {
                    styleDayCellProps["$hovered"] = true;
                    styleDayCellProps["$point"] = "after-end";
                    styleDayCellProps["$selected"] = true;
                }

                // get start
                if (day.isSame(selectedStartDate)) {
                    styleRightProps["$hovered"] = true;
                    styleRightProps["$point"] = "start";
                    styleRightProps["$selected"] = true;

                    styleCircleProps["$hovered"] = false;
                    styleCircleProps["$point"] = "selected";
                    styleCircleProps["$selected"] = true;
                }

                if (day.isSame(selectedEndDate)) {
                    styleLeftProps["$hovered"] = true;
                    styleLeftProps["$point"] = "end";
                    styleLeftProps["$selected"] = true;

                    styleCircleProps["$hovered"] = false;
                    styleCircleProps["$point"] = "selected";
                    styleCircleProps["$selected"] = true;
                }
            }

            // exist selected start and end, hover between
            // get between date from start until hover
            if (
                hoverValue.length &&
                selectedStartDate &&
                selectedEndDate &&
                day.isBetween(selectedStartDate, hoverValue, "day", "[]") &&
                dayjs(hoverValue).isBefore(selectedEndDate)
            ) {
                // get between
                if (
                    ![selectedStartDate, selectedEndDate].includes(
                        day.format("YYYY-MM-DD")
                    )
                ) {
                    styleDayCellProps["$hovered"] = true;
                    styleDayCellProps["$point"] = "middle";
                    styleDayCellProps["$selected"] = true;
                }

                // get start
                if (day.isSame(selectedStartDate)) {
                    styleRightProps["$hovered"] = true;
                    styleRightProps["$point"] = "start";
                    styleRightProps["$selected"] = true;

                    styleCircleProps["$hovered"] = false;
                    styleCircleProps["$point"] = "selected";
                    styleCircleProps["$selected"] = true;
                }

                // get end
                if (day.isSame(hoverValue)) {
                    styleLeftProps["$hovered"] = true;
                    styleLeftProps["$point"] = "end";
                    styleLeftProps["$selected"] = true;

                    styleRightProps["$hovered"] = true;
                    styleRightProps["$point"] = "selected";
                    styleRightProps["$selected"] = true;

                    styleCircleProps["$hovered"] = false;
                    styleCircleProps["$point"] = "selected";
                    styleCircleProps["$selected"] = true;

                    styleDayCellProps["$clear"] = true;
                }
            }
        }

        return {
            styleLeftProps,
            styleRightProps,
            styleCircleProps,
            styleLabelProps,
            styleDayCellProps,
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
                            styleDayCellProps,
                        } = generateStyleProps(day);

                        return (
                            <GrowDayCell
                                key={`day-${dayIndex}`}
                                {...styleDayCellProps}
                            >
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
