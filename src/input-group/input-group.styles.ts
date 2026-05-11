import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const addonWrapper = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};

    &[data-read-only] {
        padding: 0;
    }

    &[data-no-border] {
        padding: 0;
    }

    &[data-position="right"] {
        flex-direction: row-reverse;
    }
`;

export const noAddonWrapper = css`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};

    &[data-read-only] {
        padding: 0;
    }

    &[data-no-border] {
        padding: 0;
    }
`;

export const labelAddonContainer = css`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-12"]};

    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    &[data-disabled] {
        color: ${Colour["text-subtler"]};
    }

    &[data-read-only] {
        margin-right: ${Spacing["spacing-4"]};
    }

    &[data-position="right"] {
        margin-right: 0;
        margin-left: ${Spacing["spacing-12"]};
    }

    &[data-position="right"][data-read-only] {
        margin-right: 0;
        margin-left: ${Spacing["spacing-4"]};
    }
`;
