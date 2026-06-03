import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../../theme";
import { CELL_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    timelineCircle: {
        top: "--fds-internal-timeIndicator-timelineCircle-top",
    },
};

export const timeColumnWrapper = css`
    position: sticky;
    z-index: 3;
`;

export const timeColumn = css`
    display: flex;
    flex-direction: column;
    min-width: ${TIME_INDICATOR_WIDTH}px;
    background: ${Colour["bg"]};
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const timeLabel = css`
    min-height: ${CELL_HEIGHT * 2}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${Colour["text-subtler"]};
    padding-right: ${Spacing["spacing-8"]};
    font-weight: ${Font.Spec["weight-bold"]};
    position: relative;
`;
export const hourDisplay = css`
    position: absolute;
    top: -18px;
`;

export const timelineCircle = css`
    ${tokens.timelineCircle.top}: -6px;
    position: absolute;
    right: -6px;
    top: var(${tokens.timelineCircle.top});
    width: ${Spacing["spacing-12"]};
    height: ${Spacing["spacing-12"]};
    border-radius: ${Radius["full"]};
    background: ${Colour["icon-primary"]};
    z-index: 4;
`;

export const timelineCircleWeekView = css`
    display: none;
`;
