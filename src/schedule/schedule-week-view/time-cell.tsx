import clsx from "clsx";
import type { RefObject } from "react";
import type React from "react";
import { useRef } from "react";

import { useApplyStyle } from "../../theme";
import { TimeHelper } from "../../util/time-helper";
import { calculateSlotOffset, minutesToTime } from "../shared";
import { ScheduleSlotContent } from "../shared/schedule-slot-content";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import type { ScheduleEntityProps } from "../types";
import * as slotContentStyles from "./slot-content.styles";
import * as styles from "./time-cell.styles";
import type { SlotLayoutMap, SlotWithService } from "./types";
import {
    calculateCellServiceLayout,
    getMinimumWidthForCell,
    getSlotsInTimeCell,
    getSlotsStartingInTimeCell,
} from "./week-view-utils";

interface TimeCellProps {
    dayDate: string;
    time: string;
    serviceData: ScheduleEntityProps[];
    slotLayoutMap: SlotLayoutMap;
    containerRef: RefObject<HTMLDivElement>;
    blockedMessage?: string;
    onClickHiddenSlots?: (hiddenServices: string[]) => void;
}

interface SlotOverlayProps {
    actualWidthPercentage: number;
    leftPosition: number;
    children: React.ReactNode;
}

const SlotOverlay = ({
    actualWidthPercentage,
    leftPosition,
    children,
}: SlotOverlayProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useApplyStyle(overlayRef, {
        [styles.tokens.slotColumnOverlay.leftPosition]: `${leftPosition}`,
        [styles.tokens.slotColumnOverlay
            .actualWidthPercentage]: `${actualWidthPercentage}`,
    });

    return (
        <div className={styles.slotColumnOverlay} ref={overlayRef}>
            {children}
        </div>
    );
};

interface HiddenColumnsButtonProps {
    heightPercentage: number;
    onClick: () => void;
    children: React.ReactNode;
}

const HiddenColumnsButton = ({
    heightPercentage,
    onClick,
    children,
}: HiddenColumnsButtonProps) => {
    const hiddenColumnsRef = useRef<HTMLButtonElement>(null);

    useApplyStyle(hiddenColumnsRef, {
        [styles.tokens.hiddenColumns.minHeight]: `${heightPercentage}%`,
        [styles.tokens.hiddenColumns.height]: `${heightPercentage}%`,
    });

    return (
        <button
            className={styles.hiddenColumns}
            ref={hiddenColumnsRef}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
};

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
        slotIndex: number
    ) => {
        const offsetTop = calculateSlotOffset(slot.startTime, time);

        return (
            <WithOptionalPopover
                key={`${slot.id || slotIndex}-${slotIndex}`}
                containerRef={containerRef}
                customPopover={slot.customPopover}
            >
                <ScheduleSlotContent
                    slot={slot}
                    offsetTop={offsetTop}
                    tokens={slotContentStyles.tokens.slotContentContainer}
                    classNames={{
                        container: slotContentStyles.slotContentContainer,
                        blocked: slotContentStyles.slotContentContainerBlocked,
                        available:
                            slotContentStyles.slotContentContainerAvailable,
                    }}
                    clickable={!!slot.onClick}
                >
                    {(duration) => (
                        <>
                            <span className={slotContentStyles.slotServiceName}>
                                {slot.serviceName}
                            </span>
                            {duration >= 30 && (
                                <span
                                    className={
                                        slotContentStyles.slotAvailability
                                    }
                                >
                                    {slot.status === "blocked"
                                        ? blockedMessage
                                        : `${slot.booked} / ${slot.capacity}`}
                                </span>
                            )}
                        </>
                    )}
                </ScheduleSlotContent>
            </WithOptionalPopover>
        );
    };

    const renderHiddenSlots = () => {
        if (hiddenIntervals.length === 0) return null;

        return (
            <SlotOverlay
                key="hidden-slots-column"
                actualWidthPercentage={actualWidthPercentage}
                leftPosition={3 * actualWidthPercentage}
            >
                {hiddenIntervals.map((intervalData) => (
                    <HiddenColumnsButton
                        key={`hidden-btn-${intervalData.interval.start}-${intervalData.interval.end}`}
                        heightPercentage={100 / hiddenIntervals.length}
                        onClick={() => {
                            onClickHiddenSlots?.(intervalData.hiddenServices);
                        }}
                    >
                        +{intervalData.hiddenServices.length}
                    </HiddenColumnsButton>
                ))}
            </SlotOverlay>
        );
    };

    return (
        <div
            key={time}
            className={clsx(
                styles.slotCell,
                time.endsWith(":00") && styles.slotCellDashed
            )}
        >
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
                        <SlotOverlay
                            key={serviceName}
                            actualWidthPercentage={actualWidthPercentage}
                            leftPosition={leftPosition}
                        >
                            {serviceSlots.map((slot, slotIndex) =>
                                renderSlotWithPopover(slot, slotIndex)
                            )}
                        </SlotOverlay>
                    );
                }
            )}
            {hiddenIntervals.length > 0 && renderHiddenSlots()}
        </div>
    );
};
