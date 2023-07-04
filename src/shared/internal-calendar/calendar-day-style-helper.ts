import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { StyleProps } from "./internal-calendar-day.style";
import { OverflowCircleProps } from "./internal-week-selection-calendar-day.style";
import { CalendarHelper } from "../../util";

dayjs.extend(isBetween);

interface GenerateStyleProps {
    styleLeftProps: StyleProps;
    styleRightProps: StyleProps;
    styleCircleProps: StyleProps;
    styleLabelProps: StyleProps;
    styleOverflowCirleProps: OverflowCircleProps;
}

export namespace CalendarDayStyleHelper {
    export const getStyleProps = () => {
        //
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
    ): GenerateStyleProps => {
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
}

// =============================================================================
// NON-EXPORTABLES
// =============================================================================
const isDisabled = (
    day: Dayjs,
    disabledDates: string[],
    minDate: string,
    maxDate: string
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

const getDayOfWeek = (value: string) => {
    const firstDayOfWeek = dayjs(value).startOf("week").format("YYYY-MM-DD");
    const lastDayOfWeek = dayjs(value).endOf("week").format("YYYY-MM-DD");

    return {
        firstDayOfWeek,
        lastDayOfWeek,
    };
};
