import styled from "styled-components";
import { InternalCalendar } from "../shared/internal-calendar";
import { Color } from "../color";
import { WeeklyCalendarProps } from "./types";
import { TimeSlot } from "../time-slot-bar";

export const WeeklyCalendar = ({
    className,
    slots,
    showMonthSwitcher,
    enableSelection,
    onChange,
    onSlotClick,
    minDate,
    maxDate,
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
        <Wrapper className={className}>
            <InternalCalendar
                type="weekly"
                slots={slots}
                showNavigationHeader={showMonthSwitcher}
                enableSelection={enableSelection}
                onSlotClick={onSlotClickHandler}
                onSelect={onSelectHandler}
                {...otherProps}
                between={minDate && maxDate ? [minDate, maxDate] : undefined}
            />
        </Wrapper>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    min-width: 25rem;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 12px;
`;
