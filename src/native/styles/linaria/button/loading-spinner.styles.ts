import { css } from "@linaria/core";

export const root = css`
    display: inline-block;
    position: relative;
    width: var(--fds-internal-loading-spinner-size, 1em);
    height: var(--fds-internal-loading-spinner-size, 1em);
    color: var(--fds-internal-loading-spinner-colour, currentColor);
`;

export const ring = css`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
    animation: fds-loading-spinner-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1)
        infinite;

    @keyframes fds-loading-spinner-rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const ring2 = css`
    animation-delay: -0.45s;
`;

export const ring3 = css`
    animation-delay: -0.3s;
`;

export const ring4 = css`
    animation-delay: -0.15s;
`;
