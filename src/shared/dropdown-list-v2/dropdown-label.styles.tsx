import styled, { css } from "styled-components";

import { V3_Colour, V3_Font } from "../../v3_theme";
import type {
    DropdownVariantType,
    LabelDisplayType,
    TruncateType,
} from "../dropdown-list/types";
import { lineClampDynamicCss } from "../styles";

const tokens = {
    primaryText: {
        maxLines: "--fds-dropdownLabel-primaryText-maxLines",
    },
    secondaryText: {
        maxLines: "--fds-dropdownLabel-secondaryText-maxLines",
    },
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface LabelStyleProps {
    $labelDisplayType: LabelDisplayType;
    $variant: DropdownVariantType;
}

interface LabelTextStyleProps {
    $labelDisplayType?: LabelDisplayType;
    $maxLines?: number;
    $selected?: boolean;
    $disabled?: boolean;
    $truncateType?: TruncateType;
    $bold?: boolean;
}

interface MatchedTextStyleProps {
    $variant: DropdownVariantType;
}

// =============================================================================
// STYLING
// =============================================================================

export const PrimaryText = styled.div<LabelTextStyleProps>`
    font-weight: ${(props) =>
        props.$bold
            ? V3_Font.Spec["weight-semibold"]
            : V3_Font.Spec["weight-regular"]};

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${V3_Colour["text-disabled"]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${V3_Colour["text-selected"]};
            `;
        } else {
            return css`
                color: ${V3_Colour["text"]};
            `;
        }
    }}
    width: 100%;
    overflow-wrap: break-word;

    ${(props) =>
        props.$truncateType === "end" &&
        lineClampDynamicCss(tokens.primaryText.maxLines)}
    ${tokens.primaryText.maxLines}: ${(props) => props.$maxLines || 2};
`;

export const SecondaryText = styled.div<LabelTextStyleProps>`
    color: ${V3_Colour["text-subtlest"]};
    width: 100%;
    overflow-wrap: break-word;

    ${(props) =>
        props.$truncateType === "end" &&
        lineClampDynamicCss(tokens.secondaryText.maxLines)}
    ${tokens.secondaryText.maxLines}: ${(props) => props.$maxLines || 2};

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    ${V3_Font["body-md-semibold"]}
                `;
            case "inline":
            default:
                return css`
                    ${V3_Font["body-baseline-regular"]}
                `;
        }
    }}
`;

export const MatchedText = styled.span<MatchedTextStyleProps>`
    font-weight: ${V3_Font.Spec["weight-semibold"]};
`;

export const Label = styled.div<LabelStyleProps>`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    display: flex;
                    flex-direction: column;
                `;
            case "inline":
                return css`
                    ${PrimaryText} {
                        display: inline;
                    }

                    ${SecondaryText} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `;
        }
    }}
`;

export const TruncateFirstLine = styled.div<LabelTextStyleProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`;

export const TruncateSecondLine = styled.div<LabelTextStyleProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;
