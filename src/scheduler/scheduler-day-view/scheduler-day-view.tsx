import styled from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { SchedulerDayViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { Typography } from "../../typography";

function formatHourLabel(time: string) {
    const [h] = time.split(":").map(Number);
    const ampm = h < 12 ? "am" : "pm";
    const hour = h % 12 === 0 ? 12 : h % 12;
    return { hour, ampm };
}

const getSlotStyle = (status?: string) => {
    switch (status) {
        case "pending":
            return {
                background: `repeating-linear-gradient(
            135deg,
            #FDF7F0,
            #FDF7F0 5px,
            #FCECD4 5px,
            #FCECD4 10px
        )`,
            };
        case "blocked":
            return {
                background: Colour["bg-inverse-subtle"],
                color: Colour["text-inverse"],
            };
        case "available":
            return {
                background: Colour["bg-available"],
                borderLeft: Colour["icon-success"],
            };
        case "booked":
            return {
                background: Colour["bg-primary-subtler"],
            };
        default:
            return {
                background: Colour["bg"],
            };
    }
};

export const TimeSlotDayView = ({
    rowData,
    minTime,
    maxTime,
    loading,
    onSlotClick,
}: SchedulerDayViewProps) => {
    const timeSlots = TimeHelper.generateTimings(30, "24hr", minTime, maxTime);
    const hourLabels = timeSlots.filter((t) => t.includes(":00"));

    return (
        <TimeSlotContainer>
            {/* Service Name Header Row */}
            <ServiceHeaderRow>
                <BlankCell />
                {rowData.map((service, idx) => (
                    <ServiceHeader key={idx}>
                        <Title>{service.name}</Title>
                        <Description>
                            <span>{service.rowCells.length}</span> available
                        </Description>
                    </ServiceHeader>
                ))}
            </ServiceHeaderRow>

            <GridBody>
                {/* Time labels */}
                <TimeColumn>
                    {hourLabels.map((time) => {
                        const { hour, ampm } = formatHourLabel(time);
                        return (
                            <TimeLabel key={time}>
                                <p>{hour}</p>
                                <p>{ampm}</p>
                            </TimeLabel>
                        );
                    })}
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
                                            slot
                                                ? (e) =>
                                                      onSlotClick &&
                                                      onSlotClick(slot, e)
                                                : undefined
                                        }
                                    >
                                        {slot &&
                                            (() => {
                                                const style = getSlotStyle(
                                                    slot.status
                                                );
                                                const duration =
                                                    TimeHelper.calculateDuration(
                                                        slot.startTime,
                                                        slot.endTime
                                                    );

                                                return (
                                                    <SlotContent
                                                        background={
                                                            style.background
                                                        }
                                                        color={style.color}
                                                        borderLeft={
                                                            style.borderLeft
                                                        }
                                                        duration={duration}
                                                    >
                                                        <SlotTime>
                                                            {TimeHelper.parseInput(
                                                                slot.startTime,
                                                                "12hr"
                                                            )}{" "}
                                                            -{" "}
                                                            {TimeHelper.parseInput(
                                                                slot.endTime,
                                                                "12hr"
                                                            )}
                                                        </SlotTime>

                                                        <SlotAvailability>
                                                            {slot.status ===
                                                            "blocked"
                                                                ? "Unavailable"
                                                                : `${slot.booked} / ${slot.capacity}`}
                                                        </SlotAvailability>
                                                    </SlotContent>
                                                );
                                            })()}
                                    </SlotCell>
                                );
                            })}
                        </SlotRow>
                    ))}
                </SlotGrid>
            </GridBody>
        </TimeSlotContainer>
    );
};
const TimeSlotContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
`;

const ServiceHeaderRow = styled.div`
    display: flex;
    background: ${Colour["bg-strong"]};
    max-height: 130px;
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

const BlankCell = styled.div`
    width: 42px;
`;

const ServiceHeader = styled(Typography.BodyMD)`
    flex: 1;
    min-width: 180px;
    padding: 24px;
    color: ${Colour["text-primary"]};
    font-weight: 600;
    line-height: 24px;
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:nth-child(2) {
        border-left: none;
    }
`;

const Title = styled.div``;

const Description = styled(Typography.BodySM)`
    margin-top: 4px;
    background-color: ${Colour["bg-available"]};
    border-radius: 23px;
    width: fit-content;
    padding: 2px ${Spacing["spacing-8"]};
    color: ${Colour["text-success"]};
    font-weight: 400;
    span {
        font-weight: 600;
    }
`;

const GridBody = styled.div`
    display: flex;
    width: 100%;
`;

const TimeColumn = styled(Typography.BodySM)`
    width: 42px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    color: ${Colour["text-subtler"]};
`;

const TimeLabel = styled.div`
    height: 96px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 8px;
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
    width: 280px; /* TODO: fix the width */
    flex: 1;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-bottom: ${Border["width-010"]} ${Colour["border"]}
        ${({ startTime }) => (startTime?.endsWith(":00") ? "dashed" : "solid")};
    cursor: pointer;
`;

const SlotContent = styled(Typography.BodyXS)<{
    background: string;
    borderLeft?: string;
    color?: string;
    duration?: number;
}>`
    width: 90%;
    padding: 8px;
    position: absolute;
    font-weight: 500;
    border-radius: 4px;
    z-index: 1;
    height: ${({ duration }) =>
        duration ? `${(duration / 30) * 48}px` : "48px"};

    display: flex;
    justify-content: space-between;

    background: ${({ background }) => background};
    color: ${({ color }) => color};
    border-left: 4px solid ${({ borderLeft }) => borderLeft || "none"};
`;

const SlotTime = styled.div``;

const SlotAvailability = styled.div``;
