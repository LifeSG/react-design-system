import { useMemo, useRef } from "react";
import { ScheduleDayViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { useTimelineOffset, useInitialScroll } from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import {
    ArrowLeft,
    ArrowRight,
    BlankCell,
    BodyContainer,
    Description,
    HeaderContainer,
    LoadingContainer,
    ServiceColumn,
    ServiceContainer,
    SlotAvailability,
    SlotCell,
    SlotColumn,
    SlotContent,
    SlotGrid,
    SlotTime,
    StyleDiv,
    ScheduleContainer,
    Timeline,
    Title,
    ArrowContainer,
} from "./schedule-day-view.styles";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { ScheduleRowCellData } from "../types";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";

export const ScheduleDayView = ({
    rowData,
    isMobile,
    onNextService,
    onPrevService,
    showPrevArrow,
    showNextArrow,
    minTime,
    maxTime,
    initialScrollTime,
    containerRef,
    loading,
    emptySlotPopover,
}: ScheduleDayViewProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const timelineOffset = useTimelineOffset(minTime, maxTime);
    const bodyRef = useInitialScroll(loading, minTime, initialScrollTime);
    const headerRef = useRef<HTMLDivElement>(null);
    const timeSlots = useMemo(
        () => TimeHelper.generateTimings(30, "24hr", minTime, maxTime),
        [minTime, maxTime]
    );
    const slotMaps = useMemo(() => {
        return rowData.map((service) => {
            const slotMap = new Map<string, ScheduleRowCellData>();
            service.rowCells?.forEach((cell) => {
                slotMap.set(cell.startTime, cell);
            });
            return slotMap;
        });
    }, [rowData]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
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
    // HELPER FUNCTIONS
    // =============================================================================
     // Helper function to determine popover configuration for a time slot
    const getPopoverConfig = (
        service: any,
        slot: ScheduleRowCellData | undefined,
        time: string
    ) => {
        if (slot?.customPopover) {
            return slot.customPopover;
        }
        const isTimeSlotCovered = service.rowCells?.some(
            (cell: ScheduleRowCellData) => {
                const cellStartMinutes = TimeHelper.timeToMinutes(
                    cell.startTime
                );
                const cellEndMinutes = TimeHelper.timeToMinutes(cell.endTime);
                const currentMinutes = TimeHelper.timeToMinutes(time);

                return (
                    currentMinutes >= cellStartMinutes &&
                    currentMinutes < cellEndMinutes
                );
            }
        );
        return !isTimeSlotCovered && emptySlotPopover
            ? emptySlotPopover
            : undefined;
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderHeader = useMemo(() => {
        return (
            <ServiceContainer columnCount={rowData.length}>
                {rowData.map((service, idx) => (
                    <ServiceColumn key={idx}>
                        <ArrowContainer>
                            {isMobile && showPrevArrow && (
                                <ArrowLeft onClick={onPrevService} />
                            )}
                        </ArrowContainer>
                        <StyleDiv>
                            <Title>{service.name}</Title>
                            <Description>
                                <span>
                                    {service.rowCells.filter(
                                        (cell: ScheduleRowCellData) =>
                                            cell.status === "available"
                                    ).length}
                                </span>{" "}
                                available
                            </Description>
                        </StyleDiv>
                        <ArrowContainer>
                            {isMobile && showNextArrow && (
                                <ArrowRight onClick={onNextService} />
                            )}
                        </ArrowContainer>
                    </ServiceColumn>
                ))}
            </ServiceContainer>
        );
    }, [rowData, onNextService]);

    const renderSlotContent = useMemo(() => {
        return (slot: ScheduleRowCellData) => {
            const duration = TimeHelper.calculateDuration(
                slot.startTime,
                slot.endTime
            );
            return (
                <SlotContent
                    status={slot.status}
                    duration={duration}
                    onClick={(e) => slot.onClick && slot.onClick(slot, e)}
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
    }, []);

   

    const renderTimeSlotGrid = useMemo(() => {
        return (
            <SlotGrid columnCount={rowData.length}>
                {timelineOffset !== null && <Timeline $top={timelineOffset} />}
                {rowData.map((service, idx) => (
                    <SlotColumn key={service.id} data-testid="schedule-column">
                        {timeSlots.map((time) => {
                            const slot = slotMaps[idx].get(time);
                            const popoverConfig = getPopoverConfig(service, slot, time );
                            return (
                                <WithOptionalPopover
                                    key={time}
                                    containerRef={containerRef}
                                    customPopover={popoverConfig}
                                >
                                    <SlotCell startTime={time}>
                                        {slot && renderSlotContent(slot)}
                                    </SlotCell>
                                </WithOptionalPopover>
                            );
                        })}
                    </SlotColumn>
                ))}
            </SlotGrid>
        );
    }, [
        rowData,
        minTime,
        maxTime,
        timelineOffset,
        timeSlots,
        slotMaps,
        containerRef,
        emptySlotPopover,
        renderSlotContent,
    ]);

    return (
        <ScheduleContainer>
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
                        $isMobile={isMobile}
                    >
                        <BlankCell />
                        {renderHeader}
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
                        {renderTimeSlotGrid}
                    </BodyContainer>
                </>
            )}
        </ScheduleContainer>
    );
};
