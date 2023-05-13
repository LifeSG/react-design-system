import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import { Text } from "../../text/text";
import { CalendarHelper } from "../../util/calendar-helper";
import {
    DayLabel,
    GrowDayCell,
    HeaderCell,
    InteractiveCircle,
    OverflowDisplay,
    RowDayCell,
    StyleProps,
    Wrapper,
} from "./internal-calendar-day.style";
import { CalendarType, FocusType, InternalCalendarProps } from "./types";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export type DayVariant = "default" | "other-month" | "today";
type HoverDirection =
    | "hover-start"
    | "hover-end"
    | "overlap-start"
    | "overlap-end"
    | "full-overlap-start"
    | "full-overlap-end"
    | "reset-start"
    | "reset-end";

interface CalendarDayProps
    extends Pick<
        InternalCalendarProps,
        "disabledDates" | "variant" | "between"
    > {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    type: CalendarType;
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
    type,
    isNewSelection,
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
    const handleDayClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled) return;

        onSelect(value);
    };

    const handleHoverCell = (value: string, isDisabled: boolean) => {
        if (isDisabled) return;

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

    const isDisabled = (day: Dayjs): boolean => {
        const isOutsideBetweenRange =
            between && !day.isBetween(between[0], between[1], "day", "[]");

        const isDisabledDate =
            disabledDates && disabledDates.includes(day.format("YYYY-MM-DD"));

        const isStartAfterEnd =
            currentFocus === "start" &&
            selectedEndDate &&
            day.isAfter(selectedEndDate) &&
            isNewSelection;

        const isEndBeforeStart =
            currentFocus === "end" &&
            selectedStartDate &&
            day.isBefore(selectedStartDate) &&
            isNewSelection;

        return (
            isOutsideBetweenRange ||
            isDisabledDate ||
            isStartAfterEnd ||
            isEndBeforeStart
        );
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

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format("YYYY-MM-DD");

        const styleLeftProps: StyleProps = {},
            styleRightProps: StyleProps = {},
            styleCircleProps: StyleProps = {},
            styleLabelProps: StyleProps = {};

        const isSelectedSame =
            selectedStartDate &&
            selectedEndDate &&
            selectedStartDate === selectedEndDate;

        if (
            !isNewSelection &&
            ["reset-start", "reset-end"].includes(hoverDirection) &&
            [selectedStartDate, selectedEndDate].includes(dateStartWithYear)
        ) {
            styleCircleProps.$overlap = true;
        }

        if (isDisabled(day)) {
            styleCircleProps.$disabled = true;
            styleLabelProps.$disabled = true;
        }

        // apply selected styles

        if ([selectedStartDate, selectedEndDate].includes(dateStartWithYear)) {
            styleCircleProps.$selected = true;
            styleLabelProps.$selected = true;
        }

        if (
            selectedStartDate &&
            selectedEndDate &&
            !isSelectedSame &&
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

        // apply hovered styles

        if (
            hoverDirection === "hover-start" &&
            day.isBetween(selectedEndDate, hoverValue, "day", "[]")
        ) {
            styleLabelProps.$selected = true;

            if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$hovered = true;
            } else if (hoverValue === dateStartWithYear) {
                styleRightProps.$hovered = true;
                styleCircleProps.$hovered = true;
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
                styleCircleProps.$hovered = true;
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
                styleCircleProps.$hovered = true;
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
                styleCircleProps.$hovered = true;
            } else {
                styleLeftProps.$overlap = true;
                styleRightProps.$overlap = true;
            }
        }

        if (
            hoverDirection === "full-overlap-start" &&
            day.isBetween(selectedEndDate, hoverValue, "day", "[]")
        ) {
            if (selectedStartDate === dateStartWithYear && isSelectedSame) {
                styleLeftProps.$hovered = true;
                styleCircleProps.$overlap = true;
            } else if (selectedStartDate === dateStartWithYear) {
                styleLeftProps.$hovered = true;
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (day.isSame(hoverValue)) {
                styleRightProps.$hovered = true;
                styleLabelProps.$selected = true;
                styleCircleProps.$hovered = true;
            } else if (
                day.isBetween(selectedStartDate, hoverValue, "day", "()")
            ) {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
                styleLabelProps.$selected = true;
            }
        }

        if (
            hoverDirection === "full-overlap-end" &&
            day.isBetween(selectedStartDate, hoverValue, "day", "[]")
        ) {
            if (selectedEndDate === dateStartWithYear && isSelectedSame) {
                styleRightProps.$hovered = true;
                styleCircleProps.$overlap = true;
            } else if (selectedEndDate === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleRightProps.$hovered = true;
                styleCircleProps.$overlap = true;
            } else if (selectedStartDate === dateStartWithYear) {
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (day.isSame(hoverValue)) {
                styleLeftProps.$hovered = true;
                styleLabelProps.$selected = true;
                styleCircleProps.$hovered = true;
            } else if (
                day.isBetween(selectedEndDate, hoverValue, "day", "()")
            ) {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
                styleLabelProps.$selected = true;
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
                                    onClick={() =>
                                        handleDayClick(
                                            day,
                                            styleCircleProps.$disabled
                                        )
                                    }
                                    onMouseEnter={() =>
                                        handleHoverCell(
                                            formattedDay,
                                            styleCircleProps.$disabled
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
    };

    return (
        <Wrapper $type={type}>
            {renderHeader()}
            {renderDayCells()}
        </Wrapper>
    );
};
