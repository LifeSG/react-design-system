import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { Breakpoint } from "../theme";
import { SchedulerProps } from "./types";
import { TimeSlotHeader } from "./timeslot-header";
import { SchedulerBody } from "./scheduler-body";
import { SchedulerWeekView } from "./scheduler-week-view";
import { TimeSlotDayView } from "./scheduler-day-view";

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
            $loading={loading}
            {...otherProps}
        >
            <TimeSlotHeader
                data-id="time-slot-header"
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

            <SchedulerBody data-id="timeslot-container">
                {effectiveView === "day" ? (
                    <TimeSlotDayView
                        date={date}
                        rowData={rowData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        onSlotClick={onSlotClick}
                    />
                ) : (
                    <SchedulerWeekView
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
