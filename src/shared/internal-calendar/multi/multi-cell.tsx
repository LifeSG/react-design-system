import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper } from "../../../util";
import { DayCell } from "../day-cell/day-cell";
import { CellStyleProps, DayCellProps } from "../day-cell/types";

interface Props {
    date: Dayjs;
    calendarDate: Dayjs;
    selectedDates: string[];
    hoverDate: string;
    focusDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    disabledDates?: string[] | undefined;
    allowDisabledSelection?: boolean | undefined;
    showActiveMonthDaysOnly?: boolean | undefined;
    onSelect: (value: Dayjs, disabled: boolean) => void;
    onHover: (value: string, disabled: boolean) => void;
    onFocus: (value: string) => void;
    setFocusCell: (value: string) => void;
    tabIndex: number;
}

export const MultiCell = ({
    date,
    calendarDate,
    selectedDates,
    hoverDate,
    focusDate,
    minDate,
    maxDate,
    disabledDates,
    allowDisabledSelection,
    showActiveMonthDaysOnly,
    onSelect,
    onHover,
    onFocus,
    setFocusCell,
    tabIndex,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REF
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
                    : date.subtract(1, "month");
            },
            PageDown: () => {
                return event.shiftKey
                    ? date.add(1, "year")
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
    // HELPER FUNCTIONS
    // =========================================================================

    const getCellStyleProps = (): CellStyleProps => {
        const props: CellStyleProps = {};
        const dateString = date.format("YYYY-MM-DD");
        const isCurrentMonth = calendarDate.month() === date.month();

        if (!isCurrentMonth && showActiveMonthDaysOnly) {
            props.labelType = "hidden";
            return props;
        }

        // Base label type
        if (!isCurrentMonth) {
            props.labelType = "unavailable";
        } else if (dayjs().isSame(date, "day") && !disabled) {
            props.labelType = "current";
        }

        // Selected state overrides
        if (selectedDates.includes(dateString)) {
            props.labelType = "selected";
            props.circleLeft = "selected-outline";
            props.circleRight = "selected-outline";
        }

        // Hover state
        if (hoverDate && date.isSame(hoverDate, "day")) {
            if (selectedDates.includes(dateString)) {
                props.labelType = "selected-hover";
                props.circleLeft = "selected-hover-outline";
                props.circleRight = "selected-hover-outline";
            } else {
                props.labelType = "hover";
                props.circleLeft = "hover-subtle";
                props.circleRight = "hover-subtle";
            }
        }

        return props;
    };

    // =============================================================================
    // RENDER FUNCTIONS
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
    };

    return <DayCell {...commonProps} {...getCellStyleProps()} />;
};
