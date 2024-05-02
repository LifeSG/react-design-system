import styled, { css } from "styled-components";
import { Main } from "../button/button.style";
import { MainStyleProps } from "../button/types";
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
    }

    ${(props) => {
        switch (props.$buttonSizeStyle) {
            case "small":
                return css`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;
            default:
                return css`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `;
        }
    }}
`;
