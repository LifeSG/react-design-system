import styled, { css, keyframes } from "styled-components";
import { Color } from "../color/color";
import { CheckboxProps, CheckboxSize } from "./types";
import {
    MinusSquareFillIcon,
    SquareFillIcon,
    SquareIcon,
    SquareTickFillIcon,
} from "@lifesg/react-icons";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    disabled?: boolean;
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

const sharedIconStyles = css`
    position: relative;
    border-radius: 4px;
    background: transparent;
    animation: 200ms ease-in-out ${fadeIn};
    width: 100%;
    height: 100%;
`;

export const Container = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;

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
`;

export const Input = styled.input<CheckboxProps>`
    position: absolute;
    opacity: 0;
`;

export const UncheckedIcon = styled(SquareIcon)<CheckboxProps>`
    ${sharedIconStyles}
    cursor: pointer;
    color: ${Color.Accent.Light[2]};
`;

export const DisabledUncheckedIcon = styled(SquareFillIcon)<CheckboxProps>`
    ${sharedIconStyles}
    color: ${Color.Neutral[4]};
    cursor: not-allowed;
`;

export const Checkmark = styled(SquareTickFillIcon)<CheckboxProps>`
    ${sharedIconStyles}
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    color: ${(props) =>
        props.disabled ? Color.Neutral[4](props) : Color.Primary(props)};
`;

export const Intermediate = styled(MinusSquareFillIcon)<CheckboxProps>`
    ${sharedIconStyles}
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    color: ${(props) =>
        props.disabled ? Color.Neutral[4](props) : Color.Primary(props)};
`;
