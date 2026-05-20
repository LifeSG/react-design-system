import { css } from "@linaria/core";

import { Border, Colour, Shadow } from "../theme";

const MAX_LINE_HEIGHT = 1.25; // NOTE in rem
export const DEFAULT_CELL_SIZE = 40;
export const MINIFIED_CELL_SIZE = 12;

export const tokens = {
    item: {
        width: "--fds-internal-timeSlotBar-item-width",
        left: "--fds-internal-timeSlotBar-item-left",
        color: "--fds-internal-timeSlotBar-item-color",
    },
    border: {
        left: "--fds-internal-timeSlotBar-border-left",
    },
} as const;

export const container = css`
    position: relative;
    display: flex;
    align-items: center;
`;

export const arrowButton = css`
    z-index: 2;
    position: absolute;
    bottom: 0rem;
    background-color: ${Colour.bg};
    box-shadow: ${Shadow["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`;

export const arrowButtonDefault = css`
    bottom: 0.25rem;
`;

export const arrowButtonMinified = css`
    bottom: 0rem;
`;

export const arrowButtonLeft = css`
    left: 0;
`;

export const arrowButtonRight = css`
    right: 0;
`;

export const arrowIconRight = css`
    width: 1rem;
    height: 1rem;
    color: ${Colour["icon-primary"]};
`;

export const arrowIconLeft = css`
    font-size: 1rem;
    color: ${Colour["icon-primary"]};
`;

export const timeSlotBarContainer = css`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
`;

export const containerDefault = css`
    height: ${MAX_LINE_HEIGHT * 16 + DEFAULT_CELL_SIZE}px;
`;

export const containerMinified = css`
    height: ${MAX_LINE_HEIGHT * 16 + MINIFIED_CELL_SIZE}px;
`;

export const timeMarkerWrapper = css`
    position: relative;
    white-space: nowrap;
    height: ${MAX_LINE_HEIGHT}rem;
`;

export const timeSlotWrapper = css`
    display: flex;
    white-space: nowrap;
`;

export const timeMarker = css`
    display: inline-block;
    position: relative;
    border-left: ${Border["width-010"]} ${Border.solid}
        ${Colour["border-stronger"]};
`;

export const timeMarkerDefault = css`
    width: ${DEFAULT_CELL_SIZE}px;
    height: 0.625rem;
`;

export const timeMarkerMinified = css`
    width: ${MINIFIED_CELL_SIZE}px;
    height: 0rem;
`;

export const timeMarkerLong = css`
    height: ${MAX_LINE_HEIGHT}rem;
`;

export const timeLabel = css`
    color: ${Colour["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;

export const timeSlotBorder = css`
    /* reset variable to prevent leaking to child components */
    ${tokens.border.left}: initial;

    position: absolute;
    top: ${MAX_LINE_HEIGHT}rem;
    z-index: 1;
    left: var(${tokens.border.left});
    border-right: ${Border["width-010"]} ${Border.solid}
        ${Colour["border-stronger"]};
`;

export const timeSlotBorderDefault = css`
    height: ${DEFAULT_CELL_SIZE}px;
`;

export const timeSlotBorderMinified = css`
    height: ${MINIFIED_CELL_SIZE}px;
`;

export const cellText = css`
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: inherit;
`;

export const timeSlotItem = css`
    /* reset variables to prevent leaking to child components */
    ${tokens.item.left}: initial;
    ${tokens.item.width}: initial;
    ${tokens.item.color}: initial;

    position: absolute;
    color: var(${tokens.item.color});
    left: var(${tokens.item.left});
    width: var(${tokens.item.width});
`;

export const timeSlotItemContent = css`
    width: 100%;
    height: 100%;
`;

export const timeSlotItemDefault = css`
    height: ${DEFAULT_CELL_SIZE}px;
`;

export const timeSlotItemMinified = css`
    height: ${MINIFIED_CELL_SIZE}px;
`;
