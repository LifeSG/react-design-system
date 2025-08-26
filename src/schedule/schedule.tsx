import {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { ThemeContext } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { ScheduleProps } from "./types";
import { ScheduleHeader } from "./schedule-header/schedule-header";

import { ScheduleWeekView } from "./schedule-week-view/schedule-week-view";
import { ScheduleDayView } from "./schedule-day-view/schedule-day-view";
import { Breakpoint } from "../theme";
import { isEmpty } from "lodash";
import {
    Container,
    ScheduleBodyContainer,
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
    "data-testid": testId = "schedule",
    ...otherProps
}: ScheduleProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [currentView, setCurrentView] = useState<"day" | "week">(view);
    const theme = useContext(ThemeContext);
    const tabletBreakpoint = Breakpoint["lg-max"]({ theme });
    const isSmallScreen = useMediaQuery({
        maxWidth: tabletBreakpoint,
    });
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

    const visibleServiceData = isSmallScreen
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
            <Container {...otherProps} data-testid={testId} $loading={loading}>
                <ScheduleHeader
                    data-id="schedule-header"
                    date={date}
                    view={effectiveView}
                    showTodayButton={!isSmallScreen}
                    showViewSelector={!isSmallScreen}
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
                showTodayButton={!isSmallScreen}
                showViewSelector={!isSmallScreen}
                minDate={minDate}
                maxDate={maxDate}
                onPreviousDayClick={onPreviousDayClick}
                onNextDayClick={onNextDayClick}
                onCalendarDateSelect={onCalendarDateSelect}
                onViewChange={handleViewChange}
                onTodayClick={handleTodayClick}
            />

            <ScheduleBodyContainer
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
            </ScheduleBodyContainer>
        </Container>
    );
};
