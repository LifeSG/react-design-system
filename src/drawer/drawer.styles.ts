import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Shadow,
    Spacing,
} from "../theme";

// =============================================================================
// STYLING HELPERS
// =============================================================================
// FloatingUI transition styles

// =============================================================================
// STYLING
// =============================================================================
export const container = css`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;

    height: 100%;
    width: 40%;
    overflow: hidden;

    background-color: ${Colour["bg"]};
    box-shadow: ${Shadow["lg-subtle"]};
    border-top-left-radius: ${Radius["md"]};
    border-bottom-left-radius: ${Radius["md"]};

    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${Motion["duration-800"]};
        transition-timing-function: ${Motion["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${Motion["duration-800"]};
        transition-timing-function: ${Motion["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }

    ${MediaQuery.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const header = css`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    padding: ${Spacing["spacing-32"]} ${Spacing["spacing-16"]}
        ${Spacing["spacing-16"]}
        calc(${Font.Spec["heading-lh-md"]} + ${Spacing["spacing-32"]});
    background-color: ${Colour["bg"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    ${MediaQuery.MaxWidth.lg} {
        gap: ${Spacing["spacing-8"]};
        padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]}
            ${Spacing["spacing-16"]}
            calc(${Font.Spec["heading-lh-md"]} + ${Spacing["spacing-24"]});
    }
`;

export const closeButton = css`
    color: ${Colour["icon"]};
    padding: 0;
    position: absolute;
    top: ${Spacing["spacing-32"]};
    left: ${Spacing["spacing-16"]};
    &:active,
    &:focus {
        color: ${Colour["icon-hover"]};
    }

    svg {
        height: ${Font.Spec["heading-lh-md"]};
        width: ${Font.Spec["heading-lh-md"]};
    }
`;

export const heading = css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const content = css`
    flex: 1;
    overflow-y: auto;
`;
