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

    width: 100%;
    height: 100%;
    transition: color ${Motion["duration-150"]} ${Motion["ease-default"]};
    animation: ${Motion["duration-150"]} ${Motion["ease-default"]} checkbox-icon-fade-in;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;

    input:focus-visible + svg {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0;
        border-radius: 4px;
    }
`;

export const containerSmall = css`
    width: 1.5rem;
    height: 1.5rem;
`;

export const input = css`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
`;

export const inputActive = css`
    &:hover + svg {
        @media (pointer: fine) {
            color: ${Colour["icon-hover"]};
        }
    }
`;

export const inputDisabledVisual = css`
    cursor: not-allowed;
`;
