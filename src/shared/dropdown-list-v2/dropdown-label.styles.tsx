import styled, { css } from "styled-components";
import { Color } from "../../color";
import { TextStyleHelper } from "../../text";
import {
    DropdownVariantType,
    LabelDisplayType,
    TruncateType,
} from "../dropdown-list/types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface LabelStyleProps {
    $bold?: boolean;
    $labelDisplayType?: LabelDisplayType;
    $maxLines?: number;
    $selected?: boolean;
    $truncateType?: TruncateType;
    $variant?: DropdownVariantType;
}

// =============================================================================
// STYLING
// =============================================================================

const lineClampCss = css<LabelStyleProps>`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${(props) => props.$maxLines || 2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`;

export const PrimaryText = styled.div<LabelStyleProps>`
    ${(props) =>
        TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            props.$bold ? "semibold" : "regular"
        )}
    color: ${(props) => (props.$selected ? Color.Primary : Color.Neutral[1])};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}
`;

export const SecondaryText = styled.div<LabelStyleProps>`
    color: ${Color.Neutral[4]};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}
                `;
            case "inline":
            default:
                return css`
                    ${TextStyleHelper.getTextStyle("Body", "regular")}
                `;
        }
    }}
`;

export const Label = styled.div<LabelStyleProps>`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

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

export const TruncateFirstLine = styled.div<LabelStyleProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`;

export const TruncateSecondLine = styled.div<LabelStyleProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;
