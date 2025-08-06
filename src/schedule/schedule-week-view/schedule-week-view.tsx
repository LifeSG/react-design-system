import React, { useMemo, useRef } from "react";
import dayjs from "dayjs";
import { ScheduleWeekViewProps } from "./types";
import { TimeHelper } from "../../util/time-helper";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { ScheduleEntityProps, ScheduleSlotProps } from "../types";
import { useTimelineOffset, useInitialScroll } from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import { CELL_HEIGHT } from "../const";
import {
    ScheduleContainer,
    SlotCell,
    Timeline,
    EmptySlot,
} from "../schedule-day-view/schedule-day-view.styles";
import {
    BlankCell,
    BodyContainer,
    Description,
    HeaderContainer,
    LoadingContainer,
    ServiceContainer,
    ServiceHeader,
    SlotColumn,
    SlotGrid,
    Title,
    SlotColumnOverlay,
    SlotContentWrapper,
    WeekSlotContent,
    SlotServiceName,
    SlotTime,
    HiddenColumnsButton,
} from "./schedule-week-view.styles";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";

const MAX_VISIBLE_SLOTS = 3;

// Extended slot type with service information
interface SlotWithService extends ScheduleSlotProps {
    serviceName: string;
}

// Slot with positioning information
interface PositionedSlot {
    slot: SlotWithService;
    column: number;
    offsetTop: number;
    height: number;
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Convert minutes to time string (HH:MM format)
const minutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}`;
};

// Get all slots that START in a specific time cell
const getSlotsStartingInTimeCell = (
    serviceData: ScheduleEntityProps[],
    targetDate: string,
    cellStartTime: string,
    cellEndTime: string
): SlotWithService[] => {
    const allSlots: SlotWithService[] = [];
    const cellStartMinutes = TimeHelper.timeToMinutes(cellStartTime);
    const cellEndMinutes = TimeHelper.timeToMinutes(cellEndTime);

    serviceData.forEach((service) => {
        if (service.slots) {
            service.slots.forEach((slot) => {
                if (slot.date === targetDate) {
                    const slotStartMinutes = TimeHelper.timeToMinutes(
                        slot.startTime
                    );

                    // Only include slot if it STARTS in this time cell
                    if (
                        slotStartMinutes >= cellStartMinutes &&
                        slotStartMinutes < cellEndMinutes
                    ) {
                        allSlots.push({
                            ...slot,
                            serviceName: service.name,
                        });
                    }
                }
            });
        }
    });

    return allSlots;
};

// Get all slots that OVERLAP with a specific time cell (for layout calculation)
const getSlotsOverlappingTimeCell = (
    serviceData: ScheduleEntityProps[],
    targetDate: string,
    cellStartTime: string,
    cellEndTime: string
): SlotWithService[] => {
    const allSlots: SlotWithService[] = [];
    const cellStartMinutes = TimeHelper.timeToMinutes(cellStartTime);
    const cellEndMinutes = TimeHelper.timeToMinutes(cellEndTime);

    serviceData.forEach((service) => {
        if (service.slots) {
            service.slots.forEach((slot) => {
                if (slot.date === targetDate) {
                    const slotStartMinutes = TimeHelper.timeToMinutes(
                        slot.startTime
                    );
                    const slotEndMinutes = TimeHelper.timeToMinutes(
                        slot.endTime
                    );

                    // Include slot if it overlaps with this time cell
                    if (
                        slotStartMinutes < cellEndMinutes &&
                        slotEndMinutes > cellStartMinutes
                    ) {
                        allSlots.push({
                            ...slot,
                            serviceName: service.name,
                        });
                    }
                }
            });
        }
    });

    return allSlots;
};

// Group slots by service and calculate positioning within each service column
const calculateSlotPositionsInCell = (
    slots: SlotWithService[],
    cellStartTime: string,
    cellEndTime: string,
    minTime: string
): {
    serviceColumns: Map<string, PositionedSlot[]>;
    hasOverflow: boolean;
    totalServices: number;
} => {
    const cellStartMinutes = TimeHelper.timeToMinutes(cellStartTime);
    const minTimeMinutes = TimeHelper.timeToMinutes(minTime);

    // Group slots by service name (slots are already filtered to only those starting in this cell)
    const serviceGroups = new Map<string, SlotWithService[]>();

    slots.forEach((slot) => {
        if (!serviceGroups.has(slot.serviceName)) {
            serviceGroups.set(slot.serviceName, []);
        }
        serviceGroups.get(slot.serviceName)!.push(slot);
    });

    // Convert each service group to positioned slots
    const serviceColumns = new Map<string, PositionedSlot[]>();

    serviceGroups.forEach((serviceSlots, serviceName) => {
        // Sort slots within this service by start time
        const sortedSlots = serviceSlots.sort((a, b) => {
            return (
                TimeHelper.timeToMinutes(a.startTime) -
                TimeHelper.timeToMinutes(b.startTime)
            );
        });

        const positionedSlots: PositionedSlot[] = sortedSlots.map((slot) => {
            const slotStartMinutes = TimeHelper.timeToMinutes(slot.startTime);
            const slotEndMinutes = TimeHelper.timeToMinutes(slot.endTime);

            // Calculate position relative to the current time cell (since slot starts in this cell)
            const offsetTop =
                ((slotStartMinutes - cellStartMinutes) / 30) * CELL_HEIGHT;

            // Calculate full height based on actual slot duration
            const duration = slotEndMinutes - slotStartMinutes;
            const height = Math.max((duration / 30) * CELL_HEIGHT - 1, 20);

            return {
                slot,
                column: 0, // Will be set later when we determine display order
                offsetTop,
                height,
            };
        });

        serviceColumns.set(serviceName, positionedSlots);
    });

    const totalServices = serviceGroups.size;
    const hasOverflow = totalServices > 3;

    return { serviceColumns, hasOverflow, totalServices };
};

export const ScheduleWeekView = ({
    date,
    serviceData,
    loading,
    minTime,
    maxTime,
    initialScrollTime,
    emptySlotPopover,
    containerRef,
}: ScheduleWeekViewProps) => {
    const timelineOffset = useTimelineOffset(minTime, maxTime);
    const bodyRef = useInitialScroll(loading, minTime, initialScrollTime);
    const headerRef = useRef<HTMLDivElement>(null);
    const today = dayjs().format("YYYY-MM-DD");

    const weekDays = useMemo(() => {
        const startOfWeek = dayjs(date).startOf("week");
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [date]);

    const timeSlots = TimeHelper.generateTimings(30, "24hr", minTime, maxTime);

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
    // RENDER FUNCTIONS
    // =============================================================================

    // Render header with day names and dates
    const renderHeader = () => (
        <HeaderContainer ref={headerRef} onScroll={handleHeaderScroll}>
            <BlankCell />
            <ServiceContainer>
                {weekDays.map((day) => (
                    <ServiceHeader key={day.format("YYYY-MM-DD")}>
                        <Title>{day.format("D")}</Title>
                        <Description>{day.format("ddd")}</Description>
                    </ServiceHeader>
                ))}
            </ServiceContainer>
        </HeaderContainer>
    );

    // Custom styling for slot content
    const renderSlotContent = (positionedSlot: PositionedSlot) => {
        const { slot, offsetTop, height } = positionedSlot;
        const duration = TimeHelper.calculateDuration(
            slot.startTime,
            slot.endTime
        );

        return (
            <WeekSlotContent
                status={slot.status}
                duration={duration}
                $offsetTop={offsetTop}
                $height={height}
                onClick={(e) => slot.onClick && slot.onClick(slot, e)}
                title={`${slot.serviceName}\n${slot.startTime} - ${slot.endTime}`}
            >
                <SlotServiceName>{slot.serviceName}</SlotServiceName>
                <SlotTime>
                    {TimeHelper.parseInput(slot.startTime, "12hr")}
                </SlotTime>
            </WeekSlotContent>
        );
    };

    // Render the main slot grid
    const renderSlotGrid = () => (
        <SlotGrid>
            {timelineOffset !== null && <Timeline $top={timelineOffset} />}
            {weekDays.map((day) => {
                const dayDate = day.format("YYYY-MM-DD");

                return (
                    <SlotColumn key={dayDate}>
                        {/* Render time cells */}
                        {timeSlots.map((time) => {
                            // Get all slots in this specific time cell (current 30-min slot)
                            const timeMinutes = TimeHelper.timeToMinutes(time);
                            const nextTime = minutesToTime(timeMinutes + 30);

                            // Get slots that start in this cell (these will be rendered)
                            const slotsStartingInCell =
                                getSlotsStartingInTimeCell(
                                    serviceData,
                                    dayDate,
                                    time,
                                    nextTime
                                );

                            // Get all services that overlap with this specific time cell for layout calculation
                            const overlappingSlots =
                                getSlotsOverlappingTimeCell(
                                    serviceData,
                                    dayDate,
                                    time,
                                    nextTime
                                );

                            // Count unique services in this specific cell
                            const servicesInCell = new Set(
                                overlappingSlots.map((slot) => slot.serviceName)
                            );

                            // Calculate layout based on services actually present in THIS cell
                            const cellServiceLayout = {
                                allServices: Array.from(servicesInCell),
                                visibleServices: Array.from(
                                    servicesInCell
                                ).slice(0, 3),
                                totalServices: servicesInCell.size,
                                hasOverflow: servicesInCell.size > 3,
                                totalColumns:
                                    Math.min(servicesInCell.size, 3) +
                                    (servicesInCell.size > 3 ? 1 : 0),
                            };

                            // Calculate the layout for slots starting in this cell
                            const { serviceColumns: renderingServiceColumns } =
                                calculateSlotPositionsInCell(
                                    slotsStartingInCell,
                                    time,
                                    nextTime,
                                    minTime
                                );

                            return (
                                <SlotCell key={time} $startTime={time}>
                                    {/* Render service columns using cell-specific layout */}
                                    {cellServiceLayout.visibleServices.map(
                                        (serviceName, serviceIndex) => {
                                            // Get slots to render for this service (only those starting in this cell)
                                            const serviceSlots =
                                                renderingServiceColumns.get(
                                                    serviceName
                                                ) || [];

                                            return (
                                                <SlotColumnOverlay
                                                    key={`service-${serviceName}-${serviceIndex}`}
                                                    $columnIndex={serviceIndex}
                                                    $totalVisibleColumns={
                                                        cellServiceLayout.totalColumns
                                                    }
                                                >
                                                    {serviceSlots.map(
                                                        (
                                                            positionedSlot,
                                                            slotIndex
                                                        ) => {
                                                            const popoverConfig =
                                                                positionedSlot
                                                                    .slot
                                                                    .customPopover;
                                                            return (
                                                                <WithOptionalPopover
                                                                    key={`${positionedSlot.slot.id}-${slotIndex}`}
                                                                    containerRef={
                                                                        containerRef as React.RefObject<HTMLDivElement>
                                                                    }
                                                                    customPopover={
                                                                        popoverConfig
                                                                    }
                                                                >
                                                                    <SlotContentWrapper>
                                                                        {renderSlotContent(
                                                                            positionedSlot
                                                                        )}
                                                                    </SlotContentWrapper>
                                                                </WithOptionalPopover>
                                                            );
                                                        }
                                                    )}
                                                </SlotColumnOverlay>
                                            );
                                        }
                                    )}

                                    {/* Show +N button only if this specific cell has overflow */}
                                    {cellServiceLayout.hasOverflow && (
                                        <SlotColumnOverlay
                                            key="overflow-button"
                                            $columnIndex={3}
                                            $totalVisibleColumns={
                                                cellServiceLayout.totalColumns
                                            }
                                        >
                                            <HiddenColumnsButton
                                                $visibleColumnsCount={3}
                                                onClick={() => {
                                                    const hiddenServices =
                                                        cellServiceLayout.allServices.slice(
                                                            3
                                                        );
                                                    console.log(
                                                        "Show more services:",
                                                        hiddenServices
                                                    );
                                                }}
                                                title={`+${
                                                    cellServiceLayout.totalServices -
                                                    3
                                                } more services`}
                                            >
                                                +
                                                {cellServiceLayout.totalServices -
                                                    3}
                                            </HiddenColumnsButton>
                                        </SlotColumnOverlay>
                                    )}
                                </SlotCell>
                            );
                        })}
                    </SlotColumn>
                );
            })}
        </SlotGrid>
    );

    return (
        <ScheduleContainer>
            {loading ? (
                <LoadingContainer>
                    <ThemedLoadingSpinner />
                </LoadingContainer>
            ) : (
                <>
                    {renderHeader()}
                    <BodyContainer ref={bodyRef} onScroll={handleBodyScroll}>
                        <TimeIndicator
                            minTime={minTime}
                            maxTime={maxTime}
                            format="24hr"
                            timelineOffset={timelineOffset}
                            isWeekView={true}
                        />
                        {renderSlotGrid()}
                    </BodyContainer>
                </>
            )}
        </ScheduleContainer>
    );
};
