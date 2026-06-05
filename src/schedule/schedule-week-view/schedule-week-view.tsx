import dayjs from "dayjs";
import { useMemo, useRef } from "react";

import { ThemedLoadingSpinner } from "../../animations/themed-loading-spinner/themed-loading-spinner";
import type { CellStyleProps } from "../../shared/internal-calendar/day-cell";
import { DayCell } from "../../shared/internal-calendar/day-cell";
import { useApplyStyle } from "../../theme";
import { Typography } from "../../typography";
import { TimeHelper } from "../../util/time-helper";
import * as dayViewStyles from "../schedule-day-view/schedule-day-view.styles";
import { useInitialScroll, useTimelineOffset } from "../schedule-slot-content";
import { TimeIndicator } from "../time-indicator/time-indicator";
import * as styles from "./schedule-week-view.styles";
import { TimeCell } from "./time-cell";
import type { ScheduleWeekViewProps } from "./types";
import { calculateSlotWidths } from "./week-view-utils";

interface WeekTimelineProps {
    top: number;
}

const WeekTimeline = ({ top }: WeekTimelineProps) => {
    const timelineRef = useRef<HTMLDivElement>(null);

    useApplyStyle(timelineRef, {
        [styles.tokens.timeline.top]: `${top}px`,
    });

    return <div ref={timelineRef} className={styles.timeline} />;
};

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
    // HELPER FUNCTIONS
    // =============================================================================
    const generateStyleProps = (day: dayjs.Dayjs): CellStyleProps => {
        const isToday = day.isSame(today, "day");

        const dayCellStyleProps: CellStyleProps = {
            labelType: isToday ? "current" : "available",
            interactive: undefined,
        };

        if (isToday) {
            dayCellStyleProps.circleLeft = "selected-outline";
            dayCellStyleProps.circleRight = "selected-outline";
        }

        return dayCellStyleProps;
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderHeader = () => {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.blankCell} />
                <div className={styles.serviceContainer}>
                    {weekDays.map((day) => {
                        const dayCellStyleProps = generateStyleProps(day);
                        return (
                            <div
                                className={styles.serviceHeader}
                                key={day.format("YYYY-MM-DD")}
                            >
                                <DayCell
                                    date={day}
                                    calendarDate={dayjs(date)}
                                    {...dayCellStyleProps}
                                />
                                <Typography.BodyMD
                                    className={styles.description}
                                >
                                    {day.format("ddd")}
                                </Typography.BodyMD>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderSlotGrid = () => (
        <div className={styles.slotGrid}>
            {weekDays.map((day) => {
                const dayDate = day.format("YYYY-MM-DD");
                return (
                    <div className={styles.slotColumn} key={dayDate}>
                        {timelineOffset !== null &&
                            day.isSame(today, "day") && (
                                <WeekTimeline top={timelineOffset} />
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
                    </div>
                );
            })}
        </div>
    );

    const renderBodyContainer = () => (
        <div className={styles.bodyContainer} ref={bodyRef}>
            <TimeIndicator
                minTime={minTime}
                maxTime={maxTime}
                format="24hr"
                timelineOffset={timelineOffset}
                isWeekView={true}
            />
            {renderSlotGrid()}
        </div>
    );

    return (
        <div className={dayViewStyles.scheduleContainer}>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <ThemedLoadingSpinner data-testid="loading-spinner" />
                </div>
            ) : (
                <>
                    {renderHeader()}
                    {renderBodyContainer()}
                </>
            )}
        </div>
    );
};
