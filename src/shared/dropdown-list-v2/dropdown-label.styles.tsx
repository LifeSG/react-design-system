import styled, { css } from "styled-components";
import { Colour, Font } from "../../theme";
import {
    DropdownVariantType,
    LabelDisplayType,
    TruncateType,
} from "../dropdown-list/types";
import { lineClampCss } from "../styles";

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
            ? Font.Spec["weight-semibold"]
            : Font.Spec["weight-regular"]};
    color: ${(props) =>
        props.$selected ? Colour["text-selected"] : Colour["text"]};
    width: 100%;

    ${(props) =>
        props.$truncateType === "end" && lineClampCss(props.$maxLines || 2)}
    overflow-wrap: break-word;
`;

export const SecondaryText = styled.div<LabelTextStyleProps>`
    color: ${Colour["text-subtlest"]};
    width: 100%;

    ${(props) =>
        props.$truncateType === "end" && lineClampCss(props.$maxLines || 2)}
    overflow-wrap: break-word;

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    ${Font["body-md-semibold"]}
                `;
            case "inline":
            default:
                return css`
                    ${Font["body-baseline-regular"]}
                `;
        }
    }}
`;

export const MatchedText = styled.span<MatchedTextStyleProps>`
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const Label = styled.div<LabelStyleProps>`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${(props) =>
        props.$variant === "small"
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}

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
