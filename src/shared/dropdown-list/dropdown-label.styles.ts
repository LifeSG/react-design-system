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
};

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// PRIMARY TEXT
// -----------------------------------------------------------------------------
export const primaryText = css`
    ${tokens.primaryText.maxLines}: 2;
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

export const primaryTextTruncateEnd = css`
    ${lineClampDynamicCss(tokens.primaryText.maxLines)}
`;

// -----------------------------------------------------------------------------
// SECONDARY TEXT
// -----------------------------------------------------------------------------
export const secondaryText = css`
    ${tokens.secondaryText.maxLines}: 2;
    color: ${Colour["text-subtlest"]};
    width: 100%;
    overflow-wrap: break-word;
`;

export const secondaryTextTruncateEnd = css`
    ${lineClampDynamicCss(tokens.secondaryText.maxLines)}
`;

export const secondaryTextNextLine = css`
    ${Font["body-md-semibold"]}
`;

export const secondaryTextInline = css`
    ${Font["body-baseline-regular"]}
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
`;

export const labelVariantDefault = css`
    ${Font["body-baseline-regular"]}
`;

export const labelVariantSmall = css`
    ${Font["body-md-regular"]}
`;

export const labelNextLine = css`
    display: flex;
    flex-direction: column;
`;

export const labelInline = css`
    .${primaryText} {
        display: inline;
    }

    .${secondaryText} {
        display: inline;
        margin-left: 0.5rem;
    }
`;

// -----------------------------------------------------------------------------
// TRUNCATION
// -----------------------------------------------------------------------------
export const truncateFirstLine = css`
    display: inline-block;
    width: 100%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`;

export const truncateFirstLineSingle = css`
    width: 50%;
`;

export const truncateSecondLine = css`
    display: inline-block;
    width: 100%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;

export const truncateSecondLineSingle = css`
    width: 50%;
`;
