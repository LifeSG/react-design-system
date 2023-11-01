import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper, DateHelper } from "../../../util";
import { CellStyleProps, CellType, DayCell, DayCellProps } from "../day-cell";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDate: string;
    hoverDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    numberOfDays?: number;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
}

export const FixedRangeDayCell = ({
    date,
    calendarDate,
    selectedDate,
    hoverDate,
    minDate,
    maxDate,
    disabledDates,
    allowDisabledSelection,
    numberOfDays,
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
    const { start: rangeStart, end: rangeEnd } = selectedDate
        ? CalendarHelper.getFixedRangeStartEnd(
              DateHelper.toDayjs(selectedDate),
              numberOfDays
          )
        : { start: undefined, end: undefined };
    const { start: hoverStart, end: hoverEnd } = hoverDate
        ? CalendarHelper.getFixedRangeStartEnd(
              DateHelper.toDayjs(hoverDate),
              numberOfDays
          )
        : { start: undefined, end: undefined };

    const isSelected =
        selectedDate && date.isBetween(rangeStart, rangeEnd, "day", "[]");
    const isHover =
        hoverDate && date.isBetween(hoverStart, hoverEnd, "day", "[]");
    const isStart =
        (isSelected && date.isSame(rangeStart)) ||
        (isHover && date.isSame(hoverStart));
    const isEnd =
        (isSelected && date.isSame(rangeEnd)) ||
        (isHover && date.isSame(hoverEnd));

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
    const getRangeStyle = (): CellStyleProps => {
        const props: CellStyleProps = {};

        let type: CellType = undefined;
        if (isSelected && isHover) {
            type = "overlap";
        } else if (isSelected) {
            type = "selected";
        } else if (isHover) {
            type = "hover-dash";
        }

        if (type) {
            if (isStart && !isSelected) {
                props.circleLeft = "hover-current";
                props.circleRight = "hover-current";
                props.circleShadow = true;
            } else if (isStart) {
                props.circleLeft = "selected-outline";
                props.circleRight = "selected-outline";

                if (isSelected && isHover && rangeStart && hoverStart) {
                    props.circleLeft = "overlap-outline";
                    props.circleRight = "overlap-outline";

                    if (hoverStart > rangeStart) {
                        props.bgLeft = "selected";
                    }
                    if (rangeStart > hoverStart) {
                        props.bgLeft = "hover-dash";
                    }
                }
            } else {
                props.bgLeft = type;
            }

            if (isEnd) {
                props.circleRight = type;
                if (isSelected && isHover) {
                    props.circleRight = "overlap";
                }

                if (isSelected && isHover && rangeEnd && hoverEnd) {
                    if (hoverEnd > rangeEnd) {
                        props.bgRight = "hover-dash";
                    }
                    if (rangeStart > hoverStart) {
                        props.bgRight = "selected";
                    }
                    if (isStart && rangeEnd === hoverStart) {
                        props.circleLeft = "hover-current";
                        props.circleRight = "hover-current";
                        props.bgLeft = "selected";
                        props.bgRight = "hover-dash";
                    }

                    if (hoverEnd === rangeStart) {
                        props.circleLeft = "overlap-outline";
                        props.circleRight = "overlap-outline";
                        props.bgLeft = "hover-dash";
                        props.bgRight = "selected";
                    }
                }
            } else {
                props.bgRight = type;
            }
        }

        return props;
    };

    const getCellStyle = () => {
        const props: CellStyleProps = {};

        if (isSelected || isHover) {
            props.labelType = "selected";
        } else if (calendarDate.month() !== date.month()) {
            props.labelType = "unavailable";
        } else if (dayjs().isSame(date, "day") && !disabled) {
            props.labelType = "current";
            props.circleLeft = "current";
            props.circleRight = "current";
        }

        return props;
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
        <DayCell {...commonProps} {...getCellStyle()} {...getRangeStyle()} />
    );
};