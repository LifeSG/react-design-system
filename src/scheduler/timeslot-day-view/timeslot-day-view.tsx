import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { TimeSlotDayViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import {
    TimeSlotContainer,
    LoadingContainer,
    HeaderContainer,
    BlankCell,
    ServiceColumn,
    ServiceContainer,
    StyleDiv,
    Title,
    Description,
    ArrowLeft,
    ArrowRight,
    BodyContainer,
    SlotGrid,
    SlotColumn,
    SlotCell,
    SlotContent,
    SlotTime,
    SlotAvailability,
    Timeline,
} from "./timeslot-day-view.styles";
import { TimeIndicator } from "../time-indicator";
import { SchedulerRowCellData } from "../types";
import { CELL_HEIGHT, SLOT_INTERVAL } from "../const";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";

/**
 * Calculates the vertical offset (in pixels) for the current time indicator (timeline)
 * within the scheduler day view, based on the provided minimum and maximum time bounds.
 * Returns null if the current time is outside the given range.
 *
 * @param minTime - The earliest time displayed in the scheduler (format: "HH:mm").
 * @param maxTime - The latest time displayed in the scheduler (format: "HH:mm").
 * @returns The pixel offset from the top for the timeline, or null if out of range.
 */
function getTimelineOffset(minTime: string, maxTime: string) {
    const now = dayjs();
    const min = dayjs(now.format("YYYY-MM-DD") + " " + minTime);
    const max = dayjs(now.format("YYYY-MM-DD") + " " + maxTime);
    if (now.isBefore(min) || now.isAfter(max)) return null;
    const minutesSinceMin = now.diff(min, "minute");
    const totalMinutes = max.diff(min, "minute");
    const totalHeight = (totalMinutes / SLOT_INTERVAL) * CELL_HEIGHT;
    const offset = (minutesSinceMin / totalMinutes) * totalHeight;
    return offset;
}

export const TimeSlotDayView = ({
    rowData,
    isMobile,
    onNextService,
    onPrevService,
    showPrevArrow,
    showNextArrow,
    minTime,
    maxTime,
    loading,
    onSlotClick,
}: TimeSlotDayViewProps) => {
    const [timelineOffset, setTimelineOffset] = useState<number | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    /**
     * useEffect hook that updates the timeline offset based on the current minimum and maximum time.
     *  Sets up an interval to update the offset every 15 minutes (900,000 ms) to keep the timeline in sync with real time.
     *  Cleans up the interval on component unmount or when `minTime` or `maxTime` change.
     * @remarks
     * This ensures that the timeline indicator remains accurate as time progresses or when the time range changes.
     * @dependency minTime, maxTime
     */
    useEffect(() => {
        function updateOffset() {
            setTimelineOffset(getTimelineOffset(minTime, maxTime));
        }
        updateOffset();
        const interval = setInterval(updateOffset, 15 * 60 * 1000); // every 15 mins
        return () => clearInterval(interval);
    }, [minTime, maxTime]);

    // Synchronize horizontal scrolling between header and body
    const handleBodyScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
        }
    };
    const handleHeaderScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
        }
    };

    const renderHeader = () => {
        return (
            <ServiceContainer columnCount={rowData.length}>
                {rowData.map((service, idx) => (
                    <ServiceColumn key={idx}>
                        {isMobile && showPrevArrow && (
                            <ArrowLeft onClick={onPrevService} />
                        )}
                        <StyleDiv>
                            <Title>{service.name}</Title>
                            <Description>
                                <span>{service.rowCells.length}</span> available
                            </Description>
                        </StyleDiv>
                        {isMobile && showNextArrow && (
                            <ArrowRight onClick={onNextService} />
                        )}
                    </ServiceColumn>
                ))}
            </ServiceContainer>
        );
    };

    const renderSlotContent = (slot: SchedulerRowCellData) => {
        const duration = TimeHelper.calculateDuration(
            slot.startTime,
            slot.endTime
        );
        return (
            <SlotContent
                status={slot.status}
                duration={duration}
                onClick={(e) => onSlotClick?.(slot, e)}
            >
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
            <SlotGrid columnCount={rowData.length}>
                {timelineOffset !== null && (
                    <Timeline style={{ top: timelineOffset }} />
                )}
                {rowData.map((service) => (
                    <SlotColumn key={service.id}>
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
                    </SlotColumn>
                ))}
            </SlotGrid>
        );
    };

    return (
        <TimeSlotContainer>
            {loading ? (
                <LoadingContainer>
                    <ThemedLoadingSpinner />
                </LoadingContainer>
            ) : (
                <>
                    {/* Service Name Header Row */}
                    <HeaderContainer
                        ref={headerRef}
                        onScroll={handleHeaderScroll}
                        columnCount={rowData.length}
                    >
                        <BlankCell />
                        {renderHeader()}
                    </HeaderContainer>

                    <BodyContainer
                        ref={bodyRef}
                        onScroll={handleBodyScroll}
                        columnCount={rowData.length}
                    >
                        {/* Time labels */}
                        <TimeIndicator
                            minTime={minTime}
                            maxTime={maxTime}
                            format="24hr"
                        />
                        {/* Time slot grid */}
                        {renderTimeSlotGrid()}
                    </BodyContainer>
                </>
            )}
        </TimeSlotContainer>
    );
};
