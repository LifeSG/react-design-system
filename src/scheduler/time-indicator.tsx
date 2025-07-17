import styled from "styled-components";
import { Border, Colour } from "../theme";
import { Typography } from "../typography";
import { TimeHelper } from "../util/time-helper";

interface SchedulerTimeIndicatorProps {
    minTime: string;
    maxTime: string;
    format: "12hr" | "24hr";
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
}: SchedulerTimeIndicatorProps) => {
    const timeSlots = TimeHelper.generateTimings(30, format, minTime, maxTime);
    const hourLabels = timeSlots.filter((t) => t.includes(":00"));
    return (
        <TimeColumn>
            {hourLabels.map((time) => {
                const { hour, ampm } = formatHourLabel(time);
                return (
                    <TimeLabel key={time}>
                        <p>{hour}</p>
                        <p>{ampm}</p>
                    </TimeLabel>
                );
            })}
        </TimeColumn>
    );
};

// =============================================================================
// STYLING
// =============================================================================

export const TimeColumn = styled(Typography.BodySM)`
    width: 42px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    color: ${Colour["text-subtler"]};

    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const TimeLabel = styled.div`
    height: 96px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 8px;
`;
