import React from "react";
import styled from "styled-components";
import { SchedulerRowData } from "../types";

interface SchedulerTimeSlotsProps {
    rowData: SchedulerRowData[];
    minTime: string;
    maxTime: string;
    onSlotClick?: ((data: any, e: React.MouseEvent) => void) | undefined;
}

export const SchedulerTimeSlots = ({
    rowData,
    minTime: _minTime,
    maxTime: _maxTime,
    onSlotClick,
}: SchedulerTimeSlotsProps) => {
    return (
        <Wrapper>
            {rowData.map((row, index) => (
                <TimeSlotRow key={row.id || index}>
                    <RowHeader>{row.name}</RowHeader>
                    <RowContent>
                        {/* Time slots would be rendered here */}
                        <Slot
                            onClick={(e) =>
                                onSlotClick?.({ row, slot: "empty" }, e)
                            }
                        />
                        <Slot
                            onClick={(e) =>
                                onSlotClick?.({ row, slot: "empty" }, e)
                            }
                        />
                        <Slot
                            onClick={(e) =>
                                onSlotClick?.({ row, slot: "empty" }, e)
                            }
                        />
                        {/* Add more slots as needed */}
                    </RowContent>
                </TimeSlotRow>
            ))}
        </Wrapper>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div`
    flex: 1;
    overflow: auto;
`;

const TimeSlotRow = styled.div`
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    min-height: 60px;
`;

const RowHeader = styled.div`
    width: 200px;
    padding: 8px;
    border-right: 1px solid #e0e0e0;
    background: white;
    position: sticky;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    font-weight: 500;
`;

const RowContent = styled.div`
    display: flex;
    flex: 1;
`;

const Slot = styled.div`
    flex: 1;
    border-right: 1px solid #f0f0f0;
    min-height: 60px;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;
