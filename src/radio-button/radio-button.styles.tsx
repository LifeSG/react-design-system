import styled from "styled-components";
import { RadioButtonProps } from "./types";
import { Colour, Motion } from "../theme";
import { CircleDotIcon, CircleIcon } from "@lifesg/react-icons";

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
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const StyledUnCheckedIcon = styled(CircleIcon)<StyleProps>`
    height: 100%;
    width: 100%;
    color: ${(props) =>
        props.$disabled
            ? Colour["icon-disabled-subtle"](props)
            : Colour["icon-subtle"](props)};
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const StyledCheckedIcon = styled(CircleDotIcon)<StyleProps>`
    height: 100%;
    width: 100%;
    color: ${(props) =>
        props.$disabled
            ? Colour["icon-selected-disabled"](props)
            : Colour["icon-selected"](props)};

    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const Input = styled.input<RadioButtonProps>`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${StyledUnCheckedIcon} {
        color: ${(props) => !props.disabled && Colour["icon-hover"](props)};
    }
`;
