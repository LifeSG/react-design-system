import { TimeSlotDayViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import {
    TimeSlotContainer,
    ServiceHeaderRow,
    BlankCell,
    ServiceHeader,
    Title,
    Description,
    GridBody,
    SlotGrid,
    SlotRow,
    SlotCell,
    SlotContent,
    SlotTime,
    SlotAvailability,
} from "./timeslot-day-view.style";
import { TimeIndicator } from "../time-indicator";
import { SchedulerRowCellData } from "../types";

export const TimeSlotDayView = ({
    rowData,
    minTime,
    maxTime,
    loading,
    onSlotClick,
    styleAttributes,
}: TimeSlotDayViewProps) => {
    const renderSlotContent = (slot: SchedulerRowCellData) => {
        const duration = TimeHelper.calculateDuration(
            slot.startTime,
            slot.endTime
        );
        return (
            <SlotContent status={slot.status} duration={duration}>
                <SlotTime>
                    {TimeHelper.parseInput(slot.startTime, "12hr")} -{" "}
                    {TimeHelper.parseInput(slot.endTime, "12hr")}
                </SlotTime>
                <SlotAvailability>
                    {slot.status === "blocked"
                        ? "Unavailable"
                        : `${slot.booked} / ${slot.capacity}`}
                </SlotAvailability>
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
                                            ? (e) => onSlotClick?.(slot, e)
                                            : undefined
                                    }
                                >
                                    {slot && renderSlotContent(slot)}
                                </SlotCell>
                            );
                        })}
                    </SlotRow>
                ))}
            </SlotGrid>
        );
    };

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
                <TimeIndicator
                    minTime={minTime}
                    maxTime={maxTime}
                    format="24hr"
                />
                {/* Time slot grid */}
                {renderTimeSlotGrid()}
            </GridBody>
        </TimeSlotContainer>
    );
};
