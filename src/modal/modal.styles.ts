import { css } from "@linaria/core";

import { MediaQuery } from "../theme";

export const tokens = {
    container: {
        verticalHeight: "--fds-internal-modal-container-verticalHeight",
        offsetTop: "--fds-internal-modal-container-offsetTop",
    },
} as const;

export const container = css`
    ${tokens.container.verticalHeight}: initial;
    ${tokens.container.offsetTop}: initial;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    ${MediaQuery.MaxWidth.sm} {
        top: var(${tokens.container.offsetTop}, 0);
        height: calc(var(${tokens.container.verticalHeight}, 1vh) * 100);
    }
`;

export const containerFromTop = css`
    top: -3%;
`;

export const containerFromBottom = css`
    bottom: -3%;
`;

export const containerFromLeft = css`
    left: -3%;
`;

export const containerFromRight = css`
    right: -3%;
`;

export const containerShow = css`
    opacity: 1;
    transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
    transition-delay: 200ms;
`;

export const containerHide = css`
    opacity: 0;
    transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
`;

export const containerFromTopShow = css`
    top: 0;
`;

export const containerFromBottomShow = css`
    bottom: 0;
`;

export const containerFromLeftShow = css`
    left: 0;
`;

export const containerFromRightShow = css`
    right: 0;
`;
