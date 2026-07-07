import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Shadow } from "../../theme";
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
    slotColumnOverlay: {
        leftPosition:
            "--fds-internal-scheduleWeekView-slotColumnOverlay-leftPosition",
        actualWidthPercentage:
            "--fds-internal-scheduleWeekView-slotColumnOverlay-actualWidthPercentage",
    },
    hiddenColumns: {
        minHeight: "--fds-internal-scheduleWeekView-hiddenColumns-minHeight",
        height: "--fds-internal-scheduleWeekView-hiddenColumns-height",
    },
};

export const slotContentContainer = css`
    ${tokens.slotContentContainer.height}: ${CELL_HEIGHT - 1}px;
    ${tokens.slotContentContainer.offsetTop}: 0px;

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

export const slotCell = css`
    min-height: ${CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${Border["width-010"]} solid ${Colour["border"]};
    cursor: pointer;
`;

export const slotCellDashed = css`
    border-bottom-style: dashed;
`;

export const slotColumnOverlay = css`
    ${tokens.slotColumnOverlay.leftPosition}: 0;
    ${tokens.slotColumnOverlay.actualWidthPercentage}: 100;
    position: absolute;
    top: 0;
    left: calc(
        (100% - 14px) * var(${tokens.slotColumnOverlay.leftPosition}) / 100
    );
    width: calc(
        (100% - 14px) * var(${tokens.slotColumnOverlay.actualWidthPercentage}) /
            100
    );
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: visible;
    z-index: 1;
`;

export const hiddenColumns = css`
    ${tokens.hiddenColumns.minHeight}: ${CELL_HEIGHT}px;
    ${tokens.hiddenColumns.height}: auto;
    background-color: unset;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${Colour["text-primary"]};
    ${Font["body-xs-semibold"]};
    min-height: var(${tokens.hiddenColumns.minHeight});
    height: var(${tokens.hiddenColumns.height});
    &:hover {
        border-radius: ${Radius["sm"]};
        box-shadow: ${Shadow["sm-subtle"]};
    }
`;
