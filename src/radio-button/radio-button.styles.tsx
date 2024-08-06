import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { RadioButtonProps } from "./types";

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
    border: 2px solid ${V2_Color.Accent.Light[2]};

    ${(props) => {
        if (props.$disabled) {
            return `
				border: 2px solid ${V2_Color.Neutral[4](props)};
			`;
        }
    }}
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
        props.$disabled ? V2_Color.Neutral[4](props) : V2_Color.Primary(props)};
    border-radius: 50%;
    border: 1px solid transparent;
`;
