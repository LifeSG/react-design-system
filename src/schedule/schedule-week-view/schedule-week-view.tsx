import React, { useMemo, useRef } from "react";
import dayjs from "dayjs";
import {
    ScheduleWeekViewProps,
    SlotWithService,
    SlotLayoutMap,
    PositionedSlot,
} from "./types";
import { TimeHelper } from "../../util/time-helper";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { ScheduleEntityProps } from "../types";
import {
    useTimelineOffset,
    useInitialScroll,
    minutesToTime,
    calculateSlotOffset,
    findSlotsStartingInTimeRange,
    findSlotsInTimeRange,
} from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import {
    ScheduleContainer,
    SlotCell,
    Timeline,
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
    SlotContent,
    SlotServiceName,
    SlotAvailability,
    HiddenColumnsButton,
} from "./schedule-week-view.styles";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";
const CELL_WIDTH = 190;
// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Get all slots that START in a specific time cell
const getSlotsStartingInTimeCell = (
    serviceData: ScheduleEntityProps[],
    targetDate: string,
    cellStartTime: string,
    cellEndTime: string
): SlotWithService[] => {
    const allSlots: SlotWithService[] = [];

    serviceData.forEach((service) => {
        if (service.slots) {
            const slotsInRange = findSlotsStartingInTimeRange(
                service.slots,
                cellStartTime,
                cellEndTime,
                targetDate
            );

            slotsInRange.forEach((slot) => {
                allSlots.push({
                    ...slot,
                    serviceName: service.name,
                });
            });
        }
    });

    return allSlots;
};

// Get all slots that OVERLAP with a specific time cell (for layout calculation)
//tìm tât cả slot chồng lên.
const getSlotsInTimeCell = (
    serviceData: ScheduleEntityProps[],
    targetDate: string,
    cellStartTime: string,
    cellEndTime: string
): SlotWithService[] => {
    const allSlots: SlotWithService[] = [];

    serviceData.forEach((service) => {
        if (service.slots) {
            const overlappingSlots = findSlotsInTimeRange(
                service.slots,
                cellStartTime,
                cellEndTime,
                targetDate
            );

            overlappingSlots.forEach((slot) => {
                allSlots.push({
                    ...slot,
                    serviceName: service.name,
                });
            });
        }
    });

    return allSlots;
};

// Calculate and update slot widths across all cells
const calculateSlotWidths = (
    serviceData: ScheduleEntityProps[],
    weekDays: dayjs.Dayjs[],
    timeSlots: string[]
): SlotLayoutMap => {
    const slotLayoutMap: SlotLayoutMap = {};
    weekDays.forEach((day) => {
        const dayDate = day.format("YYYY-MM-DD");
        timeSlots.forEach((time) => {
            const timeMinutes = TimeHelper.timeToMinutes(time);
            const nextTime = minutesToTime(timeMinutes + 30);
            const slotsInCell = getSlotsInTimeCell(
                serviceData,
                dayDate,
                time,
                nextTime
            );

            slotsInCell.forEach((slot) => {
                const slotKey = slot.id;
                if (!slotLayoutMap[slotKey]) {
                    slotLayoutMap[slotKey] = {
                        date: dayDate,
                        serviceName: slot.serviceName,
                        startTime: slot.startTime,
                        endTime: slot.endTime,
                        visible: true, // Initialize as visible, will be updated
                        width: 100, // Initialize with full width, will be updated
                    };
                }
            });

            const uniqueServices = Array.from(
                new Set(slotsInCell.map((slot) => slot.serviceName))
            );
            //Display at most 3 services, mark other slots as hidden
            const FirstThreeServices = uniqueServices.slice(0, 3);
            slotsInCell.forEach((slot) => {
                const slotKey = slot.id;
                const isVisible = FirstThreeServices.includes(slot.serviceName);
                if (!isVisible) {
                    slotLayoutMap[slotKey].visible = false; //mark as hidden
                }
            });

            // Calculate width based on visible services only
            const visibleSlots = slotsInCell.filter((slot) => {
                const slotKey = slot.id;
                return slotLayoutMap[slotKey].visible;
            });

            const visibleServices = new Set(
                visibleSlots.map((slot) => slot.serviceName)
            );
            const totalVisibleServices = visibleServices.size;
            const hasHiddenServices = slotsInCell.length > visibleSlots.length;
            const totalColumns = hasHiddenServices ? 4 : totalVisibleServices;
            const widthPercentage = totalColumns > 0 ? 100 / totalColumns : 100;

            // Update width for each slot in this cell (take minimum across all cells)
            slotsInCell.forEach((slot) => {
                const slotKey = slot.id;
                slotLayoutMap[slotKey].width = Math.min(
                    slotLayoutMap[slotKey].width,
                    widthPercentage
                );
            });
        });
    });

    return slotLayoutMap;
};

