import { TimeHelper } from "../../util/time-helper";
import {
    TimeColumn,
    TimeLabel,
    TimelineCircle,
    TimeColumnWrapper,
} from "./time-indicator.styles";

interface TimeSlotTimeIndicatorProps {
    minTime: string;
    maxTime: string;
    format: "12hr" | "24hr";
    timelineOffset?: number | null;
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
}: TimeSlotTimeIndicatorProps) => {
    const timeSlots = TimeHelper.generateTimings(30, format, minTime, maxTime);
    const hourLabels = timeSlots.filter((t) => t.includes(":00"));
    return (
        <TimeColumnWrapper>
            {timelineOffset !== null && (
                <TimelineCircle $top={timelineOffset} />
            )}
            <TimeColumn>
                {hourLabels.map((time) => {
                    const { hour, ampm } = formatHourLabel(time);
                    return (
                        <TimeLabel key={time}>
                            <span>{hour}</span>
                            <span>{ampm}</span>
                        </TimeLabel>
                    );
                })}
            </TimeColumn>
        </TimeColumnWrapper>
    );
};
