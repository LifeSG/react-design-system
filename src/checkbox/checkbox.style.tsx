import styled, { css, keyframes } from "styled-components";
import { CheckboxProps, CheckboxSize } from "./types";
import { Colour, Motion } from "../theme";
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
    $unchecked?: boolean;
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

    ${(props) => css`
        height: ${props.$displaySize === "small" ? "1.5rem" : "2rem"};
        width: ${props.$displaySize === "small" ? "1.5rem" : "2rem"};
    `}
`;

const BaseIconStyles = css`
    animation: 200ms ease-in-out ${fadeIn};
    width: 100%;
    height: 100%;
    transition: color ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const StyledUncheckedIcon = styled(SquareIcon)<StyleProps>`
    ${BaseIconStyles}
    color: ${Colour["icon-primary-subtlest"]};
`;

export const StyledUncheckedDisabledIcon = styled(SquareFillIcon)<StyleProps>`
    ${BaseIconStyles}
    color: ${Colour["icon-disabled-subtle"]};
`;

export const StyledCheckedIcon = styled(SquareTickFillIcon)<StyleProps>`
    ${BaseIconStyles}
    color: ${(props) =>
        props.$disabled
            ? Colour["icon-disabled-subtle"](props)
            : Colour["icon-selected"](props)};
`;

export const StyledInteremediateIcon = styled(MinusSquareFillIcon)<StyleProps>`
    ${BaseIconStyles}
    color: ${(props) =>
        props.$disabled
            ? Colour["icon-disabled-subtle"](props)
            : Colour["icon-selected"](props)};
`;

export const Input = styled.input<CheckboxProps>`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    &:hover
        + ${StyledUncheckedIcon},
        &:hover
        + ${StyledCheckedIcon},
        &:hover
        + ${StyledInteremediateIcon} {
        color: ${(props) => !props.disabled && Colour["icon-hover"](props)};
    }
`;
