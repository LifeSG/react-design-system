import { TimeHelper } from "../../util/time-helper";
import {
    TimeColumn,
    TimeColumnWrapper,
    TimeLabel,
    HourDisplay,
    PeriodIndicator,
    TimelineCircle,
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
    return (
        <TimeColumnWrapper>
            {timelineOffset !== null && (
                <TimelineCircle
                    $top={timelineOffset}
                    $isWeekView={isWeekView}
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
                                    <PeriodIndicator>{ampm}</PeriodIndicator>
                                </>
                            )}
                        </TimeLabel>
                    );
                })}
            </TimeColumn>
        </TimeColumnWrapper>
    );
};
