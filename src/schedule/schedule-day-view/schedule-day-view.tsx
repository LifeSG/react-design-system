import { useMemo, useRef } from "react";
import { ScheduleDayViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { useTimelineOffset, useInitialScroll } from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import { ChevronLeftIcon, ChevronRightIcon } from "@lifesg/react-icons";
import { CELL_HEIGHT } from "../const";
import {
    ArrowButton,
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
    EmptySlot,
} from "./schedule-day-view.styles";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { ScheduleRowCellData, ScheduleRowData } from "../types";
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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    // Synchronize horizontal scrolling between header and body
    const handleBodyScroll = (_e: React.UIEvent<HTMLDivElement>) => {
        if (headerRef.current && bodyRef.current) {
            // Set a fixed buffer (17px) to prevent over-scrolling and misalignment
            const SCROLL_BUFFER = 17;
            const maxScrollLeft =
                bodyRef.current.scrollWidth -
                bodyRef.current.clientWidth -
                SCROLL_BUFFER;
            const currentScrollLeft = bodyRef.current.scrollLeft;

            if (currentScrollLeft > maxScrollLeft) {
                bodyRef.current.scrollLeft = maxScrollLeft;
                headerRef.current.scrollLeft = maxScrollLeft;
            } else {
                headerRef.current.scrollLeft = currentScrollLeft;
            }
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
    // Calculate offset position within a 30-minute time cell
    const calculateSlotOffset = (
        slotStartTime: string,
        timeSlotStart: string
    ): number => {
        const slotStartMinutes = TimeHelper.timeToMinutes(slotStartTime);
        const timeSlotStartMinutes = TimeHelper.timeToMinutes(timeSlotStart);
        const offsetMinutes = slotStartMinutes - timeSlotStartMinutes;
        return (offsetMinutes / 30) * CELL_HEIGHT;
    };

    // Find all slots that should be displayed in a given time cell
    const findSlotsForTimeCell = (
        service: ScheduleRowData,
        timeSlot: string
    ): ScheduleRowCellData[] => {
        return (
            service.rowCells?.filter((cell: ScheduleRowCellData) => {
                const cellStartMinutes = TimeHelper.timeToMinutes(
                    cell.startTime
                );
                const timeSlotMinutes = TimeHelper.timeToMinutes(timeSlot);
                const timeSlotEndMinutes = timeSlotMinutes + 30;

                // Cell should be displayed if it starts within this 30-minute window
                return (
                    cellStartMinutes >= timeSlotMinutes &&
                    cellStartMinutes < timeSlotEndMinutes
                );
            }) || []
        );
    };

    // Check if a time slot is covered by any existing booking
    const isTimeSlotCovered = (
        service: ScheduleRowData,
        timeSlot: string
    ): boolean => {
        const timeSlotMinutes = TimeHelper.timeToMinutes(timeSlot);

        return (
            service.rowCells?.some((cell: ScheduleRowCellData) => {
                const cellStartMinutes = TimeHelper.timeToMinutes(
                    cell.startTime
                );
                const cellEndMinutes = TimeHelper.timeToMinutes(cell.endTime);

                return (
                    timeSlotMinutes >= cellStartMinutes &&
                    timeSlotMinutes < cellEndMinutes
                );
            }) || false
        );
    };

    const getPopoverConfig = (
        service: ScheduleRowData,
        slot: ScheduleRowCellData | undefined,
        time: string
    ) => {
        if (slot?.customPopover) {
            return slot.customPopover;
        }
        return !slot && !isTimeSlotCovered(service, time) && emptySlotPopover
            ? emptySlotPopover
            : undefined;
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderHeader = () => {
        return (
            <ServiceContainer $columnCount={rowData.length}>
                {rowData.map((service, idx) => (
                    <ServiceColumn key={idx}>
                        {isMobile && (
                            <ArrowContainer>
                                {showPrevArrow && onPrevService && (
                                    <ArrowButton
                                        styleType="light"
                                        sizeType="small"
                                        onClick={onPrevService}
                                    >
                                        <ChevronLeftIcon />
                                    </ArrowButton>
                                )}
                            </ArrowContainer>
                        )}
                        <StyleDiv>
                            <Title>{service.name}</Title>
                            <Description>
                                <span>
                                    {
                                        service.rowCells.filter(
                                            (cell: ScheduleRowCellData) =>
                                                cell.status === "available"
                                        ).length
                                    }
                                </span>{" "}
                                available
                            </Description>
                        </StyleDiv>
                        {isMobile && showNextArrow && onNextService && (
                            <ArrowButton
                                styleType="light"
                                sizeType="small"
                                onClick={onNextService}
                            >
                                <ChevronRightIcon />
                            </ArrowButton>
                        )}
                    </ServiceColumn>
                ))}
            </ServiceContainer>
        );
    };

    const renderSlotContent = (
        slot: ScheduleRowCellData,
        timeSlotStart: string
    ) => {
        const duration = TimeHelper.calculateDuration(
            slot.startTime,
            slot.endTime
        );
        const offsetTop = calculateSlotOffset(slot.startTime, timeSlotStart);
        return (
            <SlotContent
                $status={slot.status}
                $duration={duration}
                $offsetTop={offsetTop}
                onClick={(e) => slot.onClick && slot.onClick(slot, e)}
            >
                <SlotTime>
                    {TimeHelper.parseInput(slot.startTime, "12hr")}
                    {"\u2013"} {TimeHelper.parseInput(slot.endTime, "12hr")}
                </SlotTime>
                <SlotAvailability>
                    {slot.status === "blocked"
                        ? "Unavailable"
                        : `${slot.booked} / ${slot.capacity}`}
                </SlotAvailability>
            </SlotContent>
        );
    };

    const renderSlotCell = (service: ScheduleRowData, time: string) => {
        const slots = findSlotsForTimeCell(service, time);
        if (slots.length > 0) {
            return (
                <SlotCell key={time} $startTime={time}>
                    {slots.map((slot, index) => {
                        const popoverConfig = getPopoverConfig(
                            service,
                            slot,
                            time
                        );
                        return (
                            <WithOptionalPopover
                                key={`${slot.id}-${index}`}
                                containerRef={containerRef}
                                customPopover={popoverConfig}
                            >
                                {renderSlotContent(slot, time)}
                            </WithOptionalPopover>
                        );
                    })}
                </SlotCell>
            );
        } else {
            return (
                <SlotCell key={time} $startTime={time}>
                    <WithOptionalPopover
                        containerRef={containerRef}
                        customPopover={getPopoverConfig(
                            service,
                            undefined,
                            time
                        )}
                    >
                        <EmptySlot />
                    </WithOptionalPopover>
                </SlotCell>
            );
        }
    };

    const renderTimeSlotGrid = () => {
        return (
            <SlotGrid $columnCount={rowData.length}>
                {timelineOffset !== null && <Timeline $top={timelineOffset} />}
                {rowData.map((service) => (
                    <SlotColumn key={service.id} data-testid="schedule-column">
                        {timeSlots.map((time) => renderSlotCell(service, time))}
                    </SlotColumn>
                ))}
            </SlotGrid>
        );
    };

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
                        $isMobile={isMobile}
                    >
                        <BlankCell />
                        {renderHeader()}
                    </HeaderContainer>

                    <BodyContainer ref={bodyRef} onScroll={handleBodyScroll}>
                        {/* Time labels */}
                        <TimeIndicator
                            minTime={minTime}
                            maxTime={maxTime}
                            format="24hr"
                            timelineOffset={timelineOffset}
                        />
                        {/* Time slot grid */}
                        {renderTimeSlotGrid()}
                    </BodyContainer>
                </>
            )}
        </ScheduleContainer>
    );
};
