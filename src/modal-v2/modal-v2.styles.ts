import { css } from "@linaria/core";

import { MediaQuery, Motion } from "../theme";

export const tokens = {
    container: {
        verticalHeight: "--fds-internal-modalV2-container-verticalHeight",
        offsetTop: "--fds-internal-modalV2-container-offsetTop",
    },
} as const;

export const containerFromTop = "modalV2ContainerFromTop";
export const containerFromBottom = "modalV2ContainerFromBottom";
export const containerFromLeft = "modalV2ContainerFromLeft";
export const containerFromRight = "modalV2ContainerFromRight";

export const container = css`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${tokens.container.verticalHeight}: initial;
    ${tokens.container.offsetTop}: initial;

    ${MediaQuery.MaxWidth.sm} {
        height: calc(var(${tokens.container.verticalHeight}, 1vh) * 100);
        top: var(${tokens.container.offsetTop}, 0px);
    }

    &[data-status="initial"] {
        opacity: 0;
    }

    &[data-status="open"] {
        opacity: 1;
        transition: all ${Motion["duration-250"]} ${Motion["ease-entrance"]};
        transition-delay: ${Motion["duration-150"]};
    }

    &[data-status="close"] {
        opacity: 0;
        transition: all ${Motion["duration-250"]} ${Motion["ease-exit"]};
    }

    &.${containerFromTop}[data-status="initial"],
    &.${containerFromTop}[data-status="close"] {
        top: -3%;
    }

    &.${containerFromTop}[data-status="open"] {
        top: 0;
    }

    &.${containerFromBottom}[data-status="initial"],
    &.${containerFromBottom}[data-status="close"] {
        bottom: -3%;
    }

    &.${containerFromBottom}[data-status="open"] {
        bottom: 0;
    }

    &.${containerFromLeft}[data-status="initial"],
    &.${containerFromLeft}[data-status="close"] {
        left: -3%;
    }

    &.${containerFromLeft}[data-status="open"] {
        left: 0;
    }

    &.${containerFromRight}[data-status="initial"],
    &.${containerFromRight}[data-status="close"] {
        right: -3%;
    }

    &.${containerFromRight}[data-status="open"] {
        right: 0;
    }
`;

export const scrollContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`;

export const modalContainer = css`
    pointer-events: auto;
    width: 100%;
    outline: none;
`;
