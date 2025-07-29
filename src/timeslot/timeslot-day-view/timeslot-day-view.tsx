import { useRef } from "react";
import { TimeSlotDayViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { useTimelineOffset, useInitialScroll } from "../shared";
import {
    ArrowLeft,
    ArrowRight,
    BlankCell,
    BodyContainer,
    Description,
    HeaderContainer,
    LoadingContainer,
    StyledContainer,
    ServiceColumn,
    ServiceContainer,
    SlotAvailability,
    SlotCell,
    SlotColumn,
    SlotContent,
    SlotGrid,
    SlotTime,
    StyleDiv,
    TimeSlotContainer,
    Timeline,
    Title,
} from "./timeslot-day-view.styles";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { TimeSlotRowCellData } from "../types";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";

export const TimeSlotDayView = ({
    rowData,
    isMobile,
    onNextService,
    onPrevService,
    showPrevArrow,
    showNextArrow,
    minTime,
    maxTime,
    initialScrollTime,
    loading,
    onSlotClick,
}: TimeSlotDayViewProps) => {
    const timelineOffset = useTimelineOffset(minTime, maxTime);
    const bodyRef = useInitialScroll(loading, minTime, initialScrollTime);
    const headerRef = useRef<HTMLDivElement>(null);

    // Synchronize horizontal scrolling between header and body
    const handleBodyScroll = (_e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
        }
    };
    const handleHeaderScroll = (_e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderHeader = () => {
        return (
            <ServiceContainer columnCount={rowData.length}>
                {rowData.map((service, idx) => (
                    <ServiceColumn key={idx}>
                        <StyledContainer>
                            {isMobile && showPrevArrow && (
                                <ArrowLeft onClick={onPrevService} />
                            )}
                            <StyleDiv>
                                <Title>{service.name}</Title>
                                <Description>
                                    <span>
                                        {
                                            service.rowCells.filter(
                                                (cell: TimeSlotRowCellData) =>
                                                    cell.status === "available"
                                            ).length
                                        }
                                    </span>{" "}
                                    available
                                </Description>
                            </StyleDiv>
                        </StyledContainer>
                        {isMobile && showNextArrow && (
                            <ArrowRight onClick={onNextService} />
                        )}
                    </ServiceColumn>
                ))}
            </ServiceContainer>
        );
    };

    const renderSlotContent = (slot: TimeSlotRowCellData) => {
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
                {timelineOffset !== null && <Timeline $top={timelineOffset} />}
                {rowData.map((service) => (
                    <SlotColumn key={service.id}>
                        {timeSlots.map((time) => {
                            const slot = service.rowCells?.find(
                                (c: TimeSlotRowCellData) => c.startTime === time
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
