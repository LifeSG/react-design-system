import { css } from "@linaria/core";
import { Radius } from "../theme";

export const rootClassName = css`
    position: relative;
`;

export const overlayClassName = css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

export const radiusClassMap = {
    [Radius.none]: css`
        overflow: hidden;
        border-radius: ${Radius.none};
    `,
    [Radius.xs]: css`
        overflow: hidden;
        border-radius: ${Radius.xs};
    `,
    [Radius.sm]: css`
        overflow: hidden;
        border-radius: ${Radius.sm};
    `,
    [Radius.md]: css`
        overflow: hidden;
        border-radius: ${Radius.md};
    `,
    [Radius.lg]: css`
        overflow: hidden;
        border-radius: ${Radius.lg};
    `,
    [Radius.full]: css`
        overflow: hidden;
        border-radius: ${Radius.full};
    `,
} as const;
