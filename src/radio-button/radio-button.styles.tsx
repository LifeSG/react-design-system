import styled from "styled-components";
import { RadioButtonProps } from "./types";
import { Colour } from "../theme";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${Colour["icon-primary-subtlest"]};

    ${(props) => {
        if (props.$disabled) {
            return `
				border: 2px solid ${Colour["border-disabled"](props)};
			`;
        }
    }}

    &:hover {
        border: 2px solid
            ${(props) =>
                props.$disabled
                    ? Colour["border-disabled"](props)
                    : Colour["icon-hover"](props)};
    }
`;

export const Input = styled.input<RadioButtonProps>`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`;

export const Checkmark = styled.div<StyleProps>`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${(props) => (props.$selected ? 1 : 0)};
    transition: all 200ms ease-in-out;
    background: ${(props) =>
        props.$disabled
            ? Colour["border-disabled"](props)
            : Colour["icon-selected"](props)};
    border-radius: 50%;
    border: 1px solid transparent;
`;
