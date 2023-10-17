import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { FocusType } from "./types";
import { CalendarHelper, DateHelper } from "../../util";
import { StyleProps } from "./internal-calendar-day.style";
import { OverflowCircleProps } from "./internal-week-selection-calendar-day.style";
import { HoverDirection } from "./internal-calendar-day";

dayjs.extend(isBetween);

interface GenerateStyleProps {
    styleLeftProps: StyleProps;
    styleRightProps: StyleProps;
    styleCircleProps: StyleProps;
    styleLabelProps: StyleProps;
}

interface WeekStyleProps extends GenerateStyleProps {
    styleOverflowCirleProps: OverflowCircleProps;
}

export namespace CalendarDayStyleHelper {
    export const generateStyleProps = (
        day: Dayjs,
        start: string,
        end: string,
        hover: string,
        hoverDirection: HoverDirection,
        currentFocus: FocusType,
        minDate?: string | undefined,
        maxDate?: string | undefined,
        disabledDates?: string[] | undefined,
        allowDisabledSelection?: boolean | undefined,
        isNewSelection?: boolean | undefined
    ): GenerateStyleProps => {
        const dateStartWithYear = day.format("YYYY-MM-DD");

        const styleLeftProps: StyleProps = {},
            styleRightProps: StyleProps = {},
            styleCircleProps: StyleProps = {},
            styleLabelProps: StyleProps = {};
        const disabled = isDisabled(day, disabledDates, minDate, maxDate);

        const isSelectedSame = start && end && start === end;

        if (
            !isNewSelection &&
            ["reset-start", "reset-end"].includes(hoverDirection) &&
            [start, end].includes(dateStartWithYear)
        ) {
            styleCircleProps.$overlap = true;
        }

        // apply disabled styles

        if (
            disabled ||
            isOutsideSelectedRange(
                day,
                currentFocus,
                start,
                end,
                isNewSelection
            )
        ) {
            styleCircleProps.$disabledDisplay = true;
            styleLabelProps.$disabledDisplay = true;
        }

        styleCircleProps.$interactive = !disabled || allowDisabledSelection;

        // apply selected styles

        if ([start, end].includes(dateStartWithYear)) {
            styleCircleProps.$selected = true;
            styleLabelProps.$selected = true;
        }

        if (
            start &&
            end &&
            !isSelectedSame &&
            day.isBetween(start, end, "day", "[]")
        ) {
            styleLabelProps.$selected = true;
            if (day.isSame(start)) {
                styleRightProps.$selected = true;
            } else if (day.isSame(end)) {
                styleLeftProps.$selected = true;
            } else {
                styleLeftProps.$selected = true;
                styleRightProps.$selected = true;
            }
        }

        // apply hovered styles

        if (
            hoverDirection === "hover-start" &&
            day.isBetween(end, hover, "day", "[]")
        ) {
            styleLabelProps.$selected = true;

            if (end === dateStartWithYear) {
                styleLeftProps.$hovered = true;
            } else if (hover === dateStartWithYear) {
                styleRightProps.$hovered = true;
                styleCircleProps.$hovered = true;
            } else {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
            }
        }

        if (
            hoverDirection === "hover-end" &&
            day.isBetween(start, hover, "day", "[]")
        ) {
            styleLabelProps.$selected = true;

            if (start === dateStartWithYear) {
                styleRightProps.$hovered = true;
            } else if (hover === dateStartWithYear) {
                styleLeftProps.$hovered = true;
                styleCircleProps.$hovered = true;
            } else {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
            }
        }

        if (
            hoverDirection === "overlap-start" &&
            day.isBetween(end, hover, "day", "[]")
        ) {
            if (hover === dateStartWithYear) {
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (end === dateStartWithYear) {
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
            day.isBetween(start, hover, "day", "[]")
        ) {
            if (hover === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (start === dateStartWithYear) {
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
            day.isBetween(end, hover, "day", "[]")
        ) {
            if (start === dateStartWithYear && isSelectedSame) {
                styleLeftProps.$hovered = true;
                styleCircleProps.$overlap = true;
            } else if (start === dateStartWithYear) {
                styleLeftProps.$hovered = true;
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (end === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (day.isSame(hover)) {
                styleRightProps.$hovered = true;
                styleLabelProps.$selected = true;
                styleCircleProps.$hovered = true;
            } else if (day.isBetween(start, hover, "day", "()")) {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
                styleLabelProps.$selected = true;
            }
        }

        if (
            hoverDirection === "full-overlap-end" &&
            day.isBetween(start, hover, "day", "[]")
        ) {
            if (end === dateStartWithYear && isSelectedSame) {
                styleRightProps.$hovered = true;
                styleCircleProps.$overlap = true;
            } else if (end === dateStartWithYear) {
                styleLeftProps.$overlap = true;
                styleRightProps.$hovered = true;
                styleCircleProps.$overlap = true;
            } else if (start === dateStartWithYear) {
                styleRightProps.$overlap = true;
                styleCircleProps.$overlap = true;
            } else if (day.isSame(hover)) {
                styleLeftProps.$hovered = true;
                styleLabelProps.$selected = true;
                styleCircleProps.$hovered = true;
            } else if (day.isBetween(end, hover, "day", "()")) {
                styleLeftProps.$hovered = true;
                styleRightProps.$hovered = true;
                styleLabelProps.$selected = true;
            }
        }

        if (
            ["full-overlap-end", "full-overlap-start"].includes(
                hoverDirection
            ) &&
            day.isBetween(start, end, "day", "()")
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

    export const getStylePropsForWeekSelection = (
        day: Dayjs,
        start: string,
        end: string,
        hover: string,
        minDate?: string | undefined,
        maxDate?: string | undefined,
        disabledDates?: string[] | undefined,
        allowDisabledSelection?: boolean | undefined
    ): WeekStyleProps => {
        const styleLeftProps: StyleProps = {},
            styleRightProps: StyleProps = {},
            styleCircleProps: StyleProps = {},
            styleLabelProps: StyleProps = {},
            styleOverflowCirleProps: OverflowCircleProps = {};

        const disabled = isDisabled(day, disabledDates, minDate, maxDate);

        if (disabled) {
            styleCircleProps.$disabledDisplay = true;
            styleLabelProps.$disabledDisplay = true;
        }

        styleCircleProps.$interactive = !disabled || allowDisabledSelection;

        if (start) {
            const { firstDayOfWeek, lastDayOfWeek } = getDayOfWeek(start);

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

        if (hover) {
            const { firstDayOfWeek, lastDayOfWeek } = getDayOfWeek(hover);

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

        if (
            start &&
            end &&
            hover &&
            day.isBetween(start, end, "day", "[]") &&
            dayjs(hover).isBetween(start, end, "day", "[]")
        ) {
            const { firstDayOfWeek, lastDayOfWeek } = getDayOfWeek(start);

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

    export const getStylePropsForFixedRangeSelection = (
        day: Dayjs,
        start: string,
        end: string,
        hover: string,
        minDate?: string | undefined,
        maxDate?: string | undefined,
        disabledDates?: string[] | undefined,
        allowDisabledSelection?: boolean | undefined
    ): WeekStyleProps => {
        const styleLeftProps: StyleProps = {},
            styleRightProps: StyleProps = {},
            styleCircleProps: StyleProps = {},
            styleLabelProps: StyleProps = {},
            styleOverflowCirleProps: OverflowCircleProps = {};

        const disabled = isDisabled(day, disabledDates, minDate, maxDate);

        if (disabled) {
            styleCircleProps.$disabledDisplay = true;
            styleLabelProps.$disabledDisplay = true;
        }

        styleCircleProps.$interactive = !disabled || allowDisabledSelection;

        if (start) {
            if (day.isBetween(start, end, "day", "[]")) {
                styleLabelProps.$selected = true;

                if (day.isSame(start)) {
                    styleRightProps.$selected = true;
                    styleCircleProps.$selected = true;
                    styleOverflowCirleProps.$position = "left";
                } else if (day.isSame(end)) {
                    styleLeftProps.$selected = true;
                    styleCircleProps.$selected = true;
                    styleOverflowCirleProps.$position = "right";
                } else {
                    styleLeftProps.$selected = true;
                    styleRightProps.$selected = true;
                }
            }
        }

        if (hover) {
            if (day.isBetween(start, end, "day", "[]")) {
                styleLabelProps.$selected = true;

                if (day.isSame(start)) {
                    styleRightProps.$hovered = true;
                    styleCircleProps.$hovered = true;
                    styleOverflowCirleProps.$position = "left";
                } else if (day.isSame(end)) {
                    styleLeftProps.$hovered = true;
                    styleCircleProps.$hovered = true;
                    styleOverflowCirleProps.$position = "right";
                } else {
                    styleLeftProps.$hovered = true;
                    styleRightProps.$hovered = true;
                }
            }
        }

        if (
            start &&
            end &&
            hover &&
            day.isBetween(start, end, "day", "[]") &&
            dayjs(hover).isBetween(start, end, "day", "[]")
        ) {
            if (day.isBetween(start, end, "day", "[]")) {
                styleLabelProps.$selected = true;

                if (day.isSame(start)) {
                    styleRightProps.$overlap = true;
                    styleCircleProps.$overlap = true;
                    styleOverflowCirleProps.$position = "left";
                } else if (day.isSame(end)) {
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
}

// =============================================================================
// NON-EXPORTABLES
// =============================================================================
const isDisabled = (
    day: Dayjs,
    disabledDates?: string[] | undefined,
    minDate?: string | undefined,
    maxDate?: string | undefined
): boolean => {
    const isWithinRange = CalendarHelper.isWithinRange(
        day,
        minDate ? dayjs(minDate) : undefined,
        maxDate ? dayjs(maxDate) : undefined
    );

    const isDisabledDate =
        disabledDates && disabledDates.includes(day.format("YYYY-MM-DD"));

    return !isWithinRange || isDisabledDate;
};

const isOutsideSelectedRange = (
    day: Dayjs,
    currentFocus: FocusType,
    selectedStart: string,
    selectEnd: string,
    isNewSelection: boolean
): boolean => {
    const isStartAfterEnd =
        currentFocus === "start" &&
        selectEnd &&
        day.isAfter(selectEnd) &&
        isNewSelection;

    const isEndBeforeStart =
        currentFocus === "end" &&
        selectedStart &&
        day.isBefore(selectedStart) &&
        isNewSelection;

    return isStartAfterEnd || isEndBeforeStart;
};

const getDayOfWeek = (value: string) => {
    const firstDayOfWeek = DateHelper.toDayjs(value)
        .startOf("week")
        .format("YYYY-MM-DD");
    const lastDayOfWeek = DateHelper.toDayjs(value)
        .endOf("week")
        .format("YYYY-MM-DD");

    return {
        firstDayOfWeek,
        lastDayOfWeek,
    };
};
