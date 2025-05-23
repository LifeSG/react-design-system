import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper, DateHelper } from "../../../util";
import { CellStyleProps, CellType, DayCell, DayCellProps } from "../day-cell";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDate: string | undefined;
    hoverDate: string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    numberOfDays?: number | undefined;
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
    numberOfDays = 1,
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
        !!selectedDate && date.isBetween(rangeStart, rangeEnd, "day", "[]");
    const isHover =
        !!hoverDate && date.isBetween(hoverStart, hoverEnd, "day", "[]");
    const isStart =
        (isSelected && date.isSame(rangeStart, "day")) ||
        (isHover && date.isSame(hoverStart, "day"));
    const isEnd =
        (isSelected && date.isSame(rangeEnd, "day")) ||
        (isHover && date.isSame(hoverEnd, "day"));

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
    const applyRange = (
        props: CellStyleProps,
        type: CellType,
        start: boolean,
        end: boolean
    ) => {
        if (start) {
            props.circleLeft = type;
        } else {
            props.bgLeft = type;
        }

        if (end) {
            props.circleRight = type;
        } else {
            props.bgRight = type;
        }
    };

    const getRangeStyle = (): CellStyleProps => {
        const props: CellStyleProps = {};

        const formattedDate = date.format("YYYY-MM-DD");

        if (isHover) {
            applyRange(
                props,
                "hover",
                formattedDate === hoverStart,
                formattedDate === hoverEnd
            );
        }
        if (isSelected) {
            applyRange(
                props,
                "selected-outline",
                formattedDate === rangeStart,
                formattedDate === rangeEnd
            );
        }
        if (isSelected && isHover) {
            applyRange(props, "selected-hover-outline", isStart, isEnd);

            if (formattedDate === hoverStart && formattedDate !== rangeStart) {
                props.circleLeft = "selected-hover";
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
        currentDateIndicator: true,
        onSelect: handleSelect,
        onHover: handleHover,
    };

    return (
        <DayCell {...commonProps} {...getCellStyle()} {...getRangeStyle()} />
    );
};
