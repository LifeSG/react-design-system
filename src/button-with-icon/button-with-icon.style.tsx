import styled from "styled-components";
import { Main } from "../button/button.style";
import { MainStyleProps } from "../button/types";
import { ButtonIconPosition } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export interface MainStylePropsWithIcon extends MainStyleProps {
    $buttonIcon: JSX.Element;
    $buttonIconPosition?: ButtonIconPosition | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const MainButtonWithIcon = styled(Main)<MainStylePropsWithIcon>`
    flex-direction: ${(props) =>
        props.$buttonIconPosition === "right" ? "row-reverse" : "row"};
    gap: 0.5rem;
`;
