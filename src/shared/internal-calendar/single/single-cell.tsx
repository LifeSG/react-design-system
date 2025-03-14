import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper } from "../../../util";
import { CellStyleProps, DayCell, DayCellProps } from "../day-cell";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDate: string | undefined;
    hoverDate: string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    showActiveMonthDaysOnly?: boolean | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
}

export const SingleCell = ({
    date,
    calendarDate,
    selectedDate,
    hoverDate,
    minDate,
    maxDate,
    disabledDates,
    allowDisabledSelection,
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
        }

        const isSelected = date.isSame(selectedDate, "day");
        const isHover = date.isSame(hoverDate, "day");

        if (isSelected && isHover) {
            props.labelType = "selected-hover";
            props.circleLeft = "selected-hover-outline";
            props.circleRight = "selected-hover-outline";
        } else if (isSelected) {
            props.labelType = "selected";
            props.circleLeft = "selected-outline";
            props.circleRight = "selected-outline";
        } else if (isHover) {
            props.labelType = "hover";
            props.circleLeft = "hover-subtle";
            props.circleRight = "hover-subtle";
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

    return <DayCell {...commonProps} {...getCellStyle()} />;
};
