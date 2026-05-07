import { css } from "@linaria/core";

import { MediaQuery, Motion } from "../theme";

const CLOSED_POSITION_OFFSET = "-3%";
const IS_INITIAL_OR_CLOSE = ':is([data-status="initial"], [data-status="close"])';

export const tokens = {
    container: {
        verticalHeight: "--fds-internal-modalV2-container-verticalHeight",
        offsetTop: "--fds-internal-modalV2-container-offsetTop",
    },
} as const;

export const container = css`
    ${tokens.container.verticalHeight}: initial;
    ${tokens.container.offsetTop}: initial;

    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;

    ${MediaQuery.MaxWidth.sm} {
        top: var(${tokens.container.offsetTop}, 0);
        height: calc(var(${tokens.container.verticalHeight}, 1vh) * 100);
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

    &[data-animation-from="top"]${IS_INITIAL_OR_CLOSE} {
        top: ${CLOSED_POSITION_OFFSET};
    }

    &[data-animation-from="top"][data-status="open"] {
        top: 0;
    }

    &[data-animation-from="bottom"]${IS_INITIAL_OR_CLOSE} {
        bottom: ${CLOSED_POSITION_OFFSET};
    }

    &[data-animation-from="bottom"][data-status="open"] {
        bottom: 0;
    }

    &[data-animation-from="left"]${IS_INITIAL_OR_CLOSE} {
        left: ${CLOSED_POSITION_OFFSET};
    }

    &[data-animation-from="left"][data-status="open"] {
        left: 0;
    }

    &[data-animation-from="right"]${IS_INITIAL_OR_CLOSE} {
        right: ${CLOSED_POSITION_OFFSET};
    }

    &[data-animation-from="right"][data-status="open"] {
        right: 0;
    }
`;

export const scrollContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    pointer-events: none;
`;

export const modalContainer = css`
    width: 100%;
    pointer-events: auto;
    outline: none;
`;
