import { css } from "@linaria/core";

import { ComponentToken, Motion, Spacing } from "../theme";

export type MainButtonSize = "default" | "small" | "large";

// =============================================================================
// MAIN BUTTON
// =============================================================================
export const main = css`
    padding: var(${Spacing["spacing-8"]}) var(${Spacing["spacing-16"]});
    transition: all var(${Motion["duration-250"]})
        var(${Motion["ease-default"]});
    border-radius: var(${ComponentToken.Button["radius"]});
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
`;

export const mainSizeSmall = css`
    height: 2.5rem;
    min-height: unset;
`;

export const mainSizeLarge = css`
    min-height: 4rem;
`;

export const mainStyleRedFilled = css`
    background-color: #f4333d;
    border: none;

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: #b0262d;
        }
    }
`;

export const mainStyleWhiteFilled = css`
    background-color: #ffffff;
    border: 1px #c8c9cc solid;

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: #f5f5f7;
        }
    }
`;

// =============================================================================
// SVG CONTAINER
// =============================================================================
export const svgContainer = css`
    height: 1.5rem;

    img {
        height: 100%;
    }
`;

export const svgContainerSizeLarge = css`
    height: 2.5rem;
`;
