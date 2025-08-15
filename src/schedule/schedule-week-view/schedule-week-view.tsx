import React, { useMemo } from "react";
import dayjs from "dayjs";
import { ScheduleWeekViewProps } from "./types";
import { TimeIndicator } from "../time-indicator/time-indicator";
import { TimeHelper } from "../../util/time-helper";
import { useTimelineOffset, useInitialScroll } from "../shared";
import { calculateSlotWidths } from "./week-view-utils";
import { ScheduleContainer } from "../schedule-day-view/schedule-day-view.styles";
import {
    BlankCell,
    BodyContainer,
    Description,
    HeaderContainer,
    LoadingContainer,
    ServiceContainer,
    ServiceHeader,
    SlotColumn,
    Timeline,
    SlotGrid,
    Title,
} from "./schedule-week-view.styles";
import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";
import { TimeCell } from "./time-cell";

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export const ScheduleWeekView = ({
    date,
    serviceData,
    loading,
    minTime,
    maxTime,
    initialScrollTime,
    containerRef,
    blockedMessage,
    onClickHiddenSlots,
}: ScheduleWeekViewProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const timelineOffset = useTimelineOffset(minTime, maxTime);
    const bodyRef = useInitialScroll(loading, minTime, initialScrollTime);

    const weekDays = useMemo(() => {
        const startOfWeek = dayjs(date).startOf("week");
        return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
    }, [date]);

    const timeSlots = useMemo(() => {
        return TimeHelper.generateTimings(30, "24hr", minTime, maxTime);
    }, [minTime, maxTime]);

    const slotLayoutMap = useMemo(() => {
        return calculateSlotWidths(serviceData, weekDays, timeSlots);
    }, [serviceData, weekDays, timeSlots]);

    const today = dayjs();

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderHeader = () => {
        return (
            <HeaderContainer>
                <BlankCell />
                <ServiceContainer>
                    {weekDays.map((day) => {
                        const isToday = day.isSame(today, "day");
                        return (
                            <ServiceHeader key={day.format("YYYY-MM-DD")}>
                                <Title $isToday={isToday}>
                                    {day.format("D")}
                                </Title>
                                <Description>{day.format("ddd")}</Description>
                            </ServiceHeader>
                        );
                    })}
                </ServiceContainer>
            </HeaderContainer>
        );
    };

    const renderSlotGrid = () => (
        <SlotGrid>
            {weekDays.map((day) => {
                const dayDate = day.format("YYYY-MM-DD");
                return (
                    <SlotColumn key={dayDate}>
                        {timelineOffset !== null &&
                            day.isSame(today, "day") && (
                                <Timeline $top={timelineOffset} />
                            )}
                        {timeSlots.map((time) => (
                            <TimeCell
                                key={time}
                                dayDate={dayDate}
                                time={time}
                                serviceData={serviceData}
                                slotLayoutMap={slotLayoutMap}
                                containerRef={containerRef}
                                blockedMessage={blockedMessage}
                                onClickHiddenSlots={onClickHiddenSlots}
                            />
                        ))}
                    </SlotColumn>
                );
            })}
        </SlotGrid>
    );

    const renderBodyContainer = () => (
        <BodyContainer ref={bodyRef}>
            <TimeIndicator
                minTime={minTime}
                maxTime={maxTime}
                format="24hr"
                timelineOffset={timelineOffset}
                isWeekView={true}
            />
            {renderSlotGrid()}
        </BodyContainer>
    );

    return (
        <ScheduleContainer>
            {loading ? (
                <LoadingContainer>
                    <ThemedLoadingSpinner />
                </LoadingContainer>
            ) : (
                <>
                    {renderHeader()}
                    {renderBodyContainer()}
                </>
            )}
        </ScheduleContainer>
    );
};
