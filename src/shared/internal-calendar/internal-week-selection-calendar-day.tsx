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
    OverflowCircleProps,
    OverflowDisplay,
    RowDayCell,
    StyleProps,
    Wrapper,
} from "./internal-week-selection-calendar-day.style";
import { CommonCalendarProps, FocusType } from "./types";

export type DayVariant = "default" | "other-month" | "today";

interface CalendarDayProps extends CommonCalendarProps {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}

interface GenerateStyleProps {
    styleLeftProps: StyleProps;
    styleRightProps: StyleProps;
    styleCircleProps: StyleProps;
    styleLabelProps: StyleProps;
    styleOverflowCirleProps: OverflowCircleProps;
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

    const isDisabled = (day: Dayjs): boolean => {
        const isWithinRange = CalendarHelper.isWithinRange(
            day,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined
        );

        const isDisabledDate =
            disabledDates && disabledDates.includes(day.format("YYYY-MM-DD"));

        return !isWithinRange || isDisabledDate;
    };

    const generateStyleProps = (day: Dayjs): GenerateStyleProps => {
        const styleLeftProps: StyleProps = {},
            styleRightProps: StyleProps = {},
            styleCircleProps: StyleProps = {},
            styleLabelProps: StyleProps = {},
            styleOverflowCirleProps: OverflowCircleProps = {};

        const disabled = isDisabled(day);

        // apply disabled styles

        if (disabled) {
            styleCircleProps.$disabledDisplay = true;
            styleLabelProps.$disabledDisplay = true;
        }

        styleCircleProps.$interactive = !disabled || allowDisabledSelection;

        // apply selected styles

        if (selectedStartDate) {
            const firstDayOfWeek = dayjs(selectedStartDate)
                .startOf("week")
                .format("YYYY-MM-DD");
            const lastDayOfWeek = dayjs(selectedStartDate)
                .endOf("week")
                .format("YYYY-MM-DD");

            if (day.isBetween(firstDayOfWeek, lastDayOfWeek, "day", "[]")) {
                styleLabelProps.$selected = true;

                if (day.isSame(firstDayOfWeek)) {
                    styleRightProps.$selected = true;
                    styleCircleProps.$selected = true;
                    styleOverflowCirleProps.$position = "left";
                } else if (day.isSame(lastDayOfWeek)) {
                    styleLeftProps.$selected = true;
                    styleCircleProps.$selected = true;
                    styleOverflowCirleProps.$position = "right";
                } else {
                    styleLeftProps.$selected = true;
                    styleCircleProps.$selected = true;
                    styleRightProps.$selected = true;
                }
            }
        }

        // apply hovered styles

        if (hoverValue) {
            const firstDayOfWeek = dayjs(hoverValue)
                .startOf("week")
                .format("YYYY-MM-DD");
            const lastDayOfWeek = dayjs(hoverValue)
                .endOf("week")
                .format("YYYY-MM-DD");

            if (day.isBetween(firstDayOfWeek, lastDayOfWeek, "day", "[]")) {
                styleLabelProps.$selected = true;

                if (day.isSame(firstDayOfWeek)) {
                    styleRightProps.$hovered = true;
                    styleCircleProps.$hovered = true;
                    styleOverflowCirleProps.$position = "left";
                } else if (day.isSame(lastDayOfWeek)) {
                    styleLeftProps.$hovered = true;
                    styleCircleProps.$hovered = true;
                    styleOverflowCirleProps.$position = "right";
                } else {
                    styleLeftProps.$hovered = true;
                    styleRightProps.$hovered = true;
                }
            }
        }

        // apply overlap styles

        if (
            selectedStartDate &&
            selectedEndDate &&
            hoverValue &&
            day.isBetween(selectedStartDate, selectedEndDate, "day", "[]") &&
            dayjs(hoverValue).isBetween(
                selectedStartDate,
                selectedEndDate,
                "day",
                "[]"
            )
        ) {
            const firstDayOfWeek = dayjs(selectedStartDate)
                .startOf("week")
                .format("YYYY-MM-DD");
            const lastDayOfWeek = dayjs(selectedStartDate)
                .endOf("week")
                .format("YYYY-MM-DD");

            if (day.isBetween(firstDayOfWeek, lastDayOfWeek, "day", "[]")) {
                styleLabelProps.$selected = true;

                if (day.isSame(firstDayOfWeek)) {
                    styleRightProps.$overlap = true;
                    styleCircleProps.$overlap = true;
                    styleOverflowCirleProps.$position = "left";
                } else if (day.isSame(lastDayOfWeek)) {
                    styleLeftProps.$overlap = true;
                    styleCircleProps.$overlap = true;
                    styleOverflowCirleProps.$position = "right";
                } else {
                    styleLeftProps.$overlap = true;
                    styleCircleProps.$overlap = true;
                    styleRightProps.$overlap = true;
                }
            }
        }

        return {
            styleLeftProps,
            styleRightProps,
            styleCircleProps,
            styleLabelProps,
            styleOverflowCirleProps,
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
