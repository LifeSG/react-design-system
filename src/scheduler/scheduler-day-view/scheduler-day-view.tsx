import React from "react";
import styled from "styled-components";
import { Colour } from "../../theme";
import { SchedulerDayViewProps } from "./types";
import dayjs from "dayjs";

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

function formatHourLabel(time: string) {
    const [h] = time.split(":").map(Number);
    const ampm = h < 12 ? "am" : "pm";
    const hour = h % 12 === 0 ? 12 : h % 12;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <p style={{ marginTop: "auto" }}>{hour}</p>
            <p style={{ marginBottom: "4px" }}>{ampm}</p>
        </div>
    );
}

function calculateDuration(startTime: string, endTime: string): number {
    const start = dayjs(startTime, "HH:mm");
    const end = dayjs(endTime, "HH:mm");
    return end.diff(start, "minute");
}

export const SchedulerDayView = ({
    rowData,
    minTime,
    maxTime,
    loading,
    onSlotClick,
}: SchedulerDayViewProps) => {
    const timeSlots = generateTimeSlots(minTime, maxTime, 30);
    const hourLabels = [
        ...new Set(
            timeSlots
                .map((t) => (t.split(":")[1] === "00" ? t : null))
                .filter(Boolean)
        ),
    ];

    return (
        <Container>
            {/* Service Name Header Row */}
            <ServiceHeaderRow>
                <BlankCell />
                {rowData.map((service, idx) => (
                    <ServiceHeader key={idx}>{service.name}</ServiceHeader>
                ))}
            </ServiceHeaderRow>

            <GridBody>
                {/* Time labels */}
                <TimeColumn>
                    {hourLabels.map((time) =>
                        time ? (
                            <TimeLabel key={time}>
                                {formatHourLabel(time)}
                            </TimeLabel>
                        ) : null
                    )}
                </TimeColumn>

                {/* Time slot grid */}
                <SlotGrid>
                    {timeSlots.map((time) => (
                        <SlotRow key={time}>
                            {rowData.map((service, idx) => {
                                const slot = service.rowCells?.find(
                                    (c) => c.startTime === time
                                );
                                return (
                                    <SlotCell
                                        key={idx}
                                        startTime={time}
                                        onClick={
                                            slot && onSlotClick
                                                ? (e) => onSlotClick(slot, e)
                                                : undefined
                                        }
                                    >
                                        {slot && (
                                            <SlotContent
                                                status={slot.status}
                                                duration={calculateDuration(
                                                    slot.startTime,
                                                    slot.endTime
                                                )}
                                            >
                                                {slot.title}
                                                {slot.subtitle && (
                                                    <Subtitle>
                                                        {slot.subtitle}
                                                    </Subtitle>
                                                )}
                                            </SlotContent>
                                        )}
                                    </SlotCell>
                                );
                            })}
                        </SlotRow>
                    ))}
                </SlotGrid>
            </GridBody>
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ServiceHeaderRow = styled.div`
    display: flex;
    background: ${Colour["bg-strong"]};
    border: 1px solid ${Colour["border"]};
`;

const BlankCell = styled.div`
    width: 80px;
    min-width: 80px;
`;

const ServiceHeader = styled.div`
    flex: 1;
    min-width: 180px;
    padding: 12px;
    text-align: center;
    font-weight: bold;
    border-right: 1px solid ${Colour["border"]};
`;

const GridBody = styled.div`
    display: flex;
    width: 100%;
`;

const TimeColumn = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${Colour["border"]};
`;

const TimeLabel = styled.div`
    height: 96px; /* 2 slots = 2 * 48px */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #888;
`;

const SlotGrid = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const SlotRow = styled.div`
    display: flex;
    min-height: 48px;
`;

const SlotCell = styled.div<{
    startTime?: string;
}>`
    flex: 1;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    position: relative;
    border-right: 1px solid #f0f0f0;
    border-bottom: ${({ startTime }) =>
        startTime?.endsWith(":00") ? "1px dashed #ccc" : "1px solid #ccc"};
`;

const SlotContent = styled.div<{
    status?: string;
    duration?: number;
}>`
    width: 90%;
    background: ${({ status }) =>
        status === "filled"
            ? "#e6f7ec"
            : status === "blocked"
            ? "#fff7e6"
            : status === "unavailable"
            ? "#f5f5f5"
            : "#fff"};
    border-radius: 0px 4px 4px 0px;
    padding: 8px;
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    height: ${({ duration }) =>
        duration ? `${(duration / 30) * 48}px` : "48px"}; // scale height
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover {
        background: #f0f0f0;
    }
`;

const Subtitle = styled.div`
    font-size: 12px;
    color: #888;
    margin-top: 2px;
`;
