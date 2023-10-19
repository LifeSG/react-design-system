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
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
}

export const WeekDayCell = ({
    date,
    calendarDate,
    selectedDate,
    hoverDate,
    minDate,
    maxDate,
    disabledDates,
    allowDisabledSelection,
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
    const { start: weekStart, end: weekEnd } = CalendarHelper.getWeekStartEnd(
        DateHelper.toDayjs(selectedDate)
    );
    const { start: hoverStart, end: hoverEnd } = CalendarHelper.getWeekStartEnd(
        DateHelper.toDayjs(hoverDate)
    );

    const isSelected =
        selectedDate && date.isBetween(weekStart, weekEnd, "day", "[]");
    const isHover =
        hoverDate && date.isBetween(hoverStart, hoverEnd, "day", "[]");
    const isStart =
        (isSelected && date.isSame(weekStart)) ||
        (isHover && date.isSame(hoverStart));
    const isEnd =
        (isSelected && date.isSame(weekEnd)) ||
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
            type = "hover-current";
            props.shadow = true;
            props.circleShadow = isStart || isEnd;
        } else if (isSelected) {
            type = "selected-outline";
        } else if (isHover) {
            type = "hover-dash";
        }

        if (type) {
            if (isStart) {
                props.circleLeft = type;
            }
            if (isEnd) {
                props.circleRight = type;
            }
            if (!isStart) {
                props.bgLeft = type;
            }
            if (!isEnd) {
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
