import { css } from "@linaria/core";

import { Colour, Motion } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const icon = css`
    @keyframes checkbox-icon-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: ${Motion["duration-150"]} ${Motion["ease-default"]}
        checkbox-icon-fade-in;
    width: 100%;
    height: 100%;
    transition: color ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const uncheckedIcon = css`
    color: ${Colour["icon-primary-subtlest"]};
`;

export const selectedIcon = css`
    color: ${Colour["icon-selected"]};
`;

export const iconDisabled = css`
    color: ${Colour["icon-disabled-subtle"]};
`;

export const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 2rem;
    width: 2rem;

    input:focus-visible + svg {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0px;
        border-radius: 4px;
    }
`;

export const containerSmall = css`
    height: 1.5rem;
    width: 1.5rem;
`;

export const input = css`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &[disabled],
    &[aria-disabled="true"] {
        cursor: not-allowed;
    }

    &:not([disabled]):not([aria-disabled="true"]):hover + svg {
        @media (pointer: fine) {
            color: ${Colour["icon-hover"]};
        }
    }
`;
