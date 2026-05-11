import { css } from "@linaria/core";

import { Colour } from "../theme";

export const tokens = {
    global: {
        scrollY: "--fds-internal-overlay-body-scrollY",
        scrollbarWidth: "--fds-internal-overlay-body-scrollbarWidth",
        overlayOpenClass: "lifesg-ds-overlay-open",
        overlayScrollLockClass: "lifesg-ds-overlay-scroll-lock",
    },
    root: {
        zIndex: "--fds-internal-overlay-root-zIndex",
    },
} as const;

export const root = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(${tokens.root.zIndex});
    visibility: hidden;
    width: 0;
    height: 0;

    :global() {
        .${tokens.global.overlayOpenClass} {
            padding-right: var(${tokens.global.scrollbarWidth}, 0) !important;
            overflow: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }

        .${tokens.global.overlayOpenClass}::-webkit-scrollbar {
            display: none;
        }

        .${tokens.global.overlayScrollLockClass} {
            position: fixed;
            top: var(${tokens.global.scrollY}, 0);
            bottom: 0;
        }
    }
`;

export const rootShow = css`
    visibility: visible;
    width: 100vw;
    height: 100%;
`;

export const wrapper = css`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Colour["overlay-strong"]};
    backdrop-filter: none;
    transition: opacity 200ms ease;
`;

export const wrapperStacked = css`
    background-color: ${Colour["overlay-subtle"]};
`;

export const wrapperBackgroundBlur = css`
    backdrop-filter: blur(10px);
`;

export const wrapperShow = css`
    visibility: visible;
    width: 100vw;
    height: 100%;
    pointer-events: auto;
    opacity: 1;
`;

export const wrapperHide = css`
    visibility: hidden;
    width: 0;
    height: 0;
    pointer-events: none;
    opacity: 0;
    transition-delay: 400ms;
`;

export const wrapperDisableTransition = css`
    transition: none;
    transition-delay: 0ms;
`;
