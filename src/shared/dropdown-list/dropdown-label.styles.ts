import { css } from "@linaria/core";

import { Colour, Font } from "../../theme";
import { lineClampDynamicCss } from "../styles";

export const tokens = {
    primaryText: {
        maxLines: "--fds-internal-dropdownLabel-primaryText-maxLines",
    },
    secondaryText: {
        maxLines: "--fds-internal-dropdownLabel-secondaryText-maxLines",
    },
} as const;

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// PRIMARY TEXT
// -----------------------------------------------------------------------------
export const primaryText = css`
    font-weight: ${Font.Spec["weight-regular"]};
    color: ${Colour["text"]};
    width: 100%;
    overflow-wrap: break-word;
`;

export const primaryTextBold = css`
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const primaryTextSelected = css`
    color: ${Colour["text-selected"]};
`;

export const primaryTextDisabled = css`
    color: ${Colour["text-disabled"]};
`;

export const primaryTextLabelInline = css`
    display: inline;
`;

export const primaryTextTruncateEnd = css`
    ${tokens.primaryText.maxLines}: 2;
    ${lineClampDynamicCss(tokens.primaryText.maxLines)}
`;

// -----------------------------------------------------------------------------
// SECONDARY TEXT
// -----------------------------------------------------------------------------
export const secondaryText = css`
    color: ${Colour["text-subtlest"]};
    width: 100%;
    overflow-wrap: break-word;
`;

export const secondaryTextNextLine = css`
    ${Font["body-md-semibold"]}
`;

export const secondaryTextInline = css`
    ${Font["body-baseline-regular"]}
`;

export const secondaryTextLabelInline = css`
    display: inline;
    margin-left: 0.5rem;
`;

export const secondaryTextTruncateEnd = css`
    ${tokens.secondaryText.maxLines}: 2;
    ${lineClampDynamicCss(tokens.secondaryText.maxLines)}
`;

// -----------------------------------------------------------------------------
// MATCHED TEXT
// -----------------------------------------------------------------------------
export const matchedText = css`
    font-weight: ${Font.Spec["weight-semibold"]};
`;

// -----------------------------------------------------------------------------
// LABEL
// -----------------------------------------------------------------------------
export const label = css`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
    ${Font["body-baseline-regular"]}
`;

export const labelVariantSmall = css`
    ${Font["body-md-regular"]}
`;

export const labelNextLine = css`
    display: flex;
    flex-direction: column;
`;

// -----------------------------------------------------------------------------
// TRUNCATION
// -----------------------------------------------------------------------------
export const baseTruncateStyle = css`
    display: inline-block;
    width: 100%;
    height: 1lh;
    overflow: hidden;
`;

export const truncateFirstLine = css`
    word-break: break-all;
`;

export const truncateSecondLine = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    direction: rtl;
    text-align: right;
`;

export const truncateLineSingle = css`
    width: 50%;
`;
