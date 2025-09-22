import styled, { css } from "styled-components";
import { Colour, Font, Motion, Spacing } from "../../theme";
import { BasicButton } from "../input-wrapper/input-wrapper";
import { DropdownVariantType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $expanded?: boolean;
    $variant?: DropdownVariantType;
    $readOnly?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Selector = styled(BasicButton)<StyleProps>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;
    padding: ${(props) =>
        props.$readOnly ? `0 ${Spacing["spacing-16"]}` : Spacing["spacing-16"]};

    ${(props) =>
        props.$variant === "small"
            ? css`
                  ${Font["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `
            : css`
                  ${Font["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

export const IconContainer = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};

    svg {
        color: ${Colour["icon"]};
        height: 1em;
        width: 1em;
    }
`;
