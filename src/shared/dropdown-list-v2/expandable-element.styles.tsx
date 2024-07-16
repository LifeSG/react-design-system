import styled, { css } from "styled-components";
import { Color } from "../../color";
import { TextStyle, TextStyleHelper } from "../../text";
import { Transition } from "../../transition";
import { BasicButton } from "../input-wrapper/input-wrapper";
import { DropdownVariantType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
export interface StyleProps {
    $disabled?: boolean;
    $expanded?: boolean;
    $readOnly?: boolean;
    $variant?: DropdownVariantType;
}

// =============================================================================
// STYLING
// =============================================================================
export const Selector = styled(BasicButton)<StyleProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${(props) =>
        props.$variant === "small" ? "0.4375rem 1rem" : "0.6875rem 1rem"};

    ${(props) =>
        TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "regular"
        )}

    :disabled {
        cursor: not-allowed;
    }
`;

export const IconContainer = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${Transition.Base};

    svg {
        color: ${Color.Neutral[3]};
        ${(props) => {
            const size =
                props.$variant === "small"
                    ? TextStyle.BodySmall.fontSize
                    : TextStyle.Body.fontSize;
            return css`
                height: ${size}rem;
                width: ${size}rem;
            `;
        }}
    }
`;
