import { TimeSlotWeekViewProps } from "./types";
import { TimeSlot } from "../time-slot-bar";
import { TimeSlotWeekCalendar } from "./time-slot-week-calendar";
import { Wrapper } from "./time-slot-week.styles";

export const TimeSlotWeekView = ({
    className,
    slots,
    showNavigationHeader,
    enableSelection,
    onChange,
    onSlotClick,
    minDate,
    maxDate,
    value,
    onYearMonthDisplayChange,
    currentCalendarDate,
    ...otherProps
}: TimeSlotWeekViewProps) => {
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
        <Wrapper>
            <TimeSlotWeekCalendar
                type="weekly"
                slots={slots}
                showNavigationHeader={showNavigationHeader}
                enableSelection={enableSelection}
                onSlotClick={onSlotClickHandler}
                onSelect={onSelectHandler}
                onYearMonthDisplayChange={onYearMonthDisplayChange}
                value={value}
                currentCalendarDate={currentCalendarDate}
                {...otherProps}
                between={minDate && maxDate ? [minDate, maxDate] : undefined}
            />
        </Wrapper>
    );
};
