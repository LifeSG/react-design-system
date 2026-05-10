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
`;

export const addonWrapperReadOnly = css`
    padding: 0;
`;

export const addonWrapperNoBorder = css`
    padding: 0;
`;

export const addonWrapperPositionRight = css`
    flex-direction: row-reverse;
`;

export const noAddonWrapper = css`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};
`;

export const noAddonWrapperReadOnly = css`
    padding: 0;
`;

export const noAddonWrapperNoBorder = css`
    padding: 0;
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
`;

export const labelAddonContainerDisabled = css`
    color: ${Colour["text-subtler"]};
`;

export const labelAddonContainerReadOnly = css`
    margin-right: ${Spacing["spacing-4"]};
`;

export const labelAddonContainerPositionRight = css`
    margin-right: 0;
    margin-left: ${Spacing["spacing-12"]};
`;

export const labelAddonContainerPositionRightReadOnly = css`
    margin-right: 0;
    margin-left: ${Spacing["spacing-4"]};
`;
