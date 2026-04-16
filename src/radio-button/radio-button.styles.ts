import { CircleDotIcon, CircleIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";

import { Colour, Motion } from "../theme";
import type { RadioButtonSize } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $displaySize?: RadioButtonSize | undefined;
}

interface InputStyleProps {
    $disabledVisual?: boolean | undefined;
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
            ? Colour["icon-disabled-subtle"]
            : Colour["icon-subtle"]};
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const StyledCheckedIcon = styled(CircleDotIcon)<StyleProps>`
    height: 100%;
    width: 100%;
    color: ${(props) =>
        props.$disabled
            ? Colour["icon-selected-disabled"]
            : Colour["icon-selected"]};

    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const Input = styled.input<InputStyleProps>`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${(props) => (props.$disabledVisual ? "not-allowed" : "pointer")};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${StyledUnCheckedIcon}, &:hover + ${StyledCheckedIcon} {
        @media (pointer: fine) {
            color: ${(props) => !props.$disabledVisual && Colour["icon-hover"]};
        }
    }
`;
