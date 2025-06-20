import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper, DateHelper } from "../../../util";
import { CellStyleProps, CellType, DayCell, DayCellProps } from "../day-cell";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDate: string | undefined;
    focusDate: string;
    hoverDate: string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    numberOfDays?: number | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
    onFocus: (value: string) => void;
    setFocusCell: (value: string) => void;
    tabIndex?: number;
}

export const FixedRangeDayCell = ({
    date,
    calendarDate,
    selectedDate,
    hoverDate,
    focusDate,
    minDate,
    maxDate,
    disabledDates,
    allowDisabledSelection,
    numberOfDays = 1,
    onSelect,
    onHover,
    onFocus,
    setFocusCell,
    tabIndex,
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

    // For accessible label
    const dayName = `From ${dayjs(hoverStart).format("D MMMM")} to ${dayjs(
        hoverEnd
    ).format("D MMMM")}, ${disabled ? "Unavailable" : "Available"}`;

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSelect = () => {
        onSelect(date, !interactive);
    };

    const handleHover = () => {
        onHover(date.format("YYYY-MM-DD"), !interactive);
    };

    const handleFocus = () => {
        onFocus(date.format("YYYY-MM-DD"));
    };

    const handleKeyNavigation = (event: React.KeyboardEvent) => {
        let newFocusSelection: Dayjs | undefined;

        const keyActions: Record<string, () => dayjs.Dayjs> = {
            ArrowLeft: () => date.subtract(1, "day"),
            ArrowRight: () => date.add(1, "day"),
            ArrowUp: () => date.subtract(7, "day"),
            ArrowDown: () => date.add(7, "day"),
            Home: () => date.startOf("week"),
            End: () => date.endOf("week"),
            PageUp: () => {
                return event.shiftKey
                    ? date.subtract(1, "year")
                    : date.add(1, "month");
            },
            PageDown: () => {
                return event.shiftKey
                    ? date.subtract(1, "year")
                    : date.add(1, "month");
            },
        };

        const action = keyActions[event.key];
        if (action) {
            event.preventDefault();
            newFocusSelection = action();
            setFocusCell(newFocusSelection.format("YYYY-MM-DD"));
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        const keyboardEvent = event as React.KeyboardEvent<HTMLInputElement>;
        const selectedKey = keyboardEvent.key;

        if (selectedKey === "Enter" || selectedKey === " ") {
            event.preventDefault();
            if (interactive) {
                handleSelect();
            }
            return;
        }

        handleKeyNavigation(event);
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
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        role: "gridcell",
        focusDate: dayjs(focusDate),
        tabIndex,
        dayName,
    };

    return (
        <DayCell {...commonProps} {...getCellStyle()} {...getRangeStyle()} />
    );
};
