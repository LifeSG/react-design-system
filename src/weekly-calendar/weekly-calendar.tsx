import styled from "styled-components";
import { InternalCalendar } from "../shared/internal-calendar";
import { Color } from "../color";
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
                showNavigationHeader={showNavigationHeader}
                enableSelection={enableSelection}
                onSlotClick={onSlotClickHandler}
                onSelect={onSelectHandler}
                value={"2023-06-01"}
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
