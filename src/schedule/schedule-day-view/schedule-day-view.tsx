import { useMemo, useRef } from "react";
import { ScheduleDayViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { DateHelper } from "../../util/date-helper";
import {
    calculateSlotOffset,
    findSlotsStartingInTimeRange,
    isTimeCellCovered,
    minutesToTime,
    useInitialScroll,
    useTimelineOffset,
} from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import { ChevronLeftIcon, ChevronRightIcon } from "@lifesg/react-icons";
import {
    ArrowButton,
    ArrowContainer,
    BlankCell,
    BodyContainer,
    Description,
    EmptySlot,
    HeaderContainer,
    LoadingContainer,
    ScheduleContainer,
    ServiceColumn,
    ServiceContainer,
    SlotAvailability,
    SlotCell,
    SlotColumn,
    SlotContent,
    SlotGrid,
    SlotTime,
    StyleDiv,
    Timeline,
    Title,
} from "./schedule-day-view.styles";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { ScheduleEntityProps, ScheduleSlotProps } from "../types";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";

export const ScheduleDayView = ({
    serviceData,
    isMobile,
    onNextService,
    onPrevService,
    onEmptySlotClick,
    showPrevArrow,
    showNextArrow,
    minTime,
    maxTime,
    initialScrollTime,
    containerRef,
    loading,
    emptySlotPopover,
    blockedMessage = "Unavailable",
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
    // Handle empty slot click with slot details
    const handleEmptySlotClick = (time: string, serviceName: string) => {
        if (onEmptySlotClick) {
            const endTimeString = DateHelper.addMinutesToTime(time, 30);
            onEmptySlotClick({
                startTime: time,
                endTime: endTimeString,
                name: serviceName,
            });
        }
    };

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
    // Find all slots that should be displayed in a given time cell
    const findSlotsForTimeCell = (
        service: ScheduleEntityProps,
        timeSlot: string
    ): ScheduleSlotProps[] => {
        if (!service.slots) return [];
        const timeSlotMinutes = TimeHelper.timeToMinutes(timeSlot);
        const nextTime = minutesToTime(timeSlotMinutes + 30);

        const a = findSlotsStartingInTimeRange(
            service.slots,
            timeSlot,
            nextTime
        );

        return a;
    };

    // Check if a time slot is covered by any existing booking
    const isServiceTimeSlotCovered = (
        service: ScheduleEntityProps,
        timeSlot: string
    ): boolean => {
        return service.slots
            ? isTimeCellCovered(service.slots, timeSlot)
            : false;
    };

    const getPopoverConfig = (
        service: ScheduleEntityProps,
        slot: ScheduleSlotProps | undefined,
        time: string
    ) => {
        if (slot?.customPopover) {
            return slot.customPopover;
        }
        return !slot &&
            !isServiceTimeSlotCovered(service, time) &&
            emptySlotPopover
            ? emptySlotPopover
            : undefined;
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderHeader = () => {
        return (
            <ServiceContainer $columnCount={serviceData.length}>
                {serviceData.map((service) => (
                    <ServiceColumn key={service.id}>
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
                                        service.slots.filter(
                                            (cell) =>
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
        slot: ScheduleSlotProps,
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
                {duration >= 15 && (
                    <>
                        <SlotTime>
                            {TimeHelper.parseInput(slot.startTime, "12hr")}
                            {"\u2013"}{" "}
                            {TimeHelper.parseInput(slot.endTime, "12hr")}
                        </SlotTime>
                        <SlotAvailability>
                            {slot.status === "blocked"
                                ? blockedMessage
                                : `${slot.booked} / ${slot.capacity}`}
                        </SlotAvailability>
                    </>
                )}
            </SlotContent>
        );
    };

    const renderSlotCell = (service: ScheduleEntityProps, time: string) => {
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
                <SlotCell
                    key={time}
                    $startTime={time}
                    onClick={() => handleEmptySlotClick(time, service.name)}
                >
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
            <SlotGrid $columnCount={serviceData.length}>
                {timelineOffset !== null && <Timeline $top={timelineOffset} />}
                {serviceData.map((service) => (
                    <SlotColumn key={service.id}>
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
