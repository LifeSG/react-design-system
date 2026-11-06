import { css } from "@linaria/core";

import { Colour, Font, Motion, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const comboboxButton = css`
    position: absolute;
    inset: 0;
    padding: 0;
    border: none;
    border-radius: inherit;
    background: transparent;
    color: transparent;
    cursor: inherit;
    outline: none;

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

export const selector = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px);
    ${Font["body-baseline-regular"]}
`;

export const content = css`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    gap: inherit;
    min-width: 0;
    pointer-events: none;

    button {
        pointer-events: auto;
    }
`;

export const selectorEditable = css`
    padding: ${Spacing["spacing-16"]};
    cursor: pointer;
`;

export const selectorDynamicHeight = css`
    height: auto;
    min-height: calc(3rem - 2px);

    &.${selectorEditable} {
        padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    }
`;

export const selectorVariantSmall = css`
    ${Font["body-md-regular"]}
    height: calc(2.5rem - 2px);

    &.${selectorDynamicHeight} {
        height: auto;
    }
`;

export const selectorDisabled = css`
    cursor: not-allowed;
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
