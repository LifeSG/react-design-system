import styled, { css } from "styled-components";
import { V3_Colour, V3_Font, V3_Motion, V3_Spacing } from "../../v3_theme";
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
    gap: ${V3_Spacing["spacing-8"]};
    width: 100%;
    padding: ${(props) =>
        props.$readOnly
            ? `0 ${V3_Spacing["spacing-16"]}`
            : V3_Spacing["spacing-16"]};

    ${(props) =>
        props.$variant === "small"
            ? css`
                  ${V3_Font["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `
            : css`
                  ${V3_Font["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${V3_Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

export const IconContainer = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: transform ${V3_Motion["duration-250"]}
        ${V3_Motion["ease-default"]};

    svg {
        color: ${V3_Colour["icon"]};
        height: 1em;
        width: 1em;
    }
`;
