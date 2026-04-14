import { css } from "@linaria/core";

import { MediaQuery, Motion } from "../theme";

const CLOSED_POSITION_OFFSET = "-3%";
const IS_INITIAL_OR_CLOSE =
    ':is([data-status="initial"], [data-status="close"])';

export const tokens = {
    container: {
        verticalHeight: "--fds-internal-modalV2-container-verticalHeight",
        offsetTop: "--fds-internal-modalV2-container-offsetTop",
    },
} as const;

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
