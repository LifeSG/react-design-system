import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Shadow } from "../../theme";
import { CELL_HEIGHT } from "../const";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
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
