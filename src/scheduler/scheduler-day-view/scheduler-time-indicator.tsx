import React from "react";
import styled from "styled-components";

interface SchedulerTimeIndicatorProps {
    minTime: string;
    maxTime: string;
}

export const SchedulerTimeIndicator = ({
    minTime: _minTime,
    maxTime: _maxTime,
}: SchedulerTimeIndicatorProps) => {
    return (
        <Wrapper>
            <TimeIndicator>
                {/* Time indicators would go here */}
                <TimeSlot>6:00 AM</TimeSlot>
                <TimeSlot>7:00 AM</TimeSlot>
                <TimeSlot>8:00 AM</TimeSlot>
                {/* Add more time slots as needed */}
            </TimeIndicator>
        </Wrapper>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    position: sticky;
    left: 0;
    z-index: 5;
    background: white;
    border-right: 1px solid #e0e0e0;
`;

const TimeIndicator = styled.div`
    padding: 8px;
    min-width: 80px;
`;

const TimeSlot = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;
`;
