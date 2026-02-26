import styled, { css } from "styled-components";
import { RadioButtonProps, RadioButtonSize } from "./types";
import { V3_Colour, V3_Motion } from "../v3_theme";
import { CircleDotIcon, CircleIcon } from "@lifesg/react-icons";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $displaySize?: RadioButtonSize | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => {
        if (props.$displaySize === "small") {
            return css`
                height: 1.5rem;
                width: 1.5rem;
            `;
        } else {
            return css`
                height: 2rem;
                width: 2rem;
            `;
        }
    }}
    position: relative;
`;

export const StyledUnCheckedIcon = styled(CircleIcon)<StyleProps>`
    height: 100%;
    width: 100%;
    color: ${(props) =>
        props.$disabled
            ? V3_Colour["icon-disabled-subtle"](props)
            : V3_Colour["icon-subtle"](props)};
    transition: ${V3_Motion["duration-150"]} ${V3_Motion["ease-default"]};
`;

export const StyledCheckedIcon = styled(CircleDotIcon)<StyleProps>`
    height: 100%;
    width: 100%;
    color: ${(props) =>
        props.$disabled
            ? V3_Colour["icon-selected-disabled"](props)
            : V3_Colour["icon-selected"](props)};

    transition: ${V3_Motion["duration-150"]} ${V3_Motion["ease-default"]};
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

    &:hover + ${StyledUnCheckedIcon}, &:hover + ${StyledCheckedIcon} {
        @media (pointer: fine) {
            color: ${(props) =>
                !props.disabled && V3_Colour["icon-hover"](props)};
        }
    }
`;
