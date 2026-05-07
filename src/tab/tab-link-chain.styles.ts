import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme/tokens";

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
        flex-grow: 1;
        height: inherit;
        content: "";

        /* follows the border in ChainItem */
        border-bottom: ${Border["width-040"]} ${Border.solid} ${Colour.border};
    }
`;

export const chainItem = css`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: var(${tokens.chainItem.width}, auto);
    border-bottom: ${Border["width-040"]} ${Border.solid} ${Colour.border};
    ${tokens.chainItem.width}: initial;

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
    justify-content: center;
    width: 100%;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
    cursor: pointer;

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
    background: none;
    border: none;

    ${MediaQuery.MaxWidth.sm} {
        max-width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
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
    outline: none;
    opacity: 0;

    ${MediaQuery.MaxWidth.sm} {
        max-width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
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
