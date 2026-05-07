import { css } from "@linaria/core";

import { ComponentToken, Motion, Spacing } from "../theme";

// =============================================================================
// MAIN BUTTON
// =============================================================================
export const main = css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    cursor: pointer;
    border-radius: ${ComponentToken.Button["radius"]};
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const mainSizeSmall = css`
    height: 2.5rem;
    min-height: unset;
`;

export const mainSizeLarge = css`
    min-height: 4rem;
`;

export const mainStyleRedFilled = css`
    background-color: #F4333D;
    border: none;

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: #B0262D;
        }
    }
`;

export const mainStyleWhiteFilled = css`
    background-color: #FFFFFF;
    border: 1px #C8C9CC solid;

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: #F5F5F7;
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
