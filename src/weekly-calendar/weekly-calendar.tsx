import { InternalCalendar } from "../shared/internal-calendar";
import { WeeklyCalendarProps } from "./types";
import { TimeSlot } from "../time-slot-bar";

export const WeeklyCalendar = ({
    className,
    slots,
    showNavigationHeader,
    enableSelection,
    onChange,
    onSlotClick,
    minDate,
    maxDate,
    value,
    currentCalendarDate,
    ...otherProps
}: WeeklyCalendarProps) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const onSlotClickHandler = (t: TimeSlot) => {
        if (onSlotClick) onSlotClick(t);
    };

    const onSelectHandler = (val: string) => {
        if (onChange) onChange(val);
    };

    return (
        <InternalCalendar
            type="weekly"
            slots={slots}
            showNavigationHeader={showNavigationHeader}
            enableSelection={enableSelection}
            onSlotClick={onSlotClickHandler}
            onSelect={onSelectHandler}
            value={value}
            currentCalendarDate={currentCalendarDate}
            {...otherProps}
            between={minDate && maxDate ? [minDate, maxDate] : undefined}
        />
    );
};

// =============================================================================
// STYLING
// =============================================================================
