import clsx from "clsx";
import { isEmpty } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ErrorDisplay } from "../error-display";
import { useMaxWidthMediaQuery } from "../theme";
import type { CommonScheduleViewProps } from "./internal-types";
import * as styles from "./schedule.styles";
import { ScheduleDayView } from "./schedule-day-view/schedule-day-view";
import { ScheduleHeader } from "./schedule-header/schedule-header";
import { ScheduleWeekView } from "./schedule-week-view/schedule-week-view";
import type { ScheduleProps } from "./types";

// @catalog
/**
 * A grid visualisation of slot-based time availability for services across day and week views.
 */
export const Schedule = ({
    id,
    className,
    view = "day",
    date,
    serviceData,
    loading = false,
    minTime = "00:00",
    maxTime = "23:59",
    initialScrollTime = minTime,
    minDate,
    maxDate,
    emptyContentMessage,
    emptySlotPopover,
    onPreviousDayClick,
    onNextDayClick,
    onCalendarDateSelect,
    onTodayClick,
    onEmptySlotClick,
    blockedMessage,
    onClickHiddenSlots,
    "data-testid": testId = "schedule",
    ...otherProps
}: ScheduleProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [currentView, setCurrentView] = useState<"day" | "week">(view);
    const isSmallScreen = useMaxWidthMediaQuery("lg");
    const effectiveView = isSmallScreen ? "day" : currentView;
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const [visibleServiceIdx, setVisibleServiceIdx] = useState(0);
    const isEmptyContent = serviceData.length === 0 || isEmpty(serviceData);
    const filteredServiceData = useMemo(
        () =>
            serviceData.map((service) => ({
                ...service,
                slots: service.slots.filter((slot) => slot.date === date),
            })),
        [serviceData, date]
    );
    let visibleServiceData = filteredServiceData;
    if (isSmallScreen) {
        visibleServiceData =
            filteredServiceData.length > 0
                ? [filteredServiceData[visibleServiceIdx]]
                : [];
    }
    const showPrevArrow = isSmallScreen && visibleServiceIdx > 0;
    const showNextArrow =
        isSmallScreen && visibleServiceIdx < filteredServiceData.length - 1;

    useEffect(() => {
        setVisibleServiceIdx(0);
    }, [filteredServiceData]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleViewChange = (newView: "day" | "week") => {
        setCurrentView(newView);
    };

    const handleTodayClick = useCallback(() => {
        onTodayClick?.();
    }, [onTodayClick]);

    const handleNextService = useCallback(() => {
        if (!filteredServiceData) return;
        setVisibleServiceIdx((idx) =>
            idx < filteredServiceData.length - 1 ? idx + 1 : idx
        );
    }, [filteredServiceData]);

    const handlePrevService = useCallback(() => {
        setVisibleServiceIdx((idx) => (idx > 0 ? idx - 1 : idx));
    }, []);

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderEmptyContent = () => (
        <div className={clsx(styles.emptyTableContainer, "empty-container")}>
            <ErrorDisplay
                className={styles.noResultsFound}
                type="no-item-found"
                description={emptyContentMessage}
            />
        </div>
    );

    const commonScheduleViewProps: CommonScheduleViewProps = {
        date,
        loading,
        minTime,
        maxTime,
        initialScrollTime,
        containerRef: contentContainerRef,
        blockedMessage,
    };

    const renderScheduleView = () => (
        <div
            className={styles.scheduleBodyContainer}
            ref={contentContainerRef}
            data-id="schedule-container"
        >
            {effectiveView === "day" ? (
                <ScheduleDayView
                    {...commonScheduleViewProps}
                    serviceData={visibleServiceData}
                    emptySlotPopover={emptySlotPopover}
                    isMobile={isSmallScreen}
                    onNextService={handleNextService}
                    onPrevService={handlePrevService}
                    showPrevArrow={showPrevArrow}
                    showNextArrow={showNextArrow}
                    onEmptySlotClick={onEmptySlotClick}
                />
            ) : (
                <ScheduleWeekView
                    {...commonScheduleViewProps}
                    serviceData={serviceData}
                    onClickHiddenSlots={onClickHiddenSlots}
                />
            )}
        </div>
    );

    return (
        <div
            id={id}
            className={clsx(
                styles.container,
                loading && styles.containerLoading,
                className
            )}
            data-testid={testId}
            {...otherProps}
        >
            <ScheduleHeader
                data-id="schedule-header"
                date={date}
                view={effectiveView}
                minDate={minDate}
                maxDate={maxDate}
                onPreviousDayClick={onPreviousDayClick}
                onNextDayClick={onNextDayClick}
                onCalendarDateSelect={onCalendarDateSelect}
                onViewChange={handleViewChange}
                onTodayClick={handleTodayClick}
            />

            {isEmptyContent ? renderEmptyContent() : renderScheduleView()}
        </div>
    );
};
