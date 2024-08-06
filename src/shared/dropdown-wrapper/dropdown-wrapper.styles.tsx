import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css, keyframes } from "styled-components";
import { v2_Color } from "../../v2_color";
import { v2_DesignToken } from "../../v2_design-token";
import { TextStyle, TextStyleHelper } from "../../text";
import { Transition } from "../../transition";
import { DropdownVariantType, TruncateType } from "../dropdown-list/types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
export interface DropdownWrapperStyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    error?: boolean;
    expanded?: boolean;
}

export interface ValueLabelStyleProps {
    truncateType?: TruncateType;
    $variant?: DropdownVariantType | undefined;
}

export interface SelectorStyleProps {
    $variant?: DropdownVariantType | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const BORDER_RADIUS = "4px";

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
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${(props) => getHeight(props.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${BORDER_RADIUS};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${v2_Color.Accent.Light[3]};
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
	}
`;

export const ElementBoundary = styled.div<DropdownWrapperStyleProps>`
    position: relative;
    border: 1px solid ${v2_Color.Neutral[5]};
    border-radius: ${BORDER_RADIUS};
    background: ${v2_Color.Neutral[8]};

    :focus-within {
        border: 1px solid ${v2_Color.Accent.Light[1]};
        box-shadow: ${v2_DesignToken.InputBoxShadow};
    }

    ${(props) => {
        if (props.expanded) {
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
        if (props.disabled) {
            return css`
                background: ${v2_Color.Neutral[6](props)};

                ${Selector} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${v2_Color.Neutral[5](props)};
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

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.error) {
            return css`
                border: 1px solid ${v2_Color.Validation.Red.Border(props)};

                :focus-within {
                    border: 1px solid ${v2_Color.Validation.Red.Border(props)};
                    box-shadow: ${v2_DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;

export const IconContainer = styled.div<DropdownWrapperStyleProps>`
    transform: rotate(${(props) => (props.expanded ? 180 : 0)}deg);
    transition: ${Transition.Base};
    margin-left: 1rem;
`;

export const StyledChevronIcon = styled(ChevronDownIcon)<SelectorStyleProps>`
    color: ${v2_Color.Neutral[3]};
    ${(props) => {
        let size = TextStyle.Body.fontSize;
        if (props.$variant === "small") {
            size = TextStyle.BodySmall.fontSize;
        }
        return css`
            height: ${size}rem;
            width: ${size}rem;
        `;
    }}
`;

export const Divider = styled.div`
    height: 1px;
    background: ${v2_Color.Neutral[5]};
    margin: 0 0.5rem;
`;

export const LabelContainer = styled.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;

export const ValueLabel = styled.div<ValueLabelStyleProps>`
    ${(props) =>
        TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "regular"
        )}
    text-align: left;
    line-height: 1.375rem;
    ${(props) => {
        switch (props.truncateType) {
            case "middle":
                break;
            case "end":
            default:
                return css`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `;
        }
    }}
    overflow: hidden;
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${v2_Color.Neutral[3]};
`;
