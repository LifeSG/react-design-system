import { css } from "@linaria/core";

import { Colour, MediaQuery, Spacing } from "../../theme/tokens";

export const tokens = {
    backgroundColor: "--fds-internal-fadeWrapper-fade-backgroundColor",
};

export const wrapper = css`
    position: relative;
    width: 100%;
`;

export const fade = css`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
`;

export const fadeLeft = css`
    left: 0;

    ${MediaQuery.MaxWidth.lg} {
        background-image: linear-gradient(
            to right,
            var(${tokens.backgroundColor}, ${Colour.bg}),
            rgba(255, 255, 255, 0.001)
        );
    }
`;

export const fadeRight = css`
    right: 0;

    ${MediaQuery.MaxWidth.lg} {
        background-image: linear-gradient(
            to left,
            var(${tokens.backgroundColor}, ${Colour.bg}),
            rgba(255, 255, 255, 0.001)
        );
    }
`;

export const content = css`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;

export const fadeIndicatorButton = css`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        svg {
            color: ${Colour["icon"]};
        }
    }
`;

export const indicatorLeft = css`
    justify-content: left;
    padding-left: ${Spacing["spacing-8"]};
`;

export const indicatorRight = css`
    justify-content: right;
    padding-right: ${Spacing["spacing-8"]};
`;
