import styled from "styled-components";
import { Main, MainStyleProps } from "../button/button.style";
import { ButtonIconPosition } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export interface MainStylePropsWithIcon extends MainStyleProps {
    $buttonIconPosition?: ButtonIconPosition | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const MainButtonWithIcon = styled(Main)<MainStylePropsWithIcon>`
    flex-direction: ${(props) =>
        props.$buttonIconPosition === "right" ? "row-reverse" : "row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;
