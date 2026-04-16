import styled, { css } from "styled-components";

import { V3_Colour, V3_Font } from "../../v3_theme";
import type { DropdownVariantType, TruncateType } from "../dropdown-list/types";
import { lineClampCss } from "../styles";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
export interface DropdownWrapperStyleProps {
    $disabled?: boolean;
    $readOnly?: boolean;
    $error?: boolean;
    $expanded?: boolean;
}

export interface ValueLabelStyleProps {
    $truncateType?: TruncateType;
    $variant?: DropdownVariantType | undefined;
}

export interface SelectorStyleProps {
    $variant?: DropdownVariantType | undefined;
}

export interface LabelContainerStyleProps {
    $disabled?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const getHeight = (variant?: DropdownVariantType | undefined) => {
    return variant === "small" ? 2.5 : 3;
};

export const Wrapper = styled.div<SelectorStyleProps>`
    position: relative;
    width: 100%;
    ${(props) => {
        const height = getHeight(props.$variant);
        return css`
            min-height: ${height}rem;
            height: ${height}rem; // Need this to persist the height when expanding or collapsing list
        `;
    }}
`;

export const LabelContainer = styled.div<LabelContainerStyleProps>`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${V3_Colour["text-disabled"]};
            `;
        }
    }}
`;

export const ValueLabel = styled.div<ValueLabelStyleProps>`
    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}
    text-align: left;
    ${(props) => {
        switch (props.$truncateType) {
            case "middle":
                break;
            case "end":
            default:
                return css`
                    ${lineClampCss(1)}
                `;
        }
    }}
    overflow: hidden;
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${V3_Colour["text-subtler"]};
`;
