import { css } from "@linaria/core";

import { lineClampCss } from "../../shared/styles";
import { Border, Colour, Font, Radius, Spacing } from "../../theme";
import {
    CELL_HEIGHT,
    HEADER_HEIGHT,
    MIN_COLUMN_WIDTH,
    TIME_INDICATOR_WIDTH,
} from "../const";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    serviceContainer: {
        columnCount:
            "--fds-internal-scheduleDayView-serviceContainer-columnCount",
    },
    slotGrid: {
        columnCount: "--fds-internal-scheduleDayView-slotGrid-columnCount",
    },
    slotContent: {
        offsetTop: "--fds-internal-scheduleDayView-slotContent-offsetTop",
        height: "--fds-internal-scheduleDayView-slotContent-height",
    },
    timeline: {
        top: "--fds-internal-scheduleDayView-timeline-top",
    },
};

export const arrowButton = css`
    color: ${Colour["icon"]};
`;
export const arrowContainer = css`
    width: 2rem;
`;

export const scheduleContainer = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const loadingContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    background: ${Colour["bg"]};
`;

export const headerContainer = css`
    z-index: 3;
    max-height: ${HEADER_HEIGHT}px;
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
    position: sticky;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px 1fr;
`;

export const headerContainerMobile = css`
    display: block;
    overflow: hidden;
`;

export const blankCell = css`
    min-width: ${TIME_INDICATOR_WIDTH}px;
    background: ${Colour["bg-strong"]};
    position: sticky;
    left: 0;
`;
export const serviceContainer = css`
    ${tokens.serviceContainer.columnCount}: 1;
    display: grid;
    grid-template-columns: repeat(
        var(${tokens.serviceContainer.columnCount}),
        1fr
    );
`;

export const serviceColumn = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${MIN_COLUMN_WIDTH}px;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    background: ${Colour["bg-strong"]};
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

export const serviceHeaderContainer = css`
    width: 15rem;
    padding-left: ${Spacing["spacing-16"]};
`;

export const title = css`
    color: ${Colour["text-primary"]};
    font-weight: ${Font.Spec["weight-semibold"]};
    margin-top: 0;
    ${lineClampCss(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`;

export const description = css`
    margin-top: ${Spacing["spacing-8"]};
    background-color: ${Colour["bg-success-hover"]};
    border-radius: ${Radius["full"]};
    width: fit-content;
    padding: ${Spacing["spacing-4"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-success"]};
    font-weight: ${Font.Spec["weight-regular"]};
    span {
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;

export const bodyContainer = css`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px 1fr;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-top: none;
    border-bottom-right-radius: ${Radius["md"]};
    border-bottom-left-radius: ${Radius["md"]};
`;

export const slotGrid = css`
    ${tokens.slotGrid.columnCount}: 1;
    display: grid;
    grid-template-columns: repeat(var(${tokens.slotGrid.columnCount}), 1fr);
    min-width: max-content;
    position: relative;
`;

export const slotColumn = css`
    display: flex;
    flex-direction: column;
    min-width: ${MIN_COLUMN_WIDTH}px;
    min-height: fit-content;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

export const slotCell = css`
    min-height: ${CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${Border["width-010"]} solid ${Colour["border"]};
    cursor: pointer;
    background: none;
    width: 100%;
    padding: 0;
    text-align: left;
`;

export const slotCellDashed = css`
    border-bottom-style: dashed;
`;

export const slotContent = css`
    ${tokens.slotContent.offsetTop}: 0px;
    ${tokens.slotContent.height}: ${CELL_HEIGHT - 1}px;
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${Spacing["spacing-8"]};
    position: absolute;
    top: var(${tokens.slotContent.offsetTop});
    ${Font["body-xs-semibold"]};
    border-radius: ${Radius["sm"]};
    z-index: 1;
    height: var(${tokens.slotContent.height});
    display: flex;
    justify-content: space-between;
    color: ${Colour["text-subtle"]};
    border-left: 0;
`;

export const slotContentBlocked = css`
    color: ${Colour["text-inverse"]};
`;

export const slotContentAvailable = css`
    border-left: ${Border["width-040"]} solid ${Colour["icon-success"]};
`;

export const slotTime = css`
    ${Font["body-xs-regular"]};
`;

export const slotAvailability = css`
    ${Font["body-xs-semibold"]};
`;

export const timeline = css`
    ${tokens.timeline.top}: 0px;
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${Colour["icon-primary"]};
    top: var(${tokens.timeline.top});
    z-index: 2;
`;

export const emptySlot = css`
    width: 100%;
    height: ${CELL_HEIGHT - 1}px;
`;
