import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const labelContainer = css`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const label = css`
    display: inline-block;
    ${Font["form-label"]}
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-subtle"]};
`;

export const errorIcon = css`
    flex-shrink: 0;
    width: 1em;
    height: 1lh;
    color: ${Colour["icon-error-strong"]};
`;

export const errorMessageContainer = css`
    ${Font["body-sm-semibold"]}
    display: flex;
    gap: ${Spacing["spacing-4"]};
    margin-top: ${Spacing["spacing-8"]};
`;

export const errorMessage = css`
    ${Font["body-sm-semibold"]}
    margin-bottom: 0;
    color: ${Colour["text-error"]};
    outline: none;
`;

export const subtitle = css`
    ${Font["form-description"]}
    display: block;
    color: ${Colour["text-subtler"]};
`;
