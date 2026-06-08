import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../../theme";
import { Typography } from "../../typography";
import { TimeHelper } from "../../util/time-helper";
import * as styles from "./time-indicator.styles";

interface TimeSlotTimeIndicatorProps {
    minTime: string;
    maxTime: string;
    format: "12hr" | "24hr";
    timelineOffset?: number | null;
    isWeekView?: boolean;
}
function formatHourLabel(time: string) {
    const [h] = time.split(":").map(Number);
    const ampm = h < 12 ? "am" : "pm";
    const hour = h % 12 === 0 ? 12 : h % 12;
    return { hour, ampm };
}

export const TimeIndicator = ({
    minTime,
    maxTime,
    format = "24hr",
    timelineOffset = null,
    isWeekView = false,
}: TimeSlotTimeIndicatorProps) => {
    const timeSlots = TimeHelper.generateTimings(30, format, minTime, maxTime);
    const hourLabels = timeSlots.filter((t) => t.includes(":00"));
    const timelineCircleRef = useRef<HTMLDivElement>(null);

    useApplyStyle(timelineCircleRef, {
        [styles.tokens.timelineCircle.offset]:
            timelineOffset === null ? null : `${timelineOffset}px`,
    });

    return (
        <div className={styles.timeColumnWrapper}>
            {timelineOffset !== null && (
                <div
                    className={clsx(
                        styles.timelineCircle,
                        isWeekView && styles.timelineCircleWeekView
                    )}
                    ref={timelineCircleRef}
                />
            )}
            <div className={styles.timeColumn}>
                {hourLabels.map((time) => {
                    const { hour, ampm } = formatHourLabel(time);
                    const isFirstSlot = time === minTime;
                    return (
                        <Typography.BodySM
                            className={styles.timeLabel}
                            key={time}
                        >
                            {!isFirstSlot && (
                                <>
                                    <span className={styles.hourDisplay}>
                                        {hour}
                                    </span>
                                    <span>{ampm}</span>
                                </>
                            )}
                        </Typography.BodySM>
                    );
                })}
            </div>
        </div>
    );
};
