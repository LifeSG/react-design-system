import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { Breakpoint } from "../theme";
import { SchedulerProps } from "./types";
import { TimeSlotHeader } from "./timeslot-header";
import { SchedulerBody } from "./scheduler-body";
import { SchedulerWeekView } from "./scheduler-week-view";
import { SchedulerDayView } from "./scheduler-day-view";

export const Scheduler = ({
    id,
    className,
    "data-testid": dataTestId,
    view = "day",
    date,
    emptyContentMessage = "No data available",
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
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });

    // Force day view on mobile
    const effectiveView = isMobile ? "day" : currentView;

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
            data-testid={dataTestId || "scheduler-container"}
            {...otherProps}
        >
            <TimeSlotHeader
                date={date}
                view={effectiveView}
                showTodayButton={!isMobile}
                showViewSelector={!isMobile}
                minDate={minDate}
                maxDate={maxDate}
                onPreviousDayClick={onPreviousDayClick}
                onNextDayClick={onNextDayClick}
                onCalendarDateSelect={onCalendarDateSelect}
                onViewChange={handleViewChange}
                onTodayClick={handleTodayClick}
            />

            <SchedulerBody>
                {effectiveView === "day" ? (
                    <SchedulerDayView
                        date={date}
                        rowData={rowData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        emptyContentMessage={emptyContentMessage}
                        onSlotClick={onSlotClick}
                    />
                ) : (
                    <SchedulerWeekView
                        date={date}
                        rowData={rowData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        emptyContentMessage={emptyContentMessage}
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
const Container = styled.div``;
