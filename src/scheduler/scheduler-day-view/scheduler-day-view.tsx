import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SchedulerDayViewProps } from "./types";

// Utility to generate time slots between minTime and maxTime
function generateTimeSlots(minTime: string, maxTime: string, interval = 30) {
    const slots: string[] = [];
    let [h, m] = minTime.split(":").map(Number);
    const [maxH, maxM] = maxTime.split(":").map(Number);
    while (h < maxH || (h === maxH && m <= maxM)) {
        slots.push(
            `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
        );
        m += interval;
        if (m >= 60) {
            h += 1;
            m -= 60;
        }
    }
    return slots;
}

function formatTimeLabel(time: string) {
    const [h, m] = time.split(":").map(Number);
    const ampm = h < 12 ? "am" : "pm";
    const hour = h % 12 === 0 ? 12 : h % 12;
    return `${hour}${
        m !== 0 ? ":" + m.toString().padStart(2, "0") : ""
    } ${ampm}`;
}

export const SchedulerDayView = ({
    date,
    rowData,
    loading,
    minTime,
    maxTime,
    emptyContentMessage,
    onSlotClick,
}: SchedulerDayViewProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <LoadingWrapper>
                <div>Loading...</div>
            </LoadingWrapper>
        );
    }

    if (!rowData || rowData.length === 0) {
        return (
            <EmptyWrapper>
                <div>{emptyContentMessage}</div>
            </EmptyWrapper>
        );
    }

    const timeSlots = generateTimeSlots(minTime, maxTime, 30);

    return (
        <GridWrapper ref={containerRef}>
            {/* Header row */}
            <HeaderRow>
                <TimeHeaderCell />
                {rowData.map((service, idx) => (
                    <ServiceHeaderCell key={service.id || idx}>
                        {service.name}
                    </ServiceHeaderCell>
                ))}
            </HeaderRow>
            {/* Time rows */}
            {timeSlots.map((time, rowIdx) => (
                <TimeRow key={time}>
                    <TimeCell>{formatTimeLabel(time)}</TimeCell>
                    {rowData.map((service, colIdx) => {
                        // Find slot for this service at this time
                        const slot = service.rowCells?.find(
                            (cell) => cell.startTime === time
                        );
                        return (
                            <SlotCell
                                key={service.id || colIdx}
                                status={slot?.status}
                                onClick={
                                    slot && onSlotClick
                                        ? (e) => onSlotClick(slot, e)
                                        : undefined
                                }
                                clickable={!!slot && !!onSlotClick}
                            >
                                {slot ? (
                                    <>
                                        <SlotTitle>{slot.title}</SlotTitle>
                                        {slot.subtitle && (
                                            <SlotSubtitle>
                                                {slot.subtitle}
                                            </SlotSubtitle>
                                        )}
                                    </>
                                ) : null}
                            </SlotCell>
                        );
                    })}
                </TimeRow>
            ))}
        </GridWrapper>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const GridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: auto;
`;

const HeaderRow = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 2;
`;

const TimeHeaderCell = styled.div`
    width: 80px;
    min-width: 80px;
    border-right: 1px solid #e0e0e0;
`;

const ServiceHeaderCell = styled.div`
    flex: 1;
    min-width: 180px;
    padding: 12px;
    text-align: center;
    font-weight: 600;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    background: #fafbfc;
`;

const TimeRow = styled.div`
    display: flex;
    min-height: 48px;
    border-bottom: 1px solid #e0e0e0;
`;

const TimeCell = styled.div`
    width: 80px;
    min-width: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 8px;
    font-size: 13px;
    color: #888;
    border-right: 1px solid #e0e0e0;
    background: #fff;
`;

const SlotCell = styled.div<{ status?: string; clickable?: boolean }>`
    flex: 1;
    min-width: 180px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
    background: ${({ status }) =>
        status === "filled"
            ? "#e6f7ec"
            : status === "blocked"
            ? "#fff7e6"
            : status === "unavailable"
            ? "#f5f5f5"
            : "#fff"};
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    &:hover {
        background: ${({ clickable }) => (clickable ? "#f5f5f5" : undefined)};
    }
`;

const SlotTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
`;

const SlotSubtitle = styled.div`
    font-size: 12px;
    color: #888;
    margin-top: 2px;
`;

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

const EmptyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    color: #666;
`;
