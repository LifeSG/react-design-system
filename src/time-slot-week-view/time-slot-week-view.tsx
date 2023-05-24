import { TimeSlotWeekViewProps } from "./types";
import { TimeSlot } from "../time-slot-bar";
import styled from "styled-components";
import { TimeSlotWeekCalendar } from "./time-slot-week-calendar";

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
                value={value}
                currentCalendarDate={currentCalendarDate}
                {...otherProps}
                between={minDate && maxDate ? [minDate, maxDate] : undefined}
            />
        </Wrapper>
    );
};

// TODO : remove
const Wrapper = styled.div`
    min-width: 18.5rem;
`;
