import { css } from "@linaria/core";

import { Border, Colour, Font, Radius } from "../../theme";
import { CELL_HEIGHT } from "../const";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    slotContentContainer: {
        height: "--fds-internal-scheduleWeekView-slotContentContainer-height",
        offsetTop:
            "--fds-internal-scheduleWeekView-slotContentContainer-offsetTop",
    },
};

export const slotContentContainer = css`
    ${tokens.slotContentContainer.height}: ${CELL_HEIGHT - 1}px;
    ${tokens.slotContentContainer.offsetTop}: 0px;
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 1px);
    padding: 4px;
    top: var(${tokens.slotContentContainer.offsetTop});
    ${Font["body-xs-semibold"]};
    z-index: 1;
    height: var(${tokens.slotContentContainer.height});
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: ${Radius["sm"]};
    color: inherit;
    border-left: 0;
`;

export const slotContentContainerAvailable = css`
    border-left: ${Border["width-040"]} solid ${Colour["icon-success"]};
`;

export const slotContentContainerBlocked = css`
    color: ${Colour["text-inverse"]};
`;

export const slotServiceName = css`
    ${Font["body-xs-regular"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;

export const slotAvailability = css`
    ${Font["body-xs-semibold"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;
