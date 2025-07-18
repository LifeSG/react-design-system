import React from "react";
import {
    TimeSlotDayViewContainer,
    TimeIndicatorColumn,
    ServiceColumnsContainer,
    ServiceColumn,
    ServiceHeader,
    BlankCell,
    Title,
    Description,
    SlotCell,
    SlotContent,
} from "./timeslot-day-view.styles";
import { TimeHelper } from "../../util/time-helper";
import { SchedulerRowCellData } from "../types";
import { TimeSlotDayViewProps } from "./types";
import { TimeIndicator } from "../time-indicator";
import { CELL_HEIGHT } from "../const";

export const TimeSlotDayView: React.FC<TimeSlotDayViewProps> = ({
    rowData,
    minTime,
    maxTime, 
    onSlotClick,
}) => {
    const renderSlotContent = (slot: SchedulerRowCellData) => {
        const duration = TimeHelper.calculateDuration(
            slot.startTime,
            slot.endTime
        );
        return (
            <SlotContent
                status={slot.status}
                duration={duration}
                onClick={(e) => {
                    console.log(
                        "Slot duration:",
                        (duration / 30) * CELL_HEIGHT
                    );
                    onSlotClick?.(slot, e);
                }}
            >
                <span>
                    {TimeHelper.parseInput(slot.startTime, "12hr")} -{" "}
                    {TimeHelper.parseInput(slot.endTime, "12hr")}
                </span>
                <span>
                    {slot.status === "blocked"
                        ? "Unavailable"
                        : `${slot.booked} / ${slot.capacity}`}
                </span>
            </SlotContent>
        );
    };
    const renderTimeSlotGrid = () => {
        const timeSlots = TimeHelper.generateTimings(
            30,
            "24hr",
            minTime,
            maxTime
        );
        return (
            <ServiceColumnsContainer serviceCount={rowData.length}>
                {rowData.map((service) => (
                    <ServiceColumn key={service.id}>
                        <ServiceHeader>
                            <Title>{service.name}</Title>
                            <Description>
                                <span>{service.rowCells.length}</span> available
                            </Description>
                        </ServiceHeader>
                        {timeSlots.map((time) => {
                            const slot = service.rowCells?.find(
                                (c) => c.startTime === time
                            );
                            return (
                                <SlotCell key={time} startTime={time}>
                                    {slot && renderSlotContent(slot)}
                                </SlotCell>
                            );
                        })}
                    </ServiceColumn>
                ))}
            </ServiceColumnsContainer>
        );
    };
    return (
        <TimeSlotDayViewContainer>
            <TimeIndicatorColumn>
                <BlankCell />
                <TimeIndicator
                    minTime={minTime}
                    maxTime={maxTime}
                    format="24hr"
                />
            </TimeIndicatorColumn>
            {renderTimeSlotGrid()}
        </TimeSlotDayViewContainer>
    );
};
