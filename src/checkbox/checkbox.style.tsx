import styled, { css, keyframes } from "styled-components";
import { Color } from "../color/color";
import { CheckboxProps, CheckboxSize } from "./types";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $disabled?: boolean;
    $displaySize?: CheckboxSize;
}

// =============================================================================
// STYLING
// =============================================================================
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${(props) => {
        let height: string;
        let width: string;

        switch (props.$displaySize) {
            case "small":
                height = "1.5rem";
                width = "1.5rem";
                break;
            default:
                height = "2rem";
                width = "2rem";
                break;
        }

        return css`
            height: ${height};
            width: ${width};
        `;
    }}

    svg {
        border-radius: 4px;
        background: transparent;
        animation: 200ms ease-in-out ${fadeIn};
        width: 100%;
        height: 100%;
        color: ${(props) =>
            props.$disabled ? Color.Neutral[4](props) : Color.Primary(props)};
    }
`;

export const Input = styled.input<CheckboxProps>`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
