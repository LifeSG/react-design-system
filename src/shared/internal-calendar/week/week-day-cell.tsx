import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper, DateHelper } from "../../../util";
import {
    CellStyleProps,
    CellType,
    DayCell,
    DayCellProps,
    LabelType,
} from "../day-cell";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDate: string | undefined;
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

        let type: CellType | undefined = undefined;
        let labelType: LabelType | undefined = undefined;
        if (isSelected && isHover) {
            type = "selected-hover-outline";
            labelType = "selected-hover";
        } else if (isSelected) {
            type = "selected-outline";
            labelType = "selected";
        } else if (isHover) {
            type = "hover";
            labelType = "hover";
        }

        if (type) {
            props.labelType = labelType;

            if (isStart) {
                props.circleLeft = type;
            } else {
                props.bgLeft = type;
            }

            if (isEnd) {
                props.circleRight = type;
            } else {
                props.bgRight = type;
            }
        }

        return props;
    };

    const getCellStyle = () => {
        const props: CellStyleProps = {};

        if (calendarDate.month() !== date.month()) {
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
