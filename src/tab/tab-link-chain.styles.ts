import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "../theme/tokens";

export const tokens = {
    chainItem: {
        width: "--fds-internal-tab-chainItem-width",
    },
};

export const chain = css`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`;

export const chainFullWidthIndicator = css`
    &::after {
        content: "";
        height: inherit;
        flex-grow: 1;
        /* follows the border in ChainItem */
        border-bottom: ${Border["width-040"]} ${Border.solid} ${Colour.border};
    }
`;

export const chainItem = css`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${Border["width-040"]} ${Border.solid} ${Colour.border};
    ${tokens.chainItem.width}: initial;
    width: var(${tokens.chainItem.width}, auto);

    ${MediaQuery.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`;

export const chainItemActive = css`
    border-color: ${Colour["border-primary"]};
`;

export const flexRow = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const chainLink = css`
    /* position: relative; */
    flex-direction: row;
    gap: 0.5rem;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-16"]}
        ${Spacing["spacing-20"]};
    cursor: pointer;
    width: 100%;
    justify-content: center;

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
        border-radius: ${Radius.sm};
    }
`;

export const chainLinkReversed = css`
    flex-direction: row-reverse;
`;

export const labelContainer = css`
    position: relative;
`;

export const label = css`
    border: none;
    background: none;

    ${MediaQuery.MaxWidth.sm} {
        max-width: 20ch;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export const deselectedLabel = css`
    position: absolute;
    ${Font["body-baseline-regular"]}
    color: ${Colour["text-subtler"]};
    opacity: 1;
`;

export const deselectedLabelActive = css`
    opacity: 0;
`;

export const selectedLabel = css`
    ${Font["body-baseline-semibold"]}
    color: ${Colour["text-primary"]};
    opacity: 0;
    outline: none;

    ${MediaQuery.MaxWidth.sm} {
        max-width: 20ch;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export const selectedLabelActive = css`
    opacity: 1;
`;

export const customFadeWrapper = css`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${Spacing["spacing-4"]};
    }
`;
