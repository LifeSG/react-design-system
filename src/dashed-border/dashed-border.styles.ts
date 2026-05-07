import { css } from "@linaria/core";

export const tokens = {
    rootRadius: "--fds-internal-dashedBorder-root-radius",
    rootBackgroundColor: "--fds-internal-dashedBorder-root-backgroundColor",
    overlayBackgroundImage: "--fds-internal-dashedBorder-overlay-backgroundImage",
} as const;

export const root = css`
    position: relative;
    overflow: hidden;
    background-color: var(${tokens.rootBackgroundColor}, transparent);
    border-radius: var(${tokens.rootRadius}, 0);
`;

export const overlay = css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: var(${tokens.overlayBackgroundImage}, none);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
`;