// Get minimum width for all slots overlapping a specific cell
const getMinimumWidthForCell = (
    slotsInCell: SlotWithService[],
    slotLayoutMap: SlotLayoutMap
): number => {
    let minWidth = Number.MAX_SAFE_INTEGER; // Start with maximum width

    slotsInCell.forEach((slot) => {
        const slotKey = slot.id;
        const slotLayout = slotLayoutMap[slotKey];
        minWidth = Math.min(minWidth, slotLayout.width);
    });

    return minWidth;
};

export const ScheduleWeekView = ({
    date,
    serviceData,
    loading,
    minTime,
    maxTime,
    initialScrollTime,
    containerRef,
}: ScheduleWeekViewProps) => {
    const timelineOffset = useTimelineOffset(minTime, maxTime);
    const bodyRef = useInitialScroll(loading, minTime, initialScrollTime);
    const weekDays = useMemo(() => {
        const startOfWeek = dayjs(date).startOf("week");
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [date]);

    const timeSlots = TimeHelper.generateTimings(30, "24hr", minTime, maxTime);

    // Calculate slot widths across all cells
    const slotLayoutMap = useMemo(() => {
        const result = calculateSlotWidths(serviceData, weekDays, timeSlots);
        return result;
    }, [serviceData, weekDays, timeSlots]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    // Render header with day names and dates
    const renderHeader = () => (
        <HeaderContainer>
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

    const renderSlotContent = (
        positionedSlot: PositionedSlot,
        minimumWidth: number
    ) => {
        const { slot, offsetTop } = positionedSlot;
        const duration = TimeHelper.calculateDuration(
            slot.startTime,
            slot.endTime
        );

        return (
            <SlotContent
                $status={slot.status}
                $duration={duration}
                $offsetTop={offsetTop}
                onClick={(e) => slot.onClick && slot.onClick(slot, e)}
                $width={(CELL_WIDTH * minimumWidth) / 100}
            >
                <SlotServiceName>{slot.serviceName}</SlotServiceName>
                {duration >= 30 && (
                    <SlotAvailability>
                        {slot.status === "blocked"
                            ? "Unavailable"
                            : `${slot.booked} / ${slot.capacity}`}
                    </SlotAvailability>
                )}
            </SlotContent>
        );
    };

    // Render slot with popover
    const renderSlotWithPopover = (
        slot: SlotWithService,
        slotIndex: number,
        serviceIndex: number,
        time: string,
        minimumWidth: number
    ) => {
        const offsetTop = calculateSlotOffset(slot.startTime, time);
        const positionedSlot: PositionedSlot = {
            slot,
            column: serviceIndex,
            offsetTop,
        };

        return (
            <WithOptionalPopover
                key={`${slot.id || slotIndex}-${slotIndex}`}
                containerRef={containerRef}
                customPopover={slot.customPopover}
            >
                {renderSlotContent(positionedSlot, minimumWidth)}
            </WithOptionalPopover>
        );
    };

    // Render overflow button
    const renderOverflowButton = (
        cellServiceLayout: any,
        actualWidthPercentage: number
    ) => (
        <SlotColumnOverlay
            key="overflow-button"
            $columnIndex={3}
            $totalVisibleColumns={cellServiceLayout.totalColumns}
            $actualWidthPercentage={actualWidthPercentage}
            $leftPosition={3 * actualWidthPercentage}
        >
            <HiddenColumnsButton
                onClick={() => {
                    const hiddenServices = cellServiceLayout.hiddenServices;
                    console.log(
                        "Hidden services in this cell:",
                        hiddenServices
                    );
                    alert(`Hidden services: ${hiddenServices.join(", ")}`);
                }}
                title={`+${
                    cellServiceLayout.hiddenServices.length
                } more services: ${cellServiceLayout.hiddenServices.join(
                    ", "
                )}`}
            >
                +{cellServiceLayout.hiddenServices.length}
            </HiddenColumnsButton>
        </SlotColumnOverlay>
    );

    // Render single time cell
    const renderTimeCell = (dayDate: string, time: string) => {
        const timeMinutes = TimeHelper.timeToMinutes(time);
        const nextTime = minutesToTime(timeMinutes + 30);

        const slotsStartingInCell = getSlotsStartingInTimeCell(
            serviceData,
            dayDate,
            time,
            nextTime
        );
        const overlappingSlots = getSlotsInTimeCell(
            serviceData,
            dayDate,
            time,
            nextTime
        );
        const minimumWidthForCell = getMinimumWidthForCell(
            overlappingSlots,
            slotLayoutMap
        );

        // Filter slots based on visibility from slotLayoutMap
        const visibleOverlappingSlots = overlappingSlots.filter((slot) => {
            const slotKey = slot.id;
            const slotLayout = slotLayoutMap[slotKey];
            return slotLayout?.visible || false;
        });

        const hiddenOverlappingSlots = overlappingSlots.filter((slot) => {
            const slotKey = slot.id;
            const slotLayout = slotLayoutMap[slotKey];
            return !slotLayout?.visible;
        });

        // Get visible and hidden services
        const visibleServices = Array.from(
            new Set(visibleOverlappingSlots.map((slot) => slot.serviceName))
        );
        const hiddenServices = Array.from(
            new Set(hiddenOverlappingSlots.map((slot) => slot.serviceName))
        );

        const cellServiceLayout = {
            allServices: [...visibleServices, ...hiddenServices],
            visibleServices: visibleServices,
            hiddenServices: hiddenServices,
            totalServices: visibleServices.length + hiddenServices.length,
            hasOverflow: hiddenServices.length > 0,
            totalColumns:
                hiddenServices.length > 0 ? 4 : visibleServices.length, // Always 4 columns when there are hidden services
        };

        // Calculate actual width percentage for positioning
        const actualWidthPercentage = minimumWidthForCell;

        return (
            <SlotCell key={time} $startTime={time} data-testid="slotcell">
                {cellServiceLayout.visibleServices.map(
                    (serviceName, serviceIndex) => {
                        const serviceSlots = slotsStartingInCell.filter(
                            (slot) => {
                                const slotKey = slot.id;
                                const slotLayout = slotLayoutMap[slotKey];
                                return (
                                    slot.serviceName === serviceName &&
                                    slotLayout?.visible
                                );
                            }
                        );

                        // Calculate left position based on actual slot width
                        const leftPosition =
                            serviceIndex * actualWidthPercentage;

                        return (
                            <SlotColumnOverlay
                                key={`service-${serviceName}-${serviceIndex}`}
                                $columnIndex={serviceIndex}
                                $totalVisibleColumns={
                                    cellServiceLayout.totalColumns
                                }
                                $actualWidthPercentage={actualWidthPercentage}
                                $leftPosition={leftPosition}
                                data-testid={`service-${serviceName}-${serviceIndex}`}
                            >
                                {serviceSlots.map((slot, slotIndex) =>
                                    renderSlotWithPopover(
                                        slot,
                                        slotIndex,
                                        serviceIndex,
                                        time,
                                        minimumWidthForCell
                                    )
                                )}
                            </SlotColumnOverlay>
                        );
                    }
                )}
                {cellServiceLayout.hasOverflow &&
                    renderOverflowButton(
                        cellServiceLayout,
                        actualWidthPercentage
                    )}
            </SlotCell>
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
                        {timeSlots.map((time) => renderTimeCell(dayDate, time))}
                    </SlotColumn>
                );
            })}
        </SlotGrid>
    );

    // Render body container with time indicator and slot grid
    const renderBodyContainer = () => (
        <BodyContainer ref={bodyRef}>
            <TimeIndicator
                minTime={minTime}
                maxTime={maxTime}
                format="24hr"
                timelineOffset={timelineOffset}
                isWeekView={true}
            />
            {renderSlotGrid()}
        </BodyContainer>
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
                    {renderBodyContainer()}
                </>
            )}
        </ScheduleContainer>
    );
};
