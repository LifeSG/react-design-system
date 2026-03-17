import { css } from "@linaria/core";

export const root = css`
    position: relative;
    overflow: hidden;
    border-radius: var(--dashed-border-radius, 0);
    background-color: var(--dashed-border-bg-color, transparent);
`;

export const overlay = css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: var(--dashed-border-bg-image, none);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    pointer-events: none;
`;
