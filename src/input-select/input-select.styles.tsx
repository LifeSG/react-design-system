import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css, keyframes } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { TruncateType } from "../shared/dropdown-list/types";
import { Text, TextStyle } from "../text";
import { Transition } from "../transition";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
export interface InputSelectStyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    error?: boolean;
    expanded?: boolean;
}

export interface ValueLabelStyleProps {
    truncateType?: TruncateType;
}

// =============================================================================
// STYLING
// =============================================================================
const BORDER_RADIUS = "4px";

export const Wrapper = styled.div`
    position: relative;
    min-height: 3rem;
    height: 3rem;
    width: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        height: auto;
    }
`;

export const Selector = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0.702rem 1rem; // To make it exactly 3rem height
    width: 100%;
    border-radius: ${BORDER_RADIUS};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }
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

export const ElementBoundary = styled.div<InputSelectStyleProps>`
    position: relative;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: ${BORDER_RADIUS};
    background: ${Color.Neutral[8]};

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Color.Shadow.Accent};
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
                background: ${Color.Neutral[6](props)};

                ${Selector} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.$readOnly) {
            return css`
                border: none;
                background: transparent !important;

                ${Selector} {
                    padding-left: 0rem;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: inset 0 0 4px 1px ${Color.Shadow.Red};
                }
            `;
        }
    }}
`;

export const IconContainer = styled.div<InputSelectStyleProps>`
    transform: rotate(${(props) => (props.expanded ? 180 : 0)}deg);
    transition: ${Transition.Base};
    margin-left: 1rem;
`;

export const StyledChevronIcon = styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    height: ${TextStyle.Body.fontSize}rem;
    width: ${TextStyle.Body.fontSize}rem;
`;

export const Divider = styled.div`
    height: 1px;
    background: ${Color.Neutral[5]};
    margin: 0 0.5rem;
`;

export const LabelContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const ValueLabel = styled(Text.Body)<ValueLabelStyleProps>`
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
    color: ${Color.Neutral[3]};
`;
