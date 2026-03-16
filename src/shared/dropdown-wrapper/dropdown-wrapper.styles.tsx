import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css, keyframes } from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";
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

export const baseSelectorCSS = css<SelectorStyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${V3_Spacing["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${(props) => getHeight(props.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${V3_Radius["sm"]};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${V3_Colour["border-focus"]};
    }
`;

export const Selector = styled.button<SelectorStyleProps>`
    ${baseSelectorCSS}
    cursor: pointer;
`;

export const SelectorDiv = styled.div<SelectorStyleProps>`
    ${baseSelectorCSS}
`;

// Note: Need this to only switch back after
// react-spring animation ends
const zindexPositionHide = keyframes`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`;

export const ElementBoundary = styled.div<DropdownWrapperStyleProps>`
    position: relative;
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    background: ${V3_Colour["bg"]};
    overflow: hidden;

    &:focus-within {
        border-color: ${V3_Colour["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${V3_Colour["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${(props) => {
        if (props.$expanded) {
            return css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `;
        } else {
            return css`
                animation: ${zindexPositionHide} 0.5s ease-in-out;
            `;
        }
    }}

    ${(props) => {
        if (props.$disabled) {
            return css`
                background: ${V3_Colour["bg-disabled"]};

                ${Selector} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${V3_Colour["border"]};
                    box-shadow: none;
                }
            `;
        } else if (props.$readOnly) {
            return css`
                border: none;
                background: transparent !important;

                ${Selector} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                border-color: ${V3_Colour["border-error"]};

                &:focus-within {
                    border-color: ${V3_Colour["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${V3_Colour["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `;
        }
    }}
`;

export const IconContainer = styled.div<DropdownWrapperStyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${V3_Motion["duration-250"]}
        ${V3_Motion["ease-default"]};
    margin-left: ${V3_Spacing["spacing-16"]};
`;

export const StyledChevronIcon = styled(ChevronDownIcon)<SelectorStyleProps>`
    color: ${V3_Colour["icon"]};
`;

export const Divider = styled.div`
    height: 1px;
    background: ${V3_Colour["border"]};
    margin: 0 ${V3_Spacing["spacing-8"]};
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
