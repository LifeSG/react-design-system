import { css } from "@linaria/core";

import { Border, Colour, Radius, Spacing } from "../../theme";

export const tokens = {
    block: {
        mainColor: "--fds-internal-timetable-rowCellBlock-mainColor",
        altColor: "--fds-internal-timetable-rowCellBlock-altColor",
        width: "--fds-internal-timetable-rowCellBlock-width",
    },
};

export const blockContainer = css`
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const blockContainerOnTheHour = css`
    box-shadow: inset -0.5px 0px ${Colour["border-primary"]};
`;

export const wrapper = css`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`;

export const gap = css`
    width: 2px;
    height: 100%;
`;

export const block = css`
    /* reset variables to prevent leaking to child components */
    ${tokens.block.width}: initial;
    ${tokens.block.mainColor}: initial;
    ${tokens.block.altColor}: initial;

    height: 100%;
    width: var(${tokens.block.width});
    border-radius: ${Radius["sm"]};
    box-sizing: border-box;
    padding: ${Spacing["spacing-4"]};
`;

export const blockTitle = css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const blockDescription = css`
    color: ${Colour["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
