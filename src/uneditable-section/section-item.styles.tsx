import styled, { css } from "styled-components";
import { UneditableSectionItemDisplayWidth } from "./types";
import { MediaQuery } from "../media";

// =============================================================================
// STYLING INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $widthStyle: UneditableSectionItemDisplayWidth;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.li<ContainerStyleProps>`
    display: flex;
    flex-direction: column;

    ${(props) => {
        switch (props.$widthStyle) {
            case "half":
                return css`
                    grid-column: auto / span 4;
                `;
            case "full":
                return css`
                    grid-column: auto / span 8;
                `;
        }
    }}

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: auto / span 8;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: auto / span 4;
    }
`;
