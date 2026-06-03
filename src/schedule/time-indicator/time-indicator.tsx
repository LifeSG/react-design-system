import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../../theme";
import { TimeHelper } from "../../util/time-helper";
import {
    HourDisplay,
    TimeColumn,
    TimeColumnWrapper,
    TimeLabel,
    TimelineCircle,
    timelineCircleWeekView,
    tokens,
} from "./time-indicator.styles";

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
        [tokens.timelineCircle.top]:
            timelineOffset === null ? null : `${timelineOffset - 6}px`,
    });

    return (
        <TimeColumnWrapper>
            {timelineOffset !== null && (
                <TimelineCircle
                    ref={timelineCircleRef}
                    className={clsx(isWeekView && timelineCircleWeekView)}
                />
            )}
            <TimeColumn>
                {hourLabels.map((time) => {
                    const { hour, ampm } = formatHourLabel(time);
                    const isFirstSlot = time === minTime;
                    return (
                        <TimeLabel key={time}>
                            {!isFirstSlot && (
                                <>
                                    <HourDisplay>{hour}</HourDisplay>
                                    <span>{ampm}</span>
                                </>
                            )}
                        </TimeLabel>
                    );
                })}
            </TimeColumn>
        </TimeColumnWrapper>
    );
};
