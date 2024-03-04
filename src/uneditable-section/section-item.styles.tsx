import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { Text } from "../text";
import { UneditableSectionItemDisplayWidth } from "./types";
import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";

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

export const IconContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Color.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`;

export const Clickable = styled.button`
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
`;

// -----------------------------------------------------------------------------
// LOADING DISPLAY
// -----------------------------------------------------------------------------
export const LoadingLabel = styled(Text.Body)`
    color: ${Color.Neutral[3]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Color.Neutral[3]} transparent transparent transparent;
    }
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------
export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${Color.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`;

export const ErrorLabel = styled(Text.Body)`
    color: ${Color.Validation.Orange.Text};
`;

export const TryAgainLabel = styled(Text.Body)`
    color: ${Color.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`;
