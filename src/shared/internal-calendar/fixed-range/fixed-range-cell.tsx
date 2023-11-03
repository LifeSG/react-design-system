import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper, DateHelper } from "../../../util";
import { CellStyleProps, DayCell, DayCellProps } from "../day-cell";

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
        const formattedDate = date.format("YYYY-MM-DD");

        if (isHover) {
            if (formattedDate === hoverStart) {
                props.circleLeft = "hover-dash";
            } else {
                props.bgLeft = "hover-dash";
            }

            if (formattedDate === hoverEnd) {
                props.circleRight = "hover-dash";
            } else {
                props.bgRight = "hover-dash";
            }
        }
        if (isSelected) {
            if (formattedDate === rangeStart) {
                props.circleLeft = "selected-outline";
                props.circleRight = "selected-outline";
                props.bgRight = "selected";
            } else {
                props.bgLeft = "selected";
            }

            if (formattedDate === rangeEnd) {
                props.circleRight = "selected";
            } else {
                props.bgRight = "selected";
            }
        }
        if (isSelected && isHover) {
            if (isStart) {
                props.circleLeft = "overlap-outline";
            } else {
                props.bgLeft = "overlap";
            }

            if (isEnd) {
                props.circleRight = "overlap";
            } else {
                props.bgRight = "overlap";
            }

            if (formattedDate === rangeStart) {
                props.circleLeft = "overlap-outline";
                props.circleRight = "overlap-outline";
            }
        }

        if (formattedDate === hoverStart) {
            props.circleLeft = "hover-current";
            props.circleRight = "hover-current";
            props.circleShadow = true;
            if (hoverStart >= rangeStart && hoverStart < rangeEnd) {
                props.circleLeft = "overlap-outline";
                props.circleRight = "overlap-outline";
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
