import styled from "styled-components";

import { Border, Colour, Font, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    timelineCircle: {
        top: "--fds-internal-timeIndicator-timelineCircle-top",
    },
};

export const timelineCircleWeekView = "timeIndicatorTimelineCircleWeekView";

export const TimeColumnWrapper = styled.div`
    position: sticky;
    z-index: 3;
`;

export const TimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${TIME_INDICATOR_WIDTH}px;
    background: ${Colour["bg"]};
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const TimeLabel = styled(Typography.BodySM)`
    min-height: ${CELL_HEIGHT * 2}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${Colour["text-subtler"]};
    padding-right: ${Spacing["spacing-8"]};
    font-weight: ${Font.Spec["weight-bold"]};
    position: relative;
`;
export const HourDisplay = styled.span`
    position: absolute;
    top: -18px;
`;

export const TimelineCircle = styled.div`
    ${tokens.timelineCircle.top}: -6px;
    position: absolute;
    right: -6px;
    top: var(${tokens.timelineCircle.top});
    width: ${Spacing["spacing-12"]};
    height: ${Spacing["spacing-12"]};
    border-radius: ${Radius["full"]};
    background: ${Colour["icon-primary"]};
    z-index: 4;

    &.${timelineCircleWeekView} {
        display: none;
    }
`;
