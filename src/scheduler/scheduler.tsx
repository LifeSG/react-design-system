import React, { useCallback, useState, useEffect } from "react";
import styled, { css, useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { SchedulerProps } from "./types";
import { TimeSlotHeader } from "./timeslot-header/timeslot-header";
import { SchedulerBody } from "./scheduler-body";
import { TimeSlotWeekView } from "./timeslot-week-view/timeslot-week-view";
import { TimeSlotDayView } from "./timeslot-day-view/timeslot-day-view";
import { Breakpoint } from "../theme";

export const Scheduler = ({
    id,
    className,
    view = "day",
    date,
    rowData,
    loading = false,
    minTime = "00:00",
    maxTime = "23:59",
    minDate,
    maxDate,
    onPreviousDayClick,
    onNextDayClick,
    onCalendarDateSelect,
    onViewChange,
    onTodayClick,
    onSlotClick,
    ...otherProps
}: SchedulerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
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

    // Force day view on mobile
    const effectiveView = isMobile || isTablet ? "day" : currentView;

    // New: Track which service is visible on mobile
    const [visibleServiceIdx, setVisibleServiceIdx] = useState(0);

    // Only show one service on mobile/tablet
    const visibleRowData =
        isMobile || isTablet
            ? rowData && rowData.length > 0
                ? [rowData[visibleServiceIdx]]
                : []
            : rowData;

    // Handlers for arrows
    const handleNextService = useCallback(() => {
        if (!rowData) return;
        setVisibleServiceIdx((idx) =>
            idx < rowData.length - 1 ? idx + 1 : idx
        );
    }, [rowData]);
    const handlePrevService = useCallback(() => {
        setVisibleServiceIdx((idx) => (idx > 0 ? idx - 1 : idx));
    }, []);

    // Reset index if rowData changes
    useEffect(() => {
        setVisibleServiceIdx(0);
    }, [rowData]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleViewChange = useCallback(
        (newView: "day" | "week") => {
            setCurrentView(newView);
            onViewChange?.(newView);
        },
        [onViewChange]
    );

    const handleTodayClick = useCallback(() => {
        onTodayClick?.();
    }, [onTodayClick]);

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Container
            id={id}
            className={className}
            $loading={loading}
            {...otherProps}
        >
            <TimeSlotHeader
                data-id="time-slot-header"
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

            <SchedulerBody data-id="timeslot-container">
                {effectiveView === "day" ? (
                    <TimeSlotDayView
                        date={date}
                        rowData={visibleRowData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        onSlotClick={onSlotClick}
                        isMobile={isMobile || isTablet}
                        onNextService={handleNextService}
                        onPrevService={handlePrevService}
                        showPrevArrow={
                            isMobile || (isTablet && visibleServiceIdx > 0)
                        }
                        showNextArrow={
                            isMobile ||
                            (isTablet &&
                                rowData &&
                                visibleServiceIdx < rowData.length - 1)
                        }
                    />
                ) : (
                    <TimeSlotWeekView
                        date={date}
                        rowData={rowData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        onSlotClick={onSlotClick}
                    />
                )}
            </SchedulerBody>
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div<TimeSlotProps>`
    width: 100%;
    ${(props) => {
        if (props.$loading) {
            return css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `;
        }
    }}
`;

interface TimeSlotProps {
    $loading: boolean | undefined;
}
