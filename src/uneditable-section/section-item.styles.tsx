import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import styled, { css } from "styled-components";

import { Alert } from "../alert";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { V3_Colour, V3_Font, V3_MediaQuery } from "../v3_theme";
import type { UneditableSectionItemDisplayWidth } from "./types";

// =============================================================================
// STYLING INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $widthStyle: UneditableSectionItemDisplayWidth;
    $fullWidth?: boolean | undefined;
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
                    grid-column: auto / span ${props.$fullWidth ? 1 : 4};
                `;
            case "full":
                return css`
                    grid-column: auto / span ${props.$fullWidth ? 2 : 8};
                `;
        }
    }}

    ${V3_MediaQuery.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`;

export const IconContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${V3_Colour["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${V3_Font.Spec["body-size-baseline"]};
        height: ${V3_Font.Spec["body-size-baseline"]};
    }
`;

export const Clickable = styled.button`
    ${V3_Font["body-baseline-regular"]}
    color: ${V3_Colour["text"]};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`;

// -----------------------------------------------------------------------------
// LOADING DISPLAY
// -----------------------------------------------------------------------------
export const LoadingLabel = styled.span`
    color: ${V3_Colour["text-disabled"]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    color: ${V3_Colour["text-disabled"]};
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------
export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${V3_Colour["icon-warning"]};
    margin-right: 0.5rem;
    height: ${V3_Font.Spec["body-size-baseline"]};
    width: ${V3_Font.Spec["body-size-baseline"]};
`;

export const ErrorLabel = styled.span`
    color: ${V3_Colour["text-warning"]};
`;

export const TryAgainLabel = styled.span`
    ${V3_Font["body-baseline-semibold"]}
    color: ${V3_Colour["hyperlink"]};
    text-decoration: underline;
    margin-left: 0.5rem;
`;

export const StyledAlert = styled(Alert)`
    margin-top: 0.5rem;
`;
