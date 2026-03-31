import { css } from "@linaria/core";

import { Colour } from "../theme";

export const tokens = {
    root: {
        zIndex: "--fds-internal-overlay-root-zIndex",
    },
} as const;

export const root = css`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: var(${tokens.root.zIndex});
`;

export const rootShow = css`
    height: 100%;
    width: 100vw;
    visibility: visible;
`;

export const wrapper = css`
    position: absolute;
    left: 0;
    top: 0;
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
    opacity: 1;
    pointer-events: auto;
    height: 100%;
    width: 100vw;
`;

export const wrapperHide = css`
    visibility: hidden;
    opacity: 0;
    transition-delay: 400ms;
    pointer-events: none;
    height: 0;
    width: 0;
`;

export const wrapperDisableTransition = css`
    transition: none;
    transition-delay: 0ms;
`;
