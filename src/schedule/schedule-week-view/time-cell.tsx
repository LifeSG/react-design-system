import React, { RefObject } from "react";
import { ScheduleEntityProps } from "../types";
import { SlotLayoutMap, SlotWithService } from "./types";
import { calculateSlotOffset, minutesToTime } from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import {
    SlotCell,
    SlotColumnOverlay,
    HiddenColumnsButton,
} from "./schedule-week-view.styles";
import { SlotContentComponent } from "./slot-content";
import {
    getSlotsStartingInTimeCell,
    getSlotsInTimeCell,
    getMinimumWidthForCell,
    calculateCellServiceLayout,
} from "./week-view-utils";
import { TimeHelper } from "../../util/time-helper";

interface TimeCellProps {
    dayDate: string;
    time: string;
    serviceData: ScheduleEntityProps[];
    slotLayoutMap: SlotLayoutMap;
    containerRef: RefObject<HTMLDivElement>;
    blockedMessage?: string;
    onClickHiddenSlots?: (hiddenServices: string[]) => void;
}

export const TimeCell: React.FC<TimeCellProps> = ({
    dayDate,
    time,
    serviceData,
    slotLayoutMap,
    containerRef,
    blockedMessage,
    onClickHiddenSlots,
}) => {
    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const timeMinutes = TimeHelper.timeToMinutes(time);
    const nextTime = minutesToTime(timeMinutes + 30);

    const slotsStartingInCell = getSlotsStartingInTimeCell(
        serviceData,
        dayDate,
        time,
        nextTime
    );

    const slotsInCell = getSlotsInTimeCell(
        serviceData,
        dayDate,
        time,
        nextTime
    );

    const minimumWidthForCell = getMinimumWidthForCell(
        slotsInCell,
        slotLayoutMap
    );

    // =============================================================================
    // SLOT FILTERING
    // =============================================================================
    // Filter slots based on visibility from slotLayoutMap
    const visibleOverlappingSlots = slotsInCell.filter((slot) => {
        const slotKey = slot.id;
        const slotLayout = slotLayoutMap[slotKey];
        return slotLayout?.visible || false;
    });

    const hiddenOverlappingSlots = slotsInCell.filter((slot) => {
        const slotKey = slot.id;
        const slotLayout = slotLayoutMap[slotKey];
        return !slotLayout?.visible;
    });

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    // Calculate 15-minute intervals within this 30-minute cell
    const calculateHiddenSlotsFor15MinIntervals = () => {
        const timeMinutes = TimeHelper.timeToMinutes(time);
        const firstInterval = {
            start: minutesToTime(timeMinutes),
            end: minutesToTime(timeMinutes + 15),
        };
        const secondInterval = {
            start: minutesToTime(timeMinutes + 15),
            end: minutesToTime(timeMinutes + 30),
        };

        // Get hidden slots for first 15-minute interval
        const hiddenSlotsFirstInterval = hiddenOverlappingSlots.filter(
            (slot) => {
                const slotStartMinutes = TimeHelper.timeToMinutes(
                    slot.startTime
                );
                const slotEndMinutes = TimeHelper.timeToMinutes(slot.endTime);
                // Slot overlaps with first 15-minute interval
                return (
                    slotStartMinutes < timeMinutes + 15 &&
                    slotEndMinutes > timeMinutes
                );
            }
        );

        // Get hidden slots for second 15-minute interval 
        const hiddenSlotsSecondInterval = hiddenOverlappingSlots.filter(
            (slot) => {
                const slotStartMinutes = TimeHelper.timeToMinutes(
                    slot.startTime
                );
                const slotEndMinutes = TimeHelper.timeToMinutes(slot.endTime);
                // Slot overlaps with second 15-minute interval
                return (
                    slotStartMinutes < timeMinutes + 30 &&
                    slotEndMinutes > timeMinutes + 15
                );
            }
        );

        const firstIntervalServices = Array.from(
            new Set(hiddenSlotsFirstInterval.map((slot) => slot.serviceName))
        );
        const secondIntervalServices = Array.from(
            new Set(hiddenSlotsSecondInterval.map((slot) => slot.serviceName))
        );

        // Check if the services are different between intervals
        const servicesAreDifferent =
            firstIntervalServices.length !== secondIntervalServices.length ||
            !firstIntervalServices.every((service) =>
                secondIntervalServices.includes(service)
            );

        // If services are the same for both intervals, show only one button for the whole cell
        if (!servicesAreDifferent && firstIntervalServices.length > 0) {
            return [
                {
                    interval: {
                        start: firstInterval.start,
                        end: secondInterval.end,
                    },
                    hiddenSlots: hiddenOverlappingSlots,
                    hiddenServices: firstIntervalServices,
                },
            ];
        }

        // Otherwise, show separate buttons for each interval that has hidden services
        return [
            {
                interval: firstInterval,
                hiddenSlots: hiddenSlotsFirstInterval,
                hiddenServices: firstIntervalServices,
            },
            {
                interval: secondInterval,
                hiddenSlots: hiddenSlotsSecondInterval,
                hiddenServices: secondIntervalServices,
            },
        ].filter((intervalData) => intervalData.hiddenServices.length > 0);
    };

    const hiddenIntervals = calculateHiddenSlotsFor15MinIntervals();

    const cellServiceLayout = calculateCellServiceLayout(
        visibleOverlappingSlots,
        hiddenOverlappingSlots
    );

    const actualWidthPercentage = minimumWidthForCell;

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSlotWithPopover = (
        slot: SlotWithService,
        slotIndex: number,
        serviceIndex: number
    ) => {
        const offsetTop = calculateSlotOffset(slot.startTime, time);
        const positionedSlot = {
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
                <SlotContentComponent
                    positionedSlot={positionedSlot}
                    blockedMessage={blockedMessage}
                />
            </WithOptionalPopover>
        );
    };

    const renderHiddenSlots = () => {
        if (hiddenIntervals.length === 0) return null;

        return (
            <SlotColumnOverlay
                key="hidden-slots-column"
                $columnIndex={3}
                $totalVisibleColumns={cellServiceLayout.totalColumns}
                $actualWidthPercentage={actualWidthPercentage}
                $leftPosition={3 * actualWidthPercentage}
            >
                {hiddenIntervals.map((intervalData, index) => (
                    <HiddenColumnsButton
                        key={`hidden-btn-${intervalData.interval.start}-${intervalData.interval.end}`}
                        $heightPercentage={100 / hiddenIntervals.length}
                        $isMultiple={hiddenIntervals.length > 1}
                        onClick={() => {
                            onClickHiddenSlots &&
                                onClickHiddenSlots(intervalData.hiddenServices);
                        }}
                        title={`Hidden services ${
                            intervalData.interval.start
                        }-${
                            intervalData.interval.end
                        }: ${intervalData.hiddenServices.join(", ")}`}
                    >
                        +{intervalData.hiddenServices.length}
                    </HiddenColumnsButton>
                ))}
            </SlotColumnOverlay>
        );
    };

    return (
        <SlotCell key={time} $startTime={time}>
            {cellServiceLayout.visibleServices.map(
                (serviceName, serviceIndex) => {
                    const serviceSlots = slotsStartingInCell.filter((slot) => {
                        const slotKey = slot.id;
                        const slotLayout = slotLayoutMap[slotKey];
                        return (
                            slot.serviceName === serviceName &&
                            slotLayout?.visible
                        );
                    });

                    const leftPosition = serviceIndex * actualWidthPercentage;

                    return (
                        <SlotColumnOverlay
                            key={serviceName}
                            $columnIndex={serviceIndex}
                            $totalVisibleColumns={
                                cellServiceLayout.totalColumns
                            }
                            $actualWidthPercentage={actualWidthPercentage}
                            $leftPosition={leftPosition}
                        >
                            {serviceSlots.map((slot, slotIndex) =>
                                renderSlotWithPopover(
                                    slot,
                                    slotIndex,
                                    serviceIndex
                                )
                            )}
                        </SlotColumnOverlay>
                    );
                }
            )}
            {hiddenIntervals.length > 0 && renderHiddenSlots()}
        </SlotCell>
    );
};
