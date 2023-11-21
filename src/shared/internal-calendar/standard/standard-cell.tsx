import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper } from "../../../util";
import { DayCell } from "../day-cell/day-cell";
import { CellStyleProps, DayCellProps } from "../day-cell/types";
import { FocusType } from "../types";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    startDate: string;
    endDate: string;
    hoverDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    isNewSelection?: boolean | undefined;
    currentFocus?: FocusType | undefined;
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
            props.labelType = "unavailable";
        } else if (dayjs().isSame(date, "day") && !disabled) {
            props.labelType = "current";
            props.circleLeft = "current";
            props.circleRight = "current";
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
                props.bgLeft = "selected";
            }
            if (!isEnd) {
                props.bgRight = "selected";
            }
        }

        return props;
    };

    const getHoverStyle = (): CellStyleProps => {
        if (!hoverDate) {
            return;
        }

        const props: CellStyleProps = {};

        const isHover = date.isSame(hoverDate, "day");

        if (isHover) {
            props.circleShadow = true;
            props.circleLeft = "hover-current";
            props.circleRight = "hover-current";
        }

        const { hoverStart, hoverEnd, overlapStart, overlapEnd } =
            getHoverRange();

        if (hoverStart && hoverEnd) {
            if (date.isBetween(hoverStart, hoverEnd, "day", "[]")) {
                const isStart = date.isSame(hoverStart, "day");
                const isEnd = date.isSame(hoverEnd, "day");

                props.labelType = "selected";

                if (!isStart) {
                    props.bgLeft = "hover-dash";
                }
                if (!isEnd) {
                    props.bgRight = "hover-dash";
                }
            }

            return props;
        }

        if (overlapStart && overlapEnd) {
            if (date.isBetween(overlapStart, overlapEnd, "day", "[]")) {
                const isStart = date.isSame(overlapStart, "day");
                const isEnd = date.isSame(overlapEnd, "day");

                props.labelType = "selected";

                if (isStart || isEnd) {
                    props.circleShadow = true;
                    props.circleLeft = "overlap-outline";
                    props.circleRight = "overlap-outline";
                }

                if (!isStart) {
                    props.bgLeft = "overlap";
                }
                if (!isEnd) {
                    props.bgRight = "overlap";
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

        let hoverStart: string, hoverEnd: string;
        let overlapStart: string, overlapEnd: string;

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
