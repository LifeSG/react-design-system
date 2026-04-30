import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const labelContainer = css`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const label = css`
    color: ${Colour["text-subtle"]};
    display: inline-block;
    ${Font["form-label"]}
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const errorIcon = css`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Colour["icon-error-strong"]};
`;

export const errorMessageContainer = css`
    ${Font["body-sm-semibold"]}
    display: flex;
    gap: ${Spacing["spacing-4"]};
    margin-top: ${Spacing["spacing-8"]};
`;

export const errorMessage = css`
    color: ${Colour["text-error"]};
    ${Font["body-sm-semibold"]}
    margin-bottom: 0;
    outline: none;
`;

export const subtitle = css`
    ${Font["form-description"]}
    color: ${Colour["text-subtler"]};
    display: block;
`;
