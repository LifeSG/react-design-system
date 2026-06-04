import { ChevronLeftIcon, ChevronRightIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import { useMemo, useRef } from "react";

import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";
import { Button } from "../../button";
import { useApplyStyle } from "../../theme";
import { Typography } from "../../typography";
import { DateHelper } from "../../util/date-helper";
import { TimeHelper } from "../../util/time-helper";
import {
    calculateSlotOffset,
    findSlotsStartingInTimeRange,
    isTimeCellCovered,
    minutesToTime,
    ScheduleSlotContent,
    useInitialScroll,
    useTimelineOffset,
} from "../shared";
import { WithOptionalPopover } from "../shared/with-optional-popover";
import { TimeIndicator } from "../time-indicator/time-indicator";
import type { ScheduleEntityProps, ScheduleSlotProps } from "../types";
import * as styles from "./schedule-day-view.styles";
import type { ScheduleDayViewProps } from "./types";

interface SlotContentItemProps {
    slot: ScheduleSlotProps;
    timeSlotStart: string;
    blockedMessage: string;
}

const SlotContentItem = ({
    slot,
    timeSlotStart,
    blockedMessage,
}: SlotContentItemProps) => {
    const offsetTop = calculateSlotOffset(slot.startTime, timeSlotStart);

    return (
        <ScheduleSlotContent
            slot={slot}
            offsetTop={offsetTop}
            tokens={styles.tokens.slotContent}
            classNames={{
                container: styles.slotContent,
                blocked: styles.slotContentBlocked,
                available: styles.slotContentAvailable,
            }}
        >
            {(duration) =>
                duration >= 15 && (
                    <>
                        <span className={styles.slotTime}>
                            {TimeHelper.parseInput(slot.startTime, "12hr")}
                            {"\u2013"}{" "}
                            {TimeHelper.parseInput(slot.endTime, "12hr")}
                        </span>
                        <span className={styles.slotAvailability}>
                            {slot.status === "blocked"
                                ? blockedMessage
                                : `${slot.booked} / ${slot.capacity}`}
                        </span>
                    </>
                )
            }
        </ScheduleSlotContent>
    );
};

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
    const serviceContainerRef = useRef<HTMLDivElement>(null);
    const slotGridRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const timeSlots = useMemo(
        () => TimeHelper.generateTimings(30, "24hr", minTime, maxTime),
        [minTime, maxTime]
    );

    useApplyStyle(serviceContainerRef, {
        [styles.tokens.serviceContainer.columnCount]: `${serviceData.length}`,
    });

    useApplyStyle(slotGridRef, {
        [styles.tokens.slotGrid.columnCount]: `${serviceData.length}`,
    });

    useApplyStyle(timelineRef, {
        [styles.tokens.timeline.top]:
            timelineOffset === null ? null : `${timelineOffset}px`,
    });

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

        const slots = findSlotsStartingInTimeRange(
            service.slots,
            timeSlot,
            nextTime
        );

        return slots;
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
        if (!isServiceTimeSlotCovered(service, time) && emptySlotPopover) {
            const endTimeString = DateHelper.addMinutesToTime(time, 30);
            const emptySlotData = {
                startTime: time,
                endTime: endTimeString,
                name: service.name,
            };
            return emptySlotPopover(emptySlotData);
        }

        return undefined;
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderHeader = () => {
        return (
            <div ref={serviceContainerRef} className={styles.serviceContainer}>
                {serviceData.map((service) => (
                    <div key={service.id} className={styles.serviceColumn}>
                        {isMobile && (
                            <div className={styles.arrowContainer}>
                                {showPrevArrow && onPrevService && (
                                    <Button
                                        className={styles.arrowButton}
                                        styleType="light"
                                        sizeType="small"
                                        onClick={onPrevService}
                                        aria-label="Previous service"
                                        icon={<ChevronLeftIcon aria-hidden />}
                                    />
                                )}
                            </div>
                        )}
                        <div className={styles.serviceHeaderContainer}>
                            <Typography.BodyMD className={styles.title}>
                                {service.name}
                            </Typography.BodyMD>
                            <Typography.BodySM className={styles.description}>
                                <span>
                                    {
                                        service.slots.filter(
                                            (cell) =>
                                                cell.status === "available"
                                        ).length
                                    }
                                </span>{" "}
                                available
                            </Typography.BodySM>
                        </div>
                        {isMobile && showNextArrow && onNextService && (
                            <Button
                                className={styles.arrowButton}
                                styleType="light"
                                sizeType="small"
                                onClick={onNextService}
                                aria-label="Next service"
                                icon={<ChevronRightIcon aria-hidden />}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const renderSlotContent = (
        slot: ScheduleSlotProps,
        timeSlotStart: string
    ) => {
        return (
            <SlotContentItem
                slot={slot}
                timeSlotStart={timeSlotStart}
                blockedMessage={blockedMessage}
            />
        );
    };

    const getSlotCellClassName = (time: string) =>
        clsx(styles.slotCell, time.endsWith(":00") && styles.slotCellDashed);

    const renderFilledSlotCell = (
        service: ScheduleEntityProps,
        time: string,
        slots: ScheduleSlotProps[]
    ) => {
        return (
            <div key={time} className={getSlotCellClassName(time)}>
                {slots.map((slot, index) => (
                    <WithOptionalPopover
                        key={`${slot.id}-${index}`}
                        containerRef={containerRef}
                        customPopover={getPopoverConfig(service, slot, time)}
                    >
                        {renderSlotContent(slot, time)}
                    </WithOptionalPopover>
                ))}
            </div>
        );
    };

    const renderEmptySlotCell = (
        service: ScheduleEntityProps,
        time: string
    ) => {
        return (
            <div
                key={time}
                className={getSlotCellClassName(time)}
                onClick={() => handleEmptySlotClick(time, service.name)}
                data-testid={`empty-slot-${service.id}-${time}`}
            >
                <WithOptionalPopover
                    containerRef={containerRef}
                    customPopover={getPopoverConfig(service, undefined, time)}
                >
                    <div className={styles.emptySlot} />
                </WithOptionalPopover>
            </div>
        );
    };

    const renderSlotCell = (service: ScheduleEntityProps, time: string) => {
        const slots = findSlotsForTimeCell(service, time);

        return slots.length > 0
            ? renderFilledSlotCell(service, time, slots)
            : renderEmptySlotCell(service, time);
    };

    const renderTimeSlotGrid = () => {
        return (
            <div ref={slotGridRef} className={styles.slotGrid}>
                {timelineOffset !== null && (
                    <div ref={timelineRef} className={styles.timeline} />
                )}
                {serviceData.map((service) => (
                    <div key={service.id} className={styles.slotColumn}>
                        {timeSlots.map((time) => renderSlotCell(service, time))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.scheduleContainer}>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <ThemedLoadingSpinner data-testid="loading-spinner" />
                </div>
            ) : (
                <>
                    {/* Service Name Header Row */}
                    <div
                        ref={headerRef}
                        onScroll={handleHeaderScroll}
                        className={clsx(
                            styles.headerContainer,
                            isMobile && styles.headerContainerMobile
                        )}
                    >
                        <div className={styles.blankCell} />
                        {renderHeader()}
                    </div>

                    <div
                        className={styles.bodyContainer}
                        ref={bodyRef}
                        onScroll={handleBodyScroll}
                    >
                        {/* Time labels */}
                        <TimeIndicator
                            minTime={minTime}
                            maxTime={maxTime}
                            format="24hr"
                            timelineOffset={timelineOffset}
                        />
                        {/* Time slot grid */}
                        {renderTimeSlotGrid()}
                    </div>
                </>
            )}
        </div>
    );
};
