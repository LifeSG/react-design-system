import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { TimeSlotProps } from "./types";
import { ScheduleHeader } from "./schedule-header/schedule-header";
import { TimeslotBody } from "./timeslot-body";
import { TimeSlotWeekView } from "./timeslot-week-view/timeslot-week-view";
import { TimeSlotDayView } from "./timeslot-day-view/timeslot-day-view";
import { Breakpoint } from "../theme";
import { isEmpty } from "lodash";
import {
    Container,
    EmptyTableContainer,
    NoResultsFound,
} from "./timeslot.styles";

export const TimeSlot = ({
    id,
    className,
    view = "day",
    date,
    rowData,
    loading = false,
    minTime = "00:00",
    maxTime = "23:59",
    initialScrollTime = minTime,
    minDate,
    maxDate,
    emptyContentMessage,
    onPreviousDayClick,
    onNextDayClick,
    onCalendarDateSelect,
    onTodayClick,
    onSlotClick,
    onEmptySlotClick,
    ...otherProps
}: TimeSlotProps) => {
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
    const effectiveView = isMobile || isTablet ? "day" : currentView;
    const [visibleServiceIdx, setVisibleServiceIdx] = useState(0);
    const isEmptyContent = rowData.length === 0 || isEmpty(rowData);
    const filteredRowData = rowData.map((service) => ({
        ...service,
        rowCells: service.rowCells.filter((cell) => cell.date === date),
    }));

    // Only show one service on mobile/tablet, after filtering by date
    const visibleRowData =
        isMobile || isTablet
            ? filteredRowData && filteredRowData.length > 0
                ? [filteredRowData[visibleServiceIdx]]
                : []
            : filteredRowData;

    const handleNextService = useCallback(() => {
        if (!rowData) return;
        setVisibleServiceIdx((idx) =>
            idx < rowData.length - 1 ? idx + 1 : idx
        );
    }, [rowData]);
    const handlePrevService = useCallback(() => {
        setVisibleServiceIdx((idx) => (idx > 0 ? idx - 1 : idx));
    }, []);

    useEffect(() => {
        setVisibleServiceIdx(0);
    }, [rowData]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleViewChange = (newView: "day" | "week") => {
        setCurrentView(newView);
    };

    const handleTodayClick = useCallback(() => {
        onTodayClick?.();
    }, [onTodayClick]);

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    if (isEmptyContent) {
        return (
            <Container {...otherProps} data-testid={id} $loading={loading}>
                <ScheduleHeader
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

            <TimeslotBody data-id="timeslot-container">
                {effectiveView === "day" ? (
                    <TimeSlotDayView
                        date={date}
                        rowData={visibleRowData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        initialScrollTime={initialScrollTime}
                        onSlotClick={onSlotClick}
                        isMobile={isMobile || isTablet}
                        onNextService={handleNextService}
                        onPrevService={handlePrevService}
                        showPrevArrow={
                            (isMobile || isTablet) && visibleServiceIdx > 0
                        }
                        showNextArrow={
                            (isMobile || isTablet) &&
                            rowData &&
                            visibleServiceIdx < rowData.length - 1
                        }
                    />
                ) : (
                    <TimeSlotWeekView
                        date={date}
                        rowData={rowData}
                        loading={loading}
                        minTime={minTime}
                        maxTime={maxTime}
                        initialScrollTime={initialScrollTime}
                        onSlotClick={onSlotClick}
                    />
                )}
            </TimeslotBody>
        </Container>
    );
};
