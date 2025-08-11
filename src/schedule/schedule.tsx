import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { ScheduleProps } from "./types";
import { ScheduleHeader } from "./schedule-header/schedule-header";
import { ScheduleBody } from "./schedule-body";
import { ScheduleWeekView } from "./schedule-week-view/schedule-week-view";
import { ScheduleDayView } from "./schedule-day-view/schedule-day-view";
import { Breakpoint } from "../theme";
import { isEmpty } from "lodash";
import {
    Container,
    EmptyTableContainer,
    NoResultsFound,
} from "./schedule.styles";

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
    ...otherProps
}: ScheduleProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "schedule";
    const [currentView, setCurrentView] = useState<"day" | "week">(view);
    const theme = useTheme();
    const mobileBreakpoint = Breakpoint["md-max"]({ theme });
    const isMobile = useMediaQuery({
        maxWidth: mobileBreakpoint,
    });
    const tabletBreakpoint = Breakpoint["lg-max"]({ theme });
    const isTablet = useMediaQuery({
        maxWidth: tabletBreakpoint,
    });
    const effectiveView = isMobile || isTablet ? "day" : currentView;
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const [visibleServiceIdx, setVisibleServiceIdx] = useState(0);
    const isEmptyContent = serviceData.length === 0 || isEmpty(serviceData);
    const filteredServiceData = serviceData.map((service) => ({
        ...service,
        slots: service.slots.filter((slot) => slot.date === date),
    }));

    const visibleServiceData =
        isMobile || isTablet
            ? filteredServiceData && filteredServiceData.length > 0
                ? [filteredServiceData[visibleServiceIdx]]
                : []
            : filteredServiceData;

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
        if (!serviceData) return;
        setVisibleServiceIdx((idx) =>
            idx < serviceData.length - 1 ? idx + 1 : idx
        );
    }, [serviceData]);
    const handlePrevService = useCallback(() => {
        setVisibleServiceIdx((idx) => (idx > 0 ? idx - 1 : idx));
    }, []);
    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    if (isEmptyContent) {
        return (
            <Container {...otherProps} data-testid={id} $loading={loading}>
                <ScheduleHeader
                    data-id="schedule-header"
                    date={date}
                    view={effectiveView}
                    showTodayButton={!isMobile && !isTablet}
                    showViewSelector={!isMobile && !isTablet}
                    minDate={minDate}
                    maxDate={maxDate}
                    onPreviousDayClick={onPreviousDayClick}
                    onNextDayClick={onNextDayClick}
                    onCalendarDateSelect={onCalendarDateSelect}
                    onViewChange={handleViewChange}
                    onTodayClick={handleTodayClick}
                />
                <EmptyTableContainer className="empty-container">
                    <NoResultsFound
                        type="no-item-found"
                        description={emptyContentMessage}
                    />
                </EmptyTableContainer>
            </Container>
        );
    }
    return (
        <Container
            id={id}
            className={className}
            $loading={loading}
            data-testId={testId}
            {...otherProps}
        >
            <ScheduleHeader
                data-id="schedule-header"
                date={date}
                view={effectiveView}
                $isMobile={isMobile}
                $isTablet={isTablet}
                minDate={minDate}
                maxDate={maxDate}
                onPreviousDayClick={onPreviousDayClick}
                onNextDayClick={onNextDayClick}
                onCalendarDateSelect={onCalendarDateSelect}
                onViewChange={handleViewChange}
                onTodayClick={handleTodayClick}
            />

            <ScheduleBody
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
                        isMobile={isMobile || isTablet}
                        onNextService={handleNextService}
                        onPrevService={handlePrevService}
                        containerRef={contentContainerRef}
                        showPrevArrow={
                            (isMobile || isTablet) && visibleServiceIdx > 0
                        }
                        showNextArrow={
                            (isMobile || isTablet) &&
                            visibleServiceData &&
                            visibleServiceIdx < visibleServiceData.length - 1
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
            </ScheduleBody>
        </Container>
    );
};
