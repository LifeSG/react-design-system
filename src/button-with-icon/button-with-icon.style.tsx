import styled from "styled-components";
import { Main } from "../button/button.style";
import { ButtonIconPosition } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export type MainButtonStyle =
    | "default"
    | "disabled"
    | "secondary"
    | "light"
    | "link";

export type MainButtonSize = "default" | "small" | "large";

export interface MainStyleProps {
    $buttonStyle: MainButtonStyle;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $buttonIsDanger?: boolean;
}

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
