import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper } from "../../../util";
import { DayCell } from "../day-cell/day-cell";
import { CellStyleProps, DayCellProps } from "../day-cell/types";
import { FocusType } from "../types";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    startDate: string | undefined;
    endDate: string | undefined;
    hoverDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    isNewSelection?: boolean | undefined;
    currentFocus?: FocusType | undefined;
    showActiveMonthDaysOnly?: boolean | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
}

export const StandardCell = ({
    date,
    calendarDate,
    startDate,
    endDate,
    currentFocus,
    hoverDate,
    minDate,
    maxDate,
    disabledDates,
    allowDisabledSelection,
    isNewSelection,
    showActiveMonthDaysOnly,
    onSelect,
    onHover,
}: Props) => {
    // =========================================================================
    // CONSTS
    // =========================================================================
    const disabled = CalendarHelper.isDisabledDay(
        date,
        disabledDates,
        minDate,
        maxDate
    );
    const interactive = !disabled || allowDisabledSelection;

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSelect = () => {
        onSelect(date, !interactive);
    };

    const handleHover = () => {
        onHover(date.format("YYYY-MM-DD"), !interactive);
    };

    // =========================================================================
    // HELPERS
    // =========================================================================
    const getCellStyle = () => {
        const props: CellStyleProps = {};

        if (calendarDate.month() !== date.month()) {
            props.labelType = showActiveMonthDaysOnly
                ? "hidden"
                : "unavailable";
        } else if (dayjs().isSame(date, "day") && !disabled) {
            props.labelType = "current";
        } else if (isNewSelection) {
            const beforeStart =
                currentFocus === "end" && startDate && date.isBefore(startDate);
            const afterEnd =
                currentFocus === "start" && endDate && date.isAfter(endDate);

            if (beforeStart || afterEnd) {
                props.labelType = "unavailable";
            }
        }

        return props;
    };

    const getSelectedStyle = (): CellStyleProps => {
        const props: CellStyleProps = {};

        const isStart = date.isSame(startDate, "day");
        const isEnd = date.isSame(endDate, "day");

        if (showActiveMonthDaysOnly && calendarDate.month() !== date.month()) {
            props.labelType = "hidden";
            return props;
        }

        if ((startDate && isStart) || (endDate && isEnd)) {
            props.labelType = "selected";
            props.circleLeft = "selected-outline";
            props.circleRight = "selected-outline";
        }

        if (
            startDate &&
            endDate &&
            date.isBetween(startDate, endDate, "day", "[]")
        ) {
            props.labelType = "selected";

            if (!isStart) {
                props.bgLeft = "selected-outline-subtle";
            }
            if (!isEnd) {
                props.bgRight = "selected-outline-subtle";
            }
        }

        return props;
    };

    const getHoverStyle = (): CellStyleProps => {
        if (!hoverDate) {
            return {};
        }

        const props: CellStyleProps = {};

        const isHover = date.isSame(hoverDate, "day");

        const { hoverStart, hoverEnd, overlapStart, overlapEnd } =
            getHoverRange();

        if (isHover) {
            const isStart = date.isSame(startDate, "day");
            const isEnd = date.isSame(endDate, "day");
            if (isStart || isEnd) {
                props.labelType = "selected-hover";
                props.circleLeft = "selected-hover-outline";
                props.circleRight = "selected-hover-outline";
            } else {
                props.labelType = "hover";
                props.circleLeft = "hover";
                props.circleRight = "hover";
            }
        }

        if (hoverStart && hoverEnd) {
            if (date.isBetween(hoverStart, hoverEnd, "day", "[]")) {
                const isStart = date.isSame(hoverStart, "day");
                const isEnd = date.isSame(hoverEnd, "day");

                if (!isStart) {
                    props.labelType = "hover";
                    props.bgLeft = "hover-outline";
                }
                if (!isEnd) {
                    props.labelType = "hover";
                    props.bgRight = "hover-outline";
                }
            }

            return props;
        }

        if (overlapStart && overlapEnd) {
            if (date.isBetween(overlapStart, overlapEnd, "day", "[]")) {
                if (isHover) {
                    props.labelType = "selected-hover";
                    props.circleLeft = "selected-hover";
                    props.circleRight = "selected-hover";
                }
            }

            return props;
        }

        return props;
    };

    const getHoverRange = () => {
        const hoverDay = dayjs(hoverDate);
        const isBeforeEnd = hoverDay.isBefore(endDate, "day");
        const isAfterStart = hoverDay.isAfter(startDate, "day");

        let hoverStart: string | undefined, hoverEnd: string | undefined;
        let overlapStart: string | undefined, overlapEnd: string | undefined;

        // [s h e] => overlap
        // [h s e] => hover
        // [h e]   => hover
        if (currentFocus === "start" && endDate && isBeforeEnd) {
            if (startDate && isAfterStart) {
                overlapStart = hoverDate;
                overlapEnd = endDate;
            } else {
                hoverStart = hoverDate;
                hoverEnd = startDate || endDate;
            }
        }

        // [s h e] => overlap
        // [s e h] => hover
        // [s h]   => hover
        if (currentFocus === "end" && startDate && isAfterStart) {
            if (endDate && isBeforeEnd) {
                overlapStart = startDate;
                overlapEnd = hoverDate;
            } else {
                hoverStart = endDate || startDate;
                hoverEnd = hoverDate;
            }
        }

        return {
            hoverStart,
            hoverEnd,
            overlapStart,
            overlapEnd,
        };
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const commonProps: DayCellProps = {
        date,
        calendarDate,
        disabled,
        interactive,
        currentDateIndicator: true,
        onSelect: handleSelect,
        onHover: handleHover,
    };

    return (
        <DayCell
            {...commonProps}
            {...getCellStyle()}
            {...getSelectedStyle()}
            {...getHoverStyle()}
        />
    );
};
