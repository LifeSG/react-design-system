import { css } from "@linaria/core";

import { Colour, Font, Motion, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================

export const selector = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;

    ${Font["body-baseline-regular"]}
    height: calc(3rem - 2px);

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

export const selectorVariantSmall = css`
    ${Font["body-md-regular"]}
    height: calc(2.5rem - 2px);
`;

export const selectorReadOnly = css`
    padding: 0 ${Spacing["spacing-16"]};
`;

export const selectorEditable = css`
    padding: ${Spacing["spacing-16"]};
`;

export const iconContainer = css`
    display: flex;
    align-items: center;
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};

    svg {
        color: ${Colour["icon"]};
        height: 1em;
        width: 1em;
    }
`;

export const iconContainerExpanded = css`
    transform: rotate(180deg);
`;
