import styled from "styled-components";
import { Colour, Font, Motion, Spacing } from "../../theme";
import { BasicButton } from "../input-wrapper/input-wrapper";
import { DropdownVariantType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $expanded?: boolean;
    $variant?: DropdownVariantType;
}

// =============================================================================
// STYLING
// =============================================================================
export const Selector = styled(BasicButton)<StyleProps>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Spacing["spacing-16"]};

    ${(props) =>
        props.$variant === "small"
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}

    &:disabled {
        cursor: not-allowed;
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
