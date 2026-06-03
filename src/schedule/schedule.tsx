import clsx from "clsx";
import { isEmpty } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ErrorDisplay } from "../error-display";
import { useMaxWidthMediaQuery } from "../theme";
import * as styles from "./schedule.styles";
import { ScheduleDayView } from "./schedule-day-view/schedule-day-view";
import { ScheduleHeader } from "./schedule-header/schedule-header";
import { ScheduleWeekView } from "./schedule-week-view/schedule-week-view";
import type { ScheduleProps } from "./types";

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

    if (isEmptyContent) {
        return (
            <div
                {...otherProps}
                data-testid={testId}
                id={id}
                className={clsx(
                    styles.container,
                    loading && styles.containerLoading,
                    className
                )}
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
                <div
                    className={clsx(
                        styles.emptyTableContainer,
                        "empty-container"
                    )}
                >
                    <ErrorDisplay
                        className={styles.noResultsFound}
                        type="no-item-found"
                        description={emptyContentMessage}
                    />
                </div>
            </div>
        );
    }
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

            <div
                className={styles.scheduleBodyContainer}
                ref={contentContainerRef}
                data-id="schedule-container"
            >
                {effectiveView === "day" ? (
                    <ScheduleDayView
                        date={date}
                        serviceData={visibleServiceData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        initialScrollTime={initialScrollTime}
                        emptySlotPopover={emptySlotPopover}
                        isMobile={isSmallScreen}
                        onNextService={handleNextService}
                        onPrevService={handlePrevService}
                        containerRef={contentContainerRef}
                        showPrevArrow={isSmallScreen && visibleServiceIdx > 0}
                        showNextArrow={
                            isSmallScreen &&
                            visibleServiceIdx < filteredServiceData.length - 1
                        }
                        onEmptySlotClick={onEmptySlotClick}
                        blockedMessage={blockedMessage}
                    />
                ) : (
                    <ScheduleWeekView
                        date={date}
                        serviceData={serviceData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        initialScrollTime={initialScrollTime}
                        containerRef={contentContainerRef}
                        blockedMessage={blockedMessage}
                        onClickHiddenSlots={onClickHiddenSlots}
                    />
                )}
            </div>
        </div>
    );
};
